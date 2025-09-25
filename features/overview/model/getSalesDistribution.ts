"use server";

import { db } from "@/shared/libs/db";

export const getSalesDistribution = async () => {
  const stores = db
    .prepare(`SELECT type FROM stores`)
    .all()
    .map((s: any) => s.type);

  const rows = db
    .prepare(
      `
    SELECT 
      strftime('%m-%Y', t.created_at) AS date,
      s.type AS store,
      SUM(t.total) AS total
    FROM transactions t
    JOIN stores s ON t.store_id = s.id
    GROUP BY strftime('%m-%Y', t.created_at), s.type
    ORDER BY t.created_at
  `
    )
    .all();

  const grouped: Record<string, any> = {};

  rows.forEach((row: any) => {
    if (!grouped[row.date]) {
      grouped[row.date] = { date: row.date };
      stores.forEach((store) => {
        grouped[row.date][store] = 0;
      });
    }
    grouped[row.date][row.store] = row.total ?? 0;
  });

  return Object.values(grouped);
};
