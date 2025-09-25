import React from "react";
import CardDistribution from "../components/CardDistribution";
import { getSalesDistribution } from "../../model/getSalesDistribution";

const DistributionOverview = async () => {
  const distributionData: Record<string, any> = await getSalesDistribution();
  return (
    <div>
      <CardDistribution data={distributionData} />
    </div>
  );
};

export default DistributionOverview;
