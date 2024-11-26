import Image from "next/image";
import React from "react";
import mobileApps from "../../../public/assets/Images/apps.jpg";
import qrCode from "../../../public/assets/Images/qrCode.png";
import apple from "../../../public/assets/Images/apple.png";
import playStore from "../../../public/assets/Images/plyStore.png";
import googlePlay from "../../../public/assets/Images/googlePlay.png";

import BaseText from "@/app/Components/BaseText";

const SecionMobileApps: React.FC = () => {
  return (
    <section className="relative w-full  bg-white py-10 md:py-20">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Put us in your pocket
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="bg-[#E32D6F] rounded-lg max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Download the food and groceries you love
          </h3>

          <BaseText color="text-white">
            It's all at your fingertips – the restaurants and shops you love.
            Find the right food and groceries to suit your mood, and make the
            first bite last. Go ahead, download us.
          </BaseText>

          <div className="flex items-center gap-4">
            {/* QR Code */}
            <div className="flex-shrink-0">
              <Image
                src={qrCode}
                alt="QR Code"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            {/* Download Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="bg-black text-white py-2 px-4 rounded-md shadow-md flex items-center gap-2 hover:scale-105 transform transition"
              >
                <Image src={apple} alt="App Store" width={20} height={20} />
                App Store
              </a>
              <a
                href="#"
                className="bg-black text-white py-2 px-4 rounded-md shadow-md flex items-center gap-2 hover:scale-105 transform transition"
              >
                <Image
                  src={googlePlay}
                  alt="Google Play"
                  width={20}
                  height={20}
                />
                Google Play
              </a>
              <a
                href="#"
                className="bg-black text-white py-2 px-4 rounded-md shadow-md flex items-center gap-2 hover:scale-105 transform transition"
              >
                <Image
                  src={playStore}
                  alt="App Gallery"
                  width={20} height={20}
                />
                AppGallery
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <div className="relative w-full h-[300px] sm:h-[400px]">
            <Image
              src={mobileApps}
              alt="Mockup Phones"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecionMobileApps;
