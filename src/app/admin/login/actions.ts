"use server";

import { cookies } from "next/headers";

export async function loginAdmin(email: string, pass: string) {
  const ADMIN_EMAIL = "ashutoshshekhar37@gmail.com";
  const ADMIN_PASS = "Ashutosh@1234sa";

  if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
    // Set a secure cookie that expires in 1 day
    cookies().set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    return { success: true };
  }

  return { success: false, error: "Invalid email or password" };
}

export async function logoutAdmin() {
  cookies().delete("admin_session");
  return { success: true };
}
