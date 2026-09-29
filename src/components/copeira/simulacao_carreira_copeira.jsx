import React, { useState, useEffect } from "react";

import bandeirasPaises from "../../dados/bandeira_paises";
import { dbTimes, getTodosOsTimes, getTimesPorDivisao } from "../../dados/times";
import {
    dbCampeonatos,
    simularCampeonatoBrasileiro,
    simularCopaDoBrasil2026,
    simularSupercopa2026,
    simularLibertadores,
    historicoMundo,
    atualizarHistoricoMundo,
    resetarHistoricoMundo
} from "../../dados/campeonatos";
import dbEventos from "../../dados/eventos";

const dbClubes = dbTimes;

export default function SimulacaoCarreira({ dadosJogadora, aoVoltar }) {
    const jogadora = {
        nome: "JOGADORA",
        numero: "10",
        perna: "Direita",
        paisSelecionado: "Brasil",
        posicaoSelecionada: "CA",
        ...dadosJogadora
    };

    const [idade, setIdade] = useState(16);
    const IDADE_MAXIMA = 40;

    const [ovr, setOvr] = useState(50);
    const [clubeAtual, setClubeAtual] = useState(null);

    const [timesA1Atual, setTimesA1Atual] = useState(dbTimes.A1);
    const [timesA2Atual, setTimesA2Atual] = useState(dbTimes.A2);

    const [totalJogos, setTotalJogos] = useState(0);
    const [totalGolos, setTotalGolos] = useState(0);
    const [totalAst, setTotalAst] = useState(0);
    const [titulos, setTitulos] = useState([]);
    const [historico, setHistorico] = useState([]);

    const [faseAtual, setFaseAtual] = useState("ESCOLHER_CLUBE");
    const [opcoesClubes, setOpcoesClubes] = useState([]);
    const [eventoAtual, setEventoAtual] = useState(null);
    const [ultimoEventoId, setUltimoEventoId] = useState(null);
    const [multEventos, setMultEventos] = useState(1.0);

    const [torneiosTemporada, setTorneiosTemporada] = useState([]);
    const [abaTorneioAtiva, setAbaTorneioAtiva] = useState(0);
    const [subAbaBrasileirao, setSubAbaBrasileirao] = useState("tabela");

    const [torneioPenaltiAlvo, setTorneioPenaltiAlvo] = useState("brasileirao");

    const [temporadaInspecionada, setTemporadaInspecionada] = useState(null);
    const [abaInspecionadaAtiva, setAbaInspecionadaAtiva] = useState(0);
    const [subAbaInspecionada, setSubAbaInspecionada] = useState("tabela");

    const [clubeMarcadoId, setClubeMarcadoId] = useState(null);
    const [mostrarPopUpTitulo, setMostrarPopUpTitulo] = useState(false);
    const [titulosRecentes, setTitulosRecentes] = useState([]);
    const [resultadoAcao, setResultadoAcao] = useState(null);
    const [mostrarPopUpAposentadoria, setMostrarPopUpAposentadoria] = useState(false);
    const [clubeRecusouRenovacao, setClubeRecusouRenovacao] = useState(false);

    useEffect(() => {
        if (faseAtual === "ESCOLHER_CLUBE" && idade === 16) {
            resetarHistoricoMundo(); // <--- ADICIONE ESTA LINHA AQUI
            const misturados = [...timesA2Atual].sort(() => 0.5 - Math.random()).slice(0, 3);
            setOpcoesClubes(misturados);
        }
    }, [idade, faseAtual]);

    const gerarPropostas = (currentOvr = ovr, clubePassado = clubeAtual) => {
        let poolCompleta = [...timesA1Atual, ...timesA2Atual];
        let poolTier = timesA2Atual;

        if (currentOvr > 68) poolTier = [...timesA1Atual, ...timesA2Atual];
        if (currentOvr > 80) poolTier = timesA1Atual;

        const nomeClubeAtual = clubePassado ? clubePassado.nome.toLowerCase().trim() : "";
        let outrosClubes = poolTier.filter(c => c.nome.toLowerCase().trim() !== nomeClubeAtual);

        if (outrosClubes.length < 2) {
            outrosClubes = poolCompleta.filter(c => c.nome.toLowerCase().trim() !== nomeClubeAtual);
        }

        outrosClubes = outrosClubes.sort(() => 0.5 - Math.random());

        let aceitouRenovar = true;
        if (clubePassado) {
            if (idade >= 35 && Math.random() < 0.5) aceitouRenovar = false;
            else if (Math.random() < 0.15) aceitouRenovar = false;
        }

        let listaFinal = [];
        if (clubePassado && aceitouRenovar) {
            setClubeRecusouRenovacao(false);
            listaFinal = [clubePassado, outrosClubes[0], outrosClubes[1]].filter(Boolean);
        } else if (clubePassado && !aceitouRenovar) {
            setClubeRecusouRenovacao(true);
            listaFinal = outrosClubes.slice(0, 3);
        } else {
            setClubeRecusouRenovacao(false);
            listaFinal = outrosClubes.slice(0, 3);
        }

        setOpcoesClubes(listaFinal);
    };

    const assinarClube = (clube, index) => {
        setClubeMarcadoId(index);
        setTimeout(() => {
            let clubeSelecionado = { ...clube };
            setClubeAtual(clubeSelecionado);
            setClubeMarcadoId(null);

            if (idade === 16) {
                avancarEpocaComClube(clubeSelecionado, 3);
            } else {
                decidirProximaFase(clubeSelecionado);
            }
        }, 300);
    };

    const decidirProximaFase = (clubeRecemAssinado = clubeAtual) => {
        const sorteio = Math.random();

        const isUserNaLiberta = historicoMundo.top3Brasileirao.includes(clubeRecemAssinado?.nome) || historicoMundo.campeaoLiberta === clubeRecemAssinado?.nome;

        if (sorteio < 0.05) {
            const alvos = ["brasileirao", "copa"];
            if (isUserNaLiberta) alvos.push("libertadores"); // Só cai na Libertadores se estiver jogando ela!

            setTorneioPenaltiAlvo(alvos[Math.floor(Math.random() * alvos.length)]);
            setFaseAtual("FINAL_TACA");
        } else if (sorteio < 0.40) {
            let eventosDisponiveis = dbEventos;
            if (ultimoEventoId) {
                eventosDisponiveis = dbEventos.filter(e => e.id !== ultimoEventoId);
            }
            const eventoSorteado = eventosDisponiveis[Math.floor(Math.random() * eventosDisponiveis.length)];
            setEventoAtual(eventoSorteado);
            setUltimoEventoId(eventoSorteado.id);
            setFaseAtual("EVENTO");
        } else {
            let crescimentoNatural = 1;
            const rendimento = Math.random();

            if (idade <= 22) crescimentoNatural = rendimento > 0.2 ? Math.floor(Math.random() * 3) + 2 : 2;
            else if (idade <= 27) crescimentoNatural = rendimento > 0.3 ? Math.floor(Math.random() * 3) + 1 : 1;
            else if (idade <= 31) crescimentoNatural = rendimento > 0.5 ? Math.floor(Math.random() * 2) + 1 : 0;

            avancarEpocaComClube(clubeRecemAssinado, crescimentoNatural);
        }
    };

    const lidarComEventoRisco = (opcao) => {
        setMultEventos(opcao.statsMult || 1.0);
        if (opcao.isRisco) {
            const rolou = Math.random() * 100;
            if (rolou <= opcao.chance) {
                setResultadoAcao({ titulo: "SUCESSO!", desc: opcao.sucesso.msg, cor: "#00E5FF", icone: "↗" });
                setTimeout(() => {
                    setResultadoAcao(null);
                    avancarEpocaComClube(clubeAtual, opcao.sucesso.ovr);
                }, 1800);
            } else {
                setResultadoAcao({ titulo: "FALHA!", desc: opcao.falha.msg, cor: "#FF005B", icone: "↘" });
                setTimeout(() => {
                    setResultadoAcao(null);
                    avancarEpocaComClube(clubeAtual, opcao.falha.ovr);
                }, 1800);
            }
        } else {
            avancarEpocaComClube(clubeAtual, opcao.sucesso.ovr);
        }
    };

    const lidarComPenalti = (bater) => {
        if (bater) {
            const rolou = Math.random() * 100;
            if (rolou <= 60) {
                setResultadoAcao({ titulo: "GOL DO TÍTULO!", desc: "Você cobrou com perfeição e garantiu a taça!", cor: "#00E5FF", icone: "⚽" });
                setTimeout(() => { setResultadoAcao(null); resolverFinal(true, 4); }, 2200);
            } else {
                setResultadoAcao({ titulo: "NA TRAVE!", desc: "A pressão foi demais... você perdeu e o adversário foi campeão.", cor: "#FF005B", icone: "❌" });
                setTimeout(() => { setResultadoAcao(null); resolverFinal(false, 0); }, 2200);
            }
        } else {
            const capitaFez = Math.random() * 100 <= 70;
            if (capitaFez) {
                setResultadoAcao({ titulo: "UFA!", desc: "A capitã chamou a responsabilidade e marcou. Título garantido!", cor: "#00E5FF", icone: "🏆" });
                setTimeout(() => { setResultadoAcao(null); resolverFinal(true, 2); }, 2200);
            } else {
                setResultadoAcao({ titulo: "DEFENDEU!", desc: "A capitã vacilou e o seu time perde a taça.", cor: "#FF005B", icone: "🧤" });
                setTimeout(() => { setResultadoAcao(null); resolverFinal(false, 0); }, 2200);
            }
        }
    };

    const resolverFinal = (ganhou, bonusOvr) => {
        avancarEpocaComClube(clubeAtual, bonusOvr, ganhou);
    };

    const avancarEpocaComClube = (clubeTarget, bonusEventoFinal = 0, ganhouFinalInterativa = null) => {
        let declinio = 0;
        if (idade >= 33 && idade < 36) {
            if (Math.random() > 0.75) declinio = -1;
        } else if (idade >= 36) {
            declinio = Math.floor(Math.random() * -2) - 1;
        }

        const ovrAposEvolucao = Math.max(40, ovr + bonusEventoFinal + declinio);

        const forcarBrasileirao = (ganhouFinalInterativa !== null && torneioPenaltiAlvo === "brasileirao") ? ganhouFinalInterativa : null;
        const forcarCopa = (ganhouFinalInterativa !== null && torneioPenaltiAlvo === "copa") ? ganhouFinalInterativa : null;
        const forcarLiberta = (ganhouFinalInterativa !== null && torneioPenaltiAlvo === "libertadores") ? ganhouFinalInterativa : null;

        // SIMULAÇÃO COMPLETA DAS COMPETIÇÕES DO ANO
        const resBrasileirao = simularCampeonatoBrasileiro(clubeTarget, ovrAposEvolucao, forcarBrasileirao, timesA1Atual, timesA2Atual);
        const resCopaBrasil = simularCopaDoBrasil2026(clubeTarget, ovrAposEvolucao, forcarCopa);
        const resSupercopa = simularSupercopa2026(clubeTarget, ovrAposEvolucao, historicoMundo.campeaoA1, historicoMundo.campeaoCopa);
        const resLibertadores = simularLibertadores(clubeTarget, ovrAposEvolucao, forcarLiberta, historicoMundo.top3Brasileirao, historicoMundo.campeaoLiberta);

        // DINÂMICA DE ACESSO E REBAIXAMENTO
        if (resBrasileirao.promovidosA2 && resBrasileirao.rebaixadosA1) {
            const promovidosNomes = resBrasileirao.promovidosA2;
            const rebaixadosNomes = resBrasileirao.rebaixadosA1;

            let novaListaA1 = [...timesA1Atual];
            let novaListaA2 = [...timesA2Atual];

            if (clubeTarget.div.includes("A2") && resBrasileirao.chegouNaSemiOuSuperior) {
                clubeTarget.div = "Série A1";
            } else if (clubeTarget.div.includes("A1") && resBrasileirao.userTabelaPos >= 15) {
                clubeTarget.div = "Série A2";
            }

            promovidosNomes.forEach(nomeP => {
                const idxA2 = novaListaA2.findIndex(t => t.nome === nomeP);
                if (idxA2 !== -1) {
                    const timePromovido = { ...novaListaA2[idxA2], div: "Série A1" };
                    novaListaA2.splice(idxA2, 1);
                    novaListaA1.push(timePromovido);
                }
            });

            rebaixadosNomes.forEach(nomeR => {
                const idxA1 = novaListaA1.findIndex(t => t.nome === nomeR);
                if (idxA1 !== -1) {
                    const timeRebaixado = { ...novaListaA1[idxA1], div: "Série A2" };
                    novaListaA1.splice(idxA1, 1);
                    novaListaA2.push(timeRebaixado);
                }
            });

            setTimesA1Atual(novaListaA1);
            setTimesA2Atual(novaListaA2);
        }

        const torneiosSimulados = [resBrasileirao, resCopaBrasil, resSupercopa, resLibertadores];

        atualizarHistoricoMundo(resBrasileirao, resCopaBrasil, resLibertadores);

        torneiosSimulados.forEach((t) => {
            if (t.foiCampea) {
                setTitulos((prev) => [...prev, `${t.nome} - ${clubeTarget.nome} (${idade} anos)`]);
            }
        });

        // STATS INDIVIDUAIS POR POSIÇÃO
        const pos = jogadora.posicaoSelecionada.toUpperCase();
        let minGol = 0.30, maxGol = 0.90;
        let minAst = 0.08, maxAst = 0.35;

        switch (pos) {
            case "GOL": minGol = 0; maxGol = 0; minAst = 0; maxAst = 0.02; break;
            case "ZAG": minGol = 0.02; maxGol = 0.10; minAst = 0.01; maxAst = 0.08; break;
            case "LE":
            case "LD": minGol = 0.03; maxGol = 0.15; minAst = 0.12; maxAst = 0.38; break;
            case "VOL": minGol = 0.05; maxGol = 0.20; minAst = 0.08; maxAst = 0.28; break;
            case "MC":
            case "ME":
            case "MD": minGol = 0.10; maxGol = 0.32; minAst = 0.18; maxAst = 0.52; break;
            case "MEI": minGol = 0.15; maxGol = 0.45; minAst = 0.22; maxAst = 0.62; break;
            case "PE":
            case "PD": minGol = 0.20; maxGol = 0.72; minAst = 0.15; maxAst = 0.45; break;
            case "CA":
            default: minGol = 0.30; maxGol = 0.90; minAst = 0.08; maxAst = 0.35; break;
        }

        const fatorOvr = Math.max(0.2, Math.min(1.2, (ovrAposEvolucao - 40) / 45));
        const jogosEpoca = Math.floor((Math.floor(Math.random() * 13) + 24) * multEventos);
        const fatorForma = 0.85 + Math.random() * 0.30;

        const mediaGolPorJogo = (minGol + (maxGol - minGol) * fatorOvr) * fatorForma;
        const mediaAstPorJogo = (minAst + (maxAst - minAst) * fatorOvr) * fatorForma;

        const golosEpoca = Math.max(0, Math.round(jogosEpoca * mediaGolPorJogo));
        const astEpoca = Math.max(0, Math.round(jogosEpoca * mediaAstPorJogo));

        setTotalJogos((prev) => prev + jogosEpoca);
        setTotalGolos((prev) => prev + golosEpoca);
        setTotalAst((prev) => prev + astEpoca);

        const novoHistorico = {
            idade: idade,
            clubeNome: clubeTarget.nome,
            clubeCor: clubeTarget.cor,
            clubeLogo: clubeTarget.logo,
            clubeText: clubeTarget.text,
            ovr: ovrAposEvolucao,
            jogos: jogosEpoca,
            golos: golosEpoca,
            ast: astEpoca,
            campea: torneiosSimulados.some(t => t.foiCampea),
            torneio: resBrasileirao.nome,
            posicaoTorneio: resBrasileirao.posicao,
            torneiosSimulados: torneiosSimulados
        };

        setHistorico((prev) => [...prev, novoHistorico]);
        setTorneiosTemporada(torneiosSimulados);
        setAbaTorneioAtiva(0);
        setSubAbaBrasileirao("tabela");

        const novaIdade = idade + 1;
        setIdade(novaIdade);
        setOvr(ovrAposEvolucao);
        setMultEventos(1.0);

        if (novaIdade >= IDADE_MAXIMA) {
            setMostrarPopUpAposentadoria(true);
        } else {
            gerarPropostas(ovrAposEvolucao, clubeTarget);

            const titulosGanhosAgora = torneiosSimulados.filter(t => t.foiCampea).map(t => t.nome);

            if (titulosGanhosAgora.length > 0) {
                setTitulosRecentes(titulosGanhosAgora);
                setMostrarPopUpTitulo(true);

                setTimeout(() => {
                    setMostrarPopUpTitulo(false);
                    setFaseAtual("RESUMO_TEMPORADA");
                }, 3500);
            } else {
                setFaseAtual("RESUMO_TEMPORADA");
            }
        }
    };

    let multIdadeVal = 1.0;
    if (idade <= 21) multIdadeVal = 1.2;
    else if (idade > 29) multIdadeVal = Math.max(0.15, 1.0 - (idade - 29) * 0.12);

    const baseK = Math.pow(ovr / 50.0, 8.5) * 25.0;
    const valorEmK = Math.round(baseK * multIdadeVal);
    const valorFormatado = valorEmK >= 1000
        ? `€${(valorEmK / 1000).toFixed(2)}M`
        : `€${valorEmK}K`;

    const getResumoPorClube = () => {
        const resumo = {};
        historico.forEach(ano => {
            if (!resumo[ano.clubeNome]) {
                resumo[ano.clubeNome] = { nome: ano.clubeNome, cor: ano.clubeCor, text: ano.clubeText, logo: ano.clubeLogo, jogos: 0, golos: 0, ast: 0, titulos: 0 };
            }
            resumo[ano.clubeNome].jogos += ano.jogos;
            resumo[ano.clubeNome].golos += ano.golos;
            resumo[ano.clubeNome].ast += ano.ast;
            if (ano.campea) resumo[ano.clubeNome].titulos += 1;
        });
        return Object.values(resumo);
    };

    const getLigaDoTime = (nomeTime) => {
        const timeEncontrado = getTodosOsTimes().find(t => t.nome === nomeTime);
        return timeEncontrado ? timeEncontrado.liga : "";
    };

    const animacoesCss = `
    @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
    @keyframes popTitle { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
    
    .fade-in { animation: fadeIn 0.4s ease-out forwards; }
    .anime-up { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .title-pop { animation: popTitle 0.3s ease-out forwards; }
    
    .scrollable-area { overflow-y: auto; overflow-x: hidden; }
    .scrollable-area::-webkit-scrollbar { width: 6px; }
    .scrollable-area::-webkit-scrollbar-track { background: transparent; }
    .scrollable-area::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
    .scrollable-area::-webkit-scrollbar-thumb:hover { background: #FF005B; }

    /* ================= MACETES RECONVERSORES PARA MOBILE ================= */
    @media (max-width: 768px) {
        .app-page {
            padding: 10px !important;
            height: auto !important;
            min-height: 100vh !important;
            overflow: visible !important;
        }
        .wrapper-global {
            height: auto !important;
            min-height: 100vh !important;
            display: block !important;
        }
        .app-header-ti {
            justify-content: center !important;
            margin-bottom: 15px !important;
        }
        .card-copero-main {
            flex-direction: column !important;
            gap: 15px !important;
            padding: 10px !important;
            height: auto !important;
            box-shadow: none !important;
            border-width: 2px !important;
        }
        .coluna-esquerda, .coluna-direita {
            width: 100% !important;
            flex: none !important;
            overflow: visible !important;
        }
        
        /* Ajustes do Perfil da Jogadora */
        .info-basica {
            padding: 0 10px !important;
        }
        .info-basica strong {
            font-size: 14px !important;
        }
        .ovr-value {
            font-size: 20px !important;
        }
        .idade-valor strong {
            font-size: 14px !important;
        }
        .clube-info {
            font-size: 12px !important;
        }

        /* Ajustes de Grids */
        .grid-clubes {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
        }
        .grid-eventos {
            flex-direction: column !important;
        }
        
        /* Tabela Histórico */
        .tabela-historico-wrapper {
            overflow-x: auto !important;
            max-height: 400px !important;
        }
        .tabela-historico th, .tabela-historico td {
            padding: 6px !important;
            font-size: 10px !important;
            white-space: nowrap !important;
        }

        /* Modais */
        .modal-content {
            width: 95% !important;
            padding: 12px !important;
            max-height: 90vh !important;
        }
        .banner-campeao, .banner-resultado {
            padding: 15px 20px !important;
        }
        .banner-campeao h1, .banner-resultado h1 {
            font-size: 22px !important;
        }

        /* Aposentadoria e Fim de Carreira */
        .aposentadoria-box {
            padding: 15px !important;
        }
        .aposentadoria-top {
            flex-direction: column !important;
            text-align: center !important;
            gap: 15px !important;
        }
        .aposentadoria-top > div {
            text-align: center !important;
            align-items: center !important;
            justify-content: center !important;
        }
        .grid-clubes-final {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
        }
    }
  `;

    const torneioAtualAba = torneiosTemporada[abaTorneioAtiva] || {};
    const torneioInspecionadoAba = temporadaInspecionada?.torneiosSimulados?.[abaInspecionadaAtiva] || {};

    return (
        <div className="app-page" style={styles.page}>
            <style>{animacoesCss}</style>

            {/* OVERLAYS E POPUPS */}
            {resultadoAcao && (
                <div style={styles.overlay}>
                    <div className="title-pop banner-resultado modal-content" style={{ ...styles.bannerResultado, borderColor: resultadoAcao.cor, boxShadow: `6px 6px 0px ${resultadoAcao.cor}` }}>
                        <span style={{ fontSize: "48px", color: resultadoAcao.cor }}>{resultadoAcao.icone}</span>
                        <h1 style={{ color: "#FFF", margin: "5px 0", fontSize: "28px" }}>{resultadoAcao.titulo}</h1>
                        <p style={{ color: "#CCC", fontSize: "15px", margin: 0 }}>{resultadoAcao.desc}</p>
                    </div>
                </div>
            )}

            {/* MODAL DE INSPEÇÃO DE TEMPORADA PASSADA */}
            {temporadaInspecionada && (
                <div style={styles.overlay}>
                    <div className="anime-up modal-content" style={{ background: "#FFF", border: "4px solid #111", borderRadius: "12px", width: "90%", maxWidth: "800px", padding: "20px", boxShadow: "8px 8px 0px #00E5FF", maxHeight: "90vh", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "3px solid #111", paddingBottom: "10px", marginBottom: "15px", flexWrap: "wrap", gap: "10px" }}>
                            <div>
                                <span style={{ fontSize: "12px", fontWeight: "900", color: "#FF005B" }}>
                                    TEMPORADA DOS {temporadaInspecionada.idade} ANOS
                                </span>
                                <h2 style={{ margin: "2px 0 0 0", fontFamily: "Impact, sans-serif", fontSize: "24px", color: "#111" }}>
                                    {temporadaInspecionada.clubeNome} {temporadaInspecionada.campea && "🏆"}
                                </h2>
                            </div>
                            <button
                                onClick={() => setTemporadaInspecionada(null)}
                                style={{ background: "#111", color: "#FFF", border: "2px solid #111", padding: "6px 14px", fontWeight: "900", cursor: "pointer", fontFamily: "Impact, sans-serif" }}
                            >
                                FECHAR ✖
                            </button>
                        </div>

                        {/* ABAS DO HISTÓRICO PASSADO */}
                        <div style={{ display: "flex", background: "#111", padding: "4px", gap: "4px", border: "2px solid #111", borderRadius: "6px", marginBottom: "12px", overflowX: "auto" }} className="scrollable-area">
                            {temporadaInspecionada.torneiosSimulados?.map((torneio, index) => {
                                const ativo = index === abaInspecionadaAtiva;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setAbaInspecionadaAtiva(index);
                                            setSubAbaInspecionada("tabela");
                                        }}
                                        style={{
                                            flex: 1,
                                            minWidth: "120px",
                                            padding: "6px 4px",
                                            background: ativo ? "#FF005B" : "transparent",
                                            color: ativo ? "#FFF" : "#AAA",
                                            border: "none",
                                            fontWeight: "900",
                                            fontSize: "10px",
                                            fontFamily: "Impact, sans-serif",
                                            cursor: "pointer",
                                            letterSpacing: "0.5px"
                                        }}
                                    >
                                        {torneio.nome.toUpperCase()}
                                    </button>
                                );
                            })}
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                            <h4 style={{ margin: 0, fontFamily: "Impact, sans-serif", fontSize: "16px" }}>{torneioInspecionadoAba.nome}</h4>
                            <span style={{ background: torneioInspecionadoAba.foiCampea ? "#FFD700" : "#111", color: torneioInspecionadoAba.foiCampea ? "#111" : "#00E5FF", padding: "3px 8px", fontWeight: "900", border: "2px solid #111", fontSize: "11px" }}>
                                {torneioInspecionadoAba.posicao}
                            </span>
                        </div>

                        {/* CONTEÚDO DA COMPETIÇÃO INSPECIONADA */}
                        <div className="scrollable-area" style={{ flex: 1, overflowY: "auto" }}>
                            {torneioInspecionadoAba.tipo === "pontos_corridos" ? (
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
                                        <button
                                            onClick={() => setSubAbaInspecionada("tabela")}
                                            style={{
                                                padding: "6px 12px",
                                                background: subAbaInspecionada === "tabela" ? "#111" : "#FFF",
                                                color: subAbaInspecionada === "tabela" ? "#00E5FF" : "#111",
                                                border: "2px solid #111",
                                                fontWeight: "900",
                                                fontSize: "11px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            📊 Tabela (Fase Única)
                                        </button>
                                        <button
                                            onClick={() => setSubAbaInspecionada("playoffs")}
                                            style={{
                                                padding: "6px 12px",
                                                background: subAbaInspecionada === "playoffs" ? "#111" : "#FFF",
                                                color: subAbaInspecionada === "playoffs" ? "#00E5FF" : "#111",
                                                border: "2px solid #111",
                                                fontWeight: "900",
                                                fontSize: "11px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            ⚔️ Playoffs (Top 8 Mata-Mata)
                                        </button>
                                    </div>

                                    {subAbaInspecionada === "tabela" ? (
                                        <div style={{ border: "2px solid #111", background: "#FFF", borderRadius: "6px", overflowY: "auto", maxHeight: "250px" }} className="scrollable-area">
                                            <table className="tabela-historico" style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                                                <thead>
                                                    <tr style={{ background: "#222", color: "#FFF", fontSize: "12px", position: "sticky", top: 0, zIndex: 5 }}>
                                                        <th style={{ padding: "6px 4px", textAlign: "center" }}>#</th>
                                                        <th style={{ padding: "6px 10px", textAlign: "left" }}>CLUBE</th>
                                                        <th style={{ padding: "6px 4px", textAlign: "center" }}>J</th>
                                                        <th style={{ padding: "6px 4px", textAlign: "center" }}>V</th>
                                                        <th style={{ padding: "6px 4px", textAlign: "center" }}>E</th>
                                                        <th style={{ padding: "6px 4px", textAlign: "center" }}>D</th>
                                                        <th style={{ padding: "6px 4px", textAlign: "center" }}>GP</th>
                                                        <th style={{ padding: "6px 4px", textAlign: "center" }}>GS</th>
                                                        <th style={{ padding: "6px 4px", textAlign: "center" }}>SG</th>
                                                        <th style={{ padding: "6px 4px", textAlign: "center" }}>PTS</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {torneioInspecionadoAba.tabela?.map((t) => {
                                                        const regrasTorneio = torneioInspecionadoAba.isA2 ? dbCampeonatos.brasileirao_a2 : dbCampeonatos.brasileirao_a1;
                                                        const isClassificado = t.pos <= regrasTorneio.playoffs.classificam;
                                                        const zonaRebaixamentoA1 = dbCampeonatos.brasileirao_a1.qtdTimes - dbCampeonatos.brasileirao_a1.rebaixamento;
                                                        const isRebaixado = !torneioInspecionadoAba.isA2 && t.pos > zonaRebaixamentoA1;

                                                        let bgRow = t.isUser ? "#FF005B" : (t.pos % 2 === 0 ? "#F9F9F9" : "#FFF");
                                                        let colorRow = t.isUser ? "#FFF" : "#111";

                                                        return (
                                                            <tr key={t.nome} style={{ background: bgRow, color: colorRow, borderBottom: "1px solid #EEE", fontWeight: t.isUser ? "900" : "bold" }}>
                                                                <td style={{ padding: "6px 4px", textAlign: "center", borderLeft: isClassificado ? "4px solid #1C8144" : isRebaixado ? "4px solid #E74C3C" : "none" }}>{t.pos}º</td>
                                                                <td style={{ padding: "6px 10px", textAlign: "left" }}>{t.nome} {t.isUser && "⭐"}</td>
                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.j}</td>
                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.v}</td>
                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.e}</td>
                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.d}</td>
                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.gp}</td>
                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.gs}</td>
                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.sg > 0 ? `+${t.sg}` : t.sg}</td>
                                                                <td style={{ padding: "6px 4px", textAlign: "center", color: t.isUser ? "#FFF" : "#FF005B", fontWeight: "900" }}>{t.pts}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div style={{ border: "2px solid #111", background: "#FFF", padding: "8px", borderRadius: "6px" }}>
                                            {torneioInspecionadoAba.fasesPlayoffs?.map((fase, fIdx) => (
                                                <div key={fIdx} style={{ marginBottom: "8px" }}>
                                                    <div style={{ background: "#111", color: "#00E5FF", padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>
                                                        {fase.faseNome}
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                        {fase.jogos?.map((j, jIdx) => {
                                                            const isUserMatch = j.timeA.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim();
                                                            return (
                                                                <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? "#FFE6EE" : "#F9F9F9", border: isUserMatch ? "2px solid #FF005B" : "1px solid #DDD", padding: "4px 8px", fontSize: "11px", fontWeight: "bold" }}>
                                                                    <span style={{ flex: 1, textAlign: "right", color: j.vencedor === j.timeA ? "#FF005B" : "#333" }}>{j.timeA}</span>
                                                                    <span style={{ background: "#111", color: "#FFF", padding: "2px 6px", borderRadius: "3px", margin: "0 8px", fontSize: "10px", fontWeight: "900" }}>
                                                                        {j.placarTexto}
                                                                    </span>
                                                                    <span style={{ flex: 1, textAlign: "left", color: j.vencedor === j.timeB ? "#FF005B" : "#333" }}>{j.timeB}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : torneioInspecionadoAba.tipo === "grupos" ? (
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    {torneioInspecionadoAba.participou === false && (
                                        <div style={{ padding: "8px", textAlign: "center", fontWeight: "bold", background: "#FFE6E6", color: "#D50000", border: "2px solid #D50000", borderRadius: "6px", fontSize: "12px" }}>
                                            Seu time não se classificou para a Libertadores nesta temporada.
                                        </div>
                                    )}
                                    <div className="scrollable-area" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", maxHeight: "180px", overflowY: "auto", paddingRight: "4px" }}>
                                        {torneioInspecionadoAba.grupos.map(g => (
                                            <div key={g.letra} style={{ border: "2px solid #111", background: "#FFF", borderRadius: "6px" }}>
                                                <div style={{ background: "#111", color: "#D4AF37", padding: "4px", fontSize: "11px", textAlign: "center", fontWeight: "bold" }}>GRUPO {g.letra}</div>
                                                <table className="tabela-historico" style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px" }}>
                                                    <thead>
                                                        <tr style={{ background: "#EEE" }}>
                                                            <th>#</th><th style={{ textAlign: "left" }}>Time</th><th>P</th><th>J</th><th>V</th><th>SG</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {g.tabela.map(t => (
                                                            <tr key={t.nome} style={{ background: t.isUser ? "#D4AF37" : "#FFF", color: "#111", borderTop: "1px solid #EEE" }}>
                                                                <td style={{ textAlign: "center", borderLeft: t.pos <= 2 ? "3px solid #1C8144" : "none" }}>{t.pos}º</td>
                                                                <td style={{ fontWeight: "bold" }}>
                                                                    {t.nome.substring(0, 3).toUpperCase()} <span style={{ fontSize: "8px", color: t.isUser ? "#111" : "#888", marginLeft: "3px" }}>{getLigaDoTime(t.nome)}</span>
                                                                </td>
                                                                <td style={{ textAlign: "center", fontWeight: "bold" }}>{t.pts}</td>
                                                                <td style={{ textAlign: "center" }}>{t.j}</td>
                                                                <td style={{ textAlign: "center" }}>{t.v}</td>
                                                                <td style={{ textAlign: "center" }}>{t.sg}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="scrollable-area" style={{ maxHeight: "180px", border: "3px solid #111", background: "#FFF", padding: "8px", borderRadius: "6px" }}>
                                        {torneioInspecionadoAba.fases?.map((fase, fIdx) => (
                                            <div key={fIdx} style={{ marginBottom: "8px" }}>
                                                <div style={{ background: "#111", color: "#D4AF37", padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>
                                                    {fase.faseNome}
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                    {fase.jogos?.map((j, jIdx) => {
                                                        const isUserMatch = j.timeA.toLowerCase().trim() === clubeAtual?.nome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === clubeAtual?.nome.toLowerCase().trim();
                                                        return (
                                                            <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? "#FFF8DC" : "#F9F9F9", border: isUserMatch ? "2px solid #D4AF37" : "1px solid #DDD", padding: "4px 8px", fontSize: "11px", fontWeight: "bold" }}>
                                                                <span style={{ flex: 1, textAlign: "right", color: j.vencedor === j.timeA ? "#B8860B" : "#333" }}>
                                                                    <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal", marginRight: "4px" }}>{getLigaDoTime(j.timeA)}</span> {j.timeA}
                                                                </span>
                                                                <span style={{ background: "#111", color: "#D4AF37", padding: "2px 6px", borderRadius: "3px", margin: "0 8px", fontSize: "10px", fontWeight: "900" }}>
                                                                    {j.placarTexto}
                                                                </span>
                                                                <span style={{ flex: 1, textAlign: "left", color: j.vencedor === j.timeB ? "#B8860B" : "#333" }}>
                                                                    {j.timeB} <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal", marginLeft: "4px" }}>{getLigaDoTime(j.timeB)}</span>
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div style={{ border: "2px solid #111", background: "#FFF", padding: "8px", borderRadius: "6px" }}>
                                    {torneioInspecionadoAba.fases?.map((fase, fIdx) => (
                                        <div key={fIdx} style={{ marginBottom: "8px" }}>
                                            <div style={{ background: "#111", color: "#00E5FF", padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>
                                                {fase.faseNome}
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                {fase.jogos?.map((j, jIdx) => {
                                                    const isUserMatch = j.timeA.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim();
                                                    return (
                                                        <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? "#FFE6EE" : "#F9F9F9", border: isUserMatch ? "2px solid #FF005B" : "1px solid #DDD", padding: "4px 8px", fontSize: "11px", fontWeight: "bold" }}>
                                                            <span style={{ flex: 1, textAlign: "right", color: j.vencedor === j.timeA ? "#FF005B" : "#333" }}>{j.timeA}</span>
                                                            <span style={{ background: "#111", color: "#FFF", padding: "2px 6px", borderRadius: "3px", margin: "0 8px", fontSize: "10px", fontWeight: "900" }}>
                                                                {j.placarTexto}
                                                            </span>
                                                            <span style={{ flex: 1, textAlign: "left", color: j.vencedor === j.timeB ? "#FF005B" : "#333" }}>{j.timeB}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {mostrarPopUpTitulo && titulosRecentes.length > 0 && (
                <div style={styles.overlay}>
                    <div className="title-pop banner-campeao modal-content" style={styles.bannerCampeao}>
                        <span style={{ fontSize: "55px", display: "block", marginBottom: "10px" }}>🏆</span>
                        <br />
                        <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontFamily: "Impact, sans-serif", letterSpacing: "1px" }}>É CAMPEÃ!</h1>
                        <p style={{ margin: "0 0 15px 0", fontSize: "14px", fontWeight: "bold", color: "#333" }}>
                            O {clubeAtual ? clubeAtual.nome : "seu time"} levantou a taça nesta temporada!
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
                            {titulosRecentes.map((t, idx) => (
                                <div key={idx} style={{ background: "#111", color: "#FFD700", padding: "8px 16px", borderRadius: "6px", fontSize: "16px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "1px", boxShadow: "3px 3px 0px #FF005B" }}>
                                    {t.toUpperCase()}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {mostrarPopUpAposentadoria && (
                <div style={styles.overlay}>
                    <div className="title-pop banner-resultado modal-content" style={{ ...styles.bannerResultado, borderColor: "#00E5FF", boxShadow: "6px 6px 0px #00E5FF" }}>
                        <span style={{ fontSize: "48px" }}>👟</span>
                        <h1 style={{ color: "#FFF", margin: "5px 0", fontSize: "28px", textTransform: "uppercase" }}>CARREIRA ENCERRADA</h1>
                        <p style={{ color: "#CCC", fontSize: "15px", marginBottom: "15px" }}>Você pendurou as chuteiras aos 40 anos de idade. Que jornada incrível!</p>
                        <button
                            style={{ background: "#00E5FF", color: "#111", padding: "10px 20px", border: "2px solid #111", cursor: "pointer", fontWeight: "bold" }}
                            onClick={() => {
                                setMostrarPopUpAposentadoria(false);
                                setFaseAtual("APOSENTADORIA");
                            }}
                        >
                            VER RESUMO DA CARREIRA ➔
                        </button>
                    </div>
                </div>
            )}

            {faseAtual === "APOSENTADORIA" ? (
                <div className="anime-up scrollable-area aposentadoria-box" style={styles.aposentadoriaBox}>
                    <div className="aposentadoria-header" style={styles.aposentadoriaHeader}>
                        <div className="aposentadoria-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "15px" }}>
                            <div style={{ textAlign: "left" }}>
                                <h4 style={{ margin: "0 0 3px 0", color: "#00E5FF", letterSpacing: "1px", fontSize: "12px" }}>CARREIRA FINALIZADA</h4>
                                <h1 style={{ fontSize: "36px", fontFamily: "Impact", margin: 0, textTransform: "uppercase", lineHeight: "1", color: "#FFF", marginBottom: "5px" }}>{jogadora.nome}</h1>
                                <span style={styles.posBadge}>{jogadora.posicaoSelecionada}</span>
                            </div>
                            <div style={{ textAlign: "right", display: "flex", gap: "15px", alignItems: "center" }}>
                                <div style={{ textAlign: "right" }}>
                                    <span style={{ color: "#777", fontSize: "11px", fontWeight: "bold" }}>VALOR FINAL</span>
                                    <div style={{ color: "#FFF", fontSize: "18px", fontWeight: "900" }}>{valorFormatado}</div>
                                </div>
                                <div style={styles.ovrBadgeFinal}>
                                    <span style={styles.ovrLabel}>OVR</span>
                                    <span style={styles.ovrValue}>{ovr}</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ width: "100%", height: "1px", borderTop: "1px dashed #444", marginBottom: "20px" }}></div>

                        <div style={{ display: "flex", gap: "25px", justifyContent: "center" }}>
                            <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: "12px", color: "#999", fontWeight: "bold", display: "block", marginBottom: "3px" }}>JOGOS</span>
                                <strong style={{ fontSize: "24px", color: "#FFF" }}>{totalJogos}</strong>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: "12px", color: "#999", fontWeight: "bold", display: "block", marginBottom: "3px" }}>GOLS</span>
                                <strong style={{ fontSize: "24px", color: "#FFF" }}>{totalGolos}</strong>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: "12px", color: "#999", fontWeight: "bold", display: "block", marginBottom: "3px" }}>AST</span>
                                <strong style={{ fontSize: "24px", color: "#FFF" }}>{totalAst}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="grid-clubes-final" style={styles.gridClubesFinal}>
                        {getResumoPorClube().map((clube, i) => (
                            <div key={i} style={{ ...styles.cardClubeFinal, background: clube.cor, color: clube.text }}>
                                <div style={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                                    {clube.logo ? (
                                        <img src={clube.logo} alt={clube.nome} style={{ maxHeight: "50px", objectFit: "contain", filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.3))" }} />
                                    ) : (
                                        <div style={{ ...styles.escudoClube }}>
                                            {clube.nome.substring(0, 3).toUpperCase()}
                                        </div>
                                    )}
                                </div>

                                <h4 style={{ margin: "0 0 10px 0", fontSize: "15px", textShadow: "1px 1px 0px rgba(0,0,0,0.5)" }}>{clube.nome}</h4>

                                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "6px 0", borderTop: "1px dashed rgba(255,255,255,0.3)", fontSize: "10px", fontWeight: "bold" }}>
                                    <span style={{ display: "flex", flexDirection: "column", opacity: 0.8 }}>JOGOS <span style={{ fontSize: "14px", opacity: 1 }}>{clube.jogos}</span></span>
                                    <span style={{ display: "flex", flexDirection: "column", opacity: 0.8 }}>GOLS <span style={{ fontSize: "14px", opacity: 1 }}>{clube.golos}</span></span>
                                    <span style={{ display: "flex", flexDirection: "column", opacity: 0.8 }}>AST <span style={{ fontSize: "14px", opacity: 1 }}>{clube.ast}</span></span>
                                </div>

                                {clube.titulos > 0 && (
                                    <div style={{ marginTop: "4px", color: "#FFD700", fontWeight: "bold", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", textShadow: "1px 1px 0px #000" }}>
                                        🏆 {clube.titulos}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button style={{ ...styles.btnVoltarMenu, background: "#00E5FF", color: "#111", textDecoration: "none", padding: "12px 30px", borderRadius: "0px", marginTop: "25px", alignSelf: "center", border: "3px solid #111", boxShadow: "3px 3px 0px #FF005B" }} onClick={aoVoltar}>
                        <strong>VOLTAR AO MENU PRINCIPAL ↺</strong>
                    </button>
                </div>
            ) : (
                <div className="wrapper-global" style={styles.wrapperGlobal}>

                    {/* CABEÇALHO DO SITE */}
                    <header className="anime-up app-header-ti" style={styles.headerTI}>
                        <div style={styles.logoMiniTI}>
                            <span style={{ color: "#FF005B" }}>COPEIRA</span> A COPA É DELAS
                        </div>
                    </header>

                    {/* CONTAINER PRINCIPAL */}
                    <div className="card-copero-main" style={styles.cardCoperoMain}>

                        {/* COLUNA ESQUERDA */}
                        <div className="anime-up scrollable-area coluna-esquerda" style={styles.colunaEsquerdaCopero}>

                            {/* PERFIL */}
                            <div style={styles.cardHeaderCopero}>
                                <div style={styles.cardHeaderTop}>
                                    <div style={styles.ovrBadge}>
                                        <span style={styles.ovrLabel}>OVR</span>
                                        <span key={ovr} className="ovr-value" style={styles.ovrValue}>{ovr}</span>
                                    </div>
                                    <div className="info-basica" style={styles.infoBasica}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                                            {bandeirasPaises[jogadora.paisSelecionado] && (
                                                <img src={`https://flagcdn.com/w20/${bandeirasPaises[jogadora.paisSelecionado]}.png`} alt="Bandeira" style={{ border: "1px solid #111" }} />
                                            )}
                                            <span style={{ ...styles.posBadge, background: '#111', color: '#FFF' }}>{jogadora.posicaoSelecionada}</span>
                                            <strong style={{ fontSize: "20px", textTransform: "uppercase" }}>#{jogadora.numero} {jogadora.nome}</strong>
                                        </div>

                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                                            {clubeAtual && clubeAtual.logo && (
                                                <img src={clubeAtual.logo} alt={clubeAtual.nome} style={{ height: "26px", mixBlendMode: "multiply" }} />
                                            )}
                                            <span className="clube-info" style={styles.clubeInfo}>{clubeAtual ? clubeAtual.nome : "❓ Sem clube"}</span>
                                        </div>
                                    </div>
                                    <div className="idade-valor" style={styles.idadeValor}>
                                        <div style={styles.labelPequena}>IDADE <strong style={{ fontSize: "24px", color: "#111" }}>{idade}</strong></div>
                                        <div style={styles.labelPequena}>VALOR <strong style={{ fontSize: "18px", color: "#1C8144" }}>{valorFormatado}</strong></div>
                                    </div>
                                </div>

                                <div style={styles.vitrineContainer}>
                                    {titulos.length > 0 ? (
                                        <div style={{ color: "#FFD700", fontWeight: "bold", fontSize: "13px" }}>
                                            🏆 {titulos.length} Título{titulos.length > 1 ? 's' : ''} Conquistado{titulos.length > 1 ? 's' : ''}
                                        </div>
                                    ) : (
                                        <span style={{ color: "#999", fontStyle: "italic", fontSize: "13px" }}>VITRINE VAZIA</span>
                                    )}
                                </div>
                            </div>

                            {/* STATS ROSA INTEGRADAS */}
                            <div style={styles.statsRowEsquerda}>
                                <div style={styles.statItemEsquerda}>
                                    <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "1px", color: "#FFF" }}>JOGOS</span>
                                    <strong key={`j-${totalJogos}`} style={{ fontSize: "32px", fontFamily: "Impact" }}>{totalJogos}</strong>
                                </div>
                                <div style={styles.statItemEsquerda}>
                                    <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "1px", color: "#FFF" }}>GOLS</span>
                                    <strong key={`g-${totalGolos}`} style={{ fontSize: "32px", fontFamily: "Impact" }}>{totalGolos}</strong>
                                </div>
                                <div style={styles.statItemEsquerda}>
                                    <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "1px", color: "#FFF" }}>AST</span>
                                    <strong key={`a-${totalAst}`} style={{ fontSize: "32px", fontFamily: "Impact" }}>{totalAst}</strong>
                                </div>
                            </div>

                            {/* ZONA DE AÇÃO */}
                            <div key={faseAtual + "-" + idade} className="fade-in scrollable-area" style={faseAtual === "EVENTO" || faseAtual === "FINAL_TACA" ? styles.areaAcaoEvento : styles.areaAcao}>

                                {/* TELA: RESUMO DAS COMPETIÇÕES DA TEMPORADA */}
                                {faseAtual === "RESUMO_TEMPORADA" && (
                                    <div style={{ display: "flex", flexDirection: "column" }}>

                                        {/* ABAS ESTILO FIFA */}
                                        <div style={{ display: "flex", background: "#111", padding: "4px", gap: "4px", border: "3px solid #111", borderRadius: "6px", marginBottom: "12px", overflowX: "auto" }} className="scrollable-area">
                                            {torneiosTemporada.map((torneio, index) => {
                                                const ativo = index === abaTorneioAtiva;
                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => setAbaTorneioAtiva(index)}
                                                        style={{
                                                            flex: 1,
                                                            minWidth: "120px",
                                                            padding: "8px 4px",
                                                            background: ativo ? "#FF005B" : "transparent",
                                                            color: ativo ? "#FFF" : "#AAA",
                                                            border: "none",
                                                            fontWeight: "900",
                                                            fontSize: "10px",
                                                            fontFamily: "Impact, sans-serif",
                                                            cursor: "pointer",
                                                            letterSpacing: "0.5px",
                                                            transition: "all 0.2s"
                                                        }}
                                                    >
                                                        {torneio.nome.toUpperCase()}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                            <h3 style={{ ...styles.tituloAcao, fontSize: "18px", margin: 0 }}>{torneioAtualAba.nome}</h3>
                                            <span style={{ background: torneioAtualAba.foiCampea ? "#FFD700" : "#111", color: torneioAtualAba.foiCampea ? "#111" : "#00E5FF", padding: "4px 10px", fontWeight: "900", border: "2px solid #111", fontSize: "12px" }}>
                                                {torneioAtualAba.posicao}
                                            </span>
                                        </div>

                                        {/* EXIBIÇÃO: LIGA (PONTOS CORRIDOS + PLAYOFFS TOP 8) */}
                                        {torneioAtualAba.tipo === "pontos_corridos" ? (
                                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>

                                                {/* SUB-ABAS DE NAVEGAÇÃO DA LIGA */}
                                                <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
                                                    <button
                                                        onClick={() => setSubAbaBrasileirao("tabela")}
                                                        style={{
                                                            padding: "6px 12px",
                                                            background: subAbaBrasileirao === "tabela" ? "#111" : "#FFF",
                                                            color: subAbaBrasileirao === "tabela" ? "#00E5FF" : "#111",
                                                            border: "2px solid #111",
                                                            fontWeight: "900",
                                                            fontSize: "11px",
                                                            cursor: "pointer"
                                                        }}
                                                    >
                                                        📊 Tabela (Fase Única)
                                                    </button>
                                                    <button
                                                        onClick={() => setSubAbaBrasileirao("playoffs")}
                                                        style={{
                                                            padding: "6px 12px",
                                                            background: subAbaBrasileirao === "playoffs" ? "#111" : "#FFF",
                                                            color: subAbaBrasileirao === "playoffs" ? "#00E5FF" : "#111",
                                                            border: "2px solid #111",
                                                            fontWeight: "900",
                                                            fontSize: "11px",
                                                            cursor: "pointer"
                                                        }}
                                                    >
                                                        ⚔️ Playoffs (Top 8 Mata-Mata)
                                                    </button>
                                                </div>

                                                {subAbaBrasileirao === "tabela" ? (
                                                    /* TABELA DA FASE ÚNICA COM SCROLL E TEXTO AUMENTADO */
                                                    <div style={{ border: "3px solid #111", background: "#FFF", borderRadius: "6px", overflowY: "auto", maxHeight: "250px" }} className="scrollable-area tabela-historico-wrapper">
                                                        <table className="tabela-historico" style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                                                            <thead>
                                                                <tr style={{ background: "#222", color: "#FFF", fontSize: "12px", position: "sticky", top: 0, zIndex: 5 }}>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>#</th>
                                                                    <th style={{ padding: "6px 10px", textAlign: "left" }}>CLUBE</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>J</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>V</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>E</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>D</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>GP</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>GS</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>SG</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>PTS</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {torneioAtualAba.tabela?.map((t) => {
                                                                    const regrasTorneio = torneioAtualAba.isA2 ? dbCampeonatos.brasileirao_a2 : dbCampeonatos.brasileirao_a1;
                                                                    const isClassificado = t.pos <= regrasTorneio.playoffs.classificam;
                                                                    const zonaRebaixamentoA1 = dbCampeonatos.brasileirao_a1.qtdTimes - dbCampeonatos.brasileirao_a1.rebaixamento;
                                                                    const isRebaixado = !torneioAtualAba.isA2 && t.pos > zonaRebaixamentoA1;

                                                                    let bgRow = t.isUser ? "#FF005B" : (t.pos % 2 === 0 ? "#F9F9F9" : "#FFF");
                                                                    let colorRow = t.isUser ? "#FFF" : "#111";

                                                                    return (
                                                                        <tr key={t.nome} style={{ background: bgRow, color: colorRow, borderBottom: "1px solid #EEE", fontWeight: t.isUser ? "900" : "bold" }}>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center", borderLeft: isClassificado ? "4px solid #1C8144" : isRebaixado ? "4px solid #E74C3C" : "none" }}>{t.pos}º</td>
                                                                            <td style={{ padding: "6px 10px", textAlign: "left" }}>{t.nome} {t.isUser && "⭐"}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.j}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.v}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.e}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.d}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.gp}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.gs}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.sg > 0 ? `+${t.sg}` : t.sg}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center", color: t.isUser ? "#FFF" : "#FF005B", fontWeight: "900" }}>{t.pts}</td>
                                                                        </tr>
                                                                    );
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                ) : (
                                                    /* FASE FINAL (PLAYOFFS MATA-MATA) */
                                                    <div className="scrollable-area" style={{ maxHeight: "250px", border: "3px solid #111", background: "#FFF", padding: "8px", borderRadius: "6px" }}>
                                                        {torneioAtualAba.fasesPlayoffs?.map((fase, fIdx) => (
                                                            <div key={fIdx} style={{ marginBottom: "10px" }}>
                                                                <div style={{ background: "#111", color: "#00E5FF", padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>
                                                                    {fase.faseNome}
                                                                </div>
                                                                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                                    {fase.jogos.map((j, jIdx) => {
                                                                        const isUserMatch = j.timeA.toLowerCase().trim() === clubeAtual?.nome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === clubeAtual?.nome.toLowerCase().trim();
                                                                        return (
                                                                            <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? "#FFE6EE" : "#F9F9F9", border: isUserMatch ? "2px solid #FF005B" : "1px solid #DDD", padding: "4px 8px", fontSize: "11px", fontWeight: "bold" }}>
                                                                                <span style={{ flex: 1, textAlign: "right", color: j.vencedor === j.timeA ? "#FF005B" : "#333" }}>{j.timeA}</span>
                                                                                <span style={{ background: "#111", color: "#FFF", padding: "2px 6px", borderRadius: "3px", margin: "0 8px", fontSize: "10px", fontWeight: "900" }}>
                                                                                    {j.placarTexto}
                                                                                </span>
                                                                                <span style={{ flex: 1, textAlign: "left", color: j.vencedor === j.timeB ? "#FF005B" : "#333" }}>{j.timeB}</span>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : torneioAtualAba.tipo === "grupos" ? (
                                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                {torneioAtualAba.participou === false && (
                                                    <div style={{ padding: "8px", textAlign: "center", fontWeight: "bold", background: "#FFE6E6", color: "#D50000", border: "2px solid #D50000", borderRadius: "6px", fontSize: "12px" }}>
                                                        Seu time não se classificou para a Libertadores nesta temporada.
                                                    </div>
                                                )}
                                                <div className="scrollable-area" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", maxHeight: "180px", overflowY: "auto", paddingRight: "4px" }}>
                                                    {torneioAtualAba.grupos.map(g => (
                                                        <div key={g.letra} style={{ border: "2px solid #111", background: "#FFF", borderRadius: "6px" }}>
                                                            <div style={{ background: "#111", color: "#D4AF37", padding: "4px", fontSize: "11px", textAlign: "center", fontWeight: "bold" }}>GRUPO {g.letra}</div>
                                                            <table className="tabela-historico" style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px" }}>
                                                                <thead>
                                                                    <tr style={{ background: "#EEE" }}>
                                                                        <th>#</th><th style={{ textAlign: "left" }}>Time</th><th>P</th><th>J</th><th>V</th><th>SG</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {g.tabela.map(t => (
                                                                        <tr key={t.nome} style={{ background: t.isUser ? "#D4AF37" : "#FFF", color: "#111", borderTop: "1px solid #EEE" }}>
                                                                            <td style={{ textAlign: "center", borderLeft: t.pos <= 2 ? "3px solid #1C8144" : "none" }}>{t.pos}º</td>
                                                                            <td style={{ fontWeight: "bold" }}>
                                                                                {t.nome.substring(0, 3).toUpperCase()} <span style={{ fontSize: "8px", color: t.isUser ? "#111" : "#888", marginLeft: "3px" }}>{getLigaDoTime(t.nome)}</span>
                                                                            </td>
                                                                            <td style={{ textAlign: "center", fontWeight: "bold" }}>{t.pts}</td>
                                                                            <td style={{ textAlign: "center" }}>{t.j}</td>
                                                                            <td style={{ textAlign: "center" }}>{t.v}</td>
                                                                            <td style={{ textAlign: "center" }}>{t.sg}</td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="scrollable-area" style={{ maxHeight: "180px", border: "3px solid #111", background: "#FFF", padding: "8px", borderRadius: "6px" }}>
                                                    {torneioAtualAba.fases?.map((fase, fIdx) => (
                                                        <div key={fIdx} style={{ marginBottom: "8px" }}>
                                                            <div style={{ background: "#111", color: "#D4AF37", padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>
                                                                {fase.faseNome}
                                                            </div>
                                                            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                                {fase.jogos?.map((j, jIdx) => {
                                                                    const isUserMatch = j.timeA.toLowerCase().trim() === clubeAtual?.nome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === clubeAtual?.nome.toLowerCase().trim();
                                                                    return (
                                                                        <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? "#FFF8DC" : "#F9F9F9", border: isUserMatch ? "2px solid #D4AF37" : "1px solid #DDD", padding: "4px 8px", fontSize: "11px", fontWeight: "bold" }}>
                                                                            <span style={{ flex: 1, textAlign: "right", color: j.vencedor === j.timeA ? "#B8860B" : "#333" }}>
                                                                                <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal", marginRight: "4px" }}>{getLigaDoTime(j.timeA)}</span> {j.timeA}
                                                                            </span>
                                                                            <span style={{ background: "#111", color: "#D4AF37", padding: "2px 6px", borderRadius: "3px", margin: "0 8px", fontSize: "10px", fontWeight: "900" }}>
                                                                                {j.placarTexto}
                                                                            </span>
                                                                            <span style={{ flex: 1, textAlign: "left", color: j.vencedor === j.timeB ? "#B8860B" : "#333" }}>
                                                                                {j.timeB} <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal", marginLeft: "4px" }}>{getLigaDoTime(j.timeB)}</span>
                                                                            </span>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            /* EXIBIÇÃO: MATA-MATA (COPA DO BRASIL / SUPERCOPA) */
                                            <div className="scrollable-area" style={{ maxHeight: "250px", border: "3px solid #111", background: "#FFF", padding: "12px", borderRadius: "6px", marginBottom: "12px" }}>
                                                {torneioAtualAba.fases?.map((fase, fIdx) => (
                                                    <div key={fIdx} style={{ marginBottom: "12px" }}>
                                                        <div style={{ background: "#111", color: "#00E5FF", padding: "4px 8px", fontSize: "11px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "1px", marginBottom: "6px" }}>
                                                            {fase.faseNome}
                                                        </div>
                                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                                            {fase.jogos.map((j, jIdx) => {
                                                                const isUserMatch = j.timeA.toLowerCase().trim() === clubeAtual?.nome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === clubeAtual?.nome.toLowerCase().trim();
                                                                return (
                                                                    <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? "#FFE6EE" : "#F9F9F9", border: isUserMatch ? "2px solid #FF005B" : "1px solid #DDD", padding: "6px 10px", fontSize: "12px", fontWeight: "bold" }}>
                                                                        <span style={{ flex: 1, textAlign: "right", color: j.vencedor === j.timeA ? "#FF005B" : "#333" }}>{j.timeA}</span>
                                                                        <span style={{ background: "#111", color: "#FFF", padding: "2px 8px", borderRadius: "4px", margin: "0 10px", fontSize: "11px", fontWeight: "900" }}>
                                                                            {j.placarTexto}
                                                                        </span>
                                                                        <span style={{ flex: 1, textAlign: "left", color: j.vencedor === j.timeB ? "#FF005B" : "#333" }}>{j.timeB}</span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <button
                                            style={{ background: "#FF005B", color: "#FFF", padding: "10px", border: "3px solid #111", boxShadow: "3px 3px 0px #111", fontWeight: "900", fontFamily: "Impact, sans-serif", fontSize: "15px", cursor: "pointer", letterSpacing: "1px", marginTop: "10px" }}
                                            onClick={() => setFaseAtual("RENOVAR_CONTRATO")}
                                        >
                                            CONTINUAR PARA O MERCADO DE TRANSFERÊNCIAS ➔
                                        </button>
                                    </div>
                                )}

                                {/* MERCADO E CONTRATOS */}
                                {(faseAtual === "ESCOLHER_CLUBE" || faseAtual === "RENOVAR_CONTRATO") && (
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div>
                                            <h3 style={styles.tituloAcao}>MERCADO DE TRANSFERÊNCIAS</h3>

                                            {clubeRecusouRenovacao && (
                                                <div style={styles.avisoNaoRenovacao}>
                                                    ⚠ O <strong>{clubeAtual?.nome}</strong> optou por não renovar o seu contrato nesta temporada!
                                                </div>
                                            )}

                                            <p style={styles.descAcao}>
                                                {faseAtual === "ESCOLHER_CLUBE"
                                                    ? "Onde você pretende dar os primeiros passos na sua carreira profissional?"
                                                    : clubeRecusouRenovacao
                                                        ? "Você precisa escolher um novo destino para continuar a sua carreira."
                                                        : `Chegou o fim da temporada com o ${clubeAtual?.nome}. Você pode renovar o seu contrato ou procurar um novo desafio.`}
                                            </p>
                                        </div>

                                        <div className="grid-clubes" style={styles.gridClubes}>
                                            {opcoesClubes.map((clube, idx) => {
                                                const isRenovacao = clubeAtual && clube.nome.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim();
                                                const isMarcado = clubeMarcadoId === idx;

                                                return (
                                                    <div
                                                        key={idx}
                                                        style={{
                                                            ...styles.cardClube,
                                                            borderTopColor: clube.cor,
                                                            background: isMarcado ? "#111" : isRenovacao ? "#E6F7FF" : "#FFF",
                                                            color: isMarcado ? "#FFF" : "#111"
                                                        }}
                                                        onClick={() => assinarClube(clube, idx)}
                                                    >
                                                        <div style={{ fontSize: "13px", color: isMarcado ? "#00E5FF" : isRenovacao ? "#0088CC" : "#555", fontWeight: "bold", marginBottom: "6px" }}>
                                                            {isRenovacao ? "✒️ Renovar com" : "✈️ Assinar com"}
                                                        </div>

                                                        {clube.logo && (
                                                            <img
                                                                src={clube.logo}
                                                                alt={clube.nome}
                                                                style={{
                                                                    height: "42px",
                                                                    margin: "8px 0",
                                                                    objectFit: "contain",
                                                                    mixBlendMode: isMarcado ? "screen" : "multiply",
                                                                    filter: isMarcado ? "grayscale(100%) invert(100%) contrast(1000%) brightness(1000%)" : "none"
                                                                }}
                                                            />
                                                        )}

                                                        <strong style={{ fontSize: "19px", marginBottom: "8px", display: "block" }}>{clube.nome}</strong>
                                                        <span style={styles.divBadge}>{clube.div} • {clube.liga}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* EVENTOS DIVERSOS */}
                                {faseAtual === "EVENTO" && eventoAtual && (
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div>
                                            <h3 style={{ ...styles.tituloAcao, fontSize: "24px" }}>{eventoAtual.titulo}</h3>
                                            <p style={{ ...styles.descAcao, marginBottom: "15px" }}>{eventoAtual.desc}</p>
                                        </div>

                                        <div className="grid-eventos" style={styles.gridEventos}>
                                            {eventoAtual.opcoes.map((opcao, i) => (
                                                <div key={i} style={styles.cardEventoOpcao} onClick={() => lidarComEventoRisco(opcao)}>
                                                    <h4 style={{ textAlign: "center", color: "#111", fontSize: "18px", margin: "0 0 10px 0", fontFamily: "Impact, sans-serif" }}>{opcao.texto}</h4>
                                                    <img src={opcao.img} alt={opcao.texto} style={styles.imgEvento} />
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                                                        {opcao.consequencias.map((cons, j) => (
                                                            <div key={j} style={{ ...styles.badgeEvento, ...styles[`badge_${cons.tipo}`] }}>
                                                                <span>{cons.texto}</span>
                                                            </div>
                                                        ))}
                                                        {opcao.isRisco && (
                                                            <div style={{ marginTop: "4px", display: "flex", justifyContent: "space-between" }}>
                                                                <span style={styles.chanceBadgeSucesso}>{opcao.chance}% Sucesso</span>
                                                                <span style={styles.chanceBadgeFalha}>{100 - opcao.chance}% Falha</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* FINAL POR PÊNALTIS */}
                                {faseAtual === "FINAL_TACA" && (
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div>
                                            <h3 style={{ ...styles.tituloAcao, fontSize: "22px" }}>🏆 FINAL DE CAMPEONATO!</h3>
                                            <p style={{ ...styles.descAcao, marginBottom: "15px" }}>
                                                Decisão do título da <strong>{torneioPenaltiAlvo === "brasileirao" ? (clubeAtual?.div || "Brasileirão") : torneioPenaltiAlvo === "copa" ? "Copa do Brasil" : "Libertadores"}</strong> pelo <strong>{clubeAtual?.nome}</strong>! Pênalti a favor do seu time no último minuto! Você vai bater ou deixar para a capitã?
                                            </p>
                                        </div>

                                        <div className="grid-eventos" style={styles.gridEventos}>
                                            <div style={styles.cardEventoOpcao} onClick={() => lidarComPenalti(true)}>
                                                <h4 style={{ textAlign: "center", color: "#111", fontSize: "18px", margin: "0 0 10px 0", fontFamily: "Impact, sans-serif" }}>BATER O PÊNALTI</h4>
                                                <img src="https://media.istockphoto.com/id/1418501941/pt/foto/female-soccer-players-penalty-shot.jpg?s=612x612&w=0&k=20&c=WWUJmhhw5Q23oew_XZOrkaHdf7ZkRZtsBAA73_TCwUg=" alt="" style={styles.imgEvento} />
                                                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                                                    <div style={{ ...styles.badgeEvento, ...styles.badge_positivo }}>
                                                        <span style={{ fontSize: "13px" }}>↗ +4 OVR e Taça</span>
                                                        <span style={styles.chanceBadge}>60% Sucesso</span>
                                                    </div>
                                                    <div style={{ ...styles.badgeEvento, ...styles.badge_negativo }}>
                                                        <span style={{ fontSize: "13px" }}>→ +0 OVR e Vice</span>
                                                        <span style={styles.chanceBadge}>40% Falha</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={styles.cardEventoOpcao} onClick={() => lidarComPenalti(false)}>
                                                <h4 style={{ textAlign: "center", color: "#111", fontSize: "18px", margin: "0 0 10px 0", fontFamily: "Impact, sans-serif" }}>DEIXAR PARA CAPITÃ</h4>
                                                <img src="https://media.istockphoto.com/id/1468524063/pt/foto/female-soccer-player-placing-the-ball-for-a-free-kick.jpg?s=612x612&w=0&k=20&c=M0_jkAVPLAQLS6UJiPA1239lTZ0bj5VVguRvSFLQgq0=" alt="" style={styles.imgEvento} />
                                                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                                                    <div style={{ ...styles.badgeEvento, ...styles.badge_positivo }}>
                                                        <span style={{ fontSize: "13px" }}>↗ +2 OVR e Taça</span>
                                                        <span style={styles.chanceBadge}>70% Sucesso</span>
                                                    </div>
                                                    <div style={{ ...styles.badgeEvento, ...styles.badge_negativo }}>
                                                        <span style={{ fontSize: "13px" }}>→ +0 OVR e Vice</span>
                                                        <span style={styles.chanceBadge}>30% Falha</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* COLUNA DIREITA (HISTÓRICO DA CARREIRA COM "VER DETALHES 🔍") */}
                        <div className="anime-up coluna-direita" style={styles.colunaHistoricoCopero}>
                            <div className="scrollable-area tabela-historico-wrapper" style={{ flex: 1, overflowY: "auto" }}>
                                <table className="tabela-historico" style={styles.tabelaHistorico}>
                                    <thead style={{ position: "sticky", top: 0, background: "#111", zIndex: 10 }}>
                                        <tr>
                                            <th style={styles.thLeft}>IDADE</th>
                                            <th style={styles.thLeft}>CLUBE / POSIÇÃO</th>
                                            <th style={styles.thRight}>OVR</th>
                                            <th style={styles.thRight}>JOGOS</th>
                                            <th style={styles.thRight}>GOLS</th>
                                            <th style={styles.thRight}>AST</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {historico.map((ano, i) => (
                                            <tr
                                                key={`hist-${i}`}
                                                style={{ borderBottom: "1px solid #EAE5D9", cursor: "pointer", transition: "background 0.2s" }}
                                                onClick={() => {
                                                    if (ano.torneiosSimulados) {
                                                        setTemporadaInspecionada(ano);
                                                        setAbaInspecionadaAtiva(0);
                                                        setSubAbaInspecionada("tabela");
                                                    }
                                                }}
                                                title="Clique para ver os detalhes da temporada"
                                            >
                                                <td style={styles.tdLeft}>{ano.idade}</td>
                                                <td style={{ ...styles.tdLeft, padding: "6px 10px" }}>
                                                    <div style={{ fontWeight: "bold", color: ano.campea ? "#FF005B" : "#111", display: "flex", alignItems: "center", gap: "4px" }}>
                                                        {ano.clubeNome} {ano.campea && "🏆"}
                                                    </div>
                                                    <div style={{ fontSize: "11px", color: "#1C8144", fontWeight: "bold", marginTop: "2px" }}>
                                                        Ver detalhes da temporada 🔍
                                                    </div>
                                                </td>
                                                <td style={styles.tdRight}><span style={styles.ovrMiniBadge}>{ano.ovr}</span></td>
                                                <td style={styles.tdRight}>{ano.jogos}</td>
                                                <td style={styles.tdRight}>{ano.golos}</td>
                                                <td style={styles.tdRight}>{ano.ast}</td>
                                            </tr>
                                        ))}

                                        {idade < IDADE_MAXIMA && (
                                            <tr style={{ background: "#F4F0E6", color: "#111", fontWeight: "bold" }}>
                                                <td style={styles.tdLeft}>{idade}</td>
                                                <td style={styles.tdLeft}>{clubeAtual ? clubeAtual.nome : "❓ Escolhendo..."}</td>
                                                <td style={styles.tdRight}><span style={styles.ovrMiniBadge}>{ovr}</span></td>
                                                <td style={styles.tdRight}>-</td>
                                                <td style={styles.tdRight}>-</td>
                                                <td style={styles.tdRight}>-</td>
                                            </tr>
                                        )}

                                        {Array.from({ length: Math.max(0, IDADE_MAXIMA - 1 - idade) }).map((_, i) => (
                                            <tr key={`futuro-${i}`} style={{ opacity: 0.3 }}>
                                                <td style={styles.tdLeft}>{idade + i + 1}</td>
                                                <td style={styles.tdLeft}>-</td>
                                                <td style={styles.tdRight}>-</td>
                                                <td style={styles.tdRight}>-</td>
                                                <td style={styles.tdRight}>-</td>
                                                <td style={styles.tdRight}>-</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    page: { fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#F6F2F5", height: "100vh", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", padding: "15px" },
    wrapperGlobal: { display: "flex", flexDirection: "column", height: "95vh", width: "100%", maxWidth: "1280px" },

    headerTI: { display: "flex", justifyContent: "flex-start", marginBottom: "30px" },
    logoMiniTI: { fontSize: "18px", fontWeight: "900", letterSpacing: "1px", border: "2px solid #111", padding: "6px 12px", boxShadow: "3px 3px 0px #111", background: "#FFF", color: '#111' },

    cardCoperoMain: { display: "flex", gap: "20px", flex: 1, minHeight: 0, background: "#FFF", border: "4px solid #111", borderRadius: "18px", padding: "20px", boxShadow: "0px 15px 35px rgba(0,0,0,0.12)", overflow: "hidden" },

    colunaEsquerdaCopero: { flex: "1.2", display: "flex", flexDirection: "column", paddingRight: "5px", overflowY: "auto" },
    colunaHistoricoCopero: { flex: "1", display: "flex", flexDirection: "column", background: "#FFF", border: "3px solid #111", borderRadius: "10px", overflow: "hidden" },

    cardHeaderCopero: { background: "#FFF", border: "3px solid #111", boxShadow: "4px 4px 0px #00E5FF", padding: "14px 16px", flexShrink: 0, marginBottom: "15px" },
    cardHeaderTop: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111", paddingBottom: "10px", marginBottom: "10px" },

    ovrBadge: { background: "#FF005B", color: "#FFF", width: "55px", height: "55px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "3px solid #111", transform: "rotate(-3deg)" },
    ovrLabel: { fontSize: "10px", fontWeight: "900" },
    ovrValue: { fontSize: "28px", fontFamily: "Impact, sans-serif", lineHeight: "1" },

    infoBasica: { flex: 1, padding: "0 15px" },
    posBadge: { fontSize: "12px", fontWeight: "bold", padding: "3px 8px", borderRadius: "4px" },
    clubeInfo: { fontSize: "16px", fontWeight: "900", color: "#444", margin: "0" },

    idadeValor: { textAlign: "right", display: "flex", flexDirection: "column", gap: "3px" },
    labelPequena: { fontSize: "11px", fontWeight: "bold", color: "#777", display: "flex", flexDirection: "column", alignItems: "flex-end" },

    vitrineContainer: { textAlign: "center", background: "#111", padding: "8px" },

    statsRowEsquerda: { display: "flex", justifyContent: "space-around", background: "#FF005B", color: "#FFF", padding: "12px 10px", border: "3px solid #111", flexShrink: 0, marginBottom: "15px" },
    statItemEsquerda: { display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" },

    areaAcao: { background: "#F4F0E6", border: "3px solid #111", boxShadow: "4px 4px 0px #FF005B", padding: "18px", display: "flex", flexDirection: "column", flex: 1, overflowY: "auto", maxHeight: "100%" },
    areaAcaoEvento: { background: "#F4F0E6", border: "3px solid #111", boxShadow: "4px 4px 0px #00E5FF", padding: "18px", display: "flex", flexDirection: "column", flex: 1, borderRadius: "10px", overflowY: "auto", maxHeight: "100%" },
    tituloAcao: { margin: "0 0 8px 0", fontSize: "22px", fontFamily: "Impact, sans-serif", textTransform: "uppercase" },
    descAcao: { fontSize: "13px", color: "#444", marginBottom: "14px", lineHeight: "1.4", fontWeight: "500" },

    avisoNaoRenovacao: { background: "#FFE6E6", color: "#D50000", border: "2px solid #D50000", padding: "8px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "bold", marginBottom: "10px" },

    gridClubes: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
    cardClube: { border: "3px solid #111", borderTopWidth: "6px", padding: "14px 10px", textAlign: "center", cursor: "pointer", transition: "transform 0.1s" },
    divBadge: { fontSize: "11px", fontWeight: "bold", background: "#111", color: "#FFF", padding: "4px 10px", borderRadius: "8px" },

    tabelaHistorico: { width: "100%", borderCollapse: "collapse", fontSize: "13px" },
    thLeft: { color: "#FFF", padding: "10px 12px", textAlign: "left", fontSize: "11px", letterSpacing: "1px" },
    thRight: { color: "#FFF", padding: "10px 12px", textAlign: "center", fontSize: "11px", letterSpacing: "1px" },
    tdLeft: { padding: "8px 10px", fontWeight: "bold", borderRight: "1px dashed #EAE5D9" },
    tdRight: { padding: "8px 10px", textAlign: "center", borderRight: "1px dashed #EAE5D9" },
    ovrMiniBadge: { background: "#FF005B", color: "#FFF", padding: "3px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "900" },

    gridEventos: { display: "flex", gap: "14px", justifyContent: "center" },
    cardEventoOpcao: { background: "#FFF", padding: "14px", display: "flex", flexDirection: "column", flex: 1, cursor: "pointer", border: "3px solid #111", boxShadow: "4px 4px 0px #111" },
    imgEvento: { width: "100%", height: "120px", objectFit: "cover", border: "2px solid #111" },
    badgeEvento: { padding: "6px 8px", fontSize: "12px", fontWeight: "900", display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #111" },
    badge_positivo: { background: "#1C8144", color: "#FFF" },
    badge_negativo: { background: "#E74C3C", color: "#FFF" },
    badge_neutro: { background: "#EAE5D9", color: "#111" },
    chanceBadge: { background: "#111", color: "#FFF", padding: "2px 6px", borderRadius: "3px", fontSize: "11px" },
    chanceBadgeSucesso: { fontSize: "11px", color: "#1C8144", fontWeight: "bold" },
    chanceBadgeFalha: { fontSize: "11px", color: "#E74C3C", fontWeight: "bold" },

    overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 },
    bannerResultado: { background: "#111", border: "4px solid", padding: "25px 50px", textAlign: "center" },
    bannerCampeao: { background: "#FFD700", border: "4px solid #111", padding: "25px 50px", textAlign: "center", color: "#111", boxShadow: "8px 8px 0px #FF005B" },

    aposentadoriaBox: { flex: 1, background: "#111", border: "3px solid #111", display: "flex", flexDirection: "column", alignItems: "center", padding: "25px", gap: "18px" },
    aposentadoriaHeader: { width: "100%", maxWidth: "850px", display: "flex", flexDirection: "column", padding: "10px 0" },
    ovrBadgeFinal: { background: "#111", color: "#FFF", width: "55px", height: "55px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "3px solid #FF005B", borderRadius: "50%" },
    gridClubesFinal: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "12px", width: "100%", maxWidth: "850px" },
    cardClubeFinal: { border: "2px solid #111", borderTopWidth: "0px", padding: "14px 12px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", borderRadius: "6px" },
    escudoClube: { width: "45px", height: "45px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", color: "#FFF", fontWeight: "900", border: "2px solid #111", fontSize: "14px", fontFamily: "Impact, sans-serif" }
};