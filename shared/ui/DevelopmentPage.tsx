"use client";
import { Icon } from "@iconify/react";
import React from "react";

const DevelopmentPage = () => {
  return (
    <div className="flex flex-col items-center pt-12">
      <Icon
        icon="solar:sad-square-bold-duotone"
        className="h-auto w-20 text-neutral-600"
      />
      <h1 className="text-2xl font-medium mt-4">Under Development</h1>
      <p className="text-neutral-500">
        Sorry, this page is currently under development. Please wait for the
        next update, thank you 😘.
      </p>
    </div>
  );
};

export default DevelopmentPage;
