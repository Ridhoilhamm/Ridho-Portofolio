import React from "react";
import { Carousel } from "./ui/caroucel";

const slidesData = [
  { src: "/images/data-analyst.png" },
  { src: "/images/javascript.png" },
  { src: "/images/cyber.png" },
  { src: "/images/teaching-factory.png" },
];

const Sertifikat = () => {
  return (
    <div
      id="portofolio"
      className="container mx-auto max-w-[1200px] px-4 mt-20 mb-20 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Certificate
      </h2>
      <div className="flex justify-center items-center w-full overflow-hidden">
        <Carousel slides={slidesData} className="w-full max-w-full" />
      </div>
    </div>
  );
};

export default Sertifikat;
