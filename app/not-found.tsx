import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page stack">
      <h1>Business page unavailable</h1>
      <p>This business link is not active or does not exist.</p>
      <Link href="/">Return home</Link>
    </div>
  );
}
