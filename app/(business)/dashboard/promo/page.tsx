import { SectionCard } from "@/components/section-card";

export default function BusinessPromoPage() {
  return (
    <SectionCard title="Promo Text">
      <label>
        Public promo message
        <textarea className="textarea" rows={4} defaultValue="New customers save 15% this week with code SHINE15." />
      </label>
    </SectionCard>
  );
}
