"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuList from "./MenuList";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
        {open ? (
          <Image src={"/close.png"} alt="menu" width={20} height={20} />
        ) : (
          <Image src={"/open.png"} alt="menu" width={20} height={20} />
        )}
      </div>
      {open ? (
        <div className="bg-red-500 flex flex-col z-10 justify-center gap-8 w-full items-center left-0 h-[calc(100vh-6rem)] top-24 absolute">
          <Link
            onClick={() => setOpen(false)}
            href={"/"}
            className="uppercase text-white text-2xl"
          >
            HomePage
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href={"/"}
            className="uppercase text-white text-2xl"
          >
            Menu
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href={"/"}
            className="uppercase text-white text-2xl"
          >
            Working Hours
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href={"/"}
            className="uppercase text-white text-2xl"
          >
            Contact
          </Link>
          <MenuList changeOpen={setOpen} />
        </div>
      ) : null}
    </>
  );
}

export default Menu;
