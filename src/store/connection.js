import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ATOM_CONNECTION } from "../constants/atom.constants";
const { persistAtom } = recoilPersist();

export const connectionAtom = atom({
  key: ATOM_CONNECTION,
  default: {
    walletConnection: false,
    networkConnection: false,
  },
});
