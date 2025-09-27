"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";

export interface DistributionData {
  date: string;
  "Ofline store": number;
  "Online store": number;
  Event: number;
  Partnership: number;
}

const CardDistribution = ({ data }: { data: DistributionData[] }) => {
  return (
    <Card>
      <CardHeader>Revenue Distribution</CardHeader>
      <CardBody>
        <ReactApexChart
          options={{
            chart: {
              id: "revenue-distribution",
            },
            xaxis: {
              categories: data.map((d) =>
                new Date(
                  d.date
                    .split("-")
                    .reverse()
                    .join("-") + "-01"
                ).toLocaleString("en-US", { month: "short", year: "numeric" })
              ),
            },
            yaxis: {
              labels: {
                formatter: (val: number) =>
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(val),
              },
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
              name: "Offline Store",
              data: data.map((d) => d["Ofline store"]),
              color: "#071013",
            },
            {
              name: "Online Store",
              data: data.map((d) => d["Online store"]),
              color: "#EC7D10",
            },
            {
              name: "Event",
              data: data.map((d) => d["Event"]),
              color: "#EC0868",
            },
            {
              name: "Partnership",
              data: data.map((d) => d["Partnership"]),
              color: "#C200FB",
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
