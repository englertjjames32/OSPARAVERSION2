import { SectionCard } from "@/components/section-card";

export default function BusinessReferralsPage() {
  return (
    <SectionCard title="Referral Options">
      <label>
        Reward type
        <select className="select" defaultValue="text">
          <option value="text">Custom text</option>
          <option value="percent">Percent</option>
          <option value="fixed">Fixed amount</option>
        </select>
      </label>
      <label>
        Reward text
        <input className="input" defaultValue="$20 credit for each referral that books" />
      </label>
    </SectionCard>
  );
}
