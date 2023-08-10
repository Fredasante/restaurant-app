import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 md:h-20 p-4 flex justify-between items-center border-b-2 border-b-slate-500 lg:px-20 xl:px-40">
      {/* LEFT lINKS */}
      <div className="hidden md:flex gap-4 font-medium text-slate-950">
        <Link href={"/"}>HOME</Link>
        <Link href={"/menu"}>MENU</Link>
        <Link href={"/"}>CONTACT</Link>
      </div>

      {/* LOGO */}
      <div className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-l font-bold transition-all md:block dark:border-white">
        <Link href={"/"}>MASSIMO</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT lINKS */}
      <div className="hidden md:flex gap-4 font-medium text-slate-950 items-center">
        <div className="flex items-center gap-2 bg-slate-600 text-white px-2 py-1 rounded-md">
          <Image src={"/phone.png"} alt="" width={20} height={20} />
          <span>123 456</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
