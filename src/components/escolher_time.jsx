import React, { useState, useRef, useEffect } from "react";
import { selecoes } from "../dados/selecoes";
import ResultadoCopa from "./resultado_copa";

const todasFormacoes = {
    "4-3-3": [{ id: "PE1", label: "PE", top: "15%", left: "20%" }, { id: "ATA1", label: "ATA", top: "10%", left: "50%" }, { id: "PD1", label: "PD", top: "15%", left: "80%" }, { id: "MC1", label: "MC", top: "40%", left: "30%" }, { id: "VOL1", label: "VOL", top: "45%", left: "50%" }, { id: "MEI1", label: "MEI", top: "40%", left: "70%" }, { id: "LE1", label: "LE", top: "70%", left: "15%" }, { id: "ZAG1", label: "ZAG", top: "75%", left: "35%" }, { id: "ZAG2", label: "ZAG", top: "75%", left: "65%" }, { id: "LD1", label: "LD", top: "70%", left: "85%" }, { id: "GOL", label: "GOL", top: "88%", left: "50%" }],
    "4-4-2": [{ id: "ATA1", label: "ATA", top: "10%", left: "35%" }, { id: "ATA2", label: "ATA", top: "10%", left: "65%" }, { id: "PE1", label: "PE", top: "40%", left: "15%" }, { id: "MC1", label: "MC", top: "45%", left: "35%" }, { id: "MC2", label: "MC", top: "45%", left: "65%" }, { id: "PD1", label: "PD", top: "40%", left: "85%" }, { id: "LE1", label: "LE", top: "70%", left: "15%" }, { id: "ZAG1", label: "ZAG", top: "75%", left: "35%" }, { id: "ZAG2", label: "ZAG", top: "75%", left: "65%" }, { id: "LD1", label: "LD", top: "70%", left: "85%" }, { id: "GOL", label: "GOL", top: "88%", left: "50%" }],
    "4-2-3-1": [{ id: "ATA1", label: "ATA", top: "10%", left: "50%" }, { id: "PE1", label: "PE", top: "25%", left: "20%" }, { id: "MEI1", label: "MEI", top: "25%", left: "50%" }, { id: "PD1", label: "PD", top: "25%", left: "80%" }, { id: "VOL1", label: "VOL", top: "45%", left: "35%" }, { id: "VOL2", label: "VOL", top: "45%", left: "65%" }, { id: "LE1", label: "LE", top: "70%", left: "15%" }, { id: "ZAG1", label: "ZAG", top: "75%", left: "35%" }, { id: "ZAG2", label: "ZAG", top: "75%", left: "65%" }, { id: "LD1", label: "LD", top: "70%", left: "85%" }, { id: "GOL", label: "GOL", top: "88%", left: "50%" }],
    "4-2-4": [{ id: "PE1", label: "PE", top: "15%", left: "15%" }, { id: "ATA1", label: "ATA", top: "10%", left: "35%" }, { id: "ATA2", label: "ATA", top: "10%", left: "65%" }, { id: "PD1", label: "PD", top: "15%", left: "85%" }, { id: "MC1", label: "MC", top: "45%", left: "35%" }, { id: "MC2", label: "MC", top: "45%", left: "65%" }, { id: "LE1", label: "LE", top: "70%", left: "15%" }, { id: "ZAG1", label: "ZAG", top: "75%", left: "35%" }, { id: "ZAG2", label: "ZAG", top: "75%", left: "65%" }, { id: "LD1", label: "LD", top: "70%", left: "85%" }, { id: "GOL", label: "GOL", top: "88%", left: "50%" }],
    "3-5-2": [{ id: "ATA1", label: "ATA", top: "10%", left: "35%" }, { id: "ATA2", label: "ATA", top: "10%", left: "65%" }, { id: "PE1", label: "PE", top: "35%", left: "15%" }, { id: "MC1", label: "MC", top: "40%", left: "35%" }, { id: "VOL1", label: "VOL", top: "50%", left: "50%" }, { id: "MC2", label: "MC", top: "40%", left: "65%" }, { id: "PD1", label: "PD", top: "35%", left: "85%" }, { id: "ZAG1", label: "ZAG", top: "75%", left: "25%" }, { id: "ZAG2", label: "ZAG", top: "75%", left: "50%" }, { id: "ZAG3", label: "ZAG", top: "75%", left: "75%" }, { id: "GOL", label: "GOL", top: "88%", left: "50%" }],
    "5-3-2": [{ id: "ATA1", label: "ATA", top: "10%", left: "35%" }, { id: "ATA2", label: "ATA", top: "10%", left: "65%" }, { id: "MC1", label: "MC", top: "40%", left: "30%" }, { id: "VOL1", label: "VOL", top: "45%", left: "50%" }, { id: "MC2", label: "MC", top: "40%", left: "70%" }, { id: "LE1", label: "LE", top: "70%", left: "10%" }, { id: "ZAG1", label: "ZAG", top: "75%", left: "30%" }, { id: "ZAG2", label: "ZAG", top: "75%", left: "50%" }, { id: "ZAG3", label: "ZAG", top: "75%", left: "70%" }, { id: "LD1", label: "LD", top: "70%", left: "90%" }, { id: "GOL", label: "GOL", top: "88%", left: "50%" }],
    "4-5-1": [{ id: "ATA1", label: "ATA", top: "10%", left: "50%" }, { id: "PE1", label: "PE", top: "35%", left: "20%" }, { id: "MC1", label: "MC", top: "40%", left: "35%" }, { id: "VOL1", label: "VOL", top: "50%", left: "50%" }, { id: "MC2", label: "MC", top: "40%", left: "65%" }, { id: "PD1", label: "PD", top: "35%", left: "80%" }, { id: "LE1", label: "LE", top: "70%", left: "15%" }, { id: "ZAG1", label: "ZAG", top: "75%", left: "35%" }, { id: "ZAG2", label: "ZAG", top: "75%", left: "65%" }, { id: "LD1", label: "LD", top: "70%", left: "85%" }, { id: "GOL", label: "GOL", top: "88%", left: "50%" }],
    "3-4-3": [{ id: "PE1", label: "PE", top: "15%", left: "25%" }, { id: "ATA1", label: "ATA", top: "10%", left: "50%" }, { id: "PD1", label: "PD", top: "15%", left: "75%" }, { id: "LE1", label: "LE", top: "40%", left: "15%" }, { id: "MC1", label: "MC", top: "45%", left: "35%" }, { id: "VOL1", label: "VOL", top: "45%", left: "65%" }, { id: "LD1", label: "LD", top: "40%", left: "85%" }, { id: "ZAG1", label: "ZAG", top: "75%", left: "25%" }, { id: "ZAG2", label: "ZAG", top: "75%", left: "50%" }, { id: "ZAG3", label: "ZAG", top: "75%", left: "75%" }, { id: "GOL", label: "GOL", top: "88%", left: "50%" }]
};

const obterCorPosicao = (pos) => {
    if (pos === "GOL") return { bg: "#111", text: "#FFD700" };
    if (["ZAG", "LE", "LD"].includes(pos)) return { bg: "#111", text: "#0011ff" };
    if (["VOL", "MC", "MEI", "MD", "ME"].includes(pos)) return { bg: "#111", text: "#1cca1c" };
    if (["ATA", "PE", "PD"].includes(pos)) return { bg: "#111", text: "#e91010" };
    return { bg: "#111", text: "#777" };
};

const calcularForcaOponente = (timeData) => {
    const todas = [
        ...(timeData.goleiras || []), 
        ...(timeData.defensoras || []), 
        ...(timeData.meio_campo || []), 
        ...(timeData.atacantes || [])
    ].sort((a, b) => b.overall - a.overall).slice(0, 11);
    
    if (todas.length === 0) return 75; 
    return Math.round(todas.reduce((acc, j) => acc + j.overall, 0) / todas.length);
};

export default function EscolherTime() {
    const ObjectKeysFormacoes = Object.keys(todasFormacoes);
    const [formacaoEscolhida, setFormacaoEscolhida] = useState("4-3-3");
    
    // NOVO ESTADO: Guarda o nome da equipe
    const [nomeTime, setNomeTime] = useState("SUA EQUIPE");

    const [dificuldade, setDificuldade] = useState("classico");
    const [pulosRestantes, setPulosRestantes] = useState(3);

    const [estagio, setEstagio] = useState("config");
    const [selecaoSorteada, setSelecaoSorteada] = useState(null);
    const [anoAnimacao, setAnoAnimacao] = useState(null);
    const [elenco, setElenco] = useState([]);
    const [ultimaChaveSorteada, setUltimaChaveSorteada] = useState(null);
    const [escolhaDaRodada, setEscolhaDaRodada] = useState(null); 
    
    const [isRolling, setIsRolling] = useState(false);
    const [jogadoraSelecionada, setJogadoraSelecionada] = useState(null);
    const [escalacao, setEscalacao] = useState({});
    const [partidasSimuladas, setPartidasSimuladas] = useState([]);

    const listRef = useRef(null);
    const campoRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = 0;
        }
    }, [elenco, isRolling, escolhaDaRodada]);

    const animacoesCss = `
      @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes popIn {
          0% { opacity: 0.5; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
      }
      .anime-up {
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; 
      }
      .pop-in {
          animation: popIn 0.3s ease-out forwards;
      }
      .delay-1 { animation-delay: 0.15s; }
      .delay-2 { animation-delay: 0.30s; }
      .delay-3 { animation-delay: 0.45s; }

      @media (max-width: 768px) {
        .app-page { padding: 15px 12px !important; }
        .app-header { flex-direction: column !important; gap: 12px !important; margin-bottom: 20px !important; text-align: center !important; }
        .app-logo { font-size: 32px !important; }
        .app-container { flex-direction: column !important; gap: 20px !important; align-items: center !important; }
        .col-left, .col-center, .col-right { width: 100% !important; max-width: 100% !important; }
        .col-left { order: 1; }
        .col-center { order: 2; }
        .col-right { order: 3; }
        .formacao-grid { grid-template-columns: repeat(4, 1fr) !important; }
        .soccer-field { height: 480px !important; }
        .player-circle-node { width: 24px !important; height: 24px !important; font-size: 11px !important; }
        .player-plaque-node { padding: 1px 4px !important; gap: 3px !important; }
        .player-name-node { font-size: 8px !important; }
        .player-ovr-node { font-size: 8px !important; padding: 0px 2px !important; }
        .slot-empty-node { width: 32px !important; height: 32px !important; font-size: 9px !important; }
        .slot-highlight-node { width: 36px !important; height: 36px !important; font-size: 10px !important; }
        .score-list-box { max-height: 250px !important; overflow-y: auto !important; background: #fff !important; border: 1px solid #EAE5D9 !important; padding: 10px !important; }
      }
    `;

    const jogadorasEmCampo = Object.values(escalacao).filter(j => j !== null);
    const isTimeCompleto = jogadorasEmCampo.length === todasFormacoes[formacaoEscolhida].length && estagio === "montagem";

    const mediaOverallReal = jogadorasEmCampo.length > 0
        ? Math.round(jogadorasEmCampo.reduce((acc, j) => acc + j.overall, 0) / jogadorasEmCampo.length)
        : 0;

    const mostrarOvr = (ovrVal) => {
        if (dificuldade === "almanaque" && !isTimeCompleto) return "??";
        return ovrVal;
    };

    const sortearSelecao = () => {
        if (isRolling) return;

        setEscalacao(prev => {
            const nova = { ...prev };
            Object.keys(nova).forEach(key => {
                if (nova[key]) {
                    nova[key] = { ...nova[key], isCurrentRoundPick: false };
                }
            });
            return nova;
        });

        const chaves = Object.keys(selecoes);
        let chavesDisponiveis = chaves;

        if (ultimaChaveSorteada && chaves.length > 1) {
            chavesDisponiveis = chaves.filter((chave) => chave !== ultimaChaveSorteada);
        }

        const chaveFinal = chavesDisponiveis[Math.floor(Math.random() * chavesDisponiveis.length)];
        const timeFinal = selecoes[chaveFinal];

        if (estagio === "config") {
            const escalacaoInicial = {};
            todasFormacoes[formacaoEscolhida].forEach(slot => {
                escalacaoInicial[slot.id] = null;
            });
            setEscalacao(escalacaoInicial);
            setPulosRestantes(dificuldade === "classico" ? 3 : 1);
            
            // Tratamento caso o usuário não digite nada no input
            if(nomeTime.trim() === "") setNomeTime("SUA EQUIPE");
        }

        setEstagio("montagem");
        setIsRolling(true);
        setEscolhaDaRodada(null); 
        setJogadoraSelecionada(null);
        setElenco([]);

        let counter = 0;
        const interval = setInterval(() => {
            const randomFlashKey = chaves[Math.floor(Math.random() * chaves.length)];
            const timeFlash = selecoes[randomFlashKey];
            setSelecaoSorteada(timeFlash);
            setAnoAnimacao(timeFlash.ano);
            counter++;

            if (counter > 15) {
                clearInterval(interval);
                setSelecaoSorteada(timeFinal);
                setAnoAnimacao(timeFinal.ano);
                setUltimaChaveSorteada(chaveFinal);

                const ordenarOvr = (arr) => [...arr].sort((a, b) => b.overall - a.overall);

                const formatarJogadoras = (arr) => arr.map(j => ({
                    ...j,
                    nacao: timeFinal.nome,
                    sigla: timeFinal.nome.substring(0, 3).toUpperCase(),
                    ano: timeFinal.ano
                }));

                const todasJogadoras = [
                    ...ordenarOvr(formatarJogadoras(timeFinal.goleiras)),
                    ...ordenarOvr(formatarJogadoras(timeFinal.defensoras)),
                    ...ordenarOvr(formatarJogadoras(timeFinal.meio_campo)),
                    ...ordenarOvr(formatarJogadoras(timeFinal.atacantes))
                ];

                setElenco(todasJogadoras);
                setIsRolling(false);
            }
        }, 80);
    };

    const usarPulo = (tipo) => {
        if (pulosRestantes <= 0 || isRolling || escolhaDaRodada) return;

        let opcoes = [];
        const todasSelecoesArray = Object.values(selecoes);

        if (tipo === "selecao") {
            opcoes = todasSelecoesArray.filter(s => s.ano === selecaoSorteada.ano && s.nome !== selecaoSorteada.nome);
        } else if (tipo === "copa") {
            opcoes = todasSelecoesArray.filter(s => s.nome === selecaoSorteada.nome && s.ano !== selecaoSorteada.ano);
        }

        if (opcoes.length === 0) {
            alert(`Não há outras opções de ${tipo === "selecao" ? "seleções nesta mesma Copa" : "Copas para esta seleção"} no banco de dados ainda!`);
            return;
        }

        const novaSelecao = opcoes[Math.floor(Math.random() * opcoes.length)];
        const novaChave = Object.keys(selecoes).find(key => selecoes[key].nome === novaSelecao.nome && selecoes[key].ano === novaSelecao.ano);

        setPulosRestantes(prev => prev - 1);
        setJogadoraSelecionada(null);
        setEscolhaDaRodada(null); 
        setIsRolling(true);
        setElenco([]);

        let chavesParaAnimacao = Object.keys(selecoes);
        if (tipo === "selecao") {
            chavesParaAnimacao = chavesParaAnimacao.filter(k => selecoes[k].ano === selecaoSorteada.ano);
        } else if (tipo === "copa") {
            chavesParaAnimacao = chavesParaAnimacao.filter(k => selecoes[k].nome === selecaoSorteada.nome);
        }

        let counter = 0;

        const interval = setInterval(() => {
            const randomFlashKey = chavesParaAnimacao[Math.floor(Math.random() * chavesParaAnimacao.length)];
            const timeFlash = selecoes[randomFlashKey];
            setSelecaoSorteada(timeFlash);
            setAnoAnimacao(timeFlash.ano);
            counter++;

            if (counter > 15) {
                clearInterval(interval);
                setSelecaoSorteada(novaSelecao);
                setAnoAnimacao(novaSelecao.ano);
                setUltimaChaveSorteada(novaChave);

                const ordenarOvr = (arr) => [...arr].sort((a, b) => b.overall - a.overall);
                const formatarJogadoras = (arr) => arr.map(j => ({
                    ...j,
                    nacao: novaSelecao.nome,
                    sigla: novaSelecao.nome.substring(0, 3).toUpperCase(),
                    ano: novaSelecao.ano
                }));

                const todasJogadoras = [
                    ...ordenarOvr(formatarJogadoras(novaSelecao.goleiras)),
                    ...ordenarOvr(formatarJogadoras(novaSelecao.defensoras)),
                    ...ordenarOvr(formatarJogadoras(novaSelecao.meio_campo)),
                    ...ordenarOvr(formatarJogadoras(novaSelecao.atacantes))
                ];

                setElenco(todasJogadoras);
                setIsRolling(false);
            }
        }, 80);
    };

    const selecionarDaLista = (jogadora) => {
        if (isRolling) return;
        if (jogadoraSelecionada && !jogadoraSelecionada.isCurrentRoundPick) return;
        if (escolhaDaRodada && jogadora.nome !== escolhaDaRodada) return;

        const jaNoTime = Object.values(escalacao).some(j => j?.nome === jogadora.nome);
        if (jaNoTime) return;

        const posicoesDela = jogadora.posicao.split("/").map(p => p.trim());
        const formacaoAtual = todasFormacoes[formacaoEscolhida];

        const temSlotDisponivel = formacaoAtual.some(slot => {
            if (!posicoesDela.includes(slot.label)) return false;
            const jogNoSlot = escalacao[slot.id];
            return !jogNoSlot || jogNoSlot.isCurrentRoundPick;
        });

        if (!temSlotDisponivel) return;

        if (jogadoraSelecionada?.nome === jogadora.nome && jogadoraSelecionada.isCurrentRoundPick) {
            setJogadoraSelecionada(null);
        } else {
            setJogadoraSelecionada({ ...jogadora, isCurrentRoundPick: true });

            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    campoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 80);
            }
        }
    };

    const handleSlotClick = (slot) => {
        const jogadoraNoSlot = escalacao[slot.id];

        if (jogadoraSelecionada) {
            const posicoesDela = jogadoraSelecionada.posicao.split("/").map(p => p.trim());
            if (!posicoesDela.includes(slot.label)) return;

            if (jogadoraSelecionada.originalSlotId === slot.id) {
                setEscalacao(prev => ({
                    ...prev,
                    [slot.id]: { ...jogadoraSelecionada, originalSlotId: undefined }
                }));
                if (jogadoraSelecionada.isCurrentRoundPick) {
                    setEscolhaDaRodada(jogadoraSelecionada.nome);
                }
                setJogadoraSelecionada(null);
                return;
            }

            const isNovaSobrepondoAntiga = jogadoraSelecionada.isCurrentRoundPick && jogadoraNoSlot && !jogadoraNoSlot.isCurrentRoundPick;
            if (isNovaSobrepondoAntiga) return;

            if (jogadoraNoSlot && jogadoraSelecionada.originalSlotId) {
                const posicoesDaOutra = jogadoraNoSlot.posicao.split("/").map(p => p.trim());
                const slotOriginal = todasFormacoes[formacaoEscolhida].find(s => s.id === jogadoraSelecionada.originalSlotId);

                if (slotOriginal && posicoesDaOutra.includes(slotOriginal.label)) {
                    setEscalacao(prev => ({
                        ...prev,
                        [slot.id]: { ...jogadoraSelecionada, originalSlotId: undefined },
                        [slotOriginal.id]: { ...jogadoraNoSlot, originalSlotId: undefined }
                    }));
                    setJogadoraSelecionada(null);
                    return;
                } else {
                    return;
                }
            }

            if (!jogadoraSelecionada.originalSlotId) {
                setEscalacao(prev => ({ ...prev, [slot.id]: { ...jogadoraSelecionada, originalSlotId: undefined } }));
                setEscolhaDaRodada(jogadoraSelecionada.nome);
                setJogadoraSelecionada(null);
            } else {
                if (!jogadoraNoSlot) {
                    setEscalacao(prev => ({
                        ...prev,
                        [slot.id]: { ...jogadoraSelecionada, originalSlotId: undefined },
                        [jogadoraSelecionada.originalSlotId]: null
                    }));
                    setJogadoraSelecionada(null);
                }
            }
        }
        else if (jogadoraNoSlot) {
            setJogadoraSelecionada({ ...jogadoraNoSlot, originalSlotId: slot.id });
            setEscalacao(prev => ({ ...prev, [slot.id]: null }));

            if (jogadoraNoSlot.isCurrentRoundPick) {
                setEscolhaDaRodada(null);
            }
        }
    };

    const iniciarTorneio = () => {
        const fases = ["FASE DE GRUPOS", "FASE DE GRUPOS", "FASE DE GRUPOS", "QUARTAS DE FINAL", "SEMIFINAL", "FINAL"];
        let resultados = [];
        let timeEliminado = false;
        let oponentesDisponiveis = Object.keys(selecoes);

        for (let i = 0; i < fases.length; i++) {
            if (timeEliminado) break;

            if (oponentesDisponiveis.length === 0) oponentesDisponiveis = Object.keys(selecoes);

            const indexSorteado = Math.floor(Math.random() * oponentesDisponiveis.length);
            const chaveOponente = oponentesDisponiveis[indexSorteado];
            oponentesDisponiveis.splice(indexSorteado, 1);

            const oponenteData = selecoes[chaveOponente];
            if (!oponenteData) continue; 

            const bonusDificuldade = i > 2 ? (i - 2) * 1 : 0;
            const oponenteOvr = calcularForcaOponente(oponenteData) + bonusDificuldade;

            const diferencaOvr = mediaOverallReal - oponenteOvr;
            const vantagemGols = Math.floor(diferencaOvr / 3);

            let meusGols = Math.max(0, Math.floor(Math.random() * 4) + vantagemGols);
            let golsOponente = Math.max(0, Math.floor(Math.random() * 3) - vantagemGols);

            if (Math.random() < 0.10) meusGols += 1;
            if (Math.random() < 0.05) golsOponente += 1;

            let penaltisMeus = null;
            let penaltisOponente = null;
            let historicoPenaltis = [];

            if (i > 2 && meusGols === golsOponente) {
                let pMeus = 0;
                let pOp = 0;
                let cobrancas = 0;
                let finalizado = false;

                let cobradorasMinhas = [...jogadorasEmCampo].sort(() => Math.random() - 0.5);
                let cobradorasOp = [
                    ...(oponenteData.atacantes || []), 
                    ...(oponenteData.meio_campo || []), 
                    ...(oponenteData.defensoras || [])
                ].sort(() => Math.random() - 0.5);

                while (!finalizado) {
                    let fezMeu = Math.random() > 0.25;
                    historicoPenaltis.push({ cobradora: cobradorasMinhas[cobrancas % cobradorasMinhas.length]?.nomeCamisa || "Jogadora", time: "meu", fez: fezMeu });
                    if (fezMeu) pMeus++;

                    let restA = cobrancas < 4 ? 4 - cobrancas : 0;
                    let restB = cobrancas < 5 ? 5 - cobrancas : 0;
                    if (cobrancas < 5 && (pMeus > pOp + restB || pOp > pMeus + restA)) { finalizado = true; break; }

                    let fezOp = Math.random() > 0.25;
                    historicoPenaltis.push({ cobradora: cobradorasOp[cobrancas % cobradorasOp.length]?.nomeCamisa || "Adversária", time: "oponente", fez: fezOp });
                    if (fezOp) pOp++;

                    cobrancas++;
                    restA = cobrancas < 5 ? 5 - cobrancas : 0;
                    restB = cobrancas < 5 ? 5 - cobrancas : 0;

                    if (cobrancas < 5) {
                        if (pMeus > pOp + restB || pOp > pMeus + restA) finalizado = true;
                    } else if (pMeus !== pOp) {
                        finalizado = true;
                    }
                }
                penaltisMeus = pMeus;
                penaltisOponente = pOp;
            }

            if (i > 2 && (golsOponente > meusGols || (penaltisOponente !== null && penaltisOponente > penaltisMeus))) {
                timeEliminado = true;
            }

            let marcadorasArr = [];
            const atacantes = jogadorasEmCampo.filter(j => j.posicao.includes("ATA") || j.posicao.includes("PE") || j.posicao.includes("PD"));
            const meias = jogadorasEmCampo.filter(j => j.posicao.includes("MEI") || j.posicao.includes("MC"));
            const outras = jogadorasEmCampo.filter(j => !atacantes.includes(j) && !meias.includes(j));

            for (let g = 0; g < meusGols; g++) {
                const roleta = Math.random();
                let quemMarcou;
                if (roleta < 0.6 && atacantes.length > 0) quemMarcou = atacantes[Math.floor(Math.random() * atacantes.length)];
                else if (roleta < 0.9 && meias.length > 0) quemMarcou = meias[Math.floor(Math.random() * meias.length)];
                else if (outras.length > 0) quemMarcou = outras[Math.floor(Math.random() * outras.length)];
                if (quemMarcou) marcadorasArr.push(quemMarcou.nomeCamisa);
            }

            let marcadorasOpArr = [];
            const atacantesOp = oponenteData.atacantes || [];
            const meiasOp = oponenteData.meio_campo || [];
            const outrasOp = oponenteData.defensoras || [];

            for (let g = 0; g < golsOponente; g++) {
                const roleta = Math.random();
                let quemMarcou;
                if (roleta < 0.6 && atacantesOp.length > 0) quemMarcou = atacantesOp[Math.floor(Math.random() * atacantesOp.length)];
                else if (roleta < 0.9 && meiasOp.length > 0) quemMarcou = meiasOp[Math.floor(Math.random() * meiasOp.length)];
                else if (outrasOp.length > 0) quemMarcou = outrasOp[Math.floor(Math.random() * outrasOp.length)];
                if (quemMarcou) marcadorasOpArr.push(quemMarcou.nomeCamisa || "Adversária");
            }

            const contagemGols = {};
            marcadorasArr.forEach(m => contagemGols[m] = (contagemGols[m] || 0) + 1);
            const stringMarcadoras = Object.entries(contagemGols)
                .map(([nome, qtd]) => qtd > 1 ? `${nome} (${qtd})` : nome).join(", ");

            resultados.push({
                fase: fases[i],
                oponenteNome: `${oponenteData.nome} ${oponenteData.ano}`,
                oponenteSigla: oponenteData.nome ? oponenteData.nome.substring(0, 3).toUpperCase() : "ADV",
                meusGols,
                golsOponente,
                penaltisMeus,
                penaltisOponente,
                vitoria: meusGols > golsOponente || penaltisMeus > penaltisOponente,
                empate: meusGols === golsOponente && penaltisMeus === null,
                marcadoras: stringMarcadoras || "Gol Contra",
                autorasGolsOponente: marcadorasOpArr,
                historicoPenaltis: historicoPenaltis
            });
        }

        setPartidasSimuladas(resultados);
        setEstagio("torneio");
    };

    if (estagio === "torneio") {
        return (
            <ResultadoCopa
                partidasSimuladas={partidasSimuladas}
                mediaOverall={mediaOverallReal}
                formacaoEscolhida={formacaoEscolhida}
                jogadorasEmCampo={jogadorasEmCampo}
                nomeTime={nomeTime} // 💡 ENVIANDO O NOME PARA A COPA!
                onRestart={() => window.location.reload()}
            />
        );
    }

    return (
        <div className="app-page" style={styles.page}>
            <style>{animacoesCss}</style>

            <header className="anime-up app-header" style={styles.header}>
                <h1 className="app-logo" style={styles.logo}>
                    6 <span style={{ color: "#00E5FF", WebkitTextStroke: "0px" }}>-</span> 0{" "}
                    <span style={styles.logoText}>A COPA É DELAS</span>
                </h1>
                <div style={styles.menu}>
                    <span style={{ color: "#FF005B", marginRight: "10px" }}>DIFICULDADE: {dificuldade.toUpperCase()}</span>
                    {formacaoEscolhida}
                </div>
            </header>

            <div className="app-container" style={styles.container}>
                {/* BLOCAGEM ESQUERDA */}
                <div className="anime-up delay-1 col-left" style={styles.colLeft}>

                    {estagio === "config" && (
                        <div style={styles.card}>
                            
                            {/* 💡 NOVO INPUT DE NOME DO TIME */}
                            <h3 style={styles.cardTitle}>NOME DA SUA EQUIPE</h3>
                            <input 
                                type="text" 
                                maxLength="16"
                                value={nomeTime} 
                                onChange={(e) => setNomeTime(e.target.value.toUpperCase())} 
                                style={styles.inputName} 
                            />

                            <h3 style={styles.cardTitle}>FORMAÇÃO</h3>
                            <div className="formacao-grid" style={styles.formacaoGrid}>
                                {ObjectKeysFormacoes.map((form) => (
                                    <button
                                        key={form}
                                        style={{
                                            ...styles.btnFormacao,
                                            background: formacaoEscolhida === form ? "#111" : "#FFF",
                                            color: formacaoEscolhida === form ? "#00E5FF" : "#111",
                                            borderColor: formacaoEscolhida === form ? "#111" : "#CCC"
                                        }}
                                        onClick={() => setFormacaoEscolhida(form)}
                                    >
                                        {form}
                                    </button>
                                ))}
                            </div>

                            <h3 style={styles.cardTitle}>DIFICULDADE</h3>
                            <div style={{ display: "flex", gap: "8px", marginBottom: "25px" }}>
                                <button
                                    style={{
                                        ...styles.btnFormacao, flex: 1, padding: "12px",
                                        background: dificuldade === "classico" ? "#111" : "#FFF",
                                        color: dificuldade === "classico" ? "#00E5FF" : "#111",
                                    }}
                                    onClick={() => setDificuldade("classico")}
                                >
                                    CLÁSSICO<br />
                                </button>
                                <button
                                    style={{
                                        ...styles.btnFormacao, flex: 1, padding: "12px",
                                        background: dificuldade === "almanaque" ? "#111" : "#FFF",
                                        color: dificuldade === "almanaque" ? "#00E5FF" : "#111",
                                    }}
                                    onClick={() => setDificuldade("almanaque")}
                                >
                                    ALMANAQUE<br />
                                </button>
                            </div>
                            <button style={styles.btnRoll} onClick={sortearSelecao}>INICIAR DRAFT ➔</button>
                        </div>
                    )}

                    {isTimeCompleto ? (
                        <div style={{ ...styles.card, background: "#111", border: "2px solid #00E5FF" }}>
                            <h2 style={{ color: "#FFF", margin: "0 0 10px 0", fontSize: "24px" }}>TIME PRONTO!</h2>
                            <p style={{ color: "#CCC", fontSize: "14px", marginBottom: "20px" }}>Você escalou suas 11 craques. É hora de buscar a taça!</p>
                            <button style={styles.btnSimular} onClick={iniciarTorneio}>IR PARA A COPA ➔</button>
                        </div>
                    ) : estagio === "montagem" && selecaoSorteada && (
                        <>
                            <div style={styles.card}>
                                <p style={styles.labelDrawn}>SAIU</p>
                                <h2 key={`nome-${selecaoSorteada.nome}`} className={!isRolling ? "pop-in" : ""} style={styles.teamName}>
                                    {selecaoSorteada.nome}
                                </h2>
                                <h3 key={`ano-${anoAnimacao}`} className={!isRolling ? "pop-in" : ""} style={styles.teamYear}>
                                    Copa {anoAnimacao}
                                </h3>

                                {!escolhaDaRodada && !isRolling && !jogadoraSelecionada && (
                                    <div style={{ marginTop: "15px", display: "flex", gap: "10px", flexDirection: "column", borderTop: "1px dashed #CCC", paddingTop: "15px" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <span style={{ fontSize: "10px", fontWeight: "bold", color: "#555", letterSpacing: "1px" }}>PULOS RESTANTES:</span>
                                            <span style={{ background: "#FF005B", color: "#FFF", padding: "2px 8px", borderRadius: "10px", fontSize: "12px", fontWeight: "bold" }}>{pulosRestantes}</span>
                                        </div>
                                        <div style={{ display: "flex", gap: "8px" }}>
                                            {(() => {
                                                const todasSel = Object.values(selecoes);
                                                const temOutraSelecaoNessaCopa = todasSel.some(s => s.ano === selecaoSorteada.ano && s.nome !== selecaoSorteada.nome);
                                                const temOutraCopaDessaSelecao = todasSel.some(s => s.nome === selecaoSorteada.nome && s.ano !== selecaoSorteada.ano);
                                                const semPulos = pulosRestantes === 0;

                                                return (
                                                    <>
                                                        <button
                                                            style={{
                                                                ...styles.btnPulo,
                                                                opacity: (semPulos || !temOutraSelecaoNessaCopa) ? 0.3 : 1,
                                                                cursor: (semPulos || !temOutraSelecaoNessaCopa) ? "not-allowed" : "pointer"
                                                            }}
                                                            onClick={() => usarPulo("selecao")}
                                                            disabled={semPulos || !temOutraSelecaoNessaCopa}
                                                        >
                                                            PULAR SELEÇÃO
                                                        </button>

                                                        <button
                                                            style={{
                                                                ...styles.btnPulo,
                                                                opacity: (semPulos || !temOutraCopaDessaSelecao) ? 0.3 : 1,
                                                                cursor: (semPulos || !temOutraCopaDessaSelecao) ? "not-allowed" : "pointer"
                                                            }}
                                                            onClick={() => usarPulo("copa")}
                                                            disabled={semPulos || !temOutraCopaDessaSelecao}
                                                        >
                                                            PULAR COPA
                                                        </button>
                                                    </>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {isRolling ? (
                                <div style={styles.blockCard}>
                                    <p style={{ ...styles.blockText, fontSize: "18px" }}>Sorteando... 🎲</p>
                                </div>
                            ) : (
                                <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                                    <div style={styles.playerList} ref={listRef}>
                                        <div style={styles.listHeader}>{escolhaDaRodada ? "CRAQUE SELECIONADA" : "ESCOLHA UMA JOGADORA"}</div>
                                        {elenco.map((jogadora, idx) => {
                                            const isNoTime = Object.values(escalacao).some(j => j?.nome === jogadora.nome);
                                            const posicoesDela = jogadora.posicao.split("/").map(p => p.trim());
                                            const formacaoAtual = todasFormacoes[formacaoEscolhida];
                                            
                                            const temSlotDisponivel = formacaoAtual.some(slot => {
                                                if (!posicoesDela.includes(slot.label)) return false;
                                                const jogNoSlot = escalacao[slot.id];
                                                return !jogNoSlot || jogNoSlot.isCurrentRoundPick;
                                            });
                                            
                                            const isSemEspaco = !temSlotDisponivel;
                                            const isBloqueadaPelaEscolha = escolhaDaRodada && jogadora.nome !== escolhaDaRodada;
                                            const isSegurandoObrigatoria = jogadoraSelecionada && !jogadoraSelecionada.isCurrentRoundPick;

                                            const isDesabilitada = isNoTime || isSemEspaco || isBloqueadaPelaEscolha || isSegurandoObrigatoria;
                                            const isSelecionada = jogadoraSelecionada?.nome === jogadora.nome && jogadoraSelecionada.isCurrentRoundPick;

                                            return (
                                                <div
                                                    key={`${jogadora.nome}-${jogadora.numero}-${idx}`}
                                                    style={{
                                                        ...styles.playerListItem,
                                                        opacity: isDesabilitada ? 0.4 : 1,
                                                        cursor: isDesabilitada ? "not-allowed" : "pointer",
                                                        background: isSelecionada ? "#111" : "transparent",
                                                        color: isSelecionada ? "white" : "inherit"
                                                    }}
                                                    onClick={() => {
                                                        if (!isDesabilitada) selecionarDaLista(jogadora);
                                                    }}
                                                >
                                                    <div style={styles.liLeft}>
                                                        <span style={{ ...styles.liNumber, color: isSelecionada ? "#00E5FF" : "#999" }}>#{jogadora.numero}</span>
                                                        <div style={styles.liInfo}>
                                                            <span style={styles.liName}>{jogadora.nome}</span>
                                                            <div style={styles.liPosContainer}>
                                                                {jogadora.posicao.split("/").map(p => p.trim()).map((pos, i) => {
                                                                    const cores = obterCorPosicao(pos);
                                                                    return (
                                                                        <span key={i} style={{
                                                                            ...styles.liPosBadge,
                                                                            background: cores.bg,
                                                                            color: cores.text,
                                                                            opacity: isDesabilitada ? 0.7 : 1
                                                                        }}>
                                                                            {pos}
                                                                        </span>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={styles.liRight}>
                                                        <strong style={{ ...styles.liOvr, color: isSelecionada ? "#FF005B" : "#111" }}>{mostrarOvr(jogadora.overall)}</strong>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    
                                    {/* MENSAGEM FLUÍDA DE AVANÇO */}
                                    {escolhaDaRodada && (
                                        <div className="anime-up" style={{ textAlign: "center", background: "#FFF", border: "1px solid #EAE5D9", padding: "15px", boxShadow: "2px 2px 0px rgba(0,0,0,0.05)" }}>
                                            <p style={{fontSize: "11px", color: "#555", fontWeight: "bold", margin: "0 0 10px 0", lineHeight: "1.4"}}>
                                                Você ainda pode clicar nas jogadoras em campo para <strong style={{color: "#FF005B"}}>trocar as posições</strong> antes de avançar!
                                            </p>
                                            <button 
                                                style={{
                                                    ...styles.btnRoll, 
                                                    marginTop: 0, 
                                                    opacity: jogadoraSelecionada ? 0.3 : 1, 
                                                    cursor: jogadoraSelecionada ? "not-allowed" : "pointer"
                                                }} 
                                                onClick={() => {
                                                    if (jogadoraSelecionada) {
                                                        alert("⚠️ Recoloque a jogadora que está em suas mãos no campo antes de avançar!");
                                                        return;
                                                    }
                                                    sortearSelecao();
                                                }}
                                            >
                                                PRÓXIMO SORTEIO ➔
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* CAMPO CENTRAL */}
                <div className="anime-up delay-2 col-center" style={styles.colCenter} ref={campoRef}>
                    <div className="soccer-field" style={styles.field}>
                        <div style={styles.fieldCenterLine}></div>
                        <div style={styles.fieldCenterCircle}></div>
                        <div style={styles.fieldPenaltyTop}></div>
                        <div style={styles.fieldPenaltyBottom}></div>

                        {todasFormacoes[formacaoEscolhida].map((slot) => {
                            const jogadoraNoSlot = escalacao[slot.id];
                            
                            let isDestacado = false;
                            if (jogadoraSelecionada) {
                                const posicoesDela = jogadoraSelecionada.posicao.split("/").map(p => p.trim());
                                const podeJogarNesseSlot = posicoesDela.includes(slot.label);
                                
                                if (podeJogarNesseSlot) {
                                    if (jogadoraSelecionada.originalSlotId === slot.id) {
                                        isDestacado = true;
                                    } else if (!jogadoraSelecionada.originalSlotId) {
                                        if (!jogadoraNoSlot || jogadoraNoSlot.isCurrentRoundPick) {
                                            isDestacado = true;
                                        }
                                    } else {
                                        if (!jogadoraNoSlot) {
                                            isDestacado = true; 
                                        } else {
                                            const posicoesDaOutra = jogadoraNoSlot.posicao.split("/").map(p => p.trim());
                                            const slotOriginal = todasFormacoes[formacaoEscolhida].find(s => s.id === jogadoraSelecionada.originalSlotId);
                                            if (slotOriginal && posicoesDaOutra.includes(slotOriginal.label)) {
                                                isDestacado = true;
                                            }
                                        }
                                    }
                                }
                            }
                                
                            const isClickable = isDestacado || (!jogadoraSelecionada && jogadoraNoSlot);

                            return (
                                <div
                                    key={slot.id}
                                    style={{
                                        ...styles.slotWrapper,
                                        top: slot.top, left: slot.left,
                                        cursor: isClickable ? "pointer" : "default",
                                        zIndex: isDestacado ? 20 : 10
                                    }}
                                    onClick={() => handleSlotClick(slot)}
                                >
                                    {jogadoraNoSlot ? (
                                        <div style={{
                                            ...styles.playerWrapper, 
                                            filter: isDestacado ? "drop-shadow(0px 0px 8px #FF005B)" : "none",
                                            transform: isDestacado ? "scale(1.05)" : "scale(1)",
                                            transition: "all 0.2s"
                                        }}>
                                            <div className="player-circle-node" style={styles.playerCircleFill}>{jogadoraNoSlot.numero}</div>
                                            <div className="player-plaque-node" style={styles.playerPlaque}>
                                                <span className="player-name-node" style={styles.playerName}>{jogadoraNoSlot.nomeCamisa}</span>
                                                <span className="player-ovr-node" style={styles.playerOvrBadge}>{mostrarOvr(jogadoraNoSlot.overall)}</span>
                                            </div>
                                        </div>
                                    ) : isDestacado ? (
                                        <div className="slot-highlight-node" style={styles.slotHighlight}><span>{slot.label}</span></div>
                                    ) : (
                                        <div className="slot-empty-node" style={styles.slotEmpty}><span>{slot.label}</span></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* STATUS DA ESCALAÇÃO / DIREITA */}
                <div className="anime-up delay-3 col-right" style={styles.colRight}>
                    <div style={styles.scoreHeader}>
                        <span style={styles.boxTitle}>SEU OVERALL</span>
                        <h1 style={styles.bigOvr}>{estagio === "config" ? "--" : mostrarOvr(mediaOverallReal)}</h1>
                    </div>
                    <div className="score-list-box" style={styles.scoreList}>
                        {todasFormacoes[formacaoEscolhida].map((slot) => (
                            <div key={`box-${slot.id}`} style={styles.scoreListItem}>
                                <span style={styles.scorePos}>{slot.label}</span>
                                {escalacao[slot.id] ? (
                                    <>
                                        <span style={styles.scoreName}>{escalacao[slot.id].nomeCamisa}</span>
                                        <strong style={styles.scoreOvr}>{mostrarOvr(escalacao[slot.id].overall)}</strong>
                                    </>
                                ) : (
                                    <span style={styles.scoreEmpty}>—</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

const styles = {
    // 💡 NOVO ESTILO DO INPUT
    inputName: { width: "100%", padding: "12px", marginBottom: "20px", border: "2px solid #111", background: "#F4F0E6", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", letterSpacing: "1px", color: "#FF005B", outline: "none", boxSizing: "border-box", textAlign: "center", textTransform: "uppercase" },

    logo: { fontSize: "42px", fontFamily: "Impact, sans-serif", margin: 0, letterSpacing: "-1px", color: "white", WebkitTextStroke: "2px #111" },
    logoText: { fontSize: "20px", color: "white", WebkitTextStroke: "1px #111" },
    teamName: { margin: 0, fontSize: "32px", fontWeight: "900", fontFamily: "Impact, sans-serif", color: "black", letterSpacing: "1px" },

    page: { fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#F6F2F5", minHeight: "100vh", padding: "20px 40px", color: "#111" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111", paddingBottom: "10px", marginBottom: "30px" },
    menu: { fontSize: "12px", fontWeight: "bold", letterSpacing: "2px", display: "flex", alignItems: "center" },
    container: { display: "flex", gap: "30px", justifyContent: "center", alignItems: "flex-start" },

    colLeft: { width: "260px", display: "flex", flexDirection: "column", gap: "15px" },
    card: { background: "#FFF", border: "1px solid #EAE5D9", padding: "20px", boxShadow: "2px 2px 0px rgba(0,0,0,0.05)" },
    cardTitle: { fontSize: "12px", fontWeight: "bold", color: "#444", letterSpacing: "2px", marginBottom: "15px", textTransform: "uppercase" },

    formacaoGrid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "20px" },
    btnFormacao: { border: "1px solid #111", fontSize: "12px", fontWeight: "bold", cursor: "pointer", transition: "all 0.1s", padding: "10px 0" },

    btnPulo: { flex: 1, background: "#FFF", border: "2px solid #111", padding: "8px", fontSize: "10px", fontWeight: "bold", cursor: "pointer", boxShadow: "2px 2px 0px #111", transition: "all 0.1s", color: "black" },

    btnRoll: { background: "#FF005B", color: "white", padding: "16px", border: "2px solid #111", boxShadow: "3px 3px 0px #111", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", width: "100%", letterSpacing: "1px", marginTop: "10px" },
    btnSimular: { background: "#00E5FF", color: "#111", padding: "16px", border: "2px solid #111", boxShadow: "3px 3px 0px #FF005B", fontSize: "18px", fontWeight: "900", fontFamily: "Impact, sans-serif", textTransform: "uppercase", cursor: "pointer", width: "100%", letterSpacing: "1px" },

    labelDrawn: { fontSize: "10px", fontWeight: "bold", letterSpacing: "2px", color: "#777", margin: "0 0 5px 0" },
    teamYear: { margin: 0, color: "#FF005B", fontWeight: "bold", fontSize: "16px" },

    blockCard: { background: "#FFF", border: "1px solid #EAE5D9", padding: "20px", textAlign: "center", boxShadow: "2px 2px 0px rgba(0,0,0,0.05)" },
    blockText: { fontSize: "14px", fontWeight: "bold", color: "#333", marginBottom: "20px", lineHeight: "1.4" },
    listHeader: { background: "#111", color: "#FFF", fontSize: "10px", padding: "10px", fontWeight: "bold", textAlign: "center", textTransform: "uppercase", letterSpacing: "1px" },
    playerList: { background: "#FFF", border: "1px solid #EAE5D9", maxHeight: "350px", overflowY: "auto", boxShadow: "2px 2px 0px rgba(0,0,0,0.05)" },

    playerListItem: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 15px", borderBottom: "1px solid #EEE", transition: "all 0.1s" },
    liLeft: { display: "flex", alignItems: "center", gap: "12px", flex: 1 },
    liNumber: { fontSize: "12px", fontWeight: "900", width: "25px", textAlign: "center" },
    liInfo: { display: "flex", flexDirection: "column", gap: "4px" },
    liName: { fontSize: "13px", fontWeight: "bold" },

    liPosContainer: { display: "flex", gap: "4px", flexWrap: "wrap" },
    liPosBadge: { fontSize: "9px", fontWeight: "bold", padding: "2px 6px", borderRadius: "4px" },

    liRight: { display: "flex", alignItems: "center" },
    liOvr: { fontSize: "18px", fontFamily: "Impact, sans-serif", letterSpacing: "1px" },

    colCenter: { width: "450px" },
    field: { width: "100%", height: "600px", background: "#1C8144", border: "2px solid #00E5FF", position: "relative", boxShadow: "5px 5px 15px rgba(0,0,0,0.1)", overflow: "hidden" },
    fieldCenterLine: { position: "absolute", top: "50%", left: 0, width: "100%", height: "2px", background: "#00E5FF", opacity: 0.8 },
    fieldCenterCircle: { position: "absolute", top: "50%", left: "50%", width: "100px", height: "100px", border: "2px solid #00E5FF", borderRadius: "50%", transform: "translate(-50%, -50%)", opacity: 0.8 },
    fieldPenaltyTop: { position: "absolute", top: 0, left: "50%", width: "200px", height: "90px", border: "2px solid #00E5FF", borderTop: "none", transform: "translateX(-50%)", opacity: 0.8 },
    fieldPenaltyBottom: { position: "absolute", bottom: 0, left: "50%", width: "200px", height: "90px", border: "2px solid #00E5FF", borderBottom: "none", transform: "translateX(-50%)", opacity: 0.8 },

    slotWrapper: { position: "absolute", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", transition: "top 0.3s, left 0.3s" },
    slotEmpty: { width: "40px", height: "40px", border: "2px dashed #00E5FF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#00E5FF", fontSize: "10px", fontWeight: "bold" },
    slotHighlight: { width: "46px", height: "46px", background: "#FF005B", border: "3px solid #FFF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: "12px", fontWeight: "bold", boxShadow: "0px 0px 15px rgba(255, 0, 91, 0.8)", transform: "scale(1.1)", transition: "all 0.2s" },

    playerWrapper: { display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" },
    playerCircleFill: { width: "34px", height: "34px", background: "white", color: "#111", border: "2px solid #111", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "14px", boxShadow: "2px 2px 0px #111" },
    playerPlaque: { background: "#111", borderRadius: "4px", padding: "2px 6px", display: "flex", alignItems: "center", gap: "5px", boxShadow: "2px 2px 0px rgba(0,0,0,0.5)" },
    playerName: { color: "white", fontSize: "10px", fontWeight: "bold", WebkitTextStroke: "0px" },
    playerOvrBadge: { background: "#333", color: "#00E5FF", fontSize: "9px", padding: "1px 3px", borderRadius: "2px", fontWeight: "bold", WebkitTextStroke: "0px" },

    colRight: { width: "260px", background: "#F6F2F5" },
    scoreHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111", paddingBottom: "10px", marginBottom: "15px" },
    boxTitle: { fontSize: "10px", fontWeight: "bold", letterSpacing: "2px", color: "#555" },
    bigOvr: { fontSize: "48px", color: "black", fontFamily: "Impact, sans-serif", margin: 0 },
    scoreList: { display: "flex", flexDirection: "column", gap: "10px" },
    scoreListItem: { display: "flex", alignItems: "center", borderBottom: "1px solid #DDD", paddingBottom: "5px" },
    scorePos: { fontSize: "10px", color: "#777", width: "40px", fontWeight: "bold" },
    scoreName: { fontSize: "12px", flex: 1, fontWeight: "bold" },
    scoreEmpty: { fontSize: "12px", flex: 1, color: "#AAA" },
    scoreOvr: { fontSize: "12px", fontWeight: "900", color: "#FF005B" }
};