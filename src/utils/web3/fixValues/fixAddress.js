export const fixAddress = (address, maxLength) => {
  if (address === "" || address === undefined) return "";
  if (address.length <= maxLength) return address;

  const halfMaxLength = Math.floor((maxLength - 3) / 2); // Subtract 3 for the length of '...'
  const truncatedString = address.slice(0, halfMaxLength) + "..." + address.slice(address.length - halfMaxLength);

  return truncatedString;
};
