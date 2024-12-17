"use client";
import { cityList } from "@/app/common/cities";
import PageWrapper from "@/app/Components/PageWrapper";
import SectionCities from "@/app/Sections/SectionCities";
import SectionFaq from "@/app/Sections/SectionFaq";
import SectionHero from "@/app/Sections/SectionHero";
import { notFound } from "next/navigation";
import React from "react";

const page = ({ params }: any) => {
  const { cityName } = params;

  const existingCities = cityList.map((item) => item.name.toLowerCase());

  if (!existingCities.includes(cityName.toLowerCase())) {
    return notFound();
  }

  return (
    <PageWrapper>
      <SectionHero />
      <SectionCities params={cityName} />
      <SectionFaq />
    </PageWrapper>
  );
};

export default page;
