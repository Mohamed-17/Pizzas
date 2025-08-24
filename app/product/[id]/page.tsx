/* eslint-disable @typescript-eslint/no-explicit-any */
import PriceWord from "@/components/PriceWork";
import { pizzas } from "@/data";
import Image from "next/image";
import React from "react";

async function page({ params }: { params: any }) {
  const { id } = await params;
  const singleProduct = pizzas.find((pizza) => pizza.id === Number(id));
  if (!singleProduct) return <p>This Product Is not available</p>;
  return (
    <div className="p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row gap-4 justify-around  h-[calc(100vh-9rem)] md:h-[calc(100vh-14rem)] md:items-center">
      <div className="h-1/3 md:h-[70%] relative pt-2 w-full">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt={singleProduct.title}
            fill
            className="object-contain"
          />
        )}
      </div>
      <div className="h-2/3 w-full md:w-1/2 md:h-1/2 flex flex-col text-red-500 gap-5 md:gap-6 lg:gap-7 items-start justify-center  ">
        <h1 className="font-bold text-3xl ">{singleProduct.title}</h1>
        <p className=" text-sm leading-6">{singleProduct.desc}</p>
        <PriceWord
          options={singleProduct.options}
          price={singleProduct.price}
          id={singleProduct.id}
        />
      </div>
    </div>
  );
}

export default page;
