import { SectionContainer } from "@/components/organisms/sectionContainer";
import { Landing } from "@/components/templates/landing";
import { SnapSectionContainer } from "@/components/templates/snapSectionContainer";
import "animate.css";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Ben Horner&apos;s Portfolio</title>
      </Head>
      <Landing />
      <SnapSectionContainer>
        <SectionContainer />
      </SnapSectionContainer>
    </>
  );
}
