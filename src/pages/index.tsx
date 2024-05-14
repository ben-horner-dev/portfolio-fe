import { Hero } from "@/components/organisms/Hero/Hero";
import "animate.css";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Ben Horner&apos;s Portfolio</title>
      </Head>
      <Hero />
    </>
  );
}
