import Image from "next/image";
import React from "react";
import hero from "../../../public/assets/Images/hero.jpg";
import { FaLocationCrosshairs } from "react-icons/fa6";

const SectionHero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-[#F7F7F7] p-4 lg:p-12">
      {/* Left Content */}
      <div className="flex flex-col justify-start items-start space-y-4 lg:space-y-6 w-full lg:w-1/2">
        <p className="text-2xl lg:text-4xl font-bold pb-4">
          It's the food and groceries you love, delivered
        </p>

        <div className="w-full border-2 rounded-lg bg-white p-3 relative flex items-center">
          <div className="w-full">
            <input
              type="text"
              placeholder="Your Street and Street Number"
              className="p-2 border outline-none rounded-lg w-full lg:pr-44"
            />
            <div className="absolute top-1/2 right-36 lg:right-48 transform -translate-y-1/2 flex items-center space-x-2 text-sm font-medium text-gray-600 cursor-pointer">
              <FaLocationCrosshairs className="text-2xl text-pink-600" />
              <span>Locate me</span>
            </div>
          </div>
          <div>
            <button className="absolute right-0 md:right-4 bottom-0 md:bottom-auto top-5 md:top-auto bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-700 transition w-full md:w-auto">
              Find Food
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <Image
          src={hero}
          alt="Hero Image"
          className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-none"
        />
      </div>
    </div>
  );
};

export default SectionHero;
