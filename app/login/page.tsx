import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-9rem)] md:h-[calc(100vh-14rem)] p-4">
      <div className=" flex flex-col  shadow-2xl h-full md:flex-row rounded-md lg:w-[60%] md:h-2/3">
        <div className="relative h-1/3 md:h-full w-full lg:w-1/2">
          <Image
            src={"/loginBg.png"}
            alt="login"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-7 p-5 lg:p-15">
          <h1 className="font-bold text-2xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <div className="flex items-center  gap-10 px-5 py-2">
            <Image src={"/google.png"} alt="google" width={25} height={25} />
            <p>Sign in with Google</p>
          </div>
          <div className="flex items-center  gap-10 px-5 py-2">
            <Image
              src={"/facebook.png"}
              alt="facebook"
              width={25}
              height={25}
            />
            <p>Sign in with Facebook</p>
          </div>
          <p>
            Have a problem ? <span className="underline">Contact us</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
