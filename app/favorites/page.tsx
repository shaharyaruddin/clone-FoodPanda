"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import BaseText from "../Components/BaseText";
import Image from "next/image";
import { GiChainedHeart } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorites } from "../redux/slices/favouriteSlice";

function Favorites() {
  const dispatch = useDispatch();
  const favoritesItem = useSelector(
    (state: any) => state.favorites.favoritesItem
  );

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <BaseText size="text-3xl" weight="font-bold" additionalClasses="mb-6">
          My Favourites
        </BaseText>
        {favoritesItem.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <GiChainedHeart size={60} className="mb-4" />
            <BaseText
              size="text-xl"
              weight="font-bold"
              additionalClasses="mb-2"
            >
              No Favourites Saved
            </BaseText>
            <BaseText>
              You’ll see all your favorites here, to make ordering even faster.
            </BaseText>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 pt-7">
            {favoritesItem.map((item: any) => (
              <div
                key={item.id}
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
                  className="absolute right-0 top-2 bg-white rounded-full p-1 cursor-pointer"
                  onClick={() => dispatch(deleteFavorites(item))}
                >
                  <IoMdHeart size={16} />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-gray-800">{item.name}</p>
                    <p className="text-sm font-semibold text-orange-500">
                      {item.rating} ⭐
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites;
