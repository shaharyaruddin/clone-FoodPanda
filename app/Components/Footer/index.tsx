import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/main-logo.png";
import image2 from "../../../public/assets/image-2.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const footerLinks = [
  {
    title: "Column 1",
    links: [
      "Press",
      "pandapay Terms and Conditions",
      "Security",
      "Careers",
      "Cashback Terms and Conditions",
      "Partner with Us",
      "All cities",
      "pandapro - Monthly Subscription Programme",
      "Ramzan deals",
      "Areas delivered in Lahore",
    ],
  },
  {
    title: "Column 2",
    links: [
      "Help Center",
      "Terms and Conditions",
      "Download foodpanda Apps",
      "Suggest a Restaurant",
      "All cuisines",
      "pandago - Request a Rider",
      "Update on COVID-19 in Pakistan foodpanda Home Chef",
      "Areas delivered in Karachi",
      "Areas delivered in Islamabad",
    ],
  },
  {
    title: "Column 3",
    links: [
      "Refunds with pandapay",
      "Privacy policy",
      "Human rights policy",
      "Corporate Customer",
      "foodpanda Magazine",
      "foodpanda Vouchers & Coupons",
      "pandamart Grocery Delivery Become an Affiliate",
      "Areas delivered in Gujranwala",
      "Areas delivered in Peshawar",
    ],
  },
];

function Footer() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-8 justify-between overflow-x-auto py-5 border-y-2 my-4">
          <div className="flex-1 min-w-[200px] text-sm">©foodpanda</div>
          {footerLinks.map((column, index) => (
            <div key={index} className="flex-1 min-w-[200px]">
              <ul className="space-y-2 underline text-base">
                {column.links.map((link, i) => (
                  <li
                    key={i}
                    className="cursor-pointer text-[#59616a] hover:text-black"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="block md:flex items-center justify-between">
          <div className="flex gap-5 justify-center">
            <Image src={image1} alt="" width={130} />
            <div className="border-r-2"></div>
            <Image src={image2} alt="" width={130} />
          </div>
          <div className="flex gap-5 justify-center mt-4 md:mt-0">
            <div className="border border-gray-400 rounded-full py-1 px-1 cursor-pointer">
              <FaInstagram size={19} />
            </div>
            <div className="border border-gray-400 rounded-full py-1 px-1 cursor-pointer">
              <FaFacebookF size={19} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
