import Image from "next/image";
import Link from "next/link";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MenuList({ changeOpen }: { changeOpen: any }) {
  const user = false;
  return (
    <div className="flex flex-col gap-8 text-center justify-center items-center ">
      {!user ? (
        <Link
          href={"/login"}
          className="uppercase text-white text-2xl"
          onClick={() => changeOpen(false)}
        >
          Login
        </Link>
      ) : null}
      <Link
        href={"/cart"}
        className="uppercase text-white text-2xl flex items-center gap-3"
        onClick={() => changeOpen(false)}
      >
        <Image src={"/cart.png"} alt="cart" width={20} height={20} />
        <span>Cart</span>
        <span>(2)</span>
      </Link>
      <Link
        href={"/"}
        className="uppercase text-white text-2xl bg-yellow-500 rounded-md px-2 py-1 flex items-center gap-3"
        onClick={() => changeOpen(false)}
      >
        <Image src={"/phone.png"} width={30} height={30} alt="phone" />
        <span>505 234 002</span>
      </Link>
    </div>
  );
}

export default MenuList;
