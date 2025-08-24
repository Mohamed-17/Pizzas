import React from "react";
import Delivery from "./Delivery";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const user = true;
  return (
    <>
      <Delivery />
      <div className="text-red-500 flex justify-between items-center  h-12 md:h-20 border-b-1 border-b-red-500 p-4 lg:px-20 xl:px-40">
        <div className="flex-1 hidden md:flex gap-5 uppercase ">
          <Link href={"/"}>HomePage</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <Link
          href={"/"}
          className="text-2xl w-max text-red-500 font-bold md:text-4xl text-start md:text-center"
        >
          Pizzas
        </Link>
        <div className="flex-1 hidden md:flex  items-center justify-end gap-5">
          <Link
            href={"/"}
            className="uppercase text-base bg-yellow-500 rounded-md px-1  flex items-center gap-3 md:absolute top-3 right-3 lg:static"
          >
            <Image src={"/phone.png"} width={20} height={20} alt="phone" />
            <span>505 234 002</span>
          </Link>
          {!user ? (
            <Link href={"/login"} className="uppercase text-base">
              Login
            </Link>
          ) : (
            <Link className="uppercase text-base " href={"/orders"}>
              Orders
            </Link>
          )}
          <Link
            href={"/cart"}
            className="uppercase text-base flex items-center gap-2"
          >
            <Image src={"/cart.png"} alt="cart" width={20} height={20} />
            <span>Cart</span>
            <span>(2)</span>
          </Link>
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
