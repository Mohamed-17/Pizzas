import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountdownTimer from "@/components/Countdown";
function Offer() {
  return (
    <div
      className="w-full my-2 relative p-4 lg:px-20 xl:px-40 h-[75vh] md:h-[60vh] flex justify-between items-center text-white flex-col lg:flex-row"
      style={{ backgroundImage: "url('/offerBg.png')" }}
    >
      <div className="flex flex-col gap-3 md:gap-6 h-1/2 lg:h-full lg:w-1/2 items-center md:justify-center p-3 lg:p-6 ">
        <h1 className="text-2xl lg:text-6xl xl:text-7xl text-center lg:text-start font-bold">
          Delicious Burger & French Fry
        </h1>
        <p className="text-center text-sm lg:text-start md:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>

        <CountdownTimer />

        <Link href="/orders" className="lg:w-full lg:text-start text-center">
          <button className="bg-red-500 text-white cursor-pointer p-4  rounded-md">
            Order Now
          </button>
        </Link>
      </div>
      <div className="h-1/2 relative lg:h-full lg:w-1/2  w-full">
        <Image
          src={"/offerProduct.png"}
          alt="offer-burger"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Offer;
