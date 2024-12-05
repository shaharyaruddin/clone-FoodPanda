import React from "react";
import PageWrapper from "../Components/PageWrapper";
import BaseText from "../Components/BaseText";

function Account() {
  return (
    <PageWrapper>
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-center">
        {/* My Profile Section */}
        <div className="flex flex-col gap-4 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 justify-center items-start py-6">
          <BaseText size="text-xl" weight="font-semibold">
            My Profile
          </BaseText>
          <input
            type="text"
            className="w-full px-4 py-2 outline-none border border-gray-300 rounded-md text-sm"
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full px-4 py-2 outline-none border border-gray-300 rounded-md text-sm"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="w-full px-4 py-2 outline-none border border-gray-300 rounded-md text-sm"
            placeholder="Mobile Number"
          />
          <button className="justify-center px-4 py-2 text-sm font-medium text-white bg-[#e21b70] rounded-md hover:bg-[#b92b69]">
            Save
          </button>
        </div>

        {/* Email Section */}
        <div className="flex flex-col gap-4 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 justify-center items-start py-6">
          <BaseText size="text-xl" weight="font-semibold">
            Email
          </BaseText>
          <input
            type="email"
            className="w-full px-4 py-2 outline-none border border-gray-300 rounded-md text-sm"
            placeholder="Email"
          />
          <button className="justify-center px-4 py-2 text-sm font-medium text-white bg-[#e21b70] rounded-md hover:bg-[#b92b69]">
            Save
          </button>
        </div>

        {/* Password Section */}
        <div className="flex flex-col gap-4 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 justify-center items-start py-6">
          <BaseText size="text-xl" weight="font-semibold">
            Password
          </BaseText>
          <input
            type="password"
            className="w-full px-4 py-2 outline-none border border-gray-300 rounded-md text-sm"
            placeholder="Current Password"
          />
          <input
            type="password"
            className="w-full px-4 py-2 outline-none border border-gray-300 rounded-md text-sm"
            placeholder="New Password"
          />
          <button className="justify-center px-4 py-2 text-sm font-medium text-white bg-[#e21b70] rounded-md hover:bg-[#b92b69]">
            Save
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Account;
