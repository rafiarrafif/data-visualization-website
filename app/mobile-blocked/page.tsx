import React from "react";
import MobileSpeedbump from "./MobileSpeedbump";
import { UAParser } from "ua-parser-js";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  const header = await headers();
  const ua = header.get("user-agent") || "";
  const parser = new UAParser(ua);
  const deviceType = parser.getDevice().type;

  if (deviceType !== "mobile") {
    redirect("/");
  }
  return (
    <div>
      <MobileSpeedbump />
    </div>
  );
};

export default page;
