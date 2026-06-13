import React, { useState, useEffect, useRef } from "react";

export default function ResultadoCopa({ partidasSimuladas, mediaOverall, formacaoEscolhida, jogadorasEmCampo, onRestart }) {
    const [partidasReveladas, setPartidasReveladas] = useState(0);
    const [verResumo, setVerResumo] = useState(false);
    
    // --- ESTADOS DA PARTIDA AO VIVO ---
    const [simulandoAgora, setSimulandoAgora] = useState(false);
    const [minutoAtual, setMinutoAtual] = useState(0);
    const [eventosPartida, setEventosPartida] = useState([]);
    const [placarAoVivo, setPlacarAoVivo] = useState({ meus: 0, oponente: 0, penaltisMeus: null, penaltisOponente: null, cobrancasVisuais: [] });
    
    // Velocidade e Resumo
    const [velocidadeSimulacao, setVelocidadeSimulacao] = useState(80);
    const [partidaFinalizada, setPartidaFinalizada] = useState(false); 
    const [resumoIndex, setResumoIndex] = useState(null); // Guarda qual partida o usuário clicou para rever

    // --- ESTADOS DA TABELA DE GRUPOS ---
    const [tabelaGrupo, setTabelaGrupo] = useState(null);
    const [mostrarTabela, setMostrarTabela] = useState(false);

    // REFERÊNCIA DE VELOCIDADE
    const velocidadeRef = useRef(velocidadeSimulacao);
    useEffect(() => {
        velocidadeRef.current = velocidadeSimulacao;
    }, [velocidadeSimulacao]);

    const temMaisJogos = partidasReveladas < partidasSimuladas.length;
    const ultimaPartida = partidasSimuladas[partidasReveladas - 1];

    let pontosGrupo = 0;
    let jogosGrupo = 0;
    let golsPro = 0;
    let golsContra = 0;
    let vitorias = 0;
    let empates = 0;
    let derrotas = 0;
    
    for (let i = 0; i < partidasReveladas; i++) {
        const p = partidasSimuladas[i];
        golsPro += p.meusGols;
        golsContra += p.golsOponente;
        
        const ganhouNoPenalti = p.penaltisMeus !== null && p.penaltisMeus > p.penaltisOponente;
        const perdeuNoPenalti = p.penaltisOponente !== null && p.penaltisOponente > p.penaltisMeus;

        if (p.meusGols > p.golsOponente || ganhouNoPenalti) vitorias++;
        else if (p.meusGols === p.golsOponente && !ganhouNoPenalti && !perdeuNoPenalti) empates++;
        else derrotas++;

        if (p.fase === "FASE DE GRUPOS") {
            jogosGrupo++;
            if (p.meusGols > p.golsOponente) pontosGrupo += 3;
            else if (p.meusGols === p.golsOponente) pontosGrupo += 1;
        }
    }

    const eliminadoNoGrupo = jogosGrupo === 3 && pontosGrupo < 4;
    const eliminadoMataMata = ultimaPartida && 
        (ultimaPartida.golsOponente > ultimaPartida.meusGols || (ultimaPartida.penaltisOponente && ultimaPartida.penaltisOponente > ultimaPartida.penaltisMeus)) && 
        (ultimaPartida.fase !== "FASE DE GRUPOS");
    
    const foiEliminado = eliminadoNoGrupo || eliminadoMataMata;
    const foiCampeao = ultimaPartida && ultimaPartida.fase === "FINAL" && (ultimaPartida.meusGols > ultimaPartida.golsOponente || ultimaPartida.penaltisMeus > ultimaPartida.penaltisOponente);
    const fimDeJogo = foiEliminado || foiCampeao;

    // --- GERADOR DA TABELA DA FASE DE GRUPOS ---
    useEffect(() => {
        if (partidasReveladas >= 3 && !tabelaGrupo) {
            let validTable = false;
            let attempts = 0;
            let finalTable = [];

            while (!validTable && attempts < 2000) {
                attempts++;
                let teams = [
                    { id: 'user', nome: 'SUA EQUIPE', p: 0, j: 3, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
                    { id: 'op1', nome: partidasSimuladas[0].oponenteNome, p: 0, j: 3, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
                    { id: 'op2', nome: partidasSimuladas[1].oponenteNome, p: 0, j: 3, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 },
                    { id: 'op3', nome: partidasSimuladas[2].oponenteNome, p: 0, j: 3, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 }
                ];

                const applyMatch = (t1, t2, g1, g2) => {
                    t1.gp += g1; t1.gc += g2; t1.sg = t1.gp - t1.gc;
                    t2.gp += g2; t2.gc += g1; t2.sg = t2.gp - t2.gc;
                    if (g1 > g2) { t1.p += 3; t1.v++; t2.d++; }
                    else if (g1 < g2) { t2.p += 3; t2.v++; t1.d++; }
                    else { t1.p += 1; t2.p += 1; t1.e++; t2.e++; }
                };

                // Jogos do usuário
                applyMatch(teams[0], teams[1], partidasSimuladas[0].meusGols, partidasSimuladas[0].golsOponente);
                applyMatch(teams[0], teams[2], partidasSimuladas[1].meusGols, partidasSimuladas[1].golsOponente);
                applyMatch(teams[0], teams[3], partidasSimuladas[2].meusGols, partidasSimuladas[2].golsOponente);

                // Simulação cruzada dos oponentes
                applyMatch(teams[1], teams[2], Math.floor(Math.random() * 4), Math.floor(Math.random() * 4));
                applyMatch(teams[1], teams[3], Math.floor(Math.random() * 4), Math.floor(Math.random() * 4));
                applyMatch(teams[2], teams[3], Math.floor(Math.random() * 4), Math.floor(Math.random() * 4));

                // Classificação
                teams.sort((a, b) => {
                    if (b.p !== a.p) return b.p - a.p;
                    if (b.sg !== a.sg) return b.sg - a.sg;
                    if (b.gp !== a.gp) return b.gp - a.gp;
                    return 0;
                });

                const userIndex = teams.findIndex(t => t.id === 'user');
                const userPoints = teams[userIndex].p;
                
                // Validação de acordo com a regra de eliminação do jogo
                if (userPoints >= 4 && userIndex <= 1) validTable = true;
                if (userPoints < 4 && userIndex >= 2) validTable = true;

                if (validTable) finalTable = teams;
            }
            if (finalTable.length > 0) setTabelaGrupo(finalTable);
        }
    }, [partidasReveladas, partidasSimuladas, tabelaGrupo]);

    const iniciarSimulacaoAoVivo = () => {
        const partidaAtual = partidasSimuladas[partidasReveladas];
        setPartidaFinalizada(false);
        setResumoIndex(null);
        setMostrarTabela(false); // Fecha a tabela ao iniciar um jogo novo
        
        let autorasMeusGols = [];
        if (partidaAtual.marcadoras !== "Gol Contra") {
             const partes = partidaAtual.marcadoras.split(", ");
             partes.forEach(parte => {
                 const match = parte.match(/(.+) \((\d+)\)/);
                 if (match) {
                     for(let k=0; k < parseInt(match[2]); k++) autorasMeusGols.push(match[1]);
                 } else {
                     autorasMeusGols.push(parte);
                 }
             });
        }
        
        let timelineGols = [];
        for (let i = 0; i < partidaAtual.meusGols; i++) {
            timelineGols.push({
                minuto: Math.floor(Math.random() * 90) + 1,
                tipo: "meu",
                autora: autorasMeusGols[i] || "Gol Contra"
            });
        }

        for (let i = 0; i < partidaAtual.golsOponente; i++) {
            timelineGols.push({
                minuto: Math.floor(Math.random() * 90) + 1,
                tipo: "oponente",
                autora: partidaAtual.autorasGolsOponente && partidaAtual.autorasGolsOponente[i] ? partidaAtual.autorasGolsOponente[i] : "Adversária"
            });
        }

        timelineGols.sort((a, b) => a.minuto - b.minuto);
        for(let i=1; i < timelineGols.length; i++) {
            if (timelineGols[i].minuto <= timelineGols[i-1].minuto) {
                timelineGols[i].minuto = timelineGols[i-1].minuto + 1;
            }
        }

        setSimulandoAgora(true);
        setMinutoAtual(0);
        setEventosPartida([]);
        setPlacarAoVivo({ meus: 0, oponente: 0, penaltisMeus: null, penaltisOponente: null, cobrancasVisuais: [] });

        let minutoTick = 0;
        let meusAtual = 0;
        let opAtual = 0;
        let eventosLog = [];

        const rodarTempoNormal = () => {
            minutoTick += 1;
            setMinutoAtual(minutoTick);

            const golNesteMinuto = timelineGols.find(g => g.minuto === minutoTick);
            if (golNesteMinuto) {
                if (golNesteMinuto.tipo === "meu") meusAtual++;
                else opAtual++;

                eventosLog.unshift({ 
                    minuto: minutoTick,
                    texto: golNesteMinuto.tipo === "meu" ? `⚽ GOL DA SUA EQUIPE! (${golNesteMinuto.autora})` : `❌ GOL ADVERSÁRIO! (${golNesteMinuto.autora})`,
                    tipo: golNesteMinuto.tipo
                });
                
                setPlacarAoVivo(prev => ({ ...prev, meus: meusAtual, oponente: opAtual }));
                setEventosPartida([...eventosLog]);
            }

            if (minutoTick < 90) {
                setTimeout(rodarTempoNormal, velocidadeRef.current);
            } else {
                if (partidaAtual.penaltisMeus === null) {
                    setTimeout(() => setPartidaFinalizada(true), 1000); 
                } else {
                    eventosLog.unshift({ minuto: "FIM", texto: "O JOGO TERMINA EMPATADO! VAMOS PARA OS PÊNALTIS!", tipo: "neutro" });
                    setEventosPartida([...eventosLog]);
                    setPlacarAoVivo(prev => ({ ...prev, penaltisMeus: 0, penaltisOponente: 0, cobrancasVisuais: [] }));
                    setTimeout(rodarPenaltis, velocidadeRef.current * 12);
                }
            }
        };

        let pIndex = 0;
        let pMeusConvertidos = 0;
        let pOpConvertidos = 0;

        const rodarPenaltis = () => {
            if (!partidaAtual.historicoPenaltis || pIndex >= partidaAtual.historicoPenaltis.length) {
                let vencedor = partidaAtual.penaltisMeus > partidaAtual.penaltisOponente ? "SUA EQUIPE" : "ADVERSÁRIO";
                let tipoV = partidaAtual.penaltisMeus > partidaAtual.penaltisOponente ? "meu" : "oponente";
                
                eventosLog.unshift({ minuto: "FIM", texto: `🏆 FIM DOS PÊNALTIS: VITÓRIA DO(A) ${vencedor}!`, tipo: tipoV });
                setEventosPartida([...eventosLog]);
                setTimeout(() => setPartidaFinalizada(true), 2000);
                return;
            }

            const cobranca = partidaAtual.historicoPenaltis[pIndex];
            if (cobranca.time === "meu" && cobranca.fez) pMeusConvertidos++;
            if (cobranca.time === "oponente" && cobranca.fez) pOpConvertidos++;

            const icone = cobranca.fez ? "✅" : "❌";
            const textoPen = cobranca.fez ? "GOL" : "ERROU";
            eventosLog.unshift({ 
                minuto: "PÊN", 
                texto: `${icone} ${textoPen} | ${cobranca.cobradora}`,
                tipo: cobranca.time === "meu" ? (cobranca.fez ? "meu" : "neutro") : (cobranca.fez ? "oponente" : "neutro")
            });

            setPlacarAoVivo(prev => ({ 
                ...prev, 
                penaltisMeus: pMeusConvertidos, 
                penaltisOponente: pOpConvertidos,
                cobrancasVisuais: [...prev.cobrancasVisuais, cobranca]
            }));
            setEventosPartida([...eventosLog]);
            
            pIndex++;
            setTimeout(rodarPenaltis, velocidadeRef.current * 12);
        };

        setTimeout(rodarTempoNormal, velocidadeRef.current);
    };

    const verificarEAvancarPartida = () => {
        setPartidaFinalizada(false);
        setSimulandoAgora(false);
        setPartidasReveladas(prev => prev + 1);
    };

    const renderResumoPartida = (indexPartida, isFlowLive) => {
        const pData = partidasSimuladas[indexPartida];
        if (!pData) return null;

        const contagemOpGols = {};
        if (pData.autorasGolsOponente) {
            pData.autorasGolsOponente.forEach(m => contagemOpGols[m] = (contagemOpGols[m] || 0) + 1);
        }
        const strOpGols = Object.entries(contagemOpGols).map(([n, q]) => q > 1 ? `${n} (${q})` : n).join(", ");

        return (
            <div className="anime-up post-match-summary-card" style={styles.postMatchSummary}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px"}}>
                    <h3 style={styles.postMatchTitle}>{isFlowLive ? "FIM DE JOGO - RESUMO" : `RESUMO DA PARTIDA`}</h3>
                    {!isFlowLive && (
                        <button onClick={() => setResumoIndex(null)} style={styles.btnClose}>✖ FECHAR</button>
                    )}
                </div>
                
                <div className="scorers-grid" style={styles.scorersGrid}>
                    <div style={styles.scorerCol}>
                        <strong style={{color: "#00E5FF"}}>SUA EQUIPE</strong>
                        <p style={styles.scorerText}>{pData.meusGols > 0 ? pData.marcadoras : "Nenhum gol"}</p>
                    </div>
                    <div style={styles.scorerCol}>
                        <strong style={{color: "#FF005B"}}>ADVERSÁRIO</strong>
                        <p style={styles.scorerText}>{pData.golsOponente > 0 ? strOpGols : "Nenhum gol"}</p>
                    </div>
                </div>

                {pData.historicoPenaltis && pData.historicoPenaltis.length > 0 && (
                    <div style={{...styles.penaltiesBoard, margin: "0"}}>
                        <div style={{fontSize: "14px", marginBottom: "8px"}}>🎯 PÊNALTIS: {pData.penaltisMeus} x {pData.penaltisOponente}</div>
                        <div style={styles.penaltyTrackContainer}>
                            <div style={styles.penaltyTrack}>
                                <span style={styles.penaltyTrackLabel}>VOCÊ:</span>
                                {pData.historicoPenaltis.filter(c => c.time === "meu").map((c, i) => (
                                    <span key={`m-${i}`} style={{...styles.penaltyDot, background: c.fez ? "#1C8144" : "#E74C3C"}}>{c.fez ? "✓" : "✗"}</span>
                                ))}
                            </div>
                            <div style={styles.penaltyTrack}>
                                <span style={styles.penaltyTrackLabel}>ADV:</span>
                                {pData.historicoPenaltis.filter(c => c.time === "oponente").map((c, i) => (
                                    <span key={`o-${i}`} style={{...styles.penaltyDot, background: c.fez ? "#1C8144" : "#E74C3C"}}>{c.fez ? "✓" : "✗"}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {isFlowLive && <button style={{...styles.btnSimular, width: "100%", marginTop: "15px"}} onClick={verificarEAvancarPartida}>AVANÇAR ➔</button>}
            </div>
        );
    };

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
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }

        /* ================= DECORAÇÃO E SELETOR MOBILE ================= */
        @media (max-width: 768px) {
          .app-page { padding: 15px 12px !important; }
          .app-header { flex-direction: column !important; gap: 10px !important; margin-bottom: 20px !important; text-align: center !important; }
          .app-logo { font-size: 32px !important; }
          .tournament-container, .summary-container { width: 100% !important; max-width: 100% !important; padding-bottom: 25px !important; }
          .tournament-header { padding: 15px !important; margin-bottom: 15px !important; }
          .tournament-title { font-size: 22px !important; }
          .live-scoreboard { flex-direction: column !important; gap: 15px !important; padding: 15px !important; text-align: center !important; }
          .live-team { width: 100% !important; font-size: 16px !important; }
          .live-score-center { gap: 12px !important; }
          .live-score-num { font-size: 32px !important; }
          .live-events-box { height: 140px !important; }
          .scorers-grid { flex-direction: column !important; gap: 10px !important; }
          .post-match-summary-card { padding: 15px !important; }
          .match-card { flex-direction: column !important; align-items: stretch !important; gap: 12px !important; padding: 15px !important; }
          .match-stage { width: 100% !important; font-size: 10px !important; border-bottom: 1px dashed #EAE5D9 !important; padding-bottom: 4px !important; }
          .match-info { padding: 0 !important; }
          .opp-name { font-size: 18px !important; }
          .match-score-area { width: 100% !important; justify-content: space-between !important; border-top: 1px dashed #EAE5D9 !important; padding-top: 8px !important; margin-top: 4px !important; }
          .match-score { font-size: 26px !important; }
          .summary-title { font-size: 36px !important; }
          .summary-record { font-size: 64px !important; letter-spacing: -2px !important; margin-top: 0 !important; margin-bottom: 5px !important; }
          .stats-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; }
          .stat-box { border-right: 2px solid #111 !important; border-bottom: 2px solid #111 !important; padding: 10px 0 !important; }
          .stat-box:nth-child(2n) { border-right: none !important; }
          .stat-box:nth-child(3), .stat-box:nth-child(4) { border-bottom: none !important; }
          .stat-number { font-size: 26px !important; }
          .player-summary-row { padding: 10px 12px !important; }
          .summary-player-name { font-size: 15px !important; }

          /* Tabela responsiva */
          .group-table-box { font-size: 11px !important; }
          .group-table-box th, .group-table-box td { padding: 8px 4px !important; }
        }
    `;

    // --- TELA DE RESUMO FINAL (FIM DO JOGO) ---
    if (verResumo) {
        return (
            <div className="app-page" style={styles.page}>
                <style>{animacoesCss}</style>
                <header className="anime-up app-header" style={styles.header}>
                    <h1 className="app-logo" style={styles.logo}>
                        6 <span style={{ color: "#00E5FF", WebkitTextStroke: "0px" }}>-</span> 0{" "}
                        <span style={styles.logoText}> A COPA É DELAS</span>
                    </h1>
                    <div style={styles.menu}>{formacaoEscolhida}</div>
                </header>

                <div className="anime-up delay-1 summary-container" style={styles.summaryContainer}>
                    <h1 className="summary-title" style={styles.summaryTitle}>{foiCampeao ? "CHAMPION" : "ELIMINADA"}</h1>
                    <br />
                    <h2 className="summary-record" style={styles.summaryBigRecord}>
                        {vitorias} <span style={styles.summaryDash}>-</span> {empates} <span style={styles.summaryDash}>-</span> {derrotas}
                    </h2>
                    
                    <p style={styles.summarySubtitle}>
                        {foiCampeao && derrotas === 0 ? "RUN PERFEITA • SEM DERROTAS" : foiCampeao ? "CAMPEÃO" : "FIM DE JOGO"}
                    </p>

                    <div className="anime-up delay-2 stats-grid" style={styles.statsGrid}>
                        <div className="stat-box" style={styles.statBox}>
                            <h3 className="stat-number" style={styles.statNumber}>{golsPro}</h3>
                            <span style={styles.statLabel}>GOLS PRÓ</span>
                        </div>
                        <div className="stat-box" style={styles.statBox}>
                            <h3 className="stat-number" style={styles.statNumber}>{golsContra}</h3>
                            <span style={styles.statLabel}>CONTRAS</span>
                        </div>
                        <div className="stat-box" style={styles.statBox}>
                            <h3 className="stat-number" style={styles.statNumber}>{mediaOverall}</h3>
                            <span style={styles.statLabel}>MÉDIA OVERALL</span>
                        </div>
                        <div className="stat-box" style={{...styles.statBox, borderRight: "none"}}>
                            <h3 className="stat-number" style={{...styles.statNumber, color: "#00E5FF"}}>{partidasReveladas}</h3>
                            <span style={styles.statLabel}>★ PARTIDAS</span>
                        </div>
                    </div>

                    <div className="anime-up delay-3" style={styles.playersSummaryList}>
                        {jogadorasEmCampo.map((jogadora, index) => {
                            const isDourada = jogadora.overall >= 85;
                            return (
                                <div key={index} className="player-summary-row" style={{
                                    ...styles.playerSummaryRow,
                                    borderColor: isDourada ? "#00E5FF" : "#EAE5D9"
                                }}>
                                    <div style={styles.summaryPlayerLeft}>
                                        <span style={styles.summaryPlayerNum}>{jogadora.numero}</span>
                                        <strong className="summary-player-name" style={{...styles.summaryPlayerName, color: isDourada ? "#00E5FF" : "#111"}}>
                                            {jogadora.nomeCamisa}
                                        </strong>
                                    </div>
                                    <div style={styles.summaryPlayerRight}>
                                        <span style={styles.summaryPlayerSigla}>{jogadora.sigla}</span>
                                        <span style={styles.summaryPlayerYear}>{jogadora.ano}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button className="anime-up delay-3" style={{...styles.btnRoll, width: "100%", marginTop: "20px"}} onClick={onRestart}>
                        NOVO DRAFT ↺
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="app-page" style={styles.page}>
            <style>{animacoesCss}</style>
            
            <header className="anime-up app-header" style={styles.header}>
                <h1 className="app-logo" style={styles.logo}>
                    6 <span style={{ color: "#00E5FF", WebkitTextStroke: "0px" }}>×</span> 0{" "}
                    <span style={styles.logoText}>COPA É DELAS</span>
                </h1>
                <div style={styles.menu}>{formacaoEscolhida}</div>
            </header>

            <div className="anime-up delay-1 tournament-container" style={styles.tournamentContainer}>
                
                <div className="tournament-header" style={styles.tournamentHeader}>
                    <h2 className="tournament-title" style={styles.tournamentTitle}>
                        {foiCampeao ? "🏆 CAMPEÃ DO MUNDO! 🏆" : foiEliminado ? "ELIMINADA!" : "SIMULAÇÃO DO TORNEIO"}
                    </h2> 
                </div>
                
                {resumoIndex !== null && !simulandoAgora && !partidaFinalizada && (
                    renderResumoPartida(resumoIndex, false)
                )}
                
                {simulandoAgora && (
                    <div className="anime-up live-match-panel" style={styles.liveMatchPanel}>
                        <div className="live-scoreboard" style={styles.liveScoreboard}>
                            <div className="live-team" style={styles.liveTeam}>SUA EQUIPE</div>
                            <div className="live-score-center" style={styles.liveScoreCenter}>
                                <span style={styles.liveScoreNum}>{placarAoVivo.meus}</span>
                                <span style={styles.liveTimer}>{minutoAtual}'</span>
                                <span style={styles.liveScoreNum}>{placarAoVivo.oponente}</span>
                            </div>
                            <div className="live-team" style={styles.liveTeam}>{partidasSimuladas[partidasReveladas].oponenteNome}</div>
                        </div>
                        
                        {placarAoVivo.penaltisMeus !== null && (
                            <div style={styles.penaltiesBoard}>
                                <div style={{fontSize: "16px", marginBottom: "8px"}}>🎯 PÊNALTIS: {placarAoVivo.penaltisMeus} x {placarAoVivo.penaltisOponente}</div>
                                <div style={styles.penaltyTrackContainer}>
                                    <div style={styles.penaltyTrack}>
                                        <span style={styles.penaltyTrackLabel}>VOCÊ:</span>
                                        {placarAoVivo.cobrancasVisuais.filter(c => c.time === "meu").map((c, i) => (
                                            <span key={`m-${i}`} style={{...styles.penaltyDot, background: c.fez ? "#1C8144" : "#E74C3C"}}>{c.fez ? "✓" : "✗"}</span>
                                        ))}
                                    </div>
                                    <div style={styles.penaltyTrack}>
                                        <span style={styles.penaltyTrackLabel}>{partidasSimuladas[partidasReveladas].oponenteSigla}</span>
                                        {placarAoVivo.cobrancasVisuais.filter(c => c.time === "oponente").map((c, i) => (
                                            <span key={`o-${i}`} style={{...styles.penaltyDot, background: c.fez ? "#1C8144" : "#E74C3C"}}>{c.fez ? "✓" : "✗"}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {!partidaFinalizada ? (
                            <>
                                <div className="live-events-box" style={styles.liveEventsBox}>
                                    {eventosPartida.map((ev, i) => (
                                        <div key={i} className="anime-up" style={{
                                            ...styles.liveEventRow,
                                            color: ev.tipo === "meu" ? "#1C8144" : ev.tipo === "oponente" ? "#E74C3C" : "#555",
                                            textAlign: ev.tipo === "neutro" ? "center" : "left",
                                            fontWeight: ev.tipo === "neutro" ? "900" : "bold"
                                        }}>
                                            <strong>{ev.minuto}'</strong> - {ev.texto}
                                        </div>
                                    ))}
                                    {eventosPartida.length === 0 && <div style={{color: "#999", textAlign: "center", fontStyle: "italic", fontSize: "12px"}}>A bola está rolando...</div>}
                                </div>
                                <div style={{marginTop: "15px", textAlign: "center"}}>
                                    <span style={{fontSize: "10px", fontWeight: "bold", marginRight: "10px"}}>VELOCIDADE:</span>
                                    <button style={{...styles.btnSpeed, background: velocidadeSimulacao === 200 ? "#111" : "#CCC"}} onClick={() => setVelocidadeSimulacao(200)}>1X</button>
                                    <button style={{...styles.btnSpeed, background: velocidadeSimulacao === 80 ? "#111" : "#CCC"}} onClick={() => setVelocidadeSimulacao(80)}>2X</button>
                                    <button style={{...styles.btnSpeed, background: velocidadeSimulacao === 20 ? "#111" : "#CCC"}} onClick={() => setVelocidadeSimulacao(20)}>MAX</button>
                                </div>
                            </>
                        ) : (
                            renderResumoPartida(partidasReveladas, true)
                        )}
                    </div>
                )}

                <div className="anime-up delay-2" style={{...styles.matchesList, opacity: simulandoAgora ? 0.3 : 1}}>
                    {partidasSimuladas.slice(0, partidasReveladas).map((partida, index) => {
                        const isFinal = partida.fase === "FINAL";
                        const ganhouNoTempoNormal = partida.meusGols > partida.golsOponente;
                        const ganhouNosPenaltis = partida.penaltisMeus !== null && partida.penaltisMeus > partida.penaltisOponente;
                        const perdeuNoTempoNormal = partida.golsOponente > partida.meusGols;
                        const perdeuNosPenaltis = partida.penaltisOponente !== null && partida.penaltisOponente > partida.penaltisMeus;
                        
                        const vitoriaGeral = ganhouNoTempoNormal || ganhouNosPenaltis;
                        const derrotaGeral = perdeuNoTempoNormal || perdeuNosPenaltis;
                        const cardClicavel = !simulandoAgora && !partidaFinalizada;

                        return (
                            <div key={index} className="anime-up match-card" 
                                onClick={() => { if (cardClicavel) setResumoIndex(index); }}
                                style={{
                                    ...styles.matchCard,
                                    background: isFinal ? "#111" : "#FFF",
                                    color: isFinal ? "#FFF" : "#111",
                                    borderColor: isFinal ? "#111" : "#EAE5D9",
                                    cursor: cardClicavel ? "pointer" : "default"
                                }}>
                                <div className="match-stage" style={styles.matchStage}>{partida.fase}</div>
                                
                                <div className="match-info" style={styles.matchInfo}>
                                    <div style={styles.matchOpponent}>
                                        <span style={styles.vs}>vs</span> {partida.oponenteSigla} <strong className="opp-name" style={{...styles.oppName, color: isFinal ? "#FFF" : "#111"}}>{partida.oponenteNome}</strong>
                                    </div>
                                    {partida.meusGols > 0 && (
                                        <div style={styles.matchScorers}>
                                            <span style={styles.goalsLabel}>GOLS:</span> {partida.marcadoras}
                                        </div>
                                    )}
                                </div>

                                <div className="match-score-area" style={styles.matchScoreArea}>
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                                        <span className="match-score" style={{
                                            ...styles.matchScore,
                                            color: isFinal ? "#c72817" : (vitoriaGeral ? "#1C8144" : derrotaGeral ? "#E74C3C" : "#777")
                                        }}>
                                            {partida.meusGols}<span className="score-dash" style={{...styles.scoreDash, color: isFinal ? "#FFF" : "#111"}}>-</span>{partida.golsOponente}
                                        </span>
                                        {partida.penaltisMeus !== null && (
                                            <span style={{fontSize: "10px", fontWeight: "bold", color: isFinal ? "#CCC" : "#777"}}>
                                                PÊN: {partida.penaltisMeus}-{partida.penaltisOponente}
                                            </span>
                                        )}
                                    </div>
                                    <span style={styles.matchIcon}>
                                        {isFinal && vitoriaGeral ? "🏆" : (vitoriaGeral ? "✓" : derrotaGeral ? "✗" : "−")}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* --- RENDERIZAÇÃO DA TABELA DO GRUPO (APARECE APÓS O 3º JOGO) --- */}
                {partidasReveladas >= 3 && tabelaGrupo && !simulandoAgora && resumoIndex === null && (
                    <div className="anime-up delay-2" style={{ textAlign: "center", marginTop: "30px", marginBottom: "20px" }}>
                        <button 
                            style={styles.btnTabela} 
                            onClick={() => setMostrarTabela(!mostrarTabela)}
                        >
                            {mostrarTabela ? "ESCONDER CLASSIFICAÇÃO" : "VER CLASSIFICAÇÃO DO GRUPO 📊"}
                        </button>

                        {mostrarTabela && (
                            <div className="anime-up" style={styles.tableContainer}>
                                <table className="group-table-box" style={styles.table}>
                                    <thead>
                                        <tr style={styles.tableHeadRow}>
                                            <th style={styles.th}>POS</th>
                                            <th style={{...styles.th, textAlign: "left"}}>SELEÇÃO</th>
                                            <th style={styles.th}>P</th>
                                            <th style={styles.th}>J</th>
                                            <th style={styles.th}>V</th>
                                            <th style={styles.th}>E</th>
                                            <th style={styles.th}>D</th>
                                            <th style={styles.th}>SG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabelaGrupo.map((team, idx) => {
                                            const isUser = team.id === 'user';
                                            const isClassified = idx < 2; // Os 2 primeiros passam
                                            return (
                                                <tr key={team.id} style={{
                                                    ...styles.tableRow,
                                                    background: isUser ? "#111" : "#FFF",
                                                    color: isUser ? "#00E5FF" : "#111",
                                                    borderLeft: isClassified ? "4px solid #1C8144" : "4px solid #111"
                                                }}>
                                                    <td style={styles.td}>{idx + 1}º</td>
                                                    <td style={{...styles.td, textAlign: "left", fontWeight: isUser ? "900" : "bold"}}>{team.nome}</td>
                                                    <td style={{...styles.td, fontWeight: "900"}}>{team.p}</td>
                                                    <td style={styles.td}>{team.j}</td>
                                                    <td style={styles.td}>{team.v}</td>
                                                    <td style={styles.td}>{team.e}</td>
                                                    <td style={styles.td}>{team.d}</td>
                                                    <td style={styles.td}>{team.sg}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}

                <div className="anime-up delay-3" style={{textAlign: "center", marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "15px"}}>
                    {temMaisJogos && !foiEliminado && !simulandoAgora && resumoIndex === null ? (
                        <button style={{...styles.btnSimular, width: "100%"}} onClick={iniciarSimulacaoAoVivo}>
                            {partidasReveladas === 0 ? "JOGAR A PRIMEIRA PARTIDA ➔" : "JOGAR PRÓXIMA PARTIDA ➔"}
                        </button>
                    ) : !simulandoAgora && resumoIndex === null ? (
                        <>
                            {eliminadoNoGrupo && (
                                <p style={{color: "#E74C3C", fontWeight: "bold"}}>Sua equipe não alcançou os 4 pontos necessários para passar da Fase de Grupos.</p>
                            )}
                            {fimDeJogo && (
                                <button style={{...styles.btnResumo, width: "100%"}} onClick={() => setVerResumo(true)}>
                                    VER RESUMO DA CAMPANHA ★
                                </button>
                            )}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

/* --- ESTILOS DE DESKTOP COMPLETAMENTE PRESERVADOS --- */
const styles = {
    page: { fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#F6F2F5", minHeight: "100vh", padding: "20px 40px", color: "#111" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111", paddingBottom: "10px", marginBottom: "30px" },
    logo: { fontSize: "42px", fontFamily: "Impact, sans-serif", margin: 0, letterSpacing: "-1px", color: "white", WebkitTextStroke: "2px #111" },
    logoText: { fontSize: "20px", color: "white", WebkitTextStroke: "1px #111" },
    menu: { fontSize: "12px", fontWeight: "bold", letterSpacing: "2px" },
    
    btnSimular: { background: "#00E5FF", color: "#111", padding: "16px 32px", border: "2px solid #111", boxShadow: "4px 4px 0px #FF005B", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "1px" },
    btnRoll: { background: "#FF005B", color: "white", padding: "16px 32px", border: "2px solid #111", boxShadow: "4px 4px 0px #111", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "1px" },
    btnResumo: { background: "#FF005B", color: "#111", padding: "16px 32px", border: "2px solid #111", boxShadow: "4px 4px 0px #111", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", letterSpacing: "1px" },

    tournamentContainer: { maxWidth: "800px", margin: "0 auto", paddingBottom: "50px" },
    tournamentHeader: { textAlign: "center", marginBottom: "30px", background: "#FFF", border: "1px solid #EAE5D9", padding: "20px", boxShadow: "2px 2px 0px rgba(0,0,0,0.05)", position: "relative" },
    tournamentTitle: { fontSize: "32px", fontFamily: "Impact, sans-serif", margin: 0, letterSpacing: "1px", color: "black" },
    
    matchesList: { display: "flex", flexDirection: "column", gap: "10px", transition: "opacity 0.3s" },
    matchCard: { display: "flex", padding: "20px", border: "1px solid #EAE5D9", boxShadow: "2px 2px 0px rgba(0,0,0,0.05)", alignItems: "center" },
    matchStage: { width: "120px", fontSize: "11px", fontWeight: "900", letterSpacing: "1px", color: "#777" },
    
    matchInfo: { flex: 1, padding: "0 20px" },
    matchOpponent: { fontSize: "20px", fontFamily: "Impact, sans-serif", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "10px" },
    vs: { fontSize: "12px", fontFamily: "Arial", fontWeight: "bold", color: "#777" },
    oppName: { fontSize: "24px" },
    
    matchScorers: { fontSize: "11px", color: "#555", marginTop: "5px", display: "flex", gap: "5px", fontWeight: "bold" },
    goalsLabel: { color: "#FF005B", letterSpacing: "1px" },
    
    matchScoreArea: { width: "120px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "15px" },
    matchScore: { fontSize: "32px", fontFamily: "Impact, sans-serif", fontWeight: "900", letterSpacing: "2px", lineHeight: "1" },
    scoreDash: { color: "#111", margin: "0 5px" },
    matchIcon: { fontSize: "18px", fontWeight: "bold" },

    liveMatchPanel: { background: "#FFF", border: "3px solid #111", padding: "20px", marginBottom: "30px", boxShadow: "6px 6px 0px rgba(0, 229, 255, 0.4)" },
    liveScoreboard: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#111", color: "#FFF", padding: "15px 30px", borderRadius: "8px", marginBottom: "15px" },
    liveTeam: { fontSize: "20px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "1px", width: "150px", textAlign: "center" },
    liveScoreCenter: { display: "flex", alignItems: "center", gap: "20px" },
    liveScoreNum: { fontSize: "42px", fontFamily: "Impact, sans-serif" },
    liveTimer: { fontSize: "14px", fontWeight: "bold", color: "#00E5FF", border: "1px solid #00E5FF", padding: "2px 8px", borderRadius: "10px", width: "40px", textAlign: "center" },
    
    penaltiesBoard: { background: "#111", borderTop: "1px solid #333", color: "#FFF", textAlign: "center", padding: "15px", borderRadius: "8px", marginBottom: "15px" },
    penaltyTrackContainer: { display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", marginTop: "10px" },
    penaltyTrack: { display: "flex", gap: "6px", alignItems: "center" },
    penaltyTrackLabel: { fontSize: "11px", fontWeight: "bold", width: "40px", textAlign: "right", marginRight: "5px", color: "#999" },
    penaltyDot: { width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#FFF", fontWeight: "bold", boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.3)" },
    
    liveEventsBox: { background: "#F4F0E6", height: "120px", overflowY: "auto", border: "1px inset #CCC", padding: "10px", display: "flex", flexDirection: "column", gap: "5px" },
    liveEventRow: { fontSize: "12px", fontWeight: "bold", borderBottom: "1px dashed #DDD", paddingBottom: "3px" },
    btnSpeed: { border: "none", color: "#FFF", padding: "4px 10px", margin: "0 2px", borderRadius: "3px", fontSize: "10px", fontWeight: "bold", cursor: "pointer" },

    postMatchSummary: { background: "#F4F0E6", padding: "20px", border: "2px dashed #111", textAlign: "center", marginBottom: "30px" },
    postMatchTitle: { fontSize: "20px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "1px", margin: "0" },
    btnClose: { background: "none", border: "none", color: "#E74C3C", fontWeight: "bold", cursor: "pointer", fontSize: "10px", letterSpacing: "1px" },
    scorersGrid: { display: "flex", gap: "20px", marginBottom: "20px" },
    scorerCol: { flex: 1, background: "#FFF", border: "1px solid #CCC", padding: "15px", borderRadius: "4px" },
    scorerText: { fontSize: "14px", fontWeight: "bold", color: "#555", margin: "10px 0 0 0" },

    summaryContainer: { maxWidth: "600px", margin: "0 auto", paddingBottom: "50px", textAlign: "center" },
    summaryTitle: { fontSize: "52px", fontFamily: "Impact, sans-serif", margin: "0", letterSpacing: "2px", color: "#111", textTransform: "uppercase" },
    summaryBigRecord: { fontSize: "140px", fontFamily: "Impact, sans-serif", margin: "-10px 0 10px 0", letterSpacing: "-5px", color: "#111", lineHeight: "1" },
    summaryDash: { color: "#00E5FF", margin: "0 10px" },
    summarySubtitle: { fontSize: "14px", fontWeight: "900", letterSpacing: "4px", color: "#555", marginTop: "0", marginBottom: "30px" },
    
    statsGrid: { display: "flex", border: "3px solid #111", background: "#FFF", marginBottom: "20px" },
    statBox: { flex: 1, padding: "15px 0", borderRight: "2px solid #111", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
    statNumber: { margin: 0, fontSize: "36px", fontFamily: "Impact, sans-serif", letterSpacing: "1px" },
    statLabel: { fontSize: "10px", fontWeight: "bold", letterSpacing: "1px", color: "#777", marginTop: "5px" },
    
    playersSummaryList: { display: "flex", flexDirection: "column", gap: "6px" },
    playerSummaryRow: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FFF", border: "2px solid #EAE5D9", padding: "12px 20px" },
    summaryPlayerLeft: { display: "flex", alignItems: "center", gap: "15px" },
    summaryPlayerNum: { fontSize: "14px", fontWeight: "900", color: "#999", width: "20px", textAlign: "left" },
    summaryPlayerName: { fontSize: "18px", fontWeight: "900", fontFamily: "Arial" },
    summaryPlayerRight: { display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: "bold", color: "#777" },
    summaryPlayerSigla: { letterSpacing: "1px" },
    summaryPlayerYear: { color: "#111", fontWeight: "900" },

    // --- ESTILOS DA TABELA DE GRUPOS ---
    btnTabela: { background: "#FFF", color: "#111", padding: "12px 24px", border: "2px solid #111", boxShadow: "3px 3px 0px #111", fontSize: "14px", fontWeight: "900", fontFamily: "Impact, sans-serif", cursor: "pointer", letterSpacing: "1px", marginBottom: "15px" },
    tableContainer: { width: "100%", maxWidth: "800px", margin: "0 auto", background: "#FFF", border: "2px solid #111", boxShadow: "4px 4px 0px rgba(0,0,0,0.1)", overflowX: "auto" },
    table: { width: "100%", borderCollapse: "collapse", textAlign: "center", fontSize: "14px" },
    tableHeadRow: { background: "#111", color: "#FFF", fontSize: "12px", letterSpacing: "1px" },
    th: { padding: "12px 8px", borderBottom: "2px solid #111" },
    tableRow: { borderBottom: "1px solid #EAE5D9" },
    td: { padding: "12px 8px" }
};