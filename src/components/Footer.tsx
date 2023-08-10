import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-16 p-4 text-slate-950 flex justify-between items-center lg:px-20 xl:px-40">
      <div className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-l font-bold transition-all md:block dark:border-white">
        <Link href={"/"}>MASSIMO</Link>
      </div>
      <p>All rights reserved</p>
    </div>
  );
};

export default Footer;
