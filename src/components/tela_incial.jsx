import React from "react";

export default function TelaInicial() {
  const animacoesCss = `
    @keyframes fadeSlideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .anime-up {
        animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0; 
    }
    .delay-1 { animation-delay: 0.15s; }
    .delay-2 { animation-delay: 0.30s; }

    /* ================= MACETES RECONVERSORES PARA MOBILE ================= */
    @media (max-width: 768px) {
      .app-page {
        padding: 30px 16px !important;
        justify-content: flex-start !important;
      }
      .app-header {
        margin-bottom: 30px !important;
      }
      .slogan-tag {
        font-size: 12px !important;
        letter-spacing: 2px !important;
        text-align: center !important;
      }
      .main-title {
        font-size: 48px !important;
        line-height: 1.1 !important;
        text-align: center !important;
        letter-spacing: -1px !important;
        margin-top: 10px !important;
      }
      .main-description {
        font-size: 15px !important;
        padding: 0 10px !important;
        margin-top: 15px !important;
      }
      .hub-cards {
        flex-direction: column !important;
        gap: 30px !important;
      }
      .hub-card {
        width: 100% !important;
      }
      .card-body {
        padding: 30px 20px !important;
      }
      .game-title {
        font-size: 42px !important;
      }
      .game-desc {
        font-size: 15px !important;
        margin-bottom: 20px !important;
      }
      .btn-game {
        padding: 16px !important;
        font-size: 16px !important;
      }
    }
  `;

  return (
    <div className="app-page" style={styles.page}>
      <style>{animacoesCss}</style>

      {/* HEADER GERAL */}
      <header className="anime-up app-header" style={styles.header}>
        <div className="slogan-tag" style={styles.sloganTag}>
          <span style={{ color: "#00E5FF" }}>✦</span> BEM-VINDO AO UNIVERSO
        </div>
        <br />
        <h1 className="main-title" style={styles.mainTitle}>A COPA É DELAS</h1>
        <br />
        <p className="anime-up delay-1 main-description" style={styles.mainDescription}>
          Explore dois modos exclusivos dedicados ao futebol feminino. Viva a emoção de montar seu elenco dos sonhos de todas as copas femininas ou tomar decisões que mudarão para sempre o rumo da sua carreira. 
          O palco está pronto, a escolha é sua.
        </p>
      </header>

      {/* OPÇÕES DE JOGO */}
      <div className="hub-cards anime-up delay-2" style={styles.cardsContainer}>
        
        {/* CARD 1: 6x0 (Simulador) */}
        <div className="hub-card" style={{ ...styles.card, boxShadow: "12px 12px 0px #FF005B" }}>
          <div style={styles.cardHeaderRosa}>6A0</div>
          <div className="card-body" style={styles.cardBody}>
            <h2 className="game-title" style={styles.gameTitle}>6 <span style={{color: "#FF005B"}}>-</span> 0</h2>
            <p className="game-desc" style={styles.gameDesc}>Viaje pela história. Sorteie seleções inesquecíveis, forme o seu elenco ideal e simule o torneio para levantar a taça.</p>
            <button 
              className="btn-game"
              style={{ ...styles.btn, background: "#FF005B", color: "#FFF" }}
              onClick={() => window.location.hash = '#/torneio'}
            >
              JOGAR 6a0 ➔
            </button>
          </div>
        </div>

        {/* CARD 2: Copeira (Carreira) */}
        <div className="hub-card" style={{ ...styles.card, boxShadow: "12px 12px 0px #00E5FF" }}>
          <div style={styles.cardHeaderCiano}>COPEIRA</div>
          <div className="card-body" style={styles.cardBody}>
            <h2 className="game-title" style={styles.gameTitle}>COPEIRA</h2>
            <p className="game-desc" style={styles.gameDesc}>Escolha sua origem e tome decisões chave. Deixe o destino traçar um caminho único de troféus e momentos inesquecíveis.</p>
            <button 
              className="btn-game"
              style={{ ...styles.btn, background: "#00E5FF", color: "#111" }}
              onClick={() => window.location.hash = '#/copeiro'}
            >
              JOGAR COPEIRA ➔
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: { fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#F6F2F5", minHeight: "100vh", padding: "60px 40px", color: "#111", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  header: { display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "50px" },
  sloganTag: { fontSize: "16px", fontWeight: "900", letterSpacing: "4px", color: "#FF005B", marginBottom: "10px" },
  mainTitle: { fontSize: "72px", fontWeight: "900", fontFamily: "Impact, sans-serif", margin: 0, letterSpacing: "-2px", color: "#FFF", textTransform: "uppercase", WebkitTextStroke: "3px #111" },
  
  mainDescription: { fontSize: "20px", color: "#444", fontWeight: "500", textAlign: "center", maxWidth: "700px", lineHeight: "1.5", marginTop: "20px", marginBottom: "0" },

  cardsContainer: { display: "flex", gap: "50px", maxWidth: "1000px", width: "100%", justifyContent: "center" },
  card: { flex: 1, background: "#FFF", border: "4px solid #111", display: "flex", flexDirection: "column" },
  cardHeaderRosa: { background: "#111", color: "#FF005B", fontSize: "14px", fontWeight: "900", letterSpacing: "3px", padding: "12px", textAlign: "center", textTransform: "uppercase", borderBottom: "4px solid #111" },
  cardHeaderCiano: { background: "#111", color: "#00E5FF", fontSize: "14px", fontWeight: "900", letterSpacing: "3px", padding: "12px", textAlign: "center", textTransform: "uppercase", borderBottom: "4px solid #111" },
  
  cardBody: { padding: "40px 30px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" },
  gameTitle: { fontSize: "56px", fontFamily: "Impact, sans-serif", margin: "0 0 15px 0", letterSpacing: "-1px", lineHeight: "1", color: "#FFF", WebkitTextStroke: "2px #111" },
  gameDesc: { fontSize: "16px", color: "#444", fontWeight: "500", lineHeight: "1.6", marginBottom: "30px", flex: 1 },
  
  btn: { width: "100%", padding: "20px", border: "3px solid #111", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "1.5px", transition: "transform 0.1s" }
};