import Image from "next/image";
import React from "react";
import hero from "../../../public/assets/Images/hero.jpg";
import { FaLocationCrosshairs } from "react-icons/fa6";

const SectionHero = () => {
  return (
    <div className="flex justify-between items-center bg-[#F7F7F7]">
      {/* Left Content */}
      <div className="flex flex-col justify-start items-start ml-12 space-y-6">
        {/* Heading */}
        <p className="text-4xl font-bold pb-5">
          It's the food and groceries you love, delivered
        </p>

        {/* Input Field with Buttons */}
        <div className="w-full max-w-2xl border-2 rounded-lg bg-white p-3 relative flex items-center">
         <div className="w-full">
          <input
            type="text"
            placeholder="Your Street and Street Number"
            className="p-2 border outline-none rounded-lg pr-44"
          />
          {/* Locate me inside the input */}
          <div className="absolute top-1/2 right-36 transform -translate-y-1/2 flex items-center space-x-2 text-sm font-medium text-gray-600 cursor-pointer">
            <FaLocationCrosshairs className="text-2xl text-pink-600" />
            <span>Locate me</span>
          </div>
          </div>
          <div className="flex items-center">
            <button className="absolute right-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-700 transition">
              Find Food
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-end">
        <Image src={hero} alt="Hero Image" width={1500} className="-mr-80" />
      </div>
    </div>
  );
};

export default SectionHero;
