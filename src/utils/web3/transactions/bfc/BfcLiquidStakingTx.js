import getContract from "../../utils/getContract";

const BfcLiquidStakingTx = function (network) {
  const bfcLiquidStakingContract = getContract(network).bfcLiquidStakingContract;
  const stBfcContract = getContract(network).stBfcContract;

  //====== getter functions ======//
  this.totalStaked = async () => {
    const totalStaked = await bfcLiquidStakingContract.methods.totalStaked().call();
    return totalStaked;
  };
  this.claimed = async () => {
    const claimed = await bfcLiquidStakingContract.methods.claimed().call();
    return claimed;
  };
  this.claimable = async (account) => {
    const claimable = await bfcLiquidStakingContract.methods.claimable(account.address).call();
    return claimable;
  };
  this.totalReward = async () => {
    const totalReward = await bfcLiquidStakingContract.methods.totalDistributedRewards().call();
    return totalReward;
  };

  //====== service functions =======//
  this.stake = async (account, amount) => {
    const txResult = await bfcLiquidStakingContract.methods.stake().send({ from: account.address, value: amount });
    return txResult;
  };

  this.unstake = async (account, amount) => {
    await stBfcContract.methods.approve(bfcLiquidStakingContract._address, amount).send({ from: account.address });
    const txResult = await bfcLiquidStakingContract.methods.createUnstakeRequest(amount).send({ from: account.address });
    return txResult;
  };

  this.claim = async (account) => {
    const txResult = await bfcLiquidStakingContract.methods.claim().send({ from: account.address });
    return txResult;
  };
};

export default BfcLiquidStakingTx;
