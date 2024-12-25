import { useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../stores/store-crypto";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  // const { cryptocurrencies } = useCryptoStore();
  const [error, setError] = useState<string>("");
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

  const hangleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (pair.currency.trim() === "" || pair.cryptocurrency.trim() === "") {
    //   setError("Todos los campos son obligatorios");
    //   return;
    // }
    if (Object.values(pair).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    // si la valicacion pasa consultamos la API
    console.log(pair);
  };
  return (
    <form
      className="form"
      onSubmit={hangleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Elige tu Moneda</label>
        <select
          name="currency"
          id="currency"
          className="form-control"
          value={pair.currency}
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
          value={pair.cryptocurrency}
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
