import { SectionCard } from "@/components/section-card";
import { findBusinessBySlug } from "@/lib/demo-data";

export default function BusinessHomePage({ params }: { params: { businessSlug: string } }) {
  const business = findBusinessBySlug(params.businessSlug)!;

  return (
    <SectionCard title="Business Home">
      <p>{business.tagline}</p>
      <p>{business.description}</p>
    </SectionCard>
  );
}
