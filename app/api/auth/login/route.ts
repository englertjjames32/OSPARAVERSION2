import { NextResponse } from "next/server";
import { SESSION_COOKIE, createSessionValue, validateDemoCredentials } from "@/lib/auth";

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const role = String(formData.get("role") || "").toUpperCase() as "ADMIN" | "BUSINESS";

  const user = validateDemoCredentials(email, password, role);

  if (!user) {
    const fallback = role === "ADMIN" ? "/login/admin" : "/login/business";
    return NextResponse.redirect(new URL(`${fallback}?error=invalid_credentials`, req.url));
  }

  const session = createSessionValue({ email: user.email, role: user.role, businessSlug: user.businessSlug });
  const destination = user.role === "ADMIN" ? "/admin" : "/dashboard";

  const response = NextResponse.redirect(new URL(destination, req.url));
  response.cookies.set(SESSION_COOKIE, session, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: false
  });

  return response;
}
