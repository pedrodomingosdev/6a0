import React, { useState } from "react";
import { selecoes } from "../../dados/selecoes";
import EscolherTime from "./escolher_time_6a0";

/* 1. FUNÇÃO QUE EMBARALHA E CORTA AS MELHORES */
function misturarMelhores(jogadoras, quantidadeNecessaria, topX) {
  const melhores = [...jogadoras].sort((a, b) => b.overall - a.overall);
  const elite = melhores.slice(0, topX);
  return elite.sort(() => Math.random() - 0.5).slice(0, quantidadeNecessaria);
}

/* 2. FUNÇÃO QUE GERA O TIME MISTURADO */
function criarDreamTeam() {
  let todasGoleiras = [];
  let todasDefesas = [];
  let todasMeias = [];
  let todasAtacantes = [];

  Object.values(selecoes).forEach((selecao) => {
    if (selecao.goleiras) todasGoleiras = [...todasGoleiras, ...selecao.goleiras];
    if (selecao.defensoras) todasDefesas = [...todasDefesas, ...selecao.defensoras];
    if (selecao.meio_campo) todasMeias = [...todasMeias, ...selecao.meio_campo];
    if (selecao.atacantes) todasAtacantes = [...todasAtacantes, ...selecao.atacantes];
  });

  return {
    nome: "Dream Team",
    goleiras: misturarMelhores(todasGoleiras, 1, 5),
    defensoras: misturarMelhores(todasDefesas, 4, 10),
    meio_campo: misturarMelhores(todasMeias, 3, 10),
    atacantes: misturarMelhores(todasAtacantes, 3, 10),
  };
}

export default function TelaInicial6a0() {
  const [iniciarJogo, setIniciarJogo] = useState(false);
  const [time] = useState(criarDreamTeam());

  if (iniciarJogo) {
    return <EscolherTime />;
  }

  // --- LÓGICA DO RODAPÉ DINÂMICO ---
  const elencosTotais = Object.keys(selecoes).length;
  const selecoesUnicas = new Set(Object.values(selecoes).map(s => s.nome)).size;
  const jogadorasTotais = Object.values(selecoes).reduce((acc, selecao) => {
    return acc +
      (selecao.goleiras?.length || 0) +
      (selecao.defensoras?.length || 0) +
      (selecao.meio_campo?.length || 0) +
      (selecao.atacantes?.length || 0);
  }, 0);

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
    .delay-4 { animation-delay: 0.4s; }

    /* ================= RESPONSIVO MOBILE ================= */
    @media (max-width: 768px) {
      .app-page { padding: 15px 10px !important; }
      .app-header { flex-direction: column !important; gap: 15px !important; margin-bottom: 25px !important; text-align: center !important; }
      
      .hero-score { font-size: 100px !important; text-shadow: 4px 4px 0px #111 !important; }
      .hero-title { font-size: 28px !important; padding: 0 10px !important; }
      .hero-desc { font-size: 15px !important; padding: 0 10px !important; }
      
      .btn-main { width: 100% !important; padding: 16px 20px !important; font-size: 18px !important; box-sizing: border-box !important; }
      .btn-back { width: 100% !important; padding: 16px 20px !important; font-size: 16px !important; box-sizing: border-box !important; }
      .action-buttons { flex-direction: column !important; width: 100% !important; gap: 12px !important; }
      
      /* Ajuste do campo para caber perfeitamente */
      .soccer-field { 
        width: 100% !important; 
        max-width: 310px !important; 
        height: 420px !important; 
        box-shadow: 6px 6px 0px #FF005B !important; 
        margin: 0 auto !important;
      }
      .player-circle { width: 24px !important; height: 24px !important; font-size: 10px !important; border-width: 2px !important; }
      .player-plaque { padding: 2px 4px !important; }
      .player-name { font-size: 8px !important; }
      
      /* Rodapé Lado a Lado no Mobile */
      .footer-stats { 
        flex-direction: row !important; 
        width: 100% !important; 
        gap: 6px !important; 
        margin-top: 30px !important;
        justify-content: space-between !important;
      }
      .stat-card { 
        padding: 10px 4px !important; 
        box-shadow: 3px 3px 0px #111 !important;
        border-width: 2px !important;
      }
      .stat-num { font-size: 20px !important; }
      .stat-lbl { font-size: 8px !important; letter-spacing: 0px !important; }
    }
  `;

  return (
    <div className="app-page" style={styles.page}>
      <style>{animacoesCss}</style>

      {/* HEADER BRUTALISTA */}
      <header className="anime-up app-header" style={styles.header}>
        <div style={styles.logoMini}>
          <span style={{ color: "#FF005B" }}>6 - 0</span> A COPA É DELAS
        </div>
        <a href="https://twitter.com/@aoobapeedro" target="_blank" rel="noreferrer" style={styles.btnSocial}>
          Discorda de algum overall? Mande uma DM!
        </a>
      </header>

      {/* HERO SECTION CENTRALIZADA */}
      <section style={styles.heroContainer}>
        
        {/* LADO TEXTUAL */}
        <div className="anime-up delay-1" style={styles.heroText}>
          <div style={styles.topTag}>✦ 1991 — 2023 ✦</div>
          
          <h1 className="hero-score" style={styles.score}>
            6<span style={{ color: "#FF005B", margin: "0 10px" }}>-</span>0
          </h1>
          
          <h2 className="hero-title" style={styles.title}>
            ROLE OS DADOS. ESCALE AS MAIORES. CONQUISTE A ESTRELA.
          </h2>
          
          <p className="hero-desc" style={styles.desc}>
            Viaje pela história das Copas do Mundo Feminina. Sorteie seleções inesquecíveis, forme o seu elenco ideal e simule o mata-mata. A sua equipe tem o que é preciso para levantar a taça?
          </p>

          <div className="action-buttons" style={styles.actionButtons}>
            <button 
              className="btn-main" 
              style={styles.btnMain}
              onClick={() => setIniciarJogo(true)}
              onMouseDown={(e) => e.currentTarget.style.transform = "translate(2px, 2px)"}
              onMouseUp={(e) => e.currentTarget.style.transform = "translate(0px, 0px)"}
            >
              JOGAR 6A0 ➔
            </button>
            <button 
              className="btn-back" 
              style={styles.btnBack} 
              onClick={() => window.location.href = '/'}
              onMouseDown={(e) => e.currentTarget.style.transform = "translate(2px, 2px)"}
              onMouseUp={(e) => e.currentTarget.style.transform = "translate(0px, 0px)"}
            >
              VOLTAR AO MENU
            </button>
          </div>
        </div>

        {/* CAMPO DE DEMONSTRAÇÃO (QUADRO TÁTICO BRUTALISTA) */}
        <div className="anime-up delay-2" style={styles.heroVisual}>
          <div className="soccer-field" style={styles.field}>
            <div style={styles.fieldCenterLine}></div>
            <div style={styles.fieldCenterCircle}></div>
            <div style={styles.fieldPenaltyTop}></div>
            <div style={styles.fieldPenaltyBottom}></div>

            {/* ATAQUE */}
            <div style={{ ...styles.playerRow, top: "8%" }}>
              {time.atacantes.map((jogadora, index) => (
                <Player key={`ata-${index}`} number={jogadora.numero} name={jogadora.nomeCamisa} />
              ))}
            </div>

            {/* MEIO-CAMPO */}
            <div style={{ ...styles.playerRow, top: "35%" }}>
              {time.meio_campo.map((jogadora, index) => (
                <Player key={`mei-${index}`} number={jogadora.numero} name={jogadora.nomeCamisa} />
              ))}
            </div>

            {/* DEFESA */}
            <div style={{ ...styles.playerRow, top: "65%" }}>
              {time.defensoras.map((jogadora, index) => (
                <Player key={`def-${index}`} number={jogadora.numero} name={jogadora.nomeCamisa} />
              ))}
            </div>

            {/* GOLEIRA */}
            <div style={{ ...styles.playerRow, bottom: "4%" }}>
              {time.goleiras.map((jogadora, index) => (
                <Player key={`gol-${index}`} number={jogadora.numero} name={jogadora.nomeCamisa} />
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* RODAPÉ ESTATÍSTICO (CARDS) */}
      <footer className="anime-up delay-3 footer-stats" style={styles.footerStats}>
        <div className="stat-card" style={styles.statCard}>
          <span className="stat-num" style={styles.statNumber}>{selecoesUnicas}</span>
          <span className="stat-lbl" style={styles.statLabel}>SELEÇÕES</span>
        </div>
        <div className="stat-card" style={styles.statCard}>
          <span className="stat-num" style={styles.statNumber}>{elencosTotais}</span>
          <span className="stat-lbl" style={styles.statLabel}>ELENCOS HIST.</span>
        </div>
        <div className="stat-card" style={styles.statCard}>
          <span className="stat-num" style={styles.statNumber}>{jogadorasTotais}</span>
          <span className="stat-lbl" style={styles.statLabel}>JOGADORAS</span>
        </div>
      </footer>
    </div>
  );
}

/* COMPONENTE DE JOGADORA */
function Player({ number, name }) {
  return (
    <div style={styles.playerWrapper}>
      <div className="player-circle" style={styles.playerCircleFill}>{number}</div>
      <div className="player-plaque" style={styles.playerPlaque}>
        <span className="player-name" style={styles.playerName}>{name}</span>
      </div>
    </div>
  );
}

/* ESTILOS NEO-BRUTALISTAS */
const styles = {
  page: { fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#FFFFFF", minHeight: "100vh", padding: "30px", color: "#111", display: "flex", flexDirection: "column", boxSizing: "border-box" },

  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", width: "100%", maxWidth: "1200px", margin: "0 auto 40px auto" },
  logoMini: { fontSize: "16px", fontWeight: "900", letterSpacing: "1px", border: "3px solid #111", padding: "8px 16px", boxShadow: "4px 4px 0px #111", background: "#FFF" },
  
  btnSocial: { border: "3px solid #111", background: "#FF005B", color: "white", padding: "10px 16px", cursor: "pointer", fontSize: "12px", fontWeight: "900", letterSpacing: "1px", textDecoration: "none", boxShadow: "4px 4px 0px #111", textTransform: "uppercase", transition: "transform 0.1s", textAlign: "center" },

  heroContainer: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "50px", width: "100%", maxWidth: "900px", margin: "0 auto", flex: 1 },

  heroText: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "15px", width: "100%" },
  topTag: { background: "#111", color: "#FF005B", padding: "4px 12px", fontSize: "12px", fontWeight: "900", letterSpacing: "2px", border: "2px solid #111" },
  
  score: { fontSize: "150px", fontWeight: "900", fontFamily: "Impact, sans-serif", margin: 0, lineHeight: "1.1", color: "#FFF", textTransform: "uppercase", WebkitTextStroke: "3px #111" },
  title: { fontSize: "36px", fontWeight: "900", fontFamily: "Impact, sans-serif", lineHeight: "1.1", margin: "0", color: "#111", textTransform: "uppercase" },
  desc: { fontSize: "16px", lineHeight: "1.0", color: "#333", maxWidth: "700px", margin: "10px 0 20px 0" },

  actionButtons: { display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", width: "100%" },
  btnMain: { background: "#FF005B", color: "#FFF", padding: "18px 40px", border: "4px solid #111", boxShadow: "5px 5px 0px #111", fontSize: "20px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "1.5px", transition: "transform 0.1s" },
  btnBack: { background: "#FFF", color: "#111", padding: "18px 36px", border: "4px solid #111", boxShadow: "5px 5px 0px #FF005B", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "1px", transition: "transform 0.1s" },

  /* CAMPO "QUADRO TÁTICO" */
  heroVisual: { display: "flex", justifyContent: "center", width: "100%" },
  field: { width: "100%", maxWidth: "480px", height: "550px", background: "#111", border: "4px solid #111", position: "relative", padding: "10px", boxShadow: "10px 10px 0px #FF005B", overflow: "hidden", boxSizing: "border-box" },
  fieldCenterLine: { position: "absolute", top: "50%", left: 0, width: "100%", height: "2px", background: "#FF005B", opacity: 0.6 },
  fieldCenterCircle: { position: "absolute", top: "50%", left: "50%", width: "120px", height: "120px", border: "2px solid #FF005B", borderRadius: "50%", transform: "translate(-50%, -50%)", opacity: 0.6, boxSizing: "border-box" },
  fieldPenaltyTop: { position: "absolute", top: 0, left: "50%", width: "180px", height: "80px", border: "2px solid #FF005B", borderTop: "none", transform: "translateX(-50%)", opacity: 0.6, boxSizing: "border-box" },
  fieldPenaltyBottom: { position: "absolute", bottom: 0, left: "50%", width: "180px", height: "80px", border: "2px solid #FF005B", borderBottom: "none", transform: "translateX(-50%)", opacity: 0.6, boxSizing: "border-box" },

  playerRow: { position: "absolute", width: "100%", display: "flex", justifyContent: "space-evenly", left: 0 },
  playerWrapper: { display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 2 },
  playerCircleFill: { width: "34px", height: "34px", background: "#FFF", color: "#111", border: "3px solid #111", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "14px", boxShadow: "3px 3px 0px #FF005B", boxSizing: "border-box" },
  playerPlaque: { background: "#111", border: "2px solid #FF005B", borderRadius: "0px", padding: "4px 8px", display: "flex", alignItems: "center", boxShadow: "2px 2px 0px #FF005B" },
  playerName: { color: "#FFF", fontSize: "10px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "1px" },

  /* RODAPÉ ESTATÍSTICAS */
  footerStats: { display: "flex", justifyContent: "center", gap: "20px", marginTop: "60px", width: "100%", maxWidth: "900px", margin: "60px auto 0 auto" },
  statCard: { flex: 1, background: "#FFF", border: "3px solid #111", padding: "15px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "4px 4px 0px #111", boxSizing: "border-box" },
  statNumber: { fontSize: "32px", fontFamily: "Impact, sans-serif", color: "#FF005B", lineHeight: "1" },
  statLabel: { fontSize: "12px", fontWeight: "900", color: "#111", marginTop: "5px", letterSpacing: "1px", textAlign: "center" }
};