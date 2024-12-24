import axios from "axios";
import { create } from "zustand";
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-schema";

async function getCryptos() {
  // const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios.get(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  console.log(result);
}

export const useCryptoStore = create(() => ({
  // crypto: [],
  // setCrypto: (crypto) => set({ crypto }),
  fetchCryptos: async () => {
    getCryptos();
  },
}));
