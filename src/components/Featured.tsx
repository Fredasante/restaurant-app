import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-slate-900">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEMS */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[80vh] flex flex-col items-center justify-around p-4 hover:bg-slate-100 transition-all duration-500"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full">
                <Image src={item.img} fill alt="" className="object-contain" />
              </div>
            )}

            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col gap-4 text-slate-950 items-center justify-center text-center">
              <h1 className="text-xl font-bold mt-3 uppercase">{item.title}</h1>
              <p className="p-4">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-slate-600 text-white py-2 px-4 rounded-xl w-max">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
