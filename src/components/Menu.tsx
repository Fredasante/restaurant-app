"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const user = false;

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src={"/menu.png"}
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src={"/close.webp"}
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="bg-slate-700 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full z-10 flex flex-col gap-8 items-center justify-center text-2xl">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link href={"/login"} onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href={"/orders"} onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}

          <Link href={"/cart"} onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
