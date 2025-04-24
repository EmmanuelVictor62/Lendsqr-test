export const formattedNumber = (value: number | string) => {
  if (typeof value === "string") {
    value = parseFloat(value);
  }
  if (isNaN(value)) return "0";

  return value.toLocaleString("en-NG");
};
