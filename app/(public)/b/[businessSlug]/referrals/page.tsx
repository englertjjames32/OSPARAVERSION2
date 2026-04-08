import { SectionCard } from "@/components/section-card";
import { findBusinessBySlug } from "@/lib/demo-data";

export default function ReferralsPage({ params }: { params: { businessSlug: string } }) {
  const business = findBusinessBySlug(params.businessSlug)!;

  return (
    <SectionCard title="Referrals">
      <p>Share us with a friend and earn rewards.</p>
      <strong>{business.referralReward}</strong>
    </SectionCard>
  );
}
