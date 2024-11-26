import React from "react";
import SectionHero from "./Sections/SectionHero";
import PageWrapper from "./Components/PageWrapper";
import SectionPrepareFood from "./Sections/SectionPrepareFood";
import SectionCity from "./Sections/SectionCity";
import homeVendor from "../public/assets/Images/home-vendor.jpg";
import homeCorporate from "../public/assets/Images/home-corporate.jpg";
import SectionFaq from "./Sections/SectionFaq";
import SectionMobileApps from "./Sections/SectionMobileApps";
export default function page() {
  return (
    <>
      <PageWrapper>
        <SectionHero />
        <SectionPrepareFood
          heading="You prepare the food, we handle the rest"
          image={homeVendor}
          alt="home vendor"
          modalHeading="List your restaurant or shop on foodpanda"
          modalContent="Would you like millions of new customers to enjoy your amazing food and groceries? So would we! <br /><br /> It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat! <br /><br /> Interested? Let's start our partnership today!"
          buttonText="Get Started"
        />
        <SectionCity />
        <SectionMobileApps />
        <SectionPrepareFood
          heading="Take your office out to lunch"
          image={homeCorporate}
          alt="home Corporate"
          modalHeading="foodpanda for business"
          modalContent="Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more."
          buttonText="Get Started"
        />
        <SectionFaq />
      </PageWrapper>
    </>
  );
}
