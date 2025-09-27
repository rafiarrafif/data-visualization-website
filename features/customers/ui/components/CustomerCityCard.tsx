"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { CustomerCityData } from "../../model/getCustomerCityData";
import React from "react";
import ReactApexChart from "react-apexcharts";

const CustomerCityCard = ({ data }: { data: CustomerCityData[] }) => {
  return (
    <Card>
      <CardHeader>Customer Email Provider</CardHeader>
      <CardBody>
        <ReactApexChart
          series={[
            {
              data: data.map((d) => d.total),
              name: "Total Customer",
              color: "#56aa06",
            },
          ]}
          options={{
            xaxis: {
              categories: data.map((d) => d.city),
            },
            dataLabels: {
              enabled: true,
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                borderRadiusApplication: "end",
                horizontal: true,
              },
            },
          }}
          type="bar"
          height={380}
        />
      </CardBody>
    </Card>
  );
};

export default CustomerCityCard;
