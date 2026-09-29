import React, { useEffect } from "react";
import TelaIncial from "./components/tela_incial"; // A nova tela geral
import TelaInicial6a0 from "./components/6a0/tela_incial_6a0"; // Sua tela do 6a0
import TelaInicialCopeira from "./components/copeira/tela_inicial_copeira"; // Sua tela da Copeira

function App() {
  const rotaAtual = window.location.pathname;

  useEffect(() => {
    if (rotaAtual.includes("/copeiro")) {
      document.title = "Copeira - A Copa é Delas";
    } else if (rotaAtual.includes("/torneio")) {
      document.title = "6x0 - A Copa é Delas";
    } else {
      document.title = "Universo - A Copa é Delas";
    }
  }, [rotaAtual]);

  // Vai para a tela da Copeira
  if (rotaAtual.includes("/copeiro")) {
    return <TelaInicialCopeira />;
  }
  
  // Vai para a tela do Simulador 6a0
  if (rotaAtual.includes("/torneio")) {
    return <TelaInicial6a0 />;
  }

  // Se não for nenhum dos dois, carrega a Tela Geral (Hub)
  return <TelaIncial />;
}

export default App;