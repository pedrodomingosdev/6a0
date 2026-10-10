import { bandeirasPaises } from "./bandeira_paises";
import { dbTimes, getTodosOsTimes, getForcaTime, getTimesPorDivisao } from "./times";

export const dbCampeonatos = {
    //FIFA
    fifa_world_cup: {
        id: "fifa_world_cup",
        nome: "FIFA Women's World Cup",
        ano: 2027, // Acontece a cada 4 anos (2027, 2031, etc.)
        tipo: "grupos"
    },
    fifa_champions_cup: {
        id: "fifa_champions_cup",
        nome: "FIFA Women's Champions Cup",
        ano: 2026,
        tipo: "mata_mata"
    },
    fifa_club_world_cup: {
        id: "fifa_club_world_cup",
        nome: "FIFA Women's Club World Cup",
        ano: 2028,
        tipo: "grupos"
    },
    //UEFA
    uwcl: {
        id: "uwcl",
        nome: "UEFA Women's Champions League",
        ano: 2026,
        tipo: "pontos_corridos",
        qtdTimes: 18,
        jogosFaseSuica: 6,
        playoffs: { classificam: 12 }
    },
    europa_cup: {
        id: "europa_cup",
        nome: "UEFA Women's Europa Cup",
        ano: 2026,
        tipo: "mata_mata"
    },
    //INGLATERRA
    wsl: {
        id: "wsl",
        name: "Women's Super League",
        ano: 2026,
        playoffs: { classificam: 3 },
        qtdTimes: 14,
        jogosTurnoEReturno: 26,
        rebaixamento: 2,
        tipo: "misto",
    },
    wsl2: {
        id: "wsl2",
        name: "Women's Super League 2",
        ano: 2026,
        playoffs: { classificam: 2 },
        qtdTimes: 12,
        jogosTurnoEReturno: 22,
        tipo: "misto",
    },
    subway_players_cup: {
        id: "subway_players_cup",
        name: "Subway Players Cup",
        ano: 2026,
        playoffs: { classificam: 8 },
        qtdTimes: 23,
        jogosFaseSuica: 6, // Formato suíço (6 jogos para cada)
        tipo: "misto",
    },
    adobe_womens_fa_cup: {
        id: "adobe_womens_fa_cup",
        nome: "Adobe Women's FA Cup",
        ano: 2026,
        tipo: "mata_mata"
    },
    //FRANÇA
    arkema_premiere_ligue: {
        id: "arkema_premiere_ligue",
        nome: "Arkema Première Ligue",
        ano: 2026,
        playoffs: { classificam: 4 },
        qtdTimes: 12,
        jogosTurnoEReturno: 22,
        tipo: "misto"
    },
    coupe_de_france_feminine: {
        id: "coupe_de_france_feminine",
        nome: "Coupe de France Féminine",
        ano: 2026,
        qtdTimes: 16,
        tipo: "mata_mata",
    },
    // ALEMANHA
    frauen_bundesliga: {
        id: "frauen_bundesliga",
        nome: "Google Pixel Frauen-Bundesliga",
        ano: 2026,
        playoffs: { classificam: 3 },
        qtdTimes: 14,
        jogosTurnoEReturno: 26,
        tipo: "pontos_corridos",
    },
    dfb_pokal_frauen: {
        id: "dfb_pokal_frauen",
        nome: "DFB-Pokal Frauen",
        ano: 2026,
        qtdTimes: 18,
        tipo: "mata_mata"
    },
    dfb_supercup_frauen: {
        id: "dfb_supercup_frauen",
        nome: "DFB-Supercup Frauen",
        ano: 2026,
        tipo: "mata_mata"
    },
    //ESPANHA
    liga_f_moeve: {
        id: "liga_f_moeve",
        nome: "Liga F Moeve",
        ano: 2026,
        playoffs: { classificam: 3 },
        qtdTimes: 16,
        jogosTurnoEReturno: 30,
        tipo: "misto",
    },
    copa_de_la_reina: {
        id: "copa_de_la_raina",
        nome: "Copa de la Reina",
        ano: 2026,
        qtdTimes: 18,
        tipo: "mata_mata",
    },
    supercopa_espanha: {
        id: "supercopa_espanha",
        nome: "Supercopa de España Femenina",
        ano: 2026,
        tipo: "mata_mata"
    },
    //ITALIA 
    serie_a_woman: {
        id: "serie_a_woman",
        name: "Serie A Woman",
        ano: 2026,
        playoffs: { classificam: 3 }, // Pinta o Top 3 para a Champions
        qtdTimes: 12,
        jogosTurnoEReturno: 22,
        tipo: "pontos_corridos",
    },
    coppa_italia_women: {
        id: "coppa_italia_women",
        nome: "Coppa Italia Women",
        ano: 2026,
        tipo: "mata_mata"
    },
    serie_a_womens_cup: {
        id: "serie_a_womens_cup",
        nome: "Serie A Women's Cup",
        ano: 2026,
        tipo: "grupos",
        playoffs: { classificam: 3 } // Ajuda a calcular a UI da fase de grupos
    },
    //CONCACAF
    champions_cup: {
        id: "champions_cup",
        nome: "CONCACAF W Champions Cup",
        ano: 2027,
        tipo: "mata_mata",
    },
    //USA
    nwsl: {
        id: "nwsl",
        nome: "NWSL",
        ano: 2026,
        tipo: "misto",
        playoffs: { classificam: 8 },
        qtdTimes: 16,
        jogosTurnoEReturno: 30,
    },
    nwsl_challenge_cup: {
        id: "nwsl_challenge_cup",
        nome: "NWSL Challenge Cup",
        ano: 2026,
        tipo: "mata_mata"
    },
    //CANADA
    nsl: {
        id: "nsl",
        nome: "NSL",
        ano: 2026,
        tipo: "misto",
        playoffs: { classificam: 4 },
        qtdTimes: 6,
        jogosTurnoEReturno: 25,
    },
    w_candian_championship: {
        id: "w_candian_championship",
        nome: "W Canadian Championship",
        ano: 2026,
        tipo: "mata_mata",
    },
    //MEXICO
    liga_feminil_bbva_apertura: {
        id: "liga_feminil_bbva_apertura",
        nome: "Liga Femenil BBVA - Apertura",
        ano: 2026,
        tipo: "grupos",
        qtdTimes: 18,
        playoffs: { classificam: 8 },
        jogosTurnoUnico: 14,
    },
    liga_feminil_bbva_classura: {
        id: "liga_feminil_bbva_classura",
        nome: "Liga Femenil BBVA - Classura",
        ano: 2026,
        tipo: "grupos",
        qtdTimes: 18,
        playoffs: { classificam: 8 },
        jogosTurnoUnico: 14,
    },
    //CONMEBOL
    libertadores: {
        id: "libertadores",
        nome: "CONMEBOL Libertadores Femenina",
        ano: 2026,
        tipo: "grupos",
        playoffs: { classificam: 8 }
    },
    //ARGENTINA
    campeonato_argentino: {
        id: "campeonato_argentino",
        nome: "Campeonato Femenino YPF",
        ano: 2026,
        tipo: "misto",
        playoffs: { classificam: 1 },
        qtdTimes: 16
    },
    //BRASIL
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
    //COLOMBIA
    campeonato_colombiano: {
        id: "campeonato_colombiano",
        nome: "Liga Femenina BetPlay Dimayor",
        ano: 2026,
        tipo: "misto",
        qtdTimes: 16,
        jogosTurnoUnico: 15,
        playoffs: { classificam: 8 },
    },
    //CHILE
    campeonato_chileno: {
        id: "campeonato_chileno",
        nome: "Liga Femenina de Chile",
        ano: 2026,
        tipo: "misto",
        qtdTimes: 13,
        jogosTurnoEReturno: 24,
        playoffs: { classificam: 8, modo: "ida_e_volta" },
    },


};

export const paisesSedeRotacao = ["ECU", "COL", "ARG", "BRA", "CHI", "PAR", "URU", "PER", "VEN", "BOL"];

export const historicoMundo = {
    anoAtual: 2026,
    campeaoA1: "Corinthians",
    viceA1: "Cruzeiro",
    campeaoCopa: "Palmeiras",
    campeaoLiberta: "Corinthians",
    paisSedeLiberta: "ECU",
    classificadosContinentalBR: ["Corinthians", "Palmeiras", "Cruzeiro"],
    campeaoArg: "Belgrano",
    classificadosContinentalARG: ["Belgrano"],
    campeaoCol: "Deportivo Cali",
    classificadosContinentalCOL: ["Deportivo Cali", "Independiente Santa Fé"],
    campeaoCHI: "Colo-Colo",
    classificadosContinentalCHI: ["Colo-Colo", "Universidad de Chile"],
    campeaoUsa: "NJ/NY Gotham FC",
    liderUsa: "Kansas City Current",
    viceLiderUsa: "Washington Spirit",
    classificadosContinentalUSA: ["NJ/NY Gotham FC", "San Diego Wave FC", "Washington Spirit"],
    campeaoMex: "Club América",
    classificadosContinentalMEX: ["Club América", "Monterrey", "Triges UNAL"],
    campeaoCan: "Vancouver Rise FC",
    classificadosContinentalCAN: ["Vancouver Rise FC"],
    campeaoEsp: "Barcelona",
    viceEsp: "Real Madrid",
    terceiroEsp: "Real Sociedad",
    quartoEsp: "CA Tenerife",
    campeaoCopaEsp: "Barcelona",
    viceCopaEsp: "Atletico Madrid",
    classificadosContinentalESP: ["Barcelona", "Real Madrid", "Real Sociedad"],
    camepaoEng: "Manchester City",
    classificadosContinentalENG: ["Manchester City", "Arsenal", "Chelsea"],
    campeaoIta: "Roma",
    classificadosContinentalITA: ["Roma", "Inter Milan", "Juventus"],
    campeaoFra: "OL Lyonnes",
    classificadosContinentalFRA: ["OL Lyonnes", "Paris FC", "PSG"],
    campeaoAle: "Bayern Munich",
    viceAle: "VfL Wolfsburg",
    campeaoCopaAle: "Bayern Munich",
    classificadosContinentalALE: ["Bayern Munich", "VfL Wolfsburg", "Eintracht Frankfurt"],
    ultimosCampeoesLiberta: ["Corinthians"],
    ultimosCampeoesConcacaf: ["Club América"],
    ultimosCampeoesUWCL: ["Barcelona"],
};

export const atualizarHistoricoMundo = (
    resBrasileirao, resCopaBrasil, resLibertadores, resChampionsCup, resArgentino,
    resColombiano, resChileno, resUsa, resMexApertura, resMexClassura,
    resWCanadian, resEspanha, resCopadeLaRainha, resFrances, resIngles,
    resItaliano, resAlemao, resDFBPokal
) => {
    historicoMundo.anoAtual += 1;

    // Gira a roleta do país sede da Libertadores para a próxima temporada
    const idxSede = paisesSedeRotacao.indexOf(historicoMundo.paisSedeLiberta);
    historicoMundo.paisSedeLiberta = paisesSedeRotacao[(idxSede + 1) % paisesSedeRotacao.length];

    const novoCampeaoLiberta = resLibertadores?.campeao || historicoMundo.campeaoLiberta;
    historicoMundo.campeaoLiberta = novoCampeaoLiberta;

    if (resCopaBrasil?.campeao) historicoMundo.campeaoCopa = resCopaBrasil.campeao;

    // --- VAGAS PARA O BRASIL ---
    if (resBrasileirao?.campeao && !resBrasileirao.isA2) {
        historicoMundo.campeaoA1 = resBrasileirao.campeao;

        if (resBrasileirao.fasesPlayoffs && resBrasileirao.fasesPlayoffs.length > 0) {
            const faseFinal = resBrasileirao.fasesPlayoffs[resBrasileirao.fasesPlayoffs.length - 1];
            const jogoFinal = faseFinal?.jogos?.[0];
            if (jogoFinal) {
                historicoMundo.viceA1 = jogoFinal.vencedor === jogoFinal.timeA ? jogoFinal.timeB : jogoFinal.timeA;
            }
        }

        let vagasDomesticasBR = historicoMundo.paisSedeLiberta === "BRA" ? 3 : 2;
        let classificadosBR = [];

        const timeCampeaoLiberta = getTodosOsTimes().find(t => t.nome === novoCampeaoLiberta);
        if (timeCampeaoLiberta?.liga === "BRA" || novoCampeaoLiberta === "Corinthians") {
            classificadosBR.push(novoCampeaoLiberta);
        }

        let adicionadosBR = 0;
        if (resBrasileirao.tabela) {
            for (let i = 0; i < resBrasileirao.tabela.length; i++) {
                if (adicionadosBR >= vagasDomesticasBR) break;
                const nomeTimeBR = resBrasileirao.tabela[i].nome;
                if (!classificadosBR.includes(nomeTimeBR)) {
                    classificadosBR.push(nomeTimeBR);
                    adicionadosBR++;
                }
            }
        }

        historicoMundo.classificadosContinentalBR = classificadosBR;
    }

    // --- VAGAS PARA A ARGENTINA ---
    if (resArgentino?.campeao) {
        historicoMundo.campeaoArg = resArgentino.campeao;
        let vagasDomesticasArg = historicoMundo.paisSedeLiberta === "ARG" ? 2 : 1;
        let classificadosArg = [];

        if (getTodosOsTimes().find(t => t.nome === novoCampeaoLiberta)?.liga === "ARG") {
            classificadosArg.push(novoCampeaoLiberta);
        }

        let adicionadosArg = 0;
        if (!classificadosArg.includes(resArgentino.campeao)) {
            classificadosArg.push(resArgentino.campeao);
            adicionadosArg++;
        }

        if (adicionadosArg < vagasDomesticasArg && resArgentino.vice && !classificadosArg.includes(resArgentino.vice)) {
            classificadosArg.push(resArgentino.vice);
            adicionadosArg++;
        }

        if (resArgentino.tabela) {
            for (let i = 0; i < resArgentino.tabela.length; i++) {
                if (adicionadosArg >= vagasDomesticasArg) break;
                const nomeTime = resArgentino.tabela[i].nome;
                if (!classificadosArg.includes(nomeTime)) {
                    classificadosArg.push(nomeTime);
                    adicionadosArg++;
                }
            }
        }

        historicoMundo.classificadosContinentalARG = classificadosArg;
    }

    // --- VAGAS PARA A COLÔMBIA ---
    if (resColombiano?.campeao) {
        historicoMundo.campeaoCol = resColombiano.campeao;
        let vagasDomesticasCol = historicoMundo.paisSedeLiberta === "COL" ? 3 : 2;
        let classificadosCol = [];

        if (getTodosOsTimes().find(t => t.nome === novoCampeaoLiberta)?.liga === "COL") {
            classificadosCol.push(novoCampeaoLiberta);
        }

        let adicionadosCol = 0;
        if (!classificadosCol.includes(resColombiano.campeao)) {
            classificadosCol.push(resColombiano.campeao);
            adicionadosCol++;
        }

        if (adicionadosCol < vagasDomesticasCol && resColombiano.vice && !classificadosCol.includes(resColombiano.vice)) {
            classificadosCol.push(resColombiano.vice);
            adicionadosCol++;
        }

        if (resColombiano.tabela) {
            for (let i = 0; i < resColombiano.tabela.length; i++) {
                if (adicionadosCol >= vagasDomesticasCol) break;
                const nomeTime = resColombiano.tabela[i].nome;
                if (!classificadosCol.includes(nomeTime)) {
                    classificadosCol.push(nomeTime);
                    adicionadosCol++;
                }
            }
        }

        historicoMundo.classificadosContinentalCOL = classificadosCol;
    }

    // --- VAGAS PARA O CHILE ---
    if (resChileno?.campeao) {
        historicoMundo.campeaoChi = resChileno.campeao;
        let vagasDomesticasChi = historicoMundo.paisSedeLiberta === "CHI" ? 3 : 2;
        let classificadosChi = [];

        if (getTodosOsTimes().find(t => t.nome === novoCampeaoLiberta)?.liga === "CHI") {
            classificadosChi.push(novoCampeaoLiberta);
        }

        let adicionadosChi = 0;
        if (!classificadosChi.includes(resChileno.campeao)) {
            classificadosChi.push(resChileno.campeao);
            adicionadosChi++;
        }

        if (adicionadosChi < vagasDomesticasChi && resChileno.vice && !classificadosChi.includes(resChileno.vice)) {
            classificadosChi.push(resChileno.vice);
            adicionadosChi++;
        }

        if (resChileno.tabela) {
            for (let i = 0; i < resChileno.tabela.length; i++) {
                if (adicionadosChi >= vagasDomesticasChi) break;
                const nomeTime = resChileno.tabela[i].nome;
                if (!classificadosChi.includes(nomeTime)) {
                    classificadosChi.push(nomeTime);
                    adicionadosChi++;
                }
            }
        }

        historicoMundo.classificadosContinentalCHI = classificadosChi;
    }

    // --- VAGAS PARA OS ESTADOS UNIDOS (NWSL) ---
    if (resUsa?.campeao) {
        historicoMundo.campeaoUsa = resUsa.campeao;
        if (resUsa.tabela && resUsa.tabela.length >= 2) {
            historicoMundo.liderUsa = resUsa.tabela[0].nome;
            historicoMundo.viceLiderUsa = resUsa.tabela[1].nome;
        }

        let classificadosUsa = [];
        if (resUsa.tabela) {
            for (let i = 0; i < 3 && i < resUsa.tabela.length; i++) {
                classificadosUsa.push(resUsa.tabela[i].nome);
            }
        }
        historicoMundo.classificadosContinentalUSA = classificadosUsa;
    }

    // --- VAGAS PARA O MÉXICO (BBVA) ---
    if (resMexApertura?.campeao || resMexClassura?.campeao) {
        historicoMundo.campeaoMex = resMexClassura?.campeao || resMexApertura?.campeao;
        let classificadosMex = [];

        if (resMexApertura?.campeao) classificadosMex.push(resMexApertura.campeao);

        if (resMexClassura?.campeao && !classificadosMex.includes(resMexClassura.campeao)) {
            classificadosMex.push(resMexClassura.campeao);
        }

        if (resMexClassura?.tabela) {
            for (let i = 0; i < resMexClassura.tabela.length; i++) {
                if (classificadosMex.length >= 3) break;
                if (!classificadosMex.includes(resMexClassura.tabela[i].nome)) {
                    classificadosMex.push(resMexClassura.tabela[i].nome);
                }
            }
        }
        historicoMundo.classificadosContinentalMEX = classificadosMex;
    }

    // --- VAGAS PARA O CANADÁ ---
    if (resWCanadian?.campeao) {
        historicoMundo.campeaoCan = resWCanadian.campeao;
        historicoMundo.classificadosContinentalCAN = [resWCanadian.campeao];
    }

    // --- CONCACAF W CHAMPIONS CUP ---
    if (resChampionsCup?.campeao) {
        if (!historicoMundo.ultimosCampeoesConcacaf) historicoMundo.ultimosCampeoesConcacaf = [];
        if (!historicoMundo.ultimosCampeoesConcacaf.includes(resChampionsCup.campeao)) {
            historicoMundo.ultimosCampeoesConcacaf.unshift(resChampionsCup.campeao);
        }
    }

    // --- VAGAS PARA A ESPANHA ---
    if (resEspanha?.campeao) {
        if (resEspanha.tabela && resEspanha.tabela.length >= 3) {
            historicoMundo.campeaoEsp = resEspanha.tabela[0].nome;
            historicoMundo.viceEsp = resEspanha.tabela[1].nome;
            historicoMundo.terceiroEsp = resEspanha.tabela[2].nome;
            if (resEspanha.tabela[3]) historicoMundo.quartoEsp = resEspanha.tabela[3].nome;
            historicoMundo.classificadosContinentalESP = [
                resEspanha.tabela[0].nome,
                resEspanha.tabela[1].nome,
                resEspanha.tabela[2].nome
            ];
        }
    }

    if (resCopadeLaRainha?.campeao) {
        historicoMundo.campeaoCopaEsp = resCopadeLaRainha.campeao;
        const faseFinal = resCopadeLaRainha.fases?.[resCopadeLaRainha.fases.length - 1];
        if (faseFinal && faseFinal.jogos?.length > 0) {
            const jogoFinal = faseFinal.jogos[0];
            historicoMundo.viceCopaEsp = jogoFinal.vencedor === jogoFinal.timeA ? jogoFinal.timeB : jogoFinal.timeA;
        }
    }

    // --- VAGAS PARA A FRANÇA ---
    if (resFrances?.campeao) {
        historicoMundo.campeaoFra = resFrances.campeao;
        historicoMundo.classificadosContinentalFRA = resFrances.classificadosChampions || (resFrances.tabela && resFrances.tabela.length >= 3 ? [
            resFrances.tabela[0].nome,
            resFrances.tabela[1].nome,
            resFrances.tabela[2].nome
        ] : ["OL Lyonnes", "Paris FC", "PSG"]);
    }

    // --- VAGAS PARA A INGLATERRA ---
    if (resIngles?.campeao && !resIngles.isA2) {
        historicoMundo.campeaoEng = resIngles.campeao;

        if (resIngles.tabela && resIngles.tabela.length >= 3) {
            historicoMundo.classificadosContinentalENG = [
                resIngles.tabela[0].nome,
                resIngles.tabela[1].nome,
                resIngles.tabela[2].nome
            ];
        }
    }

    // --- VAGAS PARA A ITÁLIA ---
    if (resItaliano?.campeao) {
        historicoMundo.campeaoIta = resItaliano.campeao;

        if (resItaliano.tabela && resItaliano.tabela.length >= 3) {
            historicoMundo.classificadosContinentalITA = [
                resItaliano.tabela[0].nome,
                resItaliano.tabela[1].nome,
                resItaliano.tabela[2].nome
            ];
        }
    }

    // --- VAGAS PARA A ALEMANHA ---
    if (resAlemao?.campeao) {
        historicoMundo.campeaoAle = resAlemao.campeao;
        historicoMundo.viceAle = resAlemao.vice;

        if (resAlemao.tabela && resAlemao.tabela.length >= 3) {
            historicoMundo.classificadosContinentalALE = [
                resAlemao.tabela[0].nome,
                resAlemao.tabela[1].nome,
                resAlemao.tabela[2].nome
            ];
        }
    }

    if (resDFBPokal?.campeao) {
        historicoMundo.campeaoCopaAle = resDFBPokal.campeao;
    }
};

export const resetarHistoricoMundo = () => {
    historicoMundo.anoAtual = 2026;
    historicoMundo.paisSedeLiberta = "ECU";
    historicoMundo.campeaoContinental = "Corinthians";
    historicoMundo.campeaoA1 = "Corinthians";
    historicoMundo.viceA1 = "Cruzeiro";
    historicoMundo.campeaoCopa = "Palmeiras";
    historicoMundo.classificadosContinentalBR = ["Corinthians", "Palmeiras", "Cruzeiro"];
    historicoMundo.campeaoArg = "Belgrano";
    historicoMundo.classificadosContinentalARG = ["Belgrano"];
    historicoMundo.campeaoCol = "Deportivo Cali";
    historicoMundo.classificadosContinentalCOL = ["Deportivo Cali", "Independiente Santa Fé"];
    historicoMundo.campeaoChi = "Colo-Colo";
    historicoMundo.classificadosContinentalCHI = ["Colo-Colo", "Universidad de Chile"];
    historicoMundo.campeaoUsa = "NJ/NY Gotham FC";
    historicoMundo.liderUsa = "Kansas City Current";
    historicoMundo.viceLiderUsa = "Washington Spirit";
    historicoMundo.classificadosContinentalUSA = ["NJ/NY Gotham FC", "San Diego Wave FC", "Washington Spirit"];
    historicoMundo.campeaoMex = "Club América";
    historicoMundo.classificadosContinentalMEX = ["Club América", "Monterrey", "Triges UNAL"];
    historicoMundo.campeaoCan = "Vancouver Rise FC";
    historicoMundo.classificadosContinentalCAN = ["Vancouver Rise FC"];
    historicoMundo.campeaoEsp = "Barcelona";
    historicoMundo.classificadosContinentalESP = ["Barcelona", "Real Madrid", "Real Sociedad"];
    historicoMundo.camepaoEng = "Manchester City";
    historicoMundo.classificadosContinentalENG = ["Manchester City", "Arsenal", "Chelsea"];
    historicoMundo.campeaoIta = "Roma";
    historicoMundo.classificadosContinentalITA = ["Roma", "Inter Milan", "Juventus"];
    historicoMundo.campeaoAle = "Bayern Munich";
    historicoMundo.viceAle = "VfL Wolfsburg";
    historicoMundo.campeaoCopaAle = "Bayern Munich";
    historicoMundo.classificadosContinentalALE = ["Bayern Munich", "VfL Wolfsburg", "Eintracht Frankfurt"];
    historicoMundo.campeaoFra = "OL Lyonnes";
    historicoMundo.classificadosContinentalFRA = ["OL Lyonnes", "Paris FC", "PSG"];
    historicoMundo.ultimosCampeoesLiberta = ["Corinthians"];
    historicoMundo.ultimosCampeoesConcacaf = ["Club América"];
    historicoMundo.ultimosCampeoesUWCL = ["Barcelona"];

};

const calcularBonusOVR = (ovrJogador) => {
    if (ovrJogador < 65) return 0;
    if (ovrJogador <= 75) return (ovrJogador - 64) * 0.4;
    if (ovrJogador <= 85) return 4 + (ovrJogador - 75) * 1.2;
    return 16 + (ovrJogador - 85) * 2;
};

const obterTimePorPais = (liga, idDesejado = null, jaUsados = []) => {
    const todosTimes = getTodosOsTimes();
    let timesDisponiveis = todosTimes.filter(t => t.liga === liga && !jaUsados.includes(t.nome));

    if (idDesejado) {
        const timeEspecifico = todosTimes.find(t => t.id === idDesejado || t.nome === idDesejado);
        if (timeEspecifico) return timeEspecifico.nome;
    }

    if (timesDisponiveis.length > 0) {
        // Baralhar para não ser sempre o mesmo
        return timesDisponiveis.sort(() => 0.5 - Math.random())[0].nome;
    }

    // Fallback se não houver equipas suficientes no dbTimes
    return `Clube Genérico (${liga})`;
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

export const simularCampeonatoArgentino = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesArg) => {
    const isUserArg = clubeJogador?.liga === "ARG";
    let timesNomes = timesArg.map(t => t.nome);

    if (isUserArg && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
        timesNomes.pop();
    }

    const simularFase = () => {
        const jogosTotais = timesNomes.length - 1;
        const tabela = timesNomes.map(nomeTime => {
            const isUser = clubeJogador?.nome === nomeTime;
            let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);
            let v = 0, e = 0, d = 0, gp = 0, gs = 0;

            for (let i = 0; i < jogosTotais; i++) {
                const prob = forca / 130;
                const r = Math.random();
                if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
                else if (r < prob + 0.25) { e++; gp += 1; gs += 1; }
                else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
            }
            return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosTotais, v, e, d, gp, gs, sg: gp - gs };
        });
        tabela.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);

        return tabela.map((t, idx) => ({ ...t, pos: idx + 1 }));
    };

    const tabelaApertura = simularFase();
    const tabelaClausura = simularFase();

    // CORREÇÃO: Se ativou o pênalti, o utilizador DEVE ganhar a Clausura para jogar a final!
    if (forcarResultadoUser !== null && isUserArg) {
        const userIdx = tabelaClausura.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 0) {
            const temp = tabelaClausura[0];
            tabelaClausura[0] = tabelaClausura[userIdx];
            tabelaClausura[userIdx] = temp;
            tabelaClausura.forEach((t, i) => t.pos = i + 1);
        }
        // Evita que vença a Apertura também (forçando assim o Trofeo de Campeonas)
        if (tabelaApertura[0].nome === clubeJogador.nome) {
            const temp = tabelaApertura[0];
            tabelaApertura[0] = tabelaApertura[1];
            tabelaApertura[1] = temp;
            tabelaApertura.forEach((t, i) => t.pos = i + 1);
        }
    }

    const campeaoApertura = tabelaApertura[0].nome;
    const campeaoClausura = tabelaClausura[0].nome;

    const tabelaGeral = timesNomes.map(nome => {
        const tA = tabelaApertura.find(t => t.nome === nome);
        const tC = tabelaClausura.find(t => t.nome === nome);
        return {
            nome,
            isUser: tA.isUser,
            j: tA.j + tC.j,
            v: tA.v + tC.v,
            e: tA.e + tC.e,
            d: tA.d + tC.d,
            gp: tA.gp + tC.gp,
            gs: tA.gs + tC.gs,
            sg: tA.sg + tC.sg,
            pts: tA.pts + tC.pts
        };
    });
    tabelaGeral.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaGeralClassificada = tabelaGeral.map((t, idx) => ({ ...t, pos: idx + 1 }));

    let campeaoTorneio = "";
    let viceTorneio = "";
    let fasesPlayoffs = [];

    if (campeaoApertura !== campeaoClausura) {
        let finalista1 = campeaoApertura;
        let finalista2 = campeaoClausura;

        const forcarUserFinal = (forcarResultadoUser !== null && isUserArg) ? forcarResultadoUser : null;

        const jogoFinal = simularJogo(finalista1, finalista2, clubeJogador, ovrJogador, false, forcarUserFinal);

        campeaoTorneio = jogoFinal.vencedor;
        viceTorneio = jogoFinal.vencedor === finalista1 ? finalista2 : finalista1;

        fasesPlayoffs = [{ faseNome: `TROFEO DE CAMPEONAS (${campeaoApertura} x ${campeaoClausura})`, jogos: [jogoFinal] }];
    } else {
        campeaoTorneio = campeaoApertura;
        viceTorneio = tabelaGeralClassificada.find(t => t.nome !== campeaoTorneio).nome;
        fasesPlayoffs = [{ faseNome: `🏆 ${campeaoTorneio.toUpperCase()} VENCEU APERTURA E CLAUSURA E É O CAMPEÃO DIRETO!`, jogos: [] }];
    }
    const foiCampea = campeaoTorneio === clubeJogador?.nome;
    const userTabelaPos = tabelaGeralClassificada.find(t => t.isUser)?.pos || timesArg.length;
    let posicaoTexto = `${userTabelaPos}º Lugar (Anual)`;

    if (isUserArg) {
        if (foiCampea) posicaoTexto = "Campeã Absoluta 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
    }

    return {
        nome: "Campeonato Femenino YPF",
        tipo: "pontos_corridos",
        tabela: tabelaGeralClassificada,
        tabelasExtras: [
            { titulo: "Fase Apertura", dados: tabelaApertura },
            { titulo: "Fase Clausura", dados: tabelaClausura }
        ],
        fasesPlayoffs,
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea,
        isA2: false
    };
};

export const simularCampeonatoColombiano = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesCol) => {
    const isUserCol = clubeJogador?.liga === "COL";
    let timesNomes = timesCol.map(t => t.nome);

    if (isUserCol && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
        timesNomes.pop();
    }

    const regras = dbCampeonatos.campeonato_colombiano;
    const jogosNaFaseUnica = regras.jogosTurnoUnico;

    const tabelaFaseUnica = timesNomes.map((nomeTime) => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

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

    tabelaFaseUnica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaFaseUnica.map((item, idx) => ({ ...item, pos: idx + 1 }));

    // CORREÇÃO: Garante o 8º lugar ao clube para jogar o Quadrangular
    if (forcarResultadoUser !== null && isUserCol) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 7) {
            const temp = tabelaClassificada[7];
            tabelaClassificada[7] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    let top8 = tabelaClassificada.slice(0, 8).map(t => t.nome);
    const userClassificouTop8 = top8.includes(clubeJogador?.nome);

    const grupoANomes = [top8[0], top8[3], top8[4], top8[7]];
    const grupoBNomes = [top8[1], top8[2], top8[5], top8[6]];

    const simularQuadrangular = (nomesGrupo) => {
        let tab = nomesGrupo.map(nome => ({
            nome: nome,
            isUser: nome === clubeJogador?.nome,
            pts: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gs: 0, sg: 0
        }));

        for (let i = 0; i < tab.length; i++) {
            for (let j = i + 1; j < tab.length; j++) {
                let resIda = simularJogo(tab[i].nome, tab[j].nome, clubeJogador, ovrJogador, false, null);
                let resVolta = simularJogo(tab[j].nome, tab[i].nome, clubeJogador, ovrJogador, false, null);

                [resIda, resVolta].forEach(res => {
                    let tA = tab.find(t => t.nome === res.timeA);
                    let tB = tab.find(t => t.nome === res.timeB);

                    if (tA && tB) {
                        tA.j++; tB.j++;
                        tA.gp += res.gA; tA.gs += res.gB;
                        tB.gp += res.gB; tB.gs += res.gA;
                        tA.sg = tA.gp - tA.gs; tB.sg = tB.gp - tB.gs;

                        if (res.gA > res.gB) { tA.v++; tA.pts += 3; tB.d++; }
                        else if (res.gB > res.gA) { tB.v++; tB.pts += 3; tA.d++; }
                        else { tA.e++; tB.e++; tA.pts++; tB.pts++; }
                    }
                });
            }
        }
        tab.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
        return tab.map((t, idx) => ({ ...t, pos: idx + 1 }));
    };

    let tabelaGrupoA = simularQuadrangular(grupoANomes);
    let tabelaGrupoB = simularQuadrangular(grupoBNomes);

    // CORREÇÃO: Garante que passa em 1º no Quadrangular
    if (forcarResultadoUser !== null && isUserCol) {
        const indexA = tabelaGrupoA.findIndex(t => t.nome === clubeJogador.nome);
        if (indexA > 0) {
            const temp = tabelaGrupoA[0];
            tabelaGrupoA[0] = tabelaGrupoA[indexA];
            tabelaGrupoA[indexA] = temp;
            tabelaGrupoA.forEach((t, i) => t.pos = i + 1);
        }
        const indexB = tabelaGrupoB.findIndex(t => t.nome === clubeJogador.nome);
        if (indexB > 0) {
            const temp = tabelaGrupoB[0];
            tabelaGrupoB[0] = tabelaGrupoB[indexB];
            tabelaGrupoB[indexB] = temp;
            tabelaGrupoB.forEach((t, i) => t.pos = i + 1);
        }
    }

    const primeiroA = tabelaGrupoA[0].nome;
    const segundoA = tabelaGrupoA[1].nome;
    const primeiroB = tabelaGrupoB[0].nome;
    const segundoB = tabelaGrupoB[1].nome;

    let userForcarSemi1 = null;
    let userForcarSemi2 = null;

    if (forcarResultadoUser !== null && isUserCol) {
        if (primeiroA === clubeJogador.nome || segundoB === clubeJogador.nome) userForcarSemi1 = true;
        if (primeiroB === clubeJogador.nome || segundoA === clubeJogador.nome) userForcarSemi2 = true;
    }

    const semi1 = simularJogo(primeiroA, segundoB, clubeJogador, ovrJogador, true, userForcarSemi1);
    const semi2 = simularJogo(primeiroB, segundoA, clubeJogador, ovrJogador, true, userForcarSemi2);

    const vencedorSemi1 = semi1.vencedor;
    const vencedorSemi2 = semi2.vencedor;

    let userForcarFinal = null;
    if (forcarResultadoUser !== null && isUserCol && (vencedorSemi1 === clubeJogador.nome || vencedorSemi2 === clubeJogador.nome)) {
        userForcarFinal = forcarResultadoUser;
    }

    const final = simularJogo(vencedorSemi1, vencedorSemi2, clubeJogador, ovrJogador, true, userForcarFinal);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || timesCol.length;
    let posicaoTexto = `${userTabelaPos}º Lugar (Fase Única)`;

    if (isUserCol) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([primeiroA, segundoA, primeiroB, segundoB].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else if (userClassificouTop8) posicaoTexto = "Quadrangular Semifinal";
    }

    return {
        nome: regras.nome,
        tipo: "pontos_corridos",
        isA2: false,
        tabela: tabelaClassificada,
        tabelasExtras: [
            { titulo: "Quadrangular - Grupo A", dados: tabelaGrupoA },
            { titulo: "Quadrangular - Grupo B", dados: tabelaGrupoB }
        ],
        fasesPlayoffs: [
            { faseNome: "SEMIFINAIS (IDA E VOLTA)", jogos: [semi1, semi2] },
            { faseNome: "GRANDE FINAL (IDA E VOLTA)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCampeonatoChileno = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesChi) => {
    const isUserChi = clubeJogador?.liga === "CHI";
    let timesNomes = timesChi.map(t => t.nome);

    if (isUserChi && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
        timesNomes.pop();
    }

    const regras = dbCampeonatos.campeonato_chileno;
    const jogosTotais = regras.jogosTurnoEReturno;

    const tabelaFaseUnica = timesNomes.map((nomeTime) => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < jogosTotais; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosTotais, v, e, d, gp, gs, sg: gp - gs };
    });

    tabelaFaseUnica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaFaseUnica.map((item, idx) => ({ ...item, pos: idx + 1 }));

    // CORREÇÃO: Garante o 8º lugar ao clube
    if (forcarResultadoUser !== null && isUserChi) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 7) {
            const temp = tabelaClassificada[7];
            tabelaClassificada[7] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    let top8 = tabelaClassificada.slice(0, 8).map(t => t.nome);
    const userClassificouTop8 = top8.includes(clubeJogador?.nome);
    const forcarUserFinal = (forcarResultadoUser !== null && isUserChi) ? forcarResultadoUser : null;

    const q1 = simularJogo(top8[0], top8[7], clubeJogador, ovrJogador, true, forcarUserFinal !== null ? true : null);
    const q2 = simularJogo(top8[1], top8[6], clubeJogador, ovrJogador, true);
    const q3 = simularJogo(top8[2], top8[5], clubeJogador, ovrJogador, true);
    const q4 = simularJogo(top8[3], top8[4], clubeJogador, ovrJogador, true);

    const s1 = simularJogo(q1.vencedor, q4.vencedor, clubeJogador, ovrJogador, true, forcarUserFinal !== null ? true : null);
    const s2 = simularJogo(q2.vencedor, q3.vencedor, clubeJogador, ovrJogador, true);

    const final = simularJogo(s1.vencedor, s2.vencedor, clubeJogador, ovrJogador, true, forcarUserFinal);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || timesChi.length;
    let posicaoTexto = `${userTabelaPos}º Lugar (Fase Única)`;

    if (isUserChi) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([s1.vencedor, s2.vencedor].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else if (userClassificouTop8) posicaoTexto = "Quartas de Final";
    }

    return {
        nome: regras.nome,
        tipo: "pontos_corridos",
        isA2: false,
        tabela: tabelaClassificada,
        fasesPlayoffs: [
            { faseNome: "QUARTAS DE FINAL (IDA E VOLTA - TOP 8)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (IDA E VOLTA)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (IDA E VOLTA)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCampeonatoEstadosUnidos = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesChi) => {
    const isUserUsa = clubeJogador?.liga === "USA";
    let timesNomes = timesChi.map(t => t.nome);

    if (isUserUsa && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
        timesNomes.pop();
    }

    const regras = dbCampeonatos.nwsl;
    const jogosTotais = regras.jogosTurnoEReturno;

    const tabelaFaseUnica = timesNomes.map((nomeTime) => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < jogosTotais; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosTotais, v, e, d, gp, gs, sg: gp - gs };
    });

    tabelaFaseUnica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaFaseUnica.map((item, idx) => ({ ...item, pos: idx + 1 }));

    // CORREÇÃO: Garante o 8º lugar ao clube
    if (forcarResultadoUser !== null && isUserUsa) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 7) {
            const temp = tabelaClassificada[7];
            tabelaClassificada[7] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    let top8 = tabelaClassificada.slice(0, 8).map(t => t.nome);
    const userClassificouTop8 = top8.includes(clubeJogador?.nome);

    const jogarMataMataUsa = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserUsa && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true; // Ganha tudo até a final
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    const q1 = jogarMataMataUsa(top8[0], top8[7]);
    const q2 = jogarMataMataUsa(top8[1], top8[6]);
    const q3 = jogarMataMataUsa(top8[2], top8[5]);
    const q4 = jogarMataMataUsa(top8[3], top8[4]);

    const s1 = jogarMataMataUsa(q1.vencedor, q4.vencedor);
    const s2 = jogarMataMataUsa(q2.vencedor, q3.vencedor);

    const final = jogarMataMataUsa(s1.vencedor, s2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || timesChi.length;
    let posicaoTexto = `${userTabelaPos}º Lugar (Fase Única)`;

    if (isUserUsa) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([s1.vencedor, s2.vencedor].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else if (userClassificouTop8) posicaoTexto = "Quartas de Final";
    }

    return {
        nome: regras.nome,
        tipo: "pontos_corridos",
        isA2: false,
        tabela: tabelaClassificada,
        fasesPlayoffs: [
            { faseNome: "QUARTAS DE FINAL", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCampeonatoItaliano = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesIta = []) => {
    const isUserIta = clubeJogador?.div === "Serie A Woman";

    let timesNomes = timesIta.filter(t => t && t.nome).map(t => t.nome);
    if (isUserIta && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
    }

    const regras = dbCampeonatos.serie_a_woman;
    const jogosTotais = regras.jogosTurnoEReturno;

    const tabelaFaseUnica = timesNomes.map((nomeTime) => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < jogosTotais; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosTotais, v, e, d, gp, gs, sg: gp - gs };
    });

    tabelaFaseUnica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaFaseUnica.map((item, idx) => ({ ...item, pos: idx + 1 }));

    // Força o título se ativar evento de pênalti (mesmo sendo pontos corridos, para segurança)
    if (forcarResultadoUser !== null && isUserIta) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 0) {
            const temp = tabelaClassificada[0];
            tabelaClassificada[0] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    const campeaoTorneio = tabelaClassificada[0].nome;
    const viceTorneio = tabelaClassificada[1].nome;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || 12;
    let posicaoTexto = `${userTabelaPos}º Lugar`;

    if (isUserIta) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (userTabelaPos === 2) posicaoTexto = "Vice-campeã 🥈";
        else if (userTabelaPos === 3) posicaoTexto = "3º Lugar (Vaga Champions) ✈️";
    }

    return {
        nome: regras.name,
        tipo: "pontos_corridos",
        isA2: false,
        tabela: tabelaClassificada,
        fasesPlayoffs: [],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCoppaItalia = (clubeJogador, ovrJogador, forcarResultadoUser = null) => {
    const isUserIta = clubeJogador?.liga === "ITA";

    // 1. Pega todos os times italianos (Serie A e Serie B) da base geral
    let timesParticipantesObj = getTodosOsTimes().filter(t => t.liga === "ITA");

    // Garante que o clube do jogador está na lista, se for italiano
    if (isUserIta && !timesParticipantesObj.some(t => t.nome === clubeJogador.nome)) {
        timesParticipantesObj.unshift(clubeJogador);
    }

    // Pega apenas os nomes sem repetições
    let timesParticipantes = Array.from(new Set(timesParticipantesObj.map(t => t.nome)));

    // Preenche com genéricos caso, por algum motivo, não chegue a 16
    let contadorGenerico = 1;
    while (timesParticipantes.length < 16) {
        timesParticipantes.push(`Equipe Serie B ${contadorGenerico++}`);
    }

    // Corta exatamente em 16 times
    timesParticipantes = timesParticipantes.slice(0, 16);

    // Embaralha para o sorteio da Copa
    timesParticipantes = timesParticipantes.sort(() => 0.5 - Math.random());

    const jogarCopaUnica = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserIta && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true; // Vence tudo até a final se ativar o pênalti
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    let fasesPlayoffs = [];

    // OITAVAS DE FINAL
    let oitavas = [];
    let vencedoresOitavas = [];
    for (let i = 0; i < 16; i += 2) {
        let jogo = jogarCopaUnica(timesParticipantes[i], timesParticipantes[i + 1], false);
        oitavas.push(jogo);
        vencedoresOitavas.push(jogo.vencedor);
    }
    fasesPlayoffs.push({ faseNome: "OITAVAS DE FINAL (JOGO ÚNICO)", jogos: oitavas });

    // QUARTAS DE FINAL
    let quartas = [];
    let vencedoresQuartas = [];
    for (let i = 0; i < 8; i += 2) {
        let jogo = jogarCopaUnica(vencedoresOitavas[i], vencedoresOitavas[i + 1], false);
        quartas.push(jogo);
        vencedoresQuartas.push(jogo.vencedor);
    }
    fasesPlayoffs.push({ faseNome: "QUARTAS DE FINAL (JOGO ÚNICO)", jogos: quartas });

    // SEMIFINAIS
    let semis = [];
    let vencedoresSemis = [];
    for (let i = 0; i < 4; i += 2) {
        let jogo = jogarCopaUnica(vencedoresQuartas[i], vencedoresQuartas[i + 1], false);
        semis.push(jogo);
        vencedoresSemis.push(jogo.vencedor);
    }
    fasesPlayoffs.push({ faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: semis });

    // GRANDE FINAL
    const final = jogarCopaUnica(vencedoresSemis[0], vencedoresSemis[1], true);
    fasesPlayoffs.push({ faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] });

    const campeaoTorneio = final.vencedor;
    const foiCampea = isUserIta && campeaoTorneio === clubeJogador.nome;

    let posicaoTexto = "Não Participou";
    if (isUserIta) {
        if (foiCampea) {
            posicaoTexto = "Campeã 🏆";
        } else {
            // Varre de trás para frente para descobrir onde o utilizador foi eliminado
            for (let i = fasesPlayoffs.length - 1; i >= 0; i--) {
                let fase = fasesPlayoffs[i];
                let jogoDoUser = fase.jogos.find(j => j.timeA === clubeJogador.nome || j.timeB === clubeJogador.nome);

                if (jogoDoUser) {
                    if (fase.faseNome.includes("FINAL") && !fase.faseNome.includes("DE FINAL")) posicaoTexto = "Vice-campeã 🥈";
                    else if (fase.faseNome.includes("SEMI")) posicaoTexto = "Semifinalista 🥉";
                    else if (fase.faseNome.includes("QUARTAS")) posicaoTexto = "Quartas de Final";
                    else if (fase.faseNome.includes("OITAVAS")) posicaoTexto = "Oitavas de Final";
                    break;
                }
            }
        }
    }

    return {
        nome: "Coppa Italia Women",
        tipo: "mata_mata",
        participou: isUserIta,
        fases: fasesPlayoffs,
        campeao: campeaoTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularSerieAWomensCup = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesIta = []) => {
    // Filtramos apenas as 12 equipas da Serie A Woman
    const isUserIta = clubeJogador?.liga === "ITA" && clubeJogador?.div === "Serie A Woman";

    let timesNomes = timesIta.filter(t => t && t.nome).map(t => t.nome);
    if (isUserIta && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
    }

    // Remove duplicatas e fecha em 12 equipas
    timesNomes = Array.from(new Set(timesNomes));
    let contIta = 1;
    while (timesNomes.length < 12) {
        timesNomes.push(`Equipe Serie A ${contIta++}`);
    }
    timesNomes = timesNomes.slice(0, 12).sort(() => 0.5 - Math.random()); // Embaralha para o sorteio dos grupos

    const isUserNaCopa = timesNomes.includes(clubeJogador?.nome);

    // Divide as 12 equipas em 3 grupos de 4
    const grupos = [
        { letra: 'A', times: timesNomes.slice(0, 4) },
        { letra: 'B', times: timesNomes.slice(4, 8) },
        { letra: 'C', times: timesNomes.slice(8, 12) }
    ];

    const simularFaseGrupos = (nomesGrupo) => {
        let tab = nomesGrupo.map(nomeTime => ({
            nome: nomeTime,
            isUser: clubeJogador?.nome === nomeTime,
            pts: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gs: 0, sg: 0
        }));

        for (let i = 0; i < tab.length; i++) {
            for (let j = i + 1; j < tab.length; j++) {
                // Todos contra todos em turno único dentro do grupo
                let res = simularJogo(tab[i].nome, tab[j].nome, clubeJogador, ovrJogador, false, null);
                let tA = tab.find(t => t.nome === res.timeA);
                let tB = tab.find(t => t.nome === res.timeB);

                if (tA && tB) {
                    tA.j++; tB.j++;
                    tA.gp += res.gA; tA.gs += res.gB;
                    tB.gp += res.gB; tB.gs += res.gA;
                    tA.sg = tA.gp - tA.gs; tB.sg = tB.gp - tB.gs;

                    if (res.gA > res.gB) { tA.v++; tA.pts += 3; tB.d++; }
                    else if (res.gB > res.gA) { tB.v++; tB.pts += 3; tA.d++; }
                    else { tA.e++; tB.e++; tA.pts++; tB.pts++; }
                }
            }
        }
        tab.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
        return tab.map((t, idx) => ({ ...t, pos: idx + 1 }));
    };

    const tabelasGrupos = grupos.map(g => ({
        letra: g.letra,
        tabela: simularFaseGrupos(g.times)
    }));

    // Define os classificados: Os 1ºs de cada grupo + o melhor 2º
    let primeiros = [tabelasGrupos[0].tabela[0], tabelasGrupos[1].tabela[0], tabelasGrupos[2].tabela[0]];
    let segundos = [tabelasGrupos[0].tabela[1], tabelasGrupos[1].tabela[1], tabelasGrupos[2].tabela[1]];

    // Ordena os segundos classificados para encontrar o melhor
    segundos.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);

    let classificados = [...primeiros, segundos[0]].map(t => t.nome);

    // Se ativou o pênalti mas não passou de fase, força o clube do jogador a entrar no lugar do melhor 2º
    if (forcarResultadoUser !== null && isUserNaCopa && !classificados.includes(clubeJogador.nome)) {
        classificados[3] = clubeJogador.nome;
    }

    // Semifinais em Jogo Único
    const jogarMataMataCopa = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserNaCopa && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    // Chaveamento: Melhor 1º x Melhor 2º / 2º Melhor 1º x 3º Melhor 1º (Simplificado)
    const s1 = jogarMataMataCopa(classificados[0], classificados[3]);
    const s2 = jogarMataMataCopa(classificados[1], classificados[2]);

    const final = jogarMataMataCopa(s1.vencedor, s2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const foiCampea = isUserNaCopa && campeaoTorneio === clubeJogador?.nome;

    let posicaoTexto = "Não Participou";
    if (isUserNaCopa) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (final.timeA === clubeJogador.nome || final.timeB === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([s1.timeA, s1.timeB, s2.timeA, s2.timeB].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else posicaoTexto = "Fase de Grupos";
    }

    return {
        nome: "Serie A Women's Cup",
        tipo: "grupos",
        participou: isUserNaCopa,
        grupos: tabelasGrupos,
        fasesPlayoffs: [
            { faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularNWSLChallengeCup = (clubeJogador, ovrJogador, campeaoPlayoffs, liderLiga, viceLiderLiga, forcarResultadoUser = null) => {
    let t1 = campeaoPlayoffs;
    let t2 = liderLiga;

    // Se o campeão dos playoffs for o mesmo que ficou em 1º na liga, puxa o 2º lugar
    if (t1 === t2) {
        t2 = viceLiderLiga || "Portland Thorns FC";
    }

    const isUserUsa = clubeJogador?.liga === "USA";

    // CORREÇÃO: Se o evento do pênalti ativou, o seu clube PRECISA estar na final!
    if (forcarResultadoUser !== null && isUserUsa) {
        if (t1 !== clubeJogador.nome && t2 !== clubeJogador.nome) {
            t2 = clubeJogador.nome; // Tira o adversário automático e coloca o seu time para a decisão
        }
    }

    const jogoSupercopa = simularJogo(t1, t2, clubeJogador, ovrJogador, false, forcarResultadoUser);
    const foiCampea = jogoSupercopa.vencedor === clubeJogador?.nome;
    const participou = t1 === clubeJogador?.nome || t2 === clubeJogador?.nome;

    return {
        nome: dbCampeonatos.nwsl_challenge_cup.nome,
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

export const simularCampeonatoCanadense = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesCan) => {
    const isUserCan = clubeJogador?.div === "NSL";
    let timesNomes = (timesCan || []).filter(t => t && t.nome).map(t => t.nome);

    if (isUserCan && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
    }

    const regras = dbCampeonatos.nsl;
    const jogosTotais = regras.jogosTurnoEReturno; // 25 jogos

    // Preenche com equipas genéricas até ter exatamente 6 equipas
    while (timesNomes.length < regras.qtdTimes) timesNomes.push(`Clube NSL ${timesNomes.length + 1}`);
    timesNomes = Array.from(new Set(timesNomes)).slice(0, regras.qtdTimes);

    const tabelaFaseUnica = timesNomes.map((nomeTime) => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < jogosTotais; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosTotais, v, e, d, gp, gs, sg: gp - gs };
    });

    tabelaFaseUnica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaFaseUnica.map((item, idx) => ({ ...item, pos: idx + 1 }));

    // Garante o 4º lugar ao clube para os playoffs se usar o evento
    if (forcarResultadoUser !== null && isUserCan) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 3) {
            const temp = tabelaClassificada[3];
            tabelaClassificada[3] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    let top4 = tabelaClassificada.slice(0, 4).map(t => t.nome);
    const userClassificouTop4 = top4.includes(clubeJogador?.nome);

    const jogarMataMataCan = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserCan && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    const q1 = jogarMataMataCan(top4[0], top4[3]);
    const q2 = jogarMataMataCan(top4[1], top4[2]);

    const final = jogarMataMataCan(q1.vencedor, q2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || 6;
    let posicaoTexto = `${userTabelaPos}º Lugar (Fase Única)`;

    if (isUserCan) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([q1.timeA, q1.timeB, q2.timeA, q2.timeB].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
    }

    return {
        nome: regras.nome,
        tipo: "pontos_corridos",
        isA2: false,
        tabela: tabelaClassificada,
        fasesPlayoffs: [
            { faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: [q1, q2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularWCanadianChampionship = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesCan) => {
    const isUserCan = clubeJogador?.liga === "CAN";

    // FILTRO DE SEGURANÇA: Ignora espaços vazios
    let p = (timesCan || []).filter(t => t && t.nome).map(t => t.nome);

    if (isUserCan && !p.includes(clubeJogador.nome)) {
        p.unshift(clubeJogador.nome);
    }

    // Preenche a lista até ter as exatas 8 equipas (6 da liga + 2 convidadas locais)
    while (p.length < 8) p.push(`Convidado Canadense ${p.length + 1}`);
    p = Array.from(new Set(p)).slice(0, 8).sort(() => 0.5 - Math.random()); // Sorteio aleatório

    // Quartas de Final (8 equipas)
    const q1 = simularJogo(p[0], p[1], clubeJogador, ovrJogador, false, forcarResultadoUser !== null ? true : null);
    const q2 = simularJogo(p[2], p[3], clubeJogador, ovrJogador, false);
    // Nota: Como o forçar Vitória passa true se houver User, colocamos a verificação de force num lado da chave
    const q3 = simularJogo(p[4], p[5], clubeJogador, ovrJogador, false, forcarResultadoUser !== null ? true : null);
    const q4 = simularJogo(p[6], p[7], clubeJogador, ovrJogador, false);

    // Semifinais (4 equipas)
    const s1 = simularJogo(q1.vencedor, q2.vencedor, clubeJogador, ovrJogador, false, forcarResultadoUser !== null ? true : null);
    const s2 = simularJogo(q3.vencedor, q4.vencedor, clubeJogador, ovrJogador, false);

    // Final
    const final = simularJogo(s1.vencedor, s2.vencedor, clubeJogador, ovrJogador, false, forcarResultadoUser);

    const campeaoTorneio = final.vencedor;
    const foiCampea = campeaoTorneio === clubeJogador?.nome;

    let posicaoText = "Quartas de Final";
    if (isUserCan) {
        if (foiCampea) posicaoText = "Campeã 🏆";
        else if ([s1.vencedor, s2.vencedor].includes(clubeJogador.nome)) posicaoText = "Vice-campeã 🥈";
        else if ([q1.vencedor, q2.vencedor, q3.vencedor, q4.vencedor].includes(clubeJogador.nome)) posicaoText = "Semifinalista 🥉";
    }

    return {
        // Fallback do nome caso tenha um erro de digitação (candian vs canadian) na DB
        nome: "W Canadian Championship",
        tipo: "mata_mata",
        fases: [
            { faseNome: "QUARTAS DE FINAL (JOGO ÚNICO)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        posicao: isUserCan ? posicaoText : "Não Participou",
        foiCampea,
        participou: isUserCan
    };
};

export const simularCampeonatoMexicanoApertura = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesMex) => {
    const isUserMex = clubeJogador?.liga === "MEX";
    let timesNomes = timesMex.map(t => t.nome);

    if (isUserMex && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
        timesNomes.pop();
    }

    const regras = dbCampeonatos.liga_feminil_bbva_apertura;
    const jogosPorEquipa = regras.jogosTurnoUnico; // 14 jogos

    // Dividir em Grupo A e Grupo B (9 equipas cada)
    const timesGrupoA = timesNomes.slice(0, 9);
    const timesGrupoB = timesNomes.slice(9, 18);

    const simularGrupo = (nomesGrupo, nomeDoGrupo) => {
        let tab = nomesGrupo.map(nome => ({
            nome: nome,
            isUser: nome === clubeJogador?.nome,
            pts: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gs: 0, sg: 0,
            grupo: nomeDoGrupo
        }));

        for (let i = 0; i < tab.length; i++) {
            let forcaA = getForcaTime(tab[i].nome) + (tab[i].isUser ? calcularBonusOVR(ovrJogador) : 0);

            // Simular 14 jogos contra equipas mistas para simplificar, ou rodar o próprio grupo se preferir
            // Neste caso, a liga mexicana original joga todos contra todos, mas como pediu formato de grupos
            // vamos simular 14 jogos aleatórios baseados na força de cada equipa no seu grupo.
            for (let j = 0; j < jogosPorEquipa; j++) {
                const prob = forcaA / 130;
                const r = Math.random();
                if (r < prob) { tab[i].v++; tab[i].gp += Math.floor(Math.random() * 3) + 1; tab[i].gs += Math.floor(Math.random() * 2); }
                else if (r < prob + 0.25) { tab[i].e++; const g = Math.floor(Math.random() * 2); tab[i].gp += g; tab[i].gs += g; }
                else { tab[i].d++; tab[i].gp += Math.floor(Math.random() * 2); tab[i].gs += Math.floor(Math.random() * 3) + 1; }
                tab[i].j++;
            }
            tab[i].sg = tab[i].gp - tab[i].gs;
            tab[i].pts = (tab[i].v * 3) + tab[i].e;
        }

        tab.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
        return tab.map((t, idx) => ({ ...t, pos: idx + 1 }));
    };

    let tabelaGrupoA = simularGrupo(timesGrupoA, "A");
    let tabelaGrupoB = simularGrupo(timesGrupoB, "B");

    // Tabela Geral para critério de desempate
    const tabelaGeral = [...tabelaGrupoA, ...tabelaGrupoB]
        .sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp)
        .map((t, idx) => ({ ...t, posGeral: idx + 1 }));

    const vagasPorGrupo = regras.playoffs.classificam / 2; // Divide as 8 vagas pelos 2 grupos
    let classificadosA = tabelaGrupoA.slice(0, vagasPorGrupo);
    let classificadosB = tabelaGrupoB.slice(0, vagasPorGrupo);

    const userNoA = classificadosA.some(t => t.nome === clubeJogador.nome);
    const userNoB = classificadosB.some(t => t.nome === clubeJogador.nome);
    const userClassificouTop4 = userNoA || userNoB;

    // Forçar classificação do user se ativou penálti
    if (forcarResultadoUser !== null && isUserMex && !userClassificouTop4) {
        const userTabelaA = tabelaGrupoA.find(t => t.nome === clubeJogador.nome);
        if (userTabelaA) {
            classificadosA[3] = userTabelaA;
        } else {
            const userTabelaB = tabelaGrupoB.find(t => t.nome === clubeJogador.nome);
            if (userTabelaB) classificadosB[3] = userTabelaB;
        }
    }

    const forcarUserFinal = (forcarResultadoUser !== null && isUserMex) ? forcarResultadoUser : null;

    // Função de Jogo Misto com Vantagem de Empate
    const simularMataMataBBVA = (timeA, timeB, isFinal = false) => {
        let forceResult = null;
        const hasUser = (timeA === clubeJogador.nome || timeB === clubeJogador.nome);

        // Se acertou o pênalti, GANHA OBRIGATORIAMENTE os Quartos e as Meias para chegar à final
        if (hasUser && forcarUserFinal !== null) {
            forceResult = isFinal ? forcarUserFinal : true;
        }

        const resultado = simularJogo(timeA, timeB, clubeJogador, ovrJogador, true, forceResult);

        // Empate no agregado (gA === gB)
        if (resultado.gA === resultado.gB) {
            if (isFinal) {
                // Na final é penáltis 
                resultado.placarTexto += " (Pen)";
                if (forceResult !== null) {
                    resultado.vencedor = clubeJogador.nome; // Você ganha o desempate
                } else {
                    const forcaA = getForcaTime(resultado.timeA);
                    const forcaB = getForcaTime(resultado.timeB);
                    resultado.vencedor = forcaA > forcaB ? resultado.timeA : resultado.timeB;
                }
            } else {
                // Desempate por Tabela Geral
                if (forceResult !== null) {
                    resultado.vencedor = clubeJogador.nome; // Você avança
                } else {
                    const posA = tabelaGeral.find(t => t.nome === resultado.timeA)?.posGeral || 99;
                    const posB = tabelaGeral.find(t => t.nome === resultado.timeB)?.posGeral || 99;
                    resultado.vencedor = posA < posB ? resultado.timeA : resultado.timeB;
                }
                resultado.placarTexto += " (Tab)";
            }
        }
        return resultado;
    };

    // Quartas: Cruzamento 1A x 4B, 2A x 3B, etc.
    const q1 = simularMataMataBBVA(classificadosA[0].nome, classificadosB[3].nome);
    const q2 = simularMataMataBBVA(classificadosA[1].nome, classificadosB[2].nome);
    const q3 = simularMataMataBBVA(classificadosB[0].nome, classificadosA[3].nome);
    const q4 = simularMataMataBBVA(classificadosB[1].nome, classificadosA[2].nome);

    const s1 = simularMataMataBBVA(q1.vencedor, q4.vencedor);
    const s2 = simularMataMataBBVA(q2.vencedor, q3.vencedor);

    const final = simularMataMataBBVA(s1.vencedor, s2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaGeral.find(t => t.isUser)?.posGeral || timesMex.length;
    let posicaoTexto = `${userTabelaPos}º Lugar (Fase de Grupos)`;

    if (isUserMex) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([s1.vencedor, s2.vencedor].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else if ([q1.timeA, q1.timeB, q2.timeA, q2.timeB, q3.timeA, q3.timeB, q4.timeA, q4.timeB].includes(clubeJogador.nome)) posicaoTexto = "Quartas de Final";
    }

    return {
        nome: regras.nome,
        tipo: "grupos",
        isA2: false,
        // Como o tipo é grupos, não tem uma "tabela" principal única, mas sim tabelas extras e grupos
        grupos: [
            { letra: "A", tabela: tabelaGrupoA },
            { letra: "B", tabela: tabelaGrupoB }
        ],
        fasesPlayoffs: [
            { faseNome: "LIGUILLA - QUARTAS DE FINAL (IDA E VOLTA)", jogos: [q1, q2, q3, q4] },
            { faseNome: "LIGUILLA - SEMIFINAIS (IDA E VOLTA)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (IDA E VOLTA)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCampeonatoMexicanoClassura = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesMex) => {
    const isUserMex = clubeJogador?.liga === "MEX";
    let timesNomes = timesMex.map(t => t.nome);

    if (isUserMex && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
        timesNomes.pop();
    }

    const regras = dbCampeonatos.liga_feminil_bbva_classura;
    const jogosPorEquipa = regras.jogosTurnoUnico; // 14 jogos

    // Dividir em Grupo A e Grupo B (9 equipas cada)
    const timesGrupoA = timesNomes.slice(0, 9);
    const timesGrupoB = timesNomes.slice(9, 18);

    const simularGrupo = (nomesGrupo, nomeDoGrupo) => {
        let tab = nomesGrupo.map(nome => ({
            nome: nome,
            isUser: nome === clubeJogador?.nome,
            pts: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gs: 0, sg: 0,
            grupo: nomeDoGrupo
        }));

        for (let i = 0; i < tab.length; i++) {
            let forcaA = getForcaTime(tab[i].nome) + (tab[i].isUser ? calcularBonusOVR(ovrJogador) : 0);

            // Simular 14 jogos contra equipas mistas para simplificar, ou rodar o próprio grupo se preferir
            // Neste caso, a liga mexicana original joga todos contra todos, mas como pediu formato de grupos
            // vamos simular 14 jogos aleatórios baseados na força de cada equipa no seu grupo.
            for (let j = 0; j < jogosPorEquipa; j++) {
                const prob = forcaA / 130;
                const r = Math.random();
                if (r < prob) { tab[i].v++; tab[i].gp += Math.floor(Math.random() * 3) + 1; tab[i].gs += Math.floor(Math.random() * 2); }
                else if (r < prob + 0.25) { tab[i].e++; const g = Math.floor(Math.random() * 2); tab[i].gp += g; tab[i].gs += g; }
                else { tab[i].d++; tab[i].gp += Math.floor(Math.random() * 2); tab[i].gs += Math.floor(Math.random() * 3) + 1; }
                tab[i].j++;
            }
            tab[i].sg = tab[i].gp - tab[i].gs;
            tab[i].pts = (tab[i].v * 3) + tab[i].e;
        }

        tab.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
        return tab.map((t, idx) => ({ ...t, pos: idx + 1 }));
    };

    let tabelaGrupoA = simularGrupo(timesGrupoA, "A");
    let tabelaGrupoB = simularGrupo(timesGrupoB, "B");

    // Tabela Geral para critério de desempate
    const tabelaGeral = [...tabelaGrupoA, ...tabelaGrupoB]
        .sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp)
        .map((t, idx) => ({ ...t, posGeral: idx + 1 }));

    const vagasPorGrupo = regras.playoffs.classificam / 2; // Divide as 8 vagas pelos 2 grupos
    let classificadosA = tabelaGrupoA.slice(0, vagasPorGrupo);
    let classificadosB = tabelaGrupoB.slice(0, vagasPorGrupo);

    const userNoA = classificadosA.some(t => t.nome === clubeJogador.nome);
    const userNoB = classificadosB.some(t => t.nome === clubeJogador.nome);
    const userClassificouTop4 = userNoA || userNoB;

    // Forçar classificação do user se ativou penálti
    if (forcarResultadoUser !== null && isUserMex && !userClassificouTop4) {
        const userTabelaA = tabelaGrupoA.find(t => t.nome === clubeJogador.nome);
        if (userTabelaA) {
            classificadosA[3] = userTabelaA;
        } else {
            const userTabelaB = tabelaGrupoB.find(t => t.nome === clubeJogador.nome);
            if (userTabelaB) classificadosB[3] = userTabelaB;
        }
    }

    const forcarUserFinal = (forcarResultadoUser !== null && isUserMex) ? forcarResultadoUser : null;

    // Função de Jogo Misto com Vantagem de Empate
    const simularMataMataBBVA = (timeA, timeB, isFinal = false) => {
        const resultado = simularJogo(timeA, timeB, clubeJogador, ovrJogador, true, (forcarUserFinal !== null && isFinal) ? forcarUserFinal : null);

        // Empate no agregado (gA === gB)
        if (resultado.gA === resultado.gB) {
            if (isFinal) {
                // Na final é penáltis (adicionamos +1 a quem tem mais força para desempatar, já que o simularJogo puro pode empatar)
                resultado.placarTexto += " (Pen)";
                const forcaA = getForcaTime(resultado.timeA);
                const forcaB = getForcaTime(resultado.timeB);
                resultado.vencedor = forcaA > forcaB ? resultado.timeA : resultado.timeB;

                // Forçar vitória se user ganhar o evento na final
                if (forcarUserFinal && resultado.timeA === clubeJogador.nome) resultado.vencedor = resultado.timeA;
                if (forcarUserFinal && resultado.timeB === clubeJogador.nome) resultado.vencedor = resultado.timeB;

            } else {
                // Desempate por Tabela Geral
                const posA = tabelaGeral.find(t => t.nome === resultado.timeA).posGeral;
                const posB = tabelaGeral.find(t => t.nome === resultado.timeB).posGeral;
                resultado.vencedor = posA < posB ? resultado.timeA : resultado.timeB;
                resultado.placarTexto += " (Tab)";
            }
        }
        return resultado;
    };

    // Quartas: Cruzamento 1A x 4B, 2A x 3B, etc.
    const q1 = simularMataMataBBVA(classificadosA[0].nome, classificadosB[3].nome);
    const q2 = simularMataMataBBVA(classificadosA[1].nome, classificadosB[2].nome);
    const q3 = simularMataMataBBVA(classificadosB[0].nome, classificadosA[3].nome);
    const q4 = simularMataMataBBVA(classificadosB[1].nome, classificadosA[2].nome);

    const s1 = simularMataMataBBVA(q1.vencedor, q4.vencedor);
    const s2 = simularMataMataBBVA(q2.vencedor, q3.vencedor);

    const final = simularMataMataBBVA(s1.vencedor, s2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaGeral.find(t => t.isUser)?.posGeral || timesMex.length;
    let posicaoTexto = `${userTabelaPos}º Lugar (Fase de Grupos)`;

    if (isUserMex) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([s1.vencedor, s2.vencedor].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else if ([q1.timeA, q1.timeB, q2.timeA, q2.timeB, q3.timeA, q3.timeB, q4.timeA, q4.timeB].includes(clubeJogador.nome)) posicaoTexto = "Quartas de Final";
    }

    return {
        nome: regras.nome,
        tipo: "grupos",
        isA2: false,
        // Como o tipo é grupos, não tem uma "tabela" principal única, mas sim tabelas extras e grupos
        grupos: [
            { letra: "A", tabela: tabelaGrupoA },
            { letra: "B", tabela: tabelaGrupoB }
        ],
        fasesPlayoffs: [
            { faseNome: "LIGUILLA - QUARTAS DE FINAL (IDA E VOLTA)", jogos: [q1, q2, q3, q4] },
            { faseNome: "LIGUILLA - SEMIFINAIS (IDA E VOLTA)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (IDA E VOLTA)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCampeonatoIngles = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesWSL = [], timesWSL2 = []) => {
    const isUserWSL = clubeJogador?.liga === "ENG" && clubeJogador?.div === "Women's Super League";
    const isUserWSL2 = clubeJogador?.liga === "ENG" && clubeJogador?.div === "Women's Super League 2";
    const isUserEng = isUserWSL || isUserWSL2;

    const regrasWSL = dbCampeonatos.wsl;
    const regrasWSL2 = dbCampeonatos.wsl2;

    // --- PREPARAÇÃO WSL ---
    let nomesWSL = timesWSL.filter(t => t && t.nome).map(t => t.nome);
    if (isUserWSL) {
        // Remove o clube se já existir na lista e coloca-o em 1º para garantir que não é cortado pelo slice
        nomesWSL = nomesWSL.filter(n => n !== clubeJogador.nome);
        nomesWSL.unshift(clubeJogador.nome);
    }

    nomesWSL = Array.from(new Set(nomesWSL));

    let contWSL = 1;
    while (nomesWSL.length < regrasWSL.qtdTimes) {
        nomesWSL.push(`Equipe WSL Extra ${contWSL++}`);
    }
    nomesWSL = nomesWSL.slice(0, regrasWSL.qtdTimes);

    // --- PREPARAÇÃO WSL2 ---
    let nomesWSL2 = timesWSL2.filter(t => t && t.nome).map(t => t.nome);
    if (isUserWSL2) {
        // Remove o clube se já existir na lista (ex: após rebaixamento) e força para o topo
        nomesWSL2 = nomesWSL2.filter(n => n !== clubeJogador.nome);
        nomesWSL2.unshift(clubeJogador.nome);
    }

    nomesWSL2 = Array.from(new Set(nomesWSL2));

    let contWSL2 = 1;
    while (nomesWSL2.length < regrasWSL2.qtdTimes) {
        nomesWSL2.push(`Equipe WSL2 Extra ${contWSL2++}`);
    }
    nomesWSL2 = nomesWSL2.slice(0, regrasWSL2.qtdTimes);

    // FUNÇÃO INTERNA: SIMULAÇÃO DE LIGA
    const simularLiga = (nomes, jogosTotais) => {
        const tabela = nomes.map(nomeTime => {
            const isUser = clubeJogador?.nome === nomeTime;
            let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);
            let v = 0, e = 0, d = 0, gp = 0, gs = 0;

            for (let j = 0; j < jogosTotais; j++) {
                const prob = forca / 130;
                const r = Math.random();
                if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
                else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
                else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
            }
            return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosTotais, v, e, d, gp, gs, sg: gp - gs };
        });
        tabela.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
        return tabela.map((t, idx) => ({ ...t, pos: idx + 1 }));
    };

    let tabelaWSL = simularLiga(nomesWSL, regrasWSL.jogosTurnoEReturno);
    let tabelaWSL2 = simularLiga(nomesWSL2, regrasWSL2.jogosTurnoEReturno);

    if (forcarResultadoUser !== null && isUserEng) {
        const tabelaAlvo = isUserWSL ? tabelaWSL : tabelaWSL2;
        const userIdx = tabelaAlvo.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 0) {
            const temp = tabelaAlvo[0];
            tabelaAlvo[0] = tabelaAlvo[userIdx];
            tabelaAlvo[userIdx] = temp;
            tabelaAlvo.forEach((t, i) => t.pos = i + 1);
        }
    }

    // --- PLAYOFF DE REBAIXAMENTO/PROMOÇÃO ---
    const time13WSL = tabelaWSL[regrasWSL.qtdTimes - 2].nome;
    const time2WSL2 = tabelaWSL2[1].nome;

    // Se a jogadora estiver no playoff, o evento de pênalti força o resultado dela aqui
    let forcePlayoff = null;
    if (forcarResultadoUser !== null && (clubeJogador?.nome === time13WSL || clubeJogador?.nome === time2WSL2)) {
        forcePlayoff = forcarResultadoUser;
    }

    const jogoPlayoff = simularJogo(time13WSL, time2WSL2, clubeJogador, ovrJogador, true, forcePlayoff);
    const vencedorPlayoff = jogoPlayoff.vencedor;
    const perdedorPlayoff = vencedorPlayoff === time13WSL ? time2WSL2 : time13WSL;

    // Define rebaixados e promovidos
    const rebaixadosOficiais = [tabelaWSL[regrasWSL.qtdTimes - 1].nome]; // Último da WSL cai direto
    const promovidosOficiais = [tabelaWSL2[0].nome]; // 1º da WSL2 sobe direto

    if (vencedorPlayoff === time2WSL2) {
        rebaixadosOficiais.push(time13WSL);
        promovidosOficiais.push(time2WSL2);
    }

    // --- RETORNO PADRÃO BRASILEIRÃO (Oculta a outra liga) ---
    const isUserNestaDivisaoA2 = isUserWSL2;
    const tabelaUser = isUserNestaDivisaoA2 ? tabelaWSL2 : tabelaWSL;
    const regrasUser = isUserNestaDivisaoA2 ? regrasWSL2 : regrasWSL;

    const nomeTorneio = regrasUser?.nome || regrasUser?.name || "Campeonato Inglês";
    const campeaoTorneio = tabelaUser[0].nome;
    const viceTorneio = tabelaUser[1].nome;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaUser.find(t => t.isUser)?.pos || regrasUser.qtdTimes;

    let posicaoTexto = `${userTabelaPos}º Lugar`;
    if (isUserEng) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (userTabelaPos === 2 && !isUserNestaDivisaoA2) posicaoTexto = "Vice-campeã 🥈";
        else if (userTabelaPos === 3 && !isUserNestaDivisaoA2) posicaoTexto = "3º Lugar (Vaga Champions) ✈️";
        else if (promovidosOficiais.includes(clubeJogador.nome)) posicaoTexto = "Promovida! ⬆️";
        else if (rebaixadosOficiais.includes(clubeJogador.nome)) posicaoTexto = "Rebaixada ⬇️";
        else if (clubeJogador.nome === time13WSL && vencedorPlayoff === time13WSL) posicaoTexto = "Sobreviveu no Playoff 🛡️";
        else if (clubeJogador.nome === time2WSL2 && perdedorPlayoff === time2WSL2) posicaoTexto = "Perdeu o Acesso no Playoff ❌";
    }

    return {
        nome: nomeTorneio,
        tipo: "pontos_corridos",
        isA2: isUserNestaDivisaoA2,
        tabela: tabelaUser,
        fasesPlayoffs: [
            { faseNome: "PLAYOFF (13º WSL x 2º WSL2)", jogos: [jogoPlayoff] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea,
        promovidos: promovidosOficiais, // Nome padronizado igual ao Brasileirão
        rebaixados: rebaixadosOficiais  // Nome padronizado igual ao Brasileirão
    };
};

export const simularSubwayPlayersCup = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesWSL = [], timesWSL2 = [], historico) => {
    const isUserEng = clubeJogador?.liga === "ENG";

    // 1. SELEÇÃO DOS TIMES
    let nomesWSL = timesWSL.filter(t => t && t.nome).map(t => t.nome);
    let nomesWSL2 = timesWSL2.filter(t => t && t.nome).map(t => t.nome);

    // Pega os 3 times que foram pra Champions no histórico atual
    let timesChampions = historico?.classificadosContinentalENG || ["Chelsea", "Manchester City", "Arsenal"];

    // A WSL joga APENAS com os times que NÃO estão na lista da Champions
    let wslFinal = nomesWSL.filter(nome => !timesChampions.includes(nome));

    // Completa se faltar algum (garantindo 11)
    while (wslFinal.length < 11) wslFinal.push(`Equipe WSL Extra ${wslFinal.length}`);
    wslFinal = wslFinal.slice(0, 11);

    // A WSL 2 manda 12 times
    while (nomesWSL2.length < 12) nomesWSL2.push(`Equipe WSL2 Extra ${nomesWSL2.length}`);
    nomesWSL2 = nomesWSL2.slice(0, 12);

    let timesParticipantes = [...wslFinal, ...nomesWSL2];

    // O usuário joga a copa? Só se for da Inglaterra e NÃO estiver na Champions
    const isUserNaCopa = isUserEng && !timesChampions.includes(clubeJogador.nome);

    if (isUserNaCopa && !timesParticipantes.includes(clubeJogador.nome)) {
        timesParticipantes.unshift(clubeJogador.nome);
        timesParticipantes.pop(); // Remove um clube genérico para manter os exatos 23 times
    }

    // 2. FASE SUÍÇA (6 jogos abstratos calculados pela força do time)
    const regras = dbCampeonatos.subway_players_cup;
    const jogosFaseSuica = regras.jogosFaseSuica;

    const tabelaFaseSuica = timesParticipantes.map(nomeTime => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < jogosFaseSuica; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosFaseSuica, v, e, d, gp, gs, sg: gp - gs };
    });

    tabelaFaseSuica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaFaseSuica.map((item, idx) => ({ ...item, pos: idx + 1 }));

    // Garante o 8º lugar ao clube para os playoffs se ativar o evento de pênalti
    if (forcarResultadoUser !== null && isUserNaCopa) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 7) {
            const temp = tabelaClassificada[7];
            tabelaClassificada[7] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    let top8 = tabelaClassificada.slice(0, 8).map(t => t.nome);
    const userClassificouTop8 = top8.includes(clubeJogador?.nome);

    // 3. MATA-MATA (Jogo Único)
    const jogarMataMataSubway = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserNaCopa && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    const q1 = jogarMataMataSubway(top8[0], top8[7]);
    const q2 = jogarMataMataSubway(top8[1], top8[6]);
    const q3 = jogarMataMataSubway(top8[2], top8[5]);
    const q4 = jogarMataMataSubway(top8[3], top8[4]);

    const s1 = jogarMataMataSubway(q1.vencedor, q4.vencedor);
    const s2 = jogarMataMataSubway(q2.vencedor, q3.vencedor);

    const final = jogarMataMataSubway(s1.vencedor, s2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const foiCampea = isUserNaCopa && campeaoTorneio === clubeJogador.nome;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || 23;
    let posicaoTexto = `${userTabelaPos}º Lugar (Fase Suíça)`;

    if (isUserEng) {
        if (!isUserNaCopa) posicaoTexto = "Jogou a Champions League"; // Se não participou pq tava na Champions
        else if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([s1.timeA, s1.timeB, s2.timeA, s2.timeB].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else if (userClassificouTop8) posicaoTexto = "Quartas de Final";
    }

    return {
        nome: regras.name,
        tipo: "pontos_corridos",
        isA2: false,
        participou: isUserNaCopa,
        tabela: tabelaClassificada,
        fasesPlayoffs: [
            { faseNome: "QUARTAS DE FINAL (JOGO ÚNICO)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularWomensFACup = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesWSL = [], timesWSL2 = []) => {
    const isUserEng = clubeJogador?.liga === "ENG";

    // 1. Unir times da WSL e WSL2
    let timesNomes = [...timesWSL, ...timesWSL2].filter(t => t && t.nome).map(t => t.nome);

    if (isUserEng && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
    }

    // Preenche com genéricos até bater exatamente 26
    let contadorGenerico = 1;
    while (timesNomes.length < 26) {
        timesNomes.push(`Equipe Inglesa ${contadorGenerico++}`);
    }

    // Remove duplicatas e garante exatamente 26
    timesNomes = Array.from(new Set(timesNomes)).slice(0, 26);

    // Ordena aleatoriamente (Sorteio da Copa)
    timesNomes = timesNomes.sort(() => 0.5 - Math.random());

    if (isUserEng) {
        // Truque: Move o time da jogadora para o final da lista para aumentar a chance dela 
        // ganhar uma "folga" (bye) e pular a fase preliminar, indo direto pras Oitavas
        const idx = timesNomes.indexOf(clubeJogador.nome);
        if (idx !== -1) {
            timesNomes.splice(idx, 1);
            timesNomes.push(clubeJogador.nome);
        }
    }

    const jogarCopaUnica = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserEng && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true; // Ganha tudo para chegar na final se ativar o evento
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    let fasesPlayoffs = [];
    let rodadaAtual = [];

    // 2. Fase Preliminar Dinâmica (Transforma 26 times em 16)
    let N = timesNomes.length;
    let alvoPlayoff = 16;

    if (N > alvoPlayoff) {
        let qtdJogosPreliminares = N - alvoPlayoff; // 10 jogos
        let qtdTimesPreliminar = qtdJogosPreliminares * 2; // 20 times jogam a preliminar

        // Os primeiros 20 jogam, os 6 últimos passam direto pras oitavas
        let timesParaPreliminar = timesNomes.slice(0, qtdTimesPreliminar);
        let timesPassamDireto = timesNomes.slice(qtdTimesPreliminar);

        let jogosPreliminares = [];
        let vencedoresPreliminares = [];

        for (let i = 0; i < timesParaPreliminar.length; i += 2) {
            let jogo = jogarCopaUnica(timesParaPreliminar[i], timesParaPreliminar[i + 1], false);
            jogosPreliminares.push(jogo);
            vencedoresPreliminares.push(jogo.vencedor);
        }

        fasesPlayoffs.push({
            faseNome: `FASE PRELIMINAR (JOGO ÚNICO)`,
            jogos: jogosPreliminares
        });

        // Junta os 10 vencedores com os 6 que descansaram
        rodadaAtual = [...vencedoresPreliminares, ...timesPassamDireto];
    } else {
        rodadaAtual = [...timesNomes];
    }

    // Embaralha para as Oitavas de Final
    rodadaAtual = rodadaAtual.sort(() => 0.5 - Math.random());

    let campeaoTorneio = "";

    // 3. Loop principal do Mata-Mata (16 -> 8 -> 4 -> 2 -> 1)
    while (rodadaAtual.length > 1) {
        let proximaRodada = [];
        let jogosDaFase = [];
        let isFinal = rodadaAtual.length === 2;

        let nomeFase = isFinal ? "GRANDE FINAL" :
            rodadaAtual.length === 4 ? "SEMIFINAIS" :
                rodadaAtual.length === 8 ? "QUARTAS DE FINAL" :
                    rodadaAtual.length === 16 ? "OITAVAS DE FINAL" :
                        `FASE MATA-MATA (${rodadaAtual.length} EQUIPAS)`;

        for (let i = 0; i < rodadaAtual.length; i += 2) {
            let jogo = jogarCopaUnica(rodadaAtual[i], rodadaAtual[i + 1], isFinal);
            jogosDaFase.push(jogo);
            proximaRodada.push(jogo.vencedor);
        }

        fasesPlayoffs.push({
            faseNome: `${nomeFase} (JOGO ÚNICO)`,
            jogos: jogosDaFase
        });

        if (isFinal) {
            campeaoTorneio = proximaRodada[0];
        }

        rodadaAtual = proximaRodada;
    }

    const foiCampea = isUserEng && campeaoTorneio === clubeJogador.nome;

    let posicaoTexto = "Não Participou";
    if (isUserEng) {
        if (foiCampea) {
            posicaoTexto = "Campeã 🏆";
        } else {
            for (let i = fasesPlayoffs.length - 1; i >= 0; i--) {
                let fase = fasesPlayoffs[i];
                let jogoDoUser = fase.jogos.find(j => j.timeA === clubeJogador.nome || j.timeB === clubeJogador.nome);

                if (jogoDoUser) {
                    if (fase.faseNome.includes("FINAL") && !fase.faseNome.includes("DE FINAL")) posicaoTexto = "Vice-campeã 🥈";
                    else if (fase.faseNome.includes("SEMI")) posicaoTexto = "Semifinalista 🥉";
                    else if (fase.faseNome.includes("QUARTAS")) posicaoTexto = "Quartas de Final";
                    else if (fase.faseNome.includes("OITAVAS")) posicaoTexto = "Oitavas de Final";
                    else posicaoTexto = "Fase Preliminar";
                    break;
                }
            }
        }
    }

    return {
        nome: "Adobe Women's FA Cup",
        tipo: "mata_mata",
        participou: isUserEng,
        fases: fasesPlayoffs,
        campeao: campeaoTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCampeonatoAlemao = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesAle = []) => {
    const isUserAle = clubeJogador?.liga === "ALE" && clubeJogador?.div === "Google Pixel Frauen-Bundesliga";

    let timesNomes = timesAle.filter(t => t && t.div === "Google Pixel Frauen-Bundesliga").map(t => t.nome);
    if (isUserAle && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
    }

    timesNomes = Array.from(new Set(timesNomes));
    let contAle = 1;
    while (timesNomes.length < 14) {
        timesNomes.push(`Equipe Bundesliga ${contAle++}`);
    }
    timesNomes = timesNomes.slice(0, 14);

    const regras = dbCampeonatos.frauen_bundesliga;
    const jogosTotais = regras.jogosTurnoEReturno; // 26 jogos (14 times)

    const tabelaFaseUnica = timesNomes.map((nomeTime) => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < jogosTotais; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosTotais, v, e, d, gp, gs, sg: gp - gs };
    });

    tabelaFaseUnica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaFaseUnica.map((item, idx) => ({ ...item, pos: idx + 1 }));

    if (forcarResultadoUser !== null && isUserAle) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 0) {
            const temp = tabelaClassificada[0];
            tabelaClassificada[0] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    const campeaoTorneio = tabelaClassificada[0].nome;
    const viceTorneio = tabelaClassificada[1].nome;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || 14;
    let posicaoTexto = `${userTabelaPos}º Lugar`;

    if (isUserAle) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (userTabelaPos === 2) posicaoTexto = "Vice-campeã 🥈";
        else if (userTabelaPos === 3) posicaoTexto = "3º Lugar (Vaga Champions) ✈️";
    }

    return {
        nome: regras.nome,
        tipo: "pontos_corridos",
        isA2: false,
        tabela: tabelaClassificada,
        fasesPlayoffs: [],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularDFBPokalFrauen = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesAle = []) => {
    const isUserAle = clubeJogador?.liga === "ALE";

    // Vai buscar todas as equipas da Alemanha registadas (Bundesliga, 2. Bundesliga e Regionalliga)
    let todosTimesAle = getTodosOsTimes().filter(t => t.liga === "ALE");

    // Junta as equipas passadas por parâmetro com a lista completa sem duplicados
    let timesParticipantesObj = timesAle.length > 0
        ? Array.from(new Map([...todosTimesAle, ...timesAle].map(t => [t.nome, t])).values())
        : todosTimesAle;

    if (isUserAle && !timesParticipantesObj.some(t => t.nome === clubeJogador.nome)) {
        timesParticipantesObj.unshift(clubeJogador);
    }

    let timesParticipantes = Array.from(new Set(timesParticipantesObj.map(t => t.nome)));

    let contadorGenerico = 1;
    while (timesParticipantes.length < 18) {
        timesParticipantes.push(`Equipe Alemã ${contadorGenerico++}`);
    }
    timesParticipantes = timesParticipantes.slice(0, 18).sort(() => 0.5 - Math.random());

    const jogarCopaUnica = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserAle && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    let fasesPlayoffs = [];
    let rodadaAtual = [];

    // Preliminar para transformar 18 equipas em 16
    let N = timesParticipantes.length;
    let alvoPlayoff = 16;

    if (N > alvoPlayoff) {
        let qtdJogosPreliminares = N - alvoPlayoff; // 2 jogos
        let qtdTimesPreliminar = qtdJogosPreliminares * 2; // 4 equipas jogam preliminar

        let timesPassamDireto = timesParticipantes.slice(0, N - qtdTimesPreliminar);
        let timesParaPreliminar = timesParticipantes.slice(N - qtdTimesPreliminar);

        let jogosPreliminares = [];
        let vencedoresPreliminares = [];

        for (let i = 0; i < timesParaPreliminar.length; i += 2) {
            let jogo = jogarCopaUnica(timesParaPreliminar[i], timesParaPreliminar[i + 1], false);
            jogosPreliminares.push(jogo);
            vencedoresPreliminares.push(jogo.vencedor);
        }

        fasesPlayoffs.push({
            faseNome: "FASE PRELIMINAR (JOGO ÚNICO)",
            jogos: jogosPreliminares
        });

        rodadaAtual = [...timesPassamDireto, ...vencedoresPreliminares];
    } else {
        rodadaAtual = [...timesParticipantes];
    }

    rodadaAtual = rodadaAtual.sort(() => 0.5 - Math.random());

    let campeaoTorneio = "";

    while (rodadaAtual.length > 1) {
        let proximaRodada = [];
        let jogosDaFase = [];
        let isFinal = rodadaAtual.length === 2;

        let nomeFase = isFinal ? "GRANDE FINAL" :
            rodadaAtual.length === 4 ? "SEMIFINAIS" :
                rodadaAtual.length === 8 ? "QUARTAS DE FINAL" :
                    rodadaAtual.length === 16 ? "OITAVAS DE FINAL" :
                        `FASE MATA-MATA (${rodadaAtual.length} EQUIPAS)`;

        for (let i = 0; i < rodadaAtual.length; i += 2) {
            let jogo = jogarCopaUnica(rodadaAtual[i], rodadaAtual[i + 1], isFinal);
            jogosDaFase.push(jogo);
            proximaRodada.push(jogo.vencedor);
        }

        fasesPlayoffs.push({
            faseNome: `${nomeFase} (JOGO ÚNICO)`,
            jogos: jogosDaFase
        });

        if (isFinal) {
            campeaoTorneio = proximaRodada[0];
        }

        rodadaAtual = proximaRodada;
    }

    const foiCampea = isUserAle && campeaoTorneio === clubeJogador.nome;

    let posicaoTexto = "Não Participou";
    if (isUserAle) {
        if (foiCampea) {
            posicaoTexto = "Campeã 🏆";
        } else {
            for (let i = fasesPlayoffs.length - 1; i >= 0; i--) {
                let fase = fasesPlayoffs[i];
                let jogoDoUser = fase.jogos.find(j => j.timeA === clubeJogador.nome || j.timeB === clubeJogador.nome);

                if (jogoDoUser) {
                    if (fase.faseNome.includes("FINAL") && !fase.faseNome.includes("DE FINAL")) posicaoTexto = "Vice-campeã 🥈";
                    else if (fase.faseNome.includes("SEMI")) posicaoTexto = "Semifinalista 🥉";
                    else if (fase.faseNome.includes("QUARTAS")) posicaoTexto = "Quartas de Final";
                    else if (fase.faseNome.includes("OITAVAS")) posicaoTexto = "Oitavas de Final";
                    else posicaoTexto = "Fase Preliminar";
                    break;
                }
            }
        }
    }

    return {
        nome: "DFB-Pokal Frauen",
        tipo: "mata_mata",
        participou: isUserAle,
        fases: fasesPlayoffs,
        campeao: campeaoTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularDFBSupercupFrauen = (clubeJogador, ovrJogador, forcarResultadoUser = null, historico) => {
    const isUserAle = clubeJogador?.liga === "ALE";

    let t1 = historico.campeaoAle || "Bayern Munich";
    let t2 = historico.campeaoCopaAle || "VfL Wolfsburg";

    // Se o campeão da liga for o mesmo da copa, defronta o vice da liga
    if (t1 === t2) {
        t2 = historico.viceAle || "Eintracht Frankfurt";
    }

    const jogoSupercopa = simularJogo(t1, t2, clubeJogador, ovrJogador, false, forcarResultadoUser);
    const foiCampea = jogoSupercopa.vencedor === clubeJogador?.nome;
    const participou = t1 === clubeJogador?.nome || t2 === clubeJogador?.nome;

    return {
        nome: "DFB-Supercup Frauen",
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

export const simularCampeonatoFrances = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesFra) => {
    const isUserFra = clubeJogador?.div === "Arkema Première Ligue";
    let timesNomes = (timesFra || []).filter(t => t && t.nome).map(t => t.nome);

    if (isUserFra && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
    }

    const regras = dbCampeonatos.arkema_premiere_ligue;
    const jogosTotais = regras.jogosTurnoEReturno; // 22 jogos

    while (timesNomes.length < regras.qtdTimes) timesNomes.push(`Clube Francês ${timesNomes.length + 1}`);
    timesNomes = Array.from(new Set(timesNomes)).slice(0, regras.qtdTimes);

    // Simulação da Fase Única (Pontos Corridos)
    const tabelaFaseUnica = timesNomes.map((nomeTime) => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < jogosTotais; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosTotais, v, e, d, gp, gs, sg: gp - gs };
    });

    tabelaFaseUnica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaFaseUnica.map((item, idx) => ({ ...item, pos: idx + 1 }));

    // Garante 4º lugar ao clube para os playoffs se ativar o evento
    if (forcarResultadoUser !== null && isUserFra) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 3) {
            const temp = tabelaClassificada[3];
            tabelaClassificada[3] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    let top4 = tabelaClassificada.slice(0, 4).map(t => t.nome);

    const jogarMataMataFra = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserFra && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    // Semifinais (1º x 4º, 2º x 3º)
    const s1 = jogarMataMataFra(top4[0], top4[3]);
    const s2 = jogarMataMataFra(top4[1], top4[2]);

    // Grande Final
    const final = jogarMataMataFra(s1.vencedor, s2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    // LÓGICA DAS 3 VAGAS DA CHAMPIONS LEAGUE:
    // Vaga 1: Campeão do Playoff
    // Vagas 2 e 3: As duas equipas melhor classificadas na fase regular que NÃO venceram o playoff
    const vagasContinental = [campeaoTorneio];
    for (let i = 0; i < tabelaClassificada.length; i++) {
        if (vagasContinental.length >= 3) break;
        const nomeTime = tabelaClassificada[i].nome;
        if (!vagasContinental.includes(nomeTime)) {
            vagasContinental.push(nomeTime);
        }
    }

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || 12;
    let posicaoTexto = `${userTabelaPos}º Lugar (Fase Única)`;

    if (isUserFra) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if (vagasContinental.includes(clubeJogador.nome)) posicaoTexto = `${userTabelaPos}º Lugar (Vaga Champions) ✈️`;
        else if (top4.includes(clubeJogador.nome)) posicaoTexto = "Semifinalista (Playoffs)";
    }

    return {
        nome: regras.nome,
        tipo: "pontos_corridos",
        isA2: false,
        tabela: tabelaClassificada,
        fasesPlayoffs: [
            { faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        classificadosChampions: vagasContinental,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCoupedeFrance = (clubeJogador, ovrJogador, forcarResultadoUser = null) => {
    const isUserFra = clubeJogador?.liga === "FRA";

    // 1. Pega TODOS os times da França no banco de dados (D1 e D2)
    let timesParticipantesObj = getTodosOsTimes().filter(t => t.liga === "FRA");

    // Garante que o clube do jogador está na lista, se for francês
    if (isUserFra && !timesParticipantesObj.some(t => t.nome === clubeJogador.nome)) {
        timesParticipantesObj.unshift(clubeJogador);
    }

    // Se o total for menor que 16, preenche com genéricos para fechar a chave básica
    let contadorGenerico = 1;
    while (timesParticipantesObj.length < 16) {
        timesParticipantesObj.push({ nome: `Equipe Regional ${contadorGenerico++}`, liga: "FRA", div: "Regional", tier: "baixo" });
    }

    // 2. Extrai apenas os nomes sem repetições
    let timesParticipantes = Array.from(new Set(timesParticipantesObj.map(t => t.nome)));

    // Função interna para os jogos da Copa
    const jogarCopaUnica = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserFra && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true; // Ganha as fases anteriores para chegar na final
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force); // false = jogo único
    };

    let fasesPlayoffs = [];
    let rodadaAtual = [];

    // 3. Lógica de Fase Preliminar Dinâmica (Corta os times para alinhar em exatos 16)
    let N = timesParticipantes.length;
    let alvoPlayoff = 16;

    // Se você adicionar muitos times no futuro, ele ajusta o alvo para 32 automaticamente
    if (N > 16 && N <= 32) alvoPlayoff = 16;
    if (N > 32) alvoPlayoff = 32;

    if (N > alvoPlayoff) {
        // Quantos times precisam ser eliminados para chegarmos em 16?
        let qtdJogosPreliminares = N - alvoPlayoff;
        let qtdTimesPreliminar = qtdJogosPreliminares * 2;

        // Os primeiros do ranking passam direto
        let timesPassamDireto = timesParticipantes.slice(0, N - qtdTimesPreliminar);
        let timesParaPreliminar = timesParticipantes.slice(N - qtdTimesPreliminar);

        let jogosPreliminares = [];
        let vencedoresPreliminares = [];

        for (let i = 0; i < timesParaPreliminar.length; i += 2) {
            let jogo = jogarCopaUnica(timesParaPreliminar[i], timesParaPreliminar[i + 1], false);
            jogosPreliminares.push(jogo);
            vencedoresPreliminares.push(jogo.vencedor);
        }

        fasesPlayoffs.push({
            faseNome: `FASE PRELIMINAR (JOGO ÚNICO)`,
            jogos: jogosPreliminares
        });

        // Une os times que descansaram com os vencedores da preliminar
        rodadaAtual = [...timesPassamDireto, ...vencedoresPreliminares];
    } else {
        rodadaAtual = [...timesParticipantes];
    }

    // Embaralha para as Oitavas (protegendo a aleatoriedade do sorteio da Copa)
    rodadaAtual = rodadaAtual.sort(() => 0.5 - Math.random());

    let campeaoTorneio = "";

    // 4. Loop dinâmico do Mata-Mata principal (vai de 16, para 8, para 4, para 2, para 1)
    while (rodadaAtual.length > 1) {
        let proximaRodada = [];
        let jogosDaFase = [];

        let isFinal = rodadaAtual.length === 2;

        // Define o nome da fase automaticamente
        let nomeFase = isFinal ? "GRANDE FINAL" :
            rodadaAtual.length === 4 ? "SEMIFINAIS" :
                rodadaAtual.length === 8 ? "QUARTAS DE FINAL" :
                    rodadaAtual.length === 16 ? "OITAVAS DE FINAL" :
                        rodadaAtual.length === 32 ? "16 AVOS DE FINAL" :
                            `FASE MATA-MATA (${rodadaAtual.length} EQUIPAS)`;

        for (let i = 0; i < rodadaAtual.length; i += 2) {
            let jogo = jogarCopaUnica(rodadaAtual[i], rodadaAtual[i + 1], isFinal);
            jogosDaFase.push(jogo);
            proximaRodada.push(jogo.vencedor);
        }

        fasesPlayoffs.push({
            faseNome: `${nomeFase} (JOGO ÚNICO)`,
            jogos: jogosDaFase
        });

        if (isFinal) {
            campeaoTorneio = proximaRodada[0];
        }

        rodadaAtual = proximaRodada;
    }

    const foiCampea = isUserFra && campeaoTorneio === clubeJogador.nome;

    // 5. Descobrir a posição final no histórico
    let posicaoTexto = "Não Participou";
    if (isUserFra) {
        if (foiCampea) {
            posicaoTexto = "Campeã 🏆";
        } else {
            for (let i = fasesPlayoffs.length - 1; i >= 0; i--) {
                let fase = fasesPlayoffs[i];
                let jogoDoUser = fase.jogos.find(j => j.timeA === clubeJogador.nome || j.timeB === clubeJogador.nome);

                if (jogoDoUser) {
                    if (fase.faseNome.includes("FINAL") && !fase.faseNome.includes("DE FINAL")) posicaoTexto = "Vice-campeã 🥈";
                    else if (fase.faseNome.includes("SEMI")) posicaoTexto = "Semifinalista 🥉";
                    else if (fase.faseNome.includes("QUARTAS")) posicaoTexto = "Quartas de Final";
                    else if (fase.faseNome.includes("OITAVAS")) posicaoTexto = "Oitavas de Final";
                    else if (fase.faseNome.includes("16 AVOS")) posicaoTexto = "16 Avos de Final";
                    else posicaoTexto = "Fase Preliminar";
                    break;
                }
            }
        }
    }

    return {
        nome: "Coupe de France Féminine",
        tipo: "mata_mata",
        participou: isUserFra,
        fases: fasesPlayoffs,
        campeao: campeaoTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCampeonatoEspanha = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesEsp) => {
    const isUserEsp = clubeJogador?.liga === "ESP" && clubeJogador?.div === "Liga F Moeve";

    // Filtra apenas as equipas que pertencem à primeira divisão da Espanha
    let timesNomes = timesEsp.filter(t => t.div === "Liga F Moeve").map(t => t.nome);

    // Garante que o time do usuário está na lista caso jogue na primeira divisão espanhola
    if (isUserEsp && !timesNomes.includes(clubeJogador.nome)) {
        timesNomes.unshift(clubeJogador.nome);
        timesNomes.pop(); // Mantém o número exato de times da liga (16)
    }

    // Caso a lista de times não tenha 16 equipes, preenche com genéricos para evitar erro nas 30 rodadas
    while (timesNomes.length < 16) {
        timesNomes.push(`Time Genérico ${timesNomes.length + 1}`);
    }

    // Se a lista tiver mais de 16, corta para garantir o tamanho do campeonato
    timesNomes = timesNomes.slice(0, 16);

    const regras = dbCampeonatos.liga_f_moeve;
    const jogosTotais = regras.jogosTurnoEReturno; // 30 rodadas em pontos corridos (ida e volta para 16 times)

    const tabelaFaseUnica = timesNomes.map((nomeTime) => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < jogosTotais; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: jogosTotais, v, e, d, gp, gs, sg: gp - gs };
    });

    // Ordena por Pontos > Saldo de Gols > Gols Pró
    tabelaFaseUnica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaFaseUnica.map((item, idx) => ({ ...item, pos: idx + 1 }));

    // LÓGICA DE EVENTO DECISIVO: Se ganhar o evento de "Final", empurra o user para o 1º lugar
    if (forcarResultadoUser !== null && isUserEsp) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 0) { // Se não estiver em primeiro, troca com o líder
            const temp = tabelaClassificada[0];
            tabelaClassificada[0] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1); // Atualiza o "pos"
        }
    }

    // Sem playoffs: O campeão é diretamente o líder da tabela
    const campeaoTorneio = tabelaClassificada[0].nome;
    const viceTorneio = tabelaClassificada[1].nome;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    const userTabelaPos = tabelaClassificada.find(t => t.isUser)?.pos || 16;
    let posicaoTexto = `${userTabelaPos}º Lugar`;

    if (isUserEsp) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (userTabelaPos === 2) posicaoTexto = "Vice-campeã 🥈";
        else if (userTabelaPos === 3) posicaoTexto = "3º Lugar (Vaga Champions) ✈️";
    }

    return {
        nome: regras.nome,
        tipo: "pontos_corridos",
        isA2: false,
        tabela: tabelaClassificada,
        fasesPlayoffs: [], // Enviamos vazio para não renderizar as chaves de mata-mata
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCopaDeLaReina = (clubeJogador, ovrJogador, forcarResultadoUser = null) => {
    const isUserEsp = clubeJogador?.liga === "ESP";

    // 1. Pega TODOS os times da Espanha no banco de dados (Liga F e Primera Federación)
    let timesParticipantesObj = getTodosOsTimes().filter(t => t.liga === "ESP");

    // Garante que o clube do jogador está na lista, se for espanhol
    if (isUserEsp && !timesParticipantesObj.some(t => t.nome === clubeJogador.nome)) {
        timesParticipantesObj.unshift(clubeJogador);
    }

    // Se o total for menor que 16, preenche com genéricos para fechar a chave básica
    let contadorGenerico = 1;
    while (timesParticipantesObj.length < 16) {
        timesParticipantesObj.push({ nome: `Equipe Regional ${contadorGenerico++}`, liga: "ESP", div: "Regional", tier: "baixo" });
    }

    // 2. Ordena os times para os piores jogarem a fase preliminar
    // A Liga F Moeve fica no topo para "ganhar folga" (passar direto para as oitavas)
    timesParticipantesObj.sort((a, b) => {
        if (a.nome === clubeJogador?.nome) return -1; // Seu time ganha folga se for possível
        if (b.nome === clubeJogador?.nome) return 1;
        if (a.div === "Liga F Moeve" && b.div !== "Liga F Moeve") return -1;
        if (a.div !== "Liga F Moeve" && b.div === "Liga F Moeve") return 1;
        return 0.5 - Math.random(); // O resto é sorteado
    });

    // Extrai apenas os nomes sem repetições
    let timesParticipantes = Array.from(new Set(timesParticipantesObj.map(t => t.nome)));

    const jogarCopaUnica = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserEsp && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true; // Ganha as fases anteriores para chegar na final
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force); // false = jogo único
    };

    let fasesPlayoffs = [];
    let rodadaAtual = [];

    // 3. Lógica de Fase Preliminar Dinâmica (Corta os times para alinhar em exatos 16)
    let N = timesParticipantes.length;
    let alvoPlayoff = 16;

    // Se você adicionar muitos times no futuro, ele ajusta o alvo para 32 automaticamente
    if (N > 16 && N <= 32) alvoPlayoff = 16;
    if (N > 32) alvoPlayoff = 32;

    if (N > alvoPlayoff) {
        // Quantos times precisam ser eliminados para chegarmos em 16?
        let qtdJogosPreliminares = N - alvoPlayoff;
        let qtdTimesPreliminar = qtdJogosPreliminares * 2;

        // Os primeiros do ranking (Liga F) passam direto
        let timesPassamDireto = timesParticipantes.slice(0, N - qtdTimesPreliminar);
        let timesParaPreliminar = timesParticipantes.slice(N - qtdTimesPreliminar);

        let jogosPreliminares = [];
        let vencedoresPreliminares = [];

        for (let i = 0; i < timesParaPreliminar.length; i += 2) {
            let jogo = jogarCopaUnica(timesParaPreliminar[i], timesParaPreliminar[i + 1], false);
            jogosPreliminares.push(jogo);
            vencedoresPreliminares.push(jogo.vencedor);
        }

        fasesPlayoffs.push({
            faseNome: `FASE PRELIMINAR (JOGO ÚNICO)`,
            jogos: jogosPreliminares
        });

        // Une os times grandes que descansaram com os vencedores da preliminar
        rodadaAtual = [...timesPassamDireto, ...vencedoresPreliminares];
    } else {
        rodadaAtual = [...timesParticipantes];
    }

    // Embaralha para as Oitavas (protegendo a aleatoriedade do sorteio da Copa)
    rodadaAtual = rodadaAtual.sort(() => 0.5 - Math.random());

    let campeaoTorneio = "";

    // 4. Loop dinâmico do Mata-Mata principal (vai de 16, para 8, para 4, para 2, para 1)
    while (rodadaAtual.length > 1) {
        let proximaRodada = [];
        let jogosDaFase = [];

        let isFinal = rodadaAtual.length === 2;

        // Define o nome da fase automaticamente
        let nomeFase = isFinal ? "GRANDE FINAL" :
            rodadaAtual.length === 4 ? "SEMIFINAIS" :
                rodadaAtual.length === 8 ? "QUARTAS DE FINAL" :
                    rodadaAtual.length === 16 ? "OITAVAS DE FINAL" :
                        rodadaAtual.length === 32 ? "16 AVOS DE FINAL" :
                            `FASE MATA-MATA (${rodadaAtual.length} EQUIPAS)`;

        for (let i = 0; i < rodadaAtual.length; i += 2) {
            let jogo = jogarCopaUnica(rodadaAtual[i], rodadaAtual[i + 1], isFinal);
            jogosDaFase.push(jogo);
            proximaRodada.push(jogo.vencedor);
        }

        fasesPlayoffs.push({
            faseNome: `${nomeFase} (JOGO ÚNICO)`,
            jogos: jogosDaFase
        });

        if (isFinal) {
            campeaoTorneio = proximaRodada[0];
        }

        rodadaAtual = proximaRodada;
    }

    const foiCampea = isUserEsp && campeaoTorneio === clubeJogador.nome;

    // 5. Descobrir a posição final no histórico
    let posicaoTexto = "Não Participou";
    if (isUserEsp) {
        if (foiCampea) {
            posicaoTexto = "Campeã 🏆";
        } else {
            for (let i = fasesPlayoffs.length - 1; i >= 0; i--) {
                let fase = fasesPlayoffs[i];
                let jogoDoUser = fase.jogos.find(j => j.timeA === clubeJogador.nome || j.timeB === clubeJogador.nome);

                if (jogoDoUser) {
                    if (fase.faseNome.includes("FINAL") && !fase.faseNome.includes("DE FINAL")) posicaoTexto = "Vice-campeã 🥈";
                    else if (fase.faseNome.includes("SEMI")) posicaoTexto = "Semifinalista 🥉";
                    else if (fase.faseNome.includes("QUARTAS")) posicaoTexto = "Quartas de Final";
                    else if (fase.faseNome.includes("OITAVAS")) posicaoTexto = "Oitavas de Final";
                    else if (fase.faseNome.includes("16 AVOS")) posicaoTexto = "16 Avos de Final";
                    else posicaoTexto = "Fase Preliminar";
                    break;
                }
            }
        }
    }

    return {
        nome: "Copa de la Reina",
        tipo: "mata_mata",
        participou: isUserEsp,
        fases: fasesPlayoffs,
        campeao: campeaoTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularSupercopaEspanha = (clubeJogador, ovrJogador, forcarResultadoUser = null, historico) => {
    const isUserEsp = clubeJogador?.liga === "ESP";

    let classificados = [];

    // Regra: Campeão e Vice da Liga, Campeão e Vice da Copa
    const timesIniciais = [
        historico.campeaoEsp,
        historico.viceEsp,
        historico.campeaoCopaEsp,
        historico.viceCopaEsp
    ];

    // Tenta adicionar os iniciais sem repetir times
    timesIniciais.forEach(t => {
        if (!classificados.includes(t)) classificados.push(t);
    });

    // Se ainda não tiver 4 times, puxa da tabela da Liga F (3º e 4º lugares)
    if (classificados.length < 4 && !classificados.includes(historico.terceiroEsp)) {
        classificados.push(historico.terceiroEsp);
    }
    if (classificados.length < 4 && !classificados.includes(historico.quartoEsp)) {
        classificados.push(historico.quartoEsp);
    }

    // Fallback de segurança para garantir sempre 4 times
    while (classificados.length < 4) classificados.push(`Time Convidado ${classificados.length}`);

    // Sorteia os confrontos das Semifinais
    classificados = classificados.sort(() => 0.5 - Math.random());

    const jogarMataMataSupercopa = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserEsp && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    const s1 = jogarMataMataSupercopa(classificados[0], classificados[1]);
    const s2 = jogarMataMataSupercopa(classificados[2], classificados[3]);

    const final = jogarMataMataSupercopa(s1.vencedor, s2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const participou = classificados.includes(clubeJogador?.nome);
    const foiCampea = participou && campeaoTorneio === clubeJogador?.nome;

    let posicaoTexto = "Não Participou";
    if (participou) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (final.timeA === clubeJogador.nome || final.timeB === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else posicaoTexto = "Semifinalista 🥉";
    }

    return {
        nome: dbCampeonatos.supercopa_espanha.nome,
        tipo: "mata_mata",
        participou,
        fases: [
            { faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularCampeonatoBrasileiro = (clubeJogador, ovrJogador, forcarResultadoUser = null, timesA1 = getTimesPorDivisao("BRA_A1"), timesA2 = getTimesPorDivisao("BRA_A2")) => {
    const isA2User = clubeJogador.div.includes("A2");
    const resUserDiv = simularDivisaoInterna(isA2User, isA2User ? timesA2 : timesA1, clubeJogador, ovrJogador, forcarResultadoUser);
    const resOutraDiv = simularDivisaoInterna(!isA2User, !isA2User ? timesA2 : timesA1, { nome: "NENHUM", div: "" }, 50, null);

    const promovidosA2 = isA2User ? resUserDiv.promovidos : resOutraDiv.promovidos;
    const rebaixadosA1 = isA2User ? resOutraDiv.rebaixados : resUserDiv.rebaixados;

    return { ...resUserDiv, promovidosA2, rebaixadosA1 };
};

export const simularCopaDoBrasil2026 = (clubeJogador, ovrJogador, forcarResultadoUser = null) => {
    const todosTimesBR = [...getTimesPorDivisao("BRA_A1"), ...getTimesPorDivisao("BRA_A2")].map(c => c.nome);
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

export const simularSupercopa2026 = (clubeJogador, ovrJogador, campeaoA1Anterior, campeaoCopaAnterior, forcarResultadoUser = null) => {
    let t1 = campeaoA1Anterior;
    let t2 = campeaoCopaAnterior;

    if (t1 === t2) {
        t2 = historicoMundo.viceA1;
    }

    const isUserBr = clubeJogador?.liga === "BRA";

    // Se o evento ativou, garante que o clube da jogadora está no jogo decisivo
    if (forcarResultadoUser !== null && isUserBr) {
        if (t1 !== clubeJogador.nome && t2 !== clubeJogador.nome) {
            t2 = clubeJogador.nome;
        }
    }

    const jogoSupercopa = simularJogo(t1, t2, clubeJogador, ovrJogador, false, forcarResultadoUser);
    const foiCampea = jogoSupercopa.vencedor === clubeJogador?.nome;
    const participou = t1 === clubeJogador?.nome || t2 === clubeJogador?.nome;

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

    // CORREÇÃO: Garante o 8º lugar ao clube brasileiro para os playoffs
    if (forcarResultadoUser !== null && clubeJogador?.nome) {
        const userIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (userIdx > 7) {
            const temp = tabelaClassificada[7];
            tabelaClassificada[7] = tabelaClassificada[userIdx];
            tabelaClassificada[userIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    let top8 = tabelaClassificada.slice(0, 8).map(t => t.nome);

    const jogarMataMataBR = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && clubeJogador?.nome && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, true, force);
    };

    const q1 = jogarMataMataBR(top8[0], top8[7]);
    const q2 = jogarMataMataBR(top8[1], top8[6]);
    const q3 = jogarMataMataBR(top8[2], top8[5]);
    const q4 = jogarMataMataBR(top8[3], top8[4]);

    const s1 = jogarMataMataBR(q1.vencedor, q4.vencedor);
    const s2 = jogarMataMataBR(q2.vencedor, q3.vencedor);

    const jogoFinal = jogarMataMataBR(s1.vencedor, s2.vencedor, true);
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

export const simularLibertadores = (clubeJogador, ovrJogador, forcarResultadoUser = null, classificadosBR = [], classificadosARG = [], classificadosCOL = [], classificadosCHI = [], campeaoAnterior = "Corinthians", paisSede = "ECU") => {

    const vagasPorPais = {
        ARG: 1, BOL: 1, BRA: 2, CHI: 2, COL: 2, ECU: 1, PAR: 2, PER: 1, URU: 1, VEN: 1
    };

    if (vagasPorPais[paisSede]) {
        vagasPorPais[paisSede] += 1;
    }

    let timesLibertaObjs = [];

    const normalizarTime = (timeInput, ligaPadrao = "BRA") => {
        if (!timeInput) return null;
        if (typeof timeInput === "string") {
            const encontrado = getTodosOsTimes().find(t => t.nome === timeInput);
            return encontrado ? { ...encontrado } : { nome: timeInput, liga: ligaPadrao, tier: "baixo" };
        }
        return { ...timeInput, liga: timeInput.liga || ligaPadrao };
    };

    // 1. O Campeão Anterior entra na lista (e não consome vaga do seu país)
    const objCampeaoAnt = normalizarTime(campeaoAnterior, "BRA");
    if (objCampeaoAnt) timesLibertaObjs.push(objCampeaoAnt);

    // 2. Adicionar os classificados do Brasil
    const outrosBrasileiros = classificadosBR.filter(t => t && (typeof t === "string" ? t !== campeaoAnterior : t.nome !== campeaoAnterior));
    outrosBrasileiros.forEach(time => {
        const obj = normalizarTime(time, "BRA");
        if (obj && !timesLibertaObjs.some(t => t.nome === obj.nome)) {
            timesLibertaObjs.push(obj);
        }
    });

    // 2.5 Adicionar os classificados da Argentina
    const outrosArgentinos = classificadosARG.filter(t => t && (typeof t === "string" ? t !== campeaoAnterior : t.nome !== campeaoAnterior));
    outrosArgentinos.forEach(time => {
        const obj = normalizarTime(time, "ARG");
        if (obj && !timesLibertaObjs.some(t => t.nome === obj.nome)) {
            timesLibertaObjs.push(obj);
        }
    });

    // 2.6 Adicionar os classificados da Colombia
    const outrosColombianos = classificadosCOL.filter(t => t && (typeof t === "string" ? t !== campeaoAnterior : t.nome !== campeaoAnterior));
    outrosColombianos.forEach(time => {
        const obj = normalizarTime(time, "COL");
        if (obj && !timesLibertaObjs.some(t => t.nome === obj.nome)) {
            timesLibertaObjs.push(obj);
        }
    });

    const outrosChilenos = classificadosCHI.filter(t => t && (typeof t === "string" ? t !== campeaoAnterior : t.nome !== campeaoAnterior));
    outrosChilenos.forEach(time => {
        const obj = normalizarTime(time, "CHI");
        if (obj && !timesLibertaObjs.some(t => t.nome === obj.nome)) {
            timesLibertaObjs.push(obj);
        }
    });

    // 3. Adicionar as demais ligas sul-americanas e preencher vagas extra do país sede se faltarem
    const ligasParaPreencher = Object.keys(vagasPorPais);

    ligasParaPreencher.forEach(liga => {
        let qtdVagas = vagasPorPais[liga];

        // Desconta as equipas que já entraram (Campeão anterior + classificados BR/ARG)
        const timesDestaLigaJaNaLiberta = timesLibertaObjs.filter(t => t.liga === liga).length;

        // Se a liga já tem as vagas preenchidas, passa à frente.
        // NOTA: O campeão anterior NÃO devia contar para este limite na vida real, 
        // mas para simplificar e garantir as 16 vagas exatas no jogo, descontamos as que já entraram.
        const vagasRestantesParaPreencher = Math.max(0, qtdVagas - timesDestaLigaJaNaLiberta);

        if (vagasRestantesParaPreencher > 0) {
            // Pega em equipas desta liga que AINDA NÃO estão na lista da Libertadores
            const timesDaLigaDisponiveis = getTodosOsTimes()
                .filter(t => t && t.liga === liga && !timesLibertaObjs.some(jaClassificado => jaClassificado.nome === t.nome))
                .sort(() => 0.5 - Math.random());

            let selecionados = timesDaLigaDisponiveis.map(t => normalizarTime(t, liga)).slice(0, vagasRestantesParaPreencher);

            // Se o dbTimes não tiver equipas suficientes desta liga, cria genéricos
            while (selecionados.length < vagasRestantesParaPreencher) {
                selecionados.push({
                    nome: `Time ${liga} ${selecionados.length + 1}`,
                    liga: liga,
                    tier: "baixo"
                });
            }

            timesLibertaObjs.push(...selecionados);
        }
    });

    // Filtra nulos/indefinidos por segurança
    timesLibertaObjs = timesLibertaObjs.filter(t => t && t.nome);

    // Garante no mínimo 16 times preenchendo com genéricos se faltar por algum motivo inesperado
    let contadorFallback = 1;
    while (timesLibertaObjs.length < 16) {
        timesLibertaObjs.push({
            nome: `Convidado ${contadorFallback++}`,
            liga: "URU",
            tier: "baixo"
        });
    }

    timesLibertaObjs = timesLibertaObjs.slice(0, 16);

    // 4. Sorteio de Grupos Evitando Mesma Liga
    let grupos = [
        { letra: "A", times: [] }, { letra: "B", times: [] },
        { letra: "C", times: [] }, { letra: "D", times: [] }
    ];

    const freqLigas = {};
    timesLibertaObjs.forEach(t => freqLigas[t.liga] = (freqLigas[t.liga] || 0) + 1);

    timesLibertaObjs = timesLibertaObjs
        .sort(() => 0.5 - Math.random())
        .sort((a, b) => (freqLigas[b.liga] || 0) - (freqLigas[a.liga] || 0));

    // GARANTE O CAMPEÃO ANTERIOR NO GRUPO A
    const idxCampeao = timesLibertaObjs.findIndex(t => t.nome === campeaoAnterior);
    if (idxCampeao !== -1) {
        grupos[0].times.push(timesLibertaObjs[idxCampeao]); // Coloca no Grupo A
        timesLibertaObjs.splice(idxCampeao, 1); // Remove da lista de sorteio para não duplicar
    }

    timesLibertaObjs.forEach(timeObj => {
        let grupoEscolhido = grupos.find(g => g.times.length < 4 && !g.times.some(t => t.liga === timeObj.liga));
        if (!grupoEscolhido) {
            grupoEscolhido = grupos.find(g => g.times.length < 4);
        }
        if (grupoEscolhido) {
            grupoEscolhido.times.push(timeObj);
        }
    });

    const isUserNaLiberta = timesLibertaObjs.some(t => t.nome === clubeJogador?.nome);

    // 5. Simular Fase de Grupos
    const simularFaseGrupos = (grupoTimes) => {
        let tab = grupoTimes.map(tObj => ({
            nome: tObj?.nome || "Time Genérico",
            isUser: tObj?.nome === clubeJogador?.nome,
            pts: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gs: 0, sg: 0
        }));

        for (let i = 0; i < tab.length; i++) {
            for (let j = i + 1; j < tab.length; j++) {
                let res = simularJogo(tab[i].nome, tab[j].nome, clubeJogador, ovrJogador, false, null);
                let tA = tab.find(t => t.nome === res.timeA);
                let tB = tab.find(t => t.nome === res.timeB);

                if (tA && tB) {
                    tA.j++; tB.j++;
                    tA.gp += res.gA; tA.gs += res.gB;
                    tB.gp += res.gB; tB.gs += res.gA;
                    tA.sg = tA.gp - tA.gs; tB.sg = tB.gp - tB.gs;

                    if (res.gA > res.gB) { tA.v++; tA.pts += 3; tB.d++; }
                    else if (res.gB > res.gA) { tB.v++; tB.pts += 3; tA.d++; }
                    else { tA.e++; tB.e++; tA.pts++; tB.pts++; }
                }
            }
        }
        tab.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
        return tab.map((t, idx) => ({ ...t, pos: idx + 1 }));
    };

    const tabelasGrupos = grupos.map(g => ({
        letra: g.letra,
        tabela: simularFaseGrupos(g.times)
    }));

    // 6. Mata-Mata e Conclusões
    let classificados = [];
    tabelasGrupos.forEach(g => {
        if (g.tabela[0]) classificados.push(g.tabela[0].nome);
        if (g.tabela[1]) classificados.push(g.tabela[1].nome);
    });

    if (forcarResultadoUser !== null && isUserNaLiberta) {
        // Empurra o time do utilizador à força para as Oitavas/Quartas se ficou fora
        tabelasGrupos.forEach(g => {
            const uIdx = g.tabela.findIndex(t => t.nome === clubeJogador.nome);
            if (uIdx > 1) {
                const temp = g.tabela[1];
                g.tabela[1] = g.tabela[uIdx];
                g.tabela[uIdx] = temp;
            }
        });
    }

    const jogarMataMataLib = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserNaLiberta && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    const q1 = jogarMataMataLib(tabelasGrupos[0].tabela[0].nome, tabelasGrupos[1].tabela[1].nome);
    const q2 = jogarMataMataLib(tabelasGrupos[2].tabela[0].nome, tabelasGrupos[3].tabela[1].nome);
    const q3 = jogarMataMataLib(tabelasGrupos[1].tabela[0].nome, tabelasGrupos[0].tabela[1].nome);
    const q4 = jogarMataMataLib(tabelasGrupos[3].tabela[0].nome, tabelasGrupos[2].tabela[1].nome);

    const s1 = jogarMataMataLib(q1.vencedor, q4.vencedor);
    const s2 = jogarMataMataLib(q2.vencedor, q3.vencedor);

    const final = jogarMataMataLib(s1.vencedor, s2.vencedor, true);

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
        paisSede: paisSede,
        grupos: tabelasGrupos,
        fasesPlayoffs: [
            { faseNome: "QUARTAS DE FINAL (JOGO ÚNICO)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: final.vencedor,
        posicao: isUserNaLiberta ? posicaoTexto : "Não Classificada",
        foiCampea: isUserNaLiberta && foiCampea
    };
};

export const simularChampionsCup = (clubeJogador, ovrJogador, forcarResultadoUser = null, historico) => {
    // Este torneio só tem mata-mata
    const isUserConcacaf = ["USA", "MEX", "CAN", "CRC", "ELS", "JAM", "PAN"].includes(clubeJogador?.liga);

    // 1. OBTENÇÃO DAS EQUIPAS CLASSIFICADAS
    const classificadosMex = historico.classificadosContinentalMEX || [];
    const classificadosUsa = historico.classificadosContinentalUSA || [];
    const classificadosCan = historico.classificadosContinentalCAN || [];

    const timesMexico = [];
    const timesUsa = [];
    let timeCan = classificadosCan[0]; // O Campeão do W Canadian Championship

    // Preencher as 3 vagas do México
    for (let i = 0; i < 3; i++) {
        if (classificadosMex[i]) timesMexico.push(classificadosMex[i]);
        else timesMexico.push(obterTimePorPais("MEX", null, timesMexico));
    }

    // Preencher as 3 vagas dos EUA
    for (let i = 0; i < 3; i++) {
        if (classificadosUsa[i]) timesUsa.push(classificadosUsa[i]);
        else timesUsa.push(obterTimePorPais("USA", null, timesUsa));
    }

    // Se o Canadá não tiver classificado (ex: ano 1), pega um time genérico
    if (!timeCan) {
        timeCan = obterTimePorPais("CAN");
    }

    // Outros países (1 vaga cada)
    const timeJam = obterTimePorPais("JAM");
    const timeCrc = obterTimePorPais("CRC");
    const timeEls = obterTimePorPais("ELS");
    const timePan = obterTimePorPais("PAN");

    let jamFinal = timeJam;
    let crcFinal = timeCrc;
    let elsFinal = timeEls;
    let panFinal = timePan;
    let canFinal = timeCan;

    if (clubeJogador?.liga === "JAM") jamFinal = clubeJogador.nome;
    if (clubeJogador?.liga === "CRC") crcFinal = clubeJogador.nome;
    if (clubeJogador?.liga === "ELS") elsFinal = clubeJogador.nome;
    if (clubeJogador?.liga === "PAN") panFinal = clubeJogador.nome;
    if (clubeJogador?.liga === "CAN" && classificadosCan[0] === clubeJogador.nome) canFinal = clubeJogador.nome;

    const jogarMataMataCC = (tA, tB, isIdaEVolta, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && isUserConcacaf && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, isIdaEVolta, force);
    };

    // FASE PRELIMINAR
    const preliminar = jogarMataMataCC(jamFinal, crcFinal, false);
    const vencedorPreliminar = preliminar.vencedor;

    // SEGUNDA FASE
    const poteSegundaFase = [vencedorPreliminar, canFinal, elsFinal, panFinal].sort(() => 0.5 - Math.random());
    const sf1 = jogarMataMataCC(poteSegundaFase[0], poteSegundaFase[1], false);
    const sf2 = jogarMataMataCC(poteSegundaFase[2], poteSegundaFase[3], false);

    // QUARTAS DE FINAL
    const poteQuartas = [...timesMexico, ...timesUsa, sf1.vencedor, sf2.vencedor].sort(() => 0.5 - Math.random());
    const q1 = jogarMataMataCC(poteQuartas[0], poteQuartas[1], false);
    const q2 = jogarMataMataCC(poteQuartas[2], poteQuartas[3], false);
    const q3 = jogarMataMataCC(poteQuartas[4], poteQuartas[5], false);
    const q4 = jogarMataMataCC(poteQuartas[6], poteQuartas[7], false);

    // SEMIFINAIS E FINAL
    const semi1 = jogarMataMataCC(q1.vencedor, q2.vencedor, true);
    const semi2 = jogarMataMataCC(q3.vencedor, q4.vencedor, true);

    const final = jogarMataMataCC(semi1.vencedor, semi2.vencedor, false, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    let posicaoTexto = "Não Participou";

    if (isUserConcacaf) {
        const todasEquipas = [...timesMexico, ...timesUsa, jamFinal, crcFinal, canFinal, elsFinal, panFinal];
        if (todasEquipas.includes(clubeJogador.nome)) {
            if (foiCampea) posicaoTexto = "Campeã 🏆";
            else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
            else if ([semi1.timeA, semi1.timeB, semi2.timeA, semi2.timeB].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
            else if (poteQuartas.includes(clubeJogador.nome)) posicaoTexto = "Quartas de Final";
            else if (poteSegundaFase.includes(clubeJogador.nome)) posicaoTexto = "Fase 2";
            else posicaoTexto = "Fase Preliminar";
        }
    }

    return {
        nome: "CONCACAF W Champions Cup",
        tipo: "mata_mata",
        participou: posicaoTexto !== "Não Participou",
        fases: [
            { faseNome: "FASE PRELIMINAR (JOGO ÚNICO)", jogos: [preliminar] },
            { faseNome: "FASE 2 (JOGO ÚNICO)", jogos: [sf1, sf2] },
            { faseNome: "QUARTAS DE FINAL (JOGO ÚNICO)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (IDA E VOLTA)", jogos: [semi1, semi2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea: foiCampea
    };
};

export const simularUWCL = (clubeJogador, ovrJogador, forcarResultadoUser = null, historico) => {
    const ligasEuropeias = ["ESP", "ENG", "FRA", "GER", "ALE", "ITA"];
    const isUserEuropeu = ligasEuropeias.includes(clubeJogador?.liga) || clubeJogador?.div === "UEFA";

    const extrairTimesValidos = (lista, padrao) => {
        if (Array.isArray(lista) && lista.length > 0) {
            const filtrados = lista.filter(Boolean);
            if (filtrados.length > 0) return filtrados;
        }
        return padrao;
    };

    // 1. OBTENÇÃO DOS CLASSIFICADOS DAS TOP LIGAS
    const esp = extrairTimesValidos(historico?.classificadosContinentalESP, ["Barcelona", "Real Madrid", "Real Sociedad"]);
    const eng = extrairTimesValidos(historico?.classificadosContinentalENG, ["Manchester City", "Arsenal", "Chelsea"]);
    const fra = extrairTimesValidos(historico?.classificadosContinentalFRA, ["OL Lyonnes", "Paris FC", "PSG"]);
    const ale = extrairTimesValidos(historico?.classificadosContinentalALE, ["Bayern Munich", "VfL Wolfsburg", "Eintracht Frankfurt"]);
    const ita = extrairTimesValidos(historico?.classificadosContinentalITA, ["Roma", "Inter Milan", "Juventus"]);

    // 9 Entrada Direta na Fase de Liga
    let faseDeLiga = [
        esp[0] || "Barcelona", fra[0] || "OL Lyonnes", fra[1] || "Paris FC",
        ale[0] || "Bayern Munich", ita[0] || "Roma", eng[0] || "Manchester City",
        eng[1] || "Arsenal", "BK Häcken", "SL Benfica"
    ].filter(Boolean);

    // Entrada na 3ª Fase Preliminar (Play-offs)
    let entrant3rdRound = [
        esp[1] || "Real Madrid", esp[2] || "Real Sociedad", fra[2] || "PSG",
        ale[1] || "VfL Wolfsburg", ita[1] || "Inter Milan", eng[2] || "Chelsea", "Sparta Prague"
    ].filter(Boolean);

    // Entrada na 2ª Fase Preliminar
    let entrant2ndRound = [
        ale[2] || "Eintracht Frankfurt", ita[2] || "Juventus", "Sporting CP", "Hammarby IF",
        "Malmö FF", "Ajax", "SK Brann", "PSV Eindhoven", "Austria Wien", "Metalist 1925 Kharkiv",
        "HB Køge", "Servette FC", "Heart of Midlothian", "Apollon Ladies", "Breiðablik", "FK TSC"
    ].filter(Boolean);

    // Entrada na 1ª Fase Preliminar
    let entrant1stRound = [
        "PAOK FC", "KKS Czarni", "Wrexham AFC", "Athlone Town", "KFF Mitrovica",
        "Riga FC", "FC Flora", "Spartak Myjava", "ŽFK Budućnost", "KÍ Klaksvík", "Pyunik FC", "Mġarr United"
    ].filter(Boolean);

    // VERIFICAÇÃO REAL DA VAGA: O clube da jogadora está em alguma destas listas oficiais?
    const esteveNaUWCL = faseDeLiga.includes(clubeJogador?.nome) ||
        entrant3rdRound.includes(clubeJogador?.nome) ||
        entrant2ndRound.includes(clubeJogador?.nome) ||
        entrant1stRound.includes(clubeJogador?.nome);

    const jogarMataMataUWCL = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && esteveNaUWCL && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, !isFinal, force);
    };

    let eliminadosParaEuropaCup = [];
    let fasesPreliminares = [];

    // --- 1ª FASE PRELIMINAR ---
    let p1Jogos = [];
    let p1Vencedores = [];
    for (let i = 0; i < entrant1stRound.length - 1; i += 2) {
        let j = jogarMataMataUWCL(entrant1stRound[i], entrant1stRound[i + 1], false);
        p1Jogos.push(j);
        p1Vencedores.push(j.vencedor);
        eliminadosParaEuropaCup.push(j.vencedor === j.timeA ? j.timeB : j.timeA);
    }
    if (p1Jogos.length > 0) {
        fasesPreliminares.push({ faseNome: "1ª FASE PRELIMINAR (JOGO ÚNICO)", jogos: p1Jogos });
    }

    // --- 2ª FASE PRELIMINAR ---
    let pot2 = Array.from(new Set([...entrant2ndRound, ...p1Vencedores])).sort(() => 0.5 - Math.random());
    if (pot2.length % 2 !== 0) pot2.pop();

    let p2Jogos = [];
    let p2Vencedores = [];
    for (let i = 0; i < pot2.length - 1; i += 2) {
        let j = jogarMataMataUWCL(pot2[i], pot2[i + 1], false);
        p2Jogos.push(j);
        p2Vencedores.push(j.vencedor);
        eliminadosParaEuropaCup.push(j.vencedor === j.timeA ? j.timeB : j.timeA);
    }
    fasesPreliminares.push({ faseNome: "2ª FASE PRELIMINAR (IDA E VOLTA)", jogos: p2Jogos });

    // --- 3ª FASE PRELIMINAR / PLAY-OFFS ---
    let pot3 = Array.from(new Set([...entrant3rdRound, ...p2Vencedores])).sort(() => 0.5 - Math.random());
    if (pot3.length % 2 !== 0) pot3.pop();

    let p3Jogos = [];
    let p3Vencedores = [];
    for (let i = 0; i < pot3.length - 1; i += 2) {
        let j = jogarMataMataUWCL(pot3[i], pot3[i + 1], false);
        p3Jogos.push(j);
        p3Vencedores.push(j.vencedor);
        eliminadosParaEuropaCup.push(j.vencedor === j.timeA ? j.timeB : j.timeA);
    }
    fasesPreliminares.push({ faseNome: "3ª FASE PRELIMINAR - PLAY-OFFS DE ACESSO (IDA E VOLTA)", jogos: p3Jogos });

    // --- FASE DE LIGA (SUÍÇA) ---
    faseDeLiga = Array.from(new Set([...faseDeLiga, ...p3Vencedores])).filter(Boolean);

    // SE FALTAR ALGUMA EQUIPA PARA FECHAR AS 18, PUXA CLUBES EUROPEUS REAIS DO BANCO!
    if (faseDeLiga.length < 18) {
        const todosEuropeusReal = getTodosOsTimes()
            .filter(t => (t.div === "UEFA" || ligasEuropeias.includes(t.liga)) && t.nome)
            .map(t => t.nome);

        const disponiveisReais = todosEuropeusReal
            .filter(nome => !faseDeLiga.includes(nome) && !eliminadosParaEuropaCup.includes(nome)) // <-- EVITA PUXAR QUEM JÁ FOI ELIMINADO!
            .sort(() => 0.5 - Math.random());

        for (const timeReal of disponiveisReais) {
            if (faseDeLiga.length >= 18) break;
            faseDeLiga.push(timeReal);
        }
    }

    faseDeLiga = faseDeLiga.slice(0, 18);
    const isUserNaFaseSuica = faseDeLiga.includes(clubeJogador?.nome);

    const tabelaSuica = faseDeLiga.map(nomeTime => {
        const isUser = clubeJogador?.nome === nomeTime;
        let forca = getForcaTime(nomeTime) + (isUser ? calcularBonusOVR(ovrJogador) : 0);

        let v = 0, e = 0, d = 0, gp = 0, gs = 0;
        for (let j = 0; j < 6; j++) {
            const prob = forca / 130;
            const r = Math.random();
            if (r < prob) { v++; gp += Math.floor(Math.random() * 3) + 1; gs += Math.floor(Math.random() * 2); }
            else if (r < prob + 0.25) { e++; const g = Math.floor(Math.random() * 2); gp += g; gs += g; }
            else { d++; gp += Math.floor(Math.random() * 2); gs += Math.floor(Math.random() * 3) + 1; }
        }
        return { nome: nomeTime, isUser, pts: (v * 3) + e, j: 6, v, e, d, gp, gs, sg: gp - gs };
    });

    tabelaSuica.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
    const tabelaClassificada = tabelaSuica.map((t, idx) => ({ ...t, pos: idx + 1 }));

    if (forcarResultadoUser !== null && isUserNaFaseSuica) {
        const uIdx = tabelaClassificada.findIndex(t => t.nome === clubeJogador.nome);
        if (uIdx > 11) {
            const temp = tabelaClassificada[11];
            tabelaClassificada[11] = tabelaClassificada[uIdx];
            tabelaClassificada[uIdx] = temp;
            tabelaClassificada.forEach((t, i) => t.pos = i + 1);
        }
    }

    const top4Diretos = tabelaClassificada.slice(0, 4).map(t => t.nome);
    const top5ao12 = tabelaClassificada.slice(4, 12).map(t => t.nome);

    // PLAY-IN
    const pi1 = jogarMataMataUWCL(top5ao12[0], top5ao12[7]);
    const pi2 = jogarMataMataUWCL(top5ao12[1], top5ao12[6]);
    const pi3 = jogarMataMataUWCL(top5ao12[2], top5ao12[5]);
    const pi4 = jogarMataMataUWCL(top5ao12[3], top5ao12[4]);
    const vencPlayIn = [pi1.vencedor, pi2.vencedor, pi3.vencedor, pi4.vencedor];

    // QUARTAS DE FINAL
    const q1 = jogarMataMataUWCL(top4Diretos[0], vencPlayIn[3]);
    const q2 = jogarMataMataUWCL(top4Diretos[1], vencPlayIn[2]);
    const q3 = jogarMataMataUWCL(top4Diretos[2], vencPlayIn[1]);
    const q4 = jogarMataMataUWCL(top4Diretos[3], vencPlayIn[0]);

    // SEMIFINAIS E FINAL
    const s1 = jogarMataMataUWCL(q1.vencedor, q4.vencedor);
    const s2 = jogarMataMataUWCL(q2.vencedor, q3.vencedor);
    const final = jogarMataMataUWCL(s1.vencedor, s2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = clubeJogador?.nome && campeaoTorneio === clubeJogador.nome;

    let posicaoTexto = "Não Classificada";
    if (esteveNaUWCL) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([s1.timeA, s1.timeB, s2.timeA, s2.timeB].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else if ([q1.timeA, q1.timeB, q2.timeA, q2.timeB, q3.timeA, q3.timeB, q4.timeA, q4.timeB].includes(clubeJogador.nome)) posicaoTexto = "Quartas de Final";
        else if (top5ao12.includes(clubeJogador.nome)) posicaoTexto = "Play-In da Fase Suíça";
        else if (isUserNaFaseSuica) posicaoTexto = "Fase de Liga (Suíça)";
        else posicaoTexto = "Fase Preliminar";
    }

    return {
        nome: "UEFA Women's Champions League",
        tipo: "suiço",
        participou: esteveNaUWCL, // AGORA VERIFICA CORRETAMENTE A PARTICIPAÇÃO
        tabela: tabelaClassificada,
        fasesPreliminares: fasesPreliminares,
        fasesPlayoffs: [
            { faseNome: "PLAY-IN DE ACESSO ÀS QUARTAS (IDA E VOLTA)", jogos: [pi1, pi2, pi3, pi4] },
            { faseNome: "QUARTAS DE FINAL (IDA E VOLTA)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (IDA E VOLTA)", jogos: [s1, s2] },
            { faseNome: "GRANDE FINAL (JOGO ÚNICO)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea,
        eliminadosUWCL: eliminadosParaEuropaCup
    };
};

export const simularEuropaCup = (clubeJogador, ovrJogador, forcarResultadoUser = null, eliminadosUWCL = [], userEstaNaUWCL = false) => {
    const top5Ligas = ["ESP", "ENG", "FRA", "ALE", "ITA"];
    const isUserTop5 = top5Ligas.includes(clubeJogador?.liga);
    const isUserEuropeu = isUserTop5 || clubeJogador?.div === "UEFA";

    // 1. ENTRANTES DIRETO: Filtra ESTRITAMENTE equipas com div === "UEFA" (Europa fora do Top 5)
    // Impede 100% a entrada de equipas brasileiras, sul-americanas ou norte-americanas
    let timesDiretosBase = getTodosOsTimes()
        .filter(t => t.div === "UEFA" && t.nome)
        .map(t => t.nome);

    // Evita duplicados com quem já veio das preliminares da UWCL
    timesDiretosBase = Array.from(new Set(timesDiretosBase)).filter(nome => !eliminadosUWCL.includes(nome));

    // Garante as 17 equipas diretas selecionando aleatoriamente da lista europeia real
    timesDiretosBase = timesDiretosBase.sort(() => 0.5 - Math.random()).slice(0, 17);

    // 2. LISTA TOTAL DE 43 EQUIPAS EUROPEIAS (26 da UWCL + 17 Diretos UEFA)
    let todosParticipantes = Array.from(new Set([...eliminadosUWCL, ...timesDiretosBase])).filter(Boolean);

    // REGRA DE PARTICIPAÇÃO DO JOGADOR:
    // Se for do Top 5, SÓ joga se veio eliminado da UWCL.
    // Se for de outra liga europeia (div === "UEFA"), entra se estiver na lista.
    const userCaiuUWCL = eliminadosUWCL.includes(clubeJogador?.nome);
    let jogaEuropaConfirmado = false;

    if (isUserTop5) {
        jogaEuropaConfirmado = userCaiuUWCL;
    } else if (isUserEuropeu && !userEstaNaUWCL) {
        if (!todosParticipantes.includes(clubeJogador?.nome) && clubeJogador?.nome) {
            todosParticipantes.pop();
            todosParticipantes.push(clubeJogador.nome);
        }
        jogaEuropaConfirmado = todosParticipantes.includes(clubeJogador?.nome);
    }

    const jogarMataMataEuropa = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && jogaEuropaConfirmado && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, true, force); // Ida e Volta
    };

    // 3. ESTRUTURA DO MATA-MATA (43 Equipas -> 32 no Quadro Principal)
    let potByes = todosParticipantes.filter(n => eliminadosUWCL.includes(n)).slice(0, 21);

    if (potByes.length < 21) {
        const sobra = todosParticipantes.filter(n => !potByes.includes(n));
        while (potByes.length < 21 && sobra.length > 0) {
            potByes.push(sobra.shift());
        }
    }

    let potPreliminar = todosParticipantes.filter(n => !potByes.includes(n));
    while (potPreliminar.length < 22 && potByes.length > 0) {
        potPreliminar.push(potByes.pop());
    }

    // FASE PRELIMINAR (22 equipas de menor ranking -> 11 passam)
    let preliminarJogos = [];
    let preliminarVencedores = [];
    for (let i = 0; i < potPreliminar.length - 1; i += 2) {
        let j = jogarMataMataEuropa(potPreliminar[i], potPreliminar[i + 1], false);
        preliminarJogos.push(j);
        preliminarVencedores.push(j.vencedor);
    }

    // 16-AVOS DE FINAL (21 Byes + 11 Vencedores = 32 Equipas)
    let quadro32 = Array.from(new Set([...potByes, ...preliminarVencedores])).sort(() => 0.5 - Math.random());
    while (quadro32.length < 32) quadro32.push(`Clube Europa ${quadro32.length + 1}`);
    quadro32 = quadro32.slice(0, 32);

    let j16Avos = [];
    let venc16Avos = [];
    for (let i = 0; i < quadro32.length - 1; i += 2) {
        let j = jogarMataMataEuropa(quadro32[i], quadro32[i + 1], false);
        j16Avos.push(j);
        venc16Avos.push(j.vencedor);
    }

    // OITAVAS DE FINAL
    let jOitavas = [];
    let vencOitavas = [];
    for (let i = 0; i < venc16Avos.length - 1; i += 2) {
        let j = jogarMataMataEuropa(venc16Avos[i], venc16Avos[i + 1], false);
        jOitavas.push(j);
        vencOitavas.push(j.vencedor);
    }

    // QUARTAS DE FINAL
    let jQuartas = [];
    let vencQuartas = [];
    for (let i = 0; i < vencOitavas.length - 1; i += 2) {
        let j = jogarMataMataEuropa(vencOitavas[i], vencOitavas[i + 1], false);
        jQuartas.push(j);
        vencQuartas.push(j.vencedor);
    }

    // SEMIFINAIS
    let jSemis = [];
    let vencSemis = [];
    for (let i = 0; i < vencQuartas.length - 1; i += 2) {
        let j = jogarMataMataEuropa(vencQuartas[i], vencQuartas[i + 1], false);
        jSemis.push(j);
        vencSemis.push(j.vencedor);
    }

    // GRANDE FINAL (IDA E VOLTA)
    const final = jogarMataMataEuropa(vencSemis[0], vencSemis[1], true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = jogaEuropaConfirmado && campeaoTorneio === clubeJogador?.nome;

    let posicaoTexto = userEstaNaUWCL ? "Não Participou (Jogou a Champions League)" : "Não Classificada";
    if (jogaEuropaConfirmado) {
        if (foiCampea) posicaoTexto = "Campeã 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã 🥈";
        else if ([vencSemis[0], vencSemis[1]].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista 🥉";
        else if (vencQuartas.includes(clubeJogador.nome)) posicaoTexto = "Quartas de Final";
        else if (vencOitavas.includes(clubeJogador.nome)) posicaoTexto = "Oitavas de Final";
        else if (venc16Avos.includes(clubeJogador.nome)) posicaoTexto = "16-Avos de Final";
        else posicaoTexto = "Fase Preliminar";
    }

    return {
        nome: "UEFA Women's Europa Cup",
        tipo: "mata_mata",
        participou: jogaEuropaConfirmado,
        fases: [
            { faseNome: "FASE PRELIMINAR (IDA E VOLTA)", jogos: preliminarJogos },
            { faseNome: "16-AVOS DE FINAL (IDA E VOLTA)", jogos: j16Avos },
            { faseNome: "OITAVAS DE FINAL (IDA E VOLTA)", jogos: jOitavas },
            { faseNome: "QUARTAS DE FINAL (IDA E VOLTA)", jogos: jQuartas },
            { faseNome: "SEMIFINAIS (IDA E VOLTA)", jogos: jSemis },
            { faseNome: "GRANDE FINAL (IDA E VOLTA)", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularFIFAChampionsCup = (clubeJogador, ovrJogador, forcarResultadoUser = null, historico) => {
    // 1. OBTENÇÃO DOS CAMPEÕES CONTINENTAIS REAIS DO HISTÓRICO
    const campeaoUEFA = historico?.ultimosCampeoesUWCL?.[0] || historico?.classificadosContinentalESP?.[0];
    const campeaoCONMEBOL = historico?.ultimosCampeoesLiberta?.[0] || historico?.classificadosBR?.[0];
    const campeaoCONCACAF = historico?.ultimosCampeoesConcacaf?.[0] || historico?.classificadosContinentalMEX?.[0];

    // Resto do Mundo
    const timesCAF = ["Mamelodi Sundowns", "AS FAR", "TP Mazembe"].sort(() => 0.5 - Math.random());
    const timesAFC = ["Wuhan Jianghan", "Naegohyang"].sort(() => 0.5 - Math.random());
    const campeaoOFC = "Auckland United";

    const campeaoCAF = timesCAF[0];
    const campeaoAFC = timesAFC[0];

    const participantes = [campeaoUEFA, campeaoCONMEBOL, campeaoCONCACAF, campeaoCAF, campeaoAFC, campeaoOFC];
    const participou = participantes.includes(clubeJogador?.nome);

    const jogarMataMataFIFA = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && participou && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    // ROUND 1: AFC vs OFC
    const r1 = jogarMataMataFIFA(campeaoAFC, campeaoOFC, false);

    // ROUND 2: CAF vs Vencedor Round 1
    const r2 = jogarMataMataFIFA(campeaoCAF, r1.vencedor, false);

    // SEMIFINAIS
    // Semi 1: CONCACAF vs Vencedor Round 2
    const semi1 = jogarMataMataFIFA(campeaoCONCACAF, r2.vencedor, false);
    // Semi 2: CONMEBOL vs UEFA
    const semi2 = jogarMataMataFIFA(campeaoCONMEBOL, campeaoUEFA, false);

    const perdedorSemi1 = semi1.vencedor === semi1.timeA ? semi1.timeB : semi1.timeA;
    const perdedorSemi2 = semi2.vencedor === semi2.timeA ? semi2.timeB : semi2.timeA;

    // TERCEIRO LUGAR
    const jogo3Lugar = jogarMataMataFIFA(perdedorSemi1, perdedorSemi2, false);

    // GRANDE FINAL
    const final = jogarMataMataFIFA(semi1.vencedor, semi2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const terceiroTorneio = jogo3Lugar.vencedor;
    const foiCampea = participou && campeaoTorneio === clubeJogador?.nome;

    let posicaoTexto = "Não Classificada";
    if (participou) {
        if (foiCampea) posicaoTexto = "Campeã Mundial 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã Mundial 🥈";
        else if (terceiroTorneio === clubeJogador.nome) posicaoTexto = "3º Lugar Mundial 🥉";
        else if ([perdedorSemi1, perdedorSemi2].includes(clubeJogador.nome)) posicaoTexto = "4º Lugar Mundial";
        else if (r2.timeA === clubeJogador.nome || r2.timeB === clubeJogador.nome) posicaoTexto = "Segunda Fase (Round 2)";
        else posicaoTexto = "Primeira Fase (Round 1)";
    }

    return {
        nome: dbCampeonatos.fifa_champions_cup.nome,
        tipo: "mata_mata",
        participou,
        fases: [
            { faseNome: "PRIMEIRA FASE - ROUND 1 (AFC x OFC)", jogos: [r1] },
            { faseNome: "SEGUNDA FASE - ROUND 2 (CAF x VENCEDOR R1)", jogos: [r2] },
            { faseNome: "SEMIFINAIS (CONCACAF x R2 / CONMEBOL x UEFA)", jogos: [semi1, semi2] },
            { faseNome: "DISPUTA DE 3º LUGAR", jogos: [jogo3Lugar] },
            { faseNome: "GRANDE FINAL MUNDIAL", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularFIFAClubWorldCup = (clubeJogador, ovrJogador, forcarResultadoUser = null, historico) => {

    // --- SELEÇÃO DAS 16 EQUIPAS ---
    // OFC (1 time)
    const ofcTeam = "Auckland United";

    // AFC (2 times)
    const afcTeams = ["Wuhan Jianghan", "Naegohyang"];

    // CAF (2 times aleatórios de 3)
    const cafTeams = ["Mamelodi Sundowns", "AS FAR", "TP Mazembe"].sort(() => 0.5 - Math.random()).slice(0, 2);

    // CONMEBOL (3 times - Últimos campeões da Libertadores + Ranking)
    let conmebolTeams = Array.from(new Set(historico?.ultimosCampeoesLiberta || ["Corinthians"])).slice(0, 3);
    const topConmebolPool = ["Corinthians", "Palmeiras", "Deportivo Cali", "Colo-Colo", "Boca Juniors"];
    for (let t of topConmebolPool) {
        if (conmebolTeams.length >= 3) break;
        if (!conmebolTeams.includes(t)) conmebolTeams.push(t);
    }

    // CONCACAF (3 times - Últimos campeões da Champions Cup + Ranking)
    let concacafTeams = Array.from(new Set(historico?.ultimosCampeoesConcacaf || ["Club América"])).slice(0, 3);
    const topConcacafPool = ["NJ/NY Gotham FC", "San Diego Wave FC", "Monterrey", "Tigres UNAL", "Washington Spirit"];
    for (let t of topConcacafPool) {
        if (concacafTeams.length >= 3) break;
        if (!concacafTeams.includes(t)) concacafTeams.push(t);
    }

    // UEFA (5 times - Últimos campeões UWCL + Top Ranqueados)
    let uefaTeams = Array.from(new Set(historico?.ultimosCampeoesUWCL || ["Barcelona"])).slice(0, 4);
    const topUefaPool = ["Real Madrid", "Chelsea", "PSG", "Arsenal", "Roma", "Juventus", "VfL Wolfsburg"];
    for (let t of topUefaPool) {
        if (uefaTeams.length >= 5) break;
        if (!uefaTeams.includes(t)) uefaTeams.push(t);
    }

    let participantes16 = [
        ofcTeam, ...afcTeams, ...cafTeams,
        ...conmebolTeams, ...concacafTeams, ...uefaTeams
    ];

    const participou = participantes16.includes(clubeJogador?.nome);

    // SORTEIO DE 4 GRUPOS DE 4 TIMES
    participantes16 = participantes16.sort(() => 0.5 - Math.random());
    const grupos = [
        { letra: "A", times: participantes16.slice(0, 4) },
        { letra: "B", times: participantes16.slice(4, 8) },
        { letra: "C", times: participantes16.slice(8, 12) },
        { letra: "D", times: participantes16.slice(12, 16) }
    ];

    const simularFaseGruposCWC = (grupoTimes) => {
        let tab = grupoTimes.map(nomeTime => ({
            nome: nomeTime,
            isUser: nomeTime === clubeJogador?.nome,
            pts: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gs: 0, sg: 0
        }));

        for (let i = 0; i < tab.length; i++) {
            for (let j = i + 1; j < tab.length; j++) {
                let res = simularJogo(tab[i].nome, tab[j].nome, clubeJogador, ovrJogador, false, null);
                let tA = tab.find(t => t.nome === res.timeA);
                let tB = tab.find(t => t.nome === res.timeB);

                if (tA && tB) {
                    tA.j++; tB.j++;
                    tA.gp += res.gA; tA.gs += res.gB;
                    tB.gp += res.gB; tB.gs += res.gA;
                    tA.sg = tA.gp - tA.gs; tB.sg = tB.gp - tB.gs;

                    if (res.gA > res.gB) { tA.v++; tA.pts += 3; tB.d++; }
                    else if (res.gB > res.gA) { tB.v++; tB.pts += 3; tA.d++; }
                    else { tA.e++; tB.e++; tA.pts++; tB.pts++; }
                }
            }
        }
        tab.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
        return tab.map((t, idx) => ({ ...t, pos: idx + 1 }));
    };

    const tabelasGrupos = grupos.map(g => ({
        letra: g.letra,
        tabela: simularFaseGruposCWC(g.times)
    }));

    if (forcarResultadoUser !== null && participou) {
        tabelasGrupos.forEach(g => {
            const uIdx = g.tabela.findIndex(t => t.nome === clubeJogador.nome);
            if (uIdx > 1) {
                const temp = g.tabela[1];
                g.tabela[1] = g.tabela[uIdx];
                g.tabela[uIdx] = temp;
            }
        });
    }

    const jogarMataMataCWC = (tA, tB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && participou && (tA === clubeJogador.nome || tB === clubeJogador.nome)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        return simularJogo(tA, tB, clubeJogador, ovrJogador, false, force);
    };

    const q1 = jogarMataMataCWC(tabelasGrupos[0].tabela[0].nome, tabelasGrupos[1].tabela[1].nome);
    const q2 = jogarMataMataCWC(tabelasGrupos[1].tabela[0].nome, tabelasGrupos[0].tabela[1].nome);
    const q3 = jogarMataMataCWC(tabelasGrupos[2].tabela[0].nome, tabelasGrupos[3].tabela[1].nome);
    const q4 = jogarMataMataCWC(tabelasGrupos[3].tabela[0].nome, tabelasGrupos[2].tabela[1].nome);

    const s1 = jogarMataMataCWC(q1.vencedor, q4.vencedor);
    const s2 = jogarMataMataCWC(q2.vencedor, q3.vencedor);

    const perdedorS1 = s1.vencedor === s1.timeA ? s1.timeB : s1.timeA;
    const perdedorS2 = s2.vencedor === s2.timeA ? s2.timeB : s2.timeA;

    const final = jogarMataMataCWC(s1.vencedor, s2.vencedor, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = participou && campeaoTorneio === clubeJogador?.nome;

    let posicaoTexto = "Não Classificada";
    if (participou) {
        if (foiCampea) posicaoTexto = "Campeã do Mundial de Clubes 🏆";
        else if (viceTorneio === clubeJogador.nome) posicaoTexto = "Vice-campeã do Mundial 🥈";
        else if ([perdedorS1, perdedorS2].includes(clubeJogador.nome)) posicaoTexto = "Semifinalista do Mundial 🥉"; // Atualizado para Semifinalista
        else if ([q1.timeA, q1.timeB, q2.timeA, q2.timeB, q3.timeA, q3.timeB, q4.timeA, q4.timeB].includes(clubeJogador.nome)) posicaoTexto = "Quartas de Final";
        else posicaoTexto = "Fase de Grupos";
    }

    return {
        nome: "FIFA Women's Club World Cup",
        tipo: "grupos",
        participou,
        eAnoDeMundial: true,
        grupos: tabelasGrupos,
        fasesPlayoffs: [
            { faseNome: "QUARTAS DE FINAL (JOGO ÚNICO)", jogos: [q1, q2, q3, q4] },
            { faseNome: "SEMIFINAIS (JOGO ÚNICO)", jogos: [s1, s2] },
            // REMOVIDO: { faseNome: "DISPUTA DE 3º LUGAR", jogos: [jogo3Lugar] },
            { faseNome: "GRANDE FINAL DO MUNDIAL DE CLUBES", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        vice: viceTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};

export const simularFIFAWorldCup = (nacionalidadeUser, ovrJogador, forcarResultadoUser = null, anoAtual = 2027) => {

   // 1. SISTEMA DE SEDES ROTATIVAS
    const sedesMundial = ["Brasil", "Estados Unidos", "Japão", "Espanha", "Inglaterra", "Austrália", "Alemanha"];
    const indexSede = Math.max(0, Math.floor((anoAtual - 2027) / 4)) % sedesMundial.length;
    const paisSedeCopa = sedesMundial[indexSede];

    // 2. SISTEMA DE CONVOCAÇÃO
    const foiConvocada = ovrJogador >= 75;

    const getForcaSelecao = (nome) => {
        const forcas = {
            "Estados Unidos": 90, "Espanha": 89, "Inglaterra": 88, "Alemanha": 87, "França": 86,
            "Holanda": 84, "Japão": 84, "Suécia": 83, "Brasil": 83, "Canadá": 82, "Austrália": 82,
            "Colômbia": 80, "Itália": 79, "Dinamarca": 78, "Noruega": 77, "China": 76,
            "Nigéria": 76, "Coreia do Sul": 75, "Portugal": 75, "Jamaica": 74
        };
        return forcas[nome] || 70 + Math.floor(Math.random() * 5); 
    };

    const todasSelecoes = Object.keys(bandeirasPaises);
    
    // 3. ELIMINATÓRIAS
    let classificadas = todasSelecoes
        .map(nome => ({ nome, forca: getForcaSelecao(nome) + (nome === nacionalidadeUser && foiConvocada ? (ovrJogador / 8) : 0) }))
        .sort((a, b) => b.forca + Math.random() * 15 - (a.forca + Math.random() * 15))
        .map(s => s.nome);

    // Filtra sede para evitar duplicados e injeta na primeira posição
    classificadas = classificadas.filter(nome => nome !== paisSedeCopa);
    classificadas.unshift(paisSedeCopa);
    classificadas = classificadas.slice(0, 32);

    // Se o OVR for imenso ou usou o dilema da Data FIFA, força o país a ir pra Copa
    if (foiConvocada && (forcarResultadoUser !== null || ovrJogador >= 80)) {
        if (!classificadas.includes(nacionalidadeUser)) {
            classificadas[31] = nacionalidadeUser; 
        }
    }

    const paisClassificou = classificadas.includes(nacionalidadeUser);
    const participou = paisClassificou && foiConvocada;

    // 4. FASE DE GRUPOS (8 grupos de 4) - Embaralha as outras 31, mantém a Sede em 1º
    const outrasSelecoes = classificadas.slice(1).sort(() => 0.5 - Math.random());
    classificadas = [classificadas[0], ...outrasSelecoes];

    const grupos = [];
    for (let i = 0; i < 8; i++) {
        grupos.push({
            letra: String.fromCharCode(65 + i),
            times: classificadas.slice(i * 4, (i + 1) * 4)
        });
    }

    const simularJogoSelecao = (timeA, timeB, isFinal = false) => {
        let force = null;
        if (forcarResultadoUser !== null && participou && (timeA === nacionalidadeUser || timeB === nacionalidadeUser)) {
            force = isFinal ? forcarResultadoUser : true;
        }
        
        const isUserA = timeA === nacionalidadeUser && participou;
        const isUserB = timeB === nacionalidadeUser && participou;
        
        let forcaA = getForcaSelecao(timeA) + (isUserA ? ovrJogador / 8 : 0) + Math.random() * 10;
        let forcaB = getForcaSelecao(timeB) + (isUserB ? ovrJogador / 8 : 0) + Math.random() * 10;

        if (force === true) return { timeA, timeB, gA: isUserA ? 2 : 0, gB: isUserA ? 0 : 2, placarTexto: isUserA ? "2 - 0" : "0 - 2", vencedor: nacionalidadeUser };
        if (force === false) return { timeA, timeB, gA: isUserA ? 0 : 2, gB: isUserA ? 2 : 0, placarTexto: isUserA ? "0 - 2" : "2 - 0", vencedor: isUserA ? timeB : timeA };

        let gA = Math.floor(Math.random() * 3);
        let gB = Math.floor(Math.random() * 3);
        if (forcaA > forcaB + 5) gA++;
        if (forcaB > forcaA + 5) gB++;

        if (gA === gB && !isFinal) return { timeA, timeB, gA, gB, placarTexto: `${gA} - ${gB}`, vencedor: null };
        if (gA === gB && isFinal) forcaA > forcaB ? gA++ : gB++;

        return { timeA, timeB, gA, gB, placarTexto: `${gA} - ${gB}`, vencedor: gA > gB ? timeA : timeB };
    };

    const tabelasGrupos = grupos.map(g => {
        let tab = g.times.map(nome => ({ nome, isUser: nome === nacionalidadeUser && participou, pts: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gs: 0, sg: 0 }));
        for (let i = 0; i < tab.length; i++) {
            for (let j = i + 1; j < tab.length; j++) {
                let res = simularJogoSelecao(tab[i].nome, tab[j].nome, false);
                let tA = tab.find(t => t.nome === res.timeA);
                let tB = tab.find(t => t.nome === res.timeB);
                tA.j++; tB.j++; tA.gp += res.gA; tA.gs += res.gB; tB.gp += res.gB; tB.gs += res.gA;
                tA.sg = tA.gp - tA.gs; tB.sg = tB.gp - tB.gs;
                if (res.gA > res.gB) { tA.v++; tA.pts += 3; tB.d++; }
                else if (res.gB > res.gA) { tB.v++; tB.pts += 3; tA.d++; }
                else { tA.e++; tB.e++; tA.pts++; tB.pts++; }
            }
        }
        tab.sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
        return { letra: g.letra, tabela: tab.map((t, idx) => ({ ...t, pos: idx + 1 })) };
    });

    if (forcarResultadoUser !== null && participou) {
        tabelasGrupos.forEach(g => {
            const uIdx = g.tabela.findIndex(t => t.nome === nacionalidadeUser);
            if (uIdx > 1) {
                const temp = g.tabela[1]; g.tabela[1] = g.tabela[uIdx]; g.tabela[uIdx] = temp;
                g.tabela.forEach((t, i) => t.pos = i + 1);
            }
        });
    }

    // 5. MATA-MATA (Removido Terceiro Lugar para limpar a chave)
    let oitavas = [];
    tabelasGrupos.forEach((g, idx) => {
        if (idx % 2 === 0) {
            oitavas.push(simularJogoSelecao(g.tabela[0].nome, tabelasGrupos[idx + 1].tabela[1].nome, true));
            oitavas.push(simularJogoSelecao(tabelasGrupos[idx + 1].tabela[0].nome, g.tabela[1].nome, true));
        }
    });

    const quartas = [];
    for (let i = 0; i < oitavas.length; i += 2) quartas.push(simularJogoSelecao(oitavas[i].vencedor, oitavas[i+1].vencedor, true));

    const semis = [];
    for (let i = 0; i < quartas.length; i += 2) semis.push(simularJogoSelecao(quartas[i].vencedor, quartas[i+1].vencedor, true));

    const final = simularJogoSelecao(semis[0].vencedor, semis[1].vencedor, true);

    const campeaoTorneio = final.vencedor;
    const viceTorneio = final.vencedor === final.timeA ? final.timeB : final.timeA;
    const foiCampea = participou && campeaoTorneio === nacionalidadeUser;

    // 6. POSIÇÃO OFICIAL DA JOGADORA
    let posicaoTexto = "País não se classificou";
    if (paisClassificou) {
        if (!foiConvocada) {
            posicaoTexto = "Não Convocada (OVR Baixo)";
        } else {
            if (foiCampea) posicaoTexto = "Campeã do Mundo! 🏆🌎";
            else if (viceTorneio === nacionalidadeUser) posicaoTexto = "Vice-campeã do Mundo 🥈";
            else if (semis.flatMap(j => [j.timeA, j.timeB]).includes(nacionalidadeUser)) posicaoTexto = "Semifinalista 🥉";
            else if (quartas.flatMap(j => [j.timeA, j.timeB]).includes(nacionalidadeUser)) posicaoTexto = "Quartas de Final";
            else if (oitavas.flatMap(j => [j.timeA, j.timeB]).includes(nacionalidadeUser)) posicaoTexto = "Oitavas de Final";
            else posicaoTexto = "Eliminada Fase de Grupos";
        }
    }

    return {
        nome: "FIFA Women's World Cup",
        tipo: "grupos",
        participou,
        paisSede: paisSedeCopa,
        eAnoDeMundialSelecoes: true,
        grupos: tabelasGrupos,
        fasesPlayoffs: [
            { faseNome: "OITAVAS DE FINAL", jogos: oitavas },
            { faseNome: "QUARTAS DE FINAL", jogos: quartas },
            { faseNome: "SEMIFINAIS", jogos: semis },
            { faseNome: "GRANDE FINAL", jogos: [final] }
        ],
        campeao: campeaoTorneio,
        posicao: posicaoTexto,
        foiCampea
    };
};