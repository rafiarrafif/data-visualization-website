import React from "react";
import localFont from "next/font/local";

const Manrope = localFont({
  src: [
    {
      path: "./assets/Manrope-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./assets/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/Manrope-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/Manrope-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

const ManropeFontProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className={`${Manrope.className} antialiased`}>{children}</div>;
};

export default ManropeFontProvider;
