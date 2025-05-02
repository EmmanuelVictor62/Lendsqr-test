export const formattedNumber = (value: number | string) => {
  if (typeof value === "string") {
    value = parseFloat(value);
  }
  if (isNaN(value)) return "0";

  return value.toLocaleString("en-NG");
};

export const generateReadableSlug = (slug: string): string => {
  return slug
    ?.toLowerCase()
    ?.replace(/\s+/g, "-")
    ?.replace(/\//g, "-")
    ?.replace(/[^a-zA-Z0-9\-а-яА-ЯёЁ]/g, "");
};
