const shortenAddress = (address: string) => {
  if (!address || address.length <= 10) return address;

  return `${address.substring(0, 4)}..${address.substring(address.length - 4)}`;
};
export default shortenAddress;
