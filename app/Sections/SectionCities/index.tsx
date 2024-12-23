"use client";
import BaseText from "@/app/Components/BaseText";
import { capitalizedFirst } from "@/app/helper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/recipes";

const SectionCities = ({ params }: { params?: string }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(API_URL);
        const res = await data.json();
        setData(res.recipes);
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    getData();
  }, []);

  const searchingData = data.filter((item: any) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span className="hover:underline">Homepage</span>
        <span>&gt;</span>
        <span className="text-black font-semibold">
          {params ? capitalizedFirst(params) : "Unknown"}
          {/* e.g : multan
          params.charAt(0).toUpperCase() =M
          params.slice(1).toLowerCase() = ultan 
          First word capital rest are small by using this logic */}
        </span>
      </div>

      <div className="mt-4">
        <BaseText size="text-3xl" additionalClasses="" weight="font-semibold">
          Available deals
        </BaseText>
      </div>

      <div className="py-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search in menu"
          className="border rounded-2xl bg-gray-100 w-56 px-3 py-1 outline-none focus:outline-blue-800"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.length > 0 ? (
          searchingData.length > 0 ? (
            searchingData.map((item: any) => (
              <div
                key={item.id}
                className="flex flex-col rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm transition-transform hover:scale-105 hover:shadow-lg"
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                    width={400}
                    height={200}
                  />
                  {/* Badges */}
                  <div className="absolute top-2 left-2 space-y-1">
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                      Up to {item.cookTimeMinutes}% off
                    </span>
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                      Welcome gift: free delivery
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-gray-800">{item.name}</p>
                    <p className="text-sm font-semibold text-orange-500">
                      {item.rating} ⭐
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No item Found</p>
          )
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SectionCities;
