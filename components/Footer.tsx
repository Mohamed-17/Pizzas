import React from "react";

function Footer() {
  return (
    <div className="w-full flex justify-between items-center h-12 md:h-24 p-4 lg:px-20 xl:px-42 text-red-500">
      <div className="font-bold md:text-3xl text-xl">PIZZAS</div>
      <div className="uppercase font-bold text-sm md:text-base">
        @All rights reseved{" "}
      </div>
    </div>
  );
}

export default Footer;
