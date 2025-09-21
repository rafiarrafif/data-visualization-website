"use server";

import { db } from "@/shared/libs/db";

export const getOverviewData = async () => {
  const revenue = db
    .prepare("SELECT SUM(total) as total FROM transactions")
    .get() as { total: number };
  const customerCount = db
    .prepare("SELECT COUNT(*) as total FROM customers")
    .get() as { total: number };
  const productCount = db
    .prepare("SELECT COUNT(*) as total FROM products")
    .get() as { total: number };

  return {
    revenue: revenue.total || 0,
    customers: customerCount.total || 0,
    products: productCount.total || 0,
  };
};
