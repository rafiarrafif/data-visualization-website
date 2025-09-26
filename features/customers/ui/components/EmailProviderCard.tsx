"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { CustomerEmailProviderData } from "../../model/getCustomerEmailProviderData";
import React from "react";
import Chart from "react-apexcharts";

const EmailProviderCard = ({ data }: { data: CustomerEmailProviderData[] }) => {
  return (
    <Card>
      <CardHeader>Customer Email Provider</CardHeader>
      <CardBody>
        <Chart
          series={data.map((d) => d.total)}
          options={{
            chart: {
              width: 380,
              type: "pie",
            },
            labels: data.map((d) => d.city),
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                  },
                  legend: {
                    position: "bottom",
                  },
                },
              },
            ],
          }}
          type="pie"
          width={380}
        />
      </CardBody>
    </Card>
  );
};

export default EmailProviderCard;
