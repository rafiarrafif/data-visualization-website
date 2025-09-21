import React from "react";
import Greeting from "./components/Greeting";
import Image from "next/image";

const page = () => {
  return (
    <div className="text-center mt-10 text-xl">
      <div className="h-20 relative w-full flex justify-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          fill
          className="object-contain"
          draggable={false}
        />
      </div>
      <h1>Hello World Page</h1>
      <Greeting />
    </div>
  );
};

export default page;
