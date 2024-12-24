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
