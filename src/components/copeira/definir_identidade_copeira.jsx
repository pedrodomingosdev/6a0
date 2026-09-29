import React, { useState, useMemo } from "react";

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
  const [nome, setNome] = useState("SEU NOME");
  const [numero, setNumero] = useState("10");
  const [perna, setPerna] = useState("Esquerda");
  const [paisSelecionado, setPaisSelecionado] = useState("Brasil");
  const [posicaoSelecionada, setPosicaoSelecionada] = useState("CA");
  const [buscaPais, setBuscaPais] = useState("");

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
  `;

  return (
    <div className="app-page" style={styles.page}>
      <header className="anime-up" style={styles.headerTI}>
        <div style={styles.logoMiniTI}>
          <span style={{ color: "#FF005B" }}>COPEIRA</span> A COPA É DELAS
        </div>
      </header>
      <style>{animacoesCss}</style>

      <header className="anime-up" style={styles.header}>
        <h1 style={styles.mainTitle}>DEFINA SUA IDENTIDADE</h1>
        <br />
      </header>

      <div className="anime-up delay-1" style={styles.containerColunas}>

        {/* COLUNA 1: IDENTIDADE */}
        <div style={styles.coluna}>
          <h2 style={styles.colunaTitulo}>IDENTIDADE</h2>

          <div style={{ ...styles.camisaBox, background: coresCamisaAtual.bg, transition: "background 0.3s ease" }}>
            <div style={{ ...styles.camisaNome, color: coresCamisaAtual.text }}>{nome || "NOME"}</div>
            <div style={{ ...styles.camisaNumero, color: coresCamisaAtual.text }}>{numero || "00"}</div>
          </div>

          <div style={styles.inputsRow}>
            <div style={{ flex: 2 }}>
              <label style={styles.label}>SOBRENOME</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value.toUpperCase())}
                style={styles.inputBrutal}
                maxLength={12}
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
        <div style={styles.coluna}>
          <h2 style={styles.colunaTitulo}>NACIONALIDADE</h2>

          <input
            type="text"
            placeholder="🔍 Buscar país..."
            value={buscaPais}
            onChange={(e) => setBuscaPais(e.target.value)}
            style={{ ...styles.inputBrutal, marginBottom: "15px" }}
          />

          <div className="scroll-paises" style={styles.gridPaises}>
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
        <div style={styles.coluna}>
          <h2 style={styles.colunaTitulo}>POSIÇÃO</h2>

          <div style={styles.fieldContainer}>
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
                    borderColor: ativo ? "#FF005B" : "#111",
                    transform: ativo ? "translate(-50%, -50%) scale(1.3)" : "translate(-50%, -50%)",
                    boxShadow: ativo ? "4px 4px 0px #FF005B" : "2px 2px 0px #00E5FF",
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

      <footer className="anime-up delay-2" style={styles.footer}>
        <button style={styles.btnConfirmar} onClick={lidarComConfirmacao}>
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
  btnConfirmar: { background: "#FF005B", color: "#FFF", padding: "12px 30px", border: "3px solid #111", boxShadow: "4px 4px 0px #00E5FF", fontSize: "16px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "1px", cursor: "pointer" }
};