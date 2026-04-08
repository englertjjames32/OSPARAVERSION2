import Link from "next/link";

type Props = { slug: string };

export function PublicNav({ slug }: Props) {
  return (
    <nav className="nav">
      <Link href={`/b/${slug}`}>Home</Link>
      <Link href={`/b/${slug}/reviews`}>Reviews</Link>
      <Link href={`/b/${slug}/referrals`}>Referrals</Link>
      <Link href={`/b/${slug}/book`}>Book</Link>
      <Link href={`/b/${slug}/promo`}>Promo</Link>
      <Link href={`/b/${slug}/add-to-phone`}>Add to phone</Link>
    </nav>
  );
}
