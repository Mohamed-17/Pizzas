import React from "react";
import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";
function page() {
  console.log(pizzas);
  return (
    <div className=" flex flex-wrap ">
      {pizzas.map((pizza) => (
        <Link
          href={`/product/${pizza.id}`}
          key={pizza.id}
          className="h-[60vh] w-full md:w-1/2 lg:w-1/3 border-r-2 border-red-500 border-b-2 p-4 group"
        >
          <div className="relative h-[80%]">
            {pizza.img && (
              <Image
                src={pizza.img}
                alt={pizza.title}
                fill
                className="object-contain"
              />
            )}
          </div>
          <div className="flex justify-between h-[20%] items-center gap-4">
            <h1 className="md:text-3xl text-2xl text-red-500 font-bold">
              {pizza.title}
            </h1>
            <h5 className="text-red-500 text-xl md:text-2xl font-bold group-hover:hidden">
              {pizza.price}$
            </h5>
            <button className="hidden group-hover:block bg-red-500 text-white rounded-md py-2 px-4 cursor-pointer">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default page;
