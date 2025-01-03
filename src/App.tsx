import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore } from "./stores/store-crypto";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {
  // const { fetchCrypto } = useCryptoStore();
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          {/* Formulario
          Contenido del form */}
          <CriptoSearchForm />
          {/* Resultado */}
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
