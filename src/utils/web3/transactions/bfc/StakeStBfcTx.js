import Web3 from "web3";
import getContract from "../../utils/getContract";

const web3 = new Web3(window.ethereum);
const StakeStBfcTx = function (network) {
  const stakeStBfcContract = getContract(network).stakeStBfcContract;
  const stBfcContract = getContract(network).stBfcContract;
  //====== getter functions ======//
  this.totalStaked = async () => {
    const txResult = await stakeStBfcContract.methods.totalStakedAmount().call();
    return txResult;
  };
  this.stakedAmount = async (account) => {
    const txResult = await stakeStBfcContract.methods.stakedAmount(account.address).call();
    return txResult;
  };
  this.rewardAmountBlk = async (account) => {
    const txResult = await stakeStBfcContract.methods.rewardAmountBlk(account.address).call();
    return txResult;
  };
  this.rewardAmountBfc = async (account) => {
    const txResult = await stakeStBfcContract.methods.rewardAmountBfc(account.address).call();
    return txResult;
  };
  this.unstakedAmount = async (account) => {
    const txResult = await stakeStBfcContract.methods.unstakedAmount(account.address).call();
    return txResult;
  };
  this.unstakablePeriod = async (account) => {
    const txResult = await stakeStBfcContract.methods.unstakablePeriod(account.address).call();
    return txResult;
  };
  this.unstakePeriod = async () => {
    const txResult = await stakeStBfcContract.methods.unstakePeriod().call();
    return txResult;
  };
  this.bfcMintingPeriod = async () => {
    const txResult = await stakeStBfcContract.methods.bfcMintingPeriod().call();
    return txResult;
  };
  this.bfcLastMinted = async () => {
    const txResult = await stakeStBfcContract.methods.bfcLastMinted().call();
    return txResult;
  };
  this.blkMintingPeriod = async () => {
    const txResult = await stakeStBfcContract.methods.blkMintingPeriod().call();
    return txResult;
  };
  this.blkLastMinted = async () => {
    const txResult = await stakeStBfcContract.methods.blkLastMinted().call();
    return txResult;
  };

  //====== service functions =======//
  this.stake = async (account, amount) => {
    await stBfcContract.methods.approve(stakeStBfcContract._address, amount).send({ from: account.address });
    const txResult = await stakeStBfcContract.methods.stake(amount).send({ from: account.address });
    return txResult;
  };
  this.unstake = async (account, amount) => {
    const txResult = await stakeStBfcContract.methods.unstake(amount).send({ from: account.address });
    return txResult;
  };
  this.claimStBfc = async (account) => {
    const txResult = await stakeStBfcContract.methods.claimStBfc().send({ from: account.address });
    return txResult;
  };
  this.claimBlk = async (account) => {
    const txResult = await stakeStBfcContract.methods.claimBlk().send({ from: account.address });
    return txResult;
  };
  this.claimUnstaked = async (account) => {
    const txResult = await stakeStBfcContract.methods.claimUnstaked().send({ from: account.address });
    return txResult;
  };
};

export default StakeStBfcTx;
