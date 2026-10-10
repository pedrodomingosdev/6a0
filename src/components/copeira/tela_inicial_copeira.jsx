import React, { useState } from "react";
import DefinirIdentidade from "./definir_identidade_copeira";
import SimulacaoCarreira from "./simulacao_carreira_copeira";

export default function TelaInicialCopeira() {
  const [modoCarreira, setModoCarreira] = useState("Intenso");

  // Controle de Ecrãs: 
  const [criandoIdentidade, setCriandoIdentidade] = useState(false);
  const [dadosIdentidade, setDadosIdentidade] = useState(null); // Guarda os dados finalizados

  const textosModo = {
    "Intenso": "Decisão a cada 1 temporada. Controle total de cada passo da sua carreira.",
    "Normal": "Decisões a cada 2 temporadas para uma experiência equilibrada. (EM BREVE)",
    "Expresso": "Decisões a cada 3 temporadas. Carreira rápida e direta. (EM BREVE)"
  };

  // --- LÓGICA DE NAVEGAÇÃO ---
  if (dadosIdentidade) {
    return <SimulacaoCarreira dadosJogadora={dadosIdentidade} aoVoltar={() => setDadosIdentidade(null)} />;
  }

  if (criandoIdentidade) {
    return (
      <DefinirIdentidade
        aoConfirmar={setDadosIdentidade}
        aoVoltar={() => setCriandoIdentidade(false)}
      />
    );
  }

  const animacoesCss = `
    @keyframes fadeSlideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .anime-up {
        animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0; 
    }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }

    /* ================= RESPONSIVO MOBILE ================= */
    @media (max-width: 768px) {
      .app-page { padding: 20px 15px !important; }
      .app-header { margin-bottom: 20px !important; justify-content: center !important; }
      .hero-title { font-size: 48px !important; text-shadow: 3px 3px 0px #00E5FF !important; }
      .hero-desc { font-size: 16px !important; padding: 0 10px !important; }
      .grid-modos { grid-template-columns: 1fr !important; gap: 15px !important; }
      .btn-iniciar { width: 100% !important; font-size: 20px !important; padding: 15px !important; }
      .btn-voltar { width: 100% !important; font-size: 16px !important; }
    }
  `;

  return (
    <div className="app-page" style={styles.page}>
      <style>{animacoesCss}</style>

      {/* HEADER BRUTALISTA */}
      <header className="anime-up app-header" style={styles.header}>
        <div style={styles.logoMini}>
          <span style={{ color: "#00E5FF" }}>COPEIRA</span> A COPA É DELAS
        </div>
        <a href="https://twitter.com/@aoobapeedro" target="_blank" rel="noreferrer" style={styles.btnSocial}>
          Me siga no Twitter
        </a>
      </header>

      {/* CONTEÚDO PRINCIPAL (Layout Centralizado / Póster) */}
      <div className="anime-up delay-1" style={styles.container}>

        {/* TÍTULO E DESCRIÇÃO */}
        <div style={styles.heroSection}>
          <div style={styles.topTag}>✦ A COPA É DELAS ✦</div>
          <h1 className="hero-title" style={styles.title}>
            O CAMPO<br />É SEU
          </h1>
          <p className="hero-desc" style={styles.desc}>
            Calce as chuteiras e mostre a força do futebol feminino. Controle o destino da sua jogadora, quebre recordes e levante as maiores taças do continente.
          </p>
        </div>

        {/* CARDS DE SELEÇÃO DE MODO DE JOGO */}
        <div className="grid-modos anime-up delay-2" style={styles.gridModos}>
          {["Intenso", "Normal", "Expresso"].map((modo) => {
            const isActive = modoCarreira === modo;
            const isEmBreve = modo !== "Intenso"; // Apenas Intenso está disponível por enquanto

            return (
              <div
                key={modo}
                onClick={() => !isEmBreve && setModoCarreira(modo)}
                style={{
                  ...styles.cardModo,
                  background: isActive ? "#00E5FF" : (isEmBreve ? "#EAE5D9" : "#FFF"),
                  color: isActive ? "#111" : (isEmBreve ? "#999" : "#111"),
                  borderColor: isEmBreve ? "#111" : "#111",
                  boxShadow: isActive ? "6px 6px 0px #111" : (isEmBreve ? "none" : "4px 4px 0px #111"),
                  transform: isActive ? "translate(-2px, -2px)" : "translate(0, 0)",
                  cursor: isEmBreve ? "not-allowed" : "pointer",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `2px solid ${isActive ? "#111" : (isEmBreve ? "#CCC" : "#111")}`, paddingBottom: "10px", marginBottom: "10px" }}>
                  <h3 style={{ margin: 0, fontFamily: "Impact, sans-serif", fontSize: "22px", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {modo}
                  </h3>
                  {isActive && <span style={{ fontSize: "20px" }}>★</span>}
                  {isEmBreve && <span style={{ fontSize: "10px", background: "#CCC", color: "#FFF", padding: "2px 6px", fontWeight: "bold" }}>EM BREVE</span>}
                </div>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold", lineHeight: "1.4", opacity: isEmBreve ? 0.7 : 1 }}>
                  {textosModo[modo]}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="anime-up delay-3" style={styles.actionButtons}>
          <button
            className="btn-iniciar"
            style={styles.btnStart}
            onClick={() => setCriandoIdentidade(true)}
            onMouseDown={(e) => e.currentTarget.style.transform = "translate(2px, 2px)"}
            onMouseUp={(e) => e.currentTarget.style.transform = "translate(0px, 0px)"}
          >
            COMEÇAR CARREIRA ➔
          </button>

          <button
            className="btn-voltar"
            style={styles.btnBack}
            onClick={() => window.location.href = '/'}
            onMouseDown={(e) => e.currentTarget.style.transform = "translate(2px, 2px)"}
            onMouseUp={(e) => e.currentTarget.style.transform = "translate(0px, 0px)"}
          >
            VOLTAR AO MENU
          </button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: { fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#ffffff", minHeight: "100vh", padding: "30px", color: "#111", display: "flex", flexDirection: "column" },

  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", width: "100%", maxWidth: "1200px", margin: "0 auto 40px auto" },
  logoMini: { fontSize: "16px", fontWeight: "900", letterSpacing: "1px", border: "3px solid #111", padding: "8px 16px", boxShadow: "4px 4px 0px #111", background: "#FFF" },

  container: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxWidth: "900px", margin: "0 auto", flex: 1, gap: "40px", width: "100%" },

  // --- HERO SECTION ---
  heroSection: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "15px" },
  topTag: { background: "#111", color: "#00E5FF", padding: "4px 12px", fontSize: "12px", fontWeight: "900", letterSpacing: "2px", border: "2px solid #111" },
  title: { fontSize: "72px", fontWeight: "900", fontFamily: "Impact, sans-serif", margin: 0, lineHeight: "1.1", color: "#FFF", textTransform: "uppercase", WebkitTextStroke: "3px #111" },
  desc: { fontSize: "18px", lineHeight: "1.0", color: "#333", maxWidth: "650px", margin: 0 },


  // --- GRID DE MODOS ---
  gridModos: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", width: "100%" },
  cardModo: { border: "3px solid", padding: "20px", textAlign: "left", transition: "all 0.15s ease-in-out" },

  // --- BOTÕES FINAIS ---
  actionButtons: { display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", width: "100%", marginTop: "10px" },
  btnStart: { background: "#00E5FF", color: "#111", padding: "20px 50px", border: "4px solid #111", boxShadow: "6px 6px 0px #111", fontSize: "24px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "2px", transition: "transform 0.1s" },
  btnBack: { background: "#FFF", color: "#111", padding: "16px 40px", border: "4px solid #111", boxShadow: "5px 5px 0px #00E5FF", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "1.5px", transition: "transform 0.1s" },
  btnSocial: { border: "3px solid #111", background: "#00E5FF", color: "black", padding: "10px 16px", cursor: "pointer", fontSize: "12px", fontWeight: "900", letterSpacing: "1px", textDecoration: "none", boxShadow: "4px 4px 0px #111", textTransform: "uppercase", transition: "transform 0.1s" },
};