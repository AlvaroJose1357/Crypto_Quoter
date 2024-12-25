import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoPriceSchema,
} from "../schemas/crypto-schema";
import { Pair } from "../types";

export async function getCryptos() {
  // const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios.get(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    // console.log(result.data);
    return result.data;
  } else {
    console.error(result.error);
    return [];
  }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios.get(url);
  // cuando las variables son dinamicas como en este caso se puede acceder a ellas mediante corchetes, ya que si se intenta acceder a ellas con un punto dara error por el mismo hecho que las hacen dinamicas
  // console.log(DISPLAY[pair.cryptocurrency][pair.currency]);
  const result = CryptoPriceSchema.safeParse(
    DISPLAY[pair.cryptocurrency][pair.currency]
  );
  // console.log(result);
  if (result.success) {
    return result.data;
  } else {
    console.error(result.error);
    return {};
  }
}
