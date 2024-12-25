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
  }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;

  try {
    const {
      data: { DISPLAY },
    } = await axios.get(url);
    // Intentar validar con el esquema
    const result = CryptoPriceSchema.safeParse(
      DISPLAY[pair.cryptocurrency][pair.currency]
    );

    if (result.success) {
      return result.data;
    } else {
      console.error(result.error);
      return {
        IMAGEURL: "",
        PRICE: "",
        HIGHDAY: "",
        LOWDAY: "",
        CHANGEPCT24HOUR: "",
        LASTUPDATE: "",
      };
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    return {
      IMAGEURL: "",
      PRICE: "",
      HIGHDAY: "",
      LOWDAY: "",
      CHANGEPCT24HOUR: "",
      LASTUPDATE: "",
    };
  }
}
