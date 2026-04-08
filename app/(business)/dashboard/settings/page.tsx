import { SectionCard } from "@/components/section-card";

export default function BusinessSettingsPage() {
  return (
    <SectionCard title="Business Settings">
      <label>
        Business name
        <input className="input" defaultValue="Demo Auto Spa" />
      </label>
      <label>
        Booking email
        <input className="input" defaultValue="bookings@demoauto.com" />
      </label>
    </SectionCard>
  );
}
