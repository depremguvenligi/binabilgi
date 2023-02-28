import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { OLMapProvider } from "@/lib/useOlMap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OLMapProvider>
      <Component {...pageProps} />
    </OLMapProvider>
  );
}
