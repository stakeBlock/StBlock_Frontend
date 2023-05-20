import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ATOM_NETWORK } from "../constants/atom.constants";
import { NETWORK_DEFAULT } from "../constants/network.constants";
const { persistAtom } = recoilPersist();

export const networkAtom = atom({
  key: ATOM_NETWORK,
  default: NETWORK_DEFAULT,
  effects_UNSTABLE: [persistAtom],
});
