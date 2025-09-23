import React from "react";
import CardRevenue from "../components/CardRevenue";
import { getRevenueHistory } from "../../model/getRevenueHistory";

const RevenueOverview = async () => {
  const data = await getRevenueHistory();
  return (
    <div>
      <CardRevenue data={data} />
    </div>
  );
};

export default RevenueOverview;
