"use client";

import { useRouter } from "next/navigation";
import { logoutAdmin } from "./login/actions";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAdmin();
    router.push("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="btn-ghost px-4 py-2 text-sm ml-4 border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
    >
      Logout
    </button>
  );
}
