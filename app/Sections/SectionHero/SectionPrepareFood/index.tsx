import Image from "next/image";
import React from "react";
import homeVendor from "../../../../public/assets/Images/home-vendor.jpg";
import BaseText from "@/app/Components/BaseText";

function SectionPrepareFood() {
  return (
    <div>
      <div className="ml-2 md:ml-10 py-8">
        <BaseText size="text-xl md:text-3xl" weight="font-bold">
          You prepare the food, we handle the rest
        </BaseText>
      </div>
      <div className="w-full h-96 relative">
        <Image
          src={homeVendor}
          alt="home vendor"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default SectionPrepareFood;
