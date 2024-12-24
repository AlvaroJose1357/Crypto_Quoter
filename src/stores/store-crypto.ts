import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-schema";
import { CryptoCurrency } from "../types";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
};

async function getCryptos() {
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

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
  }))
);
