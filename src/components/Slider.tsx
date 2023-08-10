"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/fresh.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/deliver.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     4000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] lg:flex-row">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col gap-8 items-center justify-center text-slate-900 font-bold bg-slate-100">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center p-3 md:p-10 uppercase">
          {data[currentSlide].title}
        </h1>

        <button className="bg-slate-600 text-white py-4 px-8 rounded-xl">
          Order now
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative">
        <Image
          src={data[currentSlide].image}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
