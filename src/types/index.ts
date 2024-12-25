import { z } from "zod";
import {
  CryptoCurrencyResponseSchema,
  CryptoPriceSchema,
  CurrencySchema,
  PairShema,
} from "../schemas/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof PairShema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
