import Link from "next/link";

export function AdminNav() {
  return (
    <nav className="nav">
      <Link href="/admin">Dashboard</Link>
      <Link href="/admin/businesses">Businesses</Link>
    </nav>
  );
}
