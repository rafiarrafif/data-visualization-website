import React, { Suspense } from "react";
import InsightOverview from "@/features/overview/ui/widgets/InsightOverview";
import InsightOverviewLoading from "@/features/overview/ui/widgets/InsightOverview.loading";

const page = () => {
  return (
    <div>
      <Suspense fallback={<InsightOverviewLoading />}>
        <InsightOverview />
      </Suspense>
    </div>
  );
};

export default page;
