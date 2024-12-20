'use client'
import Image from "next/image";
import React from "react";
import BaseText from "@/app/Components/BaseText";
import { useRouter } from "next/navigation";

interface SectionPrepareFoodProps {
  heading: string;
  image: any;
  alt: string;
  modalHeading?: string;
  modalContent?: any;
  buttonText?: string;
}

function SectionPrepareFood({
  heading,
  image,
  alt,
  modalHeading,
  modalContent,
  buttonText,
}: SectionPrepareFoodProps) {

  const router = useRouter();

  return (
    <div className="relative mb-36">
      <div className="ml-2 md:ml-10 py-8">
        <BaseText size="text-xl md:text-3xl" weight="font-bold">
          {heading}
        </BaseText>
      </div>
      <div className="w-full h-64 sm:h-80 md:h-96 relative">
        <Image src={image} alt={alt} layout="fill" objectFit="cover" />
      </div>

      {/* Modal Section */}
      <div
        className="mb-10 md:mb-0 z-20 absolute -bottom-52 sm:-bottom-48 md:-bottom-28 bg-white mx-4 sm:mx-8 md:mx-10 
        border-2 w-[90%] sm:w-[85%] md:w-[38rem] max-w-full h-auto rounded-lg flex flex-col 
        p-4 sm:p-6 shadow-lg"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          {modalHeading}
        </h2>

        {modalContent && (
          <BaseText
            size="text-sm sm:text-base md:text-normal"
            additionalClasses="mt-2 text-gray-600"
            htmlContent={modalContent} // Pass HTML content to BaseText
          />
        )}

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => router.push("partner-foodpanda")}
            className="bg-pink-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md 
            hover:bg-pink-700 transition duration-200 ease-in-out text-sm sm:text-base"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionPrepareFood;
