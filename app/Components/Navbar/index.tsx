"use client";
import React, { useState } from "react";
import Image from "next/image";
import mainLogo from "../../../public/assets/main-logo.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { CiReceipt } from "react-icons/ci";
import { BsReceipt } from "react-icons/bs";
import { PiCrownSimpleFill } from "react-icons/pi";
import { SiFoodpanda } from "react-icons/si";
import {
  IoLogOutOutline,
  IoHelpCircleOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import Modal from "../Modal";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const cartItems = useSelector(
    (state: any) => state.addToCart.addToCart.length
  );
  const favoriteItems = useSelector(
    (state: any) => state.favorites.favoritesItem.length
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="border border-b bg-white shadow-sm fixed w-full left-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex md:hidden hover:bg-gray-100 cursor-pointer py-2 px-2 rounded-full">
          <HiOutlineUser className=" text-black" size={18} />
        </div>
        <Link href={"/"}>
          <Image src={mainLogo} width={150} alt="main-logo" className="py-3" />
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-4 ">
              {modalOpen && <Modal open={modalOpen} setOpen={setModalOpen} />}
              <button
                className="border border-black px-2 py-1 text-sm rounded-md hover:py-[5px] hover:bg-gray-100"
                onClick={handleModal}
              >
                Log In
              </button>
              <button
                className=" px-2 py-1 text-[14px] rounded-md bg-[#e21b70] text-white hover:py-[5px] hover:bg-[#b8316b]"
                onClick={handleModal}
              >
                Sign Up
              </button>
              <div className="relative">
                <button
                  className="flex gap-3 items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
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

              {/* when user login then this dropdown show */}

              {/* <div className="relative">
              <button
                className="flex gap-3 items-center w-full px-4 py-2 text-gray-700"
                onClick={toggleDropdown}
              >
                <span className="flex items-center gap-1 text-sm">
                  <HiOutlineUser size={20} /> Mohammad
                </span>
                {isOpen ? (
                  <FaChevronUp className="text-[#e21b70]" size={12} />
                ) : (
                  <FaChevronDown className="text-[#e21b70]" size={12} />
                )}
              </button>
              {isOpen && (
                <div className="absolute mt-2 -left-28 w-[280px] py-3 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <ul>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <SiFoodpanda className="mr-2 text-[#e21b70]" size={18} />
                      Pandapay
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <PiCrownSimpleFill className="mr-2 text-purple-800" size={18}/>
                      Subscribe to free delivery
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <BsReceipt className="mr-2 text-black" size={18} />
                      Orders and reordering
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <HiOutlineUser className="mr-2 text-black" size={18} />
                      Profile
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <CiReceipt className="mr-2 text-black" size={18} />
                      Vouchers
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <IoTrophyOutline className="mr-2 text-black" size={18} />
                      Panda Rewards
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <IoHelpCircleOutline className="mr-2 text-black" size={18} />
                      Help
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <IoLogOutOutline className="mr-2 text-black" size={18} />
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div> */}
            </div>
            <div className="relative hover:bg-gray-100 cursor-pointer py-2 px-2 rounded-full">
              <Link href={"/favorites"}>
                <AiOutlineHeart size={22} />
                {favoriteItems > 0 && (
                  <div className="absolute left-5 top-1 w-4 h-4 text-xs bg-red-500 text-white rounded-full flex justify-center items-center">
                    {favoriteItems}
                  </div>
                )}
              </Link>
            </div>
            <div className="relative hover:bg-gray-100 cursor-pointer py-2 px-2 rounded-full">
              <Link href={"/cart-page"}>
                <HiOutlineShoppingBag size={20} />
                {cartItems > 0 && (
                  <div className="absolute left-5 top-1 w-4 h-4 text-xs bg-red-500 text-white rounded-full flex justify-center items-center">
                    {cartItems}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
