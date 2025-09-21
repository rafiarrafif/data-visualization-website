export function formatNumberWithUnits(value: number): string {
  const abs = Math.abs(value);
  const isNegative = value < 0;
  const prefix = isNegative ? "-" : "";

  // Jika lebih dari 100 milyar, tampilkan penuh tanpa pembatasan 4 digit
  if (abs >= 100_000_000_000) {
    const milyar = abs / 1_000_000_000;
    return `${prefix}${milyar.toLocaleString("id-ID")}m`;
  }

  // Milyar (1m - 999,9m)
  if (abs >= 1_000_000_000) {
    const milyar = abs / 1_000_000_000;

    if (milyar >= 100) {
      // 100m ke atas: format 3,1 (contoh: 343,2m)
      return `${prefix}${milyar.toFixed(1)}m`;
    } else if (milyar >= 10) {
      // 10m - 99,99m: format 2,2 (contoh: 39,10m)
      return `${prefix}${milyar.toFixed(2)}m`;
    } else {
      // 1m - 9,999m: format 1,3 (contoh: 1,234m)
      return `${prefix}${milyar.toFixed(3)}m`;
    }
  }

  // Juta (1jt - 999,9jt)
  if (abs >= 1_000_000) {
    const juta = abs / 1_000_000;

    if (juta >= 100) {
      // 100jt ke atas: format 3,1 (contoh: 870,2jt)
      return `${prefix}${juta.toFixed(1)}jt`;
    } else if (juta >= 10) {
      // 10jt - 99,99jt: format 2,2 (contoh: 49,80jt)
      return `${prefix}${juta.toFixed(2)}jt`;
    } else {
      // 1jt - 9,999jt: format 1,3 (contoh: 1,234jt)
      return `${prefix}${juta.toFixed(3)}jt`;
    }
  }

  // Ribu (1k - 999,9k)
  if (abs >= 1_000) {
    const ribu = abs / 1_000;

    if (ribu >= 100) {
      // 100k ke atas: format 3,1 (contoh: 343,2k)
      return `${prefix}${ribu.toFixed(1)}k`;
    } else if (ribu >= 10) {
      // 10k - 99,99k: format 2,2 (contoh: 39,10k)
      return `${prefix}${ribu.toFixed(2)}k`;
    } else {
      // 1k - 9,999k: format 1,3 (contoh: 1,234k)
      return `${prefix}${ribu.toFixed(3)}k`;
    }
  }

  // Kurang dari 1000, tampilkan angka asli
  return `${prefix}${abs}`;
}
