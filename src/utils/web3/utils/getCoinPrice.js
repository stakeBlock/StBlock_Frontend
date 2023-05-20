import React, { useState, useEffect } from "react";
import axios from "axios";

const CHANGE_coin_SYMBOL = "USDC";

let coinPrice;
async function getCoinPrice(coinName) {
  if (!coinPrice) {
    coinPrice = await getcoinPriceByCryptoCompare(coinName);
    return coinPrice;
  }

  return coinPrice;
}

async function getcoinPriceByCryptoCompare(coinName) {
  const CRYPTOCOMPARE_URL = `https://min-api.cryptocompare.com/data/price?fsym=${coinName}&tsyms=${CHANGE_coin_SYMBOL}`;
  // console.log("URL : ", CRYPTOCOMPARE_URL);
  const response = await axios.get(CRYPTOCOMPARE_URL);
  const result = response.data.USDC;
  // console.log("crypto : ", result);
  return result;
}

export default getCoinPrice;
