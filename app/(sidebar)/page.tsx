import React, { Suspense } from "react";
import InsightOverview from "@/features/overview/ui/widgets/InsightOverview";
import InsightOverviewLoading from "@/features/overview/ui/widgets/InsightOverview.loading";
import RevenueOverview from "@/features/overview/ui/widgets/RevenueOverview";
import RevenueOverviewLoading from "@/features/overview/ui/widgets/RevenueOverview.loading";

const page = () => {
  return (
    <div className="flex flex-col gap-3">
      <Suspense fallback={<InsightOverviewLoading />}>
        <InsightOverview />
      </Suspense>
      <Suspense fallback={<RevenueOverviewLoading />}>
        <RevenueOverview />
      </Suspense>
    </div>
  );
};

export default page;
