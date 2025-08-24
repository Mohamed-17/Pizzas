"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
type tempData = {
  id: number;
  title: string;
  image: string;
};
const data: tempData[] = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order whenever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];
function Slider() {
  const [currentSlide, setCurrentSlider] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlider((prev) => (data.length - 1 === prev ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] lg:flex-row transition duration-75 ease">
      <div className="flex-1 flex justify-center items-center flex-col gap-8 p-4">
        <h1 className="text-5xl text-center  text-red-500 font-bold uppercase  md:text-5xl lg:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <Link href="/menu">
          <button className="bg-red-500 text-white cursor-pointer p-4 lg:px-6 rounded-md">
            Order Now
          </button>
        </Link>
      </div>
      <div className="flex-1 relative  w-full">
        <Image
          src={data[currentSlide].image}
          alt={data[currentSlide].title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Slider;
