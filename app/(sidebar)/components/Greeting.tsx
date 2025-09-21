"use client";
import { Button, Code, Link } from "@heroui/react";
import React from "react";

const Greeting = () => {
  return (
    <div className="flex justify-center items-center mt-6 gap-2">
      <Code>Welcome, this is stater kit</Code>
      <Button color="primary" as={Link} href="/">
        Reload Page
      </Button>
    </div>
  );
};

export default Greeting;
