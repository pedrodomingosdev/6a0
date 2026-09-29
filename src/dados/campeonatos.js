import { dbTimes, getTodosOsTimes, getForcaTime } from "./times";

export const dbCampeonatos = {
    brasileirao_a1: {
        id: "brasileirao_a1",
        nome: "Brasileirão Feminino Série A1",
        ano: 2026,
        tipo: "misto",
        qtdTimes: 18,
        jogosTurnoUnico: 17,
        playoffs: { classificam: 8, modo: "ida_e_volta" },
        rebaixamento: 4
    },
    brasileirao_a2: {
        id: "brasileirao_a2",
        nome: "Brasileirão Feminino Série A2",
        ano: 2026,
        tipo: "misto",
        qtdTimes: 16,
        jogosTurnoUnico: 15,
        playoffs: { classificam: 8, modo: "ida_e_volta" },
        acesso: 4
    },
    copa_do_brasil: {
        id: "copa_do_brasil",
        nome: "Copa do Brasil Feminina",
        ano: 2026,
        tipo: "mata_mata"
    },
    supercopa_do_brasil: {
        id: "supercopa_do_brasil",
        nome: "Supercopa do Brasil Feminina",
        ano: 2026,
        tipo: "mata_mata"
    },
    libertadores: {
        id: "libertadores",
        nome: "CONMEBOL Libertadores Femenina",
        ano: 2026,
        tipo: "grupos"
    }
};

export const historicoMundo = {
    campeaoA1: "Corinthians",
    viceA1: "Cruzeiro", 
    campeaoCopa: "Palmeiras",
    campeaoLiberta: "Corinthians",
    top3Brasileirao: ["Corinthians", "Palmeiras", "São Paulo"]
};

export const atualizarHistoricoMundo = (resBrasileirao, resCopaBrasil, resLibertadores) => {
    if (resBrasileirao.campeao && !resBrasileirao.isA2) {
        historicoMundo.campeaoA1 = resBrasileirao.campeao;
        historicoMundo.top3Brasileirao = resBrasileirao.tabela.slice(0, 3).map(t => t.nome);
        
        // ADICIONADO: Capturar o vice-campeão a partir da Grande Final
        if (resBrasileirao.fasesPlayoffs && resBrasileirao.fasesPlayoffs.length > 0) {
            const faseFinal = resBrasileirao.fasesPlayoffs[resBrasileirao.fasesPlayoffs.length - 1];
            const jogoFinal = faseFinal.jogos[0];
            historicoMundo.viceA1 = jogoFinal.vencedor === jogoFinal.timeA ? jogoFinal.timeB : jogoFinal.timeA;
        }
    }
    if (resCopaBrasil.campeao) historicoMundo.campeaoCopa = resCopaBrasil.campeao;
    if (resLibertadores.campeao) historicoMundo.campeaoLiberta = resLibertadores.campeao;
};

export const resetarHistoricoMundo = () => {
    historicoMundo.campeaoA1 = "Corinthians";
    historicoMundo.viceA1 = "São Paulo";
    historicoMundo.campeaoCopa = "Palmeiras";
    historicoMundo.campeaoLiberta = "Corinthians";
    historicoMundo.top3Brasileirao = ["Corinthians", "Palmeiras", "São Paulo"];
};

const calcularBonusOVR = (ovrJogador) => {
    if (ovrJogador < 65) return 0; 
    if (ovrJogador <= 75) return (ovrJogador - 64) * 0.4; 
    if (ovrJogador <= 85) return 4 + (ovrJogador - 75) * 1.2; 
    return 16 + (ovrJogador - 85) * 2; 
};

export const simularJogo = (timeA, timeB, clubeJogador, ovrJogador, isIdaEVolta = false, forcarVencedorUser = null) => {
    const nomeA = typeof timeA === "string" ? timeA : (timeA?.nome || "Time A");
    const nomeB = typeof timeB === "string" ? timeB : (timeB?.nome || "Time B");
    const nomeUser = clubeJogador?.nome || "";

    const isUserA = nomeUser !== "" && nomeA.toLowerCase().trim() === nomeUser.toLowerCase().trim();
    const isUserB = nomeUser !== "" && nomeB.toLowerCase().trim() === nomeUser.toLowerCase().trim();

    let forcaA = getForcaTime(nomeA) + Math.floor(Math.random() * 10) + (isUserA ? calcularBonusOVR(ovrJogador) : 0);
    let forcaB = getForcaTime(nomeB) + Math.floor(Math.random() * 10) + (isUserB ? calcularBonusOVR(ovrJogador) : 0);

    if ((isUserA || isUserB) && forcarVencedorUser !== null) {
        const userEhTimeA = isUserA;
        const userGanhou = forcarVencedorUser;

        let gUser = userGanhou ? 2 : 0;
        let gRival = userGanhou ? 1 : 2;

        let gA = userEhTimeA ? gUser : gRival;
        let gB = userEhTimeA ? gRival : gUser;
        let vencedor = userGanhou ? (userEhTimeA ? nomeA : nomeB) : (userEhTimeA ? nomeB : nomeA);

        if (!isIdaEVolta) {
            return { timeA: nomeA, timeB: nomeB, gA, gB, placarTexto: `${gA} - ${gB}`, vencedor };
        } else {
            return { timeA: nomeA, timeB: nomeB, gA: gA + 1, gB, placarTexto: `(${gA}x${gB}) / (1x0) ➔ Agg: ${gA + 1}x${gB}`, vencedor };
        }
    }

    let gA1 = Math.floor(Math.random() * 3);
    let gB1 = Math.floor(Math.random() * 3);
    if (forcaA > forcaB + 10) gA1 += 1;
    if (forcaB > forcaA + 10) gB1 += 1;

    if (!isIdaEVolta) {
        if (gA1 === gB1) {
            if (forcaA >= forcaB) gA1 += 1;
            else gB1 += 1;
        }
        return {
            timeA: nomeA, timeB: nomeB, gA: gA1, gB: gB1,
            placarTexto: `${gA1} - ${gB1}`,
            vencedor: gA1 > gB1 ? nomeA : nomeB
        };
    } else {
        let gA2 = Math.floor(Math.random() * 3);
        let gB2 = Math.floor(Math.random() * 3);
        if (forcaA > forcaB + 10) gA2 += 1;
        if (forcaB > forcaA + 10) gB2 += 1;

        let totalA = gA1 + gA2;
        let totalB = gB1 + gB2;

        if (totalA === totalB) {
            if (forcaA >= forcaB) totalA += 1;
            else totalB += 1;
        }

        return {
            timeA: nomeA, timeB: nomeB, gA: totalA, gB: totalB,
            placarTexto: `(${gA1}x${gB1}) / (${gA2}x${gB2}) ➔ Agg: ${totalA}x${totalB}`,
            vencedor: totalA > totalB ? nomeA : nomeB
        };
    }
};

const simularDivisaoInterna = (isA2, timesBase, clubeJogador, ovrJogador, forcarResultadoUser = null) => {
    const regras = isA2 ? dbCampeonatos.brasileirao_a2 : dbCampeonatos.brasileirao_a1;
    let timesNomes = timesBase.map(t => t.nome);

    if (clubeJogador?.nome && clubeJogador?.div && (isA2 ? clubeJogador.div.includes("A2") : clubeJogador.div.includes("A1"))) {
        if (!timesNomes.includes(clubeJogador.nome)) timesNomes.unshift(clubeJogador.nome);
    }

    timesNomes = Array.from(new Set(timesNomes)).slice(0, regras.qtdTimes);
    const jogosNaFaseUnica = regras.jogosTurnoUnico;

    const tabela = timesNomes.map((nomeTime) => {
        const isUser = clubeJogador?.nome && nomeTime.toLowerCase().trim() === clubeJogador.nome.toLowerCase().trim();
        let forca = getForcaTime(nomeTime);
        
        if (isUser) forca += calcularBonusOVR(ovrJogador);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < jogosNaFaseUnica; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosNaFaseUnica, v, e, d, gp, gs, sg: gp - gs };
    });

    tabela.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabela.map((item, idx) => ({ ...item, pos: idx + 1 }));

    let top8 = tabelaClassificada.slice(0, 8).map(t => t.nome);

    if (forcarResultadoUser !== null && clubeJogador?.nome) {
        top8 = top8.filter(nome => nome !== clubeJogador.nome);
        top8.unshift(clubeJogador.nome);
        if (top8.length > 8) top8.pop();
    }

    const q1 = simularJogo(top8[0], top8[7], clubeJogador, ovrJogador, true, forcarResultadoUser !== null ? true : null);
    const q2 = simularJogo(top8[1], top8[6], clubeJogador, ovrJogador, true);
    const q3 = simularJogo(top8[2], top8[5], clubeJogador, ovrJogador, true);
    const q4 = simularJogo(top8[3], top8[4], clubeJogador, ovrJogador, true);

    const s1 = simularJogo(q1.vencedor, q4.vencedor, clubeJogador, ovrJogador, true, forcarResultadoUser !== null ? true : null);
    const s2 = simularJogo(q2.vencedor, q3.vencedor, clubeJogador, ovrJogador, true);

    const jogoFinal = simularJogo(s1.vencedor, s2.vencedor, clubeJogador, ovrJogador, true, forcarResultadoUser);

    const campeaoTorneio = jogoFinal.vencedor;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || 9;
    let posicaoTexto = `${userTabelaPos}º Lugar na Fase Única`;

    const chegouNaSemiOuSuperior = clubeJogador?.nome && ([s1.vencedor, s2.vencedor, q1.vencedor, q2.vencedor, q3.vencedor, q4.vencedor].includes(clubeJogador.nome) || foiCampea);

    if (clubeJogador?.nome && top8.includes(clubeJogador.nome)) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if ([s1.vencedor, s2.vencedor].includes(clubeJogador.nome)) posicaoTexto = "Vice-campeã 🥈";
        else if ([q1.vencedor, q2.vencedor, q3.vencedor, q4.vencedor].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else posicaoTexto = "Quartas de Final";
    }

    return {
        nome: regras.nome,
        tipo: "pontos_corridos",
        isA2,
        tabela: tabelaClassificada,
        fasesPlayoffs: [
            { faseNome: "QUARTAS DE FINAL (IDA E VOLTA - TOP 8)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (IDA E VOLTA)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (IDA E VOLTA)", jogos: [jogoFinal] }
        ],
        campeao: campeaoTorneio,
        posicao: posicaoTexto,
        foiCampea,
        chegouNaSemiOuSuperior,
        userTabelaPos,
        promovidos: [q1.vencedor, q2.vencedor, q3.vencedor, q4.vencedor],
        rebaixados: tabelaClassificada.slice(-4).map(t => t.nome)
    };
};

export const simularCampeonatoBrasileiro = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesA1 = dbTimes.A1, timesA2 = dbTimes.A2) => {
    const isA2User = clubeJogador.div.includes("A2");
    const resUserDiv = simularDivisaoInterna(isA2User, isA2User ? timesA2 : timesA1, clubeJogador, ovrJogador, forcarResultadoUser);
    const resOutraDiv = simularDivisaoInterna(!isA2User, !isA2User ? timesA2 : timesA1, { nome: "NENHUM", div: "" }, 50, null);

    const promovidosA2 = isA2User ? resUserDiv.promovidos : resOutraDiv.promovidos;
    const rebaixadosA1 = isA2User ? resOutraDiv.rebaixados : resUserDiv.rebaixados;

    return { ...resUserDiv, promovidosA2, rebaixadosA1 };
};

export const simularCopaDoBrasil2026 = (clubeJogador, ovrJogador, forcarResultadoUser = null) => {
    const todosTimesBR = [...dbTimes.A1, ...dbTimes.A2].map(c => c.nome);
    let p = Array.from(new Set(todosTimesBR)).sort(() => 0.5 - Math.random()).slice(0, 16);

    if (forcarResultadoUser !== null && clubeJogador?.nome) {
        p = p.filter(nome => nome !== clubeJogador.nome);
        p.unshift(clubeJogador.nome);
        if (p.length > 16) p.pop();
    } else if (!p.includes(clubeJogador.nome)) {
        p[0] = clubeJogador.nome;
    }

    const f1_1 = simularJogo(p[0], p[1], clubeJogador, ovrJogador, false, forcarResultadoUser !== null ? true : null);
    const f1_2 = simularJogo(p[2], p[3], clubeJogador, ovrJogador, false);
    const f1_3 = simularJogo(p[4], p[5], clubeJogador, ovrJogador, false);
    const f1_4 = simularJogo(p[6], p[7], clubeJogador, ovrJogador, false);
    const f1_5 = simularJogo(p[8], p[9], clubeJogador, ovrJogador, false);
    const f1_6 = simularJogo(p[10], p[11], clubeJogador, ovrJogador, false);
    const f1_7 = simularJogo(p[12], p[13], clubeJogador, ovrJogador, false);
    const f1_8 = simularJogo(p[14], p[15], clubeJogador, ovrJogador, false);

    const q1 = simularJogo(f1_1.vencedor, f1_2.vencedor, clubeJogador, ovrJogador, true, forcarResultadoUser !== null ? true : null);
    const q2 = simularJogo(f1_3.vencedor, f1_4.vencedor, clubeJogador, ovrJogador, true);
    const q3 = simularJogo(f1_5.vencedor, f1_6.vencedor, clubeJogador, ovrJogador, true);
    const q4 = simularJogo(f1_7.vencedor, f1_8.vencedor, clubeJogador, ovrJogador, true);

    const s1 = simularJogo(q1.vencedor, q2.vencedor, clubeJogador, ovrJogador, true, forcarResultadoUser !== null ? true : null);
    const s2 = simularJogo(q3.vencedor, q4.vencedor, clubeJogador, ovrJogador, true);

    const jogoFinal = simularJogo(s1.vencedor, s2.vencedor, clubeJogador, ovrJogador, true, forcarResultadoUser);

    const campeaoTorneio = jogoFinal.vencedor;
    const foiCampea = campeaoTorneio === clubeJogador.nome;

    let posicaoText = "Eliminada nas Fases Iniciais";
    if (foiCampea) posicaoText = "Campeã 🏆";
    else if ([s1.vencedor, s2.vencedor].includes(clubeJogador.nome)) posicaoText = "Vice-campeã 🥈";
    else if ([q1.vencedor, q2.vencedor, q3.vencedor, q4.vencedor].includes(clubeJogador.nome)) posicaoText = "Semifinalista 🥉";
    else if ([f1_1.vencedor, f1_2.vencedor, f1_3.vencedor, f1_4.vencedor, f1_5.vencedor, f1_6.vencedor, f1_7.vencedor, f1_8.vencedor].includes(clubeJogador.nome)) posicaoText = "Quartas de Final";

    return {
        nome: dbCampeonatos.copa_do_brasil.nome,
        tipo: "mata_mata",
        fases: [
            { faseNome: "FASES INICIAIS (JOGO ÚNICO)", jogos: [f1_1, f1_2, f1_3, f1_4] },
            { faseNome: "QUARTAS DE FINAL (IDA E VOLTA)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (IDA E VOLTA)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (IDA E VOLTA)", jogos: [jogoFinal] }
        ],
        campeao: campeaoTorneio,
        posicao: posicaoText,
        foiCampea
    };
};

export const simularSupercopa2026 = (clubeJogador, ovrJogador, campeaoA1Anterior, campeaoCopaAnterior) => {
    let t1 = campeaoA1Anterior || "Corinthians";
    let t2 = campeaoCopaAnterior || "Palmeiras";
    
    // CORRIGIDO: Se a mesma equipa for campeã, a vaga é preenchida pelo vice do Brasileirão
    if (t1 === t2) {
        t2 = historicoMundo.viceA1 || "São Paulo";
    }

    const jogoSupercopa = simularJogo(t1, t2, clubeJogador, ovrJogador, false);
    const foiCampea = jogoSupercopa.vencedor === clubeJogador.nome;
    const participou = t1 === clubeJogador.nome || t2 === clubeJogador.nome;

    return {
        nome: dbCampeonatos.supercopa_do_brasil.nome,
        tipo: "mata_mata",
        participou,
        fases: [
            { faseNome: `FINAL ÚNICA (${t1} x ${t2})`, jogos: [jogoSupercopa] }
        ],
        campeao: jogoSupercopa.vencedor,
        posicao: participou ? (foiCampea ? "Campeã 🏆" : "Vice-campeã 🥈") : "Não Classificada",
        foiCampea: participou && foiCampea
    };
};

export const simularLibertadores = (clubeJogador, ovrJogador, forcarResultadoUser = null, top3BR = [], campeaoAnterior = "Corinthians") => {
    let timesLiberta = [];

    timesLiberta.push(campeaoAnterior);

    top3BR.forEach(time => {
        if (!timesLiberta.includes(time)) {
            timesLiberta.push(time);
        }
    });

    const sulamericanos = dbTimes.Sulamericanos.map(t => t.nome).filter(t => !timesLiberta.includes(t));
    const misturadosSula = sulamericanos.sort(() => 0.5 - Math.random());

    const vagasRestantes = 16 - timesLiberta.length;
    timesLiberta.push(...misturadosSula.slice(0, vagasRestantes));

    timesLiberta = timesLiberta.sort(() => 0.5 - Math.random());

    const isUserNaLiberta = timesLiberta.includes(clubeJogador?.nome);

    const gruposNomes = [
        timesLiberta.slice(0, 4),
        timesLiberta.slice(4, 8),
        timesLiberta.slice(8, 12),
        timesLiberta.slice(12, 16)
    ];

    const simularFaseGrupos = (grupoNomes) => {
        let tab = grupoNomes.map(nome => ({ nome, isUser: nome === clubeJogador?.nome, pts: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gs: 0, sg: 0 }));
        for (let i = 0; i < 4; i++) {
            for (let j = i + 1; j < 4; j++) {
                let res = simularJogo(tab[i].nome, tab[j].nome, clubeJogador, ovrJogador, false, null);
                let tA = tab.find(t => t.nome === res.timeA);
                let tB = tab.find(t => t.nome === res.timeB);
                tA.j++; tB.j++;
                tA.gp += res.gA; tA.gs += res.gB;
                tB.gp += res.gB; tB.gs += res.gA;
                tA.sg = tA.gp - tA.gs; tB.sg = tB.gp - tB.gs;
                if (res.gA > res.gB) { tA.v++; tA.pts += 3; tB.d++; }
                else if (res.gB > res.gA) { tB.v++; tB.pts += 3; tA.d++; }
                else { tA.e++; tB.e++; tA.pts++; tB.pts++; }
            }
        }
        tab.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
        return tab.map((t, idx) => ({ ...t, pos: idx + 1 }));
    };

    const tabelasGrupos = gruposNomes.map((g, i) => ({
        letra: ["A", "B", "C", "D"][i],
        tabela: simularFaseGrupos(g)
    }));

    let classificados = [];
    tabelasGrupos.forEach(g => {
        classificados.push(g.tabela[0].nome, g.tabela[1].nome);
    });

    if (forcarResultadoUser !== null && isUserNaLiberta) {
        if (!classificados.includes(clubeJogador.nome)) {
            classificados[0] = clubeJogador.nome;
        }
    }

    const q1 = simularJogo(tabelasGrupos[0].tabela[0].nome, tabelasGrupos[1].tabela[1].nome, clubeJogador, ovrJogador, false, forcarResultadoUser !== null ? true : null);
    const q2 = simularJogo(tabelasGrupos[2].tabela[0].nome, tabelasGrupos[3].tabela[1].nome, clubeJogador, ovrJogador, false);
    const q3 = simularJogo(tabelasGrupos[1].tabela[0].nome, tabelasGrupos[0].tabela[1].nome, clubeJogador, ovrJogador, false);
    const q4 = simularJogo(tabelasGrupos[3].tabela[0].nome, tabelasGrupos[2].tabela[1].nome, clubeJogador, ovrJogador, false);

    const s1 = simularJogo(q1.vencedor, q4.vencedor, clubeJogador, ovrJogador, false, forcarResultadoUser !== null ? true : null);
    const s2 = simularJogo(q2.vencedor, q3.vencedor, clubeJogador, ovrJogador, false);

    const final = simularJogo(s1.vencedor, s2.vencedor, clubeJogador, ovrJogador, false, forcarResultadoUser);

    let posicaoTexto = "Fase de Grupos";
    const chegouQf = [q1, q2, q3, q4].flatMap(j => [j.timeA, j.timeB]).includes(clubeJogador?.nome);
    const chegouSf = [s1, s2].flatMap(j => [j.timeA, j.timeB]).includes(clubeJogador?.nome);
    const chegouF = final.timeA === clubeJogador?.nome || final.timeB === clubeJogador?.nome;
    const foiCampea = final.vencedor === clubeJogador?.nome;

    if (foiCampea) posicaoTexto = "Campeã 🏆";
    else if (chegouF) posicaoTexto = "Vice-campeã 🥈";
    else if (chegouSf) posicaoTexto = "Semifinalista 🥉";
    else if (chegouQf) posicaoTexto = "Quartas de Final";

    return {
        nome: dbCampeonatos.libertadores.nome,
        tipo: "grupos",
        participou: isUserNaLiberta,
        grupos: tabelasGrupos,
        fases: [
            { faseNome: "QUARTAS DE FINAL (JOGO ÚNICO)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: final.vencedor,
        posicao: isUserNaLiberta ? posicaoTexto : "Não Classificada",
        foiCampea: isUserNaLiberta && foiCampea
    };
};