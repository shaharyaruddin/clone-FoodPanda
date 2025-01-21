"use client";
import React from "react";
import PageWrapper from "../Components/PageWrapper";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const page = () => {
  const data = useSelector((state: any) => state.addToCart.addToCart);

  console.log("data", data);

  return (
    <>
      <PageWrapper>
        <div className="relative mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item: any, index: number) => {
            return (
              <>
                <div
                  key={index}
                  className="relative flex flex-col rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm transition-transform hover:scale-105 hover:shadow-lg"
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
                  <div
                    className="absolute right-3 top-2 bg-white rounded-full p-1 cursor-pointer"
                    //   onClick={() => addToFavorites(item)}
                  >
                    <CiHeart size={16} />
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <p className="text-sm font-semibold text-orange-500">
                        {item.rating} ⭐
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.category}
                    </p>
                  </div>
                  <div className="absolute bottom-14 right-3">
                    <button>
                      <IoIosAddCircleOutline className="w-7 h-7 text-white font-bold" />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </PageWrapper>
    </>
  );
};

export default page;
