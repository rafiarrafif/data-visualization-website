import { db } from "@/shared/libs/db";

export const getRevenueHistory = async () => {
  const revenueHistoryData = await db
    .prepare(
      `
      SELECT strftime('%m-%Y', created_at) as date,
              SUM(total) as total
      FROM transactions
      GROUP BY strftime('%m-%Y', created_at)
      ORDER BY created_at
    `
    )
    .all();

  return revenueHistoryData as { total: number; date: string }[];
};
