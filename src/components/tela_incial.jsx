import React, { useState } from "react";
import { selecoes } from "../dados/selecoes";
import EscolherTime from "./escolher_time"; 

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

export default function TelaInicial() {
  /* ESTADO DE NAVEGAÇÃO */
  const [iniciarJogo, setIniciarJogo] = useState(false);
  
  /* ESTADO DA DEMONSTRAÇÃO VISUAL */
  const [time, setTime] = useState(criarDreamTeam());

  // Se o botão foi clicado, renderiza a nova tela e esconde a Tela Inicial
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

  // --- ANIMAÇÕES E REGRAS DE LAYOUT MOBILE INJETADAS ---
  const animacoesCss = `
    @keyframes fadeSlideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .anime-up {
        animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0; 
    }
    .delay-1 { animation-delay: 0.15s; }
    .delay-2 { animation-delay: 0.30s; }
    .delay-3 { animation-delay: 0.45s; }
    .delay-4 { animation-delay: 0.60s; }

    /* ================= MACETES RECONVERSORES PARA MOBILE ================= */
    @media (max-width: 768px) {
      .app-page {
        padding: 20px 16px !important;
      }
      .app-header {
        flex-direction: column !important;
        gap: 15px !important;
        margin-bottom: 35px !important;
        text-align: center !important;
      }
      .responsive-hero {
        flex-direction: column !important;
        gap: 40px !important;
        text-align: center !important;
      }
      .hero-left {
        max-width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
      }
      .hero-score {
        font-size: 110px !important;
        letter-spacing: -2px !important;
        WebkitTextStroke: 3px #111 !important;
        margin-bottom: 10px !important;
      }
      .hero-dash {
        font-size: 80px !important;
        transform: translateY(-5px) !important;
      }
      .hero-title {
        font-size: 32px !important;
        WebkitTextStroke: 1.5px #111 !important;
        line-height: 1.2 !important;
      }
      .hero-desc {
        font-size: 15px !important;
        max-width: 100% !important;
        margin-bottom: 30px !important;
      }
      .btn-main {
        width: 100% !important;
        padding: 16px 20px !important;
        font-size: 16px !important;
      }
      .hero-right {
        justify-content: center !important;
        width: 100% !important;
      }
      .soccer-field {
        width: 100% !important;
        max-width: 330px !important;
        height: 440px !important;
        box-shadow: 4px 4px 12px rgba(0,0,0,0.1) !important;
      }
      /* Redimensionamento dos nós táticos de jogadoras no mobile */
      .player-circle {
        width: 26px !important;
        height: 26px !important;
        font-size: 11px !important;
      }
      .player-plaque {
        padding: 2px 5px !important;
      }
      .player-name {
        font-size: 9px !important;
      }
      
      .steps-container {
        flex-direction: column !important;
        margin-top: 45px !important;
        padding: 20px !important;
        gap: 20px !important;
      }
      .step-divider {
        width: 100% !important;
        height: 2px !important;
      }
      .app-footer {
        font-size: 13px !important;
        gap: 6px !important;
        padding-top: 25px !important;
        line-height: 1.4 !important;
      }
    }
  `;

  return (
    <div className="app-page" style={styles.page}>
      {/* Injeta as animações e regras de quebra mobile */}
      <style>{animacoesCss}</style>
      
      {/* HEADER */}
      <header className="anime-up app-header" style={styles.header}>
        <div style={styles.logoMini}>
           <span style={{color: "#FF005B"}}>FIFA</span> WWC 
        </div>
        <div style={styles.socialMenu}>
          <a href="https://twitter.com/@aoobapeedro" target="_blank" rel="noreferrer" style={styles.btnSocial}>
             Discorda de algum overall? Mande uma dm!
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="responsive-hero" style={styles.hero}>
        {/* Lado Esquerdo - Textos */}
        <div className="anime-up delay-1 hero-left" style={styles.left}>
          <p style={styles.subtitle}>
            <span style={{color: "#00E5FF"}}>✦</span> A COPA É DELAS • 2011 — 2023
          </p>

          <h1 className="hero-score" style={styles.score}>
            6 <span className="hero-dash" style={styles.dash}>-</span> 0
          </h1>

          <h2 className="hero-title" style={styles.title}>
            Role os dados.<br />
            Escale as maiores.<br />
            Conquiste a estrela.
          </h2>

          <p className="hero-desc" style={styles.desc}>
            Viaje pela história das Copas do Mundo Feminina. Sorteie seleções inesquecíveis, escolha as craques que mudaram o jogo, forme o seu elenco ideal e simule o mata-mata. A sua equipe tem o que é preciso para levantar a taça?
          </p>

          <button className="btn-main" style={styles.btnMain} onClick={() => setIniciarJogo(true)}>
            JOGAR AGORA ➔
          </button>
        </div>

        {/* DIREITA - CAMPO DE DEMONSTRAÇÃO */}
        <div className="anime-up delay-2 hero-right" style={styles.right}>
          <div className="soccer-field" style={styles.field}>
            <div style={styles.fieldCenterLine}></div>
            <div style={styles.fieldCenterCircle}></div>
            <div style={styles.fieldPenaltyTop}></div>
            <div style={styles.fieldPenaltyBottom}></div>

            {/* ATAQUE */}
            <div style={{ ...styles.playerRow, top: "10%" }}>
              {time.atacantes.map((jogadora, index) => (
                <Player 
                  key={`ata-${index}`} 
                  number={jogadora.numero} 
                  name={jogadora.nomeCamisa} 
                  pos={jogadora.posicao}
                />
              ))}
            </div>

            {/* MEIO-CAMPO */}
            <div style={{ ...styles.playerRow, top: "35%" }}>
               {time.meio_campo.map((jogadora, index) => (
                <Player 
                  key={`mei-${index}`} 
                  number={jogadora.numero} 
                  name={jogadora.nomeCamisa} 
                  pos={jogadora.posicao}
                />
              ))}
            </div>

            {/* DEFESA */}
            <div style={{ ...styles.playerRow, top: "65%" }}>
               {time.defensoras.map((jogadora, index) => (
                <Player 
                  key={`def-${index}`} 
                  number={jogadora.numero} 
                  name={jogadora.nomeCamisa} 
                  pos={jogadora.posicao}
                />
              ))}
            </div>

            {/* GOLEIRA */}
            <div style={{ ...styles.playerRow, bottom: "5%" }}>
              {time.goleiras.map((jogadora, index) => (
                <Player 
                  key={`gol-${index}`}
                  number={jogadora.numero} 
                  name={jogadora.nomeCamisa} 
                  pos={jogadora.posicao}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <center>
        <section className="anime-up delay-3 steps-container" style={styles.stepsContainer}>
          <div style={styles.step}>
            <h3 style={styles.stepTitle}><span style={styles.stepNumber}>01</span> ROLE</h3>
            <p style={styles.stepDesc}>Sorteie uma seleção e uma Copa Histórica.</p>
          </div>
          <div className="step-divider" style={styles.stepDivider}></div>
          <div style={styles.step}>
            <h3 style={styles.stepTitle}><span style={styles.stepNumber}>02</span> MONTE</h3>
            <p style={styles.stepDesc}>Escale lendas para as 11 posições em campo.</p>
          </div>
          <div className="step-divider" style={styles.stepDivider}></div>
          <div style={styles.step}>
            <h3 style={styles.stepTitle}><span style={styles.stepNumber}>03</span> SIMULE</h3>
            <p style={styles.stepDesc}>Crie sua tática e tente ganhar o Mundial.</p>
          </div>
        </section>
      </center>
      <br />

      {/* RODAPÉ DINÂMICO ESTATÍSTICO */}
      <footer className="anime-up delay-4 app-footer" style={styles.footer}>
        <div><strong>{selecoesUnicas}</strong> seleções cadastradas <span style={styles.dot}>·</span></div>
        <div><strong>{elencosTotais}</strong> elencos históricos <span style={styles.dot}>·</span></div>
        <div><strong>{jogadorasTotais}</strong> jogadoras na base de dados</div>
      </footer>
    </div>
  );
}

/* COMPONENTE AUXILIAR COM CLASSES ADICIONADAS PARA ADAPTAÇÃO MOBILE */
function Player({ number, name, pos }) {
  return (
    <div style={styles.playerWrapper}>
      <div className="player-circle" style={styles.playerCircleFill}>{number}</div>
      <div className="player-plaque" style={styles.playerPlaque}>
        <span className="player-name" style={styles.playerName}>{name}</span>
      </div>
    </div>
  );
}

/* ESTILOS DE DESKTOP MANUTENIDOS COMPLETAMENTE */
const styles = {
  page: { fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#F6F2F5", minHeight: "100vh", padding: "40px 100px", color: "#111", display: "flex", flexDirection: "column" },

  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px" },
  logoMini: { fontSize: "18px", fontWeight: "900", letterSpacing: "1px", border: "2px solid #111", padding: "6px 12px", boxShadow: "3px 3px 0px #111" },

  socialMenu: { display: "flex", gap: "10px" },
  btnSocial: {
    border: "2px solid #111",
    background: "#111",
    color: "white",
    padding: "8px 16px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
    textDecoration: "none",
    boxShadow: "2px 2px 0px #111"
  },

  hero: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "80px" },

  left: { flex: 1, maxWidth: "650px" },

  subtitle: { fontSize: "14px", fontWeight: "900", letterSpacing: "3px", marginBottom: "15px", color: "#FF005B" },

  score: { fontSize: "200px", fontFamily: "Impact, sans-serif", fontWeight: "900", lineHeight: "0.85", margin: "0 0 20px 0", letterSpacing: "-5px", color: "white", WebkitTextStroke: "5px #111" },
  dash: { color: "#00E5FF", fontSize: "140px", verticalAlign: "middle", display: "inline-block", transform: "translateY(-15px)", WebkitTextStroke: "0px" },

  title: { fontSize: "54px", fontWeight: "900", fontFamily: "Impact, sans-serif", lineHeight: "1.1", margin: "0 0 20px 0", letterSpacing: "-1px", color: "white", WebkitTextStroke: "2.5px #111" },
  desc: { fontSize: "18px", lineHeight: "1.6", color: "#444", marginBottom: "40px", fontWeight: "500", maxWidth: "90%" },

  btnMain: { background: "#FF005B", color: "white", padding: "20px 40px", border: "3px solid #111", boxShadow: "5px 5px 0px #111", fontSize: "18px", fontWeight: "900", textTransform: "uppercase", cursor: "pointer", transition: "transform 0.1s", letterSpacing: "1.5px" },

  right: { flex: 1, display: "flex", justifyContent: "flex-end" },

  field: { width: "440px", height: "580px", background: "#1C8144", border: "3px solid #00E5FF", position: "relative", padding: "10px", boxShadow: "8px 8px 20px rgba(0,0,0,0.15)", overflow: "hidden" },
  fieldCenterLine: { position: "absolute", top: "50%", left: 0, width: "100%", height: "2px", background: "#00E5FF", opacity: 0.8 },
  fieldCenterCircle: { position: "absolute", top: "50%", left: "50%", width: "120px", height: "120px", border: "3px solid #00E5FF", borderRadius: "50%", transform: "translate(-50%, -50%)", opacity: 0.8 },
  fieldPenaltyTop: { position: "absolute", top: 0, left: "50%", width: "180px", height: "80px", border: "3px solid #00E5FF", borderTop: "none", transform: "translateX(-50%)", opacity: 0.8 },
  fieldPenaltyBottom: { position: "absolute", bottom: 0, left: "50%", width: "180px", height: "80px", border: "3px solid #00E5FF", borderBottom: "none", transform: "translateX(-50%)", opacity: 0.8 },

  playerRow: { position: "absolute", width: "100%", display: "flex", justifyContent: "space-evenly", left: 0 },
  playerWrapper: { display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", zIndex: 2 },
  playerCircleFill: { width: "32px", height: "32px", background: "white", color: "#111", border: "2px solid #111", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "14px", boxShadow: "2px 2px 0px #111" },
  playerPlaque: { background: "#111", borderRadius: "4px", padding: "4px 8px", display: "flex", alignItems: "center", gap: "5px", boxShadow: "2px 2px 0px rgba(0,0,0,0.5)" },
  playerName: { color: "white", fontSize: "11px", fontWeight: "bold", WebkitTextStroke: "0px", letterSpacing: "0.5px" },

  stepsContainer: { display: "flex", background: "white", marginTop: "80px", padding: "30px 40px", boxShadow: "0px 4px 15px rgba(0,0,0,0.05)", alignItems: "center", maxWidth: "1200px", border: "3px solid #111" },
  step: { flex: 1, padding: "0 30px" },
  stepTitle: { margin: "0 0 8px 0", fontSize: "22px", fontWeight: "900" },
  stepNumber: { color: "#FF005B", marginRight: "10px" },
  stepDesc: { margin: 0, fontSize: "15px", color: "#444", fontWeight: "bold" },
  stepDivider: { width: "2px", height: "60px", background: "#111", opacity: 0.1 },

  footer: {
    marginTop: "auto",
    paddingTop: "40px",
    borderTop: "2px solid #111",
    textAlign: "center",
    fontSize: "16px",
    color: "#444",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    paddingBottom: "20px"
  },
  dot: { color: "#111", fontWeight: "900" }
};