"use server";

import { db } from "@/shared/libs/db";

export interface CustomerEmailProviderData {
  city: string;
  total: number;
}

export const getCustomerEmailProviderData = async () => {
  const rows = (await db
    .prepare(
      `
        SELECT city, count(*) as total
        FROM customers
        GROUP BY city
        `
    )
    .all()) as CustomerEmailProviderData[];

  return rows.map((row) => ({
    city: row.city,
    total: row.total,
  }));
};
