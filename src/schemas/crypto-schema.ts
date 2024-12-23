import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

// export const CryptoSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   symbol: z.string(),
//   rank: z.number(),
//   price: z.number(),
//   marketCap: z.number(),
//   volume: z.number(),
//   circulatingSupply: z.number(),
//   change: z.number(),
// });
