import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

// Revalidate the page every 60 seconds (or 0 to be completely dynamic)
export const revalidate = 0;

export default async function AdminMessagesPage() {
  const session = cookies().get("admin_session");
  
  if (!session || session.value !== "authenticated") {
    redirect("/admin/login");
  }

  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-bg-void text-text-primary p-6 md:p-12 font-inter">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-grotesk font-bold text-4xl gradient-text mb-2">Admin Dashboard</h1>
            <p className="text-text-secondary">View and manage incoming contact form messages.</p>
          </div>
          <div className="flex items-center">
            <div className="bg-bg-elevated border border-border-subtle rounded-xl px-4 py-2">
              <span className="text-cyan-bright font-mono font-bold text-xl">{messages.length}</span>
              <span className="text-text-muted text-sm ml-2">Total Messages</span>
            </div>
            <LogoutButton />
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center border-border-subtle">
            <p className="text-text-muted text-lg">No messages received yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <div key={msg.id} className="glass-card rounded-2xl p-6 border border-border-subtle hover:border-gold-bright/30 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <div>
                    <h3 className="font-grotesk font-bold text-xl text-gold-bright">{msg.name}</h3>
                    <a href={`mailto:${msg.email}`} className="text-cyan-bright hover:underline text-sm font-mono">
                      {msg.email}
                    </a>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary font-medium">{msg.subject}</div>
                    <div className="text-xs text-text-muted mt-1 font-mono">
                      {msg.createdAt.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                {msg.budget && (
                  <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-full mb-4">
                    Budget: {msg.budget}
                  </div>
                )}
                
                <div className="bg-bg-elevated rounded-xl p-4 border border-border-subtle">
                  <p className="text-text-primary text-sm whitespace-pre-wrap leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
