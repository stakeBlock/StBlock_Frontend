import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ATOM_WALLET } from "../constants/atom.constants";
import { WALLET_DEFAULT } from "../constants/wallet.constants";
const { persistAtom } = recoilPersist();

export const walletAtom = atom({
  key: ATOM_WALLET,
  default: WALLET_DEFAULT,
  effects_UNSTABLE: [persistAtom],
});
