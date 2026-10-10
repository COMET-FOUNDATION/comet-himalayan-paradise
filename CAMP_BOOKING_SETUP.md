# Camp booking setup

Camp booking requests are stored in the existing PostgreSQL database through the NestJS/Prisma backend. The Next.js route validates the activity IDs against `campActivityCatalog`, checks dates and the six-per-day limit, then forwards the validated request to the private backend endpoint. The backend independently checks the date range, participant data, duplicate selections, and per-day limit before storing a request with `PENDING` status.

## Configure a development or production environment

1. Configure `DATABASE_URL` in `backend/.env` with the existing Supabase/PostgreSQL connection string.
2. Set a strong random `CHP_BOOKING_API_KEY` in both `backend/.env` and the Next.js server environment. Keep it server-only; do not use a `NEXT_PUBLIC_` variable.
3. Set `CHP_BOOKING_API_URL` in the Next.js server environment to the backend origin, such as `http://localhost:4001` locally or the deployed private backend origin in production.
4. Apply the schema and generate Prisma Client from the `backend` directory:

   ```sh
   npx prisma migrate deploy
   npx prisma generate
   ```

5. Deploy/restart the backend and Next.js app with those variables configured.

The Contact CHP `Book for Holiday Camp` link and every individual activity `Book a Camp Activity` link use this shared flow. A saved request receives a `CHP-...` reference and remains `PENDING`; submission does not reserve activities or accommodation. Email notifications are not configured in this project and are not simulated.

If the backend URL/key or database migration is not configured, the booking page remains usable through review and displays an error at submission rather than reporting a false success.
