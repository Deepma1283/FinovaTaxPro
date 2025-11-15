# IndiaFilings-like Next.js Starter (Full)

## What this includes
- Next.js (app router) skeleton with Tailwind CSS
- Data-driven services & categories (`data/services.js`)
- NavBar with hover dropdowns
- Home, Category pages, Service detail pages
- Checkout skeleton with client redirect to login if unauthenticated
- Login/Register pages (demo)
- Placeholder server API to create payment sessions (`/api/checkout`)

## How to run
1. Install dependencies:
   ```
   npm install
   ```
2. Run development server:
   ```
   npm run dev
   ```
3. Open http://localhost:3000

## Next steps for production
- Add authentication (NextAuth.js or custom) and protect checkout flow.
- Integrate payments:
  - Stripe: create checkout session server-side, return session ID and redirect client.
  - Razorpay/Paytm: integrate their server SDKs and webhooks.
- Add a database (Postgres, MongoDB) to persist orders, users and service content.
- Add file upload for documents and an admin panel to manage orders.

## Notes
- This project is a starter skeleton. Replace demo alerts and mock auth checks with real implementations.
