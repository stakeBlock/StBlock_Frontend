import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ATOM_ACCOUNT } from "../constants/atom.constants";
const { persistAtom } = recoilPersist();

export const accountAtom = atom({
  key: ATOM_ACCOUNT,
  default: {
    address: undefined,
    balance: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
