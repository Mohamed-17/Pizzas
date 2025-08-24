import React from "react";
import { featuredProducts } from "@/data";
import Image from "next/image";
function Features() {
  return (
    <div className="overflow-x-scroll  text-red-500 p-5">
      <div className="w-max flex">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="flex h-[60vh] flex-col justify-center items-center w-screen md:w-[50vw] xl:w-[33vw] p-4"
          >
            <div className="relative flex-1  w-full  duration-300 transition-all hover:bg-fuchsia-50">
              {product.img && (
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain  hover:rotate-65 transition-all duration-500"
                />
              )}
            </div>
            <div className="flex flex-1 gap-4 flex-col justify-center items-center">
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <p className="p-4">{product.desc}</p>
              <h4 className="font-bold">{product.price.toFixed(2)}$</h4>
              <button className="text-white bg-red-500 rounded-md py-2 px-4 cursor-pointer">
                Add to card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
