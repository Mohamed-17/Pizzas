"use client";
import React, { useEffect, useState } from "react";

function PriceWork({
  options,
  price,
  id,
}: {
  options?: { title: string; additionalPrice: number }[];
  price: number;
  id: number;
}) {
  const [priceCount, setPriceCount] = useState(price);
  const [option, setOption] = useState(0);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setPriceCount(
      options
        ? (options[option].additionalPrice + price) * quantity
        : price * quantity
    );
  }, [price, quantity, options, option]);
  return (
    <>
      <h5 className="font-bold text-2xl">{priceCount.toFixed(2)}$</h5>
      <div className="flex gap-3 items-center justify-start">
        {options?.map((opt, i) => (
          <button
            onClick={() => {
              setOption(i);
              setPriceCount(() => (price + opt.additionalPrice) * quantity);
            }}
            className={`border-1 border-red-300 px-5 py-2 ${
              i === option ? "bg-red-500 text-white" : "bg-white"
            } cursor-pointer`}
            key={opt.title}
          >
            {opt.title}
          </button>
        ))}
      </div>
      <div className="flex w-full">
        <div className="w-2/3 border-1 border-red-500 py-2 px-2 flex justify-between">
          <div>Quantity</div>
          <div className="flex gap-2">
            <span
              onClick={() => {
                setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
              }}
              className="cursor-pointer"
            >
              {"<"}
            </span>
            {quantity}
            <span
              onClick={() => {
                setQuantity((prev) => (prev >= 9 ? 9 : prev + 1));
              }}
              className="cursor-pointer"
            >
              {">"}
            </span>
          </div>
        </div>
        <div
          className="w-1/3 py-2 bg-red-500 text-white
        text-center cursor-pointer"
        >
          Add to Cart
        </div>
      </div>
    </>
  );
}

export default PriceWork;
