import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-(6rem))] md:h-[calc(100vh-(7rem))] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          style={{ backgroundImage: `url(${category.img})` }}
          className="w-full flex-1 bg-cover p-2 md:p-8"
        >
          <div className={`text-${category.color}`}>
            <h1 className="uppercase font-bold text-2xl md:text-3xl">
              {category.title}
            </h1>
            <p className="text-sm my-3">{category.desc}</p>
            <button className="bg-slate-600 text-white py-1 px-2 rounded-xl w-max">
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
