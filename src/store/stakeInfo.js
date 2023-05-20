import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ATOM_STAKE_INFO } from "../constants/atom.constants";
const { persistAtom } = recoilPersist();

export const stakeInfoAtom = atom({
  key: ATOM_STAKE_INFO,
  default: {
    bfcAmount: 0,
    stBfcAmount: 0,
  },
});
