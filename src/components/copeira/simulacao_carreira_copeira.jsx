import React, { useState, useEffect } from "react";

import bandeirasPaises from "../../dados/bandeira_paises";
import listaPaises from "../../dados/bandeira_paises_com_camisa";
import { dbTimes, getTodosOsTimes, getTimesPorDivisao } from "../../dados/times";
import {
    dbCampeonatos,
    simularCampeonatoBrasileiro,
    simularCopaDoBrasil2026,
    simularSupercopa2026,
    simularCampeonatoArgentino,
    simularCampeonatoColombiano,
    simularCampeonatoChileno,
    simularCampeonatoEstadosUnidos,
    simularCampeonatoFrances,
    simularCampeonatoIngles,
    simularCoppaItalia,
    simularCoupedeFrance,
    simularCampeonatoEspanha,
    simularCampeonatoItaliano,
    simularCampeonatoAlemao,
    simularDFBPokalFrauen,
    simularDFBSupercupFrauen,
    simularSerieAWomensCup,
    simularSubwayPlayersCup,
    simularWomensFACup,
    simularCopaDeLaReina,
    simularSupercopaEspanha,
    simularNWSLChallengeCup,
    simularCampeonatoCanadense,
    simularWCanadianChampionship,
    simularFIFAWorldCup,
    simularCampeonatoMexicanoApertura,
    simularCampeonatoMexicanoClassura,
    simularLibertadores,
    simularChampionsCup,
    simularFIFAChampionsCup,
    simularFIFAClubWorldCup,
    simularUWCL,
    simularEuropaCup,
    historicoMundo,
    atualizarHistoricoMundo,
    resetarHistoricoMundo
} from "../../dados/campeonatos";
import dbEventos from "../../dados/eventos";

const MAPA_SEDES = {
    "ECU": { nome: "Equador", bandeira: "ec" },
    "COL": { nome: "Colômbia", bandeira: "co" },
    "ARG": { nome: "Argentina", bandeira: "ar" },
    "BRA": { nome: "Brasil", bandeira: "br" },
    "CHI": { nome: "Chile", bandeira: "cl" },
    "PAR": { nome: "Paraguai", bandeira: "py" },
    "URU": { nome: "Uruguai", bandeira: "uy" },
    "PER": { nome: "Peru", bandeira: "pe" },
    "VEN": { nome: "Venezuela", bandeira: "ve" },
    "BOL": { nome: "Bolívia", bandeira: "bo" }
};

const getCorPosicaoPES = (pos) => {
    const p = pos ? pos.toUpperCase() : "";
    if (p === "GOL") return { bg: "#FFD700", text: "#111" };
    if (["ZAG", "LE", "LD"].includes(p)) return { bg: "#1A6BFF", text: "#FFF" };
    if (["VOL", "MC", "ME", "MD", "MEI"].includes(p)) return { bg: "#128822", text: "#FFF" };
    if (["PE", "PD", "CA"].includes(p)) return { bg: "#D90000", text: "#FFF" };
    return { bg: "#111", text: "#FFF" };
};

const getCorOvrFIFA = (valorOvr) => {
    if (valorOvr >= 75) return { bg: "#FFD700", text: "#111" };
    if (valorOvr >= 65) return { bg: "#C0C0C0", text: "#111" };
    return { bg: "#CD7F32", text: "#FFF" };
};

export default function SimulacaoCarreira({ dadosJogadora, aoVoltar }) {
    const jogadora = {
        nome: "JOGADORA",
        numero: "10",
        perna: "Direita",
        paisSelecionado: "Brasil",
        posicaoSelecionada: "CA",
        ...dadosJogadora
    };

    const BolaDeOuroIcon = ({ tamanho = 60 }) => (
        <svg width={tamanho} height={tamanho} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Base/Pedestal Escuro */}
            <path d="M 25 85 L 75 85 L 85 95 L 15 95 Z" fill="#111" stroke="#111" strokeWidth="4" strokeLinejoin="round" />
            {/* Base Intermediária Dourada */}
            <path d="M 35 75 L 65 75 L 75 85 L 25 85 Z" fill="#B8860B" stroke="#111" strokeWidth="4" strokeLinejoin="round" />
            {/* Bola Principal */}
            <circle cx="50" cy="45" r="32" fill="#FFD700" stroke="#111" strokeWidth="4" />
            {/* Brilho da bola (Estilo cartoon/flat) */}
            <path d="M 28 35 A 22 22 0 0 1 45 18" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
            {/* Linhas simulando os gomos clássicos */}
            <path d="M 32 67 A 30 30 0 0 0 68 67" fill="none" stroke="#111" strokeWidth="2" opacity="0.6" />
            <path d="M 23 35 A 32 32 0 0 0 77 35" fill="none" stroke="#111" strokeWidth="2" opacity="0.6" />
            <path d="M 50 13 L 50 77" fill="none" stroke="#111" strokeWidth="2" opacity="0.4" />
            <path d="M 21 52 L 79 52" fill="none" stroke="#111" strokeWidth="2" opacity="0.4" />
        </svg>
    );

    const [idade, setIdade] = useState(16);
    const IDADE_MAXIMA = 40;

    const [ovr, setOvr] = useState(50);
    const [clubeAtual, setClubeAtual] = useState(null);

    const [timesArgAtual, setTimesArgAtual] = useState(() => getTimesPorDivisao("ARG_YPF"));
    const [timesA1Atual, setTimesA1Atual] = useState(() => getTimesPorDivisao("BRA_A1"));
    const [timesA2Atual, setTimesA2Atual] = useState(() => getTimesPorDivisao("BRA_A2"));
    const [timesColAtual, setTimesColAtual] = useState(() => getTimesPorDivisao("COL_LFBD"));
    const [timesChiAtual, setTimesChiAtual] = useState(() => getTimesPorDivisao("CHI_LF"));
    const [timesUsaAtual, setTimesUsaAtual] = useState(() => getTimesPorDivisao("USA_NWSL"));
    const [timesMexAtual, setTimesMexAtual] = useState(() => getTimesPorDivisao("MEX_LF"));
    const [timesCanAtual, setTimesCanAtual] = useState(() => getTimesPorDivisao("CAN_NSL"));
    const [timesEspAtual, setTimesEspAtual] = useState(() => getTimesPorDivisao("ESP_LF"));
    const [timesFraAtual, setTimesFraAtual] = useState(() => getTimesPorDivisao("FRA_ARK"));
    const [timesWslAtual, setTimesWslAtual] = useState(() => getTimesPorDivisao("ENG_WSL"));
    const [timesWsl2Atual, setTimesWsl2Atual] = useState(() => getTimesPorDivisao("ENG_WSL2"));
    const [timesItaAtual, setTimesItaAtual] = useState(() => getTimesPorDivisao("ITA_SA"));
    const [timesAleAtual, setTimesAleAtual] = useState(() => getTimesPorDivisao("ALE_GFB"));

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
    const [subAbaTotal, setSubAbaTotal] = useState("tabela");

    const [torneioPenaltiAlvo, setTorneioPenaltiAlvo] = useState("liga");

    const [temporadaInspecionada, setTemporadaInspecionada] = useState(null);
    const [abaInspecionadaAtiva, setAbaInspecionadaAtiva] = useState(0);
    const [subAbaInspecionada, setSubAbaInspecionada] = useState("tabela");

    const [clubeMarcadoId, setClubeMarcadoId] = useState(null);
    const [mostrarPopUpTitulo, setMostrarPopUpTitulo] = useState(false);
    const [titulosRecentes, setTitulosRecentes] = useState({ titulos: [], promovido: false, rebaixado: false, libertadores: false });
    const [resultadoAcao, setResultadoAcao] = useState(null);
    const [mostrarPopUpAposentadoria, setMostrarPopUpAposentadoria] = useState(false);
    const [clubeRecusouRenovacao, setClubeRecusouRenovacao] = useState(false);
    const [clubeTitulosModal, setClubeTitulosModal] = useState(null);

    const [totalJogosSelecao, setTotalJogosSelecao] = useState(0);
    const [totalGolosSelecao, setTotalGolosSelecao] = useState(0);
    const [totalAstSelecao, setTotalAstSelecao] = useState(0);
    const [mostrarPopUpConvocacao, setMostrarPopUpConvocacao] = useState(false);

    const [mostrarPopUpBolaDeOuro, setMostrarPopUpBolaDeOuro] = useState(false);
    const [bolasDeOuro, setBolasDeOuro] = useState(0);

    useEffect(() => {
        if (faseAtual === "ESCOLHER_CLUBE" && idade === 16) {
            resetarHistoricoMundo();

            const arraysPorPais = {
                "Argentina": timesArgAtual, "Colômbia": timesColAtual, "Chile": timesChiAtual,
                "Estados Unidos": timesUsaAtual, "México": timesMexAtual, "Canadá": timesCanAtual,
                "Espanha": timesEspAtual, "França": timesFraAtual, "Itália": timesItaAtual, "Alemanha": timesAleAtual,
            };

            let poolInicial = [...timesA2Atual];

            if (jogadora.paisSelecionado === "Inglaterra") {
                poolInicial = [...timesWsl2Atual];
            } else if (arraysPorPais[jogadora.paisSelecionado]) {
                poolInicial = [...arraysPorPais[jogadora.paisSelecionado]].filter(t => t.tier !== "alto");
            }

            poolInicial = poolInicial.filter(t => {
                if (!t) return false;
                const nomeClube = t.nome ? t.nome.toLowerCase() : "";
                const ligaClube = t.liga ? t.liga.toLowerCase() : "";
                const divClube = t.div ? t.div.toLowerCase() : "";

                return !nomeClube.includes("convidado") && !nomeClube.includes("clube nsl") && !nomeClube.startsWith("time ")
                    && !ligaClube.includes("canadian championship") && !divClube.includes("canadian championship") && !divClube.includes("primera federacion");
            });

            let misturados = poolInicial.sort(() => 0.5 - Math.random()).slice(0, 3);

            const n = jogadora.nome.toLowerCase().trim();
            const num = String(jogadora.numero).trim();
            const pos = jogadora.posicaoSelecionada.toUpperCase();
            const pais = jogadora.paisSelecionado;

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

            if (isRichmond) {
                misturados[0] = {
                    nome: "AFC Richmond", div: "Women's Super League 2", liga: "ENG", cor: "#0A1D3A", text: "#C4122E", tier: "medio",
                    logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/1/1e/A.F.C._Richmond_logo.svg/1280px-A.F.C._Richmond_logo.svg.png"
                };
            }

            setOpcoesClubes(misturados);
        }
    }, [idade, faseAtual, timesA2Atual, timesA1Atual, timesArgAtual, timesColAtual, timesChiAtual, timesUsaAtual, timesCanAtual, timesEspAtual, timesFraAtual, timesWslAtual, timesWsl2Atual, jogadora.paisSelecionado, jogadora.nome, jogadora.numero, jogadora.posicaoSelecionada]);

    const gerarPropostas = (currentOvr = ovr, clubePassado = clubeAtual, listaA1 = timesA1Atual, listaA2 = timesA2Atual, listaArg = timesArgAtual, listaCol = timesColAtual, listaChi = timesChiAtual, listaUsa = timesUsaAtual, listaMex = timesMexAtual, listaCan = timesCanAtual, listaEsp = timesEspAtual, listaFra = timesFraAtual, listaEng1 = timesWslAtual, listaEng2 = timesWsl2Atual) => {

        const isTimeValido = (t) => {
            if (!t) return false;
            const nomeClube = t.nome ? t.nome.toLowerCase() : "";
            const ligaClube = t.liga ? t.liga.toLowerCase() : "";
            const divClube = t.div ? t.div.toLowerCase() : "";

            if (nomeClube.includes("bilbao")) {
                const nacionalidade = jogadora.paisSelecionado;
                if (nacionalidade !== "Espanha" && nacionalidade !== "França") return false;
            }

            return !nomeClube.includes("convidado") && !nomeClube.includes("clube nsl") && !nomeClube.startsWith("time ")
                && !ligaClube.includes("canadian championship") && !divClube.includes("canadian championship") && !divClube.includes("primera federac");
        };

        let poolCompleta = [...listaA1, ...listaA2, ...listaArg, ...listaCol, ...listaChi, ...listaUsa, ...listaMex, ...listaCan, ...listaEsp, ...listaFra, ...listaEng1, ...listaEng2].filter(isTimeValido);

        let poolTier = [
            ...listaA2, ...listaEng2,
            ...listaArg.filter(t => t.tier !== "alto"), ...listaCol.filter(t => t.tier !== "alto"),
            ...listaChi.filter(t => t.tier !== "alto"), ...listaUsa.filter(t => t.tier !== "alto"),
            ...listaMex.filter(t => t.tier !== "alto"), ...listaCan.filter(t => t.tier !== "alto"),
            ...listaEsp.filter(t => t.tier !== "alto"), ...listaFra.filter(t => t.tier !== "alto"),
        ].filter(isTimeValido);

        if (currentOvr > 68) poolTier = poolCompleta;
        if (currentOvr > 80) poolTier = [
            ...listaA1,
            ...listaEng1.filter(t => t.tier === "alto" || t.tier === "medio"),
            ...listaUsa.filter(t => t.tier === "alto" || t.tier === "medio"),
            ...listaMex.filter(t => t.tier === "alto" || t.tier === "medio"),
            ...listaEsp.filter(t => t.tier === "alto" || t.tier === "medio"),
            ...listaFra.filter(t => t.tier !== "alto" || t.tier === "medio"),
        ].filter(isTimeValido);

        const nomeClubeAtual = clubePassado ? clubePassado.nome.toLowerCase().trim() : "";
        let outrosClubes = poolTier.filter(c => c.nome.toLowerCase().trim() !== nomeClubeAtual);

        if (outrosClubes.length < 2) outrosClubes = poolCompleta.filter(c => c.nome.toLowerCase().trim() !== nomeClubeAtual);
        outrosClubes = outrosClubes.sort(() => 0.5 - Math.random());

        let aceitouRenovar = true;
        if (clubePassado) {
            if (clubePassado.nome === "AFC Richmond") aceitouRenovar = true;
            else {
                if (idade >= 35 && Math.random() < 0.5) aceitouRenovar = false;
                else if (Math.random() < 0.15) aceitouRenovar = false;
            }
        }

        let listaFinal = [];
        if (clubePassado && aceitouRenovar) {
            setClubeRecusouRenovacao(false);
            const clubeDaPool = poolCompleta.find(c => c.nome.toLowerCase().trim() === nomeClubeAtual);
            const clubeAtualizado = { ...(clubeDaPool || clubePassado), div: clubePassado.div };
            listaFinal = [clubeAtualizado, outrosClubes[0], outrosClubes[1]].filter(Boolean);
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

        const isUserNaLiberta = historicoMundo.classificadosContinentalBR.includes(clubeRecemAssinado?.nome) ||
            historicoMundo.classificadosContinentalARG.includes(clubeRecemAssinado?.nome) ||
            historicoMundo.classificadosContinentalCOL.includes(clubeRecemAssinado?.nome) ||
            historicoMundo.classificadosContinentalCHI.includes(clubeRecemAssinado?.nome);

        const isUserEuropeu = ["ENG", "ESP", "FRA", "GER", "ALE", "ITA"].includes(clubeRecemAssinado?.liga) || clubeRecemAssinado?.div === "UEFA";

        const alvosPenalti = [];

        if (["BRA", "USA", "CAN", "ESP", "ENG", "ITA"].includes(clubeRecemAssinado?.liga)) alvosPenalti.push("copa");
        const jogaSupercopaBR = clubeRecemAssinado?.liga === "BRA" && (
            historicoMundo.campeaoA1 === clubeRecemAssinado?.nome ||
            historicoMundo.campeaoCopa === clubeRecemAssinado?.nome ||
            (historicoMundo.campeaoA1 === historicoMundo.campeaoCopa && historicoMundo.viceA1 === clubeRecemAssinado?.nome)
        );

        const jogaSupercopaALE = clubeRecemAssinado?.liga === "ALE" && (
            historicoMundo.campeaoAle === clubeRecemAssinado?.nome ||
            historicoMundo.campeaoCopaAle === clubeRecemAssinado?.nome ||
            (historicoMundo.campeaoAle === historicoMundo.campeaoCopaAle && historicoMundo.viceAle === clubeRecemAssinado?.nome)
        );

        let classificadosESP = [];
        if (clubeRecemAssinado?.liga === "ESP") {
            [historicoMundo.campeaoEsp, historicoMundo.viceEsp, historicoMundo.campeaoCopaEsp, historicoMundo.viceCopaEsp].forEach(t => {
                if (t && !classificadosESP.includes(t)) classificadosESP.push(t);
            });
            if (classificadosESP.length < 4 && historicoMundo.terceiroEsp && !classificadosESP.includes(historicoMundo.terceiroEsp)) classificadosESP.push(historicoMundo.terceiroEsp);
            if (classificadosESP.length < 4 && historicoMundo.quartoEsp && !classificadosESP.includes(historicoMundo.quartoEsp)) classificadosESP.push(historicoMundo.quartoEsp);
        }
        const jogaSupercopaESP = clubeRecemAssinado?.liga === "ESP" && classificadosESP.includes(clubeRecemAssinado?.nome);

        if (jogaSupercopaBR || jogaSupercopaALE || jogaSupercopaESP || ["ENG", "ITA"].includes(clubeRecemAssinado?.liga)) {
            alvosPenalti.push("copa2");
        }

        if (isUserNaLiberta || isUserEuropeu) alvosPenalti.push("libertadores");

        const ligasComPlayoffParaTitulo = ["BRA", "COL", "CHI", "USA", "MEX", "CAN", "FRA", "ARG"];
        if (ligasComPlayoffParaTitulo.includes(clubeRecemAssinado?.liga)) {
            alvosPenalti.push("liga");
        }

        let chancePenalti = 0.05;
        if (ovr > 60) chancePenalti += (ovr - 60) * 0.005;

        if (sorteio < chancePenalti && alvosPenalti.length > 0) {
            setTorneioPenaltiAlvo(alvosPenalti[Math.floor(Math.random() * alvosPenalti.length)]);
            setFaseAtual("FINAL_TACA");
        } else if (sorteio < 0.40) {
            const ehEasterEgg = clubeRecemAssinado?.nome === "AFC Richmond";
            let eventosDisponiveis = dbEventos.filter(e => ehEasterEgg ? e.isEasterEgg === true : !e.isEasterEgg);

            // NOVA LÓGICA: O evento da seleção só pode aparecer se tiver OVR para ser convocada (75+)
            if (ovr < 75) {
                eventosDisponiveis = eventosDisponiveis.filter(e => e.id !== "convocacao_selecao");
            }

            if (ultimoEventoId) {
                const filtradosSemRepetir = eventosDisponiveis.filter(e => e.id !== ultimoEventoId);
                if (filtradosSemRepetir.length > 0) {
                    eventosDisponiveis = filtradosSemRepetir;
                }
            }

            // FORÇA O DILEMA DA SELEÇÃO SE FOR ANO DE COPA DO MUNDO E A JOGADORA FOR CONVOCADA
            const anoAtual = historicoMundo.anoAtual || 2026;
            const eAnoDeCopa = (anoAtual >= 2027) && ((anoAtual - 2027) % 4 === 0);
            const eventoConvocacao = eventosDisponiveis.find(e => e.id === "convocacao_selecao");

            let eventoSorteado;
            // Se for ano de Copa, tiver OVR 75+ e o evento ainda não tiver saído no ano anterior
            if (eAnoDeCopa && ovr >= 75 && eventoConvocacao && ultimoEventoId !== "convocacao_selecao") {
                eventoSorteado = eventoConvocacao;
            } else {
                eventoSorteado = eventosDisponiveis[Math.floor(Math.random() * eventosDisponiveis.length)];
            }

            setEventoAtual(eventoSorteado);
            setUltimoEventoId(eventoSorteado.id);
            setFaseAtual("EVENTO");
        } else {
            let crescimentoNatural = 1;
            const rendimento = Math.random();

            // Crescimento acelerado na base (+1 a +4 por ano)
            if (idade <= 22) crescimentoNatural = rendimento > 0.20 ? Math.floor(Math.random() * 3) + 2 : 1;

            // Auge jovem: garante pelo menos +1, podendo chegar a +3
            else if (idade <= 27) crescimentoNatural = rendimento > 0.30 ? Math.floor(Math.random() * 3) + 1 : 1;

            // Auge estendido: continua evoluindo até aos 31 anos (+0 a +2)
            else if (idade <= 31) crescimentoNatural = rendimento > 0.40 ? Math.floor(Math.random() * 2) + 1 : 0;

            // Manutenção física: começa a cair mais tarde e de forma mais suave
            else if (idade <= 34) crescimentoNatural = rendimento > 0.50 ? 0 : -1;

            // Início da veterana (-1 a -2)
            else if (idade <= 37) crescimentoNatural = rendimento > 0.40 ? -1 : -2;

            // Fim de carreira (-1 a -2, antes chegava a perder 3 pontos ou mais)
            else crescimentoNatural = Math.floor(Math.random() * -2) - 1;

            avancarEpocaComClube(clubeRecemAssinado, crescimentoNatural);
        }
    };

    const lidarComEventoRisco = (opcao) => {
        setMultEventos(opcao.statsMult || 1.0);
        if (opcao.isRisco) {
            const rolou = Math.random() * 100;
            if (rolou <= opcao.chance) {
                setResultadoAcao({ titulo: "SUCESSO!", desc: opcao.sucesso.msg, cor: "#26910c", icone: "↗" });
                setTimeout(() => {
                    setResultadoAcao(null);
                    avancarEpocaComClube(clubeAtual, opcao.sucesso.ovr);
                }, 1800);
            } else {
                setResultadoAcao({ titulo: "FALHA!", desc: opcao.falha.msg, cor: "#ec0909", icone: "↘" });
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
                setResultadoAcao({ titulo: "GOL DO TÍTULO!", desc: "Você cobrou com perfeição e garantiu a taça!", cor: "#26910c", icone: "⚽" });
                setTimeout(() => { setResultadoAcao(null); resolverFinal(true, 4); }, 2200);
            } else {
                setResultadoAcao({ titulo: "NA TRAVE!", desc: "A pressão foi demais... você isolou e a sua equipe foi eliminada.", cor: "#ec0909", icone: "❌" });
                setTimeout(() => { setResultadoAcao(null); resolverFinal(false, 0); }, 2200);
            }
        } else {
            const capitaFez = Math.random() * 100 <= 70;
            if (capitaFez) {
                setResultadoAcao({ titulo: "UFA!", desc: "A capitã chamou a responsabilidade e marcou. Título garantido!", cor: "#26910c", icone: "🏆" });
                setTimeout(() => { setResultadoAcao(null); resolverFinal(true, 2); }, 2200);
            } else {
                setResultadoAcao({ titulo: "DEFENDEU!", desc: "A capitã vacilou e a sua equipe acabou sendo eliminada do torneio.", cor: "#ec0909", icone: "🧤" });
                setTimeout(() => { setResultadoAcao(null); resolverFinal(false, 0); }, 2200);
            }
        }
    };

    const resolverFinal = (ganhou, bonusOvr) => {
        avancarEpocaComClube(clubeAtual, bonusOvr, ganhou);
    };

    const avancarEpocaComClube = (clubeTarget, bonusEventoFinal = 0, ganhouFinalInterativa = null) => {
        let declinioAnual = 0;
        const anoAtual = historicoMundo.anoAtual || 2026;

        if (idade >= 32 && idade < 35) declinioAnual = Math.random() < 0.6 ? -1 : 0;
        else if (idade >= 35 && idade < 38) declinioAnual = Math.floor(Math.random() * -2) - 1;
        else if (idade >= 38) declinioAnual = Math.floor(Math.random() * -2) - 2;

        let bonusAjustado = bonusEventoFinal;
        if (idade >= 33) bonusAjustado = Math.min(1, bonusEventoFinal);

        const isUserBr = clubeTarget.liga === "BRA";
        const isUserArg = clubeTarget.liga === "ARG";
        const isUserCol = clubeTarget.liga === "COL";
        const isUserChi = clubeTarget.liga === "CHI";
        const isUserUsa = clubeTarget.liga === "USA";
        const isUserMex = clubeTarget.liga === "MEX";
        const isUserCan = clubeTarget.liga === "CAN";
        const isUserEsp = clubeTarget.liga === "ESP";
        const isUserEng = clubeTarget.liga === "ENG";
        const isUserFra = clubeTarget.liga === "FRA";
        const isUserIta = clubeTarget.liga === "ITA";
        const isUserAle = clubeTarget.liga === "ALE";

        const isUserSouthAmerica = ["BRA", "ARG", "COL", "CHI", "PAR", "URU", "PER", "ECU", "VEN", "BOL"].includes(clubeTarget.liga);
        const isUserNorteAmerica = ["USA", "MEX", "CAN", "CRC", "ELS", "JAM", "PAN"].includes(clubeTarget.liga);
        const isUserEuropeu = ["ENG", "ESP", "FRA", "GER", "ALE", "ITA"].includes(clubeTarget.liga) || clubeTarget.div === "UEFA";

        const ovrAposEvolucao = Math.max(40, ovr + bonusAjustado + declinioAnual);

        const eAnoDeMundialQuadrienal = (anoAtual >= 2028) && ((anoAtual - 2028) % 4 === 0);
        const eAnoDeCopaDoMundoSelecoes = (anoAtual >= 2027) && ((anoAtual - 2027) % 4 === 0);

        const forcarLigaLocal = (ganhouFinalInterativa !== null && torneioPenaltiAlvo === "liga") ? ganhouFinalInterativa : null;
        const forcarCopa = (ganhouFinalInterativa !== null && torneioPenaltiAlvo === "copa") ? ganhouFinalInterativa : null;
        const forcarCopa2 = (ganhouFinalInterativa !== null && torneioPenaltiAlvo === "copa2") ? ganhouFinalInterativa : null;
        const forcarContinental = (ganhouFinalInterativa !== null && torneioPenaltiAlvo === "libertadores") ? ganhouFinalInterativa : null;
        const forcarMundial = (ganhouFinalInterativa !== null && (torneioPenaltiAlvo === "libertadores" || torneioPenaltiAlvo === "fifa")) ? ganhouFinalInterativa : null;

        const resBrasileirao = simularCampeonatoBrasileiro(clubeTarget, ovrAposEvolucao, isUserBr ? forcarLigaLocal : null, timesA1Atual, timesA2Atual);
        const resArgentino = simularCampeonatoArgentino(clubeTarget, ovrAposEvolucao, isUserArg ? forcarLigaLocal : null, timesArgAtual);
        const resColombiano = simularCampeonatoColombiano(clubeTarget, ovrAposEvolucao, isUserCol ? forcarLigaLocal : null, timesColAtual);
        const resMexApertura = simularCampeonatoMexicanoApertura(clubeTarget, ovrAposEvolucao, isUserMex ? forcarLigaLocal : null, timesMexAtual);
        const resMexClassura = simularCampeonatoMexicanoClassura(clubeTarget, ovrAposEvolucao, isUserMex ? forcarLigaLocal : null, timesMexAtual);
        const resChileno = simularCampeonatoChileno(clubeTarget, ovrAposEvolucao, isUserChi ? forcarLigaLocal : null, timesChiAtual);
        const resCanadense = simularCampeonatoCanadense(clubeTarget, ovrAposEvolucao, (isUserCan && torneioPenaltiAlvo === "liga") ? ganhouFinalInterativa : null, timesCanAtual);
        const resWCanadian = isUserCan ? simularWCanadianChampionship(clubeTarget, ovrAposEvolucao, (isUserCan && torneioPenaltiAlvo === "copa") ? ganhouFinalInterativa : null, timesCanAtual) : { foiCampea: false, participou: false };
        const resUsa = simularCampeonatoEstadosUnidos(clubeTarget, ovrAposEvolucao, isUserUsa ? forcarLigaLocal : null, timesUsaAtual);
        const resChallengeCup = isUserUsa ? simularNWSLChallengeCup(clubeTarget, ovrAposEvolucao, historicoMundo.campeaoUsa, historicoMundo.liderUsa, historicoMundo.viceLiderUsa, forcarCopa) : { foiCampea: false, participou: false };
        const resFrances = simularCampeonatoFrances(clubeTarget, ovrAposEvolucao, isUserFra ? forcarLigaLocal : null, timesFraAtual);
        const resCoupeFrance = simularCoupedeFrance(clubeTarget, ovrAposEvolucao, isUserFra ? forcarCopa : null);
        const resIngles = simularCampeonatoIngles(clubeTarget, ovrAposEvolucao, isUserEng ? forcarLigaLocal : null, timesWslAtual, timesWsl2Atual);
        const resSubwayCup = isUserEng ? simularSubwayPlayersCup(clubeTarget, ovrAposEvolucao, forcarCopa2, timesWslAtual, timesWsl2Atual, historicoMundo) : { foiCampea: false, participou: false };
        const resFACup = isUserEng ? simularWomensFACup(clubeTarget, ovrAposEvolucao, forcarCopa, timesWslAtual, timesWsl2Atual) : { foiCampea: false, participou: false };
        const resEspanha = simularCampeonatoEspanha(clubeTarget, ovrAposEvolucao, isUserEsp ? forcarLigaLocal : null, timesEspAtual);
        const resItaliano = simularCampeonatoItaliano(clubeTarget, ovrAposEvolucao, isUserIta ? forcarLigaLocal : null, timesItaAtual);
        const resCoppaItalia = isUserIta ? simularCoppaItalia(clubeTarget, ovrAposEvolucao, forcarCopa) : { foiCampea: false, participou: false };
        const resSerieAWomensCup = isUserIta ? simularSerieAWomensCup(clubeTarget, ovrAposEvolucao, forcarCopa2, timesItaAtual) : { foiCampea: false, participou: false };
        const resCopadeLaRainha = simularCopaDeLaReina(clubeTarget, ovrAposEvolucao, isUserEsp ? forcarCopa : null);
        const resSupercopaEspanha = isUserEsp ? simularSupercopaEspanha(clubeTarget, ovrAposEvolucao, forcarCopa2, historicoMundo) : { foiCampea: false, participou: false };
        const resCopaBrasil = isUserBr ? simularCopaDoBrasil2026(clubeTarget, ovrAposEvolucao, forcarCopa) : { foiCampea: false };
        const resSupercopa = isUserBr ? simularSupercopa2026(clubeTarget, ovrAposEvolucao, historicoMundo.campeaoA1, historicoMundo.campeaoCopa, forcarCopa2) : { foiCampea: false };
        const resAlemao = simularCampeonatoAlemao(clubeTarget, ovrAposEvolucao, isUserAle ? forcarLigaLocal : null, timesAleAtual);
        const resDFBPokal = isUserAle ? simularDFBPokalFrauen(clubeTarget, ovrAposEvolucao, forcarCopa, timesAleAtual) : { foiCampea: false, participou: false };
        const resDFBSupercup = isUserAle ? simularDFBSupercupFrauen(clubeTarget, ovrAposEvolucao, forcarCopa2, historicoMundo) : { foiCampea: false, participou: false };

        const resLibertadores = simularLibertadores(
            clubeTarget, ovrAposEvolucao, isUserSouthAmerica ? forcarContinental : null,
            historicoMundo.classificadosContinentalBR, historicoMundo.classificadosContinentalARG,
            historicoMundo.classificadosContinentalCOL, historicoMundo.classificadosContinentalCHI,
            historicoMundo.campeaoLiberta, historicoMundo.paisSedeLiberta
        );

        if (resLibertadores?.campeao) {
            historicoMundo.ultimosCampeoesLiberta = historicoMundo.ultimosCampeoesLiberta || ["Corinthians"];
            historicoMundo.ultimosCampeoesLiberta = historicoMundo.ultimosCampeoesLiberta.filter(c => c !== resLibertadores.campeao);
            historicoMundo.ultimosCampeoesLiberta.unshift(resLibertadores.campeao);
        }

        let resChampionsCup = { participou: false };
        if (idade >= 17) {
            resChampionsCup = simularChampionsCup(clubeTarget, ovrAposEvolucao, isUserNorteAmerica ? forcarContinental : null, historicoMundo);

            if (resChampionsCup?.campeao) {
                historicoMundo.ultimosCampeoesConcacaf = historicoMundo.ultimosCampeoesConcacaf || ["NJ/NY Gotham FC"];
                historicoMundo.ultimosCampeoesConcacaf = historicoMundo.ultimosCampeoesConcacaf.filter(c => c !== resChampionsCup.campeao);
                historicoMundo.ultimosCampeoesConcacaf.unshift(resChampionsCup.campeao);
            }
        }

        let resUWCL = simularUWCL(clubeTarget, ovrAposEvolucao, isUserEuropeu ? forcarContinental : null, historicoMundo);

        if (resUWCL?.campeao) {
            historicoMundo.ultimosCampeoesUWCL = historicoMundo.ultimosCampeoesUWCL || ["Barcelona"];
            historicoMundo.ultimosCampeoesUWCL = historicoMundo.ultimosCampeoesUWCL.filter(c => c !== resUWCL.campeao);
            historicoMundo.ultimosCampeoesUWCL.unshift(resUWCL.campeao);
        }

        const foiEliminadaUWCL = (resUWCL.eliminadosUWCL || []).includes(clubeTarget.nome);
        const jogaLigaOuPlayoffsUWCL = resUWCL.participou && !foiEliminadaUWCL;

        const forceEuropa = (isUserEuropeu && !jogaLigaOuPlayoffsUWCL)
            ? (forcarContinental !== null ? forcarContinental : forcarCopa)
            : null;

        let resEuropaCup = simularEuropaCup(clubeTarget, ovrAposEvolucao, forceEuropa, resUWCL.eliminadosUWCL || [], jogaLigaOuPlayoffsUWCL);
        let resFIFAChampions = { foiCampea: false, participou: false };
        let resFIFACWorldCup = { foiCampea: false, participou: false, eAnoDeMundial: false };
        let resFIFAWorldCup = { foiCampea: false, participou: false };

        if (eAnoDeMundialQuadrienal) {
            resFIFACWorldCup = simularFIFAClubWorldCup(clubeTarget, ovrAposEvolucao, forcarMundial, historicoMundo);
        } else {
            resFIFAChampions = simularFIFAChampionsCup(clubeTarget, ovrAposEvolucao, forcarMundial, historicoMundo);
        }

        if (eAnoDeCopaDoMundoSelecoes) {
            resFIFAWorldCup = simularFIFAWorldCup(jogadora.paisSelecionado, ovrAposEvolucao, null, anoAtual);
        }

        let novaListaA1 = [...timesA1Atual];
        let novaListaA2 = [...timesA2Atual];
        let novaListaWSL = [...timesWslAtual];
        let novaListaWSL2 = [...timesWsl2Atual];
        let sobreviveuPlayoff = false;
        let foiPromovido = false;
        let foiRebaixado = false;
        let divFutura = clubeTarget.div;

        if (resIngles && resIngles.posicao === "Sobreviveu no Playoff 🛡️") sobreviveuPlayoff = true;

        if (resBrasileirao.promovidosA2 && resBrasileirao.rebaixadosA1) {
            const normalizeStr = (s) => s ? s.toLowerCase().trim() : "";

            if (clubeTarget.div.includes("A2") && resBrasileirao.chegouNaSemiOuSuperior) {
                divFutura = "Brasileirão Feminino Série A1";
                foiPromovido = true;
            } else if (clubeTarget.div.includes("A1") && resBrasileirao.userTabelaPos >= 15) {
                divFutura = "Brasileirão Feminino Série A2";
                foiRebaixado = true;
            }

            resBrasileirao.rebaixadosA1.forEach(nomeR => {
                const idxA1 = novaListaA1.findIndex(t => normalizeStr(t.nome) === normalizeStr(nomeR));
                if (idxA1 !== -1) {
                    const timeCaindo = { ...novaListaA1[idxA1], div: "Brasileirão Feminino Série A2" };
                    novaListaA1.splice(idxA1, 1);
                    novaListaA2.push(timeCaindo);
                } else {
                    const dadosExtra = obterDadosCompletosDoClube(nomeR);
                    novaListaA2.push(dadosExtra ? { ...dadosExtra, div: "Brasileirão Feminino Série A2" } : { nome: nomeR, div: "Brasileirão Feminino Série A2", tier: "baixo", liga: "BRA", cor: "#111", text: "#FFF" });
                }
            });

            resBrasileirao.promovidosA2.forEach(nomeP => {
                const idxA2 = novaListaA2.findIndex(t => normalizeStr(t.nome) === normalizeStr(nomeP));
                if (idxA2 !== -1) {
                    const timeSubindo = { ...novaListaA2[idxA2], div: "Brasileirão Feminino Série A1" };
                    novaListaA2.splice(idxA2, 1);
                    novaListaA1.push(timeSubindo);
                } else {
                    const dadosExtra = obterDadosCompletosDoClube(nomeP);
                    novaListaA1.push(dadosExtra ? { ...dadosExtra, div: "Brasileirão Feminino Série A1" } : { nome: nomeP, div: "Brasileirão Feminino Série A1", tier: "baixo", liga: "BRA", cor: "#111", text: "#FFF" });
                }
            });

            setTimesA1Atual(novaListaA1);
            setTimesA2Atual(novaListaA2);
        }

        if (resIngles && resIngles.promovidos && resIngles.rebaixados) {
            const normalizeStr = (s) => s ? s.toLowerCase().trim() : "";

            if (clubeTarget.div === "Women's Super League 2" || clubeTarget.div.includes("WSL2") || clubeTarget.div.includes("Championship")) {
                if (resIngles.promovidos.includes(clubeTarget.nome)) {
                    divFutura = "Women's Super League";
                    foiPromovido = true;
                }
            } else if (clubeTarget.div === "Women's Super League" || (clubeTarget.div.includes("WSL") && !clubeTarget.div.includes("WSL2"))) {
                if (resIngles.rebaixados.includes(clubeTarget.nome)) {
                    divFutura = "Women's Super League 2";
                    foiRebaixado = true;
                }
            }

            resIngles.rebaixados.forEach(nomeR => {
                const idxWSL = novaListaWSL.findIndex(t => normalizeStr(t.nome) === normalizeStr(nomeR));
                if (idxWSL !== -1) {
                    const timeCaindo = { ...novaListaWSL[idxWSL], div: "Women's Super League 2" };
                    novaListaWSL.splice(idxWSL, 1);
                    novaListaWSL2.push(timeCaindo);
                } else {
                    const dadosExtra = obterDadosCompletosDoClube(nomeR);
                    novaListaWSL2.push(dadosExtra ? { ...dadosExtra, div: "Women's Super League 2" } : { nome: nomeR, div: "Women's Super League 2", tier: "baixo", liga: "ENG", cor: "#111", text: "#FFF" });
                }
            });

            resIngles.promovidos.forEach(nomeP => {
                const idxWSL2 = novaListaWSL2.findIndex(t => normalizeStr(t.nome) === normalizeStr(nomeP));
                if (idxWSL2 !== -1) {
                    const timeSubindo = { ...novaListaWSL2[idxWSL2], div: "Women's Super League" };
                    novaListaWSL2.splice(idxWSL2, 1);
                    novaListaWSL.push(timeSubindo);
                } else {
                    const dadosExtra = obterDadosCompletosDoClube(nomeP);
                    novaListaWSL.push(dadosExtra ? { ...dadosExtra, div: "Women's Super League" } : { nome: nomeP, div: "Women's Super League", tier: "baixo", liga: "ENG", cor: "#111", text: "#FFF" });
                }
            });

            setTimesWslAtual(novaListaWSL);
            setTimesWsl2Atual(novaListaWSL2);
        }

        const clubeTargetAtualizado = { ...clubeTarget, div: divFutura };

        const torneiosSimulados = [];

        if (isUserBr) torneiosSimulados.push(resBrasileirao, resCopaBrasil, resSupercopa);
        if (isUserArg) torneiosSimulados.push(resArgentino);
        if (isUserCol) torneiosSimulados.push(resColombiano);
        if (isUserChi) torneiosSimulados.push(resChileno);
        if (isUserUsa) torneiosSimulados.push(resUsa, resChallengeCup);
        if (isUserCan) torneiosSimulados.push(resCanadense, resWCanadian);
        if (isUserMex) torneiosSimulados.push(resMexApertura, resMexClassura);
        if (isUserEsp) torneiosSimulados.push(resEspanha, resCopadeLaRainha, resSupercopaEspanha);
        if (isUserEng) torneiosSimulados.push(resIngles, resSubwayCup, resFACup);
        if (isUserFra) torneiosSimulados.push(resFrances, resCoupeFrance);
        if (isUserIta) torneiosSimulados.push(resSerieAWomensCup, resItaliano, resCoppaItalia);
        if (isUserAle) torneiosSimulados.push(resAlemao, resDFBPokal, resDFBSupercup);

        if (isUserSouthAmerica) {
            torneiosSimulados.push(resLibertadores);
        } else if (isUserNorteAmerica && idade >= 17) {
            torneiosSimulados.push(resChampionsCup);
        } else if (isUserEuropeu) {
            torneiosSimulados.push(resUWCL, resEuropaCup);
        }

        if (eAnoDeMundialQuadrienal) {
            torneiosSimulados.push(resFIFACWorldCup);
        } else {
            torneiosSimulados.push(resFIFAChampions);
        }

        if (eAnoDeCopaDoMundoSelecoes) {
            torneiosSimulados.push(resFIFAWorldCup);
        }

        atualizarHistoricoMundo(
            resBrasileirao, resCopaBrasil, resLibertadores, resChampionsCup, resArgentino,
            resColombiano, resChileno, resUsa, resMexApertura, resMexClassura,
            resWCanadian, resEspanha, resCopadeLaRainha, resFrances, resIngles,
            resItaliano, resAlemao, resDFBPokal
        );

        torneiosSimulados.forEach((t) => {
            if (t.foiCampea) {
                const nomeEquipaTaca = t.eAnoDeMundialSelecoes ? jogadora.paisSelecionado : clubeTargetAtualizado.nome;
                setTitulos((prev) => [...prev, `${t.nome}\n${nomeEquipaTaca} (${idade} anos)`]);
            }
        });

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

        let jogosCopa = 0, golsCopa = 0, astCopa = 0;
        if (eAnoDeCopaDoMundoSelecoes && resFIFAWorldCup?.participou) {
            const posMundial = resFIFAWorldCup.posicao;
            if (posMundial.includes("Campeã") || posMundial.includes("Vice") || posMundial.includes("3º") || posMundial.includes("4º") || posMundial.includes("Semifinalista")) jogosCopa = 7;
            else if (posMundial.includes("Quartas")) jogosCopa = 5;
            else if (posMundial.includes("Oitavas")) jogosCopa = 4;
            else jogosCopa = 3;

            golsCopa = Math.max(0, Math.round(jogosCopa * mediaGolPorJogo * 1.1));
            astCopa = Math.max(0, Math.round(jogosCopa * mediaAstPorJogo * 1.1));

            setTotalJogosSelecao((prev) => prev + jogosCopa);
            setTotalGolosSelecao((prev) => prev + golsCopa);
            setTotalAstSelecao((prev) => prev + astCopa);
        }

        setTotalJogos((prev) => prev + jogosEpoca + jogosCopa);
        setTotalGolos((prev) => prev + golosEpoca + golsCopa);
        setTotalAst((prev) => prev + astEpoca + astCopa);

        let ganhouBolaDeOuro = false;
        if (ovrAposEvolucao >= 88) {
            const participacoesGols = (golosEpoca + golsCopa) + (astEpoca + astCopa);
            const ganhouTituloMaior = torneiosSimulados.some(t => t.foiCampea && (
                t.nome.includes("Champions League") || t.nome.includes("Libertadores") ||
                t.nome.includes("Mundial") || t.nome.includes("World Cup")
            ));

            let chanceBdO = 0;
            if (ovrAposEvolucao >= 95) chanceBdO += 0.40;
            else if (ovrAposEvolucao >= 92) chanceBdO += 0.25;
            else chanceBdO += 0.05;

            if (participacoesGols >= 55) chanceBdO += 0.40;
            else if (participacoesGols >= 40) chanceBdO += 0.20;

            if (ganhouTituloMaior) chanceBdO += 0.35;

            const ganhouAlgumTitulo = torneiosSimulados.some(t => t.foiCampea);
            if (!ganhouAlgumTitulo) chanceBdO -= 0.35;

            if (chanceBdO >= 0.50 && Math.random() < Math.min(chanceBdO, 0.85)) {
                ganhouBolaDeOuro = true;
                setBolasDeOuro(prev => prev + 1);
            }
        }

        const novoHistorico = {
            idade: idade,
            clubeNome: clubeTargetAtualizado.nome,
            clubeCor: clubeTargetAtualizado.cor,
            clubeLogo: clubeTargetAtualizado.logo,
            clubeText: clubeTargetAtualizado.text,
            ovr: ovrAposEvolucao,
            jogos: jogosEpoca + jogosCopa,
            golos: golosEpoca + golsCopa,
            ast: astEpoca + astCopa,
            campea: torneiosSimulados.some(t => t.foiCampea),
            torneio: isUserBr ? resBrasileirao.nome : isUserArg ? resArgentino.nome : isUserChi ? resChileno.nome : isUserCol ? resColombiano.nome : isUserUsa ? resUsa.nome : isUserMex ? resMexApertura.nome : isUserMex ? resMexClassura.nome : null,
            posicaoTorneio: isUserBr ? resBrasileirao.posicao : isUserArg ? resArgentino.posicao : isUserChi ? resChileno.posicao : isUserCol ? resColombiano.posicao : isUserUsa ? resUsa.posicao : isUserMex ? resMexApertura.posicao : isUserMex ? resMexClassura.posicao : null,
            torneiosSimulados: torneiosSimulados
        };

        setHistorico((prev) => [...prev, novoHistorico]);
        setTorneiosTemporada(torneiosSimulados);
        setAbaTorneioAtiva(0);
        setSubAbaTotal("tabela");

        const novaIdade = idade + 1;
        setIdade(novaIdade);
        setOvr(ovrAposEvolucao);
        setMultEventos(1.0);

        if (novaIdade >= IDADE_MAXIMA) {
            setMostrarPopUpAposentadoria(true);
        } else {
            gerarPropostas(ovrAposEvolucao, clubeTargetAtualizado, novaListaA1, novaListaA2, timesArgAtual, timesColAtual, timesChiAtual, timesUsaAtual, timesMexAtual, timesCanAtual, timesEspAtual, timesFraAtual, timesWslAtual, timesWsl2Atual);

            const titulosGanhosAgora = torneiosSimulados.filter(t => t.foiCampea).map(t => t.nome);
            const vaiJogarLiberta = historicoMundo.classificadosContinentalBR?.includes(clubeTargetAtualizado.nome) || historicoMundo.classificadosContinentalARG?.includes(clubeTargetAtualizado.nome) || historicoMundo.classificadosContinentalCOL?.includes(clubeTargetAtualizado.nome) || historicoMundo.classificadosContinentalCHI?.includes(clubeTargetAtualizado.nome);
            const vaiJogarChampionsCup = historicoMundo.classificadosContinentalUSA?.includes(clubeTargetAtualizado.nome) || historicoMundo.classificadosContinentalMEX?.includes(clubeTargetAtualizado.nome) || historicoMundo.classificadosContinentalCAN?.includes(clubeTargetAtualizado.nome) || ["CRC", "ELS", "JAM", "PAN"].includes(clubeTargetAtualizado.liga);
            const vaiJogarUWCL = historicoMundo.classificadosContinentalESP?.includes(clubeTargetAtualizado.nome) || historicoMundo.classificadosContinentalENG?.includes(clubeTargetAtualizado.nome) || historicoMundo.classificadosContinentalFRA?.includes(clubeTargetAtualizado.nome) || historicoMundo.classificadosContinentalALE?.includes(clubeTargetAtualizado.nome) || historicoMundo.classificadosContinentalITA?.includes(clubeTargetAtualizado.nome) || clubeTargetAtualizado.div === "UEFA";
            const temEventoNotavel = titulosGanhosAgora.length > 0 || foiPromovido || foiRebaixado || sobreviveuPlayoff || vaiJogarLiberta || vaiJogarChampionsCup || vaiJogarUWCL;

            // --- FILA DE POPUPS ESTÁVEL ---
            const fecharTudoEIrProResumo = () => {
                setMostrarPopUpConvocacao(false);
                setMostrarPopUpTitulo(false);
                setMostrarPopUpBolaDeOuro(false);
                setFaseAtual("RESUMO_TEMPORADA");
            };

            const mostrarPopUpBdO = () => {
                if (ganhouBolaDeOuro) {
                    setFaseAtual("POPUP_BLOQUEIO");
                    setMostrarPopUpBolaDeOuro(true);
                    setTimeout(() => { fecharTudoEIrProResumo(); }, 4500);
                } else {
                    fecharTudoEIrProResumo();
                }
            };

            const mostrarPopUpTitulos = () => {
                if (temEventoNotavel) {
                    setFaseAtual("POPUP_BLOQUEIO");
                    setTitulosRecentes({ titulos: titulosGanhosAgora, promovido: foiPromovido ? divFutura : false, rebaixado: foiRebaixado ? divFutura : false, sobreviveuPlayoff: sobreviveuPlayoff, libertadores: vaiJogarLiberta, championsCup: vaiJogarChampionsCup, uwcl: vaiJogarUWCL });
                    setMostrarPopUpTitulo(true);
                    setTimeout(() => { setMostrarPopUpTitulo(false); mostrarPopUpBdO(); }, 4500);
                } else {
                    mostrarPopUpBdO();
                }
            };

            // 1º Passo: Convocação (Somente se o torneio for Copa do Mundo de SELEÇÕES e a string de posição for positiva)
            const jogouCopaEsseAno = eAnoDeCopaDoMundoSelecoes && resFIFAWorldCup?.participou && !resFIFAWorldCup.posicao.includes("Não Convocada") && !resFIFAWorldCup.posicao.includes("não se classificou");

            if (jogouCopaEsseAno) {
                setFaseAtual("POPUP_BLOQUEIO");
                setMostrarPopUpConvocacao(true);
                setTimeout(() => { setMostrarPopUpConvocacao(false); mostrarPopUpTitulos(); }, 4000);
            } else {
                mostrarPopUpTitulos();
            }
        }
    };

    let multIdadeVal = 1.0;
    if (idade <= 21) multIdadeVal = 1.2;
    else if (idade > 29) multIdadeVal = Math.max(0.15, 1.0 - (idade - 29) * 0.12);

    const baseK = Math.pow(ovr / 50.0, 8.5) * 25.0;
    const valorEmK = Math.round(baseK * multIdadeVal);
    const valorFormatado = valorEmK >= 1000 ? `€${(valorEmK / 1000).toFixed(2)}M` : `€${valorEmK}K`;

    const getResumoPorClube = () => {
        const resumo = {};

        // CRIA SEMPRE O ESPAÇO DA SELEÇÃO SE TIVER JOGADO
        if (totalJogosSelecao > 0) {
            resumo[jogadora.paisSelecionado] = {
                nome: jogadora.paisSelecionado, cor: "#111", text: "#00E5FF", logo: `https://flagcdn.com/w80/${bandeirasPaises[jogadora.paisSelecionado]}.png`,
                jogos: totalJogosSelecao, golos: totalGolosSelecao, ast: totalAstSelecao, titulosTotal: 0, listaTitulos: {}
            };
        }

        historico.forEach(ano => {
            if (!resumo[ano.clubeNome]) {
                resumo[ano.clubeNome] = {
                    nome: ano.clubeNome, cor: ano.clubeCor, text: ano.clubeText, logo: ano.clubeLogo,
                    jogos: 0, golos: 0, ast: 0, titulosTotal: 0, listaTitulos: {}
                };
            }
            resumo[ano.clubeNome].jogos += ano.jogos;
            resumo[ano.clubeNome].golos += ano.golos;
            resumo[ano.clubeNome].ast += ano.ast;

            if (ano.torneiosSimulados) {
                ano.torneiosSimulados.forEach(torneio => {
                    if (torneio.foiCampea) {
                        let nomeCurto = torneio.nome;
                        const mapeamentoNomes = [
                            { chave: "Google Pixel Frauen-Bundesliga", valor: "Frauen-Bundesliga" },
                            { chave: "DFB-Pokal Frauen", valor: "DFB-Pokal" },
                            { chave: "DFB-Supercup Frauen", valor: "DFB-Supercup" },
                            { chave: "Serie A Women's Cup", valor: "Serie A Cup" },
                            { chave: "Serie A Woman", valor: "Serie A" },
                            { chave: "Women's FA Cup", valor: "FA Cup" },
                            { chave: "Subway Players Cup", valor: "Subway Cup" },
                            { chave: "NWSL Challenge Cup", valor: "Challenge Cup" },
                            { chave: "Supercopa de España", valor: "Supercopa España" },
                            { chave: "Brasileirão Feminino Série A1", valor: "Série A1" },
                            { chave: "Brasileirão Feminino Série A2", valor: "Série A2" },
                            { chave: "Copa do Brasil", valor: "Copa do Brasil" },
                            { chave: "Supercopa", valor: "Supercopa" },
                            { chave: "Libertadores", valor: "Libertadores" },
                            { chave: "YPF", valor: "Camp. YPF" },
                            { chave: "BetPlay", valor: "Liga Femenina" },
                            { chave: "Chile", valor: "Liga de Chile" },
                            { chave: "Liga Femenil", valor: "Liga Femenil" },
                            { chave: "NWSL", valor: "NWSL" },
                            { chave: "Women's Super League", valor: "WSL" },
                            { chave: "Women's Super League 2", valor: "WSL 2" },
                            { chave: "NSL", valor: "NSL" },
                            { chave: "Champions Cup", valor: "Champions Cup" },
                            { chave: "Liga F Moeve", valor: "Liga F" },
                            { chave: "Arkema", valor: "Première Ligue" },
                            { chave: "Coupe de France", valor: "Coupe de France" },
                            { chave: "Copa de la Reina", valor: "Copa de la Reina" },
                            { chave: "Coppa Italia", valor: "Coppa Italia" },
                            { chave: "Champions League", valor: "Women's Champions League" },
                            { chave: "Europa Cup", valor: "Women's Europa Cup" },
                            { chave: "FIFA Women's Champions Cup", valor: "FIFA W Champ. Cup" },
                            { chave: "FIFA Women's Club World Cup", valor: "FIFA W Club World Cup" },
                            { chave: "FIFA Women's World Cup", valor: "FIFA W World Cup" },
                        ];

                        const torneioMapeado = mapeamentoNomes.find(t => nomeCurto.includes(t.chave));
                        if (torneioMapeado) nomeCurto = torneioMapeado.valor;

                        // Se for a Copa do Mundo, adiciona o título ao card da Seleção!
                        if (torneio.nome.includes("FIFA Women's World Cup")) {
                            if (resumo[jogadora.paisSelecionado]) {
                                resumo[jogadora.paisSelecionado].titulosTotal += 1;
                                if (!resumo[jogadora.paisSelecionado].listaTitulos[nomeCurto]) resumo[jogadora.paisSelecionado].listaTitulos[nomeCurto] = 0;
                                resumo[jogadora.paisSelecionado].listaTitulos[nomeCurto] += 1;
                            }
                        } else {
                            // Se for campeonato de clube normal, continua salvando no clube
                            resumo[ano.clubeNome].titulosTotal += 1;
                            if (!resumo[ano.clubeNome].listaTitulos[nomeCurto]) resumo[ano.clubeNome].listaTitulos[nomeCurto] = 0;
                            resumo[ano.clubeNome].listaTitulos[nomeCurto] += 1;
                        }
                    }
                });
            }
        });

        // Retorna a seleção sempre primeiro no array, seguida dos clubes em ordem cronológica
        const arrayClubes = Object.values(resumo).filter(c => c.nome !== jogadora.paisSelecionado);
        if (resumo[jogadora.paisSelecionado]) {
            return [resumo[jogadora.paisSelecionado], ...arrayClubes];
        }
        return arrayClubes;
    };

    const getLigaDoTime = (nomeTime) => {
        if (!nomeTime) return "";
        if (nomeTime.toLowerCase().trim() === "afc richmond") return "ENG";
        const timeEncontrado = getTodosOsTimes().find(t => t.nome.toLowerCase().trim() === nomeTime.toLowerCase().trim());
        return timeEncontrado ? timeEncontrado.liga : "";
    };

    const getLogoDoTime = (nomeTime) => {
        if (!nomeTime) return "";

        // Retorna a logo do Richmond caso seja o Easter Egg
        if (nomeTime.toLowerCase().trim() === "afc richmond") {
            return "https://thumb.wikimedia.org/wikipedia/en/thumb/1/1e/A.F.C._Richmond_logo.svg/1280px-A.F.C._Richmond_logo.svg.png";
        }

        // NOVA MÁGICA: Verifica se o "time" é uma seleção nacional. Se sim, devolve a URL da bandeira!
        if (bandeirasPaises[nomeTime]) {
            return `https://flagcdn.com/w40/${bandeirasPaises[nomeTime]}.png`;
        }

        // Se for time normal, busca no banco de dados
        const timeEncontrado = getTodosOsTimes().find(t => t.nome.toLowerCase().trim() === nomeTime.toLowerCase().trim());
        return timeEncontrado ? timeEncontrado.logo : "";
    };

    const obterDadosCompletosDoClube = (nomeBusca) => {
        if (!nomeBusca) return null;
        if (nomeBusca.toLowerCase().trim() === "afc richmond") {
            return {
                nome: "AFC Richmond", liga: "ENG", cor: "#0A1D3A", text: "#C4122E", tier: "medio",
                logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/1/1e/A.F.C._Richmond_logo.svg/1280px-A.F.C._Richmond_logo.svg.png"
            };
        }
        return getTodosOsTimes().find(t => t.nome === nomeBusca);
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
    .scrollable-area::-webkit-scrollbar-thumb:hover { background: #00E5FF; }
    @media (max-width: 768px) {
        .app-page { padding: 10px !important; height: auto !important; min-height: 100vh !important; overflow: visible !important; }
        .wrapper-global { height: auto !important; min-height: 100vh !important; display: block !important; }
        .app-header-ti { justify-content: center !important; margin-bottom: 15px !important; }
        .card-copero-main { flex-direction: column !important; gap: 15px !important; padding: 10px !important; height: auto !important; box-shadow: none !important; border-width: 2px !important; }
        .coluna-esquerda, .coluna-direita { width: 100% !important; flex: none !important; overflow: visible !important; }
        .info-basica { padding: 0 10px !important; }
        .info-basica strong { font-size: 14px !important; }
        .ovr-value { font-size: 20px !important; }
        .idade-valor strong { font-size: 14px !important; }
        .clube-info { font-size: 12px !important; }
        .grid-clubes { grid-template-columns: 1fr !important; gap: 10px !important; }
        .grid-eventos { flex-direction: column !important; }
        .tabela-historico-wrapper { overflow-x: auto !important; max-height: 400px !important; }
        .tabela-historico th, .tabela-historico td { padding: 6px !important; font-size: 10px !important; white-space: nowrap !important; }
        .modal-content { width: 95% !important; padding: 12px !important; max-height: 90vh !important; }
        .banner-campeao, .banner-resultado { padding: 15px 20px !important; }
        .banner-campeao h1, .banner-resultado h1 { font-size: 22px !important; }
        .aposentadoria-box { padding: 15px !important; }
        .aposentadoria-top { flex-direction: column !important; text-align: center !important; gap: 15px !important; }
        .aposentadoria-top > div { text-align: center !important; align-items: center !important; justify-content: center !important; }
        .grid-clubes-final { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
    }
    @keyframes popOVR {
        0% { transform: scale(1); filter: brightness(1); }
        40% { transform: scale(1.6) rotate(5deg); filter: brightness(1.5); text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.9); }
        100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
    }
    .ovr-animate { display: inline-block; animation: popOVR 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
  `;

    const torneioAtualAba = torneiosTemporada[abaTorneioAtiva] || {};
    const torneioInspecionadoAba = temporadaInspecionada?.torneiosSimulados?.[abaInspecionadaAtiva] || {};

    // CORES DINÂMICAS PARA A ABA ATUAL (RESUMO TEMPORADA)
    const isUWCLAtual = torneioAtualAba.nome?.includes("Champions League");
    const isEuropaAtual = torneioAtualAba.nome?.includes("Europa Cup");
    const isLibertaAtual = torneioAtualAba.nome?.includes("CONMEBOL");
    const isChampionsAtual = torneioAtualAba.nome?.includes("CONCACAF");
    const isFIFAChampionsAtual = torneioAtualAba.nome?.includes("Champions Cup");
    const isFIFAWorldCupAtual = torneioAtualAba.nome?.includes("World Cup");

    let corPrimariaAtual = "#FF005B";
    let corSecundariaAtual = "#FFE6EE";
    let corTextoVencedorAtual = "#FF005B";
    let corTextoUserAtual = "#FFF";
    let bgFaseAtual = "#111";
    let txtFaseAtual = "#FF005B";

    if (isUWCLAtual) {
        corPrimariaAtual = "#0050a0"; corSecundariaAtual = "#e6f0fa"; corTextoVencedorAtual = "#0050a0";
        corTextoUserAtual = "#FFFFFF"; bgFaseAtual = "#0050a0"; txtFaseAtual = "#FFFFFF";
    } else if (isEuropaAtual) {
        corPrimariaAtual = "#d5fe00"; corSecundariaAtual = "#f9ffe0"; corTextoVencedorAtual = "#6b8000";
        corTextoUserAtual = "#000000"; bgFaseAtual = "#d5fe00"; txtFaseAtual = "#000000";
    } else if (isChampionsAtual) {
        corPrimariaAtual = "#fc6900"; corSecundariaAtual = "#fcefe6"; corTextoVencedorAtual = "#fc6900";
        corTextoUserAtual = "#fc6900"; bgFaseAtual = "#331c88"; txtFaseAtual = "#fc6900";
    } else if (isLibertaAtual) {
        corPrimariaAtual = "#D4AF37"; corSecundariaAtual = "#FFF8DC"; corTextoVencedorAtual = "#B8860B";
        corTextoUserAtual = "#111"; bgFaseAtual = "#D4AF37"; txtFaseAtual = "#111";
    } else if (isFIFAWorldCupAtual) {
        corPrimariaAtual = "#e3b12f"; corSecundariaAtual = "#fffdf0"; corTextoVencedorAtual = "#111111";
        corTextoUserAtual = "#111111"; bgFaseAtual = "#111111"; txtFaseAtual = "#e3b12f";
    } else if (isFIFAChampionsAtual) {
        corPrimariaAtual = "#002f6c"; corSecundariaAtual = "#e6f0fa"; corTextoVencedorAtual = "#d4af37";
        corTextoUserAtual = "#FFFFFF"; bgFaseAtual = "#002f6c"; txtFaseAtual = "#d4af37";
    }

    // CORES DINÂMICAS PARA O HISTÓRICO (MODAL INSPECIONAR)
    const isUWCLInsp = torneioInspecionadoAba.nome?.includes("Champions League");
    const isEuropaInsp = torneioInspecionadoAba.nome?.includes("Europa Cup");
    const isLibertaInsp = torneioInspecionadoAba.nome?.includes("CONMEBOL");
    const isChampionsInsp = torneioInspecionadoAba.nome?.includes("CONCACAF");
    const isFIFAChampionsInsp = torneioInspecionadoAba.nome?.includes("Champions Cup");
    const isFIFAWorldCupInsp = torneioInspecionadoAba.nome?.includes("World Cup");


    let corPrimariaInsp = "#00E5FF";
    let corSecundariaInsp = "#E6F7FF";
    let corTextoVencedorInsp = "#0099CC";
    let corTextoUserInsp = "#FFF";
    let bgFaseInsp = "#111";
    let txtFaseInsp = "#00E5FF";

    if (isUWCLInsp) {
        corPrimariaInsp = "#0050a0"; corSecundariaInsp = "#e6f0fa"; corTextoVencedorInsp = "#0050a0";
        corTextoUserInsp = "#FFFFFF"; bgFaseInsp = "#0050a0"; txtFaseInsp = "#FFFFFF";
    } else if (isEuropaInsp) {
        corPrimariaInsp = "#d5fe00"; corSecundariaInsp = "#f9ffe0"; corTextoVencedorInsp = "#6b8000";
        corTextoUserInsp = "#000000"; bgFaseInsp = "#d5fe00"; txtFaseInsp = "#000000";
    } else if (isChampionsInsp) {
        corPrimariaInsp = "#fc6900"; corSecundariaInsp = "#fcefe6"; corTextoVencedorInsp = "#fc6900";
        corTextoUserInsp = "#fc6900"; bgFaseInsp = "#331c88"; txtFaseInsp = "#fc6900";
    } else if (isLibertaInsp) {
        corPrimariaInsp = "#D4AF37"; corSecundariaInsp = "#FFF8DC"; corTextoVencedorInsp = "#B8860B";
        corTextoUserInsp = "#111"; bgFaseInsp = "#D4AF37"; txtFaseInsp = "#111";
    } else if (isFIFAChampionsInsp) {
        corPrimariaInsp = "#002f6c"; corSecundariaInsp = "#e6f0fa"; corTextoVencedorInsp = "#d4af37";
        corTextoUserInsp = "#FFFFFF"; bgFaseInsp = "#002f6c"; txtFaseInsp = "#d4af37";
    } else if (isFIFAWorldCupInsp) {
        corPrimariaInsp = "#e3b12f"; corSecundariaInsp = "#fffdf0"; corTextoVencedorInsp = "#111111";
        corTextoUserInsp = "#111111"; bgFaseInsp = "#111111"; txtFaseInsp = "#e3b12f";
    }

    const dbRegraAtual = Object.values(dbCampeonatos).find(c => c.nome === torneioAtualAba.nome);
    const classificamPorGrupoAtual = (dbRegraAtual?.playoffs?.classificam && torneioAtualAba.grupos) ? (dbRegraAtual.playoffs.classificam / torneioAtualAba.grupos.length) : 2;

    const dbRegraInsp = Object.values(dbCampeonatos).find(c => c.nome === torneioInspecionadoAba.nome);
    const classificamPorGrupoInsp = (dbRegraInsp?.playoffs?.classificam && torneioInspecionadoAba.grupos) ? (dbRegraInsp.playoffs.classificam / torneioInspecionadoAba.grupos.length) : 2;

    return (
        <div className="app-page" style={styles.page}>
            <style>{animacoesCss}</style>

            {clubeTitulosModal && (
                <div style={styles.overlay}>
                    <div className="title-pop modal-content" style={{ background: "#FFF", border: "4px solid #111", padding: "20px", width: "90%", maxWidth: "400px", boxShadow: "8px 8px 0px #00E5FF", position: "relative" }}>
                        <button onClick={() => setClubeTitulosModal(null)} style={{ position: "absolute", top: "-15px", right: "-15px", background: "#00E5FF", color: "#111", border: "4px solid #111", width: "40px", height: "40px", fontSize: "20px", fontWeight: "900", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "2px 2px 0px #111" }}>X</button>
                        <h2 style={{ fontFamily: "Impact, sans-serif", fontSize: "22px", color: "#111", marginTop: "0", textTransform: "uppercase", borderBottom: "3px solid #111", paddingBottom: "10px", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>🏆 TROFÉUS - {clubeTitulosModal.nome}</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "300px", overflowY: "auto", paddingRight: "5px" }} className="scrollable-area">
                            {Object.entries(clubeTitulosModal.listaTitulos).map(([nomeTit, qtd], idx) => (
                                <div key={idx} style={{ background: "#FFD700", color: "#111", fontWeight: "900", padding: "10px 12px", border: "3px solid #111", fontSize: "14px", textTransform: "uppercase", boxShadow: "3px 3px 0px #111", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span>{nomeTit}</span>
                                    <span style={{ background: "#111", color: "#FFD700", padding: "2px 8px", fontSize: "14px", borderRadius: "4px" }}>{qtd}x</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {resultadoAcao && (
                <div style={styles.overlay}>
                    <div className="title-pop banner-resultado modal-content" style={{ ...styles.bannerResultado, borderColor: resultadoAcao.cor, boxShadow: `6px 6px 0px ${resultadoAcao.cor}` }}>
                        <span style={{ fontSize: "48px", color: resultadoAcao.cor }}>{resultadoAcao.icone}</span>
                        <h1 style={{ color: "#FFF", margin: "5px 0", fontSize: "28px" }}>{resultadoAcao.titulo}</h1>
                        <p style={{ color: "#CCC", fontSize: "15px", margin: 0 }}>{resultadoAcao.desc}</p>
                    </div>
                </div>
            )}

            {temporadaInspecionada && (
                <div style={styles.overlay}>
                    <div className="anime-up modal-content" style={{ background: "#FFF", border: "4px solid #111", borderRadius: "12px", width: "90%", maxWidth: "800px", padding: "20px", boxShadow: "8px 8px 0px #00E5FF", maxHeight: "90vh", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "3px solid #111", paddingBottom: "10px", marginBottom: "15px", flexWrap: "wrap", gap: "10px" }}>
                            <div>
                                <span style={{ fontSize: "12px", fontWeight: "900", color: "#00E5FF" }}>TEMPORADA DOS {temporadaInspecionada.idade} ANOS</span>
                                <h2 style={{ margin: "2px 0 0 0", fontFamily: "Impact, sans-serif", fontSize: "24px", color: "#111" }}>{temporadaInspecionada.clubeNome} {temporadaInspecionada.campea && "🏆"}</h2>
                            </div>
                            <button onClick={() => setTemporadaInspecionada(null)} style={{ background: "#111", color: "#FFF", border: "2px solid #111", padding: "6px 14px", fontWeight: "900", cursor: "pointer", fontFamily: "Impact, sans-serif" }}>FECHAR ✖</button>
                        </div>

                        <div style={{ display: "flex", background: "#111", padding: "4px", gap: "4px", border: "2px solid #111", borderRadius: "6px", marginBottom: "12px", overflowX: "auto" }} className="scrollable-area">
                            {temporadaInspecionada.torneiosSimulados?.map((torneio, index) => {
                                const ativo = index === abaInspecionadaAtiva;
                                return (
                                    <button key={index} onClick={() => { setAbaInspecionadaAtiva(index); setSubAbaInspecionada("tabela"); }} style={{ flex: 1, minWidth: "120px", padding: "6px 4px", background: ativo ? "#00E5FF" : "transparent", color: ativo ? "#FFF" : "#AAA", border: "none", fontWeight: "900", fontSize: "10px", fontFamily: "Impact, sans-serif", cursor: "pointer", letterSpacing: "0.5px" }}>
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

                        <div className="scrollable-area" style={{ flex: 1, overflowY: "auto" }}>
                            {(torneioInspecionadoAba.tipo === "pontos_corridos" || torneioInspecionadoAba.tipo === "suiço") ? (
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    <div style={{ display: "flex", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
                                        {torneioInspecionadoAba.tipo === "suiço" && torneioInspecionadoAba.fasesPreliminares?.length > 0 && (
                                            <button onClick={() => setSubAbaInspecionada("preliminares")} style={{ padding: "6px 12px", background: subAbaInspecionada === "preliminares" ? "#111" : "#FFF", color: subAbaInspecionada === "preliminares" ? corPrimariaInsp : "#111", border: "2px solid #111", fontWeight: "900", fontSize: "11px", cursor: "pointer" }}>
                                                🔄 Fase Preliminar
                                            </button>
                                        )}
                                        <button onClick={() => setSubAbaInspecionada("tabela")} style={{ padding: "6px 12px", background: subAbaInspecionada === "tabela" ? "#111" : "#FFF", color: subAbaInspecionada === "tabela" ? corPrimariaInsp : "#111", border: "2px solid #111", fontWeight: "900", fontSize: "11px", cursor: "pointer" }}>
                                            {torneioInspecionadoAba.tipo === "suiço" ? "📊 Fase de Liga" : "📊 Tabela"}
                                        </button>
                                        {torneioInspecionadoAba.fasesPlayoffs && torneioInspecionadoAba.fasesPlayoffs.length > 0 && (
                                            <button onClick={() => setSubAbaInspecionada("playoffs")} style={{ padding: "6px 12px", background: subAbaInspecionada === "playoffs" ? "#111" : "#FFF", color: subAbaInspecionada === "playoffs" ? corPrimariaInsp : "#111", border: "2px solid #111", fontWeight: "900", fontSize: "11px", cursor: "pointer" }}>
                                                ⚔️ Playoffs
                                            </button>
                                        )}
                                    </div>

                                    {subAbaInspecionada === "tabela" ? (
                                        <div className="scrollable-area" style={{ display: "flex", flexDirection: "column", gap: "15px", maxHeight: "250px", overflowY: "auto", paddingRight: "5px" }}>
                                            {torneioInspecionadoAba.tabelasExtras?.map((extra, idx) => {
                                                const isCol = torneioInspecionadoAba.nome.includes("BetPlay");
                                                const limiteExtra = isCol ? 2 : 1;
                                                return (
                                                    <div key={idx} style={{ border: "2px solid #111", background: "#FFF", borderRadius: "6px" }}>
                                                        <div style={{ background: "#111", color: "#00E5FF", padding: "4px", textAlign: "center", fontWeight: "bold", fontSize: "12px", textTransform: "uppercase" }}>{extra.titulo}</div>
                                                        <table className="tabela-historico" style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                                                            <thead>
                                                                <tr style={{ background: "#222", color: "#FFF", fontSize: "12px" }}>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>#</th>
                                                                    <th style={{ padding: "6px 10px", textAlign: "left" }}>CLUBE</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>J</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>V</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>E</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>D</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>SG</th>
                                                                    <th style={{ padding: "6px 4px", textAlign: "center" }}>PTS</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {extra.dados.map((t) => {
                                                                    let bgRow = t.isUser ? "#00E5FF" : (t.pos % 2 === 0 ? "#F9F9F9" : "#FFF");
                                                                    let colorRow = t.isUser ? "#FFF" : "#111";
                                                                    return (
                                                                        <tr key={t.nome} style={{ background: bgRow, color: colorRow, borderBottom: "1px solid #EEE", fontWeight: t.isUser ? "900" : "bold" }}>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center", borderLeft: t.pos <= limiteExtra ? "4px solid #1C8144" : "none" }}>{t.pos}º</td>
                                                                            <td style={{ padding: "6px 10px", textAlign: "left" }}>
                                                                                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                                                                    {getLogoDoTime(t.nome) && <img src={getLogoDoTime(t.nome)} alt={t.nome} style={{ width: "18px", height: "18px", objectFit: "contain" }} />}
                                                                                    <span>{t.nome} {t.isUser && "⭐"}</span>
                                                                                </div>
                                                                            </td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.j}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.v}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.e}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.d}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.sg > 0 ? `+${t.sg}` : t.sg}</td>
                                                                            <td style={{ padding: "6px 4px", textAlign: "center", color: t.isUser ? "#FFF" : "#00E5FF", fontWeight: "900" }}>{t.pts}</td>
                                                                        </tr>
                                                                    );
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )
                                            })}

                                            <div style={{ border: "2px solid #111", background: "#FFF", borderRadius: "6px" }}>
                                                {torneioInspecionadoAba.tabelasExtras && <div style={{ background: "#111", color: "#FFF", padding: "4px", textAlign: "center", fontWeight: "bold", fontSize: "12px" }}>TABELA ANUAL (GERAL)</div>}
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
                                                            const regrasTorneio = torneioInspecionadoAba.nome.includes("YPF") ? dbCampeonatos.campeonato_argentino :
                                                                torneioInspecionadoAba.nome.includes("Google Pixel") ? dbCampeonatos.frauen_bundesliga :
                                                                    torneioInspecionadoAba.nome.includes("Women's Cup") ? dbCampeonatos.serie_a_womens_cup :
                                                                        torneioInspecionadoAba.nome.includes("Champions League") ? dbCampeonatos.uwcl :
                                                                            torneioInspecionadoAba.nome.includes("Serie A") ? dbCampeonatos.serie_a_woman :
                                                                                torneioInspecionadoAba.nome.includes("BetPlay") ? dbCampeonatos.campeonato_colombiano :
                                                                                    torneioInspecionadoAba.nome.includes("Chile") ? dbCampeonatos.campeonato_chileno :
                                                                                        torneioInspecionadoAba.nome.includes("NWSL") ? dbCampeonatos.nwsl :
                                                                                            torneioInspecionadoAba.nome.includes("Première Ligue") ? dbCampeonatos.arkema_premiere_ligue :
                                                                                                torneioInspecionadoAba.nome.includes("NSL") ? dbCampeonatos.nsl :
                                                                                                    torneioInspecionadoAba.nome.includes("Subway") ? dbCampeonatos.subway_players_cup :
                                                                                                        torneioInspecionadoAba.nome.includes("Super League 2") ? dbCampeonatos.wsl2 :
                                                                                                            torneioInspecionadoAba.nome.includes("Super League") ? dbCampeonatos.wsl :
                                                                                                                torneioInspecionadoAba.nome.includes("Liga F Moeve") ? dbCampeonatos.liga_f_moeve :
                                                                                                                    torneioInspecionadoAba.nome.includes("Liga Femenil") ? dbCampeonatos.liga_feminil_bbva_apertura :
                                                                                                                        (torneioInspecionadoAba.isA2 ? dbCampeonatos.brasileirao_a2 : dbCampeonatos.brasileirao_a1);

                                                            // DESTAQUES ESPECÍFICOS DA CHAMPIONS LEAGUE
                                                            const isUWCL = torneioInspecionadoAba.nome.includes("Champions League");
                                                            const isDiretoQuartas = isUWCL && t.pos <= 4;
                                                            const isPlayIn = isUWCL && t.pos >= 5 && t.pos <= 12;

                                                            const isClassificado = !isUWCL && !torneioInspecionadoAba.nome.includes("YPF") && (t.pos <= (regrasTorneio?.playoffs?.classificam || 1));
                                                            const zonaRebaixamentoA1 = (regrasTorneio?.qtdTimes || 16) - (regrasTorneio?.rebaixamento || 0);
                                                            const isRebaixado = (!torneioInspecionadoAba.isA2 && regrasTorneio?.rebaixamento) && t.pos > zonaRebaixamentoA1;

                                                            // DEFINIÇÃO DA COR DA BORDA ESQUERDA
                                                            let bordaEspecial = "none";
                                                            if (isDiretoQuartas) bordaEspecial = "4px solid #1C8144"; // Verde Escuro (1º ao 4º)
                                                            else if (isPlayIn) bordaEspecial = "4px solid #00E5FF";      // Azul Claro (5º ao 12º)
                                                            else if (isClassificado) bordaEspecial = "4px solid #1C8144";
                                                            else if (isRebaixado) bordaEspecial = "4px solid #E74C3C";

                                                            let bgRow = t.isUser ? "#00E5FF" : (t.pos % 2 === 0 ? "#F9F9F9" : "#FFF");
                                                            let colorRow = t.isUser ? "#FFF" : "#111";

                                                            return (
                                                                <tr key={t.nome} style={{ background: bgRow, color: colorRow, borderBottom: "1px solid #EEE", fontWeight: t.isUser ? "900" : "bold" }}>
                                                                    <td style={{ padding: "6px 4px", textAlign: "center", borderLeft: bordaEspecial }}>{t.pos}º</td>
                                                                    <td style={{ padding: "6px 10px", textAlign: "left" }}>
                                                                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                                                            {getLogoDoTime(t.nome) && <img src={getLogoDoTime(t.nome)} alt={t.nome} style={{ width: "18px", height: "18px", objectFit: "contain" }} />}
                                                                            <span>{t.nome} {t.isUser && "⭐"}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.j}</td>
                                                                    <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.v}</td>
                                                                    <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.e}</td>
                                                                    <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.d}</td>
                                                                    <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.gp}</td>
                                                                    <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.gs}</td>
                                                                    <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.sg > 0 ? `+${t.sg}` : t.sg}</td>
                                                                    <td style={{ padding: "6px 4px", textAlign: "center", color: t.isUser ? "#FFF" : "#00E5FF", fontWeight: "900" }}>{t.pts}</td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ) : subAbaInspecionada === "preliminares" ? (
                                        <div className="scrollable-area" style={{ maxHeight: "250px", border: "2px solid #111", background: "#FFF", padding: "8px", borderRadius: "6px" }}>
                                            {torneioInspecionadoAba.fasesPreliminares?.map((fase, fIdx) => (
                                                <div key={fIdx} style={{ marginBottom: "8px" }}>
                                                    <div style={{ background: bgFaseInsp, color: txtFaseInsp, padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>{fase.faseNome}</div>
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                        {fase.jogos?.map((j, jIdx) => {
                                                            const isUserMatch = (clubeAtual && (j.timeA.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim())) || j.timeA.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim() || j.timeB.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim();
                                                            const showCountry = torneioInspecionadoAba.nome.includes("CONCACAF") || torneioInspecionadoAba.nome.includes("CONMEBOL") || torneioInspecionadoAba.nome.includes("Champions League") || torneioInspecionadoAba.nome.includes("Europa Cup");
                                                            return (
                                                                <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? corSecundariaInsp : "#F9F9F9", border: isUserMatch ? `2px solid ${corPrimariaInsp}` : "1px solid #DDD", padding: "6px 10px", fontSize: "11px", fontWeight: "bold" }}>
                                                                    <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", color: j.vencedor === j.timeA ? corTextoVencedorInsp : "#333" }}>
                                                                        {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeA)}</span>}
                                                                        <span style={{ textAlign: "right" }}>{j.timeA}</span>
                                                                        {getLogoDoTime(j.timeA) && <img src={getLogoDoTime(j.timeA)} alt={j.timeA} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                    </div>
                                                                    <span style={{ background: bgFaseInsp, color: txtFaseInsp, padding: "2px 8px", borderRadius: "4px", margin: "0 10px", fontSize: "10px", fontWeight: "900", whiteSpace: "nowrap" }}>{j.placarTexto}</span>
                                                                    <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "6px", color: j.vencedor === j.timeB ? corTextoVencedorInsp : "#333" }}>
                                                                        {getLogoDoTime(j.timeB) && <img src={getLogoDoTime(j.timeB)} alt={j.timeB} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                        <span style={{ textAlign: "left" }}>{j.timeB}</span>
                                                                        {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeB)}</span>}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="scrollable-area" style={{ maxHeight: "250px", border: "2px solid #111", background: "#FFF", padding: "8px", borderRadius: "6px" }}>
                                            {torneioInspecionadoAba.fasesPlayoffs?.map((fase, fIdx) => (
                                                <div key={fIdx} style={{ marginBottom: "8px" }}>
                                                    <div style={{ background: bgFaseInsp, color: txtFaseInsp, padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>{fase.faseNome}</div>
                                                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                        {fase.jogos?.map((j, jIdx) => {
                                                            const isUserMatch = j.timeA.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim() || j.timeA.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim() || j.timeB.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim();
                                                            const showCountry = torneioInspecionadoAba.nome.includes("CONCACAF") || torneioInspecionadoAba.nome.includes("CONMEBOL") || torneioInspecionadoAba.nome.includes("Champions League") || torneioInspecionadoAba.nome.includes("Europa Cup");
                                                            return (
                                                                <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? corSecundariaInsp : "#F9F9F9", border: isUserMatch ? `2px solid ${corPrimariaInsp}` : "1px solid #DDD", padding: "6px 10px", fontSize: "11px", fontWeight: "bold" }}>
                                                                    <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", color: j.vencedor === j.timeA ? corTextoVencedorInsp : "#333" }}>
                                                                        {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeA)}</span>}
                                                                        <span style={{ textAlign: "right" }}>{j.timeA}</span>
                                                                        {getLogoDoTime(j.timeA) && <img src={getLogoDoTime(j.timeA)} alt={j.timeA} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                    </div>
                                                                    <span style={{ background: bgFaseInsp, color: txtFaseInsp, padding: "2px 8px", borderRadius: "4px", margin: "0 10px", fontSize: "10px", fontWeight: "900", whiteSpace: "nowrap" }}>{j.placarTexto}</span>
                                                                    <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "6px", color: j.vencedor === j.timeB ? corTextoVencedorInsp : "#333" }}>
                                                                        {getLogoDoTime(j.timeB) && <img src={getLogoDoTime(j.timeB)} alt={j.timeB} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                        <span style={{ textAlign: "left" }}>{j.timeB}</span>
                                                                        {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeB)}</span>}
                                                                    </div>
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
                                    {torneioInspecionadoAba.paisSede && torneioInspecionadoAba.nome.includes("CONMEBOL") && (
                                        <div style={{ background: "#111", color: "#FFF", padding: "6px", textAlign: "center", borderRadius: "6px", fontSize: "11px", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}>
                                            📍 Sede:
                                            <img src={`https://flagcdn.com/w20/${MAPA_SEDES[torneioInspecionadoAba.paisSede]?.bandeira}.png`} alt="Bandeira Sede" style={{ height: "12px", border: "1px solid #444" }} />
                                            <span style={{ color: "#00E5FF" }}>{MAPA_SEDES[torneioInspecionadoAba.paisSede]?.nome}</span>
                                        </div>
                                    )}

                                    {torneioInspecionadoAba.participou === false && (
                                        <div style={{ padding: "8px", textAlign: "center", fontWeight: "bold", background: "#FFE6E6", color: "#D50000", border: "2px solid #D50000", borderRadius: "6px", fontSize: "12px" }}>
                                            {torneioInspecionadoAba.nome === "FIFA Women's World Cup"
                                                ? (torneioInspecionadoAba.posicao?.includes("Convocada") ? "Você não foi convocada para defender sua seleção nesta Copa." : "Sua seleção não conseguiu se classificar para esta Copa.")
                                                : "Seu time não se classificou para este torneio."}
                                        </div>
                                    )}
                                    <div className="scrollable-area" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", maxHeight: "180px", overflowY: "auto", paddingRight: "4px" }}>
                                        {torneioInspecionadoAba.grupos.map(g => (
                                            <div key={g.letra} style={{ border: "2px solid #111", background: "#FFF", borderRadius: "6px" }}>
                                                <div style={{ background: bgFaseInsp, color: txtFaseInsp, padding: "4px", fontSize: "11px", fontWeight: "bold", textAlign: "center" }}>GRUPO {g.letra}</div>
                                                <table className="tabela-historico" style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px" }}>
                                                    <thead>
                                                        <tr style={{ background: "#EEE" }}>
                                                            <th>#</th><th style={{ textAlign: "left" }}>Time</th><th>P</th><th>J</th><th>V</th><th>SG</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {g.tabela.map(t => (
                                                            <tr key={t.nome} style={{ background: t.isUser ? corPrimariaInsp : "#FFF", color: t.isUser ? corTextoUserInsp : "#111", borderTop: "1px solid #EEE" }}>
                                                                <td style={{ textAlign: "center", borderLeft: t.pos <= classificamPorGrupoInsp ? "3px solid #1C8144" : "none" }}>{t.pos}º</td>
                                                                <td style={{ fontWeight: "bold" }}>
                                                                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                                        {getLogoDoTime(t.nome) && <img src={getLogoDoTime(t.nome)} alt={t.nome} style={{ width: "14px", height: "14px", objectFit: "contain" }} />}
                                                                        <span>{t.nome.substring(0, 3).toUpperCase()}<span style={{ fontSize: "8px", color: t.isUser ? corTextoUserInsp : "#888", marginLeft: "3px" }}>{getLigaDoTime(t.nome)}</span></span>
                                                                    </div>
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
                                        {torneioInspecionadoAba.fasesPlayoffs?.map((fase, fIdx) => (
                                            <div key={fIdx} style={{ marginBottom: "8px" }}>
                                                <div style={{ background: bgFaseInsp, color: txtFaseInsp, padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>{fase.faseNome}</div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                    {fase.jogos?.map((j, jIdx) => {
                                                        const isUserMatch = j.timeA.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim() || j.timeA.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim() || j.timeB.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim();
                                                        const showCountry = torneioInspecionadoAba.nome.includes("CONCACAF") || torneioInspecionadoAba.nome.includes("CONMEBOL");
                                                        return (
                                                            <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? corSecundariaInsp : "#F9F9F9", border: isUserMatch ? `2px solid ${corPrimariaInsp}` : "1px solid #DDD", padding: "6px 10px", fontSize: "11px", fontWeight: "bold" }}>
                                                                <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", color: j.vencedor === j.timeA ? corTextoVencedorInsp : "#333" }}>
                                                                    {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeA)}</span>}
                                                                    <span style={{ textAlign: "right" }}>{j.timeA}</span>
                                                                    {getLogoDoTime(j.timeA) && <img src={getLogoDoTime(j.timeA)} alt={j.timeA} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                </div>
                                                                <span style={{ background: bgFaseInsp, color: txtFaseInsp, padding: "2px 8px", borderRadius: "4px", margin: "0 10px", fontSize: "10px", fontWeight: "900", whiteSpace: "nowrap" }}>{j.placarTexto}</span>
                                                                <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "6px", color: j.vencedor === j.timeB ? corTextoVencedorInsp : "#333" }}>
                                                                    {getLogoDoTime(j.timeB) && <img src={getLogoDoTime(j.timeB)} alt={j.timeB} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                    <span style={{ textAlign: "left" }}>{j.timeB}</span>
                                                                    {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeB)}</span>}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    {torneioInspecionadoAba.participou === false && (
                                        <div style={{ padding: "8px", textAlign: "center", fontWeight: "bold", background: "#FFE6E6", color: "#D50000", border: "2px solid #D50000", borderRadius: "6px", fontSize: "12px" }}>
                                            Seu time não se classificou para este torneio.
                                        </div>
                                    )}
                                    <div style={{ border: "2px solid #111", background: "#FFF", padding: "8px", borderRadius: "6px" }}>
                                        {(torneioInspecionadoAba.fases || torneioInspecionadoAba.fasesPlayoffs)?.map((fase, fIdx) => (
                                            <div key={fIdx} style={{ marginBottom: "8px" }}>
                                                <div style={{ background: bgFaseInsp, color: txtFaseInsp, padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>
                                                    {fase.faseNome}
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                    {fase.jogos?.map((j, jIdx) => {
                                                        const isUserMatch = j.timeA.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === temporadaInspecionada.clubeNome.toLowerCase().trim() || j.timeA.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim() || j.timeB.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim();
                                                        const showCountry = torneioInspecionadoAba.nome.includes("CONCACAF") || torneioInspecionadoAba.nome.includes("CONMEBOL") || torneioInspecionadoAba.nome.includes("Champions League") || torneioInspecionadoAba.nome.includes("Europa Cup");

                                                        return (
                                                            <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? corSecundariaInsp : "#F9F9F9", border: isUserMatch ? `2px solid ${corPrimariaInsp}` : "1px solid #DDD", padding: "6px 10px", fontSize: "11px", fontWeight: "bold" }}>

                                                                <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", color: j.vencedor === j.timeA ? corTextoVencedorInsp : "#333" }}>
                                                                    {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeA)}</span>}
                                                                    <span style={{ textAlign: "right" }}>{j.timeA}</span>
                                                                    {getLogoDoTime(j.timeA) && <img src={getLogoDoTime(j.timeA)} alt={j.timeA} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                </div>

                                                                <span style={{ background: bgFaseInsp, color: txtFaseInsp, padding: "2px 8px", borderRadius: "4px", margin: "0 10px", fontSize: "10px", fontWeight: "900", whiteSpace: "nowrap" }}>
                                                                    {j.placarTexto}
                                                                </span>

                                                                <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "6px", color: j.vencedor === j.timeB ? corTextoVencedorInsp : "#333" }}>
                                                                    {getLogoDoTime(j.timeB) && <img src={getLogoDoTime(j.timeB)} alt={j.timeB} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                    <span style={{ textAlign: "left" }}>{j.timeB}</span>
                                                                    {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeB)}</span>}
                                                                </div>

                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {mostrarPopUpTitulo && titulosRecentes && (
                <div style={styles.overlay}>
                    <div className="title-pop banner-campeao modal-content" style={{ ...styles.bannerCampeao, background: "#F4F0E6", color: "#111", border: "4px solid #111" }}>

                        {titulosRecentes.titulos.length > 0 && (
                            <div className="anime-up" style={{ marginBottom: "20px" }}>
                                <span style={{ fontSize: "55px", display: "block", marginBottom: "10px" }}>🏆</span>
                                <br />
                                <h1 style={{ margin: "0 0 10px 0", fontSize: "32px", fontFamily: "Impact, sans-serif", letterSpacing: "1px", color: titulosRecentes.rebaixado ? "#111" : "#111" }}>É CAMPEÃ!</h1>
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
                                    {titulosRecentes.titulos.map((t, idx) => (
                                        <div key={idx} style={{ background: "#FFD700", color: "#111", padding: "8px 16px", borderRadius: "6px", fontSize: "16px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "1px", border: "2px solid #111", boxShadow: "3px 3px 0px #111" }}>
                                            {t.toUpperCase()}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        {titulosRecentes.promovido && (
                            <div className="anime-up" style={{ background: "#1C8144", color: "#FFF", padding: "15px", borderRadius: "8px", margin: "10px 0", fontWeight: "900", fontSize: "20px", border: "3px solid #111", boxShadow: "4px 4px 0px #111" }}>
                                ⬆️ ACESSO GARANTIDO! <br /><span style={{ fontSize: "14px", fontWeight: "bold" }}>Rumo à {titulosRecentes.promovido}!</span>
                            </div>
                        )}

                        {titulosRecentes.sobreviveuPlayoff && (
                            <div className="anime-up" style={{ background: "#F39C12", color: "#FFF", padding: "15px", borderRadius: "8px", margin: "10px 0", fontWeight: "900", fontSize: "20px", border: "3px solid #111", boxShadow: "4px 4px 0px #111" }}>
                                🛡️ SOBREVIVEU! <br /><span style={{ fontSize: "14px", fontWeight: "bold" }}>A equipe venceu o playoff e garantiu a permanência na divisão.</span>
                            </div>
                        )}

                        {titulosRecentes.rebaixado && (
                            <div className="anime-up" style={{ background: "#E74C3C", color: "#FFF", padding: "15px", borderRadius: "8px", margin: "10px 0", fontWeight: "900", fontSize: "20px", border: "3px solid #111", boxShadow: "4px 4px 0px #111" }}>
                                ⬇️ REBAIXADA... <br /><span style={{ fontSize: "14px", fontWeight: "bold" }}>A equipa caiu para a {titulosRecentes.rebaixado}.</span>
                            </div>
                        )}

                        {titulosRecentes.libertadores && !titulosRecentes.rebaixado && (
                            <div className="anime-up" style={{ background: "#D4AF37", color: "#111", padding: "15px", borderRadius: "8px", margin: "10px 0", fontWeight: "900", fontSize: "20px", border: "3px solid #111", boxShadow: "4px 4px 0px #111", animationDelay: "0.2s" }}>
                                ✈️ PASSAPORTE CARIMBADO! <br /><span style={{ fontSize: "14px", fontWeight: "bold" }}>Vaga na Libertadores da América!</span>
                            </div>
                        )}

                        {titulosRecentes.uwcl && !titulosRecentes.rebaixado && (
                            <div className="anime-up" style={{ background: "#0050a0", color: "#FFF", padding: "15px", borderRadius: "8px", margin: "10px 0", fontWeight: "900", fontSize: "20px", border: "3px solid #111", boxShadow: "4px 4px 0px #0050a0", animationDelay: "0.2s" }}>
                                ⭐ RUMO À CHAMPIONS! <br /><span style={{ fontSize: "14px", fontWeight: "bold", color: "#FFF" }}>A tua equipa garantiu vaga na UEFA Women's Champions League!</span>
                            </div>
                        )}

                        {titulosRecentes.championsCup && !titulosRecentes.rebaixado && (
                            <div className="anime-up" style={{ background: "#331c88", color: "#fc6900", padding: "15px", borderRadius: "8px", margin: "10px 0", fontWeight: "900", fontSize: "20px", border: "3px solid #111", boxShadow: "4px 4px 0px #fc6900", animationDelay: "0.2s" }}>
                                ✈️ PASSAPORTE CARIMBADO! <br /><span style={{ fontSize: "14px", fontWeight: "bold", color: "#FFF" }}>Vaga na CONCACAF W Champions Cup!</span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {mostrarPopUpAposentadoria && (
                <div style={styles.overlay}>
                    <div className="title-pop banner-resultado modal-content" style={{ ...styles.bannerResultado, borderColor: "#00E5FF", boxShadow: "6px 6px 0px #00E5FF" }}>
                        <span style={{ fontSize: "48px" }}>👟</span>
                        <h1 style={{ color: "#FFF", margin: "5px 0", fontSize: "28px", textTransform: "uppercase" }}>CARREIRA ENCERRADA</h1>
                        <p style={{ color: "#CCC", fontSize: "15px", marginBottom: "15px" }}>Você pendurou as chuteiras aos {idade} anos de idade. Que jornada incrível!</p>
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

            {/* --- POPUP DE CONVOCAÇÃO --- */}
            {mostrarPopUpConvocacao && (() => {
                // Busca o país atual na sua nova lista exportada
                const dadosPais = listaPaises.find(p => p.nome === jogadora.paisSelecionado);
                
                // Pega as cores ou usa o azul neon como padrão de segurança caso falhe
                const corPais = dadosPais?.cores || { bg: "#00E5FF", text: "#111" };
                const codigoBandeira = dadosPais?.codigo || bandeirasPaises[jogadora.paisSelecionado];

                return (
                    <div style={styles.overlay}>
                        <div className="title-pop banner-campeao modal-content" style={{ ...styles.bannerCampeao, background: "#111", border: `4px solid ${corPais.bg}`, boxShadow: `8px 8px 0px ${corPais.bg}` }}>
                            <div className="anime-up" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                                <div style={{ background: corPais.bg, padding: "10px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: `0 0 20px ${corPais.bg}80` }}>
                                    <img src={`https://flagcdn.com/w80/${codigoBandeira}.png`} alt="Bandeira" style={{ border: `3px solid ${corPais.text}`, borderRadius: "50%", width: "80px", height: "80px", objectFit: "cover" }} />
                                </div>
                                <h1 style={{ margin: "5px 0", fontSize: "38px", fontFamily: "Impact, sans-serif", letterSpacing: "2px", color: corPais.bg, textTransform: "uppercase", textShadow: `2px 2px 0px ${corPais.text}` }}>CONVOCADA!</h1>
                                <p style={{ color: "#FFF", fontSize: "16px", fontWeight: "bold", margin: 0, textAlign: "center", maxWidth: "320px", lineHeight: "1.4" }}>
                                    O seu país chama por si! Prepare as malas para representar a seleção de <strong style={{color: corPais.bg, textTransform: "uppercase", textShadow: "1px 1px 0px #000"}}>{jogadora.paisSelecionado}</strong> no Mundial da FIFA!
                                </p>
                                <span style={{ fontSize: "40px", marginTop: "5px" }}>✈️🌍</span>
                            </div>
                        </div>
                    </div>
                );
            })()}
            
            {/* --- POPUP DA BOLA DE OURO (Que já tens no código) --- */}
            {mostrarPopUpBolaDeOuro && (
                <div style={styles.overlay}>
                    <div className="title-pop banner-campeao modal-content" style={{ ...styles.bannerCampeao, background: "#111", border: "4px solid #FFD700", boxShadow: "8px 8px 0px #FFD700" }}>
                        <div className="anime-up" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                            <BolaDeOuroIcon tamanho={110} />
                            <h1 style={{ margin: "10px 0 5px 0", fontSize: "36px", fontFamily: "Impact, sans-serif", letterSpacing: "2px", color: "#FFD700", textTransform: "uppercase" }}>MELHOR DO MUNDO!</h1>
                            <p style={{ color: "#FFF", fontSize: "16px", fontWeight: "bold", margin: 0, textAlign: "center", maxWidth: "300px", lineHeight: "1.4" }}>
                                Você teve uma temporada espetacular e conquistou a Bola de Ouro!
                            </p>
                            <div style={{ marginTop: "15px", background: "#FFD700", color: "#111", padding: "4px 12px", fontWeight: "900", border: "2px solid #FFF", borderRadius: "4px", fontSize: "14px" }}>
                                ⭐ {bolasDeOuro}x Eleita
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {faseAtual === "APOSENTADORIA" ? (
                <div className="anime-up scrollable-area" style={{ width: "100%", maxWidth: "750px", maxHeight: "95vh", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px", padding: "10px", boxSizing: "border-box" }}>

                    <div style={{ background: "#00E5FF", border: "4px solid #111", boxShadow: "5px 5px 0px #00E5FF", padding: "15px 20px", display: "flex", flexDirection: "column", gap: "10px", position: "relative", overflow: "hidden", flexShrink: 0 }}>

                        <div className="aposentadoria-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1, flexWrap: "wrap", gap: "12px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                <div style={{ color: "#000000", fontSize: "13px", fontWeight: "900", letterSpacing: "1px" }}>FIM DE CARREIRA</div>
                                <h1 style={{ fontFamily: "Impact, sans-serif", fontSize: "36px", color: "#111", margin: "0", textTransform: "uppercase", lineHeight: "1" }}>
                                    {jogadora.nome}
                                </h1>
                                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "6px" }}>
                                    <span style={{
                                        ...styles.posBadge,
                                        background: getCorPosicaoPES(jogadora.posicaoSelecionada).bg,
                                        color: getCorPosicaoPES(jogadora.posicaoSelecionada).text,
                                        border: "2px solid #FFF",
                                        padding: "3px 10px"
                                    }}>
                                        {jogadora.posicaoSelecionada}
                                    </span>
                                    {bandeirasPaises[jogadora.paisSelecionado] && (
                                        <img src={`https://flagcdn.com/w40/${bandeirasPaises[jogadora.paisSelecionado]}.png`} alt="Bandeira" style={{ border: "2px solid #FFF", height: "18px" }} />
                                    )}
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                                <div style={{ textAlign: "right" }}>
                                    <div style={{ color: "#000000", fontSize: "12px", fontWeight: "900" }}>VALOR FINAL</div>
                                    <div style={{ color: "#00E5FF", fontSize: "20px", fontWeight: "900" }}>{valorFormatado}</div>
                                </div>
                                <div style={{ background: getCorOvrFIFA(ovr).bg, color: getCorOvrFIFA(ovr).text, width: "55px", height: "55px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "3px solid #111", transform: "rotate(5deg)", boxShadow: "3px 3px 0px #FFF" }}>
                                    <span style={{ fontSize: "11px", fontWeight: "900", lineHeight: "1" }}>OVR</span>
                                    <span style={{ fontSize: "26px", fontFamily: "Impact, sans-serif", lineHeight: "1" }}>{ovr}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {clubeAtual && clubeAtual.nome === "AFC Richmond" && (
                        <div className="anime-up delay-1" style={{
                            background: "#0A1D3A", border: "4px solid #111", boxShadow: "5px 5px 0px #C4122E",
                            padding: "15px", textAlign: "center", color: "#FFF", position: "relative", overflow: "hidden"
                        }}>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/AFC_Richmond_Logo.svg/1200px-AFC_Richmond_Logo.svg.png"
                                alt="Richmond Logo"
                                style={{ position: "absolute", opacity: 0.1, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100px" }}
                            />
                            <h3 style={{ fontFamily: "Impact, sans-serif", fontSize: "22px", color: "#FCE300", margin: "0 0 5px 0", letterSpacing: "1px", position: "relative", zIndex: 1 }}>
                                THANK YOU, {jogadora.nome.split(" ")[0].toUpperCase()}!
                            </h3>
                            <p style={{ margin: 0, fontSize: "13px", fontWeight: "bold", fontStyle: "italic", opacity: 0.9, position: "relative", zIndex: 1 }}>
                                "O AFC Richmond será sempre a sua casa. Uma vez Greyhound, sempre Greyhound. 1, 2, 3 RICHMOND"
                            </p>
                        </div>
                    )}

                    {/* NOVO: BANNER DE RESUMO DA SELEÇÃO */}
                    {totalJogosSelecao > 0 && (
                        <div className="anime-up delay-1" style={{ display: "flex", alignItems: "stretch", background: "#111", border: "4px solid #111", boxShadow: "5px 5px 0px #111", overflow: "hidden", flexShrink: 0 }}>

                            <div style={{ background: "#F4F0E6", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px 20px", borderRight: "3px solid #111" }}>
                                <img src={`https://flagcdn.com/w80/${bandeirasPaises[jogadora.paisSelecionado]}.png`} alt="Bandeira" style={{ border: "3px solid #111", borderRadius: "4px", width: "60px", marginBottom: "5px" }} />
                                <strong style={{ color: "#111", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "Impact, sans-serif" }}>SELEÇÃO</strong>
                            </div>

                            <div style={{ flex: 1, display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px", background: "url('data:image/svg+xml;utf8,<svg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"20\" height=\"20\" fill=\"none\"/><path d=\"M0 0L20 20ZM20 0L0 20Z\" stroke=\"rgba(255,255,255,0.05)\" stroke-width=\"1\"/></svg>')", backgroundColor: "#1A1A1A" }}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ color: "#AAA", fontSize: "11px", fontWeight: "bold", letterSpacing: "1px" }}>JOGOS</div>
                                    <div style={{ color: "#FFF", fontSize: "28px", fontFamily: "Impact, sans-serif" }}>{totalJogosSelecao}</div>
                                </div>
                                <div style={{ width: "2px", height: "40px", background: "#333" }}></div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ color: "#AAA", fontSize: "11px", fontWeight: "bold", letterSpacing: "1px" }}>GOLS</div>
                                    <div style={{ color: "#00E5FF", fontSize: "28px", fontFamily: "Impact, sans-serif" }}>{totalGolosSelecao}</div>
                                </div>
                                <div style={{ width: "2px", height: "40px", background: "#333" }}></div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ color: "#AAA", fontSize: "11px", fontWeight: "bold", letterSpacing: "1px" }}>ASSIST.</div>
                                    <div style={{ color: "#FFF", fontSize: "28px", fontFamily: "Impact, sans-serif" }}>{totalAstSelecao}</div>
                                </div>
                            </div>

                        </div>
                    )}
                    {/* FIM DO BANNER DA SELEÇÃO */}

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "10px", flexShrink: 0 }}>
                        <div style={{ background: "#FFF", border: "3px solid #111", padding: "12px", textAlign: "center", boxShadow: "4px 4px 0px #111" }}>
                            <div style={{ color: "#777", fontSize: "12px", fontWeight: "900", marginBottom: "4px" }}>JOGOS</div>
                            <div style={{ fontFamily: "Impact, sans-serif", fontSize: "32px", color: "#111", lineHeight: "1" }}>{totalJogos}</div>
                        </div>
                        <div style={{ background: "#FFF", border: "3px solid #111", padding: "12px", textAlign: "center", boxShadow: "4px 4px 0px #111" }}>
                            <div style={{ color: "#777", fontSize: "12px", fontWeight: "900", marginBottom: "4px" }}>GOLS</div>
                            <div style={{ fontFamily: "Impact, sans-serif", fontSize: "32px", color: "#111", lineHeight: "1" }}>{totalGolos}</div>
                        </div>
                        <div style={{ background: "#FFF", border: "3px solid #111", padding: "12px", textAlign: "center", boxShadow: "4px 4px 0px #111" }}>
                            <div style={{ color: "#777", fontSize: "12px", fontWeight: "900", marginBottom: "4px" }}>ASSIST.</div>
                            <div style={{ fontFamily: "Impact, sans-serif", fontSize: "32px", color: "#111", lineHeight: "1" }}>{totalAst}</div>
                        </div>
                        <div style={{ background: "#FFF", border: "3px solid #111", padding: "12px", textAlign: "center", boxShadow: "4px 4px 0px #111" }}>
                            <div style={{ color: "#777", fontSize: "12px", fontWeight: "900", marginBottom: "4px" }}>TÍTULOS</div>
                            <div style={{ fontFamily: "Impact, sans-serif", fontSize: "32px", color: "#00E5FF", lineHeight: "1", textShadow: "1px 1px 0px #111" }}>{titulos.length}</div>
                        </div>
                        <div style={{ background: "#111", border: "3px solid #FFD700", padding: "12px", textAlign: "center", boxShadow: "4px 4px 0px #FFD700" }}>
                            <div style={{ color: "#FFD700", fontSize: "12px", fontWeight: "900", marginBottom: "4px" }}>BOLAS DE OURO</div>
                            <div style={{ fontFamily: "Impact, sans-serif", fontSize: "32px", color: "#FFD700", lineHeight: "1", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                                {bolasDeOuro} <BolaDeOuroIcon tamanho={24} />
                            </div>
                        </div>
                    </div>

                    <div style={{ background: "#FFF", border: "4px solid #111", padding: "15px", boxShadow: "5px 5px 0px #111", flexShrink: 0 }}>
                        <h3 style={{ fontFamily: "Impact, sans-serif", fontSize: "20px", color: "#111", margin: "0 0 12px 0", borderBottom: "3px solid #111", paddingBottom: "8px", textTransform: "uppercase" }}>
                            Sua Tranjetória
                        </h3>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))", gap: "10px" }}>
                            {getResumoPorClube().map((clube, i) => {
                                const getLuminance = (hexColor) => {
                                    if (!hexColor) return 0;
                                    let hex = hexColor.replace('#', '');
                                    if (hex.length === 3) hex = hex.split('').map(char => char + char).join('');
                                    const r = parseInt(hex.substr(0, 2), 16);
                                    const g = parseInt(hex.substr(2, 2), 16);
                                    const b = parseInt(hex.substr(4, 2), 16);
                                    return (r * 299 + g * 587 + b * 114) / 1000;
                                };

                                const isDarkBackground = getLuminance(clube.cor) < 128;
                                const corTextoSegura = isDarkBackground ? "#FFFFFF" : "#111111";

                                return (
                                    <div key={i} style={{ background: clube.cor, color: corTextoSegura, border: "3px solid #111", padding: "12px 10px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

                                        <div style={{ height: "45px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                                            {clube.logo ? (
                                                <img src={clube.logo} alt={clube.nome} style={{ maxHeight: "38px", maxWidth: "38px", objectFit: "contain", background: "#FFF", border: "2px solid #111", padding: "3px", boxShadow: "2px 2px 0px #111", borderRadius: "4px" }} />
                                            ) : (
                                                <div style={{ width: "38px", height: "38px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "4px", background: "#FFF", color: "#111", border: "2px solid #111", boxShadow: "2px 2px 0px #111", fontWeight: "900", fontSize: "13px" }}>
                                                    {clube.nome.substring(0, 3).toUpperCase()}
                                                </div>
                                            )}
                                        </div>

                                        <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.5px", textShadow: isDarkBackground ? "1px 1px 0px rgba(0,0,0,0.8)" : "none", minHeight: "32px", display: "flex", alignItems: "center", justifyContent: "center", color: corTextoSegura }}>
                                            {clube.nome}
                                        </h4>

                                        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", background: isDarkBackground ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)", padding: "6px", borderRadius: "3px", fontSize: "11px", fontWeight: "bold" }}>
                                            <div style={{ display: "flex", flexDirection: "column" }}><span style={{ opacity: 0.8, color: corTextoSegura }}>J</span> <span style={{ fontSize: "15px", color: corTextoSegura }}>{clube.jogos}</span></div>
                                            <div style={{ display: "flex", flexDirection: "column" }}><span style={{ opacity: 0.8, color: corTextoSegura }}>G</span> <span style={{ fontSize: "15px", color: corTextoSegura }}>{clube.golos}</span></div>
                                            <div style={{ display: "flex", flexDirection: "column" }}><span style={{ opacity: 0.8, color: corTextoSegura }}>A</span> <span style={{ fontSize: "15px", color: corTextoSegura }}>{clube.ast}</span></div>
                                        </div>

                                        {clube.titulosTotal > 0 && (
                                            <div
                                                onClick={() => setClubeTitulosModal(clube)}
                                                style={{ marginTop: "10px", background: "#FFD700", color: "#111", fontWeight: "900", padding: "4px 8px", border: "2px solid #111", fontSize: "11px", display: "inline-block", transform: "rotate(-3deg)", boxShadow: "2px 2px 0px #111", cursor: "pointer", transition: "transform 0.1s" }}
                                                onMouseDown={(e) => e.currentTarget.style.transform = "rotate(-3deg) translate(2px, 2px)"}
                                                onMouseUp={(e) => e.currentTarget.style.transform = "rotate(-3deg) translate(0px, 0px)"}
                                                title="Clique para ver os títulos!"
                                            >
                                                🏆 {clube.titulosTotal} TÍTULO{clube.titulosTotal > 1 ? 'S' : ''} 🔍
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        style={{ background: "#00E5FF", color: "#111", padding: "14px 20px", border: "4px solid #111", boxShadow: "5px 5px 0px #111", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", alignSelf: "center", marginTop: "10px", marginBottom: "15px", flexShrink: 0, letterSpacing: "1px", transition: "transform 0.1s" }}
                        onClick={aoVoltar}
                        onMouseDown={(e) => e.currentTarget.style.transform = "translate(2px, 2px)"}
                        onMouseUp={(e) => e.currentTarget.style.transform = "translate(0px, 0px)"}
                    >
                        VOLTAR AO MENU PRINCIPAL ↺
                    </button>
                </div>
            ) : (
                <div className="wrapper-global" style={styles.wrapperGlobal}>

                    <header className="anime-up app-header-ti" style={styles.headerTI}>
                        <div style={styles.logoMiniTI}>
                            <span style={{ color: "#00E5FF" }}>COPEIRA</span> A COPA É DELAS
                        </div>
                    </header>

                    <div className="card-copero-main" style={styles.cardCoperoMain}>
                        <div className="anime-up scrollable-area coluna-esquerda" style={styles.colunaEsquerdaCopero}>

                            <div style={styles.cardHeaderCopero}>
                                <div style={styles.cardHeaderTop}>
                                    <div style={{ ...styles.ovrBadge, background: getCorOvrFIFA(ovr).bg, color: getCorOvrFIFA(ovr).text }}>
                                        <span style={styles.ovrLabel}>OVR</span>
                                        <span key={ovr} className="ovr-value ovr-animate" style={styles.ovrValue}>{ovr}</span>
                                    </div>
                                    <div className="info-basica" style={styles.infoBasica}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                                            {bandeirasPaises[jogadora.paisSelecionado] && (
                                                <img src={`https://flagcdn.com/w20/${bandeirasPaises[jogadora.paisSelecionado]}.png`} alt="Bandeira" style={{ border: "1px solid #111" }} />
                                            )}
                                            <span style={{
                                                background: getCorPosicaoPES(jogadora.posicaoSelecionada).bg,
                                                color: getCorPosicaoPES(jogadora.posicaoSelecionada).text,
                                                padding: "3px 10px",
                                                fontWeight: "900",
                                                border: "2px solid #FFF",
                                                fontSize: "13px"
                                            }}>{jogadora.posicaoSelecionada}</span>
                                            <strong style={{ fontSize: "20px", textTransform: "uppercase" }}>#{jogadora.numero} {jogadora.nome}</strong>
                                        </div>

                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                                            {clubeAtual && clubeAtual.logo && (
                                                <img src={clubeAtual.logo} alt={clubeAtual.nome} style={{ height: "26px", mixBlendMode: "multiply" }} />
                                            )}
                                            <span className="clube-info" style={styles.clubeInfo}>{clubeAtual ? clubeAtual.nome : "❓ Sem clube"}</span>
                                        </div>

                                        {totalJogosSelecao > 0 && (
                                            <div className="fade-in" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px", background: "#111", color: "#FFF", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold", width: "fit-content", boxShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}>
                                                <img src={`https://flagcdn.com/w20/${bandeirasPaises[jogadora.paisSelecionado]}.png`} alt="Bandeira" style={{ border: "1px solid #444", borderRadius: "2px" }} />
                                                <span style={{ color: "#00E5FF", textTransform: "uppercase" }}>{jogadora.paisSelecionado}</span>
                                                <span style={{ color: "#AAA" }}>|</span>
                                                <span>{totalJogosSelecao} J</span>
                                                <span style={{ color: "#AAA" }}>|</span>
                                                <span>{totalGolosSelecao} G</span>
                                                <span style={{ color: "#AAA" }}>|</span>
                                                <span>{totalAstSelecao} A</span>
                                            </div>
                                        )}
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

                            <div style={styles.statsRowEsquerda}>
                                <div style={styles.statItemEsquerda}>
                                    <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "1px", color: "#111" }}>JOGOS</span>
                                    <strong key={`j-${totalJogos}`} style={{ fontSize: "32px", fontFamily: "Impact" }}>{totalJogos}</strong>
                                </div>
                                <div style={styles.statItemEsquerda}>
                                    <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "1px", color: "#111" }}>GOLS</span>
                                    <strong key={`g-${totalGolos}`} style={{ fontSize: "32px", fontFamily: "Impact" }}>{totalGolos}</strong>
                                </div>
                                <div style={styles.statItemEsquerda}>
                                    <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "1px", color: "#111" }}>AST</span>
                                    <strong key={`a-${totalAst}`} style={{ fontSize: "32px", fontFamily: "Impact" }}>{totalAst}</strong>
                                </div>
                            </div>

                            <div key={faseAtual + "-" + idade} className="fade-in scrollable-area" style={faseAtual === "EVENTO" || faseAtual === "FINAL_TACA" ? styles.areaAcaoEvento : styles.areaAcao}>

                                {faseAtual === "RESUMO_TEMPORADA" && (
                                    <div style={{ display: "flex", flexDirection: "column" }}>

                                        <div style={{ display: "flex", background: "#111", padding: "4px", gap: "4px", border: "3px solid #111", borderRadius: "6px", marginBottom: "12px", overflowX: "auto" }} className="scrollable-area">
                                            {torneiosTemporada.map((torneio, index) => {
                                                const ativo = index === abaTorneioAtiva;
                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => { setAbaTorneioAtiva(index); setSubAbaTotal("tabela"); }}
                                                        style={{
                                                            flex: 1, minWidth: "120px", padding: "8px 4px",
                                                            background: ativo ? "#00E5FF" : "transparent",
                                                            color: ativo ? "#111" : "#AAA",
                                                            border: "none", fontWeight: "900", fontSize: "10px",
                                                            fontFamily: "Impact, sans-serif", cursor: "pointer",
                                                            letterSpacing: "0.5px", transition: "all 0.2s"
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

                                        {(torneioAtualAba.tipo === "pontos_corridos" || torneioAtualAba.tipo === "suiço") ? (
                                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>

                                                <div style={{ display: "flex", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
                                                    {torneioAtualAba.tipo === "suiço" && torneioAtualAba.fasesPreliminares?.length > 0 && (
                                                        <button onClick={() => setSubAbaTotal("preliminares")} style={{ padding: "6px 12px", background: subAbaTotal === "preliminares" ? "#111" : "#FFF", color: subAbaTotal === "preliminares" ? corPrimariaAtual : "#111", border: "2px solid #111", fontWeight: "900", fontSize: "11px", cursor: "pointer" }}>
                                                            🔄 Fase Preliminar
                                                        </button>
                                                    )}
                                                    <button onClick={() => setSubAbaTotal("tabela")} style={{ padding: "6px 12px", background: subAbaTotal === "tabela" ? "#111" : "#FFF", color: subAbaTotal === "tabela" ? corPrimariaAtual : "#111", border: "2px solid #111", fontWeight: "900", fontSize: "11px", cursor: "pointer" }}>
                                                        {torneioAtualAba.tipo === "suiço" ? "📊 Fase de Liga" : "📊 Tabela"}
                                                    </button>
                                                    {torneioAtualAba.fasesPlayoffs && torneioAtualAba.fasesPlayoffs.length > 0 && (
                                                        <button onClick={() => setSubAbaTotal("playoffs")} style={{ padding: "6px 12px", background: subAbaTotal === "playoffs" ? "#111" : "#FFF", color: subAbaTotal === "playoffs" ? corPrimariaAtual : "#111", border: "2px solid #111", fontWeight: "900", fontSize: "11px", cursor: "pointer" }}>
                                                            ⚔️ Playoffs
                                                        </button>
                                                    )}
                                                </div>

                                                {subAbaTotal === "tabela" ? (
                                                    <div className="scrollable-area" style={{ display: "flex", flexDirection: "column", gap: "15px", maxHeight: "250px", overflowY: "auto", paddingRight: "5px" }}>

                                                        {torneioAtualAba.tabelasExtras?.map((extra, idx) => {
                                                            const isCol = torneioAtualAba.nome.includes("BetPlay");
                                                            const limiteExtra = isCol ? 2 : 1;

                                                            return (
                                                                <div key={idx} style={{ border: "3px solid #111", background: "#FFF", borderRadius: "6px" }}>
                                                                    <div style={{ background: "#111", color: "#00E5FF", padding: "4px", textAlign: "center", fontWeight: "bold", fontSize: "12px", textTransform: "uppercase" }}>{extra.titulo}</div>
                                                                    <table className="tabela-historico" style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                                                                        <thead>
                                                                            <tr style={{ background: "#222", color: "#FFF", fontSize: "12px" }}>
                                                                                <th style={{ padding: "6px 4px", textAlign: "center" }}>#</th>
                                                                                <th style={{ padding: "6px 10px", textAlign: "left" }}>CLUBE</th>
                                                                                <th style={{ padding: "6px 4px", textAlign: "center" }}>J</th>
                                                                                <th style={{ padding: "6px 4px", textAlign: "center" }}>V</th>
                                                                                <th style={{ padding: "6px 4px", textAlign: "center" }}>E</th>
                                                                                <th style={{ padding: "6px 4px", textAlign: "center" }}>D</th>
                                                                                <th style={{ padding: "6px 4px", textAlign: "center" }}>SG</th>
                                                                                <th style={{ padding: "6px 4px", textAlign: "center" }}>PTS</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {extra.dados.map((t) => {
                                                                                let bgRow = t.isUser ? corPrimariaAtual : (t.pos % 2 === 0 ? "#F9F9F9" : "#FFF");
                                                                                let colorRow = t.isUser ? corTextoUserAtual : "#111";
                                                                                return (
                                                                                    <tr key={t.nome} style={{ background: bgRow, color: colorRow, borderBottom: "1px solid #EEE", fontWeight: t.isUser ? "900" : "bold" }}>
                                                                                        <td style={{ padding: "6px 4px", textAlign: "center", borderLeft: t.pos <= limiteExtra ? "4px solid #1C8144" : "none" }}>{t.pos}º</td>
                                                                                        <td style={{ padding: "6px 10px", textAlign: "left" }}>
                                                                                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                                                                                {getLogoDoTime(t.nome) && <img src={getLogoDoTime(t.nome)} alt={t.nome} style={{ width: "18px", height: "18px", objectFit: "contain" }} />}
                                                                                                <span>{t.nome} {t.isUser && "⭐"}</span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.j}</td>
                                                                                        <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.v}</td>
                                                                                        <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.e}</td>
                                                                                        <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.d}</td>
                                                                                        <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.sg > 0 ? `+${t.sg}` : t.sg}</td>
                                                                                        <td style={{ padding: "6px 4px", textAlign: "center", color: t.isUser ? corTextoUserAtual : corPrimariaAtual, fontWeight: "900" }}>{t.pts}</td>
                                                                                    </tr>
                                                                                );
                                                                            })}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            )
                                                        })}

                                                        <div style={{ border: "3px solid #111", background: "#FFF", borderRadius: "6px" }}>
                                                            {torneioAtualAba.tabelasExtras && <div style={{ background: "#111", color: "#FFF", padding: "4px", textAlign: "center", fontWeight: "bold", fontSize: "12px" }}>TABELA ANUAL (GERAL)</div>}
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
                                                                        const regrasTorneio = torneioAtualAba.nome.includes("YPF") ? dbCampeonatos.campeonato_argentino :
                                                                            torneioAtualAba.nome.includes("Google Pixel") ? dbCampeonatos.frauen_bundesliga :
                                                                                torneioAtualAba.nome.includes("Women's Cup") ? dbCampeonatos.serie_a_womens_cup :
                                                                                    torneioAtualAba.nome.includes("Champions League") ? dbCampeonatos.uwcl :
                                                                                        torneioAtualAba.nome.includes("Serie A") ? dbCampeonatos.serie_a_woman :
                                                                                            torneioAtualAba.nome.includes("BetPlay") ? dbCampeonatos.campeonato_colombiano :
                                                                                                torneioAtualAba.nome.includes("Chile") ? dbCampeonatos.campeonato_chileno :
                                                                                                    torneioAtualAba.nome.includes("NWSL") ? dbCampeonatos.nwsl :
                                                                                                        torneioAtualAba.nome.includes("Première Ligue") ? dbCampeonatos.arkema_premiere_ligue :
                                                                                                            torneioAtualAba.nome.includes("NSL") ? dbCampeonatos.nsl :
                                                                                                                torneioAtualAba.nome.includes("Subway") ? dbCampeonatos.subway_players_cup :
                                                                                                                    torneioAtualAba.nome.includes("Super League 2") ? dbCampeonatos.wsl2 :
                                                                                                                        torneioAtualAba.nome.includes("Super League") ? dbCampeonatos.wsl :
                                                                                                                            torneioAtualAba.nome.includes("Liga F Moeve") ? dbCampeonatos.liga_f_moeve :
                                                                                                                                torneioAtualAba.nome.includes("Liga Femenil") ? dbCampeonatos.liga_feminil_bbva_apertura :
                                                                                                                                    (torneioAtualAba.isA2 ? dbCampeonatos.brasileirao_a2 : dbCampeonatos.brasileirao_a1);

                                                                        // DESTAQUES ESPECÍFICOS DA CHAMPIONS LEAGUE
                                                                        const isUWCL = torneioAtualAba.nome.includes("Champions League");
                                                                        const isDiretoQuartas = isUWCL && t.pos <= 4;
                                                                        const isPlayIn = isUWCL && t.pos >= 5 && t.pos <= 12;

                                                                        const isClassificado = !isUWCL && !torneioAtualAba.nome.includes("YPF") && (t.pos <= (regrasTorneio?.playoffs?.classificam || 1));
                                                                        const zonaRebaixamentoA1 = (regrasTorneio?.qtdTimes || 16) - (regrasTorneio?.rebaixamento || 0);
                                                                        const isRebaixado = (!torneioAtualAba.isA2 && regrasTorneio?.rebaixamento) && t.pos > zonaRebaixamentoA1;

                                                                        // DEFINIÇÃO DA COR DA BORDA ESQUERDA
                                                                        let bordaEspecial = "none";
                                                                        if (isDiretoQuartas) bordaEspecial = "4px solid #1C8144"; // Verde Escuro (1º ao 4º - Quartas Diretas)
                                                                        else if (isPlayIn) bordaEspecial = "4px solid #00E5FF";      // Azul Claro / Ciano (5º ao 12º - Play-In)
                                                                        else if (isClassificado) bordaEspecial = "4px solid #1C8144"; // Verde Ligas Normais
                                                                        else if (isRebaixado) bordaEspecial = "4px solid #E74C3C";   // Vermelho Rebaixamento

                                                                        let bgRow = t.isUser ? corPrimariaAtual : (t.pos % 2 === 0 ? "#F9F9F9" : "#FFF");
                                                                        let colorRow = t.isUser ? corTextoUserAtual : "#111";

                                                                        return (
                                                                            <tr key={t.nome} style={{ background: bgRow, color: colorRow, borderBottom: "1px solid #EEE", fontWeight: t.isUser ? "900" : "bold" }}>
                                                                                <td style={{ padding: "6px 4px", textAlign: "center", borderLeft: bordaEspecial }}>{t.pos}º</td>
                                                                                <td style={{ padding: "6px 10px", textAlign: "left" }}>
                                                                                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                                                                        {getLogoDoTime(t.nome) && <img src={getLogoDoTime(t.nome)} alt={t.nome} style={{ width: "18px", height: "18px", objectFit: "contain" }} />}
                                                                                        <span>{t.nome} {t.isUser && "⭐"}</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.j}</td>
                                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.v}</td>
                                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.e}</td>
                                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.d}</td>
                                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.gp}</td>
                                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.gs}</td>
                                                                                <td style={{ padding: "6px 4px", textAlign: "center" }}>{t.sg > 0 ? `+${t.sg}` : t.sg}</td>
                                                                                <td style={{ padding: "6px 4px", textAlign: "center", color: t.isUser ? corTextoUserAtual : corPrimariaAtual, fontWeight: "900" }}>{t.pts}</td>
                                                                            </tr>
                                                                        );
                                                                    })}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                ) : subAbaTotal === "preliminares" ? (
                                                    <div className="scrollable-area" style={{ maxHeight: "250px", border: "3px solid #111", background: "#FFF", padding: "12px", borderRadius: "6px" }}>
                                                        {torneioAtualAba.fasesPreliminares?.map((fase, fIdx) => (
                                                            <div key={fIdx} style={{ marginBottom: "10px" }}>
                                                                <div style={{ background: bgFaseAtual, color: txtFaseAtual, padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>
                                                                    {fase.faseNome}
                                                                </div>
                                                                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                                    {fase.jogos?.map((j, jIdx) => {
                                                                        const isUserMatch = (clubeAtual && (j.timeA.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim())) || j.timeA.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim() || j.timeB.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim();
                                                                        const showCountry = torneioAtualAba.nome.includes("CONCACAF") || torneioAtualAba.nome.includes("CONMEBOL") || torneioAtualAba.nome.includes("Champions League") || torneioAtualAba.nome.includes("Europa Cup");
                                                                        return (
                                                                            <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? corSecundariaAtual : "#F9F9F9", border: isUserMatch ? `2px solid ${corPrimariaAtual}` : "1px solid #DDD", padding: "8px 10px", fontSize: "12px", fontWeight: "bold" }}>
                                                                                <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", color: j.vencedor === j.timeA ? corTextoVencedorAtual : "#333" }}>
                                                                                    {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeA)}</span>}
                                                                                    <span style={{ textAlign: "right" }}>{j.timeA}</span>
                                                                                    {getLogoDoTime(j.timeA) && <img src={getLogoDoTime(j.timeA)} alt={j.timeA} style={{ width: "18px", height: "18px", objectFit: "contain" }} />}
                                                                                </div>
                                                                                <span style={{ background: bgFaseAtual, color: txtFaseAtual, padding: "2px 8px", borderRadius: "4px", margin: "0 10px", fontSize: "11px", fontWeight: "900", whiteSpace: "nowrap" }}>{j.placarTexto}</span>
                                                                                <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "6px", color: j.vencedor === j.timeB ? corTextoVencedorAtual : "#333" }}>
                                                                                    {getLogoDoTime(j.timeB) && <img src={getLogoDoTime(j.timeB)} alt={j.timeB} style={{ width: "18px", height: "18px", objectFit: "contain" }} />}
                                                                                    <span style={{ textAlign: "left" }}>{j.timeB}</span>
                                                                                    {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeB)}</span>}
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="scrollable-area" style={{ maxHeight: "250px", border: "3px solid #111", background: "#FFF", padding: "12px", borderRadius: "6px" }}>
                                                        {torneioAtualAba.fasesPlayoffs?.map((fase, fIdx) => (
                                                            <div key={fIdx} style={{ marginBottom: "10px" }}>
                                                                <div style={{ background: bgFaseAtual, color: txtFaseAtual, padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>
                                                                    {fase.faseNome}
                                                                </div>
                                                                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                                    {fase.jogos?.map((j, jIdx) => {
                                                                        const isUserMatch = (clubeAtual && (j.timeA.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim())) || j.timeA.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim() || j.timeB.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim();
                                                                        const showCountry = torneioAtualAba.nome.includes("CONCACAF") || torneioAtualAba.nome.includes("CONMEBOL") || torneioAtualAba.nome.includes("Champions League") || torneioAtualAba.nome.includes("Europa Cup");
                                                                        return (
                                                                            <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? corSecundariaAtual : "#F9F9F9", border: isUserMatch ? `2px solid ${corPrimariaAtual}` : "1px solid #DDD", padding: "8px 10px", fontSize: "12px", fontWeight: "bold" }}>
                                                                                <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", color: j.vencedor === j.timeA ? corTextoVencedorAtual : "#333" }}>
                                                                                    {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeA)}</span>}
                                                                                    <span style={{ textAlign: "right" }}>{j.timeA}</span>
                                                                                    {getLogoDoTime(j.timeA) && <img src={getLogoDoTime(j.timeA)} alt={j.timeA} style={{ width: "18px", height: "18px", objectFit: "contain" }} />}
                                                                                </div>
                                                                                <span style={{ background: bgFaseAtual, color: txtFaseAtual, padding: "2px 8px", borderRadius: "4px", margin: "0 10px", fontSize: "11px", fontWeight: "900", whiteSpace: "nowrap" }}>{j.placarTexto}</span>
                                                                                <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "6px", color: j.vencedor === j.timeB ? corTextoVencedorAtual : "#333" }}>
                                                                                    {getLogoDoTime(j.timeB) && <img src={getLogoDoTime(j.timeB)} alt={j.timeB} style={{ width: "18px", height: "18px", objectFit: "contain" }} />}
                                                                                    <span style={{ textAlign: "left" }}>{j.timeB}</span>
                                                                                    {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeB)}</span>}
                                                                                </div>
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

                                                {torneioAtualAba.paisSede && (torneioAtualAba.nome.includes("CONMEBOL") || torneioAtualAba.nome.includes("World Cup")) && (
                                                    <div style={{ background: "#111", color: "#FFF", padding: "6px", textAlign: "center", borderRadius: "6px", fontSize: "11px", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}>
                                                        📍 Sede:
                                                        <img src={`https://flagcdn.com/w20/${bandeirasPaises[torneioAtualAba.paisSede] || MAPA_SEDES[torneioAtualAba.paisSede]?.bandeira}.png`} alt="Bandeira Sede" style={{ height: "12px", border: "1px solid #444" }} />
                                                        <span style={{ color: "#00E5FF" }}>{MAPA_SEDES[torneioAtualAba.paisSede]?.nome || torneioAtualAba.paisSede}</span>
                                                    </div>
                                                )}

                                                {torneioAtualAba.participou === false && (
                                                    <div style={{ padding: "8px", textAlign: "center", fontWeight: "bold", background: "#FFE6E6", color: "#D50000", border: "2px solid #D50000", borderRadius: "6px", fontSize: "12px" }}>
                                                        {torneioAtualAba.nome === "FIFA Women's World Cup"
                                                            ? (torneioAtualAba.posicao?.includes("Convocada") ? "Você não foi convocada para defender sua seleção nesta Copa." : "Sua seleção não conseguiu se classificar para esta Copa.")
                                                            : "Seu time não se classificou para este torneio."}
                                                    </div>
                                                )}
                                                <div className="scrollable-area" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", maxHeight: "180px", overflowY: "auto", paddingRight: "4px" }}>
                                                    {torneioAtualAba.grupos.map(g => (
                                                        <div key={g.letra} style={{ border: "2px solid #111", background: "#FFF", borderRadius: "6px" }}>
                                                            <div style={{ background: bgFaseAtual, color: txtFaseAtual, padding: "4px", fontSize: "11px", textAlign: "center", fontWeight: "bold" }}>GRUPO {g.letra}</div>
                                                            <table className="tabela-historico" style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px" }}>
                                                                <thead>
                                                                    <tr style={{ background: "#EEE" }}>
                                                                        <th>#</th><th style={{ textAlign: "left" }}>Time</th><th>P</th><th>J</th><th>V</th><th>SG</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {g.tabela.map(t => (
                                                                        <tr key={t.nome} style={{ background: t.isUser ? corPrimariaAtual : "#FFF", color: t.isUser ? corTextoUserAtual : "#111", borderTop: "1px solid #EEE" }}>
                                                                            <td style={{ textAlign: "center", borderLeft: t.pos <= classificamPorGrupoAtual ? "3px solid #1C8144" : "none" }}>{t.pos}º</td>
                                                                            <td style={{ fontWeight: "bold" }}>
                                                                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                                                    {getLogoDoTime(t.nome) && (
                                                                                        <img
                                                                                            src={getLogoDoTime(t.nome)}
                                                                                            alt={t.nome}
                                                                                            style={{ width: "14px", height: "14px", objectFit: "contain" }}
                                                                                        />
                                                                                    )}
                                                                                    <span>
                                                                                        {t.nome.substring(0, 3).toUpperCase()}
                                                                                        <span style={{ fontSize: "8px", color: t.isUser ? corTextoUserAtual : "#888", marginLeft: "3px" }}>
                                                                                            {getLigaDoTime(t.nome)}
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
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
                                                    {torneioAtualAba.fasesPlayoffs?.map((fase, fIdx) => (
                                                        <div key={fIdx} style={{ marginBottom: "8px" }}>
                                                            <div style={{ background: bgFaseAtual, color: txtFaseAtual, padding: "3px 6px", fontSize: "10px", fontWeight: "900", fontFamily: "Impact, sans-serif", marginBottom: "4px" }}>
                                                                {fase.faseNome}
                                                            </div>
                                                            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                                                {fase.jogos?.map((j, jIdx) => {
                                                                    const isUserMatch = (clubeAtual && (j.timeA.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim())) || j.timeA.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim() || j.timeB.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim();
                                                                    const showCountry = torneioAtualAba.nome.includes("CONCACAF") || torneioAtualAba.nome.includes("CONMEBOL") || torneioAtualAba.nome.includes("Champions League") || torneioAtualAba.nome.includes("Europa Cup");

                                                                    return (
                                                                        <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? corSecundariaAtual : "#F9F9F9", border: isUserMatch ? `2px solid ${corPrimariaAtual}` : "1px solid #DDD", padding: "6px 10px", fontSize: "11px", fontWeight: "bold" }}>

                                                                            <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", color: j.vencedor === j.timeA ? corTextoVencedorAtual : "#333" }}>
                                                                                {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeA)}</span>}
                                                                                <span style={{ textAlign: "right" }}>{j.timeA}</span>
                                                                                {getLogoDoTime(j.timeA) && <img src={getLogoDoTime(j.timeA)} alt={j.timeA} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                            </div>

                                                                            <span style={{ background: bgFaseAtual, color: txtFaseAtual, padding: "2px 8px", borderRadius: "4px", margin: "0 10px", fontSize: "10px", fontWeight: "900", whiteSpace: "nowrap" }}>
                                                                                {j.placarTexto}
                                                                            </span>

                                                                            <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "6px", color: j.vencedor === j.timeB ? corTextoVencedorAtual : "#333" }}>
                                                                                {getLogoDoTime(j.timeB) && <img src={getLogoDoTime(j.timeB)} alt={j.timeB} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                                <span style={{ textAlign: "left" }}>{j.timeB}</span>
                                                                                {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeB)}</span>}
                                                                            </div>

                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                {torneioAtualAba.participou === false && (
                                                    <div style={{ padding: "8px", textAlign: "center", fontWeight: "bold", background: "#FFE6E6", color: "#D50000", border: "2px solid #D50000", borderRadius: "6px", fontSize: "12px" }}>
                                                        Seu time não se classificou para este torneio.
                                                    </div>
                                                )}
                                                <div className="scrollable-area" style={{ maxHeight: "250px", border: "3px solid #111", background: "#FFF", padding: "12px", borderRadius: "6px", marginBottom: "12px" }}>
                                                    {(torneioAtualAba.fases || torneioAtualAba.fasesPlayoffs)?.map((fase, fIdx) => (
                                                        <div key={fIdx} style={{ marginBottom: "12px" }}>
                                                            <div style={{ background: bgFaseAtual, color: txtFaseAtual, padding: "4px 8px", fontSize: "11px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "1px", marginBottom: "6px" }}>
                                                                {fase.faseNome}
                                                            </div>
                                                            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                                                {fase.jogos.map((j, jIdx) => {
                                                                    const isUserMatch = (clubeAtual && (j.timeA.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim() || j.timeB.toLowerCase().trim() === clubeAtual.nome.toLowerCase().trim())) || j.timeA.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim() || j.timeB.toLowerCase().trim() === jogadora.paisSelecionado.toLowerCase().trim();
                                                                    const showCountry = torneioAtualAba.nome.includes("CONCACAF") || torneioAtualAba.nome.includes("CONMEBOL") || torneioAtualAba.nome.includes("Champions League") || torneioAtualAba.nome.includes("Europa Cup");

                                                                    return (
                                                                        <div key={jIdx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: isUserMatch ? corSecundariaAtual : "#F9F9F9", border: isUserMatch ? `2px solid ${corPrimariaAtual}` : "1px solid #DDD", padding: "6px 10px", fontSize: "11px", fontWeight: "bold" }}>

                                                                            <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px", color: j.vencedor === j.timeA ? corTextoVencedorAtual : "#333" }}>
                                                                                {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeA)}</span>}
                                                                                <span style={{ textAlign: "right" }}>{j.timeA}</span>
                                                                                {getLogoDoTime(j.timeA) && <img src={getLogoDoTime(j.timeA)} alt={j.timeA} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                            </div>

                                                                            <span style={{ background: bgFaseAtual, color: txtFaseAtual, padding: "2px 8px", borderRadius: "4px", margin: "0 10px", fontSize: "10px", fontWeight: "900", whiteSpace: "nowrap" }}>
                                                                                {j.placarTexto}
                                                                            </span>

                                                                            <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "6px", color: j.vencedor === j.timeB ? corTextoVencedorAtual : "#333" }}>
                                                                                {getLogoDoTime(j.timeB) && <img src={getLogoDoTime(j.timeB)} alt={j.timeB} style={{ width: "16px", height: "16px", objectFit: "contain" }} />}
                                                                                <span style={{ textAlign: "left" }}>{j.timeB}</span>
                                                                                {showCountry && <span style={{ fontSize: "9px", color: "#888", fontWeight: "normal" }}>{getLigaDoTime(j.timeB)}</span>}
                                                                            </div>

                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <button
                                            style={{ background: "#00E5FF", color: "#111", padding: "10px", border: "3px solid #111", boxShadow: "3px 3px 0px #111", fontWeight: "900", fontFamily: "Impact, sans-serif", fontSize: "15px", cursor: "pointer", letterSpacing: "1px", marginTop: "10px" }}
                                            onClick={() => setFaseAtual("RENOVAR_CONTRATO")}
                                        >
                                            CONTINUAR PARA O MERCADO DE TRANSFERÊNCIAS ➔
                                        </button>
                                    </div>
                                )}

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
                                                    ? (opcoesClubes[0]?.nome === "AFC Richmond"
                                                        ? <span style={{ fontWeight: "900", color: "#C4122E" }}>Oi {jogadora?.nome?.split(" ")[0]}, que bom ver você de novo! O AFC Richmond te espera.</span>
                                                        : "Onde você pretende dar os primeiros passos na sua carreira profissional?")
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
                                        {idade >= 35 && (
                                            <button
                                                className="anime-up"
                                                style={{
                                                    background: "#111",
                                                    color: "#FFD700",
                                                    padding: "12px",
                                                    border: "3px solid #FFD700",
                                                    boxShadow: "4px 4px 0px #FFD700",
                                                    fontWeight: "900",
                                                    fontFamily: "Impact, sans-serif",
                                                    fontSize: "16px",
                                                    cursor: "pointer",
                                                    letterSpacing: "1px",
                                                    marginTop: "20px",
                                                    textTransform: "uppercase",
                                                    transition: "transform 0.1s"
                                                }}
                                                onMouseDown={(e) => e.currentTarget.style.transform = "translate(2px, 2px)"}
                                                onMouseUp={(e) => e.currentTarget.style.transform = "translate(0px, 0px)"}
                                                onClick={() => setMostrarPopUpAposentadoria(true)}
                                            >
                                                👟 APOSENTAR-SE DOS GRAMADOS
                                            </button>
                                        )}
                                        {/* FIM DO BOTÃO DE APOSENTADORIA */}

                                    </div>
                                )}

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

                                {faseAtual === "FINAL_TACA" && (() => {
                                    let nomeTorneioFinal = "Campeonato";

                                    if (torneioPenaltiAlvo === "liga") {
                                        if (clubeAtual?.liga === "ARG") nomeTorneioFinal = "Campeonato Femenino YPF";
                                        else if (clubeAtual?.liga === "COL") nomeTorneioFinal = "Liga Femenina BetPlay";
                                        else if (clubeAtual?.liga === "CHI") nomeTorneioFinal = "Liga Femenina de Chile";
                                        else if (clubeAtual?.liga === "USA") nomeTorneioFinal = "NWSL";
                                        else if (clubeAtual?.liga === "MEX") nomeTorneioFinal = "Liga Femenil BBVA";
                                        else if (clubeAtual?.liga === "CAN") nomeTorneioFinal = "NSL";
                                        else if (clubeAtual?.liga === "FRA") nomeTorneioFinal = "Arkema Première Ligue";
                                        else nomeTorneioFinal = clubeAtual?.div || "Brasileirão Feminino";
                                    } else if (torneioPenaltiAlvo === "copa") {
                                        if (clubeAtual?.liga === "USA") nomeTorneioFinal = "NWSL Challenge Cup";
                                        else if (clubeAtual?.liga === "CAN") nomeTorneioFinal = "W Canadian Championship";
                                        else if (clubeAtual?.liga === "ESP") nomeTorneioFinal = "Copa de La Reina";
                                        else if (clubeAtual?.liga === "ENG") nomeTorneioFinal = "Adobe Women's FA Cup";
                                        else if (clubeAtual?.liga === "ITA") nomeTorneioFinal = "Coppa Italia Women";
                                        else if (clubeAtual?.liga === "ALE") nomeTorneioFinal = "DFB-Pokal Frauen";
                                        else nomeTorneioFinal = "Copa do Brasil Feminina";
                                    } else if (torneioPenaltiAlvo === "copa2") {
                                        if (clubeAtual?.liga === "ENG") nomeTorneioFinal = "Subway Players Cup";
                                        else if (clubeAtual?.liga === "ITA") nomeTorneioFinal = "Serie A Women's Cup";
                                        else if (clubeAtual?.liga === "ALE") nomeTorneioFinal = "DFB-Supercup Frauen";
                                        else if (clubeAtual?.liga === "BRA") nomeTorneioFinal = "Supercopa do Brasil Feminina";
                                        else if (clubeAtual?.liga === "ESP") nomeTorneioFinal = "Supercopa de España Femenina";
                                    } else if (torneioPenaltiAlvo === "fifa") {
                                        const anoAtual = historicoMundo.anoAtual || 2026;
                                        const eAnoDeMundialQuadrienal = (anoAtual >= 2028) && ((anoAtual - 2028) % 4 === 0);

                                        nomeTorneioFinal = eAnoDeMundialQuadrienal
                                            ? "FIFA Women's Club World Cup"
                                            : "FIFA Women's Champions Cup";
                                    } else { // TORNEIO CONTINENTAL
                                        if (["USA", "MEX", "CAN"].includes(clubeAtual?.liga)) {
                                            nomeTorneioFinal = "CONCACAF W Champions Cup";
                                        } else if (["ENG", "ESP", "FRA", "GER", "ALE", "ITA"].includes(clubeAtual?.liga) || clubeAtual?.div === "UEFA") {
                                            // Verifica se o clube se qualificou para a UWCL no histórico
                                            const estaNaUWCL = historicoMundo.classificadosContinentalESP?.includes(clubeAtual?.nome) ||
                                                historicoMundo.classificadosContinentalENG?.includes(clubeAtual?.nome) ||
                                                historicoMundo.classificadosContinentalFRA?.includes(clubeAtual?.nome) ||
                                                historicoMundo.classificadosContinentalALE?.includes(clubeAtual?.nome) ||
                                                historicoMundo.classificadosContinentalITA?.includes(clubeAtual?.nome) ||
                                                clubeAtual?.div === "UEFA";

                                            nomeTorneioFinal = estaNaUWCL ? "UEFA Women's Champions League" : "UEFA Women's Europa Cup";
                                        } else {
                                            nomeTorneioFinal = "Libertadores da América";
                                        }
                                    }

                                    return (
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <div>
                                                <h3 style={{ ...styles.tituloAcao, fontSize: "22px" }}>⚡ MOMENTO DECISIVO!</h3>
                                                <p style={{ ...styles.descAcao, marginBottom: "15px" }}>
                                                    O <strong>{clubeAtual?.nome}</strong> está nas fases eliminatórias da <strong>{nomeTorneioFinal}</strong>! Uma cobrança de pênalti crucial pode definir se vocês levantarão a taça ou se voltarão para casa mais cedo.
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
                                                            <span style={{ fontSize: "13px" }}>→ +0 OVR e Eliminada</span>
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
                                                            <span style={{ fontSize: "13px" }}>→ +0 OVR e Eliminada</span>
                                                            <span style={styles.chanceBadge}>30% Falha</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        </div>

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
                                                    <div style={{ fontWeight: "bold", color: ano.campea ? "#00E5FF" : "#111", display: "flex", alignItems: "center", gap: "4px" }}>
                                                        {ano.clubeNome} {ano.campea && "🏆"}
                                                    </div>
                                                    <div style={{ fontSize: "11px", color: "#1C8144", fontWeight: "bold", marginTop: "2px" }}>
                                                        Ver detalhes da temporada 🔍
                                                    </div>
                                                </td>
                                                <td style={styles.tdRight}>
                                                    <span style={{ ...styles.ovrMiniBadge, background: getCorOvrFIFA(ano.ovr).bg, color: getCorOvrFIFA(ano.ovr).text }}>
                                                        {ano.ovr}
                                                    </span>
                                                </td>
                                                <td style={styles.tdRight}>{ano.jogos}</td>
                                                <td style={styles.tdRight}>{ano.golos}</td>
                                                <td style={styles.tdRight}>{ano.ast}</td>
                                            </tr>
                                        ))}

                                        {idade < IDADE_MAXIMA && (
                                            <tr style={{ background: "#F4F0E6", color: "#111", fontWeight: "bold" }}>
                                                <td style={styles.tdLeft}>{idade}</td>
                                                <td style={styles.tdLeft}>{clubeAtual ? clubeAtual.nome : "❓ Escolhendo..."}</td>
                                                <td style={styles.tdRight}>
                                                    <span style={{ ...styles.ovrMiniBadge, background: getCorOvrFIFA(ovr).bg, color: getCorOvrFIFA(ovr).text }}>
                                                        {ovr}
                                                    </span>
                                                </td>
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
    ovrBadge: { background: "#00E5FF", color: "#111", width: "55px", height: "55px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "3px solid #111", transform: "rotate(-3deg)" },
    ovrLabel: { fontSize: "10px", fontWeight: "900" },
    ovrValue: { fontSize: "28px", fontFamily: "Impact, sans-serif", lineHeight: "1" },
    infoBasica: { flex: 1, padding: "0 15px" },
    posBadge: { fontSize: "12px", fontWeight: "bold", padding: "3px 8px", borderRadius: "4px" },
    clubeInfo: { fontSize: "16px", fontWeight: "900", color: "#444", margin: "0" },
    idadeValor: { textAlign: "right", display: "flex", flexDirection: "column", gap: "3px" },
    labelPequena: { fontSize: "11px", fontWeight: "bold", color: "#777", display: "flex", flexDirection: "column", alignItems: "flex-end" },
    vitrineContainer: { textAlign: "center", background: "#111", padding: "8px" },
    statsRowEsquerda: { display: "flex", justifyContent: "space-around", background: "#00E5FF", color: "#111", padding: "12px 10px", border: "3px solid #111", flexShrink: 0, marginBottom: "15px" },
    statItemEsquerda: { display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" },
    areaAcao: { background: "#F4F0E6", border: "3px solid #111", boxShadow: "4px 4px 0px #00E5FF", padding: "18px", display: "flex", flexDirection: "column", flex: 1, overflowY: "auto", maxHeight: "100%" },
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
    ovrMiniBadge: { background: "#00E5FF", color: "#111", padding: "3px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "900" },
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
    bannerCampeao: { background: "#FFD700", border: "4px solid #111", padding: "25px 50px", textAlign: "center", color: "#111", boxShadow: "8px 8px 0px #111" },
    aposentadoriaBox: { flex: 1, background: "#111", border: "3px solid #111", display: "flex", flexDirection: "column", alignItems: "center", padding: "25px", gap: "18px" },
    aposentadoriaHeader: { width: "100%", maxWidth: "850px", display: "flex", flexDirection: "column", padding: "10px 0" },
    ovrBadgeFinal: { background: "#111", color: "#FFF", width: "55px", height: "55px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "3px solid #00E5FF", borderRadius: "50%" },
    gridClubesFinal: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "12px", width: "100%", maxWidth: "850px" },
    cardClubeFinal: { border: "2px solid #111", borderTopWidth: "0px", padding: "14px 12px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", borderRadius: "6px" },
    escudoClube: { width: "45px", height: "45px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", color: "#FFF", fontWeight: "900", border: "2px solid #111", fontSize: "14px", fontFamily: "Impact, sans-serif" }
};