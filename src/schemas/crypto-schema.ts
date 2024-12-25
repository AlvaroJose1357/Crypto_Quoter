import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});
// se coloca en array debido a que la respuesta de la api es un array de  y en el anterior estamos definiendo un objeto
export const CryptoCurrenciesResponseSchema = z.array(
  CryptoCurrencyResponseSchema
);

export const PairShema = z.object({
  currency: z.string(),
  cryptocurrency: z.string(),
});

export const CryptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string(),
});
