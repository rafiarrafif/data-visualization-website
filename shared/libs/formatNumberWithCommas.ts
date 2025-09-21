export function formatNumberWithCommas(value: number | string): string {
  if (value === null || value === undefined) return "";
  const num = typeof value === "number" ? value : parseFloat(value);
  if (isNaN(num)) return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
