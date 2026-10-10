const dbEventos = [
    {
        id: "convocacao_selecao",
        titulo: "Convocação para a Seleção Principal",
        desc: "A técnica da Seleção te incluiu na lista para o torneio internacional da Data FIFA! No entanto, o calendário coincide com a fase decisiva do seu clube.",
        opcoes: [
            {
                texto: "Servir à Seleção",
                img: "https://media.istockphoto.com/id/876899218/pt/foto/celebrating-the-victory-after-soccer-match.jpg?s=612x612&w=0&k=20&c=6m6OpcWGW6OHhCkT6D0GW8Z095RPUXIUkFNis5T6Rpg=",
                consequencias: [
                    { tipo: "positivo", texto: "+4 OVR (Projeção Mundial)" },
                    { tipo: "negativo", texto: "Desgaste de Viagem" }
                ],
                isRisco: true,
                chance: 70,
                sucesso: { txt: "+4 OVR", ovr: 4, msg: "Você brilhou com a camisa da Seleção e foi eleita a revelação do torneio!" },
                falha: { txt: "-1 OVR", ovr: -1, msg: "O fuso horário e a maratona de jogos afetaram seu ritmo em campo." },
                statsMult: 0.95
            },
            {
                texto: "Pedir Dispensa e Focar no Clube",
                img: "https://media.istockphoto.com/id/1420056765/pt/foto/close-up-of-soccer-player-tying-her-shoelaces-on-playing-field.jpg?s=612x612&w=0&k=20&c=g9SdIUJvmTgwECkWx0zK0Utl7MZlMc4Q-zvuGB1XiO8=",
                consequencias: [
                    { tipo: "positivo", texto: "+2 OVR (Liderança Interna)" }
                ],
                isRisco: false,
                sucesso: { txt: "+2 OVR", ovr: 2, msg: "A comissão técnica do clube valorizou sua dedicação total ao elenco." },
                statsMult: 1.15
            }
        ]
    },
    {
        id: "luta_estrutura",
        titulo: "Manifesto por Melhores Gramados",
        desc: "O campo do centro de treinamento está em péssimas condições. Como capitã/referência do elenco, as jogadoras pedem para você liderar a cobrança à diretoria.",
        opcoes: [
            {
                texto: "Liderar o Manifesto",
                img: "https://media.istockphoto.com/id/1200120482/pt/foto/women-soccer-team-celebrating-victory.jpg?s=612x612&w=0&k=20&c=sFx126n5bT2jgAZyY0vhgQnbCRqCCwJac5WEKf3drgc=",
                consequencias: [
                    { tipo: "positivo", texto: "+3 OVR (Respeito do Elenco)" },
                    { tipo: "negativo", texto: "Arito com a Diretoria" }
                ],
                isRisco: true,
                chance: 65,
                sucesso: { txt: "+3 OVR", ovr: 3, msg: "A diretoria cedeu à pressão e trocou o piso do CT. Moral altíssima!" },
                falha: { txt: "-1 OVR", ovr: -1, msg: "A diretoria considerou o tom forte demais e te tirou de um jogo." },
                statsMult: 1.0
            },
            {
                texto: "Focar Apenas no Desempenho",
                img: "https://media.istockphoto.com/id/1414169855/pt/foto/female-player-with-ball-focusing-for-soccer-match-in-locker-room.jpg?s=612x612&w=0&k=20&c=-GJqruMxWfXbxLngWddeuaMtbgBXarm7_d73YDEYCak=",
                consequencias: [
                    { tipo: "positivo", texto: "+1 OVR (Foco Absoluto)" }
                ],
                isRisco: false,
                sucesso: { txt: "+1 OVR", ovr: 1, msg: "Você evitou polêmicas fora dos gramados e manteve seu ritmo." },
                statsMult: 1.0
            }
        ]
    },
    {
        id: "embaixadora_chuteiras",
        titulo: "Campanha de Linha Feminina de Chuteiras",
        desc: "Uma multinacional esportiva quer você como rosto principal no lançamento de uma chuteira desenvolvida especificamente para a anatomia feminina.",
        opcoes: [
            {
                texto: "Aceitar o Contrato Global",
                img: "https://i.pinimg.com/564x/c2/c2/40/c2c2400ddd8df2f611ed2b0cc859262e.jpg",
                consequencias: [
                    { tipo: "positivo", texto: "+3 OVR (Status Global)" },
                    { tipo: "negativo", texto: "Agenda Cheia de Comerciais" }
                ],
                isRisco: true,
                chance: 60,
                sucesso: { txt: "+3 OVR", ovr: 3, msg: "A campanha foi um sucesso internacional e elevou sua confiança ao topo!" },
                falha: { txt: "-1 OVR", ovr: -1, msg: "As sessões de fotos e viagens tiraram o foco da preparação tática." },
                statsMult: 0.95
            },
            {
                texto: "Recusar e Priorizar os Treinos",
                img: "https://media.istockphoto.com/id/1347044052/pt/foto/female-players-playing-soccer-match-at-indoor-court.jpg?s=612x612&w=0&k=20&c=Xv8kXofLvYf-uWFPMlUSXxhVX9q9dlbk4dRpTGK1fRg=",
                consequencias: [
                    { tipo: "positivo", texto: "+2 OVR (Evolução Física)" }
                ],
                isRisco: false,
                sucesso: { txt: "+2 OVR", ovr: 2, msg: "Você aproveitou as datas livres para aprimorar sua parte física." },
                statsMult: 1.10
            }
        ]
    },
    {
        id: "transicao_recuperacao",
        titulo: "Cuidados Preventivos de Joelho",
        desc: "Após sentires um incômodo no joelho, os fisioterapeutas recomendam uma rotina intensa de fortalecimento preventivo para evitar lesões graves (como o LCA).",
        opcoes: [
            {
                texto: "Seguir Trabalho Preventivo Intensivo",
                img: "https://media.istockphoto.com/id/2222927606/pt/foto/fitness-rest-and-soccer-with-team-in-locker-room-competition-and-tournament-with-wonder.jpg?s=612x612&w=0&k=20&c=s6BYnPrzG2iJ65P7zZzZyGLVM5gl0TtMjR5hVv7zRgU=",
                consequencias: [
                    { tipo: "positivo", texto: "+3 OVR (Prevenção e Força)" }
                ],
                isRisco: false,
                sucesso: { txt: "+3 OVR", ovr: 3, msg: "Sua estabilidade muscular melhorou drasticamente, refletindo na sua explosão em campo!" },
                statsMult: 1.05
            },
            {
                texto: "Apressar o Retorno aos Jogos",
                img: "https://media.istockphoto.com/id/2222927596/pt/foto/frustrated-girl-soccer-player-or-mistake-with-stress-in-locker-room-for-loss-pain-or-headache.jpg?s=612x612&w=0&k=20&c=9Sqzao3cp0dHiJRFGrjcFYUsV5uKE6jifmaSMjoirhc=",
                consequencias: [
                    { tipo: "positivo", texto: "+4 OVR se der certo" },
                    { tipo: "negativo", texto: "-2 OVR em caso de Dores" }
                ],
                isRisco: true,
                chance: 30,
                sucesso: { txt: "+4 OVR", ovr: 4, msg: "Você superou as dores e foi decisiva nas partidas do mês!" },
                falha: { txt: "-2 OVR", ovr: -2, msg: "O joelho voltou a inchar e você precisou parar por algumas semanas." },
                statsMult: 0.85
            }
        ]
    },
    {
        id: "mudar_posicao_tatica",
        titulo: "Pedido de Mudança Tática",
        desc: "A treinadora propõe alterar sua função em campo para cobrir uma carência do elenco nesta temporada.",
        opcoes: [
            {
                texto: "Aceitar a Nova Função",
                img: "https://media.istockphoto.com/id/863512328/pt/foto/injury-on-womens-soccer-match.jpg?s=612x612&w=0&k=20&c=yUUD8Hb4d0xfGBYuz7_o8DlxAoQ3sceFckdLSiOt8cg=",
                consequencias: [
                    { tipo: "positivo", texto: "+3 OVR (Polivalência Tática)" },
                    { tipo: "negativo", texto: "Risco de Inadaptação" }
                ],
                isRisco: true,
                chance: 75,
                sucesso: { txt: "+3 OVR", ovr: 3, msg: "Sua inteligência de jogo impressionou e você se tornou indispensável no esquema!" },
                falha: { txt: "-1 OVR", ovr: -1, msg: "Demorou algumas rodadas para acertar o posicionamento ideal." },
                statsMult: 1.0
            },
            {
                texto: "Manter Posição de Origem",
                img: "https://media.istockphoto.com/id/185407784/pt/foto/ac%C3%A7%C3%A3o-de-futebol.jpg?s=612x612&w=0&k=20&c=d2oxOrAzXOVeo404Bs-9kxfI-d2aK7hfAtLSsffOp3I=",
                consequencias: [
                    { tipo: "positivo", texto: "+1 OVR (Especialização)" }
                ],
                isRisco: false,
                sucesso: { txt: "+1 OVR", ovr: 1, msg: "Você continuou dominando as ações na sua zona de conforto." },
                statsMult: 1.05
            }
        ]
    },
    {
        id: "festa_safica",
        titulo: "Enquadrada na Festa Sáfica",
        desc: "Um torcedor te reconheceu curtindo a folga numa festa sáfica e decidiu te cobrar rudemente pelos últimos resultados do time no meio da pista.",
        opcoes: [
            {
                texto: "Bater Boca com o Torcedor",
                img: "https://media.istockphoto.com/id/841621882/pt/foto/couple-arguing-having-a-quarrel-in-night-party.jpg?s=612x612&w=0&k=20&c=b6-4OoqApiJ7mWpstrgw0S_G7OeAsxPYa5Q_KEUK2to=", 
                consequencias: [
                    { tipo: "positivo", texto: "+2 OVR (Personalidade Forte)" },
                    { tipo: "negativo", texto: "Risco de Multa e Cancelamento" }
                ],
                isRisco: true,
                chance: 40, // É perigoso brigar em festa hoje em dia com tanto celular
                sucesso: { txt: "+2 OVR", ovr: 2, msg: "Você impôs respeito! O vídeo vazou, mas a torcida adorou a sua atitude e o grupo se uniu." },
                falha: { txt: "-2 OVR", ovr: -2, msg: "Alguém filmou a briga fora de contexto. A diretoria te multou e o estresse afetou seu jogo." },
                statsMult: 0.9 // A confusão tira um pouco do foco da temporada
            },
            {
                texto: "Ignorar e Ir Embora Mais Cedo",
                img: "https://media.istockphoto.com/id/904773894/pt/foto/best-friends-having-fun-night-out-in-the-city.jpg?s=612x612&w=0&k=20&c=IdpQE208P1gcY2GfxGcKDvHfy8pb9CGfUSmWUVzagJo=",
                consequencias: [
                    { tipo: "neutro", texto: "+0 OVR" }
                ],
                isRisco: false,
                sucesso: { txt: "Ficou o mesmo", ovr: 1, msg: "Você evitou a dor de cabeça, deixou o torcedor falando sozinho e focou 100% no próximo treino." },
                statsMult: 1.05 // Dormiu mais cedo, rendimento aumentou um pouquinho
            }
        ]
    },
    // --- EVENTOS EASTER EGG (TED LASSO) ---
    {
        id: "biscoitos_do_ted",
        isEasterEgg: true,
        titulo: "Biscoitos na Sala de Ted Lasso",
        desc: "Após uma sequência difícil, o técnico Ted Lasso te chama à sala dele com uma caixinha amarela de biscoitos caseiros e pergunta o que tem pesado na sua cabeça.",
        opcoes: [
            {
                texto: "Abrir o Coração sobre a Pressão",
                img: "https://gameoverdrive.com.br/wp-content/uploads/2026/08/ted-lasso-temporada-4-data-horario-e-calendario-dos-10-3-1280x720.webp",
                consequencias: [
                    { tipo: "positivo", texto: "+3 OVR (Confiança e Mental Forte)" }
                ],
                isRisco: false,
                sucesso: { txt: "+3 OVR", ovr: 3, msg: "Ted te lembrou de curtir o processo. Você jogou leve e foi a melhor em campo!" },
                statsMult: 1.10
            },
            {
                texto: "Focar Apenas na Tática",
                img: "https://feira.tangerina.news/wp-content/uploads/2026/04/Jason-Sudeikis-512x512.jpg",
                consequencias: [
                    { tipo: "positivo", texto: "+1 OVR (Foco Pragmatico)" }
                ],
                isRisco: false,
                sucesso: { txt: "+1 OVR", ovr: 1, msg: "Você agradeceu os biscoitos e voltou para o campo focada na sua rotina." },
                statsMult: 1.0
            }
        ]
    },
    {
        id: "desafio_tatico_beard",
        isEasterEgg: true,
        titulo: "O Livro Enigmático de Beard",
        desc: "O assistente Coach Beard surge do nada no vestiário e te entrega um livro denso sobre táticas de xadrez, afirmando que a chave para superar a zaga adversária no sábado está no capítulo 4.",
        opcoes: [
            {
                texto: "Virar a Noite Estudando o Livro",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVH2hu2Rdblkk_G-K-OQwapYKzWhaUleDS_QA5rqko6p68F9VUfgqErU&s=10",
                consequencias: [
                    { tipo: "positivo", texto: "+4 OVR (Genialização Tática)" },
                    { tipo: "negativo", texto: "Desgaste de Sono" }
                ],
                isRisco: true,
                chance: 60,
                sucesso: { txt: "+4 OVR", ovr: 4, msg: "Você compreendeu a metáfora de Beard e antecipou todas as jogadas da defesa!" },
                falha: { txt: "-1 OVR", ovr: -1, msg: "A leitura era abstrata demais, você não dormiu direito e ficou lenta no jogo." },
                statsMult: 0.90
            },
            {
                texto: "Agradecer e Ter uma Boa Noite de Sono",
                img: "https://i0.wp.com/ladygeeksmedia.com/wp-content/uploads/2026/08/Beard-in-Ted-Lasso-Season-4.jpg?ssl=1",
                consequencias: [
                    { tipo: "positivo", texto: "+2 OVR (Descanso Adequado)" }
                ],
                isRisco: false,
                sucesso: { txt: "+2 OVR", ovr: 2, msg: "Você descansou bem e Beard acenou com a cabeça em aprovação no dia seguinte." },
                statsMult: 1.05
            }
        ]
    },
    {
        id: "analise_video_alice",
        isEasterEgg: true,
        titulo: "A Nova Abordagem de Alice",
        desc: "A assistente, Alice, preparou uma análise individual em vídeo mostrando pequenos ajustes na sua movimentação que podem dobrar suas chances de gol.",
        opcoes: [
            {
                texto: "Adotar os Novos Movimentos de Alice",
                img: "https://i0.wp.com/thefilmgordon.com/wp-content/uploads/2026/08/images-6.jpg?ssl=1",
                consequencias: [
                    { tipo: "positivo", texto: "+4 OVR (Evolução Técnica Moderna)" },
                    { tipo: "negativo", texto: "Adaptação Exigente" }
                ],
                isRisco: true,
                chance: 75,
                sucesso: { txt: "+4 OVR", ovr: 4, msg: "Os detalhes de Alice encaixaram com perfeição e seu rendimento disparou!" },
                falha: { txt: "-1 OVR", ovr: -1, msg: "Você pensou demais na movimentação nova e perdeu o timing da jogada." },
                statsMult: 1.10
            },
            {
                texto: "Manter Seu Estilo Habitual",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-cEShlg9ensk2rOxBmxdENbSdWvjU2Oq8_Pjc9uAafCrIkvwvEkbSitN&s=10",
                consequencias: [
                    { tipo: "positivo", texto: "+1 OVR (Segurança)" }
                ],
                isRisco: false,
                sucesso: { txt: "+1 OVR", ovr: 1, msg: "Você continuou jogando no seu estilo confortável e sem surpresas." },
                statsMult: 1.0
            }
        ]
    },
    {
        id: "cha_com_rebecca",
        isEasterEgg: true,
        titulo: "Chá com Rebecca Welton",
        desc: "A presidente do clube, Rebecca, te convida para um chá no gabinete dela para conversar sobre liderança, ser referência no esporte e o peso de carregar as expectativas da torcida.",
        opcoes: [
            {
                texto: "Pedir Conselhos sobre Liderança e Postura",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmXJm0eTmFuPKqUiPzHQMsAjfj5YnafF_wmIjaGUIlPn8ZoRclxqbJ9M&s=10",
                consequencias: [
                    { tipo: "positivo", texto: "+3 OVR (Presença e Liderança)" }
                ],
                isRisco: false,
                sucesso: { txt: "+3 OVR", ovr: 3, msg: "As palavras de Rebecca te inspiraram a se impor com autoridade no vestiário e em campo." },
                statsMult: 1.05
            },
            {
                texto: "Aproveitar para Cobrar Estrutura para o Elenco",
                img: "https://cinebuzz.com.br/wp-content/uploads/2026/09/Que-horas-estreia-o-oitavo-episodio-da-4a-temporada-de-Ted-Lasso-1024x576.jpg",
                consequencias: [
                    { tipo: "positivo", texto: "+4 OVR (Respeito do Grupo)" },
                    { tipo: "negativo", texto: "Risco de Tensão na Reunião" }
                ],
                isRisco: true,
                chance: 70,
                sucesso: { txt: "+4 OVR", ovr: 4, msg: "Rebecca adorou sua ousadia e aprovou novas melhorias imediatas para o time!" },
                falha: { txt: "-1 OVR", ovr: -1, msg: "A conversa ficou um pouco desconfortável, mas o grupo valorizou sua coragem." },
                statsMult: 1.0
            }
        ]
    },
    {
        id: "consultoria_keeley",
        isEasterEgg: true,
        titulo: "A estratégia de RP da Keeley",
        desc: "Keeley Jones quer ajudar a projetar a sua imagem pública, destacando a sua história e valores autênticos para atração de patrocinadores sem perder a conexão com a torcida.",
        opcoes: [
            {
                texto: "Deixar a Marca nas Mãos da Keeley",
                img: "https://cdn.mos.cms.futurecdn.net/prPAQFsCfaSgNUYJHNXLmV.jpg",
                consequencias: [
                    { tipo: "positivo", texto: "+3 OVR (Destaque e Status)" }
                ],
                isRisco: false,
                sucesso: { txt: "+3 OVR", ovr: 3, msg: "A campanha da Keeley foi super acolhedora e fã-clube e imprensa se apaixonaram pela sua história!" },
                statsMult: 1.05
            },
            {
                texto: "Preferir uma Rotina Discreta e Sem Holofotes",
                img: "https://i0.wp.com/www.femestella.com/wp-content/uploads/2026/08/Ted_Lasso_Photo_040107.jpg?fit=1000%2C530&ssl=1",
                consequencias: [
                    { tipo: "positivo", texto: "+1 OVR (Foco Interno)" }
                ],
                isRisco: false,
                sucesso: { txt: "+1 OVR", ovr: 1, msg: "Você manteve a vida privada longe das câmeras e manteve a rotina de treinos habitual." },
                statsMult: 1.0
            }
        ]
    }
];

export default dbEventos;