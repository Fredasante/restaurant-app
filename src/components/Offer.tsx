import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen md:h-[80vh] flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png)] text-white">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col gap-8 p-6 justify-center items-center text-center">
        <h1 className="text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="xl:text-xl">
          Embark on a culinary journey with this Mediterranean-inspired
          creation, featuring zesty feta cheese, Kalamata olives, and a sprinkle
          of oregano.
        </p>
        <CountDown />
        <button className="bg-slate-600 text-white py-2 px-4 rounded-xl w-max">
          Add to Cart
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="flex-1 relative w-full md:h-full">
        <Image
          src={"/offerProduct.png"}
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
