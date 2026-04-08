import { SectionCard } from "@/components/section-card";
import { demoBusinesses } from "@/lib/demo-data";

export default function AdminDashboardPage() {
  const active = demoBusinesses.filter((b) => b.isActive).length;

  return (
    <SectionCard title="Platform Overview">
      <p>Total businesses: {demoBusinesses.length}</p>
      <p>Active businesses: {active}</p>
      <p>Inactive businesses: {demoBusinesses.length - active}</p>
    </SectionCard>
  );
}
