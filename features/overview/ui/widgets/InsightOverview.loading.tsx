"use client";
import { Skeleton } from "@heroui/react";
import React from "react";

const InsightOverviewLoading = () => {
  return (
    <div className="flex w-full gap-3">
      <Skeleton className="flex-1 h-[132px] rounded-xl" />
      <Skeleton className="flex-1 h-[132px] rounded-xl" />
      <Skeleton className="flex-1 h-[132px] rounded-xl" />
    </div>
  );
};

export default InsightOverviewLoading;
