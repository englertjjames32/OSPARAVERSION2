import Link from "next/link";
import { SectionCard } from "@/components/section-card";
import { findBusinessBySlug } from "@/lib/demo-data";

export default function ReviewsPage({ params }: { params: { businessSlug: string } }) {
  const business = findBusinessBySlug(params.businessSlug)!;

  return (
    <SectionCard title="Reviews">
      <p>Leave us a review on your favorite platform.</p>
      <ul>
        {business.reviewLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.url} target="_blank">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
