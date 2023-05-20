const switchNetwork = async (networkId) => {
  // Check if Metamask is installed and enabled
  if (window.ethereum) {
    // change network Id to hex
    const chainId = "0x" + networkId.toString(16);
    // Request to switch network
    window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
      })
      .then(() => {
        console.log("Switched network in Metamask");
        // Perform further operations on the switched network
      })
      .catch((error) => {
        // Switching network failed
        console.error("Failed to switch network in Metamask:", error);
      });
  } else {
    console.error("Metamask not detected. Please install Metamask extension.");
  }
};

export default switchNetwork;
