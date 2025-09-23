"use client";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import Chart from "react-apexcharts";

type Props = {
  total: number;
  date: string;
};

const CardRevenue = ({ data }: { data: Props[] }) => {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <h1>Revenue History (per month)</h1>
        <Button
          as={Link}
          href="/transactions"
          color="primary"
          variant="light"
          endContent={<Icon icon="solar:alt-arrow-right-linear" />}
        >
          view more
        </Button>
      </CardHeader>
      <CardBody>
        <Chart
          options={{
            chart: {
              id: "revenue-history",
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
              name: "Revenue",
              data: data.map((d) => d.total),
            },
          ]}
          type="area"
          height={360}
        />
      </CardBody>
    </Card>
  );
};

export default CardRevenue;
