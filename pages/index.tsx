import Head from "next/head";
import Layout from "../components/layouts/Layouts";

export default function Home() {
  return (
    <>
      <Head>
        <title className="">Aqually</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </>
  );
}
