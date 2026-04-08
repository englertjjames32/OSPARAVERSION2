import { SectionCard } from "@/components/section-card";
import { findBusinessBySlug } from "@/lib/demo-data";

export default function PromoPage({ params }: { params: { businessSlug: string } }) {
  const business = findBusinessBySlug(params.businessSlug)!;

  return (
    <SectionCard title="Current Promo">
      <p>{business.promoText}</p>
    </SectionCard>
  );
}
