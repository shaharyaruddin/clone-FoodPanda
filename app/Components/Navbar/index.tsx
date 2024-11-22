"use client";
import React, { useState } from "react";
import Image from "next/image";
import mainLogo from "../../../public/assets/main-logo.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-b-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between">
        <div>
          <Image
            src={mainLogo}
            width={120}
            alt="main-logo"
            className="transparent"
          />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <button className="border border-black px-2 py-1 text-sm rounded-md hover:py-[5px] hover:bg-gray-100">
              Log In
            </button>
            <button className=" px-2 py-1 text-[14px] rounded-md bg-[#e21b70] text-white hover:py-[5px] hover:bg-[#b8316b]">
              Sign Up
            </button>
            <div className="relative">
              <button
                className="flex gap-3 items-center w-full px-4 py-2 text-gray-700"
                onClick={toggleDropdown}
              >
                <span className="flex items-center gap-1 text-sm">
                  <RiGlobalLine size={20} /> EN
                </span>
                {isOpen ? (
                  <FaChevronUp className="text-[#e21b70]" size={12} />
                ) : (
                  <FaChevronDown className="text-[#e21b70]" size={12} />
                )}
              </button>
              {isOpen && (
                <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      English
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <HiOutlineShoppingBag size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
