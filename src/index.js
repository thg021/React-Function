import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //inicio
  const [estado, setEstado] = useState("ENTRADA");
  //palpite
  const [palpite, setPalpite] = useState(150);
  //chute
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o numero {palpite} com {numPalpites} chutes
        </p>
        <button onClick={iniciarJogo}>Iniciar Novamente</button>
      </div>
    );
  }
  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
