/**
 * Format number
 * @param {number} number
 * @returns
 */
export const formatNumber = (number) => {
  return number.toLocaleString("en-US");
};

/**
 * Decode currency code into fancy symbol
 * @param {String} currency
 * @returns
 */
export const decodeCurrencyCode = (currency) => {
  switch (currency) {
    case "EUR":
      return "€";

    case "GBP":
      return "£";

    case "USD":
      return "$";

    default:
      break;
  }
};
