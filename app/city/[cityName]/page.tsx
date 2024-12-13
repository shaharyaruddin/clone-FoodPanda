import PageWrapper from "@/app/Components/PageWrapper";
import SectionCities from "@/app/Sections/SectionCities";
import SectionFaq from "@/app/Sections/SectionFaq";
import SectionHero from "@/app/Sections/SectionHero";
import React from "react";

const page = () => {
  return (
    <PageWrapper>
      <SectionHero />
      <SectionCities  />
      <SectionFaq />
    </PageWrapper>
  );
};



export default page;


