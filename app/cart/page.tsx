import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="h-[calc(100vh-9rem)] md:h-[calc(100vh-14rem)]">
      <div className="flex flex-col md:flex-row h-full w-full p-4 lg:px-20 xl:px-40 ">
        <div className="w-full md:w-1/2 h-full text-red-500 flex justify-between items-center">
          <Image
            src={"/temporary/p1.png"}
            alt="image-cart"
            width={130}
            height={130}
            className="object-contain"
          />
          <div>
            <h1 className="text-xl md:text-3xl font-bold">SICILIAN PIZZA</h1>
            <p>Large</p>
          </div>
          <h5 className="font-bold">$24.90</h5>
          <button className="cursor-pointer">X</button>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center gap-9 bg-fuchsia-50">
          <div className="flex flex-col gap-5 text-red-500">
            <p className="flex gap-5">
              <span>Subtotal (3 items)</span>
              <span>$81.70</span>
            </p>
            <p className="flex gap-5">
              <span>Service Cost </span>
              <span>$0.00</span>
            </p>
            <p className="flex gap-5">
              <span>Delivery Cost</span>
              <span className="text-green-500">FREE!</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 text-red-500">
            <p className="flex gap-5">
              <span>TOTAL(INCLVAT)</span>
              <span className="font-bold">$81.70</span>
            </p>
            <button className="bg-red-500 text-white w-[55%] h-12 rounded-md cursor-pointer">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
