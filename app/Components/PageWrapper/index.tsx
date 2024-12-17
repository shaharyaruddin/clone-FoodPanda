import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PageWrapper({ children }: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-14">{children}</main>
      <Footer />
    </div>
  );
}

export default PageWrapper;
