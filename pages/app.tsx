import dynamic from "next/dynamic";
import Head from "next/head";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const BinaBilgi = () => {
  return (
    <div>
      <Head>
        <title>Bina Bilgi</title>
      </Head>
      <div className="h-screen">
        <Map />
      </div>
    </div>
  );
};

export default BinaBilgi;
