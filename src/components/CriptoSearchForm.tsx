import { currencies } from "../data";

export default function CriptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Elige tu Moneda</label>
        <select
          name="currency"
          id="currency"
          className="form-control">
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
        <label htmlFor="cripto">Elige tu Criptomoneda</label>
        <select
          name="cripto"
          id="cripto"
          className="form-control">
          <option value="">- Selecciona tu criptomoneda-</option>
          {}
        </select>
      </div>
      <input
        type="submit"
        value="Calcular"
      />
    </form>
  );
}
