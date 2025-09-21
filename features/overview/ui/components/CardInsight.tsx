"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";
import React from "react";

interface Props {
  title: string;
  value: string;
  unit?: string;
}

const CardInsight = (props: Props) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <span className="pl-2">{props.title}</span>
      </CardHeader>
      <CardBody className="flex flex-row items-end-safe gap-2 justify-center text-center -mt-2 mb-2">
        <h1 className="text-6xl">{props.value}</h1>
        <h1 className="text-sm">{props.unit}</h1>
      </CardBody>
    </Card>
  );
};

export default CardInsight;
