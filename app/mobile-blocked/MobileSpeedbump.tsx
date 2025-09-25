"use client";
import { Icon } from "@iconify/react";
import React from "react";

const MobileSpeedbump = () => {
  return (
    <div className="flex flex-col items-center pt-12">
      <Icon
        icon="streamline-plump:threat-phone-remix"
        className="h-auto w-20 text-neutral-500"
      />
      <h1 className="text-2xl font-medium mt-6 text-neutral-700">
        Device not supported
      </h1>
      <p className="text-neutral-500 text-center pt-2">
        We need hardware that can handle graphics computing and heavy
        calculations. Please access this website using computer.
      </p>
    </div>
  );
};

export default MobileSpeedbump;
