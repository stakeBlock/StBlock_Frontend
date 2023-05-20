import { NETWORK_BFC } from "../../../constants/network.constants";

export const fixBalance = (balance, network) => {
  if (balance <= 0) return 0;

  if (network.id == NETWORK_BFC.id) {
    return Number(balance / 10 ** 18).toFixed(5);
  } else {
    return Number(balance / 10 ** 18).toFixed(5);
  }
};
