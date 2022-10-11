export function formatMoney(value: number) {
  return value.toLocaleString("fr", {
    minimumFractionDigits: 2,
  });
}
