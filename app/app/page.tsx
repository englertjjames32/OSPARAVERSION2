import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="page stack">
      <h1>OSPARA V2</h1>
      <p>Phase 2 starter: public pages, business dashboard, and admin controls.</p>
      <div className="card stack">
        <Link href="/b/demo-auto">Open demo business page</Link>
        <Link href="/login/business">Business login</Link>
        <Link href="/login/admin">Admin login</Link>
      </div>
    </div>
  );
}
