import React, { Suspense } from "react";
import InsightOverview from "@/features/overview/ui/widgets/InsightOverview";
import InsightOverviewLoading from "@/features/overview/ui/widgets/InsightOverview.loading";
import RevenueOverview from "@/features/overview/ui/widgets/RevenueOverview";
import RevenueOverviewLoading from "@/features/overview/ui/widgets/RevenueOverview.loading";
import DistributionOverview from "@/features/overview/ui/widgets/DistributionOverview";
import DistributionOverviewLoading from "@/features/overview/ui/widgets/DistributionOverview.loading";

const page = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <Suspense fallback={<InsightOverviewLoading />}>
        <InsightOverview />
      </Suspense>
      <Suspense fallback={<RevenueOverviewLoading />}>
        <RevenueOverview />
      </Suspense>
      <Suspense fallback={<DistributionOverviewLoading />}>
        <DistributionOverview />
      </Suspense>
    </div>
  );
};

export default page;
