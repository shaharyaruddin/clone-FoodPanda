import { cityList } from "@/app/common/cities";
import PageWrapper from "@/app/Components/PageWrapper";
import SectionCities from "@/app/Sections/SectionCities";
import SectionFaq from "@/app/Sections/SectionFaq";
import SectionHero from "@/app/Sections/SectionHero";
import { notFound } from "next/navigation";

const API_URL = "https://dummyjson.com/recipes";

const page = async ({ params }: any) => {
  const { cityName } = params;

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

export const generateStaticParams = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.recipes.map((item: any) => {
    return {
      cityName: item.id.toString(),
    };
  });
};
