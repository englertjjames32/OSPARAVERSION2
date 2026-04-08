import { SectionCard } from "@/components/section-card";
import { findBusinessBySlug } from "@/lib/demo-data";

export default function BookPage({ params }: { params: { businessSlug: string } }) {
  const business = findBusinessBySlug(params.businessSlug)!;

  return (
    <SectionCard title="Book Service">
      <p>Request your appointment by email.</p>
      <a href={`mailto:${business.bookingEmail}`}>{business.bookingEmail}</a>
    </SectionCard>
  );
}
