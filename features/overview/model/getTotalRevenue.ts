"use server";

export const getTotalRevenue = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return 92000;
};
