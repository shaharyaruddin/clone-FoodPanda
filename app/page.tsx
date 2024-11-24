import React from "react";
import SectionHero from "./Sections/SectionHero";
import PageWrapper from "./Components/PageWrapper";
import SectionPrepareFood from "./Sections/SectionHero/SectionPrepareFood";
import SectionCity from "./Sections/SectionCity";

export default function page() {
  return (
    <>
      <PageWrapper>
        <SectionHero />
        <SectionPrepareFood />
        <SectionCity />
      </PageWrapper>
    </>
  );
}
