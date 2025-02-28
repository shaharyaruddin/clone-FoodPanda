import PageWrapper from "@/app/Components/PageWrapper";
import SectionHero from "@/app/Sections/SectionHero";
import SectionFaq from "@/app/Sections/SectionFaq";
import SectionRestaurants from "@/app/Sections/SectionRestaurants";
import { notFound } from "next/navigation";

// generateStaticParams is only used for dynamic routes in Next.js.
// for example if route is  [cityname], then generateStaticParams should return { cityname: value }
export const generateStaticParams = async () => {
  const fetchCity = await fetch(`${process.env.CITY_API}`);
  const response = await fetchCity.json();
  console.log("response", response);
  return response.map((city: any) => ({
    cityName: city.name,
  }));
};

const CityName = async ({ params }: any) => {
  const cityName = params.cityName;

  // Allowed only api city routes
  const allowedCities = await generateStaticParams();
  const cityNames = allowedCities.map((city: any) => city.cityName);
  if (!cityNames.includes(cityName)) {
    return notFound();
  }

  // Fetch Restaurant API
  let data = [];
  const url = `${process.env.RESTAURANT_API}/${cityName}`;
  const fetchUrl = await fetch(`${url}`);
  const response = await fetchUrl.json();
  data = response;

  return (
    <PageWrapper>
      <SectionHero />
      <SectionRestaurants params={cityName} data={data} />
      <SectionFaq />
    </PageWrapper>
  );
};
export default CityName;
