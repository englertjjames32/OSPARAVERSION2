import { AdminNav } from "@/components/admin-nav";
import { LogoutForm } from "@/components/logout-form";
import { requireRole } from "@/lib/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = requireRole("ADMIN");

  return (
    <div className="page stack">
      <header className="stack">
        <p style={{ margin: 0, color: "#666", fontSize: "0.85rem" }}>Admin dashboard</p>
        <h1 style={{ margin: 0 }}>{session.email}</h1>
        <AdminNav />
        <LogoutForm />
      </header>
      {children}
    </div>
  );
}
