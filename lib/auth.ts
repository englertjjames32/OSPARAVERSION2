import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { demoUsers, type UserRole } from "@/lib/demo-data";

const SESSION_COOKIE = "ospara_session";

type SessionData = {
  email: string;
  role: UserRole;
  businessSlug?: string;
};

export function validateDemoCredentials(email: string, password: string, role: UserRole) {
  return demoUsers.find((user) => user.email === email && user.password === password && user.role === role);
}

export function createSessionValue(data: SessionData) {
  return Buffer.from(JSON.stringify(data)).toString("base64url");
}

export function readSession(): SessionData | null {
  const cookieStore = cookies();
  const raw = cookieStore.get(SESSION_COOKIE)?.value;
  if (!raw) return null;

  try {
    return JSON.parse(Buffer.from(raw, "base64url").toString("utf-8")) as SessionData;
  } catch {
    return null;
  }
}

export function requireRole(role: UserRole) {
  const session = readSession();
  if (!session || session.role !== role) {
    redirect(role === "ADMIN" ? "/login/admin" : "/login/business");
  }
  return session;
}

export { SESSION_COOKIE };
