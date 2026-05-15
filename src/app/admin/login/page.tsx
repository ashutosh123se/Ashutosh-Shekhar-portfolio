"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "./actions";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await loginAdmin(email, password);
    
    if (result.success) {
      router.push("/admin");
    } else {
      setError(result.error || "Invalid credentials");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-void flex items-center justify-center p-6">
      <div className="glass-card w-full max-w-md p-8 rounded-2xl border border-border-subtle relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-bright to-cyan-bright" />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-grotesk font-bold text-text-primary mb-2">Admin Portal</h1>
          <p className="text-text-secondary text-sm">Please log in to access the dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-gold-bright transition-colors"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-gold-bright transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold w-full py-3 mt-4 text-bg-void disabled:opacity-50 flex justify-center items-center font-bold"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
