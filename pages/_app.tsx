import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { OLMapProvider } from "@/lib/useOlMap";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
       <OLMapProvider>
      <Component {...pageProps} />
      </OLMapProvider>
    </SessionProvider>
  );
}
