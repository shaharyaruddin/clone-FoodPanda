"use client";
import Image from "next/image";
import React, { useState } from "react";
import hero from "../../../public/assets/Images/hero.jpg";
import { FaLocationCrosshairs } from "react-icons/fa6";
import BaseText from "@/app/Components/BaseText";
// import Map from "@/app/map";

const EndPoint = "https://api.opencagedata.com/geocode/v1/json";
const API_key = "6ca84db96bc44949b610dcb7f8ef0fd4";

const SectionHero = () => {
  const [togalModal, setTogalModal] = useState(false);

  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
    address?: string;
  } | null>(null);

  const handleModal = () => {
    //for Location

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          let query = `${latitude},${longitude}`;

          let API_URL = `${EndPoint}?q=${query}&key=${API_key}`;
          console.log(API_URL);

          try {
            const response = await fetch(API_URL);
            const data = await response.json();
            if (data && data.results && data.results[0]) {
              console.log("              address:", data.results[0].formatted.slice(1));

              setUserLocation({
                latitude,
                longitude,
                address: data.results[0].formatted,
              });
            } else {
              console.log("Unable to retrieve address.");
            }
          } catch (error) {
            console.error("Error fetching data from OpenCage API:", error);
          }
        },

        (error) => {
          console.error("Error get user location: ", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }

    setTogalModal((prev) => !prev);
  };

  const handleClose = () => {
    setTogalModal(false);
  };

  return (
    <>
      {togalModal && (
        <div>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-lg bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="p-4 border-b flex justify-between items-center dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  What's your exact location?
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  onClick={handleClose}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <BaseText
                  size="text-sm"
                  color="text-gray-600 dark:text-gray-300"
                >
                  Providing your location enables more accurate search and
                  delivery ETA, seamless order tracking, and personalized
                  recommendations.
                </BaseText>

                <form className="mt-4 space-y-4">
                  <div>
                    <label
                      htmlFor="street"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your street and street number
                    </label>
                    <input
                      type="text"
                      id="street"
                      placeholder="E 198 Karachi"
                      value={userLocation?.address}
                      className="block w-full p-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>

                  {/* <div className="h-64 w-full overflow-hidden rounded-lg">
                  <Map
                   latitude={userLocation?.latitude}
                    longitude={userLocation?.longitude} />
                  </div> */}

                  <button
                    type="submit"
                    className="w-full py-2.5 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
                  >
                    Find Restaurants
                   
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-100 p-4 lg:p-12">
        {/* Left Content */}
        <div className="flex flex-col w-full lg:w-1/2 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold">
            It's the food and groceries you love, delivered
          </h1>

          <div className="relative flex items-center bg-white rounded-lg border p-3">
            <input
              type="text"
              placeholder="Your Street and Street Number"
              className="flex-1 p-2 text-sm outline-none"
            />
            <FaLocationCrosshairs className="absolute right-14 text-pink-600 text-xl cursor-pointer" />

            <button
              onClick={handleModal}
              className="absolute right-0 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
            >
              Find Food
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-6 lg:mt-0 w-full lg:w-1/2">
          <Image
            src={hero}
            alt="Hero Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default SectionHero;
