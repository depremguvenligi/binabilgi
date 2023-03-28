import Head from "next/head";

import ContentLinkGridAndCTA from "@/components/ContentLinkGridAndCTA";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import UPSGrid from "@/components/USPGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bina Bilgi</title>
        <meta name="description" content="Bina Bilgi Sistemi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Hero />
        <ContentLinkGridAndCTA />
        <UPSGrid />
      </Layout>
    </>
  );
}
