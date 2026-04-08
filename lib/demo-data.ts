export type UserRole = "ADMIN" | "BUSINESS";

export type DemoUser = {
  email: string;
  password: string;
  role: UserRole;
  businessSlug?: string;
};

export type DemoBusiness = {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
  tagline: string;
  description: string;
  bookingEmail: string;
  promoText: string;
  referralReward: string;
  reviewLinks: Array<{ label: string; url: string }>;
};

export const demoUsers: DemoUser[] = [
  { email: "admin@ospara.dev", password: "Admin123!", role: "ADMIN" },
  {
    email: "owner@demoauto.com",
    password: "Business123!",
    role: "BUSINESS",
    businessSlug: "demo-auto"
  }
];

export const demoBusinesses: DemoBusiness[] = [
  {
    id: "biz_001",
    name: "Demo Auto Spa",
    slug: "demo-auto",
    isActive: true,
    tagline: "Premium mobile detailing",
    description:
      "We help busy families and professionals keep vehicles spotless with fast, premium detailing.",
    bookingEmail: "bookings@demoauto.com",
    promoText: "New customers save 15% this week with code SHINE15.",
    referralReward: "$20 credit for each referral that books",
    reviewLinks: [
      { label: "Google", url: "https://google.com" },
      { label: "Yelp", url: "https://yelp.com" }
    ]
  }
];

export function findBusinessBySlug(slug: string) {
  return demoBusinesses.find((business) => business.slug === slug);
}
