"use client";
import PageWrapper from "@/app/Components/PageWrapper";
import SectionCities from "@/app/Sections/SectionCities";
import SectionFaq from "@/app/Sections/SectionFaq";
import SectionHero from "@/app/Sections/SectionHero";
import React from "react";

const page = ({ params }: any) => {
  return (
    <PageWrapper>
      <SectionHero />
      <SectionCities params={params.cityName} />
      <SectionFaq />
    </PageWrapper>
  );
};

export default page;
