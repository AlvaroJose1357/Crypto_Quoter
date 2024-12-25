import { useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../stores/store-crypto";
import { Pair } from "../types";

export default function CriptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  // const { cryptocurrencies } = useCryptoStore();
  const [pair, setPair] = useState<Pair>({
    currency: "",
    cryptocurrency: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Elige tu Moneda</label>
        <select
          name="currency"
          id="currency"
          className="form-control"
          onChange={handleChange}>
          <option value="">- Selecciona tu moneda-</option>
          {currencies.map((currency) => (
            <option
              key={currency.code}
              value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cryptocurrency">Elige tu Criptomoneda</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          className="form-control"
          onChange={handleChange}>
          <option value="">- Selecciona tu criptomoneda-</option>
          {cryptocurrencies.map((crypto) => (
            <option
              key={crypto.CoinInfo.Name}
              value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        value="Calcular"
      />
    </form>
  );
}
