import React, { useState, useMemo, useEffect } from "react";

import listaPaises from "../../dados/bandeira_paises_com_camisa";

const posicoesCampo = [
  { id: "CA", label: "CA", top: "15%", left: "50%" },
  { id: "PE", label: "PE", top: "20%", left: "20%" },
  { id: "PD", label: "PD", top: "20%", left: "80%" },
  { id: "MEI", label: "MEI", top: "30%", left: "50%" },
  { id: "ME", label: "ME", top: "40%", left: "20%" },
  { id: "MC", label: "MC", top: "45%", left: "50%" },
  { id: "MD", label: "MD", top: "40%", left: "80%" },
  { id: "VOL", label: "VOL", top: "60%", left: "50%" },
  { id: "LE", label: "LE", top: "70%", left: "20%" },
  { id: "LD", label: "LD", top: "70%", left: "80%" },
  { id: "ZAG", label: "ZAG", top: "75%", left: "50%" },
  { id: "GOL", label: "GOL", top: "90%", left: "50%" },
];

export default function DefinirIdentidade({ aoConfirmar, aoVoltar }) {
  // Controla o aparecimento do post-it misterioso
  const [mostrarDica, setMostrarDica] = useState(false);

  useEffect(() => {
    // O bilhete vai aparecer após 6 segundos (6000 milissegundos)
    const timer = setTimeout(() => {
      setMostrarDica(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);
  const [nome, setNome] = useState("SEU NOME");
  const [numero, setNumero] = useState("10");
  const [perna, setPerna] = useState("Esquerda");
  const [paisSelecionado, setPaisSelecionado] = useState("Brasil");
  const [posicaoSelecionada, setPosicaoSelecionada] = useState("CA");
  const [buscaPais, setBuscaPais] = useState("");

  const [easterEggRichmond, setEasterEggRichmond] = useState(false);


  // Verifica se o utilizador digitou apenas o primeiro nome de alguma jogadora
  const sóPrimeiroNome = useMemo(() => {
    const primeiroNome = nome.toLowerCase().trim().split(" ")[0];
    const primeirosNomesRichmond = ["gemma", "niamh", "siobhan", "lizzie", "margy", "mady", "shannon", "boots"];

    // Retorna true se bater certo com o primeiro nome e o Easter Egg ainda não estiver completo
    return primeirosNomesRichmond.includes(primeiroNome) && !easterEggRichmond;
  }, [nome, easterEggRichmond]);
  // Verificação em tempo real do Easter Egg
  useMemo(() => {
    const n = nome.toLowerCase().trim();
    const num = String(numero).trim();
    const pais = paisSelecionado;
    const pos = posicaoSelecionada;

    const isRichmond = (
      (n === "boots" && num === "1" && pos === "GOL" && pais === "Inglaterra") ||
      (n === "niamh harrigan" && num === "5" && pos === "LE" && pais === "Irlanda") ||
      (n === "siobhan harrigan" && num === "4" && pos === "LD" && pais === "Irlanda") ||
      (n === "lizzie davis" && num === "3" && pos === "ZAG" && pais === "Inglaterra") ||
      (n === "margy el sherif" && num === "11" && pos === "LE" && pais === "Inglaterra") ||
      (n === "mady song" && num === "6" && pos === "MC" && pais === "Inglaterra") ||
      (n === "shannon stone" && num === "21" && pos === "CA" && pais === "Inglaterra") ||
      (n === "gemma jay" && num === "47" && pos === "CA" && pais === "Inglaterra")
    );

    setEasterEggRichmond(isRichmond);
  }, [nome, numero, paisSelecionado]);

  const paisesFiltrados = listaPaises.filter((p) =>
    p.nome.toLowerCase().includes(buscaPais.toLowerCase())
  );

  const coresCamisaAtual = useMemo(() => {
    const pais = listaPaises.find((p) => p.nome === paisSelecionado);
    return pais ? pais.cores : { bg: "#FDE047", text: "#1C8144" };
  }, [paisSelecionado]);

  const lidarComConfirmacao = () => {
    const dadosJogadora = { nome, numero, perna, paisSelecionado, posicaoSelecionada };
    console.log("Identidade Criada:", dadosJogadora);
    if (aoConfirmar) aoConfirmar(dadosJogadora);
  };

  const animacoesCss = `
    .anime-up { animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
    .delay-1 { animation-delay: 0.15s; }
    .delay-2 { animation-delay: 0.30s; }
    @keyframes fadeSlideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .scroll-paises::-webkit-scrollbar { width: 6px; }
    .scroll-paises::-webkit-scrollbar-track { background: #F6F2F5; border-left: 2px solid #111; }
    .scroll-paises::-webkit-scrollbar-thumb { background: #111; }

    /* ================= MACETES RECONVERSORES PARA MOBILE ================= */
    @media (max-width: 768px) {
      .app-page {
        padding: 16px !important;
        justify-content: flex-start !important;
      }
      .app-header-ti {
        justify-content: center !important;
        margin-bottom: 20px !important;
      }
      .main-title {
        font-size: 32px !important;
        line-height: 1.1 !important;
      }
      .container-colunas {
        flex-direction: column !important;
        max-height: none !important; /* Remove limite de altura no mobile para não cortar conteúdo */
        gap: 30px !important;
      }
      .coluna {
        max-width: 100% !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      .grid-paises {
        max-height: 250px !important; /* Mantém a rolagem funcional sem ocupar todo o ecrã vertical */
      }
      .field-container {
        min-height: 320px !important; /* Garante que o campo de futebol seja visível no telemóvel */
      }
      .app-footer {
        padding: 0 !important;
        margin-top: 30px !important;
      }
      .btn-confirmar {
        width: 100% !important;
        padding: 18px !important;
        font-size: 16px !important;
      }
    }
  `;

  return (
    <div className="app-page" style={styles.page}>
      <header className="anime-up app-header-ti" style={styles.headerTI}>
        <div style={styles.logoMiniTI}>
          <span style={{ color: "#00E5FF" }}>COPEIRA</span> A COPA É DELAS
        </div>
      </header>
      <style>{animacoesCss}</style>

      <header className="anime-up app-header" style={{ ...styles.header, position: "relative", minHeight: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>

        {/* 🐶 EASTER EGG: MURAL BELIEVE SUBSTITUINDO O TÍTULO */}
        {easterEggRichmond ? (
          <div className="anime-up" style={{
            position: "relative",
            margin: "10px auto 20px auto", // Ocupa exatamente o espaço do título
            width: "500px",
            height: "110px",
            zIndex: 10
          }}>
            {/* Simulação dos Post-its Coloridos */}
            {[
              // Lado Esquerdo
              { x: -260, y: 15, c: "#FF69B4", r: -5 }, { x: -240, y: 40, c: "#FCE300", r: 8 },
              { x: -220, y: 5, c: "#98FB98", r: -12 }, { x: -200, y: 55, c: "#FFA07A", r: 5 },
              { x: -180, y: 25, c: "#87CEFA", r: -3 }, { x: -160, y: 70, c: "#FCE300", r: 10 },
              { x: -250, y: 70, c: "#87CEFA", r: 15 }, { x: -190, y: -5, c: "#FFA07A", r: -10 },
              { x: -140, y: 10, c: "#FF69B4", r: -8 }, { x: -130, y: 75, c: "#98FB98", r: 6 },

              // Embaixo do Cartaz (escondidos/saindo pelas bordas)
              { x: -80, y: 95, c: "#87CEFA", r: 4 }, { x: -40, y: 90, c: "#FCE300", r: -6 },
              { x: 0, y: 95, c: "#98FB98", r: -2 }, { x: 40, y: 90, c: "#FFA07A", r: 8 },
              { x: 80, y: 95, c: "#FF69B4", r: -5 }, { x: 120, y: 90, c: "#FCE300", r: 5 },

              // Lado Direito
              { x: 140, y: 15, c: "#87CEFA", r: 10 }, { x: 150, y: 75, c: "#FF69B4", r: -8 },
              { x: 170, y: 5, c: "#FCE300", r: 5 }, { x: 180, y: 50, c: "#98FB98", r: -12 },
              { x: 200, y: 20, c: "#FFA07A", r: 7 }, { x: 220, y: 65, c: "#87CEFA", r: -4 },
              { x: 240, y: 5, c: "#FCE300", r: 9 }, { x: 260, y: 45, c: "#FF69B4", r: -6 },
              { x: 280, y: 25, c: "#98FB98", r: 15 }, { x: 160, y: -5, c: "#FF69B4", r: 10 },
              { x: 230, y: 80, c: "#87CEFA", r: 5 }, { x: 250, y: -5, c: "#FCE300", r: -10 },

              // Topo (Alguns aparecendo acima da placa)
              { x: -70, y: -10, c: "#FFA07A", r: -15 }, { x: -20, y: -15, c: "#FF69B4", r: 12 },
              { x: 30, y: -10, c: "#98FB98", r: 5 }, { x: 80, y: -15, c: "#FCE300", r: -5 }
            ].map((nota, i) => (
              <div key={i} style={{
                position: "absolute",
                top: `${nota.y}px`,
                marginLeft: `${nota.x}px`,
                left: "50%",
                width: "20px",
                height: "20px",
                background: nota.c,
                transform: `rotate(${nota.r}deg)`,
                boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                zIndex: 1
              }}></div>
            ))}

            {/* Cartaz Principal BELIEVE */}
            <div style={{
              position: "absolute",
              top: "5px",
              left: "50%",
              transform: "translateX(-50%) rotate(-1deg)",
              background: "#2B78C5",
              color: "#FCE300",
              padding: "15px 55px",
              fontSize: "48px",
              lineHeight: "1",
              fontWeight: "900",
              fontFamily: "'Comic Sans MS', 'Marker Felt', Impact, sans-serif",
              letterSpacing: "4px",
              boxShadow: "3px 3px 6px rgba(0,0,0,0.3)",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              {/* Fita-cola escura reposicionada */}
              <div style={{
                position: "absolute",
                top: "-5px",
                left: "-12px",
                transform: "rotate(-35deg)",
                width: "45px",
                height: "16px",
                background: "#333",
                boxShadow: "1px 1px 2px rgba(0,0,0,0.2)"
              }}></div>
              BELIEVE
            </div>
          </div>
        ) : (
          /* TÍTULO PADRÃO (Só aparece se NÃO for o Richmond) */
          <h1 className="main-title" style={{ ...styles.mainTitle, position: "relative", zIndex: 1, margin: "20px 0" }}>DEFINA SUA IDENTIDADE</h1>
        )}

      </header>

      <div className="anime-up delay-1 container-colunas" style={styles.containerColunas}>

        {/* COLUNA 1: IDENTIDADE */}
        <div className="coluna" style={styles.coluna}>
          <h2 style={styles.colunaTitulo}>IDENTIDADE</h2>

          <div style={{
            ...styles.camisaBox,
            background: easterEggRichmond ? "#0A1D3A" : coresCamisaAtual.bg,
            color: easterEggRichmond ? "#C4122E" : coresCamisaAtual.text,
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Imagem do Escudo de Fundo se o Easter Egg estiver ativo */}
            {easterEggRichmond && (
              <img
                src="https://thumb.wikimedia.org/wikipedia/en/thumb/1/1e/A.F.C._Richmond_logo.svg/1280px-A.F.C._Richmond_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
                alt="Richmond Logo"
                style={{ position: "absolute", opacity: 0.15, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "120px" }}
              />
            )}

            <div style={{ ...styles.camisaNome, color: easterEggRichmond ? "#FFF" : coresCamisaAtual.text, position: "relative", zIndex: 1 }}>{nome || "NOME"}</div>
            <div style={{ ...styles.camisaNumero, color: easterEggRichmond ? "#C4122E" : coresCamisaAtual.text, textShadow: easterEggRichmond ? "1px 1px 0px #FFF" : "none", position: "relative", zIndex: 1 }}>{numero || "00"}</div>

          </div>

          <div style={styles.inputsRow}>
            <div style={{ flex: 2, position: "relative" }}>

              {/* 🐶 EASTER EGG: POST-IT MISTERIOSO REATIVO */}
              {!easterEggRichmond && (mostrarDica || sóPrimeiroNome) && (
                  <div className="anime-up delay-1" style={{
                      position: "absolute",
                      top: "-42px",
                      right: "-150px",
                      background: sóPrimeiroNome ? "#FFD700" : "#FCE300", // Fica mais chamativo se acertar o nome
                      padding: "6px 10px",
                      fontSize: "9px",
                      fontWeight: "900",
                      fontFamily: "'Comic Sans MS', 'Marker Felt', sans-serif",
                      color: "#0B2265",
                      transform: sóPrimeiroNome ? "rotate(-3deg) scale(1.05)" : "rotate(6deg)",
                      boxShadow: "2px 2px 0px rgba(0,0,0,0.2)",
                      border: "1px solid #E5CC00",
                      zIndex: 5,
                      textAlign: "center",
                      lineHeight: "1.2",
                      transition: "all 0.3s ease"
                  }}>
                      <div style={{ 
                          position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)", 
                          width: "15px", height: "8px", background: "rgba(255,255,255,0.6)" 
                      }}></div>
                      
                      {sóPrimeiroNome ? (
                          <span>
                              Quase lá! 🎯<br/>
                              Coloque o nome completo, nacionalidade<br/>
                              número e posição!
                          </span>
                      ) : (
                          <span>
                              A Gemma <br/>
                              esqueceu um bilhete aqui
                          </span>
                      )}
                  </div>
              )}

              <label style={styles.label}>SOBRENOME</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value.toUpperCase())}
                style={styles.inputBrutal}
                maxLength={18}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={styles.label}>NÚMERO</label>
              <input
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                style={styles.inputBrutal}
                min="1" max="99"
              />
            </div>
          </div>

          <div style={{ marginTop: "15px" }}>
            <label style={styles.label}>PERNA DOMINANTE</label>
            <div style={styles.toggleRow}>
              <button
                onClick={() => setPerna("Esquerda")}
                style={{ ...styles.btnToggle, ...(perna === "Esquerda" ? styles.btnToggleAtivo : {}) }}
              >
                ESQUERDA
              </button>
              <button
                onClick={() => setPerna("Direita")}
                style={{ ...styles.btnToggle, ...(perna === "Direita" ? styles.btnToggleAtivo : {}) }}
              >
                DIREITA
              </button>
            </div>
          </div>
        </div>

        {/* COLUNA 2: NACIONALIDADE */}
        <div className="coluna" style={styles.coluna}>
          <h2 style={styles.colunaTitulo}>NACIONALIDADE</h2>

          <input
            type="text"
            placeholder="🔍 Buscar país..."
            value={buscaPais}
            onChange={(e) => setBuscaPais(e.target.value)}
            style={{ ...styles.inputBrutal, marginBottom: "15px" }}
          />

          <div className="scroll-paises grid-paises" style={styles.gridPaises}>
            {paisesFiltrados.map((pais) => {
              const ativo = pais.nome === paisSelecionado;
              return (
                <div
                  key={pais.nome}
                  onClick={() => setPaisSelecionado(pais.nome)}
                  style={{ ...styles.cardPais, ...(ativo ? styles.cardPaisAtivo : {}) }}
                  title={pais.nome}
                >
                  <img
                    src={`https://flagcdn.com/w40/${pais.codigo}.png`}
                    alt={`Bandeira ${pais.nome}`}
                    style={{ width: "32px", border: "2px solid #111", borderRadius: "2px", marginBottom: "5px" }}
                  />
                  <span style={styles.nomePaisGrid}>{pais.nome}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUNA 3: POSIÇÃO */}
        <div className="coluna" style={styles.coluna}>
          <h2 style={styles.colunaTitulo}>POSIÇÃO</h2>

          <div className="field-container" style={styles.fieldContainer}>
            <div style={styles.fieldCenterLine}></div>
            <div style={styles.fieldCenterCircle}></div>
            <div style={styles.fieldPenaltyTop}></div>
            <div style={styles.fieldPenaltyBottom}></div>

            {posicoesCampo.map((pos) => {
              const ativo = pos.id === posicaoSelecionada;
              return (
                <div
                  key={pos.id}
                  onClick={() => setPosicaoSelecionada(pos.id)}
                  style={{
                    ...styles.posNode,
                    top: pos.top,
                    left: pos.left,
                    background: ativo ? "#FFF" : "#111",
                    color: ativo ? "#111" : "#FFF",
                    borderColor: ativo ? "#00E5FF" : "#111",
                    transform: ativo ? "translate(-50%, -50%) scale(1.3)" : "translate(-50%, -50%)",
                    boxShadow: ativo ? "4px 4px 0px #00E5FF" : "2px 2px 0px #00E5FF",
                    zIndex: ativo ? 10 : 2
                  }}
                >
                  {pos.label}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <footer className="anime-up delay-2 app-footer" style={styles.footer}>
        <button className="btn-confirmar" style={styles.btnConfirmar} onClick={lidarComConfirmacao}>
          CONFIRMAR IDENTIDADE ✓
        </button>
      </footer>
    </div>
  );
}

const styles = {
  page: { fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#F6F2F5", minHeight: "100vh", padding: "20px 40px", color: "#111", display: "flex", flexDirection: "column", justifyContent: "center" },
  header: { textAlign: "center", marginBottom: "20px", borderBottom: "4px solid #111", paddingBottom: "10px" },
  headerTI: { display: "flex", justifyContent: "flex-start", marginBottom: "30px" },
  logoMiniTI: { fontSize: "18px", fontWeight: "900", letterSpacing: "1px", border: "2px solid #111", padding: "6px 12px", boxShadow: "3px 3px 0px #111", background: "#FFF" },
  mainTitle: { fontSize: "42px", fontWeight: "900", fontFamily: "Impact, sans-serif", margin: 0, letterSpacing: "1px", textTransform: "uppercase", color: "#FFF", WebkitTextStroke: "2px #111" },
  containerColunas: { display: "flex", gap: "20px", flex: 1, justifyContent: "center", alignItems: "stretch", maxHeight: "65vh" },
  coluna: { flex: 1, display: "flex", flexDirection: "column", background: "#FFF", border: "4px solid #111", boxShadow: "6px 6px 0px #EAE5D9", padding: "20px", maxWidth: "350px" },
  colunaTitulo: { fontSize: "24px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "2px", textAlign: "center", borderBottom: "2px dashed #CCC", paddingBottom: "10px", margin: "0 0 15px 0", color: "#FFF", WebkitTextStroke: "1px #111" },
  camisaBox: { border: "4px solid #111", borderRadius: "10px", padding: "20px 10px", textAlign: "center", marginBottom: "20px", boxShadow: "4px 4px 0px rgba(0,0,0,0.8)" },
  camisaNome: { fontSize: "18px", fontWeight: "900", letterSpacing: "2px", marginBottom: "5px", wordBreak: "break-all", transition: "color 0.3s ease" },
  camisaNumero: { fontSize: "60px", fontFamily: "Impact, sans-serif", lineHeight: "1", margin: 0, transition: "color 0.3s ease" },
  inputsRow: { display: "flex", gap: "10px" },
  label: { display: "block", fontSize: "10px", fontWeight: "900", letterSpacing: "1px", marginBottom: "6px", color: "#555" },
  inputBrutal: { width: "100%", padding: "10px", border: "3px solid #111", background: "#F6F2F5", fontSize: "14px", fontWeight: "bold", outline: "none", boxSizing: "border-box", textTransform: "uppercase", fontFamily: "'Helvetica Neue', Arial, sans-serif", color: '#111' },
  toggleRow: { display: "flex", border: "3px solid #111" },
  btnToggle: { flex: 1, padding: "10px", background: "#FFF", color: "#111", border: "none", fontSize: "12px", fontWeight: "900", cursor: "pointer", transition: "all 0.1s" },
  btnToggleAtivo: { background: "#111", color: "#00E5FF" },
  gridPaises: { flex: 1, overflowY: "auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", padding: "4px", alignContent: "start", maxHeight: "300px" },
  cardPais: { border: "3px solid #111", background: "#FFF", padding: "10px 5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.1s", textAlign: "center" },
  cardPaisAtivo: { background: "#111", color: "#FFF", transform: "scale(1.05)", boxShadow: "3px 3px 0px #00E5FF", zIndex: 2 },
  nomePaisGrid: { fontSize: "10px", fontWeight: "900", textTransform: "uppercase", wordBreak: "break-word", lineHeight: "1.2" },
  fieldContainer: { flex: 1, background: "#1C8144", border: "4px solid #111", position: "relative", minHeight: "300px", boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)" },
  fieldCenterLine: { position: "absolute", top: "50%", left: 0, width: "100%", height: "3px", background: "rgba(255,255,255,0.4)" },
  fieldCenterCircle: { position: "absolute", top: "50%", left: "50%", width: "60px", height: "60px", border: "3px solid rgba(255,255,255,0.4)", borderRadius: "50%", transform: "translate(-50%, -50%)" },
  fieldPenaltyTop: { position: "absolute", top: 0, left: "50%", width: "90px", height: "45px", border: "3px solid rgba(255,255,255,0.4)", borderTop: "none", transform: "translateX(-50%)" },
  fieldPenaltyBottom: { position: "absolute", bottom: 0, left: "50%", width: "90px", height: "45px", border: "3px solid rgba(255,255,255,0.4)", borderBottom: "none", transform: "translateX(-50%)" },
  posNode: { position: "absolute", width: "30px", height: "30px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "900", border: "2px solid", cursor: "pointer", transition: "all 0.2s" },
  footer: { display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px", padding: "10px" },
  btnVoltar: { background: "#FFF", color: "#111", padding: "12px 24px", border: "3px solid #111", boxShadow: "3px 3px 0px #111", fontSize: "14px", fontWeight: "900", fontFamily: "Impact, sans-serif", cursor: "pointer" },
  btnConfirmar: { background: "#00E5FF", color: "#111", padding: "12px 30px", border: "3px solid #111", boxShadow: "4px 4px 0px #111", fontSize: "16px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "1px", cursor: "pointer" }
};