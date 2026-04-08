import { SectionCard } from "@/components/section-card";
import { demoBusinesses } from "@/lib/demo-data";

export default function AdminBusinessesPage() {
  return (
    <SectionCard title="Businesses">
      {demoBusinesses.map((business) => (
        <article key={business.id} className="card stack" style={{ marginTop: "0.5rem" }}>
          <strong>{business.name}</strong>
          <span>Slug: {business.slug}</span>
          <span>Status: {business.isActive ? "Active" : "Inactive"}</span>
          <button className="btn btn-secondary" type="button">
            {business.isActive ? "Deactivate" : "Activate"}
          </button>
        </article>
      ))}
    </SectionCard>
  );
}
