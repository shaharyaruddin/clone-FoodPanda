import PageWrapper from "@/app/Components/PageWrapper";
import { capitalizedFirst } from "@/app/helper";
import React from "react";


export const generateStaticParams = async()=>{
  const fetchApi = await fetch(`${process.env.RESTAURANT_API}`)
  const response = await fetchApi.json()
  console.log('restaurant respone', response)
  return response.map((restaurant: any)=>({
    restaurantName : restaurant.title
  }))
}

const RestaurantName = ({ params }: any) => {
  const { cityName, restaurantName } = params;

  // To remove space 20% 
  const encodedTitle = decodeURIComponent(restaurantName)

  //Fetch restaurant Api
  

  return (
    <PageWrapper>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="underline text-base">Homepage</span>
          <span>&gt;</span>
          <span className="underline text-gray-600 font-semibold text-base">
            {capitalizedFirst(cityName)}
          </span>
          <span>&gt;</span>

          <span className="text-gray-600 font-semibold text-base">
            {encodedTitle}
          </span>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RestaurantName;
