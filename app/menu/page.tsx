import React from "react";
import { menu } from "@/data";
import Link from "next/link";
function page() {
  const useColors = {
    white: "bg-white",
    black: "bg-black",
  };
  return (
    <div className="h-[calc(100vh-9rem)] md:h-[calc(100vh-14rem)]">
      <div className="flex flex-col  w-full h-full px-4 py-2 md:px-20 md:flex-row lg:px-40 justify-center items-center">
        {menu.map((category) => (
          <Link
            className="h-1/3 bg-cover m-1 w-full p-3 md:p-8 md:h-1/2"
            key={category.id}
            href={`/menu/${category.slug}`}
            style={{
              backgroundImage: `url(${category.img})`,
            }}
          >
            <div className={`w-1/2 text-${category.color} `}>
              <h1 className="text-xl md:text-4xl  uppercase font-bold">
                {category.title}
              </h1>
              <p className="text-sm md:text-base my-4 md:my-8">
                {category.desc}
              </p>
              <button
                className={`hidden xl:block  ${
                  useColors[category.color as keyof typeof useColors]
                } text-red-500 rounded-md px-4 py-2 cursor-pointer`}
              >
                Explore
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
