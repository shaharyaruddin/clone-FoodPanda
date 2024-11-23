import Image from "next/image";
import React from "react";
import hero from "../../../public/assets/Images/hero.jpg";
const SectionHero = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start items-center">
        <p className="text-4xl font-bold">
          It's the food and groceries you love, delivered
        </p>
      </div>
      <div className="flex justify-end">
        <Image src={hero} alt="Hero Image" width={900} height={200} />
      </div>
    </div>
  );
};

export default SectionHero;
