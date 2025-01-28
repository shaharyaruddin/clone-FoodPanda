import { cityList } from "@/app/common/cities";
import PageWrapper from "@/app/Components/PageWrapper";
import SectionCities from "@/app/Sections/SectionCities";
import SectionFaq from "@/app/Sections/SectionFaq";
import SectionHero from "@/app/Sections/SectionHero";
import { notFound } from "next/navigation";

const page = async ({ params }: any) => {
  const { cityName } = params;

  // Validate city name
  const existingCities = cityList.map((item) => item.name.toLowerCase());
  if (!existingCities.includes(cityName.toLowerCase())) {
    return notFound();
  }

  // Fetch API data
  let data = [];
  try {
    const response = await fetch("https://dummyjson.com/recipes", { cache: "no-store" });
    const jsonResponse = await response.json();
    data = jsonResponse.recipes; // Assuming the API has a `recipes` field
  } catch (error) {
    console.error("Failed to fetch recipes data:", error);
  }

  return (
    <PageWrapper>
      <SectionHero />
      <SectionCities params={cityName} data={data} />
      <SectionFaq />
    </PageWrapper>
  );
};

export default page;
