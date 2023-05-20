import getContract from "../../utils/getContract";

const BlkTx = function (network) {
  const blkContract = getContract(network).blkContract;
  //====== getter functions ======//
  this.balanceOf = async (account) => {
    const balance = await blkContract.methods.balanceOf(account.address).call();
    return balance;
  };

  //====== service functions =======//
  this.transfer = async (account, recipient, amount) => {
    const txResult = await blkContract.methods.transfer(recipient, amount).send({ from: account.address, value: amount });
    return txResult;
  };
};

export default BlkTx;
