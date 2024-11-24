import React from "react";
import SectionHero from "./Sections/SectionHero";
import PageWrapper from "./Components/PageWrapper";
import SectionPrepareFood from "./Sections/SectionHero/SectionPrepareFood";

export default function page() {
  return (
    <>
      <PageWrapper>
        <SectionHero />
        <SectionPrepareFood/>
      </PageWrapper>
    </>
  );
}
