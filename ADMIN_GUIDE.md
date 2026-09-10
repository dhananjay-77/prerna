# Admin guide

Sign in at `/admin` with the account created by `npm run seed`. Use Projects to add or update a project; its public page is available at its slug. Programs, impact statistics, partners, future goals and gallery items work the same way and are published to the website when saved.

Use Contact requests to read enquiries and reply by email. SMTP must be configured for delivery. Donation records are restricted to Super Admins. Razorpay keys are server environment variables; never paste them into an admin form or browser.

For Google Drive, paste a public Drive link in a project or program’s `driveUrl` field using the API/CMS extension. The platform only previews/links public Drive resources and does not bypass Drive permissions.

Before publishing numerical impact claims, enter verified figures with a year and units. Keep draft/unverified data unpublished until it is confirmed.
