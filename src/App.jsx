import React, { useEffect, useState } from "react";
import TelaIncial from "./components/tela_incial"; 
import TelaInicial6a0 from "./components/6a0/tela_incial_6a0"; 
import TelaInicialCopeira from "./components/copeira/tela_inicial_copeira"; 

function App() {
  // Em vez de pathname, usamos o hash. Adicionamos um estado para o React 
  // re-renderizar a página automaticamente se o utilizador clicar noutro link.
  const [rotaAtual, setRotaAtual] = useState(window.location.hash);

  // Este useEffect "escuta" a mudança na URL para atualizar a página sem recarregar
  useEffect(() => {
    const lidarComMudancaDeRota = () => {
      setRotaAtual(window.location.hash);
    };

    window.addEventListener("hashchange", lidarComMudancaDeRota);
    return () => window.removeEventListener("hashchange", lidarComMudancaDeRota);
  }, []);

  useEffect(() => {
    // Verificamos a rota atual no hash
    if (rotaAtual.includes("copeiro") || rotaAtual.includes("copeira")) {
      document.title = "Copeira - A Copa é Delas";
    } else if (rotaAtual.includes("torneio")) {
      document.title = "6x0 - A Copa é Delas";
    } else {
      document.title = "Universo - A Copa é Delas";
    }
  }, [rotaAtual]);

  // Vai para o ecrã da Copeira
  if (rotaAtual.includes("copeiro") || rotaAtual.includes("copeira")) {
    return <TelaInicialCopeira />;
  }
  
  // Vai para o ecrã do Simulador 6a0
  if (rotaAtual.includes("torneio")) {
    return <TelaInicial6a0 />;
  }

  // Se não for nenhum dos dois (ex: a URL é apenas /), carrega o Ecrã Geral (Hub)
  return <TelaIncial />;
}

export default App;