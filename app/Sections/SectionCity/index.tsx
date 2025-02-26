import React from "react";
import Image from "next/image";
import Link from "next/link";

async function SectionCity() {
  let data = [];

  try {
    const response = await (await fetch("https://rest-api-foodpanda.vercel.app/city")).json()
    console.log("res", response);
    data = response;
  } catch (err) {
    console.log("data fetching error in cities API: ", err);
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Find us in these cities and many more!
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((city: any) => (
            <div
              key={city._id}
              className="relative bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-56 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                <Link href={`/city/${city.name}`}>
                <Image
                  src={city.filePath}
                  alt={city.name}
                  fill
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                </Link>
              </div>
              <div className="absolute bottom-2 left-2 rounded-lg bg-white p-2">
                <h3 className="text-md font-medium text-black">{city.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionCity;
