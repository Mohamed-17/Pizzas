"use client";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const endingDate = new Date("2025-09-22");

function CountdownTimer() {
  return (
    <div className="text-amber-400 text-xl w-full text-center lg:text-start md:text-4xl">
      <Countdown date={endingDate} />
    </div>
  );
}

export default CountdownTimer;
