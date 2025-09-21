import React from "react";
import CardInsight from "../components/CardInsight";
import { formatNumberWithCommas } from "@/shared/libs/formatNumberWithCommas";
import { formatNumberWithUnits } from "@/shared/libs/formatNumberWithUnits";
import { getOverviewData } from "../../model/getOverviewData";

const InsightOverview = async () => {
  const data = await getOverviewData();
  return (
    <div className="flex w-full gap-3">
      <CardInsight title="Total Products" value={`${data.products}`} />
      <CardInsight
        title="Total Revenue"
        value={`${formatNumberWithUnits(data.revenue)}`}
        unit="Rupiah"
      />
      <CardInsight
        title="Total Customers"
        value={`${formatNumberWithCommas(data.customers)}`}
      />
    </div>
  );
};

export default InsightOverview;
