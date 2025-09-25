"use server";

import { db } from "@/shared/libs/db";
import { DistributionData } from "../ui/components/CardDistribution";

type StoreType = string;

interface StoreRow {
  type: StoreType;
}

interface SalesRow {
  date: string;
  store: StoreType;
  total: number;
}

type GroupedSales = Record<
  string,
  { date: string } & { [storeType: string]: number | string }
>;

export const getSalesDistribution = async () => {
  const stores = db.prepare(`SELECT type FROM stores`).all() as StoreRow[];
  const storeTypes = stores.map((s) => s.type);

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
    .all() as SalesRow[];

  const grouped: GroupedSales = {};

  rows.forEach((row) => {
    if (!grouped[row.date]) {
      grouped[row.date] = { date: row.date };
      storeTypes.forEach((store) => {
        grouped[row.date][store] = 0;
      });
    }
    grouped[row.date][row.store] = row.total ?? 0;
  });

  return Object.values(grouped).map((row) => {
    const completeRow: DistributionData = {
      date: row.date,
      "Ofline store": Number(row["Ofline store"] ?? 0),
      "Online store": Number(row["Online store"] ?? 0),
      Event: Number(row["Event"] ?? 0),
      Partnership: Number(row["Partnership"] ?? 0),
    };
    return completeRow;
  });
};
