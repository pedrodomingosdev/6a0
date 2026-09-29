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
    "Normal": "Decisões a cada 2 temporadas para uma experiência equilibrada e realista. (EM DESENVOLVIMENTO)",
    "Expresso": "Decisões a cada 3 temporadas. Carreira rápida e direta. (EM DESENVOLVIMENTO)"
  };

  // --- LÓGICA DE NAVEGAÇÃO ---
  
  // 1. Se já tem os dados confirmados, carrega o jogo da Carreira:
  if (dadosIdentidade) {
    return <SimulacaoCarreira dadosJogadora={dadosIdentidade} aoVoltar={() => setDadosIdentidade(null)} />;
  }

  // 2. Se clicou em Iniciar, mas ainda não tem dados, vai para a Identidade:
  if (criandoIdentidade && !dadosIdentidade) {
    return (
      <DefinirIdentidade 
        aoConfirmar={setDadosIdentidade} // Guardamos os dados no estado quando confirmado
        aoVoltar={() => setCriandoIdentidade(false)} // Permite voltar ao menu
      />
    );
  }

  if (criandoIdentidade) {
    return (
      <DefinirIdentidade
        aoConfirmar={(dados) => console.log("Pronto para começar o jogo com:", dados)}
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
        animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0; 
    }
    .delay-1 { animation-delay: 0.15s; }
    .delay-2 { animation-delay: 0.30s; }

    /* ================= MACETES RECONVERSORES PARA MOBILE ================= */
    @media (max-width: 768px) {
      .app-page {
        padding: 20px 16px !important;
      }
      .app-header {
        justify-content: center !important;
        margin-bottom: 30px !important;
      }
      .copeira-container {
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        gap: 30px !important;
      }
      .visual-card-wrapper {
        max-width: 100% !important;
        width: 100% !important;
      }
      .copeira-right {
        align-items: center !important;
        width: 100% !important;
      }
      .copeira-title {
        font-size: 42px !important;
      }
      .copeira-desc {
        font-size: 15px !important;
      }
      .pacing-selector {
        justify-content: center !important;
        flex-wrap: wrap !important;
        width: 100% !important;
      }
      .btn-pacing {
        flex: 1 !important;
        font-size: 12px !important;
        padding: 10px !important;
      }
      .pacing-desc {
        font-size: 12px !important;
        text-align: center !important;
      }
      .action-buttons {
        flex-direction: column !important;
        width: 100% !important;
        gap: 15px !important;
      }
      .btn-action {
        width: 100% !important;
        padding: 16px 20px !important;
        font-size: 16px !important;
      }
    }
  `;

  return (
    <div className="app-page" style={styles.page}>
      <style>{animacoesCss}</style>

      {/* HEADER MINI */}
      <header className="anime-up app-header" style={styles.header}>
        <div style={styles.logoMini}>
          <span style={{ color: "#FF005B" }}>COPEIRA</span> A COPA É DELAS
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL (Layout 2 Colunas) */}
      <div className="copeira-container anime-up delay-1" style={styles.container}>

        {/* LADO ESQUERDO: Card Visual */}
        <div className="visual-card-wrapper" style={styles.left}>
          <div style={styles.visualCard}>
            <div style={styles.cardHeader}>MODO CARREIRA</div>
            <div style={styles.cardField}>
              <span style={{ ...styles.posNode, top: '20%', left: '50%' }}>ATA</span>
              <span style={{ ...styles.posNode, top: '50%', left: '30%', transform: 'scale(1.2)', borderColor: '#FF005B', color: '#FF005B' }}>MEI</span>
              <span style={{ ...styles.posNode, top: '50%', left: '70%' }}>MEI</span>
              <span style={{ ...styles.posNode, top: '80%', left: '50%' }}>DEF</span>
            </div>
            <div style={styles.cardNumber}>10</div>
          </div>
        </div>

        {/* LADO DIREITO: Textos e Controles */}
        <div className="copeira-right" style={styles.right}>
          <p style={styles.topTag}>
            <span style={{ color: "#00E5FF" }}>✦</span> COPEIRA MINIGAMES
          </p>

          <h1 className="copeira-title" style={styles.title}>
            Construa sua própria carreira no futebol
          </h1>

          <p className="copeira-desc" style={styles.desc}>
            Escolha sua origem, tome decisões importantes e deixe o destino traçar um caminho único de troféus, estatísticas e momentos inesquecíveis.
          </p>

          {/* SELEÇÃO DE RITMO */}
          <div className="pacing-selector" style={styles.pacingContainer}>
            {["Intenso", "Normal", "Expresso"].map((modo) => (
              <button
                key={modo}
                className="btn-pacing"
                onClick={() => setModoCarreira(modo)}
                style={{
                  ...styles.btnPacing,
                  background: modoCarreira === modo ? "#111" : "transparent",
                  color: modoCarreira === modo ? "#00E5FF" : "#111",
                }}
              >
                {modo}
              </button>
            ))}
          </div>
          <p className="pacing-desc" style={styles.pacingDesc}>{textosModo[modoCarreira]}</p>

          {/* BOTÕES DE AÇÃO */}
          <div className="action-buttons" style={styles.actionButtons}>
            <button className="btn-action" style={styles.btnStart} onClick={() => setCriandoIdentidade(true)}>
              INICIAR CARREIRA ➔
            </button>
            <button className="btn-action" style={styles.btnBack} onClick={() => window.location.href = '/'}>
              VOLTAR AO MENU
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: { fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#F6F2F5", minHeight: "100vh", padding: "40px 100px", color: "#111", display: "flex", flexDirection: "column" },

  header: { display: "flex", justifyContent: "flex-start", marginBottom: "30px" },
  logoMini: { fontSize: "18px", fontWeight: "900", letterSpacing: "1px", border: "2px solid #111", padding: "6px 12px", boxShadow: "3px 3px 0px #111", background: "#FFF" },

  container: { display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "80px", maxWidth: "1200px", margin: "0 auto", flex: 1 },

  // --- LADO ESQUERDO (Card Visual) ---
  left: { flex: "1", display: "flex", justifyContent: "center", maxWidth: "500px" },
  visualCard: { width: "100%", aspectRatio: "1/1", background: "#111", border: "4px solid #00E5FF", boxShadow: "12px 12px 0px #FF005B", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" },
  cardHeader: { color: "#FFF", fontSize: "12px", fontWeight: "900", letterSpacing: "4px", padding: "15px", borderBottom: "2px dashed #333", textAlign: "center" },
  cardField: { flex: 1, position: "relative", backgroundImage: "radial-gradient(circle at center, #222 0%, #111 100%)" },
  posNode: { position: "absolute", background: "#FFF", color: "#111", border: "2px solid #111", fontSize: "14px", fontWeight: "900", padding: "8px 12px", borderRadius: "50%", transform: "translate(-50%, -50%)", boxShadow: "3px 3px 0px rgba(0,229,255,0.5)" },
  cardNumber: { position: "absolute", bottom: "-20px", right: "10px", fontSize: "180px", fontFamily: "Impact", color: "rgba(255, 255, 255, 0.05)", fontWeight: "900", lineHeight: "1", pointerEvents: "none" },

  // --- LADO DIREITO (Textos) ---
  right: { flex: "1.2", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" },
  topTag: { fontSize: "14px", fontWeight: "900", letterSpacing: "3px", color: "#FF005B", margin: 0, textTransform: "uppercase" },
  title: { fontSize: "56px", fontWeight: "900", fontFamily: "Impact, sans-serif", lineHeight: "1", margin: 0, letterSpacing: "-1px", color: "#111", textTransform: "uppercase" },
  desc: { fontSize: "18px", lineHeight: "1.6", color: "#444", fontWeight: "500", margin: "10px 0 20px 0" },

  // --- SELETORES DE RITMO ---
  pacingContainer: { display: "flex", gap: "10px", background: "#FFF", padding: "8px", border: "3px solid #111", boxShadow: "4px 4px 0px #111" },
  btnPacing: { border: "none", padding: "10px 20px", fontSize: "14px", fontWeight: "900", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", fontFamily: "Impact, sans-serif", letterSpacing: "1px" },
  pacingDesc: { fontSize: "13px", color: "#666", fontWeight: "bold", fontStyle: "italic", marginTop: "-10px", marginBottom: "20px", minHeight: "20px" },

  // --- BOTÕES FINAIS ---
  actionButtons: { display: "flex", gap: "20px", marginTop: "10px" },
  btnStart: { background: "#FF005B", color: "white", padding: "18px 36px", border: "3px solid #111", boxShadow: "5px 5px 0px #111", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "1.5px", transition: "transform 0.1s" },
  btnBack: { background: "#FFF", color: "#111", padding: "18px 36px", border: "3px solid #111", boxShadow: "5px 5px 0px #00E5FF", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "1px", transition: "transform 0.1s" },
};