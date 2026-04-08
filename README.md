# OSPARA Version 2 (Phase 2 Starter)

A clean, mobile-first Next.js starter for OSPARA V2 with:

- public business pages (no customer login)
- business auth + dashboard shell
- admin auth + dashboard shell
- seed/demo data for quick testing

## Implemented Routes

### Public (no login)
- `/b/demo-auto`
- `/b/demo-auto/reviews`
- `/b/demo-auto/referrals`
- `/b/demo-auto/book`
- `/b/demo-auto/promo`
- `/b/demo-auto/add-to-phone`

### Auth
- `/login/business`
- `/login/admin`

### Business dashboard
- `/dashboard`
- `/dashboard/settings`
- `/dashboard/referrals`
- `/dashboard/requests`
- `/dashboard/promo`
- `/dashboard/install-share`

### Admin dashboard
- `/admin`
- `/admin/businesses`

## Demo Login Credentials

### Business user
- Email: `owner@demoauto.com`
- Password: `Business123!`

### Admin user
- Email: `admin@ospara.dev`
- Password: `Admin123!`

## Local Development

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Open:
   - `http://localhost:3000`

## Seed/Demo Data Source

- Users and business demo data are defined in `lib/demo-data.ts`.

## Notes

- This is the Phase 2 initial structure only.
- Customer login, customer onboarding, and invite codes are intentionally excluded.
