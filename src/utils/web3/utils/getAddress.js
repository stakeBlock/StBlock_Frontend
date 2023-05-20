import Web3 from "web3";

const web3 = new Web3(window.ethereum);

const getAddress = async () => {
  const address = await web3.eth.getAccounts();
  console.log(address);
  return address[0];
};

export default getAddress;
