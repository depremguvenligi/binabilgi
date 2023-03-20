# binabilgi.com contribution

## Getting Started

First, you should follow the Supabase CLI installation instructions [here](https://supabase.com/docs/reference/cli/introduction).

Then, you can run the following commands to start the development server:

```bash
npm run sp start
```

You can find detailed instructions on how to use the Supabase CLI [here](https://supabase.io/docs/cli/commands).

Create an `.env.local` file in the root of the project and fill the `SUPABASE_KEY` variable with the `service_role` value from your `supabase start` output.

Now, you can run the following commands to start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
