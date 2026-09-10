<<<<<<< HEAD
# prerna
=======
# Prerna Foundation

A production-oriented Next.js and MongoDB foundation for the Prerna Foundation website and admin panel.

## Setup

1. Copy `.env.example` to `.env` and set `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, and a temporary `ADMIN_PASSWORD` (used only by the seed script).
2. Run `npm install` then `npm run seed`.
3. Start with `npm run dev`, open `http://localhost:3000`, and sign in at `/admin`.

Set Razorpay and SMTP variables before enabling real payments or email delivery. Payment success is verified server-side by Razorpay HMAC before records are marked successful.

## Deployment

Deploy on a Node-capable host (Vercel, Render, or VPS), configure all secrets in host environment settings, use MongoDB Atlas or a secured MongoDB instance, and connect a transactional SMTP provider. Set HTTPS before production use.

## Backup

Use MongoDB Atlas scheduled backups or server-side `mongodump`; export functionality should be restricted to super admins. Never place database dumps or `.env` files in source control.
>>>>>>> 08faa5b (Initial project upload)
