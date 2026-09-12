# Prerna Foundation

A production-oriented Next.js and MongoDB foundation for the Prerna Foundation website and admin panel.

## Setup

1. Copy `.env.example` to `.env` and set `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, and a temporary `ADMIN_PASSWORD` (used only by the seed script).
2. Run `npm install` then `npm run seed`.
3. Start with `npm run dev`, open `http://localhost:3000`, and sign in at `/admin`.

Set Razorpay and SMTP variables before enabling real payments or email delivery. Payment success is verified server-side by Razorpay HMAC before records are marked successful.

## Environment variables

Required in production: `MONGODB_URI`, `JWT_SECRET`, `NEXT_PUBLIC_SITE_URL`.

Required to seed the initial administrator: `ADMIN_EMAIL`, `ADMIN_PASSWORD`.

Required to accept online donations: `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`.

Optional email delivery: `SMTP_HOST`, `SMTP_PORT` (defaults to `587`), `SMTP_SECURE` (`true` for implicit TLS), `SMTP_USER`, `SMTP_PASSWORD`, `FROM_EMAIL`, and `ADMIN_EMAIL` (for new-contact notifications). Contact replies and donation records are saved even when email is unavailable; their delivery status is reported separately.

## Deployment

Deploy on a Node-capable host (Vercel, Render, or VPS), configure all secrets in host environment settings, use MongoDB Atlas or a secured MongoDB instance, and connect a transactional SMTP provider. Set HTTPS before production use.

## Backup

Use MongoDB Atlas scheduled backups or server-side `mongodump`; export functionality should be restricted to super admins. Never place database dumps or `.env` files in source control.
