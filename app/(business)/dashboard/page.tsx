import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { findBusinessBySlug } from "@/lib/demo-data";
import { requireRole } from "@/lib/auth";

export default function BusinessDashboardPage() {
  const session = requireRole("BUSINESS");
  const business = findBusinessBySlug(session.businessSlug || "");

  return (
    <SectionCard title="Dashboard Overview">
      <p>{business?.name}</p>
      <p>Public Link:</p>
      <Link href={`/b/${business?.slug}`}>{`/b/${business?.slug}`}</Link>
    </SectionCard>
  );
}
