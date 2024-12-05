import React from "react";
import PageWrapper from "../Components/PageWrapper";
import SectionHero from "../Sections/SectionHero";
import SectionFaq from "../Sections/SectionFaq";
import SectionCities from "../Sections/SectionCities";

const page = () => {
  return (
    <PageWrapper>
      <SectionHero />
      <SectionCities />
      <SectionFaq />
    </PageWrapper>
  );
};

export default page;
