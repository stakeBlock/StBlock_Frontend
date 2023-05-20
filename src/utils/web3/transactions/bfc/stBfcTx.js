import getContract from "../../utils/getContract";

const StBfcTx = function (network) {
  const stBfcContract = getContract(network).stBfcContract;
  //====== getter functions ======//
  this.balanceOf = async (account) => {
    const balance = await stBfcContract.methods.balanceOf(account.address).call();
    return balance;
  };

  //====== service functions =======//
  this.transfer = async (account, recipient, amount) => {
    const txResult = await stBfcContract.methods.transfer(recipient, amount).send({ from: account.address, value: amount });
    return txResult;
  };
};

export default StBfcTx;
