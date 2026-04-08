import { DashboardNav } from "@/components/dashboard-nav";
import { LogoutForm } from "@/components/logout-form";
import { requireRole } from "@/lib/auth";

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  const session = requireRole("BUSINESS");

  return (
    <div className="page stack">
      <header className="stack">
        <p style={{ margin: 0, color: "#666", fontSize: "0.85rem" }}>Business dashboard</p>
        <h1 style={{ margin: 0 }}>{session.email}</h1>
        <DashboardNav />
        <LogoutForm />
      </header>
      {children}
    </div>
  );
}
