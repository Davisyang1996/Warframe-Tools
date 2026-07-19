// rounding function since Warframe math is rounded to 1 decimal place
export function roundTo(num: number, places: number): number {
  const factor = 10 ** places;
  return Math.round(num * factor) / factor;
}
