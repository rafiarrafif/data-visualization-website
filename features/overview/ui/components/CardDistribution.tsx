"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";

const CardDistribution = () => {
  return (
    <Card>
      <CardHeader>Customer Distribution</CardHeader>
      <CardBody>
        <ReactApexChart
          options={{
            chart: {
              id: "customer-distribution",
            },
            xaxis: {
              categories: [2022, 2023, 2024, 2025],
            },
            stroke: {
              curve: "smooth",
            },
            markers: {
              size: 0,
            },
            dataLabels: {
              enabled: false,
            },
            colors: ["#56aa06"],
          }}
          series={[
            {
              name: "offline",
              data: [19000, 22000, 17000, 27000],
              color: "#F89938",
            },
            {
              name: "online",
              data: [18000, 28000, 24000, 20000],
              color: "#E31937",
            },
          ]}
          type="area"
          height={360}
        />
      </CardBody>
    </Card>
  );
};

export default CardDistribution;
