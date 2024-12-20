import React from "react";
import BackgroundImage from "../../public/assets/partner.jpg";
import Image from "next/image";
import PageWrapper from "../Components/PageWrapper";
import BaseText from "../Components/BaseText";

function PartnerFoodpanda() {
  return (
    <PageWrapper>
      <div className="relative">
        <Image
          src={BackgroundImage}
          alt="Partner"
          style={{ objectFit: "fill" }}
          layout="responsive"
          width={800}
          height={400}
        />
      </div>
      <div className="absolute mt-32 inset-0 flex flex-col justify-center items-start text-left text-white p-6 space-y-6 max-w-xl">
        <BaseText weight="bold" size="text-4xl" color="text-white">
          Boost your revenue with foodpanda!
        </BaseText>
        <BaseText size="text-2xl" color="text-white">
          Sign up now and start earning more with the leading food delivery
          service foodpanda. Ready to get started?
        </BaseText>
        <div className="w-full bg-white p-6 rounded-lg shadow-lg space-y-4">
          <form className="space-y-4">
            <BaseText weight="font-semibold" size="text-xl">
              Ready to grow your business?
            </BaseText>
            <div>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-[#e21b70] text-white rounded-md hover:bg-[#fc4f9a] transition"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}

export default PartnerFoodpanda;
