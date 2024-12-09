import BaseText from "@/app/Components/BaseText";
import Image from "next/image";
import React, { useState } from "react";

const SectionCities = () => {

const [data,setData] =useState([])

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const res = await data.json();

    console.log("Data in the component:", res.recipes); // This will show in the browser console
setData(res.recipes)
  };
  getData();
  return (
    <div className="mx-16 my-4">
      <div className="flex items-center gap-2 text-gray-500 underline">
        <div>Homepage</div>
        <span>&gt;</span>
        <div>Islamabad</div>
      </div>

      <div className="mt-2">
        <BaseText size="text-2xl" additionalClasses="" weight="font-semibold">
          Top Areas in Islamabad
        </BaseText>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <select className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-500 focus:ring-1 focus:ring-gray-500">
          <option value="">Select an area</option>
          {/* Add more options here */}
        </select>

        <button className="whitespace-nowrap rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 focus:ring-1 focus:ring-gray-500">
          See all areas
        </button>
      </div>

      <div className="mt-10">
        <BaseText size="text-2xl" weight="font-semibold">
          All restaurants
        </BaseText>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.length > 0 ? (
          data.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-lg border border-gray-200 p-4 shadow-sm transition-transform hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-full rounded-lg"
                width={200}
                height={200}
                objectFit="contain"
              />
              <div className="mt-3 flex flex-row w-full items-center justify-between">
                <p className=" text-gray-800 font-bold">{item.name}</p>
                <p className="text-sm font-semibold text-gray-600">
                  {item.rating} ⭐
                </p>
              </div>
              <div className="flex justify-start w-full text-sm">
                <p>{item.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SectionCities;
