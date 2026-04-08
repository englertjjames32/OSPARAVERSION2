import Link from "next/link";

export function DashboardNav() {
  return (
    <nav className="nav">
      <Link href="/dashboard">Overview</Link>
      <Link href="/dashboard/settings">Settings</Link>
      <Link href="/dashboard/referrals">Referrals</Link>
      <Link href="/dashboard/requests">Requests</Link>
      <Link href="/dashboard/promo">Promo</Link>
      <Link href="/dashboard/install-share">Install/Share</Link>
    </nav>
  );
}
