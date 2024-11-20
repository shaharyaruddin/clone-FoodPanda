import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div>
        <Link href="home">Home</Link>
      </div>
      <div>
        <Link href="servicess">Services</Link>
      </div>
      <div>
        <Link href="contact">Contact</Link>
      </div>
    </>
  );
}

export default page;
