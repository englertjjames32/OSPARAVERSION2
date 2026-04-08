import { findBusinessBySlug } from "@/lib/demo-data";
import { notFound } from "next/navigation";
import { PublicNav } from "@/components/public-nav";

export default function BusinessPublicLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { businessSlug: string };
}) {
  const business = findBusinessBySlug(params.businessSlug);
  if (!business || !business.isActive) notFound();

  return (
    <div className="page stack">
      <header className="stack">
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#666" }}>Public business page</p>
        <h1 style={{ margin: 0 }}>{business.name}</h1>
        <PublicNav slug={business.slug} />
      </header>
      {children}
    </div>
  );
}
