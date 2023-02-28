import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";

export const config = {
  api: {
    externalResolver: true,
  },
};

export const authOptions: NextAuthOptions = {
  adapter: SupabaseAdapter({
    url:
      process.env.NODE_ENV === "development"
        ? "http://localhost"
        : process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_KEY!,
  }),
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
};

export default NextAuth(authOptions);
