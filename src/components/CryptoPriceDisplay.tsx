import { useMemo } from "react";
import { useCryptoStore } from "../stores/store-crypto";
import Spinner from "./Spinner";
export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore((state) => state.loading);
  // si el objeto result esta vacio no mostramos nada en pantalla
  const hasResult = useMemo(
    () => !Object.values(result).includes(""),
    [result]
  );
  console.log(hasResult);
  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>Cotizacion</h2>
            <div className="result">
              <img
                src={`https://www.cryptocompare.com${result.IMAGEURL}`}
                alt="Imagen de la Criptomoneda"
              />
              <div>
                <p>
                  El Precio es de: <span>{result.PRICE}</span>
                </p>
                <p>
                  Precio mas alto del dia: <span>{result.HIGHDAY}</span>
                </p>
                <p>
                  Precio mas bajo del dia: <span>{result.LOWDAY}</span>
                </p>
                <p>
                  Variacion de las ultimas 24H :{" "}
                  <span>{result.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Ultima actualizacion: <span>{result.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
