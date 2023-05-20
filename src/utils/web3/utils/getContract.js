import Web3 from "web3";
import bfcAddresses from "../../../addresses/bfc/contractAddresses.json";

//------Artifacts------//
import BfcLiquidStaking from "../../../artifacts/bfc/BfcLiquidStaking.json";
import StBfc from "../../../artifacts/bfc/StBfc.json";
import Blk from "../../../artifacts/bfc/Blk.json";
import StakeStBfc from "../../../artifacts/bfc/StakeStBfc.json";
//----------------------//

import { NETWORK_DEFAULT, NETWORK_BFC } from "../../../constants/network.constants";

const web3 = new Web3(window.ethereum);
//const goerliWeb3 = new Web3(process.env.REACT_APP_GOERLI_RPC_URL);
const getContract = (network) => {
  let stBfcContract, bfcLiquidStakingContract, blkContract, stakeStBfcContract;

  if (network == null || network.id == NETWORK_DEFAULT.id) {
    //pass
  } else if (network.id == NETWORK_BFC.id) {
    //bfc
    stBfcContract = new web3.eth.Contract(StBfc.abi, bfcAddresses.stBFCContractAddress);
    bfcLiquidStakingContract = new web3.eth.Contract(BfcLiquidStaking.abi, bfcAddresses.bfcLiquidStakingContractAddress);
    blkContract = new web3.eth.Contract(Blk.abi, bfcAddresses.blkContractAddress);
    stakeStBfcContract = new web3.eth.Contract(StakeStBfc.abi, bfcAddresses.stakeStBfcContractAddress);
  }

  return {
    stBfcContract,
    bfcLiquidStakingContract,
    blkContract,
    stakeStBfcContract,
  };
};

export default getContract;
