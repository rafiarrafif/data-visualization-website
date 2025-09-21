import React from "react";
import CardInsight from "../components/CardInsight";
import { getTotalRevenue } from "../../model/getTotalRevenue";

const InsightOverview = async () => {
  const data = await getTotalRevenue();
  return (
    <div className="flex w-full gap-3">
      <CardInsight title="Total Revenue" value={String(data)} />
      <CardInsight title="Total Products" value="19" />
      <CardInsight title="Total Customers" value="200" />
    </div>
  );
};

export default InsightOverview;
