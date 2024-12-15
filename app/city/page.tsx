import React from "react";
import PageWrapper from "../Components/PageWrapper";
import Image from "next/image";
import AllCityImage from "../../public/assets/all-cities-image.jpg";
import BaseText from "../Components/BaseText";
import cities from "../common/cities.json";
import Link from "next/link";

function City() {
  return (
    <PageWrapper>
      <div className="relative">
        <Image
          src={AllCityImage}
          alt="All cities"
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
        />
        <BaseText
          color="text-white"
          size="text-2xl sm:text-3xl lg:text-4xl"
          weight="font-semibold"
          additionalClasses="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6"
        >
          All Cities in Pakistan Where You Can Order Food Online
        </BaseText>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <BaseText weight="font-semibold" size="text-xl sm:text-2xl">
          Top Cities in Pakistan
        </BaseText>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6">
          {cities.map((city: any) => {
            return (
              <Link href={`city/${city.name}`} key={city.name}>
                <div className="group cursor-pointer transition-all duration-300">
                  <BaseText additionalClasses="block text-center sm:text-left text-lg">
                    {city.name}
                  </BaseText>
                  <div className="h-[2px] bg-gray-600 w-[65%] mt-2 transition-all mx-auto sm:mx-0 duration-500 group-hover:w-[75%]"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}

export default City;
