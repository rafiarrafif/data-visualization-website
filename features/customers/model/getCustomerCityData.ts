"use server";

import { db } from "@/shared/libs/db";

export interface CustomerCityData {
  city: string;
  total: number;
}

export const getCustomerCityData = async () => {
  const rows = (await db
    .prepare(
      `
        SELECT city, count(*) as total
        FROM customers
        GROUP BY city
        `
    )
    .all()) as CustomerCityData[];

  return rows
    .map((row) => ({
      city: row.city,
      total: row.total,
    }))
    .sort((a, b) => b.total - a.total);
};
