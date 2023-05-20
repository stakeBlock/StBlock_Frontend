export const isTokenAdded = async (tokenAddress, tokenSymbol, tokenDecimals) => {
  // try {
  //   // wasAdded is a boolean. Like any RPC method, an error can be thrown.
  //   const wasAdded = await ethereum.request({
  //     method: "wallet_watchAsset",
  //     params: {
  //       type: "ERC20", // Initially only supports ERC-20 tokens, but eventually more!
  //       options: {
  //         address: tokenAddress, // The address of the token.
  //         symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 characters.
  //         decimals: tokenDecimals, // The number of decimals in the token.
  //       },
  //     },
  //   });

  //   if (wasAdded) {
  //     console.log("Thanks for your interest!");
  //     return true;
  //   } else {
  //     console.log("Your loss!");
  //     return false;
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const balance = await ethereum.request({
      method: "eth_getBalance",
      params: [tokenAddress, "latest"],
    });
    console.log(balance);
    return balance; // Token is added if balance is returned
  } catch (error) {
    return false; // Token is not added if balance retrieval fails
  }
};
