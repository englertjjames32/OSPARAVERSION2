# OSPARA Version 2 — Phase 1 Foundation Blueprint

## 1) App Architecture (Phase 1)

### Product surfaces

OSPARA V2 has three distinct surfaces:

1. **Public Customer Surface (no login)**
   - Mobile-first business profile pages customers can visit directly.
   - Includes: home, reviews, referrals, booking, promo, add-to-phone instructions.

2. **Business Surface (authenticated business users)**
   - Single dashboard for each business to configure customer-facing content and links.

3. **Admin Surface (authenticated admin users)**
   - Internal dashboard to view businesses and activate/deactivate accounts.

### Architectural style

Use a **modular monolith** with clear domain boundaries:

- `auth` module (admin + business login only)
- `businesses` module (business profile/configuration)
- `public-pages` module (customer-facing pages)
- `admin` module (platform controls)

Why this for Phase 1:

- Fastest path to ship.
- Low ops complexity.
- Easy future split into services if needed.

### Rendering model

- Prefer **server-rendered pages + minimal client interactivity** for speed, SEO, and reliability.
- Keep client state lightweight.
- Prioritize fast first load on mobile networks.

### Access model

- **No customer accounts**.
- **Business users** can only access their own dashboard data.
- **Admins** can access platform-wide business management.

---

## 2) Route Structure (Phase 1)

### Public (no auth)

All pages are under a stable business slug:

- `GET /b/:businessSlug` → business home page
- `GET /b/:businessSlug/reviews` → reviews page
- `GET /b/:businessSlug/referrals` → referrals page
- `GET /b/:businessSlug/book` → book service page
- `GET /b/:businessSlug/promo` → promo page
- `GET /b/:businessSlug/add-to-phone` → add-to-phone instructions page

### Authentication

- `GET /login/admin`
- `POST /login/admin`
- `GET /login/business`
- `POST /login/business`
- `POST /logout`

### Business dashboard (auth: business)

- `GET /dashboard`
- `PATCH /dashboard/business-info`
- `PATCH /dashboard/review-links`
- `PATCH /dashboard/referral-reward`
- `PATCH /dashboard/booking-email`
- `PATCH /dashboard/promo-text`
- `GET /dashboard/public-link`

### Admin dashboard (auth: admin)

- `GET /admin`
- `GET /admin/businesses`
- `PATCH /admin/businesses/:businessId/status` (activate/deactivate)

---

## 3) Data Model (Phase 1)

Use a relational schema (PostgreSQL).

### `users`

- `id` (UUID, PK)
- `email` (unique, indexed)
- `password_hash`
- `role` (`ADMIN` | `BUSINESS`)
- `business_id` (nullable FK → businesses.id; null for admins)
- `is_active` (boolean, default true)
- `created_at`, `updated_at`

### `businesses`

- `id` (UUID, PK)
- `name`
- `slug` (unique, indexed)
- `is_active` (boolean, default true)
- `logo_url` (nullable)
- `primary_color` (nullable)
- `contact_phone` (nullable)
- `contact_email` (nullable)
- `address_text` (nullable)
- `booking_email` (nullable)
- `promo_text` (nullable)
- `referral_reward_type` (nullable enum: `PERCENT` | `FIXED` | `TEXT`)
- `referral_reward_value` (nullable)
- `created_at`, `updated_at`

### `review_links`

- `id` (UUID, PK)
- `business_id` (FK, indexed)
- `label` (e.g., Google, Yelp)
- `url`
- `sort_order` (int)
- `is_active` (boolean)
- `created_at`, `updated_at`

### Optional `audit_logs` (recommended even in Phase 1)

- `id` (UUID, PK)
- `actor_user_id` (FK users.id)
- `action` (string)
- `target_type` (string)
- `target_id` (UUID/string)
- `metadata_json` (jsonb)
- `created_at`

### Notes

- Keep schema intentionally small.
- No customer profile table.
- No invite-code table.
- No onboarding workflow tables.

---

## 4) Folder Structure (Phase 1)

```txt
ospara-v2/
  apps/
    web/
      src/
        app/
          (public)/
            b/[businessSlug]/
              page.tsx
              reviews/page.tsx
              referrals/page.tsx
              book/page.tsx
              promo/page.tsx
              add-to-phone/page.tsx
          (auth)/
            login/
              admin/page.tsx
              business/page.tsx
          (business)/
            dashboard/
              page.tsx
          (admin)/
            admin/
              page.tsx
              businesses/page.tsx
          api/
            auth/
            dashboard/
            admin/
        components/
          ui/
          layout/
          forms/
        features/
          auth/
          businesses/
          public-pages/
          admin/
        lib/
          db/
          auth/
          validation/
          utils/
        styles/
      prisma/
        schema.prisma
      tests/
        unit/
        integration/
  docs/
    PHASE_1_FOUNDATION.md
