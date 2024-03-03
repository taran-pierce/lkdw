# lkdw
storefront frontend and backend for selling random things online!

## Dependencies
- Frontend
  - Next.js
  - sass
  - ApolloClient
  - GraphQL
  - Stripe
  - TypeScript
  - Vercel
- Backend
  - Keystone.js
  - Next.js
  - Vercel Postgres
  - Heroku
  - S3

### Setup
- Clone the repository
- cd into `/frontend/` and `npm install`
  - set up `.env.local`
- cd into `/backend/` and `npm install`
  - set up `.env`
- start backend first (from /backend/): `npm run dev`
- start frontend second (from /frontend/): `npm run dev`

### Notes
- Pushes to `main` will trigger CI/CD pipeline for both:
  - Frontend
    - Deploys through Vercel
  - Backend
    - Deploys through Heroku
    - Connects to a Vercel Database
    - Images stored on AWS S3
  