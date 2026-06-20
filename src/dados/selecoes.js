export const selecoes = {
  // Copa 2023 - Seleções do Playoffs
  espanha_2023: {
    nome: "Espanha",
    ano: 2023,
    campea: true,

    goleiras: [
      { nome: "Cata Coll", nomeCamisa: "Coll", numero: 23, posicao: "GOL", overall: 86 },
      { nome: "Misa Rodríguez", nomeCamisa: "Misa", numero: 1, posicao: "GOL", overall: 80 },
      { nome: "Enith Salón", nomeCamisa: "Salón", numero: 13, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Irene Paredes", nomeCamisa: "Paredes", numero: 4, posicao: "ZAG", overall: 92 },
      { nome: "Ona Batlle", nomeCamisa: "Batlle", numero: 2, posicao: "LD/LE", overall: 87 },
      { nome: "Olga Carmona", nomeCamisa: "Carmona", numero: 19, posicao: "LE/ME", overall: 88 },
      { nome: "Laia Codina", nomeCamisa: "Codina", numero: 14, posicao: "ZAG", overall: 81 },
      { nome: "Ivana Andrés", nomeCamisa: "Andrés", numero: 5, posicao: "ZAG", overall: 80 },
      { nome: "Oihane Hernández", nomeCamisa: "Hernández", numero: 12, posicao: "LD/MD", overall: 79 },
      { nome: "Rocío Gálvez", nomeCamisa: "Gálvez", numero: 20, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Aitana Bonmatí", nomeCamisa: "Bonmatí", numero: 6, posicao: "MC/MEI", overall: 96 },
      { nome: "Teresa Abelleira", nomeCamisa: "Abelleira", numero: 3, posicao: "VOL/MC", overall: 85 },
      { nome: "Alexia Putellas", nomeCamisa: "Putellas", numero: 11, posicao: "MEI/MC", overall: 90 },
      { nome: "Claudia Zornoza", nomeCamisa: "Zornoza", numero: 21, posicao: "MC/VOL", overall: 79 },
      { nome: "Irene Guerrero", nomeCamisa: "Guerrero", numero: 7, posicao: "MC", overall: 78 },
      { nome: "María Pérez", nomeCamisa: "Pérez", numero: 16, posicao: "VOL", overall: 74 }
    ],

    atacantes: [
      { nome: "Jennifer Hermoso", nomeCamisa: "Hermoso", numero: 10, posicao: "MEI/ATA", overall: 88 },
      { nome: "Salma Paralluelo", nomeCamisa: "Salma", numero: 18, posicao: "PE/ATA", overall: 86 },
      { nome: "Mariona Caldentey", nomeCamisa: "Mariona", numero: 8, posicao: "PE/MEI", overall: 84 },
      { nome: "Alba Redondo", nomeCamisa: "Redondo", numero: 15, posicao: "ATA/PD", overall: 83 },
      { nome: "Athenea del Castillo", nomeCamisa: "Athenea", numero: 22, posicao: "PD/PE", overall: 82 },
      { nome: "Esther González", nomeCamisa: "Esther", numero: 9, posicao: "ATA", overall: 81 },
      { nome: "Eva Navarro", nomeCamisa: "Navarro", numero: 17, posicao: "PD", overall: 79 }
    ]
  },
  inglaterra_2023: {
    nome: "Inglaterra",
    ano: 2023,
    campea: false,
    tecnico: "Sarina Wiegman",

    goleiras: [
      { nome: "Mary Earps", nomeCamisa: "Earps", numero: 1, posicao: "GOL", overall: 89 },
      { nome: "Ellie Roebuck", nomeCamisa: "Roebuck", numero: 21, posicao: "GOL", overall: 80 },
      { nome: "Hannah Hampton", nomeCamisa: "Hampton", numero: 13, posicao: "GOL", overall: 78 }
    ],

    defensoras: [
      { nome: "Alex Greenwood", nomeCamisa: "Greenwood", numero: 5, posicao: "ZAG/LE", overall: 88 },
      { nome: "Lucy Bronze", nomeCamisa: "Bronze", numero: 2, posicao: "LD/PD", overall: 86 },
      { nome: "Millie Bright", nomeCamisa: "Bright", numero: 6, posicao: "ZAG", overall: 86 },
      { nome: "Jess Carter", nomeCamisa: "Carter", numero: 16, posicao: "ZAG/LE", overall: 84 },
      { nome: "Niamh Charles", nomeCamisa: "Charles", numero: 3, posicao: "LE/PE", overall: 80 },
      { nome: "Lotte Wubben-Moy", nomeCamisa: "Wubben-Moy", numero: 14, posicao: "ZAG", overall: 78 },
      { nome: "Esme Morgan", nomeCamisa: "Morgan", numero: 15, posicao: "ZAG/LD", overall: 77 }
    ],

    meio_campo: [
      { nome: "Keira Walsh", nomeCamisa: "Walsh", numero: 4, posicao: "VOL/MC", overall: 87 },
      { nome: "Georgia Stanway", nomeCamisa: "Stanway", numero: 8, posicao: "MC/VOL", overall: 85 },
      { nome: "Ella Toone", nomeCamisa: "Toone", numero: 10, posicao: "MEI/MC", overall: 84 },
      { nome: "Jordan Nobbs", nomeCamisa: "Nobbs", numero: 12, posicao: "MC", overall: 81 },
      { nome: "Katie Zelem", nomeCamisa: "Zelem", numero: 20, posicao: "VOL/MC", overall: 80 },
      { nome: "Laura Coombs", nomeCamisa: "Coombs", numero: 17, posicao: "MC", overall: 78 }
    ],

    atacantes: [
      { nome: "Lauren Hemp", nomeCamisa: "Hemp", numero: 11, posicao: "PE/ATA", overall: 87 },
      { nome: "Lauren James", nomeCamisa: "James", numero: 7, posicao: "PD/MEI", overall: 86 },
      { nome: "Alessia Russo", nomeCamisa: "Russo", numero: 23, posicao: "ATA", overall: 85 },
      { nome: "Rachel Daly", nomeCamisa: "Daly", numero: 9, posicao: "PE/LE", overall: 84 },
      { nome: "Chloe Kelly", nomeCamisa: "Kelly", numero: 18, posicao: "PD/PE", overall: 84 },
      { nome: "Bethany England", nomeCamisa: "England", numero: 19, posicao: "ATA", overall: 81 },
      { nome: "Katie Robinson", nomeCamisa: "Robinson", numero: 22, posicao: "PD", overall: 76 }
    ]
  }, 
  eua_2023: {
    nome: "Estados Unidos",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Alyssa Naeher", nomeCamisa: "Naeher", numero: 1, posicao: "GOL", overall: 85 },
      { nome: "Casey Murphy", nomeCamisa: "Murphy", numero: 18, posicao: "GOL", overall: 77 },
      { nome: "Aubrey Kingsbury", nomeCamisa: "Kingsbury", numero: 21, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Naomi Girma", nomeCamisa: "Girma", numero: 4, posicao: "ZAG", overall: 88 },
      { nome: "Julie Ertz", nomeCamisa: "Ertz", numero: 8, posicao: "ZAG/VOL", overall: 85 },
      { nome: "Crystal Dunn", nomeCamisa: "Dunn", numero: 19, posicao: "LE/ME", overall: 82 },
      { nome: "Emily Fox", nomeCamisa: "Fox", numero: 23, posicao: "LD/LE", overall: 81 },
      { nome: "Emily Sonnett", nomeCamisa: "Sonnett", numero: 14, posicao: "VOL/ZAG", overall: 79 },
      { nome: "Sofia Huerta", nomeCamisa: "Huerta", numero: 3, posicao: "LD", overall: 77 },
      { nome: "Kelley O'Hara", nomeCamisa: "O'Hara", numero: 5, posicao: "LD/LE", overall: 76 },
      { nome: "Alana Cook", nomeCamisa: "Cook", numero: 12, posicao: "ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Lindsey Horan", nomeCamisa: "Horan", numero: 10, posicao: "MC/VOL", overall: 86 },
      { nome: "Rose Lavelle", nomeCamisa: "Lavelle", numero: 16, posicao: "MEI/MC", overall: 90 },
      { nome: "Andi Sullivan", nomeCamisa: "Sullivan", numero: 17, posicao: "VOL/MC", overall: 79 },
      { nome: "Savannah DeMelo", nomeCamisa: "DeMelo", numero: 9, posicao: "MC/MEI", overall: 77 },
      { nome: "Kristie Mewis", nomeCamisa: "Mewis", numero: 22, posicao: "MC", overall: 75 },
      { nome: "Ashley Sanchez", nomeCamisa: "Sanchez", numero: 2, posicao: "MEI", overall: 75 }
    ],

    atacantes: [
      { nome: "Sophia Smith", nomeCamisa: "Smith", numero: 11, posicao: "PD/ATA", overall: 83 },
      { nome: "Trinity Rodman", nomeCamisa: "Rodman", numero: 20, posicao: "PD/PE", overall: 81 },
      { nome: "Alex Morgan", nomeCamisa: "Morgan", numero: 13, posicao: "ATA", overall: 88 },
      { nome: "Lynn Williams", nomeCamisa: "Williams", numero: 6, posicao: "PE/PD", overall: 80 },
      { nome: "Alyssa Thompson", nomeCamisa: "Thompson", numero: 7, posicao: "PE/PD", overall: 76 },
      { nome: "Megan Rapinoe", nomeCamisa: "Rapinoe", numero: 15, posicao: "PE/ME", overall: 74 }
    ]
  },
  australia_2023: {
    nome: "Austrália",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Mackenzie Arnold", nomeCamisa: "Arnold", numero: 18, posicao: "GOL", overall: 84 },
      { nome: "Lydia Williams", nomeCamisa: "Williams", numero: 1, posicao: "GOL", overall: 76 },
      { nome: "Teagan Micah", nomeCamisa: "Micah", numero: 12, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Steph Catley", nomeCamisa: "Catley", numero: 7, posicao: "LE/ZAG", overall: 86 },
      { nome: "Clare Hunt", nomeCamisa: "Hunt", numero: 21, posicao: "ZAG", overall: 82 },
      { nome: "Alanna Kennedy", nomeCamisa: "Kennedy", numero: 14, posicao: "ZAG", overall: 81 },
      { nome: "Ellie Carpenter", nomeCamisa: "Carpenter", numero: 21, posicao: "LD/MD", overall: 81 },
      { nome: "Clare Polkinghorne", nomeCamisa: "Polkinghorne", numero: 4, posicao: "ZAG", overall: 77 },
      { nome: "Courtney Nevin", nomeCamisa: "Nevin", numero: 3, posicao: "LE/LD", overall: 76 },
      { nome: "Charlotte Grant", nomeCamisa: "Grant", numero: 22, posicao: "LD/LE", overall: 75 },
      { nome: "Aivi Luik", nomeCamisa: "Luik", numero: 2, posicao: "ZAG/VOL", overall: 74 }
    ],

    meio_campo: [
      { nome: "Katrina Gorry", nomeCamisa: "Gorry", numero: 19, posicao: "MC/VOL", overall: 85 },
      { nome: "Kyra Cooney-Cross", nomeCamisa: "Cooney-Cross", numero: 23, posicao: "MC/VOL", overall: 83 },
      { nome: "Emily van Egmond", nomeCamisa: "Van Egmond", numero: 10, posicao: "MEI/MC", overall: 81 },
      { nome: "Tameka Yallop", nomeCamisa: "Yallop", numero: 13, posicao: "MC/ME", overall: 78 },
      { nome: "Clare Wheeler", nomeCamisa: "Wheeler", numero: 6, posicao: "VOL", overall: 75 },
      { nome: "Alex Chidiac", nomeCamisa: "Chidiac", numero: 8, posicao: "MEI/MC", overall: 75 }
    ],

    atacantes: [
      { nome: "Caitlin Foord", nomeCamisa: "Foord", numero: 9, posicao: "PE/ATA", overall: 85 },
      { nome: "Sam Kerr", nomeCamisa: "Kerr", numero: 20, posicao: "ATA", overall: 88 },
      { nome: "Hayley Raso", nomeCamisa: "Raso", numero: 16, posicao: "PD/MD", overall: 84 },
      { nome: "Mary Fowler", nomeCamisa: "Fowler", numero: 11, posicao: "ATA/MEI", overall: 83 },
      { nome: "Cortnee Vine", nomeCamisa: "Vine", numero: 5, posicao: "PD/PE", overall: 78 },
      { nome: "Kyah Simon", nomeCamisa: "Simon", numero: 17, posicao: "ATA", overall: 74 }
    ]
  },
  suecia_2023: {
    nome: "Suécia",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Zećira Mušović", nomeCamisa: "Mušović", numero: 1, posicao: "GOL", overall: 87 },
      { nome: "Jennifer Falk", nomeCamisa: "Falk", numero: 21, posicao: "GOL", overall: 78 },
      { nome: "Tove Enblom", nomeCamisa: "Enblom", numero: 12, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Amanda Ilestedt", nomeCamisa: "Ilestedt", numero: 13, posicao: "ZAG", overall: 88 },
      { nome: "Magdalena Eriksson", nomeCamisa: "Eriksson", numero: 6, posicao: "ZAG/LE", overall: 86 },
      { nome: "Jonna Andersson", nomeCamisa: "Andersson", numero: 2, posicao: "LE", overall: 84 },
      { nome: "Nathalie Björn", nomeCamisa: "Björn", numero: 14, posicao: "ZAG/VOL", overall: 82 },
      { nome: "Linda Sembrant", nomeCamisa: "Sembrant", numero: 3, posicao: "ZAG", overall: 80 },
      { nome: "Stina Lennartsson", nomeCamisa: "Lennartsson", numero: 4, posicao: "LD/LE", overall: 76 },
      { nome: "Anna Sandberg", nomeCamisa: "Sandberg", numero: 5, posicao: "LE", overall: 75 }
    ],

    meio_campo: [
      { nome: "Kosovare Asllani", nomeCamisa: "Asllani", numero: 9, posicao: "MEI/MC", overall: 85 },
      { nome: "Elin Rubensson", nomeCamisa: "Rubensson", numero: 23, posicao: "VOL/MC", overall: 85 },
      { nome: "Filippa Angeldahl", nomeCamisa: "Angeldahl", numero: 16, posicao: "MC/VOL", overall: 84 },
      { nome: "Johanna Rytting Kaneryd", nomeCamisa: "Kaneryd", numero: 19, posicao: "MD/PD", overall: 81 },
      { nome: "Caroline Seger", nomeCamisa: "Seger", numero: 17, posicao: "VOL", overall: 79 },
      { nome: "Olivia Schough", nomeCamisa: "Schough", numero: 22, posicao: "ME/PE", overall: 78 },
      { nome: "Hanna Bennison", nomeCamisa: "Bennison", numero: 20, posicao: "MC/MEI", overall: 77 }
    ],

    atacantes: [
      { nome: "Fridolina Rolfö", nomeCamisa: "Rolfö", numero: 18, posicao: "PE/ATA", overall: 89 },
      { nome: "Stina Blackstenius", nomeCamisa: "Blackstenius", numero: 11, posicao: "ATA", overall: 87 },
      { nome: "Rebecka Blomqvist", nomeCamisa: "Blomqvist", numero: 15, posicao: "ATA", overall: 82 },
      { nome: "Lina Hurtig", nomeCamisa: "Hurtig", numero: 8, posicao: "PE/ATA", overall: 80 },
      { nome: "Sofia Jakobsson", nomeCamisa: "Jakobsson", numero: 10, posicao: "PD/ATA", overall: 79 },
      { nome: "Madelen Janogy", nomeCamisa: "Janogy", numero: 7, posicao: "ATA/PE", overall: 78 }
    ]
  },
  japao_2023: {
    "nome": "Japão",
    "ano": 2023,
    "campea": false,

    "goleiras": [
      { "nome": "Ayaka Yamashita", "nomeCamisa": "Yamashita", "numero": 1, "posicao": "GOL", "overall": 83 },
      { "nome": "Momoko Tanaka", "nomeCamisa": "M. Tanaka", "numero": 18, "posicao": "GOL", "overall": 76 },
      { "nome": "Chika Hirao", "nomeCamisa": "Hirao", "numero": 21, "posicao": "GOL", "overall": 75 }
    ],
    "defensoras": [
      { "nome": "Saki Kumagai", "nomeCamisa": "Kumagai", "numero": 4, "posicao": "ZAG/VOL", "overall": 85 },
      { "nome": "Moeka Minami", "nomeCamisa": "Minami", "numero": 3, "posicao": "ZAG/LE", "overall": 82 },
      { "nome": "Risa Shimizu", "nomeCamisa": "Shimizu", "numero": 2, "posicao": "LD/ZAG", "overall": 81 },
      { "nome": "Kiko Seike", "nomeCamisa": "Seike", "numero": 17, "posicao": "LD/PD", "overall": 79 },
      { "nome": "Shiori Miyake", "nomeCamisa": "Miyake", "numero": 5, "posicao": "ZAG", "overall": 78 },
      { "nome": "Hana Takahashi", "nomeCamisa": "Takahashi", "numero": 12, "posicao": "ZAG", "overall": 77 },
      { "nome": "Miyabi Moriya", "nomeCamisa": "Moriya", "numero": 19, "posicao": "LD/LE", "overall": 76 },
      { "nome": "Rion Ishikawa", "nomeCamisa": "Ishikawa", "numero": 23, "posicao": "ZAG", "overall": 74 }
    ],
    "meio_campo": [
      { "nome": "Yui Hasegawa", "nomeCamisa": "Hasegawa", "numero": 14, "posicao": "MC/VOL", "overall": 87 },
      { "nome": "Hinata Miyazawa", "nomeCamisa": "Miyazawa", "numero": 7, "posicao": "MEI/PE/ATA", "overall": 85 },
      { "nome": "Jun Endo", "nomeCamisa": "Endo", "numero": 13, "posicao": "MEI/PE/LE", "overall": 83 },
      { "nome": "Fuka Nagano", "nomeCamisa": "Nagano", "numero": 10, "posicao": "VOL/MC", "overall": 82 },
      { "nome": "Hina Sugita", "nomeCamisa": "Sugita", "numero": 6, "posicao": "MEI/MC/PE", "overall": 81 },
      { "nome": "Aoba Fujino", "nomeCamisa": "Fujino", "numero": 15, "posicao": "MEI/PD/ATA", "overall": 81 },
      { "nome": "Hikaru Naomoto", "nomeCamisa": "Naomoto", "numero": 8, "posicao": "MC/MEI", "overall": 80 },
      { "nome": "Honoka Hayashi", "nomeCamisa": "Hayashi", "numero": 16, "posicao": "MC/VOL", "overall": 79 }
    ],
    "atacantes": [
      { "nome": "Mina Tanaka", "nomeCamisa": "Tanaka", "numero": 11, "posicao": "ATA", "overall": 82 },
      { "nome": "Riko Ueki", "nomeCamisa": "Ueki", "numero": 9, "posicao": "ATA", "overall": 80 },
      { "nome": "Maika Hamano", "nomeCamisa": "Hamano", "numero": 20, "posicao": "ATA/MEI", "overall": 78 },
      { "nome": "Remina Chiba", "nomeCamisa": "Chiba", "numero": 22, "posicao": "ATA", "overall": 75 }
    ]
  },
  colombia_2023: {
    nome: "Colômbia",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Catalina Pérez", nomeCamisa: "Pérez", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Sandra Sepúlveda", nomeCamisa: "Sepúlveda", numero: 13, posicao: "GOL", overall: 75 },
      { nome: "Natalia Giraldo", nomeCamisa: "Giraldo", numero: 12, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Manuela Vanegas", nomeCamisa: "Vanegas", numero: 2, posicao: "LE/ZAG", overall: 83 },
      { nome: "Jorelyn Carabalí", nomeCamisa: "Carabalí", numero: 19, posicao: "ZAG", overall: 81 },
      { nome: "Daniela Arias", nomeCamisa: "D. Arias", numero: 3, posicao: "ZAG", overall: 80 },
      { nome: "Carolina Arias", nomeCamisa: "C. Arias", numero: 15, posicao: "LD/ZAG", overall: 78 },
      { nome: "Ana María Guzmán", nomeCamisa: "Guzmán", numero: 17, posicao: "LD/LE", overall: 77 },
      { nome: "Mónica Ramos", nomeCamisa: "Ramos", numero: 20, posicao: "LD", overall: 75 },
      { nome: "Daniela Caracas", nomeCamisa: "Caracas", numero: 22, posicao: "LD", overall: 74 }
    ],

    meio_campo: [
      { nome: "Leicy Santos", nomeCamisa: "Santos", numero: 10, posicao: "MEI/MC", overall: 84 },
      { nome: "Daniela Montoya", nomeCamisa: "Montoya", numero: 6, posicao: "MC/VOL", overall: 80 },
      { nome: "Lorena Bedoya", nomeCamisa: "Bedoya", numero: 14, posicao: "VOL", overall: 79 },
      { nome: "Diana Ospina", nomeCamisa: "Ospina", numero: 5, posicao: "VOL/MC", overall: 78 },
      { nome: "Marcela Restrepo", nomeCamisa: "Restrepo", numero: 4, posicao: "MC/MD", overall: 76 },
      { nome: "Camila Reyes", nomeCamisa: "Reyes", numero: 7, posicao: "MC/MEI", overall: 74 }
    ],

    atacantes: [
      { nome: "Linda Caicedo", nomeCamisa: "Caicedo", numero: 18, posicao: "PE/ATA", overall: 86 },
      { nome: "Mayra Ramírez", nomeCamisa: "Ramírez", numero: 9, posicao: "ATA/PD", overall: 84 },
      { nome: "Catalina Usme", nomeCamisa: "Usme", numero: 11, posicao: "MEI/ATA", overall: 87 },
      { nome: "Lady Andrade", nomeCamisa: "Andrade", numero: 16, posicao: "PE/MEI", overall: 76 },
      { nome: "Ivonne Chacón", nomeCamisa: "Chacón", numero: 21, posicao: "ATA", overall: 75 },
      { nome: "Elexa Bahr", nomeCamisa: "Bahr", numero: 23, posicao: "ATA", overall: 74 }
    ]
  },
  holanda_2023: {
    nome: "Holanda",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Daphne van Domselaar", nomeCamisa: "v. Domselaar", numero: 1, posicao: "GOL", overall: 89 },
      { nome: "Lize Kop", nomeCamisa: "Kop", numero: 16, posicao: "GOL", overall: 76 },
      { nome: "Jacintha Weimar", nomeCamisa: "Weimar", numero: 23, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Dominique Janssen", nomeCamisa: "Janssen", numero: 20, posicao: "ZAG/LE", overall: 83 },
      { nome: "Stefanie van der Gragt", nomeCamisa: "v.d. Gragt", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Sherida Spitse", nomeCamisa: "Spitse", numero: 8, posicao: "ZAG/VOL", overall: 82 },
      { nome: "Lynn Wilms", nomeCamisa: "Wilms", numero: 2, posicao: "LD/ZAG", overall: 80 },
      { nome: "Merel van Dongen", nomeCamisa: "v. Dongen", numero: 5, posicao: "ZAG/LE", overall: 80 },
      { nome: "Aniek Nouwen", nomeCamisa: "Nouwen", numero: 4, posicao: "ZAG", overall: 79 },
      { nome: "Kerstin Casparij", nomeCamisa: "Casparij", numero: 18, posicao: "LD/MD", overall: 78 },
      { nome: "Caitlin Dijkstra", nomeCamisa: "Dijkstra", numero: 15, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Jill Roord", nomeCamisa: "Roord", numero: 6, posicao: "MC/MEI", overall: 86 },
      { nome: "Daniëlle van de Donk", nomeCamisa: "v.d. Donk", numero: 10, posicao: "MEI/MC", overall: 84 },
      { nome: "Jackie Groenen", nomeCamisa: "Groenen", numero: 14, posicao: "MC/VOL", overall: 83 },
      { nome: "Victoria Pelova", nomeCamisa: "Pelova", numero: 17, posicao: "MD/MC", overall: 82 },
      { nome: "Damaris Egurrola", nomeCamisa: "Egurrola", numero: 21, posicao: "VOL/MC", overall: 81 },
      { nome: "Wieke Kaptein", nomeCamisa: "Kaptein", numero: 19, posicao: "MC", overall: 76 },
      { nome: "Jill Baijings", nomeCamisa: "Baijings", numero: 12, posicao: "MC", overall: 75 }
    ],

    atacantes: [
      { nome: "Lieke Martens", nomeCamisa: "Martens", numero: 11, posicao: "PE/ATA", overall: 84 },
      { nome: "Lineth Beerensteyn", nomeCamisa: "Beerensteyn", numero: 7, posicao: "ATA/PD", overall: 82 },
      { nome: "Esmee Brugts", nomeCamisa: "Brugts", numero: 22, posicao: "PE/LE", overall: 81 },
      { nome: "Katja Snoeijs", nomeCamisa: "Snoeijs", numero: 9, posicao: "ATA", overall: 79 },
      { nome: "Renate Jansen", nomeCamisa: "Jansen", numero: 13, posicao: "PD/ATA", overall: 78 }
    ]
  },
  franca_2023: {
    nome: "França",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Pauline Peyraud-Magnin", nomeCamisa: "Peyraud-Magnin", numero: 16, posicao: "GOL", overall: 83 },
      { nome: "Solène Durand", nomeCamisa: "Durand", numero: 1, posicao: "GOL", overall: 78 },
      { nome: "Constance Picaud", nomeCamisa: "Picaud", numero: 21, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Wendie Rennard", nomeCamisa: "W. Renard", numero: 3, posicao: "ZAG", overall: 95 },
      { nome: "Sakina Karchaoui", nomeCamisa: "Karchaoui", numero: 7, posicao: "LE/MEI", overall: 85 },
      { nome: "Selma Bacha", nomeCamisa: "Bacha", numero: 13, posicao: "LE/MEI", overall: 84 },
      { nome: "Ève Périsset", nomeCamisa: "Périsset", numero: 22, posicao: "LD/ZAG", overall: 82 },
      { nome: "Elisa De Almeida", nomeCamisa: "De Almeida", numero: 5, posicao: "ZAG", overall: 80 },
      { nome: "Maëlle Lakrar", nomeCamisa: "Lakrar", numero: 2, posicao: "ZAG/LD", overall: 79 },
      { nome: "Aïssatou Tounkara", nomeCamisa: "Tounkara", numero: 14, posicao: "ZAG", overall: 78 },
      { nome: "Estelle Cascarino", nomeCamisa: "E. Cascarino", numero: 20, posicao: "ZAG/LE", overall: 78 }
    ],

    meio_campo: [
      { nome: "Grace Geyoro", nomeCamisa: "Geyoro", numero: 8, posicao: "MC/VOL", overall: 86 },
      { nome: "Sandie Toletti", nomeCamisa: "Toletti", numero: 6, posicao: "VOL/MC", overall: 82 },
      { nome: "Amel Majri", nomeCamisa: "Majri", numero: 10, posicao: "MEI/MC", overall: 81 },
      { nome: "Kenza Dali", nomeCamisa: "Dali", numero: 15, posicao: "MC/MEI", overall: 81 },
      { nome: "Léa Le Garrec", nomeCamisa: "Le Garrec", numero: 17, posicao: "MC", overall: 78 },
      { nome: "Laurina Fazer", nomeCamisa: "Fazer", numero: 4, posicao: "MC", overall: 76 }
    ],

    atacantes: [
      { nome: "Kadidiatou Diani", nomeCamisa: "Diani", numero: 11, posicao: "ATA/PD", overall: 88 },
      { nome: "Eugénie Le Sommer", nomeCamisa: "Le Sommer", numero: 9, posicao: "ATA", overall: 85 },
      { nome: "Clara Matéo", nomeCamisa: "Matéo", numero: 12, posicao: "PE/MD", overall: 81 },
      { nome: "Viviane Asseyi", nomeCamisa: "Asseyi", numero: 18, posicao: "PE/ATA", overall: 79 },
      { nome: "Vicki Becho", nomeCamisa: "Becho", numero: 23, posicao: "ATA/PD", overall: 77 },
      { nome: "Naomie Feller", nomeCamisa: "Feller", numero: 19, posicao: "ATA", overall: 76 }
    ]
  },
  jamaica_2023: {
    nome: "Jamaica",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Rebecca Spencer", nomeCamisa: "Spencer", numero: 13, posicao: "GOL", overall: 84 },
      { nome: "Sydney Schneider", nomeCamisa: "Schneider", numero: 1, posicao: "GOL", overall: 75 },
      { nome: "Liya Brooks", nomeCamisa: "Brooks", numero: 23, posicao: "GOL", overall: 70 }
    ],

    defensoras: [
      { nome: "Allyson Swaby", nomeCamisa: "A. Swaby", numero: 17, posicao: "ZAG", overall: 81 },
      { nome: "Chantelle Swaby", nomeCamisa: "C. Swaby", numero: 4, posicao: "ZAG/VOL", overall: 80 },
      { nome: "Deneisha Blackwood", nomeCamisa: "Blackwood", numero: 14, posicao: "LE/ME", overall: 79 },
      { nome: "Tiernny Wiltshire", nomeCamisa: "Wiltshire", numero: 19, posicao: "LD/MD", overall: 77 },
      { nome: "Konya Plummer", nomeCamisa: "Plummer", numero: 5, posicao: "ZAG", overall: 76 },
      { nome: "Vyan Sampson", nomeCamisa: "Sampson", numero: 3, posicao: "ZAG/VOL", overall: 76 },
      { nome: "Sashana Campbell", nomeCamisa: "Campbell", numero: 20, posicao: "LE/ZAG", overall: 74 }
    ],

    meio_campo: [
      { nome: "Drew Spence", nomeCamisa: "Spence", numero: 8, posicao: "MC/MEI", overall: 82 },
      { nome: "Atlanta Primus", nomeCamisa: "Primus", numero: 20, posicao: "MEI/MC", overall: 79 },
      { nome: "Havana Solaun", nomeCamisa: "Solaun", numero: 6, posicao: "MC/VOL", overall: 78 },
      { nome: "Peyton McNamara", nomeCamisa: "McNamara", numero: 7, posicao: "VOL/MC", overall: 76 },
      { nome: "Trudi Carter", nomeCamisa: "Carter", numero: 18, posicao: "MD/MC", overall: 75 },
      { nome: "Paige Bailey-Gayle", nomeCamisa: "Bailey-Gayle", numero: 12, posicao: "ME/MC", overall: 74 }
    ],

    atacantes: [
      { nome: "Khadija Shaw", nomeCamisa: "Shaw", numero: 11, posicao: "ATA", overall: 87 },
      { nome: "Jody Brown", nomeCamisa: "Brown", numero: 10, posicao: "PE/ATA", overall: 80 },
      { nome: "Cheyna Matthews", nomeCamisa: "Matthews", numero: 22, posicao: "PD/ATA", overall: 78 },
      { nome: "Tiffany Cameron", nomeCamisa: "Cameron", numero: 15, posicao: "PD/MD", overall: 77 },
      { nome: "Kayla McKenna", nomeCamisa: "McKenna", numero: 9, posicao: "ATA", overall: 76 },
      { nome: "Kameron Simmonds", nomeCamisa: "Simmonds", numero: 21, posicao: "ATA", overall: 74 }
    ]
  },
  noruega_2023: {
    nome: "Noruega",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Aurora Mikalsen", nomeCamisa: "Mikalsen", numero: 23, posicao: "GOL", overall: 78 },
      { nome: "Cecilie Fiskerstrand", nomeCamisa: "Fiskerstrand", numero: 1, posicao: "GOL", overall: 77 },
      { nome: "Guro Pettersen", nomeCamisa: "Pettersen", numero: 12, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Maren Mjelde", nomeCamisa: "Mjelde", numero: 6, posicao: "ZAG/VOL", overall: 84 },
      { nome: "Tuva Hansen", nomeCamisa: "Hansen", numero: 4, posicao: "LD/LE", overall: 80 },
      { nome: "Guro Bergsvand", nomeCamisa: "Bergsvand", numero: 16, posicao: "ZAG", overall: 78 },
      { nome: "Mathilde Harviken", nomeCamisa: "Harviken", numero: 13, posicao: "ZAG/LE", overall: 77 },
      { nome: "Marit Bratberg Lund", nomeCamisa: "Lund", numero: 3, posicao: "LE/MEI", overall: 77 },
      { nome: "Anja Sønstevold", nomeCamisa: "Sønstevold", numero: 2, posicao: "LD/ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Guro Reiten", nomeCamisa: "Reiten", numero: 11, posicao: "MEI/PE", overall: 88 },
      { nome: "Frida Maanum", nomeCamisa: "Maanum", numero: 18, posicao: "MC/MEI", overall: 86 },
      { nome: "Ingrid Syrstad Engen", nomeCamisa: "Engen", numero: 7, posicao: "VOL/MC", overall: 84 },
      { nome: "Vilde Bøe Risa", nomeCamisa: "Bøe Risa", numero: 8, posicao: "MC/VOL", overall: 82 },
      { nome: "Emilie Haavi", nomeCamisa: "Haavi", numero: 20, posicao: "MEI/PE", overall: 80 },
      { nome: "Julie Blakstad", nomeCamisa: "Blakstad", numero: 19, posicao: "MC/LE/PE", overall: 79 },
      { nome: "Amalie Eikeland", nomeCamisa: "Eikeland", numero: 17, posicao: "MD/PD", overall: 78 },
      { nome: "Thea Bjelde", nomeCamisa: "Bjelde", numero: 21, posicao: "MC/LD", overall: 75 }
    ],

    atacantes: [
      { nome: "Caroline Graham Hansen", nomeCamisa: "Graham Hansen", numero: 10, posicao: "PD/PE/ATA", overall: 90 },
      { nome: "Ada Hegerberg", nomeCamisa: "Hegerberg", numero: 14, posicao: "ATA", overall: 89 },
      { nome: "Sophie Román Haug", nomeCamisa: "Haug", numero: 22, posicao: "ATA", overall: 81 },
      { nome: "Karina Sævik", nomeCamisa: "Sævik", numero: 15, posicao: "ATA/PD", overall: 78 },
      { nome: "Anna Jøsendal", nomeCamisa: "Jøsendal", numero: 9, posicao: "PE/ATA", overall: 75 }
    ]
  },
  suica_2023: {
    nome: "Suíça",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Gaëlle Thalmann", nomeCamisa: "Thalmann", numero: 1, posicao: "GOL", overall: 81 },
      { nome: "Livia Peng", nomeCamisa: "Peng", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Seraina Friedli", nomeCamisa: "Friedli", numero: 21, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Noelle Maritz", nomeCamisa: "Maritz", numero: 5, posicao: "LD/ZAG", overall: 83 },
      { nome: "Viola Calligaris", nomeCamisa: "Calligaris", numero: 18, posicao: "ZAG/LD", overall: 81 },
      { nome: "Luana Bühler", nomeCamisa: "Bühler", numero: 15, posicao: "ZAG", overall: 80 },
      { nome: "Julia Stierli", nomeCamisa: "Stierli", numero: 2, posicao: "ZAG", overall: 78 },
      { nome: "Eseosa Aigbogun", nomeCamisa: "Aigbogun", numero: 19, posicao: "LE/LD", overall: 77 },
      { nome: "Nadine Riesen", nomeCamisa: "Riesen", numero: 8, posicao: "LE/ZAG", overall: 76 },
      { nome: "Lara Marti", nomeCamisa: "Marti", numero: 3, posicao: "LE/ME", overall: 75 },
      { nome: "Laura Felber", nomeCamisa: "Felber", numero: 4, posicao: "ZAG", overall: 73 }
    ],

    meio_campo: [
      { nome: "Lia Wälti", nomeCamisa: "Wälti", numero: 13, posicao: "VOL/MC", overall: 85 },
      { nome: "Géraldine Reuteler", nomeCamisa: "Reuteler", numero: 6, posicao: "MC/MD", overall: 82 },
      { nome: "Coumba Sow", nomeCamisa: "Sow", numero: 11, posicao: "MC/MEI", overall: 81 },
      { nome: "Seraina Piubel", nomeCamisa: "Piubel", numero: 17, posicao: "MD/MC", overall: 78 },
      { nome: "Sandrine Mauron", nomeCamisa: "Mauron", numero: 16, posicao: "MC/VOL", overall: 77 },
      { nome: "Marion Rey", nomeCamisa: "Rey", numero: 14, posicao: "MC", overall: 75 }
    ],

    atacantes: [
      { nome: "Ramona Bachmann", nomeCamisa: "Bachmann", numero: 10, posicao: "ATA/MEI", overall: 84 },
      { nome: "Ana Maria Crnogorčević", nomeCamisa: "Crnogorčević", numero: 9, posicao: "ATA/PD", overall: 83 },
      { nome: "Alisha Lehmann", nomeCamisa: "Lehmann", numero: 23, posicao: "PD/PE", overall: 79 },
      { nome: "Fabienne Humm", nomeCamisa: "Humm", numero: 20, posicao: "ATA", overall: 78 },
      { nome: "Meriame Terchoun", nomeCamisa: "Terchoun", numero: 22, posicao: "PE/ATA", overall: 76 },
      { nome: "Amira Arfaoui", nomeCamisa: "Arfaoui", numero: 7, posicao: "PE/PD", overall: 75 }
    ]
  },
  marrocos_2023: {
    nome: "Marrocos",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Khadija Er-Rmichi", nomeCamisa: "Er-Rmichi", numero: 1, posicao: "GOL", overall: 78 },
      { nome: "Assia Zouhair", nomeCamisa: "Zouhair", numero: 12, posicao: "GOL", overall: 72 },
      { nome: "Inès Arouaissa", nomeCamisa: "Arouaissa", numero: 22, posicao: "GOL", overall: 70 }
    ],

    defensoras: [
      { nome: "Hanane Aït El Haj", nomeCamisa: "Aït El Haj", numero: 17, posicao: "LD/ZAG", overall: 77 },
      { nome: "Yasmin Mrabet", nomeCamisa: "Mrabet", numero: 21, posicao: "ZAG/VOL", overall: 76 },
      { nome: "Zineb Redouani", nomeCamisa: "Redouani", numero: 2, posicao: "LE/LD", overall: 76 },
      { nome: "Nesryne El Chad", nomeCamisa: "El Chad", numero: 5, posicao: "ZAG", overall: 75 },
      { nome: "Nouhaila Benzina", nomeCamisa: "Benzina", numero: 3, posicao: "ZAG", overall: 75 },
      { nome: "Sabah Seghir", nomeCamisa: "Seghir", numero: 13, posicao: "LE", overall: 72 },
      { nome: "Rkia Mazrouai", nomeCamisa: "Mazrouai", numero: 14, posicao: "LD", overall: 70 }
    ],

    meio_campo: [
      { nome: "Ghizlane Chebbak", nomeCamisa: "Chebbak", numero: 7, posicao: "MEI/MC", overall: 81 },
      { nome: "Élodie Nakkach", nomeCamisa: "Nakkach", numero: 6, posicao: "VOL/MC", overall: 78 },
      { nome: "Anissa Lahmari", nomeCamisa: "Lahmari", numero: 16, posicao: "MEI/MC", overall: 77 },
      { nome: "Sarah Kassi", nomeCamisa: "Kassi", numero: 4, posicao: "VOL/MC", overall: 75 },
      { nome: "Najat Badri", nomeCamisa: "Badri", numero: 10, posicao: "MC", overall: 74 },
      { nome: "Salma Amani", nomeCamisa: "Amani", numero: 8, posicao: "MEI", overall: 74 }
    ],

    atacantes: [
      { nome: "Ibtissam Jraïdi", nomeCamisa: "Jraïdi", numero: 9, posicao: "ATA", overall: 80 },
      { nome: "Fatima Tagnaout", nomeCamisa: "Tagnaout", numero: 11, posicao: "PE/ME", overall: 79 },
      { nome: "Rosella Ayane", nomeCamisa: "Ayane", numero: 23, posicao: "ATA/PD", overall: 79 },
      { nome: "Sakina Ouzraoui", nomeCamisa: "Ouzraoui", numero: 19, posicao: "PD/PE", overall: 77 },
      { nome: "Sofia Bouftini", nomeCamisa: "Bouftini", numero: 20, posicao: "ATA", overall: 73 },
      { nome: "Kenza Chapelle", nomeCamisa: "Chapelle", numero: 18, posicao: "PE/PD", overall: 72 },
      { nome: "Fatima Zohra Gharbi", nomeCamisa: "Gharbi", numero: 15, posicao: "ATA", overall: 70 }
    ]
  },
  nigeria_2023: {
    nome: "Nigéria",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Chiamaka Nnadozie", nomeCamisa: "Nnadozie", numero: 16, posicao: "GOL", overall: 86 },
      { nome: "Tochukwu Oluehi", nomeCamisa: "Oluehi", numero: 1, posicao: "GOL", overall: 74 },
      { nome: "Yewande Balogun", nomeCamisa: "Balogun", numero: 21, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Ashleigh Plumptre", nomeCamisa: "Plumptre", numero: 2, posicao: "LE/ZAG", overall: 83 },
      { nome: "Osinachi Ohale", nomeCamisa: "Ohale", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Michelle Alozie", nomeCamisa: "Alozie", numero: 22, posicao: "LD/PD", overall: 81 },
      { nome: "Oluwatosin Demehin", nomeCamisa: "Demehin", numero: 14, posicao: "ZAG", overall: 78 },
      { nome: "Onome Ebi", nomeCamisa: "Ebi", numero: 5, posicao: "ZAG", overall: 77 },
      { nome: "Glory Ogbonna", nomeCamisa: "Ogbonna", numero: 4, posicao: "ZAG", overall: 75 },
      { nome: "Rofiat Imuran", nomeCamisa: "Imuran", numero: 20, posicao: "LE", overall: 74 }
    ],

    meio_campo: [
      { nome: "Rasheedat Ajibade", nomeCamisa: "Ajibade", numero: 15, posicao: "PE/MEI/MC", overall: 84 },
      { nome: "Toni Payne", nomeCamisa: "Payne", numero: 7, posicao: "MEI/MC/PE", overall: 82 },
      { nome: "Halimatu Ayinde", nomeCamisa: "Ayinde", numero: 18, posicao: "VOL/MC", overall: 81 },
      { nome: "Christy Ucheibe", nomeCamisa: "Ucheibe", numero: 10, posicao: "MC/VOL", overall: 80 },
      { nome: "Deborah Abiodun", nomeCamisa: "Abiodun", numero: 13, posicao: "VOL", overall: 77 },
      { nome: "Jennifer Echegini", nomeCamisa: "Echegini", numero: 19, posicao: "MC/MEI", overall: 76 }
    ],

    atacantes: [
      { nome: "Asisat Oshoala", nomeCamisa: "Oshoala", numero: 8, posicao: "ATA", overall: 88 },
      { nome: "Uchenna Kanu", nomeCamisa: "Kanu", numero: 12, posicao: "PE/ATA", overall: 81 },
      { nome: "Desire Oparanozie", nomeCamisa: "Oparanozie", numero: 9, posicao: "ATA", overall: 79 },
      { nome: "Ifeoma Onumonu", nomeCamisa: "Onumonu", numero: 6, posicao: "ATA/PD", overall: 78 },
      { nome: "Francisca Ordega", nomeCamisa: "Ordega", numero: 17, posicao: "PD/PE", overall: 77 },
      { nome: "Gift Monday", nomeCamisa: "Monday", numero: 11, posicao: "ATA/PE", overall: 75 }
    ]
  },
  africa_do_sul_2023: {
    nome: "África do Sul",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Kaylin Swart", nomeCamisa: "Swart", numero: 1, posicao: "GOL", overall: 78 },
      { nome: "Andile Dlamini", nomeCamisa: "Dlamini", numero: 16, posicao: "GOL", overall: 75 },
      { nome: "Kebotseng Moletsane", nomeCamisa: "Moletsane", numero: 21, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Bambanani Mbane", nomeCamisa: "Mbane", numero: 13, posicao: "ZAG", overall: 79 },
      { nome: "Lebohang Ramalepe", nomeCamisa: "Ramalepe", numero: 2, posicao: "LD/MD", overall: 77 },
      { nome: "Karabo Dhlamini", nomeCamisa: "Dhlamini", numero: 7, posicao: "LE", overall: 76 },
      { nome: "Bongeka Gamede", nomeCamisa: "Gamede", numero: 3, posicao: "ZAG/VOL", overall: 75 },
      { nome: "Noko Matlou", nomeCamisa: "Matlou", numero: 4, posicao: "ZAG", overall: 74 },
      { nome: "Tiisetso Makhubela", nomeCamisa: "Makhubela", numero: 14, posicao: "LD/ZAG", overall: 73 },
      { nome: "Fikile Magama", nomeCamisa: "Magama", numero: 5, posicao: "ZAG", overall: 72 }
    ],

    meio_campo: [
      { nome: "Refiloe Jane", nomeCamisa: "Jane", numero: 15, posicao: "VOL/MC", overall: 82 },
      { nome: "Linda Motlhalo", nomeCamisa: "Motlhalo", numero: 10, posicao: "MEI/MC", overall: 81 },
      { nome: "Kholosa Biyana", nomeCamisa: "Biyana", numero: 19, posicao: "VOL/MC", overall: 76 },
      { nome: "Sibulele Holweni", nomeCamisa: "Holweni", numero: 18, posicao: "MC/MEI", overall: 75 },
      { nome: "Robyn Moodaly", nomeCamisa: "Moodaly", numero: 20, posicao: "MC", overall: 74 },
      { nome: "Nomvula Kgoale", nomeCamisa: "Kgoale", numero: 22, posicao: "MC", overall: 73 }
    ],

    atacantes: [
      { nome: "Thembi Kgatlana", nomeCamisa: "Kgatlana", numero: 11, posicao: "ATA", overall: 84 },
      { nome: "Hildah Magaia", nomeCamisa: "Magaia", numero: 8, posicao: "PE/ATA", overall: 81 },
      { nome: "Jermaine Seoposenwe", nomeCamisa: "Seoposenwe", numero: 12, posicao: "PD/ATA", overall: 80 },
      { nome: "Noxolo Cesane", nomeCamisa: "Cesane", numero: 6, posicao: "PE/ME", overall: 76 },
      { nome: "Melinda Kgadiete", nomeCamisa: "Kgadiete", numero: 17, posicao: "ATA", overall: 74 },
      { nome: "Wendy Shongwe", nomeCamisa: "Shongwe", numero: 23, posicao: "ATA", overall: 72 }
    ]
  },
    // Copa 2019 - Seleções do Playoffs
  brasil_2019: {
    nome: "Brasil",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Bárbara", nomeCamisa: "Bárbara", numero: 1, posicao: "GOL", overall: 78 },
      { nome: "Aline Reis", nomeCamisa: "Aline", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Letícia Izidoro", nomeCamisa: "Letícia", numero: 22, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Tamires", nomeCamisa: "Tamires", numero: 6, posicao: "LE/ME", overall: 82 },
      { nome: "Kathellen", nomeCamisa: "Kathellen", numero: 14, posicao: "ZAG", overall: 80 },
      { nome: "Mônica", nomeCamisa: "Mônica", numero: 21, posicao: "ZAG", overall: 79 },
      { nome: "Letícia Santos", nomeCamisa: "L. Santos", numero: 13, posicao: "LD", overall: 78 },
      { nome: "Poliana", nomeCamisa: "Poliana", numero: 2, posicao: "LD/ZAG", overall: 77 },
      { nome: "Daiane", nomeCamisa: "Daiane", numero: 3, posicao: "ZAG", overall: 76 },
      { nome: "Tayla", nomeCamisa: "Tayla", numero: 4, posicao: "ZAG", overall: 76 },
      { nome: "Camila", nomeCamisa: "Camila", numero: 15, posicao: "LE/MC", overall: 77 }
    ],

    meio_campo: [
      { nome: "Formiga", nomeCamisa: "Formiga", numero: 8, posicao: "VOL/MC", overall: 90 },
      { nome: "Thaisa", nomeCamisa: "Thaisa", numero: 5, posicao: "VOL/MC", overall: 80 },
      { nome: "Andressinha", nomeCamisa: "Andressinha", numero: 17, posicao: "MC/MEI", overall: 79 },
      { nome: "Luana", nomeCamisa: "Luana", numero: 18, posicao: "VOL/MC", overall: 78 }
    ],

    atacantes: [
      { nome: "Marta", nomeCamisa: "Marta", numero: 10, posicao: "MEI/ATA/PE", overall: 97 },
      { nome: "Cristiane", nomeCamisa: "Cristiane", numero: 11, posicao: "ATA", overall: 88 },
      { nome: "Debinha", nomeCamisa: "Debinha", numero: 9, posicao: "ATA/PE/MEI", overall: 85 },
      { nome: "Andressa Alves", nomeCamisa: "Andressa", numero: 7, posicao: "PE/MEI", overall: 83 },
      { nome: "Ludmila", nomeCamisa: "Ludmila", numero: 19, posicao: "PD/ATA", overall: 82 },
      { nome: "Bia Zaneratto", nomeCamisa: "B. Zaneratto", numero: 16, posicao: "ATA/PE", overall: 81 },
      { nome: "Geyse", nomeCamisa: "Geyse", numero: 23, posicao: "ATA", overall: 77 },
      { nome: "Raquel", nomeCamisa: "Raquel", numero: 20, posicao: "ATA", overall: 76 }
    ]
  },
  eua_2019: {
    nome: "Estados Unidos",
    ano: 2019,
    campea: true,

    goleiras: [
      { nome: "Alyssa Naeher", nomeCamisa: "Naeher", numero: 1, posicao: "GOL", overall: 85 },
      { nome: "Ashlyn Harris", nomeCamisa: "Harris", numero: 18, posicao: "GOL", overall: 78 },
      { nome: "Adrianna Franch", nomeCamisa: "Franch", numero: 21, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Crystal Dunn", nomeCamisa: "Dunn", numero: 19, posicao: "LE/ME", overall: 86 },
      { nome: "Becky Sauerbrunn", nomeCamisa: "Sauerbrunn", numero: 4, posicao: "ZAG", overall: 85 },
      { nome: "Abby Dahlkemper", nomeCamisa: "Dahlkemper", numero: 7, posicao: "ZAG", overall: 84 },
      { nome: "Kelley O'Hara", nomeCamisa: "O'Hara", numero: 5, posicao: "LD/MD", overall: 83 },
      { nome: "Ali Krieger", nomeCamisa: "Krieger", numero: 11, posicao: "LD/ZAG", overall: 80 },
      { nome: "Tierna Davidson", nomeCamisa: "Davidson", numero: 12, posicao: "ZAG/LE", overall: 79 },
      { nome: "Emily Sonnett", nomeCamisa: "Sonnett", numero: 14, posicao: "LD/ZAG", overall: 78 }
    ],

    meio_campo: [
      { nome: "Julie Ertz", nomeCamisa: "Ertz", numero: 8, posicao: "VOL/ZAG", overall: 88 },
      { nome: "Rose Lavelle", nomeCamisa: "Lavelle", numero: 16, posicao: "MC/MEI", overall: 95 },
      { nome: "Lindsey Horan", nomeCamisa: "Horan", numero: 9, posicao: "MC/VOL", overall: 85 },
      { nome: "Sam Mewis", nomeCamisa: "Mewis", numero: 3, posicao: "MC/VOL", overall: 84 },
      { nome: "Morgan Brian", nomeCamisa: "Brian", numero: 6, posicao: "MC", overall: 80 },
      { nome: "Allie Long", nomeCamisa: "Long", numero: 20, posicao: "MC/VOL", overall: 78 }
    ],

    atacantes: [
      { nome: "Megan Rapinoe", nomeCamisa: "Rapinoe", numero: 15, posicao: "PE/ATA", overall: 91 },
      { nome: "Alex Morgan", nomeCamisa: "Morgan", numero: 13, posicao: "ATA", overall: 98 },
      { nome: "Tobin Heath", nomeCamisa: "Heath", numero: 17, posicao: "PD/PE", overall: 87 },
      { nome: "Christen Press", nomeCamisa: "Press", numero: 23, posicao: "ATA/PE/PD", overall: 85 },
      { nome: "Carli Lloyd", nomeCamisa: "Lloyd", numero: 10, posicao: "ATA/MEI", overall: 84 },
      { nome: "Mallory Pugh", nomeCamisa: "Pugh", numero: 2, posicao: "PE/PD", overall: 82 },
      { nome: "Jessica McDonald", nomeCamisa: "McDonald", numero: 22, posicao: "ATA", overall: 79 }
    ]
  },
  holanda_2019: {
    nome: "Holanda",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Sari van Veenendaal", nomeCamisa: "v. Veenendaal", numero: 1, posicao: "GOL", overall: 86 },
      { nome: "Lize Kop", nomeCamisa: "Kop", numero: 16, posicao: "GOL", overall: 75 },
      { nome: "Loes Geurts", nomeCamisa: "Geurts", numero: 23, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Dominique Bloodworth", nomeCamisa: "Bloodworth", numero: 20, posicao: "ZAG/LE", overall: 83 },
      { nome: "Stefanie van der Gragt", nomeCamisa: "v. d. Gragt", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Desiree van Lunteren", nomeCamisa: "v. Lunteren", numero: 2, posicao: "LD", overall: 81 },
      { nome: "Anouk Dekker", nomeCamisa: "Dekker", numero: 6, posicao: "ZAG/VOL", overall: 80 },
      { nome: "Kika van Es", nomeCamisa: "v. Es", numero: 5, posicao: "LE/ZAG", overall: 79 },
      { nome: "Merel van Dongen", nomeCamisa: "v. Dongen", numero: 4, posicao: "ZAG/LE", overall: 78 },
      { nome: "Danique Kerkdijk", nomeCamisa: "Kerkdijk", numero: 18, posicao: "ZAG", overall: 76 },
      { nome: "Liza van der Most", nomeCamisa: "v. d. Most", numero: 22, posicao: "LD", overall: 75 }
    ],

    meio_campo: [
      { nome: "Daniëlle van de Donk", nomeCamisa: "van de Donk", numero: 10, posicao: "MEI/MC", overall: 86 },
      { nome: "Sherida Spitse", nomeCamisa: "Spitse", numero: 8, posicao: "VOL/MC", overall: 84 },
      { nome: "Jackie Groenen", nomeCamisa: "Groenen", numero: 14, posicao: "MC/MEI", overall: 84 },
      { nome: "Jill Roord", nomeCamisa: "Roord", numero: 19, posicao: "MC/MEI", overall: 82 },
      { nome: "Victoria Pelova", nomeCamisa: "Pelova", numero: 12, posicao: "MC", overall: 77 },
      { nome: "Inessa Kaagman", nomeCamisa: "Kaagman", numero: 15, posicao: "MC", overall: 76 }
    ],

    atacantes: [
      { nome: "Vivianne Miedema", nomeCamisa: "Miedema", numero: 9, posicao: "ATA", overall: 90 },
      { nome: "Lieke Martens", nomeCamisa: "Martens", numero: 11, posicao: "PE/ATA", overall: 88 },
      { nome: "Shanice van de Sanden", nomeCamisa: "v. d. Sanden", numero: 7, posicao: "PD/ATA", overall: 83 },
      { nome: "Lineth Beerensteyn", nomeCamisa: "Beerensteyn", numero: 21, posicao: "ATA/PD", overall: 80 },
      { nome: "Renate Jansen", nomeCamisa: "R. Jansen", numero: 13, posicao: "ATA", overall: 77 },
      { nome: "Ellen Jansen", nomeCamisa: "E. Jansen", numero: 17, posicao: "ATA/PE", overall: 76 }
    ]
  },
  inglaterra_2019: {
    nome: "Inglaterra",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Karen Bardsley", nomeCamisa: "Bardsley", numero: 1, posicao: "GOL", overall: 81 },
      { nome: "Carly Telford", nomeCamisa: "Telford", numero: 13, posicao: "GOL", overall: 78 },
      { nome: "Mary Earps", nomeCamisa: "Earps", numero: 21, posicao: "GOL", overall: 77 }
    ],

    defensoras: [
      { nome: "Lucy Bronze", nomeCamisa: "Bronze", numero: 2, posicao: "LD", overall: 89 },
      { nome: "Steph Houghton", nomeCamisa: "Houghton", numero: 5, posicao: "ZAG", overall: 85 },
      { nome: "Millie Bright", nomeCamisa: "Bright", numero: 6, posicao: "ZAG", overall: 82 },
      { nome: "Alex Greenwood", nomeCamisa: "Greenwood", numero: 3, posicao: "LE", overall: 81 },
      { nome: "Demi Stokes", nomeCamisa: "Stokes", numero: 12, posicao: "LE", overall: 79 },
      { nome: "Rachel Daly", nomeCamisa: "Daly", numero: 17, posicao: "LD/PE", overall: 79 },
      { nome: "Leah Williamson", nomeCamisa: "Williamson", numero: 14, posicao: "ZAG", overall: 78 },
      { nome: "Abbie McManus", nomeCamisa: "McManus", numero: 15, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Jill Scott", nomeCamisa: "Scott", numero: 8, posicao: "MC/VOL", overall: 84 },
      { nome: "Keira Walsh", nomeCamisa: "Walsh", numero: 4, posicao: "VOL/MC", overall: 83 },
      { nome: "Karen Carney", nomeCamisa: "Carney", numero: 20, posicao: "MC/MEI", overall: 81 },
      { nome: "Georgia Stanway", nomeCamisa: "Stanway", numero: 19, posicao: "MEI/MC", overall: 80 },
      { nome: "Jade Moore", nomeCamisa: "Moore", numero: 16, posicao: "VOL", overall: 78 },
      { nome: "Lucy Staniforth", nomeCamisa: "Staniforth", numero: 23, posicao: "MC", overall: 77 }
    ],

    atacantes: [
      { nome: "Ellen White", nomeCamisa: "White", numero: 18, posicao: "ATA", overall: 86 },
      { nome: "Fran Kirby", nomeCamisa: "Kirby", numero: 10, posicao: "MEI/ATA", overall: 85 },
      { nome: "Nikita Parris", nomeCamisa: "Parris", numero: 7, posicao: "PD/ATA", overall: 84 },
      { nome: "Toni Duggan", nomeCamisa: "Duggan", numero: 11, posicao: "PE/ATA", overall: 83 },
      { nome: "Beth Mead", nomeCamisa: "Mead", numero: 22, posicao: "PE/PD", overall: 82 },
      { nome: "Jodie Taylor", nomeCamisa: "Taylor", numero: 9, posicao: "ATA", overall: 81 }
    ]
  },
  suecia_2019: {
    nome: "Suécia",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Hedvig Lindahl", nomeCamisa: "Lindahl", numero: 1, posicao: "GOL", overall: 84 },
      { nome: "Jennifer Falk", nomeCamisa: "Falk", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Zećira Mušović", nomeCamisa: "Mušović", numero: 21, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Nilla Fischer", nomeCamisa: "Fischer", numero: 5, posicao: "ZAG", overall: 85 },
      { nome: "Magdalena Eriksson", nomeCamisa: "Eriksson", numero: 6, posicao: "LE/ZAG", overall: 84 },
      { nome: "Linda Sembrant", nomeCamisa: "Sembrant", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Jonna Andersson", nomeCamisa: "Andersson", numero: 2, posicao: "LE", overall: 80 },
      { nome: "Hanna Glas", nomeCamisa: "Glas", numero: 4, posicao: "LD", overall: 80 },
      { nome: "Amanda Ilestedt", nomeCamisa: "Ilestedt", numero: 13, posicao: "ZAG", overall: 79 },
      { nome: "Nathalie Björn", nomeCamisa: "Björn", numero: 15, posicao: "ZAG/VOL", overall: 78 }
    ],

    meio_campo: [
      { nome: "Kosovare Asllani", nomeCamisa: "Asllani", numero: 9, posicao: "MEI/ATA", overall: 87 },
      { nome: "Caroline Seger", nomeCamisa: "Seger", numero: 17, posicao: "VOL/MC", overall: 86 },
      { nome: "Elin Rubensson", nomeCamisa: "Rubensson", numero: 23, posicao: "MC/LD", overall: 81 },
      { nome: "Julia Zigiotti Olme", nomeCamisa: "Zigiotti", numero: 14, posicao: "MC", overall: 77 }
    ],

    atacantes: [
      { nome: "Stina Blackstenius", nomeCamisa: "Blackstenius", numero: 11, posicao: "ATA", overall: 90 },
      { nome: "Sofia Jakobsson", nomeCamisa: "Jakobsson", numero: 10, posicao: "PD/PE", overall: 84 },
      { nome: "Fridolina Rolfö", nomeCamisa: "Rolfö", numero: 18, posicao: "PE/ATA", overall: 87 },
      { nome: "Lina Hurtig", nomeCamisa: "Hurtig", numero: 8, posicao: "PE/ATA", overall: 81 },
      { nome: "Madelen Janogy", nomeCamisa: "Janogy", numero: 7, posicao: "ATA/PD", overall: 79 },
      { nome: "Anna Anvegård", nomeCamisa: "Anvegård", numero: 19, posicao: "ATA", overall: 78 },
      { nome: "Olivia Schough", nomeCamisa: "Schough", numero: 22, posicao: "PE/PD", overall: 77 },
      { nome: "Mimmi Larsson", nomeCamisa: "Larsson", numero: 20, posicao: "ATA", overall: 76 }
    ]
  },
  noruega_2019: {
    nome: "Noruega",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Ingrid Hjelmseth", nomeCamisa: "Hjelmseth", numero: 1, posicao: "GOL", overall: 81 },
      { nome: "Cecilie Fiskerstrand", nomeCamisa: "Fiskerstrand", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Oda Maria Hove Bogstad", nomeCamisa: "Bogstad", numero: 23, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Maren Mjelde", nomeCamisa: "Mjelde", numero: 6, posicao: "ZAG/VOL", overall: 84 },
      { nome: "Maria Thorisdottir", nomeCamisa: "Thorisdottir", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Kristine Minde", nomeCamisa: "Minde", numero: 17, posicao: "LE/ME", overall: 80 },
      { nome: "Ingrid Moe Wold", nomeCamisa: "Moe Wold", numero: 2, posicao: "LD", overall: 78 },
      { nome: "Stine Hovland", nomeCamisa: "Hovland", numero: 4, posicao: "ZAG", overall: 75 },
      { nome: "Cecilie Redisch Kvamme", nomeCamisa: "Kvamme", numero: 19, posicao: "LD/ZAG", overall: 74 }
    ],

    meio_campo: [
      { nome: "Guro Reiten", nomeCamisa: "Reiten", numero: 11, posicao: "MEI/ME", overall: 84 },
      { nome: "Ingrid Syrstad Engen", nomeCamisa: "Engen", numero: 14, posicao: "VOL/MC", overall: 82 },
      { nome: "Vilde Bøe Risa", nomeCamisa: "Bøe Risa", numero: 8, posicao: "MC/MEI", overall: 79 },
      { nome: "Frida Maanum", nomeCamisa: "Maanum", numero: 18, posicao: "MC", overall: 78 },
      { nome: "Amalie Eikeland", nomeCamisa: "Eikeland", numero: 15, posicao: "MC/MD", overall: 77 },
      { nome: "Synne Skinnes Hansen", nomeCamisa: "S. Hansen", numero: 5, posicao: "MC", overall: 76 }
    ],

    atacantes: [
      { nome: "Caroline Graham Hansen", nomeCamisa: "Hansen", numero: 10, posicao: "PD/MEI/ATA", overall: 88 },
      { nome: "Isabell Herlovsen", nomeCamisa: "Herlovsen", numero: 9, posicao: "ATA", overall: 82 },
      { nome: "Karina Sævik", nomeCamisa: "Sævik", numero: 21, posicao: "PD/PE", overall: 79 },
      { nome: "Elise Thorsnes", nomeCamisa: "Thorsnes", numero: 16, posicao: "ATA/PE", overall: 78 },
      { nome: "Lisa-Marie Karlseng Utland", nomeCamisa: "Utland", numero: 22, posicao: "ATA", overall: 77 },
      { nome: "Emilie Haavi", nomeCamisa: "Haavi", numero: 20, posicao: "PE/ATA", overall: 76 }
    ]
  },
  franca_2019: {
    nome: "França",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Sarah Bouhaddi", nomeCamisa: "Bouhaddi", numero: 16, posicao: "GOL", overall: 85 },
      { nome: "Pauline Peyraud-Magnin", nomeCamisa: "P. Magnin", numero: 21, posicao: "GOL", overall: 78 },
      { nome: "Solène Durand", nomeCamisa: "Durand", numero: 1, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Wendie Renard", nomeCamisa: "Renard", numero: 3, posicao: "ZAG", overall: 95 },
      { nome: "Amel Majri", nomeCamisa: "Majri", numero: 10, posicao: "LE/ME", overall: 85 },
      { nome: "Griedge Mbock Bathy", nomeCamisa: "Mbock", numero: 19, posicao: "ZAG", overall: 84 },
      { nome: "Marion Torrent", nomeCamisa: "Torrent", numero: 4, posicao: "LD", overall: 81 },
      { nome: "Sakina Karchaoui", nomeCamisa: "Karchaoui", numero: 7, posicao: "LE", overall: 80 },
      { nome: "Ève Périsset", nomeCamisa: "Périsset", numero: 2, posicao: "LD/LE", overall: 79 },
      { nome: "Aïssatou Tounkara", nomeCamisa: "Tounkara", numero: 5, posicao: "ZAG", overall: 78 },
      { nome: "Julie Debever", nomeCamisa: "Debever", numero: 22, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Amandine Henry", nomeCamisa: "Henry", numero: 6, posicao: "VOL/MC", overall: 88 },
      { nome: "Grace Geyoro", nomeCamisa: "Geyoro", numero: 8, posicao: "MC/VOL", overall: 83 },
      { nome: "Élise Bussaglia", nomeCamisa: "Bussaglia", numero: 14, posicao: "VOL/MC", overall: 80 },
      { nome: "Charlotte Bilbault", nomeCamisa: "Bilbault", numero: 15, posicao: "MC/VOL", overall: 78 },
      { nome: "Maéva Clemaron", nomeCamisa: "Clemaron", numero: 23, posicao: "MC", overall: 76 }
    ],

    atacantes: [
      { nome: "Eugénie Le Sommer", nomeCamisa: "Le Sommer", numero: 9, posicao: "ATA/PE", overall: 90 },
      { nome: "Kadidiatou Diani", nomeCamisa: "Diani", numero: 11, posicao: "PD/ATA", overall: 85 },
      { nome: "Valérie Gauvin", nomeCamisa: "Gauvin", numero: 13, posicao: "ATA", overall: 83 },
      { nome: "Delphine Cascarino", nomeCamisa: "Cascarino", numero: 20, posicao: "PD/PE", overall: 82 },
      { nome: "Gaëtane Thiney", nomeCamisa: "Thiney", numero: 17, posicao: "MEI/ATA", overall: 81 },
      { nome: "Viviane Asseyi", nomeCamisa: "Asseyi", numero: 18, posicao: "PE/ATA", overall: 80 },
      { nome: "Emelyne Laurent", nomeCamisa: "Laurent", numero: 12, posicao: "PD/ATA", overall: 77 }
    ]
  },
  italia_2019: {
    nome: "Itália",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Laura Giuliani", nomeCamisa: "Giuliani", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Chiara Marchitelli", nomeCamisa: "Marchitelli", numero: 12, posicao: "GOL", overall: 75 },
      { nome: "Rosalia Pipitone", nomeCamisa: "Pipitone", numero: 22, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Sara Gama", nomeCamisa: "Gama", numero: 3, posicao: "ZAG", overall: 83 },
      { nome: "Alia Guagni", nomeCamisa: "Guagni", numero: 7, posicao: "LD/LE", overall: 82 },
      { nome: "Elena Linari", nomeCamisa: "Linari", numero: 5, posicao: "ZAG", overall: 81 },
      { nome: "Elisa Bartoli", nomeCamisa: "Bartoli", numero: 13, posicao: "LE/LD", overall: 79 },
      { nome: "Lisa Boattin", nomeCamisa: "Boattin", numero: 17, posicao: "LE", overall: 78 },
      { nome: "Laura Fusetti", nomeCamisa: "Fusetti", numero: 16, posicao: "ZAG", overall: 76 },
      { nome: "Linda Tucceri Cimini", nomeCamisa: "Tucceri", numero: 20, posicao: "LE", overall: 75 }
    ],

    meio_campo: [
      { nome: "Manuela Giugliano", nomeCamisa: "Giugliano", numero: 23, posicao: "VOL/MC", overall: 83 },
      { nome: "Valentina Cernoia", nomeCamisa: "Cernoia", numero: 21, posicao: "MC/MEI", overall: 80 },
      { nome: "Aurora Galli", nomeCamisa: "Galli", numero: 4, posicao: "MC/VOL", overall: 80 },
      { nome: "Martina Rosucci", nomeCamisa: "Rosucci", numero: 6, posicao: "MC", overall: 78 },
      { nome: "Alice Parisi", nomeCamisa: "Parisi", numero: 8, posicao: "MC", overall: 77 },
      { nome: "Annamaria Serturini", nomeCamisa: "Serturini", numero: 15, posicao: "MD/ME", overall: 76 }
    ],

    atacantes: [
      { nome: "Barbara Bonansea", nomeCamisa: "Bonansea", numero: 11, posicao: "PE/ATA", overall: 85 },
      { nome: "Cristiana Girelli", nomeCamisa: "Girelli", numero: 10, posicao: "ATA/MEI", overall: 84 },
      { nome: "Valentina Giacinti", nomeCamisa: "Giacinti", numero: 19, posicao: "ATA", overall: 81 },
      { nome: "Valentina Bergamaschi", nomeCamisa: "Bergamaschi", numero: 2, posicao: "PD/MD", overall: 79 },
      { nome: "Ilaria Mauro", nomeCamisa: "Mauro", numero: 18, posicao: "ATA", overall: 78 },
      { nome: "Daniela Sabatino", nomeCamisa: "Sabatino", numero: 9, posicao: "ATA", overall: 77 },
      { nome: "Stefania Tarenzi", nomeCamisa: "Tarenzi", numero: 14, posicao: "ATA", overall: 75 }
    ]
  },
  alemanha_2019: {
    nome: "Alemanha",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Almuth Schult", nomeCamisa: "Schult", numero: 1, posicao: "GOL", overall: 84 },
      { nome: "Laura Benkarth", nomeCamisa: "Benkarth", numero: 12, posicao: "GOL", overall: 78 },
      { nome: "Merle Frohms", nomeCamisa: "Frohms", numero: 21, posicao: "GOL", overall: 77 }
    ],

    defensoras: [
      { nome: "Giulia Gwinn", nomeCamisa: "Gwinn", numero: 15, posicao: "LD/MD", overall: 83 },
      { nome: "Marina Hegering", nomeCamisa: "Hegering", numero: 5, posicao: "ZAG", overall: 82 },
      { nome: "Sara Doorsoun", nomeCamisa: "Doorsoun", numero: 23, posicao: "ZAG", overall: 81 },
      { nome: "Leonie Maier", nomeCamisa: "Maier", numero: 4, posicao: "LD", overall: 81 },
      { nome: "Kathrin Hendrich", nomeCamisa: "Hendrich", numero: 3, posicao: "ZAG/LD", overall: 80 },
      { nome: "Carolin Simon", nomeCamisa: "Simon", numero: 2, posicao: "LE", overall: 79 },
      { nome: "Verena Schweers", nomeCamisa: "Schweers", numero: 17, posicao: "LE", overall: 78 },
      { nome: "Johanna Elsig", nomeCamisa: "Elsig", numero: 14, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Dzsenifer Marozsán", nomeCamisa: "Marozsán", numero: 10, posicao: "MEI/MC", overall: 90 },
      { nome: "Sara Däbritz", nomeCamisa: "Däbritz", numero: 13, posicao: "MC/MEI", overall: 85 },
      { nome: "Melanie Leupolz", nomeCamisa: "Leupolz", numero: 18, posicao: "VOL/MC", overall: 84 },
      { nome: "Lina Magull", nomeCamisa: "Magull", numero: 20, posicao: "MC/MEI", overall: 83 },
      { nome: "Lena Goeßling", nomeCamisa: "Goeßling", numero: 8, posicao: "VOL/ZAG", overall: 81 },
      { nome: "Linda Dallmann", nomeCamisa: "Dallmann", numero: 16, posicao: "MC", overall: 81 },
      { nome: "Lena Oberdorf", nomeCamisa: "Oberdorf", numero: 6, posicao: "VOL/MC", overall: 80 }
    ],

    atacantes: [
      { nome: "Alexandra Popp", nomeCamisa: "Popp", numero: 11, posicao: "ATA", overall: 92 },
      { nome: "Svenja Huth", nomeCamisa: "Huth", numero: 9, posicao: "PD/ATA", overall: 84 },
      { nome: "Lea Schüller", nomeCamisa: "Schüller", numero: 7, posicao: "ATA/PE", overall: 82 },
      { nome: "Klara Bühl", nomeCamisa: "Bühl", numero: 19, posicao: "PE/ATA", overall: 79 },
      { nome: "Turid Knaak", nomeCamisa: "Knaak", numero: 22, posicao: "PD/PE", overall: 78 }
    ]
  },
  australia_2019: {
    nome: "Austrália",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Lydia Williams", nomeCamisa: "Williams", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Mackenzie Arnold", nomeCamisa: "Arnold", numero: 18, posicao: "GOL", overall: 76 },
      { nome: "Teagan Micah", nomeCamisa: "Micah", numero: 12, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Steph Catley", nomeCamisa: "Catley", numero: 7, posicao: "LE/ZAG", overall: 84 },
      { nome: "Clare Polkinghorne", nomeCamisa: "Polkinghorne", numero: 4, posicao: "ZAG", overall: 81 },
      { nome: "Alanna Kennedy", nomeCamisa: "Kennedy", numero: 14, posicao: "ZAG/VOL", overall: 81 },
      { nome: "Ellie Carpenter", nomeCamisa: "Carpenter", numero: 21, posicao: "LD/MD", overall: 80 },
      { nome: "Gema Simon", nomeCamisa: "Simon", numero: 5, posicao: "LE", overall: 75 },
      { nome: "Teigen Allen", nomeCamisa: "Allen", numero: 2, posicao: "LD", overall: 74 }
    ],

    meio_campo: [
      { nome: "Emily van Egmond", nomeCamisa: "van Egmond", numero: 10, posicao: "MC/MEI", overall: 83 },
      { nome: "Katrina Gorry", nomeCamisa: "Gorry", numero: 19, posicao: "MC/VOL", overall: 81 },
      { nome: "Tameka Yallop", nomeCamisa: "Yallop", numero: 13, posicao: "MC/MEE", overall: 80 },
      { nome: "Elise Kellond-Knight", nomeCamisa: "Kellond-Knight", numero: 8, posicao: "VOL/MC", overall: 80 },
      { nome: "Chloe Logarzo", nomeCamisa: "Logarzo", numero: 6, posicao: "MC/MD", overall: 79 },
      { nome: "Aivi Luik", nomeCamisa: "Luik", numero: 3, posicao: "VOL", overall: 76 }
    ],

    atacantes: [
      { nome: "Sam Kerr", nomeCamisa: "Kerr", numero: 20, posicao: "ATA", overall: 89 },
      { nome: "Caitlin Foord", nomeCamisa: "Foord", numero: 9, posicao: "PE/ATA/LE", overall: 83 },
      { nome: "Hayley Raso", nomeCamisa: "Raso", numero: 16, posicao: "PD/MEE", overall: 80 },
      { nome: "Lisa De Vanna", nomeCamisa: "De Vanna", numero: 11, posicao: "ATA/PE", overall: 79 },
      { nome: "Kyah Simon", nomeCamisa: "K. Simon", numero: 17, posicao: "ATA", overall: 78 },
      { nome: "Mary Fowler", nomeCamisa: "Fowler", numero: 22, posicao: "ATA/MEI", overall: 75 },
      { nome: "Emily Gielnik", nomeCamisa: "Gielnik", numero: 15, posicao: "PD/ATA", overall: 77 }
    ]
  },
  camaroes_2019: {
    nome: "Camarões",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Annette Ngo Ndom", nomeCamisa: "Ngo Ndom", numero: 1, posicao: "GOL", overall: 76 },
      { nome: "Marthe Ongmahan", nomeCamisa: "Ongmahan", numero: 16, posicao: "GOL", overall: 68 },
      { nome: "Marlyse Ngo Ndoumbouk", nomeCamisa: "Ngo Ndoumbouk", numero: 23, posicao: "GOL", overall: 66 }
    ],

    defensoras: [
      { nome: "Estelle Johnson", nomeCamisa: "Johnson", numero: 4, posicao: "ZAG", overall: 78 },
      { nome: "Christine Manie", nomeCamisa: "Manie", numero: 2, posicao: "ZAG", overall: 75 },
      { nome: "Marie-Aurelle Awona", nomeCamisa: "Awona", numero: 11, posicao: "ZAG/LE", overall: 74 },
      { nome: "Yvonne Leuko", nomeCamisa: "Leuko", numero: 12, posicao: "LD/LE", overall: 73 },
      { nome: "Claudine Meffometou", nomeCamisa: "Meffometou", numero: 6, posicao: "LD", overall: 73 },
      { nome: "Aurelle Awona", nomeCamisa: "Awona", numero: 5, posicao: "ZAG", overall: 71 },
      { nome: "Yisikin Sonkeng", nomeCamisa: "Sonkeng", numero: 15, posicao: "ZAG", overall: 69 }
    ],

    meio_campo: [
      { nome: "Raissa Feudjio", nomeCamisa: "Feudjio", numero: 8, posicao: "VOL/MC", overall: 76 },
      { nome: "Jeannette Yango", nomeCamisa: "Yango", numero: 10, posicao: "MC/MEI", overall: 74 },
      { nome: "Genevieve Ngo Mbeleck", nomeCamisa: "Ngo Mbeleck", numero: 20, posicao: "MC", overall: 73 },
      { nome: "Therese Abena", nomeCamisa: "Abena", numero: 14, posicao: "MC/VOL", overall: 70 },
      { nome: "Nchout Njoya Ajara", nomeCamisa: "Ajara", numero: 3, posicao: "MEI/ATA/PD", overall: 81 },
      { nome: "Marlyse Ngo Ndoumbouk", nomeCamisa: "Ndoumbouk", numero: 19, posicao: "MC", overall: 72 }
    ],

    atacantes: [
      { nome: "Gaëlle Enganamouit", nomeCamisa: "Enganamouit", numero: 17, posicao: "ATA", overall: 77 },
      { nome: "Gabrielle Onguene", nomeCamisa: "Onguene", numero: 7, posicao: "PE/PD", overall: 76 },
      { nome: "Michaela Abam", nomeCamisa: "Abam", numero: 9, posicao: "ATA/PD", overall: 74 },
      { nome: "Henriette Akaba", nomeCamisa: "Akaba", numero: 18, posicao: "PE/ATA", overall: 71 },
      { nome: "Ngo Mback Batoum", nomeCamisa: "Batoum", numero: 21, posicao: "ATA", overall: 68 },
      { nome: "Alexandra Takounda", nomeCamisa: "Takounda", numero: 22, posicao: "ATA", overall: 67 }
    ]
  },
  espanha_2019: {
    nome: "Espanha",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Sandra Paños", nomeCamisa: "Paños", numero: 13, posicao: "GOL", overall: 84 },
      { nome: "Dolores Gallardo", nomeCamisa: "Lola", numero: 1, posicao: "GOL", overall: 78 },
      { nome: "Maria Asun Quiñones", nomeCamisa: "Quiñones", numero: 23, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Irene Paredes", nomeCamisa: "Paredes", numero: 4, posicao: "ZAG", overall: 86 },
      { nome: "Mapi León", nomeCamisa: "Mapi León", numero: 16, posicao: "LE/ZAG", overall: 84 },
      { nome: "Marta Corredera", nomeCamisa: "Corredera", numero: 7, posicao: "LD/LE", overall: 81 },
      { nome: "Ivana Andrés", nomeCamisa: "Ivana", numero: 5, posicao: "ZAG", overall: 80 },
      { nome: "Celia Jiménez", nomeCamisa: "Celia", numero: 2, posicao: "LD", overall: 77 },
      { nome: "Leila Ouahabi", nomeCamisa: "Leila", numero: 3, posicao: "LE", overall: 78 },
      { nome: "Marta Torrejón", nomeCamisa: "Torrejón", numero: 8, posicao: "LD/ZAG", overall: 79 },
      { nome: "Rocío Gálvez", nomeCamisa: "Rocío", numero: 20, posicao: "ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Alexia Putellas", nomeCamisa: "Alexia", numero: 11, posicao: "MC/MEI/PE", overall: 96 },
      { nome: "Vicky Losada", nomeCamisa: "Losada", numero: 6, posicao: "MC/MEI", overall: 82 },
      { nome: "Virginia Torrecilla", nomeCamisa: "Torrecilla", numero: 14, posicao: "VOL/MC", overall: 81 },
      { nome: "Amanda Sampedro", nomeCamisa: "Sampedro", numero: 19, posicao: "MC/MD", overall: 80 },
      { nome: "Silvia Meseguer", nomeCamisa: "Meseguer", numero: 15, posicao: "VOL", overall: 79 },
      { nome: "Aitana Bonmatí", nomeCamisa: "Aitana", numero: 21, posicao: "MC/MEI", overall: 95 },
      { nome: "Patri Guijarro", nomeCamisa: "Patri", numero: 18, posicao: "VOL/MC", overall: 81 }
    ],

    atacantes: [
      { nome: "Jennifer Hermoso", nomeCamisa: "Jenni", numero: 10, posicao: "ATA/MEI", overall: 87 },
      { nome: "Mariona Caldentey", nomeCamisa: "Mariona", numero: 9, posicao: "PE/ATA", overall: 83 },
      { nome: "Lucía García", nomeCamisa: "Lucía", numero: 17, posicao: "PD/ATA", overall: 81 },
      { nome: "Nahikari García", nomeCamisa: "Nahikari", numero: 22, posicao: "ATA", overall: 80 },
      { nome: "Andrea Falcón", nomeCamisa: "Falcón", numero: 12, posicao: "PE", overall: 77 },
      { nome: "Marta Cardona", nomeCamisa: "Cardona", numero: 15, posicao: "PD/MD", overall: 78 }
    ]
  },
  china_2019: {
    nome: "China",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Peng Shimeng", nomeCamisa: "Peng", numero: 12, posicao: "GOL", overall: 83 },
      { nome: "Xu Huan", nomeCamisa: "Xu", numero: 1, posicao: "GOL", overall: 74 },
      { nome: "Bi Xiaolin", nomeCamisa: "Bi", numero: 18, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Wu Haiyan", nomeCamisa: "Wu Haiyan", numero: 5, posicao: "ZAG", overall: 82 },
      { nome: "Liu Shanshan", nomeCamisa: "Liu S.", numero: 2, posicao: "LE", overall: 79 },
      { nome: "Lin Yuping", nomeCamisa: "Lin Y.", numero: 3, posicao: "ZAG", overall: 78 },
      { nome: "Li Jiayue", nomeCamisa: "Li J.", numero: 8, posicao: "ZAG/LD", overall: 77 },
      { nome: "Wang Ying", nomeCamisa: "Wang Y.", numero: 14, posicao: "LD/LE", overall: 75 },
      { nome: "Luo Guiping", nomeCamisa: "Luo G.", numero: 22, posicao: "ZAG", overall: 74 },
      { nome: "Li Wen", nomeCamisa: "Li W", numero: 16, posicao: "LE/ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Wang Shuang", nomeCamisa: "Wang Shuang", numero: 7, posicao: "MEI/MC/PE", overall: 86 },
      { nome: "Zhang Rui", nomeCamisa: "Zhang Rui", numero: 20, posicao: "VOL/MC", overall: 81 },
      { nome: "Han Peng", nomeCamisa: "Han P.", numero: 6, posicao: "MC/MD", overall: 78 },
      { nome: "Yao Wei", nomeCamisa: "Yao W.", numero: 21, posicao: "VOL/MC", overall: 77 },
      { nome: "Tan Ruyin", nomeCamisa: "Tan R.", numero: 19, posicao: "VOL", overall: 76 },
      { nome: "Liu Yanqiu", nomeCamisa: "Liu Y.", numero: 23, posicao: "MC", overall: 74 }
    ],

    atacantes: [
      { nome: "Wang Shanshan", nomeCamisa: "Wang Shan", numero: 11, posicao: "ATA/PD", overall: 82 },
      { nome: "Li Ying", nomeCamisa: "Li Ying", numero: 10, posicao: "ATA", overall: 81 },
      { nome: "Lou Jiahui", nomeCamisa: "Lou J.", numero: 4, posicao: "PD/ATA/LD", overall: 79 },
      { nome: "Gu Yasha", nomeCamisa: "Gu Y.", numero: 17, posicao: "PE/MEE", overall: 78 },
      { nome: "Yang Li", nomeCamisa: "Yang L.", numero: 9, posicao: "ATA", overall: 77 },
      { nome: "Song Duan", nomeCamisa: "Song D.", numero: 15, posicao: "PD/PE", overall: 76 }
    ]
  },
  japao_2019: {
    nome: "Japão",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Ayaka Yamashita", nomeCamisa: "Yamashita", numero: 18, posicao: "GOL", overall: 82 },
      { nome: "Chika Hirao", nomeCamisa: "Hirao", numero: 21, posicao: "GOL", overall: 75 },
      { nome: "Erina Yamane", nomeCamisa: "Yamane", numero: 1, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Saki Kumagai", nomeCamisa: "Kumagai", numero: 4, posicao: "ZAG/VOL", overall: 87 },
      { nome: "Aya Sameshima", nomeCamisa: "Sameshima", numero: 3, posicao: "LE/ZAG", overall: 82 },
      { nome: "Risa Shimizu", nomeCamisa: "Shimizu", numero: 22, posicao: "LD", overall: 81 },
      { nome: "Nana Ichise", nomeCamisa: "Ichise", numero: 5, posicao: "ZAG", overall: 79 },
      { nome: "Moeka Minami", nomeCamisa: "Minami", numero: 12, posicao: "ZAG", overall: 78 },
      { nome: "Asato Miyagawa", nomeCamisa: "Miyagawa", numero: 16, posicao: "LD/LE", overall: 76 },
      { nome: "Shiori Miyake", nomeCamisa: "Miyake", numero: 23, posicao: "ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Emi Nakajima", nomeCamisa: "Nakajima", numero: 7, posicao: "MC/MEI/MD", overall: 83 },
      { nome: "Yuka Momiki", nomeCamisa: "Momiki", numero: 10, posicao: "MEI/PE", overall: 82 },
      { nome: "Narumi Miura", nomeCamisa: "Miura", numero: 6, posicao: "VOL/MC", overall: 80 },
      { nome: "Hina Sugita", nomeCamisa: "Sugita", numero: 14, posicao: "MC/VOL", overall: 81 },
      { nome: "Yui Hasegawa", nomeCamisa: "Hasegawa", numero: 17, posicao: "MC/MEI/PE", overall: 83 },
      { nome: "Risa Hokamura", nomeCamisa: "Hokamura", numero: 2, posicao: "MC/MD", overall: 75 }
    ],

    atacantes: [
      { nome: "Mana Iwabuchi", nomeCamisa: "Iwabuchi", numero: 8, posicao: "ATA/MEI", overall: 85 },
      { nome: "Yuika Sugasawa", nomeCamisa: "Sugasawa", numero: 9, posicao: "ATA", overall: 82 },
      { nome: "Riko Ueki", nomeCamisa: "Ueki", numero: 19, posicao: "ATA/PD", overall: 78 },
      { nome: "Kumi Yokoyama", nomeCamisa: "Yokoyama", numero: 15, posicao: "ATA/PE", overall: 80 },
      { nome: "Jun Endo", nomeCamisa: "Endo", numero: 11, posicao: "PE/MEE", overall: 79 },
      { nome: "Saori Takarada", nomeCamisa: "Takarada", numero: 13, posicao: "ATA", overall: 76 }
    ]
  },
  nigeria_2019: {
    nome: "Nigéria",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Chiamaka Nnadozie", nomeCamisa: "Nnadozie", numero: 16, posicao: "GOL", overall: 81 },
      { nome: "Tochukwu Oluehi", nomeCamisa: "Oluehi", numero: 1, posicao: "GOL", overall: 75 },
      { nome: "Alaba Jonathan", nomeCamisa: "Jonathan", numero: 21, posicao: "GOL", overall: 71 }
    ],

    defensoras: [
      { nome: "Onome Ebi", nomeCamisa: "Ebi", numero: 5, posicao: "ZAG", overall: 80 },
      { nome: "Osinachi Ohale", nomeCamisa: "Ohale", numero: 3, posicao: "ZAG/LD", overall: 78 },
      { nome: "Ngozi Ebere", nomeCamisa: "Ebere", numero: 20, posicao: "LE", overall: 76 },
      { nome: "Chidinma Okeke", nomeCamisa: "Okeke", numero: 14, posicao: "LD/LE", overall: 75 },
      { nome: "Faith Michael", nomeCamisa: "Michael", numero: 4, posicao: "ZAG/LE", overall: 74 },
      { nome: "Blessing Demehin", nomeCamisa: "Demehin", numero: 15, posicao: "ZAG", overall: 72 }
    ],

    meio_campo: [
      { nome: "Ngozi Okobi-Okeoghene", nomeCamisa: "Okobi", numero: 10, posicao: "MC/MEI", overall: 79 },
      { nome: "Rita Chikwelu", nomeCamisa: "Chikwelu", numero: 18, posicao: "MC/VOL", overall: 78 },
      { nome: "Halimatu Ayinde", nomeCamisa: "Ayinde", numero: 13, posicao: "VOL/MC", overall: 77 },
      { nome: "Ogonna Chukwudi", nomeCamisa: "Chukwudi", numero: 7, posicao: "MC/MEE", overall: 75 },
      { nome: "Amarachi Okoronkwo", nomeCamisa: "Okoronkwo", numero: 6, posicao: "VOL", overall: 73 },
      { nome: "Evelyn Nwabuoku", nomeCamisa: "Nwabuoku", numero: 2, posicao: "VOL/MC", overall: 72 }
    ],

    atacantes: [
      { nome: "Asisat Oshoala", nomeCamisa: "Oshoala", numero: 8, posicao: "ATA/PD", overall: 86 },
      { nome: "Desire Oparanozie", nomeCamisa: "Oparanozie", numero: 9, posicao: "ATA", overall: 80 },
      { nome: "Francisca Ordega", nomeCamisa: "Ordega", numero: 17, posicao: "PD/PE", overall: 79 },
      { nome: "Rasheedat Ajibade", nomeCamisa: "Ajibade", numero: 15, posicao: "PE/ATA", overall: 77 },
      { nome: "Uchenna Kanu", nomeCamisa: "Kanu", numero: 12, posicao: "ATA/PD", overall: 76 },
      { nome: "Chinwendu Ihezuo", nomeCamisa: "Ihezuo", numero: 11, posicao: "ATA", overall: 75 },
      { nome: "Anam Imo", nomeCamisa: "Imo", numero: 22, posicao: "ATA", overall: 73 },
      { nome: "Alice Ogebe", nomeCamisa: "Ogebe", numero: 19, posicao: "PE", overall: 71 }
    ]
  },
  canada_2019: {
    nome: "Canadá",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "Stephanie Labbé", nomeCamisa: "Labbé", numero: 1, posicao: "GOL", overall: 84 },
      { nome: "Kailen Sheridan", nomeCamisa: "Sheridan", numero: 18, posicao: "GOL", overall: 79 },
      { nome: "Sabrina D'Angelo", nomeCamisa: "D'Angelo", numero: 21, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Kadeisha Buchanan", nomeCamisa: "Buchanan", numero: 3, posicao: "ZAG", overall: 86 },
      { nome: "Ashley Lawrence", nomeCamisa: "Lawrence", numero: 10, posicao: "LD/LE/MC", overall: 85 },
      { nome: "Shelina Zadorsky", nomeCamisa: "Zadorsky", numero: 4, posicao: "ZAG", overall: 81 },
      { nome: "Allysha Chapman", nomeCamisa: "Chapman", numero: 2, posicao: "LE", overall: 79 },
      { nome: "Jayde Riviere", nomeCamisa: "Riviere", numero: 22, posicao: "LD/LE", overall: 76 },
      { nome: "Rebecca Quinn", nomeCamisa: "Quinn", numero: 5, posicao: "ZAG/VOL", overall: 78 },
      { nome: "Shannon Woeller", nomeCamisa: "Woeller", numero: 20, posicao: "ZAG", overall: 74 }
    ],

    meio_campo: [
      { nome: "Jessie Fleming", nomeCamisa: "Fleming", numero: 17, posicao: "MC/MEI", overall: 83 },
      { nome: "Sophie Schmidt", nomeCamisa: "Schmidt", numero: 13, posicao: "VOL/MC", overall: 81 },
      { nome: "Desiree Scott", nomeCamisa: "Scott", numero: 11, posicao: "VOL", overall: 80 },
      { nome: "Julia Grosso", nomeCamisa: "Grosso", numero: 7, posicao: "MC", overall: 76 },
      { nome: "Gabrielle Carle", nomeCamisa: "Carle", numero: 16, posicao: "MC/LE", overall: 75 }
    ],

    atacantes: [
      { nome: "Christine Sinclair", nomeCamisa: "Sinclair", numero: 12, posicao: "ATA/MEI", overall: 88 },
      { nome: "Janine Beckie", nomeCamisa: "Beckie", numero: 19, posicao: "PD/PE/ATA", overall: 83 },
      { nome: "Nichelle Prince", nomeCamisa: "Prince", numero: 15, posicao: "PD/ATA", overall: 80 },
      { nome: "Deanne Rose", nomeCamisa: "Rose", numero: 9, posicao: "PE/PD", overall: 79 },
      { nome: "Adriana Leon", nomeCamisa: "Leon", numero: 14, posicao: "PE/ATA", overall: 80 },
      { nome: "Jordyn Huitema", nomeCamisa: "Huitema", numero: 23, posicao: "ATA", overall: 78 },
      { nome: "Jenna Hellstrom", nomeCamisa: "Hellstrom", numero: 6, posicao: "PD", overall: 73 }
    ]
  },
  // Copa 2015 - Seleções do Playoffs
  eua_2015: {
    nome: "Estados Unidos",
    ano: 2015,
    campea: true,

    goleiras: [
      { nome: "Hope Solo", nomeCamisa: "Solo", numero: 1, posicao: "GOL", overall: 90 },
      { nome: "Ashlyn Harris", nomeCamisa: "Harris", numero: 18, posicao: "GOL", overall: 77 },
      { nome: "Alyssa Naeher", nomeCamisa: "Naeher", numero: 21, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Becky Sauerbrunn", nomeCamisa: "Sauerbrunn", numero: 4, posicao: "ZAG", overall: 88 },
      { nome: "Ali Krieger", nomeCamisa: "Krieger", numero: 11, posicao: "LD", overall: 85 },
      { nome: "Meghan Klingenberg", nomeCamisa: "Klingenberg", numero: 22, posicao: "LE", overall: 84 },
      { nome: "Julie Johnston", nomeCamisa: "Johnston", numero: 19, posicao: "ZAG/VOL", overall: 85 }, // Julie Ertz antes de casar
      { nome: "Christie Rampone", nomeCamisa: "Rampone", numero: 3, posicao: "ZAG", overall: 81 },
      { nome: "Kelley O'Hara", nomeCamisa: "O'Hara", numero: 5, posicao: "LD/PE", overall: 82 },
      { nome: "Whitney Engen", nomeCamisa: "Engen", numero: 6, posicao: "ZAG", overall: 77 },
      { nome: "Lori Chalupny", nomeCamisa: "Chalupny", numero: 16, posicao: "LE", overall: 76 }
    ],

    meio_campo: [
      { nome: "Carli Lloyd", nomeCamisa: "Lloyd", numero: 10, posicao: "MC/MEI/ATA", overall: 91 },
      { nome: "Megan Rapinoe", nomeCamisa: "Rapinoe", numero: 15, posicao: "PE/ME", overall: 88 },
      { nome: "Lauren Holiday", nomeCamisa: "Holiday", numero: 12, posicao: "MC/MEI", overall: 87 },
      { nome: "Tobin Heath", nomeCamisa: "Heath", numero: 17, posicao: "PD/MD", overall: 86 },
      { nome: "Morgan Brian", nomeCamisa: "Brian", numero: 14, posicao: "MC/VOL", overall: 82 },
      { nome: "Shannon Boxx", nomeCamisa: "Boxx", numero: 7, posicao: "VOL", overall: 78 },
      { nome: "Heather O'Reilly", nomeCamisa: "O'Reilly", numero: 9, posicao: "MD/PD", overall: 81 }
    ],

    atacantes: [
      { nome: "Alex Morgan", nomeCamisa: "Morgan", numero: 13, posicao: "ATA", overall: 95 },
      { nome: "Abby Wambach", nomeCamisa: "Wambach", numero: 20, posicao: "ATA", overall: 88 },
      { nome: "Sydney Leroux", nomeCamisa: "Leroux", numero: 2, posicao: "ATA/PD", overall: 83 },
      { nome: "Christen Press", nomeCamisa: "Press", numero: 23, posicao: "ATA/PE", overall: 82 },
      { nome: "Amy Rodriguez", nomeCamisa: "Rodriguez", numero: 8, posicao: "ATA", overall: 80 }
    ]
  },
  japao_2015: {
    nome: "Japão",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Ayumi Kaihori", nomeCamisa: "Kaihori", numero: 18, posicao: "GOL", overall: 83 },
      { nome: "Miho Fukumoto", nomeCamisa: "Fukumoto", numero: 1, posicao: "GOL", overall: 80 },
      { nome: "Erina Yamane", nomeCamisa: "Yamane", numero: 21, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Saki Kumagai", nomeCamisa: "Kumagai", numero: 4, posicao: "ZAG/VOL", overall: 85 },
      { nome: "Aya Sameshima", nomeCamisa: "Sameshima", numero: 5, posicao: "LE", overall: 83 },
      { nome: "Azusa Iwashimizu", nomeCamisa: "Iwashimizu", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Saori Ariyoshi", nomeCamisa: "Ariyoshi", numero: 19, posicao: "LD/LE", overall: 81 },
      { nome: "Yukari Kinga", nomeCamisa: "Kinga", numero: 2, posicao: "LD", overall: 80 },
      { nome: "Kana Kitahara", nomeCamisa: "Kitahara", numero: 12, posicao: "ZAG", overall: 75 },
      { nome: "Megumi Kamionobe", nomeCamisa: "Kamionobe", numero: 20, posicao: "LE/MC", overall: 76 }
    ],

    meio_campo: [
      { nome: "Aya Miyama", nomeCamisa: "Miyama", numero: 8, posicao: "ME/MC/MEI", overall: 88 },
      { nome: "Homare Sawa", nomeCamisa: "Sawa", numero: 10, posicao: "MC/MEI", overall: 87 },
      { nome: "Mizuho Sakaguchi", nomeCamisa: "Sakaguchi", numero: 6, posicao: "VOL/MC", overall: 84 },
      { nome: "Rumi Utsugi", nomeCamisa: "Utsugi", numero: 13, posicao: "VOL/LE", overall: 82 },
      { nome: "Asano Nagasato", nomeCamisa: "Nagasato", numero: 14, posicao: "MD/PD", overall: 78 },
      { nome: "Nahomi Kawasumi", nomeCamisa: "Kawasumi", numero: 9, posicao: "MD/PD", overall: 83 },
      { nome: "Saori Takarada", nomeCamisa: "Takarada", numero: 22, posicao: "MC", overall: 74 }
    ],

    atacantes: [
      { nome: "Mana Iwabuchi", nomeCamisa: "Iwabuchi", numero: 16, posicao: "ATA/MEI", overall: 82 },
      { nome: "Yuki Nagasato", nomeCamisa: "Nagasato", numero: 17, posicao: "ATA", overall: 85 }, 
      { nome: "Shinobu Ohno", nomeCamisa: "Ohno", numero: 11, posicao: "ATA/PD", overall: 82 },
      { nome: "Yuika Sugasawa", nomeCamisa: "Sugasawa", numero: 15, posicao: "ATA", overall: 79 },
      { nome: "Karina Maruyama", nomeCamisa: "Maruyama", numero: 7, posicao: "PE/ATA", overall: 76 },
      { nome: "Michi Goto", nomeCamisa: "Goto", numero: 23, posicao: "ATA", overall: 75 }
    ]
  },
  alemanha_2015: {
    nome: "Alemanha",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Nadine Angerer", nomeCamisa: "Angerer", numero: 1, posicao: "GOL", overall: 95 },
      { nome: "Almuth Schult", nomeCamisa: "Schult", numero: 12, posicao: "GOL", overall: 79 },
      { nome: "Laura Benkarth", nomeCamisa: "Benkarth", numero: 21, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Saskia Bartusiak", nomeCamisa: "Bartusiak", numero: 3, posicao: "ZAG", overall: 84 },
      { nome: "Annike Krahn", nomeCamisa: "Krahn", numero: 22, posicao: "ZAG", overall: 83 },
      { nome: "Leonier Maier", nomeCamisa: "Maier", numero: 4, posicao: "LD", overall: 82 },
      { nome: "Babett Peter", nomeCamisa: "Peter", numero: 14, posicao: "LE/ZAG", overall: 81 },
      { nome: "Bianca Schmidt", nomeCamisa: "Schmidt", numero: 2, posicao: "LD/LE", overall: 79 },
      { nome: "Jennifer Cramer", nomeCamisa: "Cramer", numero: 17, posicao: "LE", overall: 78 },
      { nome: "Tabea Kemme", nomeCamisa: "Kemme", numero: 23, posicao: "LE/MC", overall: 80 }
    ],

    meio_campo: [
      { nome: "Dzsenifer Marozsán", nomeCamisa: "Marozsán", numero: 10, posicao: "MEI/MC", overall: 88 },
      { nome: "Simone Laudehr", nomeCamisa: "Laudehr", numero: 6, posicao: "MC/MD/PE", overall: 85 },
      { nome: "Melanie Behringer", nomeCamisa: "Behringer", numero: 7, posicao: "VOL/MC", overall: 84 },
      { nome: "Lena Goeßling", nomeCamisa: "Goeßling", numero: 20, posicao: "VOL/MC", overall: 84 },
      { nome: "Melanie Leupolz", nomeCamisa: "Leupolz", numero: 16, posicao: "MC/VOL", overall: 81 },
      { nome: "Sara Däbritz", nomeCamisa: "Däbritz", numero: 13, posicao: "ME/PE", overall: 80 }
    ],

    atacantes: [
      { nome: "Célia Šašić", nomeCamisa: "Šašić", numero: 19, posicao: "ATA", overall: 90 },
      { nome: "Anja Mittag", nomeCamisa: "Mittag", numero: 11, posicao: "ATA/MEI", overall: 87 },
      { nome: "Alexandra Popp", nomeCamisa: "Popp", numero: 18, posicao: "ATA/PE", overall: 86 },
      { nome: "Pauline Bremer", nomeCamisa: "Bremer", numero: 9, posicao: "PD/ATA", overall: 76 },
      { nome: "Lena Petermann", nomeCamisa: "Petermann", numero: 15, posicao: "ATA", overall: 77 }
    ]
  },
  inglaterra_2015: {
    nome: "Inglaterra",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Karen Bardsley", nomeCamisa: "Bardsley", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Siobhan Chamberlain", nomeCamisa: "Chamberlain", numero: 13, posicao: "GOL", overall: 76 },
      { nome: "Carly Telford", nomeCamisa: "Telford", numero: 21, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Lucy Bronze", nomeCamisa: "Bronze", numero: 12, posicao: "LD/ZAG", overall: 85 },
      { nome: "Steph Houghton", nomeCamisa: "Houghton", numero: 5, posicao: "ZAG", overall: 84 },
      { nome: "Laura Bassett", nomeCamisa: "Bassett", numero: 6, posicao: "ZAG", overall: 79 },
      { nome: "Claire Rafferty", nomeCamisa: "Rafferty", numero: 3, posicao: "LE", overall: 78 },
      { nome: "Alex Scott", nomeCamisa: "A. Scott", numero: 2, posicao: "LD", overall: 81 },
      { nome: "Casey Stoney", nomeCamisa: "Stoney", numero: 15, posicao: "ZAG/LE", overall: 78 },
      { nome: "Alex Greenwood", nomeCamisa: "Greenwood", numero: 14, posicao: "LE", overall: 76 }
    ],

    meio_campo: [
      { nome: "Fara Williams", nomeCamisa: "Williams", numero: 4, posicao: "MC/VOL", overall: 84 },
      { nome: "Jill Scott", nomeCamisa: "J. Scott", numero: 8, posicao: "MC/VOL", overall: 83 },
      { nome: "Jade Moore", nomeCamisa: "Moore", numero: 16, posicao: "VOL", overall: 79 },
      { nome: "Katie Chapman", nomeCamisa: "Chapman", numero: 11, posicao: "VOL/MC", overall: 78 },
      { nome: "Jo Potter", nomeCamisa: "Potter", numero: 19, posicao: "MC", overall: 74 },
      { nome: "Jordan Nobbs", nomeCamisa: "Nobbs", numero: 7, posicao: "MC/MEI", overall: 80 }
    ],

    atacantes: [
      { nome: "Jodie Taylor", nomeCamisa: "Taylor", numero: 19, posicao: "ATA", overall: 82 },
      { nome: "Toni Duggan", nomeCamisa: "Duggan", numero: 18, posicao: "ATA/PE", overall: 82 },
      { nome: "Karen Carney", nomeCamisa: "Carney", numero: 10, posicao: "PE/MEI", overall: 83 },
      { nome: "Eniola Aluko", nomeCamisa: "Aluko", numero: 9, posicao: "ATA/PD", overall: 81 },
      { nome: "Ellen White", nomeCamisa: "White", numero: 17, posicao: "ATA", overall: 79 },
      { nome: "Lianne Sanderson", nomeCamisa: "Sanderson", numero: 22, posicao: "ATA/MEI", overall: 77 },
      { nome: "Fran Kirby", nomeCamisa: "Kirby", numero: 20, posicao: "MEI/ATA", overall: 78 }
    ]
  },
  china_2015: {
    nome: "China",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Wang Fei", nomeCamisa: "Wang Fei", numero: 12, posicao: "GOL", overall: 82 },
      { nome: "Zhang Yue", nomeCamisa: "Zhang Y.", numero: 1, posicao: "GOL", overall: 75 },
      { nome: "Zhao Lina", nomeCamisa: "Zhao L.", numero: 22, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Li Dongna", nomeCamisa: "Li D.N.", numero: 6, posicao: "ZAG", overall: 81 },
      { nome: "Wu Haiyan", nomeCamisa: "Wu H.Y.", numero: 5, posicao: "LD/ZAG", overall: 80 },
      { nome: "Liu Shanshan", nomeCamisa: "Liu S.", numero: 2, posicao: "LE", overall: 78 },
      { nome: "Zhao Rong", nomeCamisa: "Zhao R.", numero: 14, posicao: "ZAG/ATA", overall: 77 },
      { nome: "Li Jiayue", nomeCamisa: "Li J.Y.", numero: 3, posicao: "ZAG", overall: 76 },
      { nome: "Pang Fengyue", nomeCamisa: "Pang F.Y.", numero: 11, posicao: "MC/LD", overall: 75 }
    ],

    meio_campo: [
      { nome: "Wang Shuang", nomeCamisa: "Wang Shuang", numero: 18, posicao: "MEI/PE/ATA", overall: 80 },
      { nome: "Zhang Rui", nomeCamisa: "Zhang Rui", numero: 20, posicao: "VOL/MC", overall: 78 },
      { nome: "Tan Ruyin", nomeCamisa: "Tan R.Y.", numero: 19, posicao: "VOL", overall: 77 },
      { nome: "Ren Guixin", nomeCamisa: "Ren G.X.", numero: 23, posicao: "MC/MEI", overall: 79 },
      { nome: "Wang Lisi", nomeCamisa: "Wang L.S.", numero: 21, posicao: "MD/PD", overall: 78 },
      { nome: "Han Peng", nomeCamisa: "Han P.", numero: 13, posicao: "MC/LE", overall: 76 },
      { nome: "Tang Jiali", nomeCamisa: "Tang J.L.", numero: 15, posicao: "MEI/ATA", overall: 77 }
    ],

    atacantes: [
      { nome: "Wang Shanshan", nomeCamisa: "Wang S.S.", numero: 9, posicao: "ATA", overall: 81 },
      { nome: "Li Ying", nomeCamisa: "Li Ying", numero: 10, posicao: "ATA", overall: 78 },
      { nome: "Lou Jiahui", nomeCamisa: "Lou J.H.", numero: 4, posicao: "PD/LD", overall: 76 },
      { nome: "Gu Yasha", nomeCamisa: "Gu Y.S.", numero: 17, posicao: "PE/MEE", overall: 76 },
      { nome: "Ma Jun", nomeCamisa: "Ma J.", numero: 7, posicao: "ATA/VOL", overall: 75 },
      { nome: "Zhao Xue", nomeCamisa: "Zhao X.", numero: 16, posicao: "ATA", overall: 73 }
    ]
  },
  franca_2015: {
    nome: "França",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Sarah Bouhaddi", nomeCamisa: "Bouhaddi", numero: 16, posicao: "GOL", overall: 86 },
      { nome: "Céline Deville", nomeCamisa: "Deville", numero: 1, posicao: "GOL", overall: 77 },
      { nome: "Méline Gérard", nomeCamisa: "Gérard", numero: 23, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Wendie Rennard", nomeCamisa: "Renard", numero: 2, posicao: "ZAG", overall: 92 },
      { nome: "Laura Georges", nomeCamisa: "Georges", numero: 4, posicao: "ZAG", overall: 84 },
      { nome: "Laure Boulleau", nomeCamisa: "Boulleau", numero: 3, posicao: "LE", overall: 83 },
      { nome: "Jessica Houara", nomeCamisa: "Houara", numero: 8, posicao: "LD", overall: 82 },
      { nome: "Sabrina Delannoy", nomeCamisa: "Delannoy", numero: 5, posicao: "ZAG", overall: 79 },
      { nome: "Amel Majri", nomeCamisa: "Majri", numero: 7, posicao: "LE/ME", overall: 78 },
      { nome: "Griedge Mbock Bathy", nomeCamisa: "Mbock", numero: 19, posicao: "ZAG", overall: 77 },
      { nome: "Annaïg Butel", nomeCamisa: "Butel", numero: 22, posicao: "LD/ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Amandine Henry", nomeCamisa: "Henry", numero: 6, posicao: "VOL/MC", overall: 88 },
      { nome: "Camille Abily", nomeCamisa: "Abily", numero: 10, posicao: "MC/MEI", overall: 86 },
      { nome: "Louisa Nécib", nomeCamisa: "Nécib", numero: 14, posicao: "MEI/PE", overall: 87 }, 
      { nome: "Élise Bussaglia", nomeCamisa: "Bussaglia", numero: 15, posicao: "VOL/MC", overall: 82 },
      { nome: "Kenza Dali", nomeCamisa: "Dali", numero: 11, posicao: "MC/MD", overall: 77 },
      { nome: "Kheira Hamraoui", nomeCamisa: "Hamraoui", numero: 20, posicao: "VOL", overall: 78 }
    ],

    atacantes: [
      { nome: "Eugénie Le Sommer", nomeCamisa: "Le Sommer", numero: 9, posicao: "ATA/PE", overall: 86 },
      { nome: "Marie-Laure Delie", nomeCamisa: "Delie", numero: 18, posicao: "ATA", overall: 83 },
      { nome: "Élodie Thomis", nomeCamisa: "Thomis", numero: 12, posicao: "PD/MD", overall: 82 },
      { nome: "Gaëtane Thiney", nomeCamisa: "Thiney", numero: 17, posicao: "MEI/ATA", overall: 83 },
      { nome: "Claire Lavogez", nomeCamisa: "Lavogez", numero: 21, posicao: "MEI/ATA", overall: 76 },
      { nome: "Kadidiatou Diani", nomeCamisa: "Diani", numero: 23, posicao: "PD/ATA", overall: 75 }
    ]
  },
  australia_2015: {
    nome: "Austrália",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Lydia Williams", nomeCamisa: "Williams", numero: 1, posicao: "GOL", overall: 81 },
      { nome: "Melissa Barbieri", nomeCamisa: "Barbieri", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Mackenzie Arnold", nomeCamisa: "Arnold", numero: 21, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Steph Catley", nomeCamisa: "Catley", numero: 7, posicao: "LE", overall: 82 },
      { nome: "Clare Polkinghorne", nomeCamisa: "Polkinghorne", numero: 4, posicao: "ZAG/LD", overall: 79 },
      { nome: "Alanna Kennedy", nomeCamisa: "Kennedy", numero: 14, posicao: "ZAG", overall: 78 },
      { nome: "Laura Alleway", nomeCamisa: "Alleway", numero: 5, posicao: "ZAG", overall: 77 },
      { nome: "Servet Uzunlar", nomeCamisa: "Uzunlar", numero: 23, posicao: "LD/ZAG", overall: 74 },
      { nome: "Teigen Allen", nomeCamisa: "Allen", numero: 2, posicao: "LD", overall: 73 },
      { nome: "Ashleigh Sykes", nomeCamisa: "Sykes", numero: 16, posicao: "LE/ME", overall: 74 }
    ],

    meio_campo: [
      { nome: "Emily van Egmond", nomeCamisa: "van Egmond", numero: 10, posicao: "MC/MEI", overall: 81 },
      { nome: "Katrina Gorry", nomeCamisa: "Gorry", numero: 19, posicao: "MC/MEI", overall: 80 },
      { nome: "Elise Kellond-Knight", nomeCamisa: "Kellond-Knight", numero: 8, posicao: "VOL/LE", overall: 82 },
      { nome: "Tameka Butt", nomeCamisa: "Yallop", numero: 13, posicao: "MC/ME", overall: 78 },
      { nome: "Teresa Polias", nomeCamisa: "Polias", numero: 15, posicao: "VOL", overall: 73 },
      { nome: "Aivi Luik", nomeCamisa: "Luik", numero: 3, posicao: "VOL", overall: 74 }
    ],

    atacantes: [
      { nome: "Sam Kerr", nomeCamisa: "Kerr", numero: 20, posicao: "ATA/PD", overall: 83 },
      { nome: "Lisa De Vanna", nomeCamisa: "De Vanna", numero: 11, posicao: "PE/ATA", overall: 84 },
      { nome: "Caitlin Foord", nomeCamisa: "Foord", numero: 9, posicao: "PD/LD/ATA", overall: 81 },
      { nome: "Kyah Simon", nomeCamisa: "Simon", numero: 17, posicao: "ATA", overall: 82 },
      { nome: "Michelle Heyman", nomeCamisa: "Heyman", numero: 22, posicao: "ATA", overall: 77 },
      { nome: "Larissa Crummer", nomeCamisa: "Crummer", numero: 2, posicao: "ATA", overall: 71 },
      { nome: "Hayley Raso", nomeCamisa: "Raso", numero: 16, posicao: "PD", overall: 73 }
    ]
  },
  canada_2015: {
    nome: "Canadá",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Erin McLeod", nomeCamisa: "McLeod", numero: 1, posicao: "GOL", overall: 85 },
      { nome: "Stephanie Labbé", nomeCamisa: "Labbé", numero: 21, posicao: "GOL", overall: 78 },
      { nome: "Karina LeBlanc", nomeCamisa: "LeBlanc", numero: 23, posicao: "GOL", overall: 77 }
    ],

    defensoras: [
      { nome: "Kadeisha Buchanan", nomeCamisa: "Buchanan", numero: 3, posicao: "ZAG", overall: 85 },
      { nome: "Allysha Chapman", nomeCamisa: "Chapman", numero: 15, posicao: "LE", overall: 80 },
      { nome: "Rhian Wilkinson", nomeCamisa: "Wilkinson", numero: 7, posicao: "LD", overall: 79 },
      { nome: "Carmelina Moscato", nomeCamisa: "Moscato", numero: 5, posicao: "ZAG", overall: 78 },
      { nome: "Marie-Ève Nault", nomeCamisa: "Nault", numero: 20, posicao: "LE/ZAG", overall: 76 },
      { nome: "Emily Zurrer", nomeCamisa: "Zurrer", numero: 2, posicao: "ZAG", overall: 75 },
      { nome: "Robyn Gayle", nomeCamisa: "Gayle", numero: 4, posicao: "LD/LE", overall: 74 }
    ],

    meio_campo: [
      { nome: "Sophie Schmidt", nomeCamisa: "Schmidt", numero: 13, posicao: "MC/MEI", overall: 83 },
      { nome: "Desiree Scott", nomeCamisa: "Scott", numero: 11, posicao: "VOL", overall: 82 },
      { nome: "Kaylyn Kyle", nomeCamisa: "Kyle", numero: 6, posicao: "MC/MD", overall: 78 },
      { nome: "Diana Matheson", nomeCamisa: "Matheson", numero: 8, posicao: "MEI/MD", overall: 80 },
      { nome: "Jessie Fleming", nomeCamisa: "Fleming", numero: 17, posicao: "MC/MEI", overall: 75 }, 
      { nome: "Ashley Lawrence", nomeCamisa: "Lawrence", numero: 22, posicao: "MC/LD/LE", overall: 79 },
      { nome: "Selenia Iacchelli", nomeCamisa: "Iacchelli", numero: 10, posicao: "MC", overall: 71 }
    ],

    atacantes: [
      { nome: "Christine Sinclair", nomeCamisa: "Sinclair", numero: 12, posicao: "ATA/MEI", overall: 89 },
      { nome: "Janine Beckie", nomeCamisa: "Beckie", numero: 14, posicao: "PD/PE/ATA", overall: 78 },
      { nome: "Melissa Tancredi", nomeCamisa: "Tancredi", numero: 14, posicao: "ATA", overall: 81 },
      { nome: "Jonelle Filigno", nomeCamisa: "Filigno", numero: 16, posicao: "PE/PD", overall: 77 },
      { nome: "Adriana Leon", nomeCamisa: "Leon", numero: 19, posicao: "PE/ATA", overall: 76 },
      { nome: "Josée Bélanger", nomeCamisa: "Bélanger", numero: 9, posicao: "PD/LD", overall: 77 },
      { nome: "Lauren Sesselmann", nomeCamisa: "Sesselmann", numero: 10, posicao: "ATA/ZAG", overall: 75 }
    ]
  },
  camaroes_2015: {
    nome: "Camarões",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Annette Ngo Ndom", nomeCamisa: "Ngo Ndom", numero: 1, posicao: "GOL", overall: 77 },
      { nome: "Thècle Mbororo", nomeCamisa: "Mbororo", numero: 16, posicao: "GOL", overall: 67 },
      { nome: "Flore Enyegue", nomeCamisa: "Enyegue", numero: 23, posicao: "GOL", overall: 65 }
    ],

    defensoras: [
      { nome: "Christine Manie", nomeCamisa: "Manie", numero: 2, posicao: "ZAG", overall: 76 },
      { nome: "Marie-Aurelle Awona", nomeCamisa: "Awona", numero: 11, posicao: "ZAG/LE", overall: 73 },
      { nome: "Cathy Bou Ndjouh", nomeCamisa: "Bou Ndjouh", numero: 12, posicao: "LD/ZAG", overall: 74 },
      { nome: "Claudine Meffometou", nomeCamisa: "Meffometou", numero: 6, posicao: "LD", overall: 73 },
      { nome: "Yvonne Leuko", nomeCamisa: "Leuko", numero: 4, posicao: "LE/LD", overall: 72 },
      { nome: "Augustine Ejangue", nomeCamisa: "Ejangue", numero: 5, posicao: "ZAG/LE", overall: 71 },
      { nome: "Yisikin Sonkeng", nomeCamisa: "Sonkeng", numero: 15, posicao: "ZAG", overall: 68 }
    ],

    meio_campo: [
      { nome: "Raissa Feudjio", nomeCamisa: "Feudjio", numero: 8, posicao: "VOL/MC", overall: 75 },
      { nome: "Jeannette Yango", nomeCamisa: "Yango", numero: 10, posicao: "MC/MEI", overall: 74 },
      { nome: "Genevieve Ngo Mbeleck", nomeCamisa: "Ngo Mbeleck", numero: 20, posicao: "MC", overall: 72 },
      { nome: "Francine Zouga", nomeCamisa: "Zouga", numero: 14, posicao: "MC/VOL", overall: 73 },
      { nome: "Meffometou Tcheno", nomeCamisa: "Tcheno", numero: 13, posicao: "MC", overall: 69 },
      { nome: "Agathe Ngani", nomeCamisa: "Ngani", numero: 19, posicao: "VOL", overall: 70 }
    ],

    atacantes: [
      { nome: "Gaëlle Enganamouit", nomeCamisa: "Enganamouit", numero: 17, posicao: "ATA", overall: 82 },
      { nome: "Gabrielle Onguéné", nomeCamisa: "Onguéné", numero: 7, posicao: "PE/PD", overall: 80 },
      { nome: "Ajara Nchout", nomeCamisa: "Ajara", numero: 3, posicao: "PD/MEI/ATA", overall: 76 }, 
      { nome: "Madeleine Ngono Mani", nomeCamisa: "Ngono Mani", numero: 9, posicao: "ATA", overall: 75 },
      { nome: "Henriette Akaba", nomeCamisa: "Akaba", numero: 18, posicao: "PE/ATA", overall: 70 },
      { nome: "Rose Bella", nomeCamisa: "Bella", numero: 21, posicao: "ATA", overall: 67 },
      { nome: "Nrehy Ines", nomeCamisa: "Ines", numero: 22, posicao: "PD", overall: 68 }
    ]
  },
  colombia_2015: {
    nome: "Colômbia",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Sandra Sepúlveda", nomeCamisa: "Sepúlveda", numero: 1, posicao: "GOL", overall: 80 },
      { nome: "Catalina Pérez", nomeCamisa: "Pérez", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Stefany Castaño", nomeCamisa: "Castaño", numero: 22, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Nataly Arias", nomeCamisa: "Arias", numero: 14, posicao: "ZAG", overall: 78 },
      { nome: "Corina Clavijo", nomeCamisa: "Clavijo", numero: 13, posicao: "ZAG", overall: 76 },
      { nome: "Oriánica Velásquez", nomeCamisa: "Velásquez", numero: 9, posicao: "LE/PE", overall: 77 },
      { nome: "Carolina Arias", nomeCamisa: "C. Arias", numero: 17, posicao: "LD", overall: 76 },
      { nome: "Angela Clavijo", nomeCamisa: "A. Clavijo", numero: 3, posicao: "ZAG", overall: 74 },
      { nome: "Lina Granados", nomeCamisa: "Granados", numero: 2, posicao: "LD/LE", overall: 70 },
      { nome: "Natalia Gaitán", nomeCamisa: "Gaitán", numero: 6, posicao: "ZAG/VOL", overall: 79 } 
    ],

    meio_campo: [
      { nome: "Yoreli Rincón", nomeCamisa: "Rincón", numero: 10, posicao: "MEI/MC", overall: 82 },
      { nome: "Daniela Montoya", nomeCamisa: "Montoya", numero: 4, posicao: "VOL/MC", overall: 80 },
      { nome: "Diana Ospina", nomeCamisa: "Ospina", numero: 11, posicao: "MC/MD", overall: 78 },
      { nome: "Mildrey Pineda", nomeCamisa: "Pineda", numero: 21, posicao: "VOL", overall: 73 },
      { nome: "Carolina Pineda", nomeCamisa: "C. Pineda", numero: 19, posicao: "VOL/MC", overall: 75 },
      { nome: "Isabella Echeverri", nomeCamisa: "Echeverri", numero: 8, posicao: "MC/ZAG", overall: 74 },
      { nome: "Leicy Santos", nomeCamisa: "Leicy", numero: 15, posicao: "MEI/MC", overall: 76 } 
    ],

    atacantes: [
      { nome: "Lady Andrade", nomeCamisa: "Andrade", numero: 16, posicao: "PE/ATA/MEI", overall: 81 },
      { nome: "Catalina Usme", nomeCamisa: "Usme", numero: 11, posicao: "ATA/MEI", overall: 79 }, 
      { nome: "Ingrid Vidal", nomeCamisa: "Vidal", numero: 7, posicao: "ATA", overall: 76 },
      { nome: "Tatiana Ariza", nomeCamisa: "Ariza", numero: 18, posicao: "PD/ATA", overall: 75 },
      { nome: "Nicole Regnier", nomeCamisa: "Regnier", numero: 20, posicao: "ATA", overall: 72 },
      { nome: "Manuela González", nomeCamisa: "González", numero: 23, posicao: "ATA", overall: 70 }
    ]
  },
  suecia_2015: {
    nome: "Suécia",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Hedvig Lindahl", nomeCamisa: "Lindahl", numero: 1, posicao: "GOL", overall: 85 },
      { nome: "Carola Söberg", nomeCamisa: "Söberg", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Hilda Carlén", nomeCamisa: "Carlén", numero: 21, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Nilla Fischer", nomeCamisa: "Fischer", numero: 5, posicao: "ZAG", overall: 87 },
      { nome: "Emma Berglund", nomeCamisa: "Berglund", numero: 14, posicao: "ZAG", overall: 81 },
      { nome: "Lina Nilsson", nomeCamisa: "Nilsson", numero: 16, posicao: "LD/LE", overall: 80 },
      { nome: "Jessica Samuelsson", nomeCamisa: "Samuelsson", numero: 4, posicao: "LD", overall: 79 },
      { nome: "Amanda Ilestedt", nomeCamisa: "Ilestedt", numero: 3, posicao: "ZAG", overall: 78 }, 
      { nome: "Sara Thunebro", nomeCamisa: "Thunebro", numero: 6, posicao: "LE", overall: 77 },
      { nome: "Charlotte Rohlin", nomeCamisa: "Rohlin", numero: 2, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Caroline Seger", nomeCamisa: "Seger", numero: 17, posicao: "MC/VOL", overall: 88 },
      { nome: "Lisa Dahlkvist", nomeCamisa: "Dahlkvist", numero: 7, posicao: "VOL/MC", overall: 83 },
      { nome: "Therese Sjögran", nomeCamisa: "Sjögran", numero: 15, posicao: "MC/MD/MEI", overall: 82 },
      { nome: "Emilia Appelqvist", nomeCamisa: "Appelqvist", numero: 22, posicao: "VOL/MC", overall: 76 },
      { nome: "Olivia Schough", nomeCamisa: "Schough", numero: 20, posicao: "ME/PE", overall: 78 },
      { nome: "Malin Diaz", nomeCamisa: "Diaz", numero: 13, posicao: "MC/MEI", overall: 75 }
    ],

    atacantes: [
      { nome: "Lotta Schelin", nomeCamisa: "Schelin", numero: 8, posicao: "ATA", overall: 89 },
      { nome: "Sofia Jakobsson", nomeCamisa: "Jakobsson", numero: 10, posicao: "PD/PE/ATA", overall: 84 },
      { nome: "Kosovare Asllani", nomeCamisa: "Asllani", numero: 9, posicao: "MEI/ATA", overall: 83 },
      { nome: "Emma Lundh", nomeCamisa: "Lundh", numero: 11, posicao: "ATA", overall: 76 },
      { nome: "Jenny Hjohlman", nomeCamisa: "Hjohlman", numero: 19, posicao: "PE/PD", overall: 74 },
      { nome: "Lina Hurtig", nomeCamisa: "Hurtig", numero: 18, posicao: "ATA/PE", overall: 75 },
      { nome: "Elisa Hammarlund", nomeCamisa: "Hammarlund", numero: 23, posicao: "ATA", overall: 73 }
    ]
  },
  coreia_sul_2015: {
    nome: "Coreia do Sul",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Kim Jung-mi", nomeCamisa: "Kim", numero: 18, posicao: "GOL", overall: 79 },
      { nome: "Jun Min-kyung", nomeCamisa: "Jun", numero: 1, posicao: "GOL", overall: 74 },
      { nome: "Yoon Young-guel", nomeCamisa: "Yoon", numero: 21, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Shim Seo-yeon", nomeCamisa: "Shim", numero: 4, posicao: "ZAG/VOL", overall: 78 },
      { nome: "Kim Do-yeon", nomeCamisa: "Kim", numero: 20, posicao: "ZAG", overall: 77 },
      { nome: "Kim Hye-ri", nomeCamisa: "Kim", numero: 2, posicao: "LD", overall: 76 },
      { nome: "Lee Eun-mi", nomeCamisa: "Lee", numero: 3, posicao: "LE", overall: 75 },
      { nome: "Lim Seon-joo", nomeCamisa: "Lim", numero: 6, posicao: "ZAG", overall: 74 },
      { nome: "Hwang Bo-ram", nomeCamisa: "Hwang", numero: 5, posicao: "ZAG", overall: 74 },
      { nome: "Song Su-ran", nomeCamisa: "Song", numero: 14, posicao: "LE/LD", overall: 71 },
      { nome: "Kim Soo-yun", nomeCamisa: "Kim", numero: 17, posicao: "LD/LE", overall: 75 } 
    ],

    meio_campo: [
      { nome: "Ji So-yun", nomeCamisa: "Ji So-yun", numero: 10, posicao: "MEI/MC/ATA", overall: 85 },
      { nome: "Cho So-hyun", nomeCamisa: "Cho So-hyun", numero: 8, posicao: "VOL/MC", overall: 81 },
      { nome: "Kwon Hah-nul", nomeCamisa: "Kwon", numero: 13, posicao: "MC/VOL", overall: 76 },
      { nome: "Lee Young-ju", nomeCamisa: "Lee", numero: 22, posicao: "VOL/MC", overall: 73 },
      { nome: "Lee Sodam", nomeCamisa: "Lee", numero: 15, posicao: "MC/MEI", overall: 74 },
      { nome: "Kang Yu-mi", nomeCamisa: "Kang", numero: 16, posicao: "MD/PD", overall: 76 }
    ],

    atacantes: [
      { nome: "Jeon Ga-eul", nomeCamisa: "Jeon", numero: 7, posicao: "PE/MEI", overall: 79 },
      { nome: "Park Eun-sun", nomeCamisa: "Park", numero: 9, posicao: "ATA", overall: 78 }, 
      { nome: "Yoo Young-a", nomeCamisa: "Yoo", numero: 12, posicao: "ATA", overall: 77 },
      { nome: "Jung Seol-bin", nomeCamisa: "Jung", numero: 11, posicao: "PE/ATA", overall: 76 },
      { nome: "Lee Geum-min", nomeCamisa: "Lee", numero: 23, posicao: "PD/ATA", overall: 74 }, 
      { nome: "Yeo Min-ji", nomeCamisa: "Yeo", numero: 19, posicao: "ATA", overall: 73 }
    ]
  },
  brasil_2015: {
    nome: "Brasil",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Luciana", nomeCamisa: "Luciana", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Bárbara", nomeCamisa: "Bárbara", numero: 12, posicao: "GOL", overall: 79 },
      { nome: "Rafaela", nomeCamisa: "Rafaela", numero: 4, posicao: "GOL", overall: 80 },
      { nome: "Letícia Izidoro", nomeCamisa: "Lelê", numero: 22, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Mônica", nomeCamisa: "Mônica", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Fabiana", nomeCamisa: "Fabiana", numero: 2, posicao: "LD", overall: 83 },
      { nome: "Tamires", nomeCamisa: "Tamires", numero: 6, posicao: "LE", overall: 81 },
      { nome: "Tayla", nomeCamisa: "Tayla", numero: 15, posicao: "ZAG", overall: 78 },
      { nome: "Poliana", nomeCamisa: "Poliana", numero: 13, posicao: "LD/ZAG", overall: 78 },
      { nome: "Rafaelle", nomeCamisa: "Rafaelle", numero: 16, posicao: "LE/ZAG", overall: 79 },
      { nome: "Maurine", nomeCamisa: "Maurine", numero: 19, posicao: "LD/LE/Mc", overall: 79 },
    ],

    meio_campo: [
      { nome: "Formiga", nomeCamisa: "Formiga", numero: 20, posicao: "VOL/MC", overall: 94 },
      { nome: "Andressinha", nomeCamisa: "Andressinha", numero: 5, posicao: "MC/MEI", overall: 80 },
      { nome: "Thaisa", nomeCamisa: "Thaisa", numero: 8, posicao: "VOL/MC", overall: 81 },
      { nome: "Marta", nomeCamisa: "Marta", numero: 10, posicao: "MEI/ATA/PE", overall: 98 },
      { nome: "Bia Zaneratto", nomeCamisa: "Bia Zaneratto", numero: 7, posicao: "MEI/ATA", overall: 78 }, 
      { nome: "Raquel Fernandes", nomeCamisa: "Raquel", numero: 18, posicao: "MD/PD", overall: 76 }
    ],

    atacantes: [
      { nome: "Cristiane", nomeCamisa: "Cristiane", numero: 11, posicao: "ATA", overall: 93 },
      { nome: "Andressa Alves", nomeCamisa: "Andressa Alves", numero: 9, posicao: "PE/ATA", overall: 83 },
      { nome: "Darlene", nomeCamisa: "Darlene", numero: 22, posicao: "PD/ATA", overall: 79 },
      { nome: "Rosana", nomeCamisa: "Rosana", numero: 17, posicao: "PE/LE", overall: 78 },
      { nome: "Gabi Zanotti", nomeCamisa: "Gabi Zanotti", numero: 21, posicao: "ATA/MEI", overall: 77 }
    ]
  },
  holanda_2015: {
    nome: "Holanda",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Loes Geurts", nomeCamisa: "Geurts", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Sari van Veenendaal", nomeCamisa: "van Veenendaal", numero: 16, posicao: "GOL", overall: 79 },
      { nome: "Angela Christ", nomeCamisa: "Christ", numero: 23, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Stefanie van der Gragt", nomeCamisa: "van der Gragt", numero: 3, posicao: "ZAG", overall: 81 },
      { nome: "Mandy van den Berg", nomeCamisa: "van den Berg", numero: 4, posicao: "ZAG", overall: 80 },
      { nome: "Desiree van Lunteren", nomeCamisa: "van Lunteren", numero: 2, posicao: "LD/ZAG", overall: 79 },
      { nome: "Petra Hogewoning", nomeCamisa: "Hogewoning", numero: 5, posicao: "LE", overall: 77 },
      { nome: "Dominique Janssen", nomeCamisa: "Janssen", numero: 18, posicao: "ZAG/LE", overall: 76 }, 
      { nome: "Merel van Dongen", nomeCamisa: "van Dongen", numero: 15, posicao: "LE/ZAG", overall: 76 },
      { nome: "Dyanne Bito", nomeCamisa: "Bito", numero: 12, posicao: "LD", overall: 74 }
    ],

    meio_campo: [
      { nome: "Anouk Dekker", nomeCamisa: "Dekker", numero: 6, posicao: "VOL/MC/ZAG", overall: 81 },
      { nome: "Daniëlle van de Donk", nomeCamisa: "van de Donk", numero: 10, posicao: "MEI/MC", overall: 82 },
      { nome: "Sherida Spitse", nomeCamisa: "Spitse", numero: 8, posicao: "MC/VOL", overall: 83 },
      { nome: "Tessel Middag", nomeCamisa: "Middag", numero: 17, posicao: "MC/VOL", overall: 77 },
      { nome: "Jill Roord", nomeCamisa: "Roord", numero: 20, posicao: "MEI/MC", overall: 74 }, 
      { nome: "Marinnan van den Heiligenberg", nomeCamisa: "van den Heiligenberg", numero: 11, posicao: "ME/PE", overall: 76 }
    ],

    atacantes: [
      { nome: "Lieke Martens", nomeCamisa: "Martens", numero: 7, posicao: "PE/MEI", overall: 84 },
      { nome: "Vivianne Miedema", nomeCamisa: "Miedema", numero: 9, posicao: "ATA", overall: 83 },
      { nome: "Manon Melis", nomeCamisa: "Melis", numero: 14, posicao: "PD/ATA", overall: 82 },
      { nome: "Shanice van de Sanden", nomeCamisa: "van de Sanden", numero: 22, posicao: "PD", overall: 78 },
      { nome: "Kirsten van de Ven", nomeCamisa: "van de Ven", numero: 19, posicao: "PE/ATA", overall: 79 }, 
      { nome: "Anouk Hoogendijk", nomeCamisa: "Hoogendijk", numero: 13, posicao: "ATA/VOL", overall: 76 },
      { nome: "Vanity Lewerissa", nomeCamisa: "Lewerissa", numero: 21, posicao: "ATA", overall: 72 }
    ]
  },
  noruega_2015: {
    nome: "Noruega",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Silje Vesterbekkmo", nomeCamisa: "Vesterbekkmo", numero: 12, posicao: "GOL", overall: 79 },
      { nome: "Ingrid Hjelmseth", nomeCamisa: "Hjelmseth", numero: 1, posicao: "GOL", overall: 84 },
      { nome: "Cecilie Fiskerstrand", nomeCamisa: "Fiskerstrand", numero: 23, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Marita Skammelsrud Lund", nomeCamisa: "Lund", numero: 2, posicao: "LD/ZAG", overall: 80 },
      { nome: "Stefanie Möller", nomeCamisa: "Möller", numero: 3, posicao: "ZAG", overall: 78 },
      { nome: "Trine Rønning", nomeCamisa: "Rønning", numero: 7, posicao: "ZAG/VOL", overall: 83 }, 
      { nome: "Nora Holstad Berge", nomeCamisa: "Berge", numero: 11, posicao: "ZAG", overall: 81 },
      { nome: "Ingrid Moe Wold", nomeCamisa: "Wold", numero: 13, posicao: "LD/LE", overall: 79 },
      { nome: "Maria Thorisdottir", nomeCamisa: "Thorisdottir", numero: 15, posicao: "ZAG", overall: 77 },
      { nome: "Maren Mjelde", nomeCamisa: "Mjelde", numero: 6, posicao: "VOL/LD/ZAG", overall: 84 }
    ],

    meio_campo: [
      { nome: "Gry Tofte Ims", nomeCamisa: "Ims", numero: 4, posicao: "VOL/MC", overall: 79 },
      { nome: "Solveig Gulbrandsen", nomeCamisa: "Gulbrandsen", numero: 8, posicao: "MC/MEI", overall: 82 },
      { nome: "Lene Mykjåland", nomeCamisa: "Mykjåland", numero: 17, posicao: "MEI/MC", overall: 81 },
      { nome: "Anja Sønstevold", nomeCamisa: "Sønstevold", numero: 19, posicao: "MC/LD", overall: 75 },
      { nome: "Kristine Minde", nomeCamisa: "Minde", numero: 10, posicao: "ME/LE", overall: 80 },
      { nome: "Ingrid Schjelderup", nomeCamisa: "Ingrid", numero: 14, posicao: "MC", overall: 75 }
    ],

    atacantes: [
      { nome: "Isabell Herlovsen", nomeCamisa: "Herlovsen", numero: 9, posicao: "ATA/PE", overall: 83 },
      { nome: "Ada Hegerberg", nomeCamisa: "Hegerberg", numero: 21, posicao: "ATA", overall: 86 }, 
      { nome: "Elise Thorsnes", nomeCamisa: "Thorsnes", numero: 16, posicao: "PE/ATA", overall: 81 },
      { nome: "Emilie Haavi", nomeCamisa: "Haavi", numero: 20, posicao: "PD/PE", overall: 79 },
      { nome: "Hege Hansen", nomeCamisa: "Hansen", numero: 22, posicao: "ATA", overall: 73 },
      { nome: "Lisa-Marie Karlseng Utland", nomeCamisa: "Utland", numero: 5, posicao: "ATA", overall: 74 },
      { nome: "Melissa Bjånesøy", nomeCamisa: "Bjånesøy", numero: 18, posicao: "ATA", overall: 72 }
    ]
  },
  suica_2015: {
    nome: "Suíça",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Gaëlle Thalmann", nomeCamisa: "Thalmann", numero: 1, posicao: "GOL", overall: 81 },
      { nome: "Stenia Michel", nomeCamisa: "Michel", numero: 12, posicao: "GOL", overall: 75 },
      { nome: "Jennifer Oehrli", nomeCamisa: "Oehrli", numero: 21, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Caroline Abbé", nomeCamisa: "Abbé", numero: 5, posicao: "ZAG", overall: 80 }, 
      { nome: "Rachel Rinast", nomeCamisa: "Rinast", numero: 6, posicao: "LE", overall: 77 },
      { nome: "Noëlle Maritz", nomeCamisa: "Maritz", numero: 14, posicao: "LD/LE", overall: 79 },
      { nome: "Nicole Remund", nomeCamisa: "Remund", numero: 2, posicao: "LD", overall: 74 },
      { nome: "Sandra Betschart", nomeCamisa: "Betschart", numero: 3, posicao: "LE/ZAG", overall: 75 },
      { nome: "Rahel Kiwic", nomeCamisa: "Kiwic", numero: 15, posicao: "ZAG", overall: 76 },
      { nome: "Daniela Schwarz", nomeCamisa: "Schwarz", numero: 23, posicao: "ZAG", overall: 71 }
    ],

    meio_campo: [
      { nome: "Lia Wälti", nomeCamisa: "Wälti", numero: 13, posicao: "VOL/MC/ZAG", overall: 81 },
      { nome: "Martina Moser", nomeCamisa: "Moser", numero: 7, posicao: "MC/MD", overall: 80 },
      { nome: "Lara Dickenmann", nomeCamisa: "Dickenmann", numero: 10, posicao: "MEI/MC/LE", overall: 85 },
      { nome: "Vanessa Bernauer", nomeCamisa: "Bernauer", numero: 22, posicao: "MC/VOL", overall: 78 },
      { nome: "Cinzia Zehnder", nomeCamisa: "Zehnder", numero: 8, posicao: "MC", overall: 74 },
      { nome: "Florijana Ismaili", nomeCamisa: "Ismaili", numero: 16, posicao: "MC/MEI", overall: 73 }
    ],

    atacantes: [
      { nome: "Vanessa Bürki", nomeCamisa: "Bürki", numero: 18, posicao: "ATA", overall: 76 },
      { nome: "Ramona Bachmann", nomeCamisa: "Bachmann", numero: 11, posicao: "ATA/PE", overall: 85 },
      { nome: "Fabienne Humm", nomeCamisa: "Humm", numero: 19, posicao: "ATA", overall: 79 }, 
      { nome: "Ana-Maria Crnogorčević", nomeCamisa: "Crnogorčević", numero: 18, posicao: "PD/LD/ATA", overall: 82 },
      { nome: "Eseosa Aigbogun", nomeCamisa: "Aigbogun", numero: 17, posicao: "PE/PD", overall: 77 },
      { nome: "Barla Deplazes", nomeCamisa: "Deplazes", numero: 20, posicao: "ATA", overall: 72 },
      { nome: "Meriame Terchoun", nomeCamisa: "Terchoun", numero: 14, posicao: "ATA/PD", overall: 71 }
    ]
  },
  // Copa 2011 - Seleções dos playoffs
  japao_2011: {
    nome: "Japão",
    ano: 2011,
    campea: true,

    goleiras: [
      { nome: "Miho Fukumoto", nomeCamisa: "Fukumoto", numero: 1, posicao: "GOL", overall: 80 },
      { nome: "Ayumi Kaihori", nomeCamisa: "Kaihori", numero: 12, posicao: "GOL", overall: 89 }, 
      { nome: "Nozomi Yamago", nomeCamisa: "Yamago", numero: 21, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Yukari Kinga", nomeCamisa: "Kinga", numero: 2, posicao: "LD", overall: 82 },
      { nome: "Azusa Iwashimizu", nomeCamisa: "Iwashimizu", numero: 3, posicao: "ZAG", overall: 88 },
      { nome: "Saki Kumagai", nomeCamisa: "Kumagai", numero: 4, posicao: "ZAG", overall: 87 }, 
      { nome: "Aya Sameshima", nomeCamisa: "Sameshima", numero: 5, posicao: "LE", overall: 82 },
      { nome: "Asuna Tanaka", nomeCamisa: "Tanaka", numero: 14, posicao: "ZAG/VOL", overall: 77 },
      { nome: "Megumi Kamionobe", nomeCamisa: "Kamionobe", numero: 15, posicao: "LE/ZAG", overall: 76 },
      { nome: "Kyoko Yano", nomeCamisa: "Yano", numero: 16, posicao: "ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Mizuho Sakaguchi", nomeCamisa: "Sakaguchi", numero: 6, posicao: "VOL/MC", overall: 82 },
      { nome: "Aya Miyama", nomeCamisa: "Miyama", numero: 8, posicao: "ME/MC", overall: 90 }, 
      { nome: "Nahomi Kawasumi", nomeCamisa: "Kawasumi", numero: 9, posicao: "MD/PD", overall: 89 }, 
      { nome: "Homare Sawa", nomeCamisa: "Sawa", numero: 10, posicao: "MC/MEI", overall: 91 }, 
      { nome: "Rumi Utsugi", nomeCamisa: "Utsugi", numero: 13, posicao: "VOL/LE", overall: 79 }
    ],

    atacantes: [
      { nome: "Kozue Ando", nomeCamisa: "Ando", numero: 7, posicao: "ATA/MEI", overall: 82 },
      { nome: "Shinobu Ohno", nomeCamisa: "Ohno", numero: 11, posicao: "PD/ATA", overall: 83 },
      { nome: "Yuki Nagasato", nomeCamisa: "Nagasato", numero: 17, posicao: "ATA", overall: 90 }, 
      { nome: "Karina Maruyama", nomeCamisa: "Maruyama", numero: 18, posicao: "PE/ATA", overall: 79 },
      { nome: "Megumi Takase", nomeCamisa: "Takase", numero: 19, posicao: "ATA", overall: 76 },
      { nome: "Mana Iwabuchi", nomeCamisa: "Iwabuchi", numero: 20, posicao: "ATA/MEI", overall: 76 } 
    ]
  },
  eua_2011: {
    nome: "Estados Unidos",
    ano: 2011,
    campea: false,

    goleiras: [
      { nome: "Hope Solo", nomeCamisa: "Solo", numero: 1, posicao: "GOL", overall: 91 },
      { nome: "Nicole Barnhart", nomeCamisa: "Barnhart", numero: 18, posicao: "GOL", overall: 78 },
      { nome: "Jill Loyden", nomeCamisa: "Loyden", numero: 21, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Christie Rampone", nomeCamisa: "Rampone", numero: 3, posicao: "ZAG", overall: 88 }, 
      { nome: "Ali Krieger", nomeCamisa: "Krieger", numero: 11, posicao: "LD", overall: 84 },
      { nome: "Rachel Buehler", nomeCamisa: "Buehler", numero: 14, posicao: "ZAG", overall: 83 },
      { nome: "Amy LePeilbet", nomeCamisa: "LePeilbet", numero: 6, posicao: "LE/ZAG", overall: 82 },
      { nome: "Becky Sauerbrunn", nomeCamisa: "Sauerbrunn", numero: 4, posicao: "ZAG", overall: 80 },
      { nome: "Heather Mitts", nomeCamisa: "Mitts", numero: 2, posicao: "LD", overall: 79 },
      { nome: "Stephanie Cox", nomeCamisa: "Cox", numero: 16, posicao: "LE", overall: 78 }
    ],

    meio_campo: [
      { nome: "Carli Lloyd", nomeCamisa: "Lloyd", numero: 10, posicao: "MC/MEI", overall: 88 },
      { nome: "Shannon Boxx", nomeCamisa: "Boxx", numero: 7, posicao: "VOL/MC", overall: 86 },
      { nome: "Heather O'Reilly", nomeCamisa: "O'Reilly", numero: 9, posicao: "MD/PD", overall: 85 },
      { nome: "Lauren Holiday", nomeCamisa: "Holiday", numero: 12, posicao: "MEI/ATA", overall: 85 }, 
      { nome: "Megan Rapinoe", nomeCamisa: "Rapinoe", numero: 15, posicao: "ME/PE", overall: 84 },
      { nome: "Tobin Heath", nomeCamisa: "Heath", numero: 17, posicao: "PE/PD", overall: 82 },
      { nome: "Kelley O'Hara", nomeCamisa: "O'Hara", numero: 5, posicao: "ME/LE", overall: 76 }, 
      { nome: "Lori Lindsey", nomeCamisa: "Lindsey", numero: 19, posicao: "MC", overall: 75 }
    ],

    atacantes: [
      { nome: "Abby Wambach", nomeCamisa: "Wambach", numero: 20, posicao: "ATA", overall: 91 },
      { nome: "Amy Rodriguez", nomeCamisa: "Rodriguez", numero: 8, posicao: "ATA/PD", overall: 83 },
      { nome: "Alex Morgan", nomeCamisa: "Morgan", numero: 13, posicao: "ATA", overall: 82 } 
    ]
  },
  suecia_2011: {
    nome: "Suécia",
    ano: 2011,
    campea: false,

    goleiras: [
      { nome: "Hedvig Lindahl", nomeCamisa: "Lindahl", numero: 1, posicao: "GOL", overall: 84 },
      { nome: "Sofia Lundgren", nomeCamisa: "Lundgren", numero: 12, posicao: "GOL", overall: 75 },
      { nome: "Kristin Hammarström", nomeCamisa: "K. Hammarström", numero: 21, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Charlotte Rohlin", nomeCamisa: "Rohlin", numero: 2, posicao: "ZAG", overall: 83 },
      { nome: "Sara Larsson", nomeCamisa: "Larsson", numero: 3, posicao: "ZAG", overall: 81 },
      { nome: "Annica Svensson", nomeCamisa: "Svensson", numero: 4, posicao: "LD", overall: 78 },
      { nome: "Sara Thunebro", nomeCamisa: "Thunebro", numero: 6, posicao: "LE", overall: 82 },
      { nome: "Lina Nilsson", nomeCamisa: "Nilsson", numero: 13, posicao: "LD/LE", overall: 77 },
      { nome: "Linda Sembrant", nomeCamisa: "Sembrant", numero: 20, posicao: "ZAG", overall: 78 }
    ],

    meio_campo: [
      { nome: "Caroline Seger", nomeCamisa: "Seger", numero: 5, posicao: "MC/VOL", overall: 86 }, 
      { nome: "Lisa Dahlkvist", nomeCamisa: "Dahlkvist", numero: 7, posicao: "VOL/MC", overall: 83 }, 
      { nome: "Antonia Göransson", nomeCamisa: "Göransson", numero: 11, posicao: "ME/PE", overall: 79 },
      { nome: "Therese Sjögran", nomeCamisa: "Sjögran", numero: 15, posicao: "MD/MEI", overall: 84 },
      { nome: "Linda Forsberg", nomeCamisa: "Forsberg", numero: 16, posicao: "MC/ME", overall: 80 },
      { nome: "Nilla Fischer", nomeCamisa: "Fischer", numero: 18, posicao: "VOL/ZAG", overall: 82 },
      { nome: "Marie Hammarström", nomeCamisa: "M. Hammarström", numero: 19, posicao: "MC/ME", overall: 79 } 
    ],

    atacantes: [
      { nome: "Lotta Schelin", nomeCamisa: "Schelin", numero: 8, posicao: "ATA", overall: 88 },
      { nome: "Jessica Landström", nomeCamisa: "Landström", numero: 9, posicao: "ATA", overall: 80 },
      { nome: "Sofia Jakobsson", nomeCamisa: "Jakobsson", numero: 10, posicao: "PE/PD/ATA", overall: 76 },
      { nome: "Josefine Öqvist", nomeCamisa: "Öqvist", numero: 14, posicao: "PD/ATA", overall: 83 },
      { nome: "Madelaine Edlund", nomeCamisa: "Edlund", numero: 17, posicao: "ATA", overall: 75 }
    ]
  },
  franca_2011: {
    nome: "França",
    ano: 2011,
    campea: false,

    goleiras: [
      { nome: "Bérangère Sapowicz", nomeCamisa: "Sapowicz", numero: 16, posicao: "GOL", overall: 81 },
      { nome: "Céline Deville", nomeCamisa: "Deville", numero: 1, posicao: "GOL", overall: 79 },
      { nome: "Laëtitia Philippe", nomeCamisa: "Philippe", numero: 21, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Laura Georges", nomeCamisa: "Georges", numero: 4, posicao: "ZAG", overall: 84 },
      { nome: "Laure Boulleau", nomeCamisa: "Boulleau", numero: 3, posicao: "LE", overall: 82 },
      { nome: "Ophélie Meilleroux", nomeCamisa: "Meilleroux", numero: 5, posicao: "ZAG", overall: 79 },
      { nome: "Laure Lepailleur", nomeCamisa: "Lepailleur", numero: 11, posicao: "LD/ZAG", overall: 77 },
      { nome: "Sabrina Viguier", nomeCamisa: "Viguier", numero: 20, posicao: "ZAG/LD", overall: 78 },
      { nome: "Wendie Renard", nomeCamisa: "Renard", numero: 2, posicao: "ZAG", overall: 80 }
    ],

    meio_campo: [
      { nome: "Sonia Bompastor", nomeCamisa: "Bompastor", numero: 8, posicao: "VOL/LE/MC", overall: 85 }, 
      { nome: "Louisa Nécib", nomeCamisa: "Nécib", numero: 14, posicao: "MEI/PE", overall: 86 }, 
      { nome: "Camille Abily", nomeCamisa: "Abily", numero: 10, posicao: "MC/MEI", overall: 84 },
      { nome: "Sandrine Soubeyrand", nomeCamisa: "Soubeyrand", numero: 6, posicao: "VOL/MC", overall: 82 }, 
      { nome: "Élise Bussaglia", nomeCamisa: "Bussaglia", numero: 15, posicao: "MC/VOL", overall: 82 }, 
      { nome: "Corine Franco", nomeCamisa: "Franco", numero: 7, posicao: "VOL/LD", overall: 80 },
      { nome: "Caroline Pizzala", nomeCamisa: "Pizzala", numero: 13, posicao: "MC", overall: 74 }
    ],

    atacantes: [
      { nome: "Gaëtane Thiney", nomeCamisa: "Thiney", numero: 17, posicao: "MEI/ATA/PE", overall: 84 },
      { nome: "Marie-Laure Delie", nomeCamisa: "Delie", numero: 18, posicao: "ATA", overall: 83 },
      { nome: "Élodie Thomis", nomeCamisa: "Thomis", numero: 12, posicao: "PD/MD", overall: 82 }, 
      { nome: "Eugénie Le Sommer", nomeCamisa: "Le Sommer", numero: 9, posicao: "ATA/PE", overall: 81 }, 
      { nome: "Sandrine Brétigny", nomeCamisa: "Brétigny", numero: 19, posicao: "ATA", overall: 75 }
    ]
  },
  alemanha_2011: {
    nome: "Alemanha",
    ano: 2011,
    campea: false,

    goleiras: [
      { nome: "Nadine Angerer", nomeCamisa: "Angerer", numero: 1, posicao: "GOL", overall: 97 },
      { nome: "Ursula Holl", nomeCamisa: "Holl", numero: 12, posicao: "GOL", overall: 77 },
      { nome: "Almuth Schult", nomeCamisa: "Schult", numero: 21, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Saskia Bartusiak", nomeCamisa: "Bartusiak", numero: 3, posicao: "ZAG", overall: 83 },
      { nome: "Annike Krahn", nomeCamisa: "Krahn", numero: 5, posicao: "ZAG", overall: 85 },
      { nome: "Babett Peter", nomeCamisa: "Peter", numero: 4, posicao: "LE", overall: 83 },
      { nome: "Bianca Schmidt", nomeCamisa: "Schmidt", numero: 2, posicao: "LD", overall: 80 },
      { nome: "Linda Bresonik", nomeCamisa: "Bresonik", numero: 10, posicao: "LD/LE/MC", overall: 84 },
      { nome: "Verena Faißt", nomeCamisa: "Faißt", numero: 15, posicao: "LE", overall: 77 },
      { nome: "Ariane Hingst", nomeCamisa: "Hingst", numero: 17, posicao: "ZAG/VOL", overall: 82 } 
    ],

    meio_campo: [
      { nome: "Simone Laudehr", nomeCamisa: "Laudehr", numero: 6, posicao: "MC/VOL", overall: 85 },
      { nome: "Melanie Behringer", nomeCamisa: "Behringer", numero: 7, posicao: "ME/PE", overall: 84 },
      { nome: "Kerstin Garefrekes", nomeCamisa: "Garefrekes", numero: 18, posicao: "MD/PD", overall: 86 }, 
      { nome: "Fatmire Bajramaj", nomeCamisa: "Bajramaj", numero: 19, posicao: "MEI/PE", overall: 86 }, 
      { nome: "Kim Kulig", nomeCamisa: "Kulig", numero: 14, posicao: "VOL/MC", overall: 82 },
      { nome: "Lena Goeßling", nomeCamisa: "Goeßling", numero: 20, posicao: "MC/VOL", overall: 79 }
    ],

    atacantes: [
      { nome: "Birgit Prinz", nomeCamisa: "Prinz", numero: 9, posicao: "ATA", overall: 87 }, 
      { nome: "Inka Grings", nomeCamisa: "Grings", numero: 8, posicao: "ATA", overall: 86 }, 
      { nome: "Célia Okoyino da Mbabi", nomeCamisa: "da Mbabi", numero: 13, posicao: "ATA/MEI", overall: 85 }, 
      { nome: "Alexandra Popp", nomeCamisa: "Popp", numero: 11, posicao: "ATA/PE", overall: 80 },
      { nome: "Martina Müller", nomeCamisa: "Müller", numero: 16, posicao: "ATA", overall: 79 }
    ]
  },
  australia_2011: {
    nome: "Austrália",
    ano: 2011,
    campea: false,

    goleiras: [
      { nome: "Melissa Barbieri", nomeCamisa: "Barbieri", numero: 1, posicao: "GOL", overall: 81 }, 
      { nome: "Lydia Williams", nomeCamisa: "Williams", numero: 12, posicao: "GOL", overall: 78 },
      { nome: "Casey Dumont", nomeCamisa: "Dumont", numero: 18, posicao: "GOL", overall: 68 }
    ],

    defensoras: [
      { nome: "Kim Carroll", nomeCamisa: "Carroll", numero: 3, posicao: "ZAG", overall: 79 },
      { nome: "Servet Uzunlar", nomeCamisa: "Uzunlar", numero: 5, posicao: "ZAG/LD", overall: 79 },
      { nome: "Clare Polkinghorne", nomeCamisa: "Polkinghorne", numero: 4, posicao: "ZAG", overall: 78 },
      { nome: "Ellyse Perry", nomeCamisa: "Perry", numero: 6, posicao: "LD", overall: 75 }, 
      { nome: "Laura Alleway", nomeCamisa: "Alleway", numero: 21, posicao: "ZAG", overall: 74 },
      { nome: "Teigen Allen", nomeCamisa: "Allen", numero: 2, posicao: "LD", overall: 72 }
    ],

    meio_campo: [
      { nome: "Heather Garriock", nomeCamisa: "Garriock", numero: 7, posicao: "ME/LE", overall: 82 },
      { nome: "Collette McCallum", nomeCamisa: "McCallum", numero: 15, posicao: "MC/MEI", overall: 82 },
      { nome: "Elise Kellond-Knight", nomeCamisa: "Kellond-Knight", numero: 8, posicao: "LE/VOL", overall: 81 }, 
      { nome: "Sally Shipard", nomeCamisa: "Shipard", numero: 14, posicao: "VOL/MC", overall: 78 },
      { nome: "Tameka Butt", nomeCamisa: "Butt", numero: 13, posicao: "MC", overall: 77 }, 
      { nome: "Emily van Egmond", nomeCamisa: "van Egmond", numero: 10, posicao: "MEI/MC", overall: 75 }, 
      { nome: "Lauren Colthorpe", nomeCamisa: "Colthorpe", numero: 16, posicao: "MC", overall: 73 }
    ],

    atacantes: [
      { nome: "Lisa De Vanna", nomeCamisa: "De Vanna", numero: 11, posicao: "ATA/PE", overall: 84 },
      { nome: "Kyah Simon", nomeCamisa: "Simon", numero: 17, posicao: "ATA", overall: 82 }, 
      { nome: "Caitlin Foord", nomeCamisa: "Foord", numero: 9, posicao: "PD/LD", overall: 78 }, 
      { nome: "Sam Kerr", nomeCamisa: "Kerr", numero: 20, posicao: "PD/ATA", overall: 77 }, 
      { nome: "Leena Khamis", nomeCamisa: "Khamis", numero: 19, posicao: "ATA", overall: 75 }
    ]
  },
  englaterra_2011: {
    nome: "Inglaterra",
    ano: 2011,
    campea: false,

    goleiras: [
      { nome: "Karen Bardsley", nomeCamisa: "Bardsley", numero: 1, posicao: "GOL", overall: 83 },
      { nome: "Rachel Brown", nomeCamisa: "Brown", numero: 13, posicao: "GOL", overall: 78 },
      { nome: "Siobhan Chamberlain", nomeCamisa: "Chamberlain", numero: 21, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Faye White", nomeCamisa: "F. White", numero: 5, posicao: "ZAG", overall: 84 }, // Capitã
      { nome: "Casey Stoney", nomeCamisa: "Stoney", numero: 3, posicao: "ZAG/LE", overall: 85 },
      { nome: "Alex Scott", nomeCamisa: "A. Scott", numero: 2, posicao: "LD", overall: 84 },
      { nome: "Rachel Unitt", nomeCamisa: "Unitt", numero: 15, posicao: "LE", overall: 79 },
      { nome: "Stephanie Houghton", nomeCamisa: "Houghton", numero: 19, posicao: "LE/ZAG", overall: 81 }, // Versátil e excelente na bola parada
      { nome: "Laura Bassett", nomeCamisa: "Bassett", numero: 20, posicao: "ZAG/VOL", overall: 78 },
      { nome: "Sophie Bradley", nomeCamisa: "Bradley", numero: 6, posicao: "ZAG", overall: 77 },
      { nome: "Claire Rafferty", nomeCamisa: "Rafferty", numero: 16, posicao: "LE", overall: 74 }
    ],

    meio_campo: [
      { nome: "Fara Williams", nomeCamisa: "Williams", numero: 8, posicao: "MC/VOL", overall: 86 }, // Cérebro do meio-campo e chutes de longe
      { nome: "Jill Scott", nomeCamisa: "J. Scott", numero: 4, posicao: "MC/VOL", overall: 85 }, // Gigante de 1,81m com infiltração surpresa
      { nome: "Kelly Smith", nomeCamisa: "Smith", numero: 10, posicao: "MEI/ATA", overall: 88 }, // A craque mais talentosa da equipe
      { nome: "Rachel Yankey", nomeCamisa: "Yankey", numero: 11, posicao: "ME/PE", overall: 83 }, // Cruzamentos milimétricos
      { nome: "Anita Asante", nomeCamisa: "Asante", numero: 18, posicao: "VOL/ZAG", overall: 81 }
    ],

    atacantes: [
      { nome: "Karen Carney", nomeCamisa: "Carney", numero: 12, posicao: "MEI/MD/PD", overall: 83 },
      { nome: "Ellen White", nomeCamisa: "E. White", numero: 9, posicao: "ATA", overall: 82 },
      { nome: "Eniola Aluko", nomeCamisa: "Aluko", numero: 14, posicao: "PE/ATA", overall: 81 }, // Velocidade pura
      { nome: "Jessica Clarke", nomeCamisa: "Clarke", numero: 7, posicao: "PD/MD", overall: 78 },
      { nome: "Rachel Williams", nomeCamisa: "R. Williams", numero: 17, posicao: "ATA", overall: 75 }
    ]
  },
  brasil_2011: {
    nome: "Brasil",
    ano: 2011,
    campea: false,

    goleiras: [
      { nome: "Andréia", nomeCamisa: "Andréia", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Bárbara", nomeCamisa: "Bárbara", numero: 12, posicao: "GOL", overall: 78 },
      { nome: "Thaís", nomeCamisa: "Thaís", numero: 21, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Aline", nomeCamisa: "Aline", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Érika", nomeCamisa: "Érika", numero: 4, posicao: "ZAG", overall: 83 },
      { nome: "Renata Costa", nomeCamisa: "R. Costa", numero: 6, posicao: "ZAG/VOL", overall: 81 },
      { nome: "Rosana", nomeCamisa: "Rosana", numero: 16, posicao: "LE/PE", overall: 84 }, 
      { nome: "Daiane", nomeCamisa: "Daiane", numero: 13, posicao: "LD", overall: 76 },
      { nome: "Roseane", nomeCamisa: "Roseane", numero: 14, posicao: "ZAG", overall: 74 }
    ],

    meio_campo: [
      { nome: "Formiga", nomeCamisa: "Formiga", numero: 8, posicao: "VOL/MC", overall: 88 },
      { nome: "Ester", nomeCamisa: "Ester", numero: 5, posicao: "VOL/MC", overall: 81 },
      { nome: "Maurine", nomeCamisa: "Maurine", numero: 2, posicao: "MC/LD/LE", overall: 81 }, 
      { nome: "Francielle", nomeCamisa: "Francielle", numero: 15, posicao: "MC", overall: 79 },
      { nome: "Grazielle", nomeCamisa: "Grazielle", numero: 7, posicao: "MC/ATA", overall: 79 }
    ],

    atacantes: [
      { nome: "Marta", nomeCamisa: "Marta", numero: 10, posicao: "MEI/ATA", overall: 99 }, 
      { nome: "Cristiane", nomeCamisa: "Cristiane", numero: 11, posicao: "ATA", overall: 92 },
      { nome: "Fabiana", nomeCamisa: "Fabiana", numero: 19, posicao: "PD/LD", overall: 82 }, 
      { nome: "Thaísinha", nomeCamisa: "Thaís", numero: 18, posicao: "ATA/PE", overall: 76 },
      { nome: "Daniele", nomeCamisa: "Daniele", numero: 17, posicao: "ATA", overall: 75 },
      { nome: "Bia Zaneratto", nomeCamisa: "Beatriz", numero: 9, posicao: "ATA", overall: 74 } 
    ]
  },
  // Copa 2007 - Seleções dos playoffs
  alemanha_2007: {
    nome: "Alemanha",
    ano: 2007,
    campea: true,

    goleiras: [
      { nome: "Nadine Angerer", nomeCamisa: "Angerer", numero: 1, posicao: "GOL", overall: 96 },
      { nome: "Ursula Holl", nomeCamisa: "Holl", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Silke Rottenberg", nomeCamisa: "Rottenberg", numero: 21, posicao: "GOL", overall: 84 }
    ],

    defensoras: [
      { nome: "Kerstin Stegemann", nomeCamisa: "Stegemann", numero: 2, posicao: "LD/MD", overall: 87 },
      { nome: "Saskia Bartusiak", nomeCamisa: "Bartusiak", numero: 3, posicao: "ZAG", overall: 80 },
      { nome: "Babett Peter", nomeCamisa: "Peter", numero: 4, posicao: "LE", overall: 82 },
      { nome: "Annike Krahn", nomeCamisa: "Krahn", numero: 5, posicao: "ZAG", overall: 85 },
      { nome: "Sandra Minnert", nomeCamisa: "Minnert", numero: 13, posicao: "ZAG/LE", overall: 83 },
      { nome: "Sonja Fuss", nomeCamisa: "Fuss", numero: 15, posicao: "ZAG/LD", overall: 80 },
      { nome: "Ariane Hingst", nomeCamisa: "Hingst", numero: 17, posicao: "ZAG/VOL", overall: 89 }
    ],

    meio_campo: [
      { nome: "Linda Bresonik", nomeCamisa: "Bresonik", numero: 6, posicao: "VOL/LD", overall: 84 },
      { nome: "Melanie Behringer", nomeCamisa: "Behringer", numero: 7, posicao: "ME/MC", overall: 85 },
      { nome: "Renate Lingor", nomeCamisa: "Lingor", numero: 10, posicao: "MEI/MC", overall: 91 },
      { nome: "Simone Laudehr", nomeCamisa: "Laudehr", numero: 14, posicao: "MC/VOL", overall: 86 },
      { nome: "Kerstin Garefrekes", nomeCamisa: "Garefrekes", numero: 18, posicao: "MD/PD", overall: 88 },
      { nome: "Fatmire Bajramaj", nomeCamisa: "Bajramaj", numero: 19, posicao: "ME/PE", overall: 83 }
    ],

    atacantes: [
      { nome: "Sandra Smisek", nomeCamisa: "Smisek", numero: 8, posicao: "ATA", overall: 86 },
      { nome: "Birgit Prinz", nomeCamisa: "Prinz", numero: 9, posicao: "ATA", overall: 96 },
      { nome: "Anja Mittag", nomeCamisa: "Mittag", numero: 11, posicao: "ATA/PE", overall: 84 },
      { nome: "Martina Müller", nomeCamisa: "Müller", numero: 16, posicao: "ATA", overall: 81 },
      { nome: "Petra Wimbersky", nomeCamisa: "Wimbersky", numero: 20, posicao: "ATA/PD", overall: 82 }
    ]
  },
  brasil_2007: {
    nome: "Brasil",
    ano: 2007,
    campea: false,

    goleiras: [
      { nome: "Andréia Suntaque", nomeCamisa: "Andréia", numero: 1, posicao: "GOL", overall: 85 },
      { nome: "Bárbara", nomeCamisa: "Bárbara", numero: 12, posicao: "GOL", overall: 75 },
      { nome: "Thaís Picarte", nomeCamisa: "Thaís", numero: 21, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Elaine", nomeCamisa: "Elaine", numero: 2, posicao: "LD/MD", overall: 81 },
      { nome: "Aline Pellegrino", nomeCamisa: "Aline", numero: 3, posicao: "ZAG", overall: 85 },
      { nome: "Tânia Maranhão", nomeCamisa: "Tânia", numero: 4, posicao: "ZAG", overall: 84 },
      { nome: "Renata Costa", nomeCamisa: "R. Costa", numero: 5, posicao: "ZAG/VOL", overall: 82 },
      { nome: "Rosana", nomeCamisa: "Rosana", numero: 6, posicao: "LE/ME", overall: 86 },
      { nome: "Mônica", nomeCamisa: "Mônica", numero: 13, posicao: "ZAG", overall: 78 },
      { nome: "Simone", nomeCamisa: "Simone", numero: 16, posicao: "ZAG", overall: 77 },
      { nome: "Daiane Bagé", nomeCamisa: "Daiane", numero: 17, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Daniela Alves", nomeCamisa: "Daniela", numero: 7, posicao: "MC/MEI", overall: 88 },
      { nome: "Formiga", nomeCamisa: "Formiga", numero: 8, posicao: "VOL/MC", overall: 89 },
      { nome: "Maycon", nomeCamisa: "Maycon", numero: 9, posicao: "MC/VOL", overall: 82 },
      { nome: "Grazielle", nomeCamisa: "Grazielle", numero: 14, posicao: "MD/MC", overall: 78 },
      { nome: "Michele", nomeCamisa: "Michele", numero: 19, posicao: "MC", overall: 75 },
      { nome: "Ester", nomeCamisa: "Ester", numero: 20, posicao: "VOL", overall: 79 }
    ],

    atacantes: [
      { nome: "Marta", nomeCamisa: "Marta", numero: 10, posicao: "MEI/ATA", overall: 99 },
      { nome: "Cristiane", nomeCamisa: "Cristiane", numero: 11, posicao: "ATA", overall: 94 },
      { nome: "Kátia Cilene", nomeCamisa: "Kátia", numero: 15, posicao: "ATA", overall: 83 },
      { nome: "Pretinha", nomeCamisa: "Pretinha", numero: 18, posicao: "ATA/PE", overall: 82 }
    ]
  },
  noruega_2007: {
    nome: "Noruega",
    ano: 2007,
    campea: false,

    goleiras: [
      { nome: "Bente Nordby", nomeCamisa: "B. Nordby", numero: 1, posicao: "GOL", overall: 87 },
      { nome: "Erika Skarbø", nomeCamisa: "Skarbø", numero: 12, posicao: "GOL", overall: 75 },
      { nome: "Christine Colombo Nilsen", nomeCamisa: "Nilsen", numero: 13, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Ane Stangeland Horpestad", nomeCamisa: "Stangeland", numero: 2, posicao: "ZAG", overall: 86 },
      { nome: "Gunhild Følstad", nomeCamisa: "Følstad", numero: 3, posicao: "ZAG", overall: 81 },
      { nome: "Siri Nordby", nomeCamisa: "S. Nordby", numero: 5, posicao: "ZAG/LE", overall: 80 },
      { nome: "Camilla Huse", nomeCamisa: "Huse", numero: 6, posicao: "LE", overall: 78 },
      { nome: "Trine Rønning", nomeCamisa: "Rønning", numero: 7, posicao: "ZAG/VOL", overall: 84 },
      { nome: "Marit Fiane Christensen", nomeCamisa: "Christensen", numero: 19, posicao: "ZAG", overall: 82 }
    ],

    meio_campo: [
      { nome: "Ingvild Stensland", nomeCamisa: "Stensland", numero: 4, posicao: "VOL/MC", overall: 85 },
      { nome: "Solveig Gulbrandsen", nomeCamisa: "S. Gulbrandsen", numero: 8, posicao: "MC/MEI", overall: 87 },
      { nome: "Madeleine Giske", nomeCamisa: "Giske", numero: 15, posicao: "MC/ME", overall: 78 },
      { nome: "Marie Knutsen", nomeCamisa: "M. Knutsen", numero: 18, posicao: "MC/MD", overall: 79 },
      { nome: "Lene Storløkken", nomeCamisa: "Storløkken", numero: 21, posicao: "MC", overall: 76 }
    ],

    atacantes: [
      { nome: "Isabell Herlovsen", nomeCamisa: "Herlovsen", numero: 9, posicao: "ATA", overall: 83 },
      { nome: "Melissa Wiik", nomeCamisa: "Wiik", numero: 10, posicao: "ATA/PD", overall: 80 },
      { nome: "Leni Larsen Kaurin", nomeCamisa: "Kaurin", numero: 11, posicao: "PE/PD", overall: 79 },
      { nome: "Guro Knutsen", nomeCamisa: "G. Knutsen", numero: 14, posicao: "ATA/MD", overall: 78 },
      { nome: "Ragnhild Gulbrandsen", nomeCamisa: "R. Gulbrandsen", numero: 16, posicao: "ATA", overall: 86 },
      { nome: "Lene Mykjåland", nomeCamisa: "Mykjåland", numero: 17, posicao: "ATA/PE", overall: 77 },
      { nome: "Lise Klaveness", nomeCamisa: "Klaveness", numero: 20, posicao: "ATA/MEI", overall: 81 }
    ]
  },
  eua_2007: {
    nome: "Estados Unidos",
    ano: 2007,
    campea: false,

    goleiras: [
      { nome: "Hope Solo", nomeCamisa: "Solo", numero: 18, posicao: "GOL", overall: 88 },
      { nome: "Briana Scurry", nomeCamisa: "Scurry", numero: 1, posicao: "GOL", overall: 89 },
      { nome: "Nicole Barnhart", nomeCamisa: "Barnhart", numero: 21, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Christie Rampone", nomeCamisa: "Rampone", numero: 3, posicao: "ZAG", overall: 89 },
      { nome: "Kate Markgraf", nomeCamisa: "Markgraf", numero: 15, posicao: "ZAG", overall: 86 },
      { nome: "Cat Whitehill", nomeCamisa: "Whitehill", numero: 4, posicao: "ZAG", overall: 85 },
      { nome: "Stephanie Lopez", nomeCamisa: "Lopez", numero: 14, posicao: "LE/ZAG", overall: 82 },
      { nome: "Tina Ellertson", nomeCamisa: "Ellertson", numero: 8, posicao: "ZAG/LD", overall: 79 },
      { nome: "Marian Dalmy", nomeCamisa: "Dalmy", numero: 2, posicao: "LD/ZAG", overall: 77 }
    ],

    meio_campo: [
      { nome: "Shannon Boxx", nomeCamisa: "Boxx", numero: 7, posicao: "VOL/MC", overall: 87 },
      { nome: "Carli Lloyd", nomeCamisa: "Lloyd", numero: 11, posicao: "MC/MEI", overall: 84 },
      { nome: "Lori Chalupny", nomeCamisa: "Chalupny", numero: 17, posicao: "MC/LE", overall: 83 },
      { nome: "Aly Wagner", nomeCamisa: "Wagner", numero: 10, posicao: "MEI/MC", overall: 82 },
      { nome: "Leslie Osborne", nomeCamisa: "Osborne", numero: 5, posicao: "VOL", overall: 81 },
      { nome: "Angela Hucles", nomeCamisa: "Hucles", numero: 16, posicao: "MC", overall: 80 },
      { nome: "Marci Jobson", nomeCamisa: "Jobson", numero: 19, posicao: "MC/VOL", overall: 76 }
    ],

    atacantes: [
      { nome: "Abby Wambach", nomeCamisa: "Wambach", numero: 20, posicao: "ATA", overall: 95 },
      { nome: "Kristine Lilly", nomeCamisa: "Lilly", numero: 13, posicao: "ATA/ME", overall: 90 },
      { nome: "Heather O'Reilly", nomeCamisa: "O'Reilly", numero: 9, posicao: "PD/ATA", overall: 86 },
      { nome: "Lindsay Tarpley", nomeCamisa: "Tarpley", numero: 12, posicao: "ATA/MEI", overall: 83 },
      { nome: "Natasha Kai", nomeCamisa: "Kai", numero: 6, posicao: "ATA", overall: 80 }
    ]
  },
  coreia_do_norte_2007: {
    nome: "Coreia do Norte",
    ano: 2007,
    campea: false,

    goleiras: [
      { nome: "Phi Un-hui", nomeCamisa: "Phi U. H.", numero: 1, posicao: "GOL", overall: 78 },
      { nome: "Yun Hyong-hi", nomeCamisa: "Yun H. H.", numero: 18, posicao: "GOL", overall: 74 },
      { nome: "Jon Myong-hui", nomeCamisa: "Jon M. H.", numero: 21, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Kong Hye-ok", nomeCamisa: "Kong H. O.", numero: 16, posicao: "ZAG", overall: 81 },
      { nome: "Om Jong-ran", nomeCamisa: "Om J. R.", numero: 3, posicao: "ZAG/LE", overall: 80 },
      { nome: "Yun Song-mi", nomeCamisa: "Yun S. M.", numero: 4, posicao: "ZAG", overall: 79 },
      { nome: "Sonu Kyong-sun", nomeCamisa: "Sonu K. S.", numero: 15, posicao: "ZAG", overall: 78 },
      { nome: "Ahn Myong-song", nomeCamisa: "Ahn M. S.", numero: 5, posicao: "ZAG/LD", overall: 77 },
      { nome: "Jong Pok-sim", nomeCamisa: "Jong P. S.", numero: 19, posicao: "LE", overall: 76 },
      { nome: "Jang Ok-gyong", nomeCamisa: "Jang O. G.", numero: 14, posicao: "ZAG", overall: 75 },
      { nome: "Hong Myong-gum", nomeCamisa: "Hong M. G.", numero: 20, posicao: "LD", overall: 75 }
    ],

    meio_campo: [
      { nome: "Kim Kyong-hwa", nomeCamisa: "Kim K. H.", numero: 2, posicao: "MC/MD", overall: 82 },
      { nome: "Ri Un-gyong", nomeCamisa: "Ri U. G.", numero: 11, posicao: "MEI/MC", overall: 81 },
      { nome: "Ri Un-suk", nomeCamisa: "Ri U. S.", numero: 9, posicao: "VOL/MC", overall: 80 },
      { nome: "Ho Sun-hui", nomeCamisa: "Ho S. H.", numero: 7, posicao: "MC", overall: 79 },
      { nome: "Ri Un-hyang", nomeCamisa: "Ri U. H.", numero: 12, posicao: "MC/ME", overall: 77 },
      { nome: "Kim Ok-sim", nomeCamisa: "Kim O. S.", numero: 6, posicao: "VOL", overall: 76 }
    ],

    atacantes: [
      { nome: "Ri Kum-suk", nomeCamisa: "Ri K. S.", numero: 10, posicao: "ATA", overall: 87 },
      { nome: "Kil Son-hui", nomeCamisa: "Kil S. H.", numero: 8, posicao: "ATA/PD", overall: 82 },
      { nome: "Kim Yong-ae", nomeCamisa: "Kim Y. A.", numero: 17, posicao: "ATA/PE", overall: 78 }
    ]
  },
  china_2007: {
    nome: "China",
    ano: 2007,
    campea: false,

    goleiras: [
      { nome: "Zhang Yanru", nomeCamisa: "Zhang Yan", numero: 1, posicao: "GOL", overall: 81 },
      { nome: "Han Wenxia", nomeCamisa: "Han Wen", numero: 18, posicao: "GOL", overall: 76 },
      { nome: "Xu Meishuang", nomeCamisa: "Xu M. S.", numero: 21, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Li Jie", nomeCamisa: "Li Jie", numero: 3, posicao: "ZAG", overall: 83 },
      { nome: "Wang Kun", nomeCamisa: "Wang Kun", numero: 4, posicao: "ZAG", overall: 80 },
      { nome: "Pu Wei", nomeCamisa: "Pu Wei", numero: 11, posicao: "ZAG/VOL", overall: 82 },
      { nome: "Zhou Gaoping", nomeCamisa: "Zhou G. P.", numero: 2, posicao: "LE", overall: 78 },
      { nome: "Weng Xinzhi", nomeCamisa: "Weng X. Z.", numero: 15, posicao: "ZAG", overall: 77 },
      { nome: "Liu Yali", nomeCamisa: "Liu Y. L.", numero: 16, posicao: "LD/ZAG", overall: 76 },
      { nome: "Jiang Shuai", nomeCamisa: "Jiang S.", numero: 19, posicao: "ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Bi Yan", nomeCamisa: "Bi Yan", numero: 7, posicao: "VOL/MC", overall: 84 },
      { nome: "Pan Lina", nomeCamisa: "Pan L. N.", numero: 8, posicao: "MC/MEI", overall: 81 },
      { nome: "Xie Caixia", nomeCamisa: "Xie C. X.", numero: 6, posicao: "MD/MC", overall: 79 },
      { nome: "Song Xiaoli", nomeCamisa: "Song X. L.", numero: 5, posicao: "MC", overall: 78 },
      { nome: "Qu Feifei", nomeCamisa: "Qu F. F.", numero: 12, posicao: "MC", overall: 77 },
      { nome: "Li Dongna", nomeCamisa: "Li D. N.", numero: 13, posicao: "MC/ME", overall: 76 },
      { nome: "Zhang Ying", nomeCamisa: "Zhang Ying", numero: 20, posicao: "VOL", overall: 78 }
    ],

    atacantes: [
      { nome: "Han Duan", nomeCamisa: "Han Duan", numero: 9, posicao: "ATA", overall: 86 },
      { nome: "Ma Xiaoxu", nomeCamisa: "Ma Xiao", numero: 10, posicao: "ATA/MEI", overall: 85 },
      { nome: "Zhang Ouying", nomeCamisa: "Zhang Ouying", numero: 14, posicao: "ATA/PD", overall: 80 },
      { nome: "Liu Sa", nomeCamisa: "Liu Sa", numero: 17, posicao: "ATA", overall: 77 }
    ]
  },
  inglaterra_2007: {
    nome: "Inglaterra",
    ano: 2007,
    campea: false,

    goleiras: [
      { nome: "Rachel Brown", nomeCamisa: "Brown", numero: 1, posicao: "GOL", overall: 81 },
      { nome: "Siobhan Chamberlain", nomeCamisa: "Chamberlain", numero: 13, posicao: "GOL", overall: 76 },
      { nome: "Carly Telford", nomeCamisa: "Telford", numero: 21, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Faye White", nomeCamisa: "White", numero: 5, posicao: "ZAG", overall: 85 },
      { nome: "Alex Scott", nomeCamisa: "A. Scott", numero: 2, posicao: "LD/MD", overall: 85 },
      { nome: "Casey Stoney", nomeCamisa: "Stoney", numero: 3, posicao: "ZAG/LE", overall: 83 },
      { nome: "Rachel Unitt", nomeCamisa: "Unitt", numero: 14, posicao: "LE", overall: 82 },
      { nome: "Mary Phillip", nomeCamisa: "Phillip", numero: 6, posicao: "ZAG", overall: 81 },
      { nome: "Anita Asante", nomeCamisa: "Asante", numero: 12, posicao: "ZAG/VOL", overall: 80 },
      { nome: "Lindsay Johnson", nomeCamisa: "Johnson", numero: 20, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Fara Williams", nomeCamisa: "Williams", numero: 8, posicao: "MC/VOL", overall: 86 },
      { nome: "Karen Carney", nomeCamisa: "Carney", numero: 7, posicao: "MD/MEI", overall: 84 },
      { nome: "Rachel Yankey", nomeCamisa: "Yankey", numero: 11, posicao: "ME/PE", overall: 84 },
      { nome: "Katie Chapman", nomeCamisa: "Chapman", numero: 4, posicao: "VOL/MC", overall: 83 },
      { nome: "Jill Scott", nomeCamisa: "J. Scott", numero: 16, posicao: "MC", overall: 82 },
      { nome: "Sue Smith", nomeCamisa: "S. Smith", numero: 15, posicao: "ME/MC", overall: 79 },
      { nome: "Vicky Exley", nomeCamisa: "Exley", numero: 19, posicao: "MC", overall: 77 }
    ],

    atacantes: [
      { nome: "Kelly Smith", nomeCamisa: "K. Smith", numero: 10, posicao: "ATA/MEI", overall: 89 },
      { nome: "Eniola Aluko", nomeCamisa: "Aluko", numero: 9, posicao: "ATA/PD", overall: 83 },
      { nome: "Lianne Sanderson", nomeCamisa: "Sanderson", numero: 18, posicao: "ATA", overall: 81 },
      { nome: "Jody Handley", nomeCamisa: "Handley", numero: 17, posicao: "ATA", overall: 78 }
    ]
  },
  australia_2007: {
    nome: "Austrália",
    ano: 2007,
    campea: false,

    goleiras: [
      { nome: "Melissa Barbieri", nomeCamisa: "Barbieri", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Lydia Williams", nomeCamisa: "Williams", numero: 18, posicao: "GOL", overall: 76 },
      { nome: "Emma Wirkus", nomeCamisa: "Wirkus", numero: 21, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Cheryl Salisbury", nomeCamisa: "Salisbury", numero: 5, posicao: "ZAG", overall: 85 },
      { nome: "Dianne Alagich", nomeCamisa: "Alagich", numero: 4, posicao: "ZAG/LD", overall: 81 },
      { nome: "Kate McShea", nomeCamisa: "McShea", numero: 2, posicao: "ZAG", overall: 79 },
      { nome: "Clare Polkinghorne", nomeCamisa: "Polkinghorne", numero: 19, posicao: "ZAG/VOL", overall: 78 },
      { nome: "Rhian Davies", nomeCamisa: "Davies", numero: 6, posicao: "ZAG/LE", overall: 77 },
      { nome: "Thea Slatyer", nomeCamisa: "Slatyer", numero: 13, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Heather Garriock", nomeCamisa: "Garriock", numero: 7, posicao: "ME/MC", overall: 84 },
      { nome: "Collette McCallum", nomeCamisa: "McCallum", numero: 14, posicao: "MC/MEI", overall: 83 },
      { nome: "Joanne Peters", nomeCamisa: "Peters", numero: 10, posicao: "MC/VOL", overall: 82 },
      { nome: "Sally Shipard", nomeCamisa: "Shipard", numero: 15, posicao: "VOL/MC", overall: 80 },
      { nome: "Alicia Ferguson", nomeCamisa: "Ferguson", numero: 3, posicao: "MC", overall: 79 },
      { nome: "Lauren Colthorpe", nomeCamisa: "Colthorpe", numero: 16, posicao: "MC/ZAG", overall: 77 },
      { nome: "Joanne Burgess", nomeCamisa: "Burgess", numero: 20, posicao: "MD/MC", overall: 76 }
    ],

    atacantes: [
      { nome: "Lisa De Vanna", nomeCamisa: "De Vanna", numero: 11, posicao: "ATA", overall: 87 },
      { nome: "Sarah Walsh", nomeCamisa: "Walsh", numero: 9, posicao: "ATA", overall: 85 },
      { nome: "Kate Gill", nomeCamisa: "Gill", numero: 12, posicao: "ATA", overall: 82 },
      { nome: "Caitlin Munoz", nomeCamisa: "Munoz", numero: 8, posicao: "ATA/PE", overall: 80 },
      { nome: "Danielle Small", nomeCamisa: "Small", numero: 17, posicao: "ATA/PD", overall: 77 }
    ]
  },
  // Copa 2003 - Seleções dos playoffs
alemanha_2003: {
    nome: "Alemanha",
    ano: 2003,
    campea: true,

    goleiras: [
      { nome: "Silke Rottenberg", nomeCamisa: "Rottenberg", numero: 1, posicao: "GOL", overall: 94 },
      { nome: "Nadine Angerer", nomeCamisa: "Angerer", numero: 15, posicao: "GOL", overall: 87 }
    ],

    defensoras: [
      { nome: "Steffi Jones", nomeCamisa: "Jones", numero: 5, posicao: "ZAG", overall: 90 },
      { nome: "Sandra Minnert", nomeCamisa: "Minnert", numero: 13, posicao: "ZAG", overall: 85 },
      { nome: "Ariane Hingst", nomeCamisa: "Hingst", numero: 17, posicao: "ZAG/VOL", overall: 90 },
      { nome: "Kerstin Stegemann", nomeCamisa: "Stegemann", numero: 2, posicao: "LD/ZAG", overall: 88 },
      { nome: "Nia Künzer", nomeCamisa: "Künzer", numero: 4, posicao: "ZAG", overall: 82 },
      { nome: "Linda Bresonik", nomeCamisa: "Bresonik", numero: 3, posicao: "ZAG/LE", overall: 81 },
      { nome: "Stefanie Gottschlich", nomeCamisa: "Gottschlich", numero: 19, posicao: "LE", overall: 80 },
      { nome: "Sonja Fuss", nomeCamisa: "Fuss", numero: 12, posicao: "ZAG", overall: 78 }
    ],

    meio_campo: [
      { nome: "Bettina Wiegmann", nomeCamisa: "Wiegmann", numero: 10, posicao: "MC/MEI", overall: 90 },
      { nome: "Renate Lingor", nomeCamisa: "Lingor", numero: 6, posicao: "VOL/MC", overall: 88 },
      { nome: "Maren Meinert", nomeCamisa: "Meinert", numero: 14, posicao: "MEI/ATA", overall: 87 },
      { nome: "Kerstin Garefrekes", nomeCamisa: "Garefrekes", numero: 18, posicao: "MD/ATA", overall: 86 },
      { nome: "Pia Wunderlich", nomeCamisa: "Wunderlich", numero: 7, posicao: "ME/MC", overall: 83 },
      { nome: "Viola Odebrecht", nomeCamisa: "Odebrecht", numero: 16, posicao: "VOL", overall: 81 }
    ],

    atacantes: [
      { nome: "Birgit Prinz", nomeCamisa: "Prinz", numero: 9, posicao: "ATA", overall: 98 },
      { nome: "Sandra Smisek", nomeCamisa: "Smisek", numero: 8, posicao: "ATA", overall: 85 },
      { nome: "Conny Pohlers", nomeCamisa: "Pohlers", numero: 20, posicao: "ATA", overall: 83 },
      { nome: "Martina Müller", nomeCamisa: "Müller", numero: 11, posicao: "ATA", overall: 82 }
    ]
  },
  suecia_2003: {
    nome: "Suécia",
    ano: 2003,
    campea: false,

    goleiras: [
      { nome: "Caroline Jönsson", nomeCamisa: "Jönsson", numero: 1, posicao: "GOL", overall: 86 },
      { nome: "Sofia Lundgren", nomeCamisa: "Lundgren", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Hedvig Lindahl", nomeCamisa: "Lindahl", numero: 21, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Hanna Marklund", nomeCamisa: "Marklund", numero: 4, posicao: "ZAG", overall: 90 },
      { nome: "Kristin Bengtsson", nomeCamisa: "Bengtsson", numero: 5, posicao: "LE", overall: 83 },
      { nome: "Jane Törnqvist", nomeCamisa: "Törnqvist", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Karolina Westberg", nomeCamisa: "Westberg", numero: 2, posicao: "ZAG", overall: 80 },
      { nome: "Sara Larsson", nomeCamisa: "Larsson", numero: 7, posicao: "ZAG", overall: 79 },
      { nome: "Frida Östberg", nomeCamisa: "Östberg", numero: 18, posicao: "ZAG/VOL", overall: 78 },
      { nome: "Sara Call", nomeCamisa: "Call", numero: 19, posicao: "LE", overall: 76 }
    ],

    meio_campo: [
      { nome: "Malin Moström", nomeCamisa: "Moström", numero: 6, posicao: "MC/MEI", overall: 88 },
      { nome: "Therese Sjögran", nomeCamisa: "Sjögran", numero: 15, posicao: "ME/MC", overall: 85 },
      { nome: "Malin Andersson", nomeCamisa: "Andersson", numero: 9, posicao: "VOL/MC", overall: 84 },
      { nome: "Linda Fagerström", nomeCamisa: "Fagerström", numero: 14, posicao: "MC", overall: 81 },
      { nome: "Frida Nordin", nomeCamisa: "Nordin", numero: 8, posicao: "MC", overall: 79 },
      { nome: "Anna Sjöström", nomeCamisa: "Sjöström", numero: 17, posicao: "MD/MC", overall: 78 }
    ],

    atacantes: [
      { nome: "Hanna Ljungberg", nomeCamisa: "Ljungberg", numero: 10, posicao: "ATA", overall: 90 },
      { nome: "Victoria Svensson", nomeCamisa: "Svensson", numero: 11, posicao: "ATA", overall: 89 },
      { nome: "Josefine Öqvist", nomeCamisa: "Öqvist", numero: 20, posicao: "ATA/ME", overall: 83 },
      { nome: "Sara Johansson", nomeCamisa: "Johansson", numero: 13, posicao: "ATA", overall: 77 },
      { nome: "Salina Olsson", nomeCamisa: "Olsson", numero: 16, posicao: "ATA", overall: 76 }
    ]
  },
  eua_2003: {
    nome: "Estados Unidos",
    ano: 2003,
    campea: false,

    goleiras: [
      { nome: "Briana Scurry", nomeCamisa: "Scurry", numero: 1, posicao: "GOL", overall: 90 },
      { nome: "Siri Mullinix", nomeCamisa: "Mullinix", numero: 18, posicao: "GOL", overall: 80 }
    ],

    defensoras: [
      { nome: "Joy Fawcett", nomeCamisa: "Fawcett", numero: 14, posicao: "ZAG", overall: 87 },
      { nome: "Brandi Chastain", nomeCamisa: "Chastain", numero: 6, posicao: "LE/ZAG", overall: 86 },
      { nome: "Christie Rampone", nomeCamisa: "Rampone", numero: 3, posicao: "ZAG/LD", overall: 85 },
      { nome: "Kate Sobrero", nomeCamisa: "Sobrero", numero: 15, posicao: "ZAG", overall: 84 },
      { nome: "Cat Reddick", nomeCamisa: "Reddick", numero: 4, posicao: "ZAG", overall: 82 },
      { nome: "Danielle Slaton", nomeCamisa: "Slaton", numero: 17, posicao: "LE", overall: 79 },
      { nome: "Kylie Bivens", nomeCamisa: "Bivens", numero: 2, posicao: "ZAG/LD", overall: 78 }
    ],

    meio_campo: [
      { nome: "Kristine Lilly", nomeCamisa: "Lilly", numero: 13, posicao: "ME/PE", overall: 89 },
      { nome: "Julie Foudy", nomeCamisa: "Foudy", numero: 11, posicao: "MC/VOL", overall: 88 },
      { nome: "Shannon Boxx", nomeCamisa: "Boxx", numero: 7, posicao: "VOL", overall: 87 },
      { nome: "Aly Wagner", nomeCamisa: "Wagner", numero: 10, posicao: "MEI/MC", overall: 83 },
      { nome: "Angela Hucles", nomeCamisa: "Hucles", numero: 19, posicao: "MC/VOL", overall: 81 },
      { nome: "Tiffany Roberts", nomeCamisa: "Roberts", numero: 5, posicao: "MD/MC", overall: 80 }
    ],

    atacantes: [
      { nome: "Mia Hamm", nomeCamisa: "Hamm", numero: 9, posicao: "ATA", overall: 95 },
      { nome: "Abby Wambach", nomeCamisa: "Wambach", numero: 20, posicao: "ATA", overall: 89 },
      { nome: "Tiffeny Milbrett", nomeCamisa: "Milbrett", numero: 16, posicao: "ATA", overall: 86 },
      { nome: "Cindy Parlow", nomeCamisa: "Parlow", numero: 12, posicao: "ATA/MEI", overall: 84 },
      { nome: "Shannon MacMillan", nomeCamisa: "MacMillan", numero: 8, posicao: "ATA/PD", overall: 83 }
    ]
  },
  canada_2003: {
    nome: "Canadá",
    ano: 2003,
    campea: false,

    goleiras: [
      { nome: "Karina LeBlanc", nomeCamisa: "LeBlanc", numero: 20, posicao: "GOL", overall: 83 },
      { nome: "Taryn Swiatek", nomeCamisa: "Swiatek", numero: 1, posicao: "GOL", overall: 79 },
      { nome: "Erin McLeod", nomeCamisa: "McLeod", numero: 19, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Sharolta Nonen", nomeCamisa: "Nonen", numero: 11, posicao: "ZAG", overall: 84 },
      { nome: "Isabelle Morneau", nomeCamisa: "Morneau", numero: 7, posicao: "ZAG/LD", overall: 81 },
      { nome: "Sasha Andrews", nomeCamisa: "Andrews", numero: 6, posicao: "ZAG", overall: 79 },
      { nome: "Tanya Dennis", nomeCamisa: "Dennis", numero: 4, posicao: "LE", overall: 77 },
      { nome: "Marie-Ève Nault", nomeCamisa: "Nault", numero: 21, posicao: "ZAG/LE", overall: 76 }
    ],

    meio_campo: [
      { nome: "Andrea Neil", nomeCamisa: "Neil", numero: 13, posicao: "MC/VOL", overall: 85 },
      { nome: "Diana Matheson", nomeCamisa: "Matheson", numero: 15, posicao: "MEI/MC", overall: 82 },
      { nome: "Rhian Wilkinson", nomeCamisa: "Wilkinson", numero: 8, posicao: "MD/LD", overall: 81 },
      { nome: "Randee Hermus", nomeCamisa: "Hermus", numero: 5, posicao: "VOL/ZAG", overall: 80 },
      { nome: "Brittany Timko", nomeCamisa: "Timko", numero: 16, posicao: "ME/PE", overall: 78 },
      { nome: "Carmelina Moscato", nomeCamisa: "Moscato", numero: 14, posicao: "MC/ZAG", overall: 77 }
    ],

    atacantes: [
      { nome: "Christine Sinclair", nomeCamisa: "Sinclair", numero: 12, posicao: "ATA", overall: 88 },
      { nome: "Charmaine Hooper", nomeCamisa: "Hooper", numero: 10, posicao: "ATA/MEI", overall: 87 },
      { nome: "Kara Lang", nomeCamisa: "Lang", numero: 9, posicao: "ATA/PD", overall: 84 },
      { nome: "Christine Latham", nomeCamisa: "Latham", numero: 17, posicao: "ATA", overall: 80 },
      { nome: "Silvana Burtini", nomeCamisa: "Burtini", numero: 18, posicao: "ATA", overall: 78 }
    ]
  },
  noruega_2003: {
    nome: "Noruega",
    ano: 2003,
    campea: false,

    goleiras: [
      { nome: "Bente Nordby", nomeCamisa: "Nordby", numero: 1, posicao: "GOL", overall: 87 },
      { nome: "Silje Vesterbekkmo", nomeCamisa: "Vesterbekkmo", numero: 12, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Brit Sandaune", nomeCamisa: "Sandaune", numero: 2, posicao: "ZAG/LE", overall: 83 },
      { nome: "Ane Stangeland", nomeCamisa: "Stangeland", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Monica Knudsen", nomeCamisa: "Knudsen", numero: 4, posicao: "ZAG/LD", overall: 80 },
      { nome: "Anne Tønnessen", nomeCamisa: "Tønnessen", numero: 13, posicao: "ZAG", overall: 79 },
      { nome: "Karin Bredland", nomeCamisa: "Bredland", numero: 5, posicao: "ZAG", overall: 78 },
      { nome: "Marit Fiane Christensen", nomeCamisa: "Christensen", numero: 15, posicao: "ZAG", overall: 77 },
      { nome: "Gunhild Følstad", nomeCamisa: "Følstad", numero: 16, posicao: "LE", overall: 76 }
    ],

    meio_campo: [
      { nome: "Hege Riise", nomeCamisa: "Riise", numero: 6, posicao: "MC/MEI", overall: 89 },
      { nome: "Solveig Gulbrandsen", nomeCamisa: "Gulbrandsen", numero: 8, posicao: "MEI/MC", overall: 85 },
      { nome: "Trine Rønning", nomeCamisa: "Rønning", numero: 7, posicao: "VOL/ZAG", overall: 84 },
      { nome: "Unni Lehn", nomeCamisa: "Lehn", numero: 10, posicao: "MD/MC", overall: 83 },
      { nome: "Lise Klaveness", nomeCamisa: "Klaveness", numero: 20, posicao: "ME/MC", overall: 81 }
    ],

    atacantes: [
      { nome: "Marianne Pettersen", nomeCamisa: "Pettersen", numero: 11, posicao: "ATA", overall: 88 },
      { nome: "Dagny Mellgren", nomeCamisa: "Mellgren", numero: 14, posicao: "ATA/PD", overall: 86 },
      { nome: "Anita Rapp", nomeCamisa: "Rapp", numero: 9, posicao: "ATA/ME", overall: 82 },
      { nome: "Linda Ørmen", nomeCamisa: "Ørmen", numero: 17, posicao: "ATA", overall: 77 }
    ]
  },
  russia_2003: {
    nome: "Rússia",
    ano: 2003,
    campea: false,

    goleiras: [
      { nome: "Svetlana Petko", nomeCamisa: "Petko", numero: 1, posicao: "GOL", overall: 78 },
      { nome: "Alla Volkova", nomeCamisa: "Volkova", numero: 12, posicao: "GOL", overall: 75 },
      { nome: "Maria Pigaleva", nomeCamisa: "Pigaleva", numero: 20, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Marina Burakova", nomeCamisa: "Burakova", numero: 2, posicao: "ZAG/LD", overall: 80 },
      { nome: "Tatiana Zaitseva", nomeCamisa: "Zaitseva", numero: 3, posicao: "ZAG", overall: 79 },
      { nome: "Galina Komarova", nomeCamisa: "Komarova", numero: 6, posicao: "ZAG/VOL", overall: 78 },
      { nome: "Marina Saenko", nomeCamisa: "Saenko", numero: 4, posicao: "ZAG", overall: 77 },
      { nome: "Vera Stroukova", nomeCamisa: "Stroukova", numero: 5, posicao: "LE", overall: 76 },
      { nome: "Anastasia Pustovoitova", nomeCamisa: "Pustovoitova", numero: 14, posicao: "ZAG", overall: 75 },
      { nome: "Maria Diatchkova", nomeCamisa: "Diatchkova", numero: 18, posicao: "LE/ZAG", overall: 74 }
    ],

    meio_campo: [
      { nome: "Elena Fomina", nomeCamisa: "Fomina", numero: 13, posicao: "MEI/MC", overall: 83 },
      { nome: "Tatiana Egorova", nomeCamisa: "Egorova", numero: 7, posicao: "MC/VOL", overall: 82 },
      { nome: "Alexandra Svetlitskaya", nomeCamisa: "Svetlitskaya", numero: 8, posicao: "ME/MC", overall: 81 },
      { nome: "Tatiana Verezubova", nomeCamisa: "Verezubova", numero: 15, posicao: "MC", overall: 79 },
      { nome: "Oxana Shmachkova", nomeCamisa: "Shmachkova", numero: 19, posicao: "ME/LE", overall: 78 },
      { nome: "Tatiana Skotnikova", nomeCamisa: "Skotnikova", numero: 10, posicao: "VOL", overall: 77 },
      { nome: "Marina Kolomiets", nomeCamisa: "Kolomiets", numero: 16, posicao: "MD/MC", overall: 76 }
    ],

    atacantes: [
      { nome: "Natalia Barbashina", nomeCamisa: "Barbashina", numero: 11, posicao: "ATA", overall: 84 },
      { nome: "Olga Letyushova", nomeCamisa: "Letyushova", numero: 17, posicao: "ATA/PD", overall: 82 },
      { nome: "Elena Danilova", nomeCamisa: "Danilova", numero: 9, posicao: "ATA", overall: 78 }
    ]
  },
  brasil_2003: {
    nome: "Brasil",
    ano: 2003,
    campea: false,

    goleiras: [
      { nome: "Andréia Suntaque", nomeCamisa: "Andréia", numero: 1, posicao: "GOL", overall: 87 },
      { nome: "Giselle", nomeCamisa: "Giselle", numero: 12, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Juliana Cabral", nomeCamisa: "Juliana", numero: 3, posicao: "ZAG", overall: 86 },
      { nome: "Tânia Maranhão", nomeCamisa: "Tânia", numero: 4, posicao: "ZAG", overall: 85 },
      { nome: "Simone Jatobá", nomeCamisa: "Simone", numero: 2, posicao: "LD/ZAG", overall: 82 },
      { nome: "Rosana", nomeCamisa: "Rosana", numero: 14, posicao: "LE/ME", overall: 82 },
      { nome: "Michele", nomeCamisa: "Michele", numero: 6, posicao: "LE", overall: 79 },
      { nome: "Mônica de Paula", nomeCamisa: "Mônica", numero: 13, posicao: "ZAG", overall: 78 },
      { nome: "Renata Diniz", nomeCamisa: "R. Diniz", numero: 15, posicao: "ZAG", overall: 77 }
    ],

    meio_campo: [
      { nome: "Formiga", nomeCamisa: "Formiga", numero: 8, posicao: "MC/VOL", overall: 88 },
      { nome: "Daniela Alves", nomeCamisa: "Daniela", numero: 7, posicao: "MEI/MC", overall: 85 },
      { nome: "Renata Costa", nomeCamisa: "Renata Costa", numero: 5, posicao: "VOL/ZAG", overall: 81 },
      { nome: "Maicon", nomeCamisa: "Maicon", numero: 18, posicao: "MC/ME", overall: 79 },
      { nome: "Priscila", nomeCamisa: "Priscila", numero: 19, posicao: "ME/MD", overall: 77 }
    ],

    atacantes: [
      { nome: "Kátia Cilene", nomeCamisa: "Kátia", numero: 17, posicao: "ATA", overall: 91 },
      { nome: "Marta", nomeCamisa: "Marta", numero: 10, posicao: "ATA/MEI", overall: 90 },
      { nome: "Kelly", nomeCamisa: "Kelly", numero: 9, posicao: "ATA/MEI", overall: 84 },
      { nome: "Cristiane", nomeCamisa: "Cristiane", numero: 11, posicao: "ATA", overall: 82 },
      { nome: "Milene Domingues", nomeCamisa: "Milene", numero: 20, posicao: "MEI/ATA", overall: 78 }
    ]
  },
  china_2003: {
    nome: "China",
    ano: 2003,
    campea: false,

    goleiras: [
      { nome: "Han Wenxia", nomeCamisa: "Han W. X.", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Zhao Yan", nomeCamisa: "Zhao Yan", numero: 18, posicao: "GOL", overall: 77 }
    ],

    defensoras: [
      { nome: "Fan Yunjie", nomeCamisa: "Fan Y. J.", numero: 5, posicao: "ZAG", overall: 84 },
      { nome: "Li Jie", nomeCamisa: "Li J.", numero: 3, posicao: "ZAG", overall: 82 },
      { nome: "Liu Yali", nomeCamisa: "Liu Y. L.", numero: 20, posicao: "LE/ZAG", overall: 80 },
      { nome: "Gao Hongxia", nomeCamisa: "Gao H. X.", numero: 4, posicao: "ZAG", overall: 79 },
      { nome: "Sun Rui", nomeCamisa: "Sun R.", numero: 2, posicao: "LD/ME", overall: 78 }
    ],

    meio_campo: [
      { nome: "Pu Wei", nomeCamisa: "Pu Wei", numero: 11, posicao: "MC/MEI", overall: 86 },
      { nome: "Zhao Lihong", nomeCamisa: "Zhao L. H.", numero: 6, posicao: "ME/MC", overall: 84 },
      { nome: "Wang Liping", nomeCamisa: "Wang L. P.", numero: 7, posicao: "MD/LD", overall: 82 },
      { nome: "Liu Ying", nomeCamisa: "Liu Y.", numero: 19, posicao: "VOL/MC", overall: 81 },
      { nome: "Pan Lina", nomeCamisa: "Pan L. N.", numero: 15, posicao: "MC", overall: 78 },
      { nome: "Qu Feifei", nomeCamisa: "Qu F. F.", numero: 12, posicao: "MC", overall: 77 }
    ],

    atacantes: [
      { nome: "Sun Wen", nomeCamisa: "Sun W.", numero: 9, posicao: "ATA/MEI", overall: 88 },
      { nome: "Bai Jie", nomeCamisa: "Bai J.", numero: 14, posicao: "ATA", overall: 85 },
      { nome: "Han Duan", nomeCamisa: "Han D.", numero: 10, posicao: "ATA", overall: 83 },
      { nome: "Zhang Ouying", nomeCamisa: "Zhang O. Y.", numero: 8, posicao: "ATA/PD", overall: 80 },
      { nome: "Bi Yan", nomeCamisa: "Bi Y.", numero: 17, posicao: "MEI/ATA", overall: 79 }
    ]
  },
  // Copa 1999 - Seleções Playoffs
  eua_1999: {
    nome: "Estados Unidos",
    ano: 1999,
    campea: true,

    goleiras: [
      { nome: "Briana Scurry", nomeCamisa: "Scurry", numero: 1, posicao: "GOL", overall: 93 },
      { nome: "Saskia Webber", nomeCamisa: "Webber", numero: 18, posicao: "GOL", overall: 78 },
      { nome: "Tracy Ducar", nomeCamisa: "Ducar", numero: 20, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Joy Fawcett", nomeCamisa: "Fawcett", numero: 14, posicao: "ZAG", overall: 88 },
      { nome: "Carla Overbeck", nomeCamisa: "Overbeck", numero: 4, posicao: "ZAG", overall: 87 },
      { nome: "Brandi Chastain", nomeCamisa: "Chastain", numero: 6, posicao: "LE/ZAG", overall: 86 },
      { nome: "Kate Sobrero", nomeCamisa: "Sobrero", numero: 20, posicao: "ZAG", overall: 83 }, 
      { nome: "Lorrie Fair", nomeCamisa: "Fair", numero: 2, posicao: "ZAG/VOL", overall: 80 },
      { nome: "Christie Pearce", nomeCamisa: "Pearce", numero: 3, posicao: "ZAG/LD", overall: 79 },
      { nome: "Sara Whalen", nomeCamisa: "Whalen", numero: 7, posicao: "LD/MC", overall: 77 }
    ],

    meio_campo: [
      { nome: "Michelle Akers", nomeCamisa: "Akers", numero: 10, posicao: "VOL/MC", overall: 91 },
      { nome: "Kristine Lilly", nomeCamisa: "Lilly", numero: 13, posicao: "ME/ATA", overall: 90 },
      { nome: "Julie Foudy", nomeCamisa: "Foudy", numero: 11, posicao: "MC/MEI", overall: 87 },
      { nome: "Shannon MacMillan", nomeCamisa: "MacMillan", numero: 8, posicao: "ME/ATA", overall: 85 },
      { nome: "Tisha Venturini", nomeCamisa: "Venturini", numero: 15, posicao: "MC/MEI", overall: 82 },
      { nome: "Tiffany Roberts", nomeCamisa: "Roberts", numero: 5, posicao: "VOL/MC", overall: 78 }
    ],

    atacantes: [
      { nome: "Mia Hamm", nomeCamisa: "Hamm", numero: 9, posicao: "ATA/MEI", overall: 97 },
      { nome: "Tiffeny Milbrett", nomeCamisa: "Milbrett", numero: 16, posicao: "ATA", overall: 88 },
      { nome: "Cindy Parlow", nomeCamisa: "Parlow", numero: 12, posicao: "ATA/MEI", overall: 84 },
      { nome: "Danielle Fotopoulos", nomeCamisa: "Fotopoulos", numero: 19, posicao: "ATA", overall: 79 }
    ]
  },
  china_1999: {
    nome: "China",
    ano: 1999,
    campea: false,

    goleiras: [
      { nome: "Gao Hong", nomeCamisa: "Gao H.", numero: 18, posicao: "GOL", overall: 89 },
      { nome: "Han Wenxia", nomeCamisa: "Han W. X.", numero: 1, posicao: "GOL", overall: 78 }
    ],

    defensoras: [
      { nome: "Fan Yunjie", nomeCamisa: "Fan Y. J.", numero: 3, posicao: "ZAG", overall: 90 },
      { nome: "Wen Lirong", nomeCamisa: "Wen L. R.", numero: 12, posicao: "ZAG", overall: 85 },
      { nome: "Bai Jie", nomeCamisa: "Bai J.", numero: 14, posicao: "LE/ME", overall: 84 },
      { nome: "Xie Huilin", nomeCamisa: "Xie H. L.", numero: 5, posicao: "ZAG", overall: 83 },
      { nome: "Man Yanling", nomeCamisa: "Man Y. L.", numero: 4, posicao: "ZAG/LD", overall: 80 },
      { nome: "Gao Hongxia", nomeCamisa: "Gao H. X.", numero: 19, posicao: "ZAG", overall: 79 },
      { nome: "Wang Jingxia", nomeCamisa: "Wang J. X.", numero: 20, posicao: "ZAG/LE", overall: 77 }
    ],

    meio_campo: [
      { nome: "Liu Ailing", nomeCamisa: "Liu A. L.", numero: 10, posicao: "MEI/MC", overall: 90 },
      { nome: "Zhao Lihong", nomeCamisa: "Zhao L. H.", numero: 6, posicao: "ME/MC", overall: 86 },
      { nome: "Liu Ying", nomeCamisa: "Liu Y.", numero: 13, posicao: "VOL/MC", overall: 84 },
      { nome: "Wang Liping", nomeCamisa: "Wang L. P.", numero: 2, posicao: "MD/LD", overall: 83 },
      { nome: "Pu Wei", nomeCamisa: "Pu W.", numero: 11, posicao: "MC", overall: 80 },
      { nome: "Zhu Jing", nomeCamisa: "Zhu J.", numero: 17, posicao: "MC/MEI", overall: 79 }
    ],

    atacantes: [
      { nome: "Sun Wen", nomeCamisa: "Sun Wen", numero: 9, posicao: "ATA/MEI", overall: 92 },
      { nome: "Jin Yan", nomeCamisa: "Jin Yan", numero: 8, posicao: "ATA", overall: 85 },
      { nome: "Zhang Ouying", nomeCamisa: "Zhang O. Y.", numero: 7, posicao: "ATA/PD", overall: 83 },
      { nome: "Qiu Haiyan", nomeCamisa: "Qiu H. Y.", numero: 15, posicao: "ATA", overall: 78 }
    ]
  },
  noruega_1999: {
    nome: "Noruega",
    ano: 1999,
    campea: false,

    goleiras: [
      { nome: "Bente Nordby", nomeCamisa: "Nordby", numero: 1, posicao: "GOL", overall: 88 },
      { nome: "Astrid Johannessen", nomeCamisa: "Johannessen", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Ingeborg Hovland", nomeCamisa: "Hovland", numero: 21, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Linda Medalen", nomeCamisa: "Medalen", numero: 10, posicao: "ZAG/LIB", overall: 89 },
      { nome: "Gøril Kringen", nomeCamisa: "Kringen", numero: 3, posicao: "ZAG", overall: 84 },
      { nome: "Brit Sandaune", nomeCamisa: "Sandaune", numero: 2, posicao: "LE/ZAG", overall: 82 },
      { nome: "Anne Nymark Andersen", nomeCamisa: "A. Andersen", numero: 14, posicao: "ZAG/VOL", overall: 80 },
      { nome: "Henriette Viker", nomeCamisa: "Viker", numero: 5, posicao: "ZAG", overall: 78 },
      { nome: "Tone Gunn Frustol", nomeCamisa: "Frustol", numero: 18, posicao: "LD/ZAG", overall: 77 }
    ],

    meio_campo: [
      { nome: "Hege Riise", nomeCamisa: "Riise", numero: 6, posicao: "MEI/MC", overall: 90 },
      { nome: "Unni Lehn", nomeCamisa: "Lehn", numero: 20, posicao: "ME/MC", overall: 85 },
      { nome: "Tone Haugen", nomeCamisa: "Haugen", numero: 7, posicao: "MD/MC", overall: 82 },
      { nome: "Monica Knudsen", nomeCamisa: "Knudsen", numero: 8, posicao: "MC/VOL", overall: 81 },
      { nome: "Solveig Gulbrandsen", nomeCamisa: "S. Gulbrandsen", numero: 16, posicao: "MC/MEI", overall: 80 },
      { nome: "Silje Jørgensen", nomeCamisa: "Jørgensen", numero: 4, posicao: "VOL/MC", overall: 78 },
      { nome: "Linda Ørmen", nomeCamisa: "Ørmen", numero: 19, posicao: "MC", overall: 77 }
    ],

    atacantes: [
      { nome: "Ann Kristin Aarønes", nomeCamisa: "Aarønes", numero: 9, posicao: "ATA", overall: 88 },
      { nome: "Marianne Pettersen", nomeCamisa: "Pettersen", numero: 11, posicao: "ATA", overall: 87 },
      { nome: "Dagny Mellgren", nomeCamisa: "Mellgren", numero: 15, posicao: "ATA/PD", overall: 83 },
      { nome: "Ragnhild Gulbrandsen", nomeCamisa: "R. Gulbrandsen", numero: 13, posicao: "ATA", overall: 82 },
      { nome: "Anita Rapp", nomeCamisa: "Rapp", numero: 17, posicao: "ATA/ME", overall: 79 }
    ]
  },
  brasil_1999: {
    nome: "Brasil",
    ano: 1999,
    campea: false,

    goleiras: [
      { nome: "Maravilha", nomeCamisa: "Maravilha", numero: 1, posicao: "GOL", overall: 89 },
      { nome: "Andréia Suntaque", nomeCamisa: "Andréia", numero: 12, posicao: "GOL", overall: 83 } 
    ],

    defensoras: [
      { nome: "Juliana Cabral", nomeCamisa: "Juliana", numero: 6, posicao: "ZAG/LIB", overall: 85 },
      { nome: "Elane", nomeCamisa: "Elane", numero: 3, posicao: "ZAG", overall: 83 },
      { nome: "Tânia Maranhão", nomeCamisa: "Tânia", numero: 4, posicao: "ZAG", overall: 82 },
      { nome: "Nenê", nomeCamisa: "Nenê", numero: 2, posicao: "ZAG/LD", overall: 80 },
      { nome: "Fanta", nomeCamisa: "Fanta", numero: 13, posicao: "ZAG", overall: 78 },
      { nome: "Marisa", nomeCamisa: "Marisa", numero: 16, posicao: "ZAG/LE", overall: 76 }
    ],

    meio_campo: [
      { nome: "Sissi", nomeCamisa: "Sissi", numero: 10, posicao: "MEI/ATA", overall: 98 },
      { nome: "Formiga", nomeCamisa: "Formiga", numero: 8, posicao: "VOL/MC", overall: 90 },
      { nome: "Maycon", nomeCamisa: "Maycon", numero: 7, posicao: "MC/ME", overall: 83 },
      { nome: "Suzana", nomeCamisa: "Suzana", numero: 11, posicao: "ME/MEI", overall: 81 },
      { nome: "Cidinha", nomeCamisa: "Cidinha", numero: 5, posicao: "VOL", overall: 80 },
      { nome: "Raquel", nomeCamisa: "Raquel", numero: 15, posicao: "MC", overall: 78 },
      { nome: "Priscila", nomeCamisa: "Priscila", numero: 18, posicao: "LD/MC", overall: 77 },
      { nome: "Valéria", nomeCamisa: "Valéria", numero: 19, posicao: "MC", overall: 75 },
      { nome: "Devani", nomeCamisa: "Devani", numero: 20, posicao: "MC", overall: 74 }
    ],

    atacantes: [
      { nome: "Pretinha", nomeCamisa: "Pretinha", numero: 17, posicao: "ATA", overall: 88 },
      { nome: "Kátia Cilene", nomeCamisa: "Kátia", numero: 9, posicao: "ATA", overall: 87 },
      { nome: "Grazielle", nomeCamisa: "Grazielle", numero: 14, posicao: "ATA/PD", overall: 85 } 
    ]
  },
  russia_1999: {
    nome: "Rússia",
    ano: 1999,
    campea: false,

    goleiras: [
      { nome: "Svetlana Petko", nomeCamisa: "Petko", numero: 1, posicao: "GOL", overall: 80 },
      { nome: "Larissa Kapitonova", nomeCamisa: "Kapitonova", numero: 20, posicao: "GOL", overall: 76 },
      { nome: "Alla Volkova", nomeCamisa: "Volkova", numero: 12, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Marina Burakova", nomeCamisa: "Burakova", numero: 3, posicao: "ZAG/LD", overall: 82 },
      { nome: "Natalia Karasseva", nomeCamisa: "N. Karasseva", numero: 4, posicao: "ZAG", overall: 80 },
      { nome: "Tatiana Cheverda", nomeCamisa: "Cheverda", numero: 5, posicao: "LE/ZAG", overall: 79 },
      { nome: "Tatiana Zaitseva", nomeCamisa: "Zaitseva", numero: 19, posicao: "ZAG", overall: 78 },
      { nome: "Yulia Yushekivitch", nomeCamisa: "Yushekivitch", numero: 2, posicao: "LD/ZAG", overall: 78 },
      { nome: "Olga Karasseva", nomeCamisa: "O. Karasseva", numero: 14, posicao: "ZAG/LE", overall: 77 }
    ],

    meio_campo: [
      { nome: "Irina Grigorieva", nomeCamisa: "Grigorieva", numero: 8, posicao: "MEI/MC", overall: 85 },
      { nome: "Tatiana Egorova", nomeCamisa: "Egorova", numero: 7, posicao: "MC/VOL", overall: 83 },
      { nome: "Alexandra Svetlitskaya", nomeCamisa: "Svetlitskaya", numero: 9, posicao: "ME/MC", overall: 82 },
      { nome: "Galina Komarova", nomeCamisa: "Komarova", numero: 6, posicao: "VOL/ZAG", overall: 81 },
      { nome: "Elena Fomina", nomeCamisa: "Fomina", numero: 13, posicao: "MEI/MC", overall: 80 },
      { nome: "Natalia Filippova", nomeCamisa: "Filippova", numero: 16, posicao: "VOL", overall: 76 },
      { nome: "Elena Lissacheva", nomeCamisa: "Lissacheva", numero: 17, posicao: "MC", overall: 75 },
      { nome: "Tatiana Skotnikova", nomeCamisa: "Skotnikova", numero: 18, posicao: "MC", overall: 74 }
    ],

    atacantes: [
      { nome: "Natalia Barbashina", nomeCamisa: "Barbashina", numero: 10, posicao: "ATA", overall: 86 },
      { nome: "Olga Letyushova", nomeCamisa: "Letyushova", numero: 11, posicao: "ATA/PD", overall: 83 },
      { nome: "Larissa Savina", nomeCamisa: "Savina", numero: 15, posicao: "ATA/PE", overall: 79 }
    ]
  },
  suecia_1999: {
    nome: "Suécia",
    ano: 1999,
    campea: false,

    goleiras: [
      { nome: "Ulrika Karlsson", nomeCamisa: "Karlsson", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Ulla-Karin Thelin", nomeCamisa: "Thelin", numero: 12, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Kristin Bengtsson", nomeCamisa: "Bengtsson", numero: 5, posicao: "LE/ZAG", overall: 86 },
      { nome: "Jane Törnqvist", nomeCamisa: "Törnqvist", numero: 3, posicao: "ZAG", overall: 84 },
      { nome: "Karolina Westberg", nomeCamisa: "Westberg", numero: 2, posicao: "ZAG", overall: 82 },
      { nome: "Åsa Lönnqvist", nomeCamisa: "Lönnqvist", numero: 4, posicao: "ZAG/LD", overall: 81 },
      { nome: "Cecilia Sandell", nomeCamisa: "Sandell", numero: 7, posicao: "ZAG/VOL", overall: 80 },
      { nome: "Hanna Marklund", nomeCamisa: "Marklund", numero: 13, posicao: "ZAG", overall: 82 } 
    ],

    meio_campo: [
      { nome: "Malin Andersson", nomeCamisa: "Andersson", numero: 9, posicao: "MC/VOL", overall: 85 },
      { nome: "Malin Moström", nomeCamisa: "Moström", numero: 6, posicao: "MEI/MC", overall: 84 },
      { nome: "Linda Fagerström", nomeCamisa: "Fagerström", numero: 15, posicao: "MC/ME", overall: 79 },
      { nome: "Jessika Sundh", nomeCamisa: "Sundh", numero: 14, posicao: "ME/LE", overall: 78 },
      { nome: "Minna Mustonen", nomeCamisa: "Mustonen", numero: 19, posicao: "MC/MD", overall: 77 }
    ],

    atacantes: [
      { nome: "Victoria Svensson", nomeCamisa: "Svensson", numero: 11, posicao: "ATA", overall: 88 },
      { nome: "Hanna Ljungberg", nomeCamisa: "Ljungberg", numero: 10, posicao: "ATA/MEI", overall: 86 },
      { nome: "Therese Lundin", nomeCamisa: "Lundin", numero: 17, posicao: "ATA", overall: 79 },
      { nome: "Salina Olsson", nomeCamisa: "Olsson", numero: 16, posicao: "ATA/PD", overall: 77 }
    ]
  },
  alemanha_1999: {
    nome: "Alemanha",
    ano: 1999,
    campea: false,

    goleiras: [
      { nome: "Silke Rottenberg", nomeCamisa: "Rottenberg", numero: 1, posicao: "GOL", overall: 87 },
      { nome: "Nadine Angerer", nomeCamisa: "Angerer", numero: 15, posicao: "GOL", overall: 83 } 
    ],

    defensoras: [
      { nome: "Doris Fitschen", nomeCamisa: "Fitschen", numero: 5, posicao: "ZAG/LIB", overall: 88 },
      { nome: "Steffi Jones", nomeCamisa: "Jones", numero: 4, posicao: "ZAG", overall: 85 },
      { nome: "Kerstin Stegemann", nomeCamisa: "Stegemann", numero: 2, posicao: "LD/MD", overall: 84 },
      { nome: "Ariane Hingst", nomeCamisa: "Hingst", numero: 3, posicao: "ZAG/VOL", overall: 83 },
      { nome: "Sandra Minnert", nomeCamisa: "Minnert", numero: 13, posicao: "LE/ZAG", overall: 82 },
      { nome: "Tina Wunderlich", nomeCamisa: "T. Wunderlich", numero: 14, posicao: "ZAG", overall: 78 },
      { nome: "Nicole Brandebusemeyer", nomeCamisa: "Brandebusemeyer", numero: 19, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Bettina Wiegmann", nomeCamisa: "Wiegmann", numero: 10, posicao: "MC/MEI", overall: 90 },
      { nome: "Maren Meinert", nomeCamisa: "Meinert", numero: 11, posicao: "MEI/MD", overall: 86 },
      { nome: "Renate Lingor", nomeCamisa: "Lingor", numero: 16, posicao: "MEI/MC", overall: 82 },
      { nome: "Pia Wunderlich", nomeCamisa: "P. Wunderlich", numero: 17, posicao: "ME/MC", overall: 81 },
      { nome: "Melanie Hoffmann", nomeCamisa: "Hoffmann", numero: 6, posicao: "MC", overall: 79 }
    ],

    atacantes: [
      { nome: "Birgit Prinz", nomeCamisa: "Prinz", numero: 9, posicao: "ATA", overall: 89 },
      { nome: "Inka Grings", nomeCamisa: "Grings", numero: 18, posicao: "ATA", overall: 86 },
      { nome: "Sandra Smisek", nomeCamisa: "Smisek", numero: 8, posicao: "ATA", overall: 83 },
      { nome: "Claudia Müller", nomeCamisa: "C. Müller", numero: 12, posicao: "ATA", overall: 80 },
      { nome: "Martina Müller", nomeCamisa: "M. Müller", numero: 7, posicao: "ATA/PD", overall: 78 },
      { nome: "Monika Meyer", nomeCamisa: "Meyer", numero: 20, posicao: "ATA", overall: 77 }
    ]
  },
  nigeria_1999: {
    nome: "Nigéria",
    ano: 1999,
    campea: false,

    goleiras: [
      { nome: "Ann Chiejine", nomeCamisa: "A. Chiejine", numero: 1, posicao: "GOL", overall: 80 },
      { nome: "Judith Chime", nomeCamisa: "Chime", numero: 12, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Florence Omagbemi", nomeCamisa: "Omagbemi", numero: 6, posicao: "ZAG/VOL", overall: 84 },
      { nome: "Eberechi Opara", nomeCamisa: "Opara", numero: 5, posicao: "ZAG", overall: 80 },
      { nome: "Adaku Okoroafor", nomeCamisa: "Okoroafor", numero: 4, posicao: "ZAG", overall: 79 },
      { nome: "Yinka Kudaisi", nomeCamisa: "Kudaisi", numero: 2, posicao: "ZAG/LD", overall: 78 },
      { nome: "Prisca Emeafu", nomeCamisa: "Emeafu", numero: 11, posicao: "ZAG/LE", overall: 77 },
      { nome: "Mavis Ogun", nomeCamisa: "Ogun", numero: 10, posicao: "ZAG/ME", overall: 76 },
      { nome: "Florence Iweta", nomeCamisa: "Iweta", numero: 14, posicao: "ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Nkiru Okosieme", nomeCamisa: "Okosieme", numero: 13, posicao: "MC/MEI", overall: 82 },
      { nome: "Maureen Mmadu", nomeCamisa: "Mmadu", numero: 15, posicao: "MC/VOL", overall: 81 },
      { nome: "Gloria Usieta", nomeCamisa: "Usieta", numero: 9, posicao: "MC", overall: 78 },
      { nome: "Martha Tarhemba", nomeCamisa: "Tarhemba", numero: 3, posicao: "ME/MC", overall: 75 }
    ],

    atacantes: [
      { nome: "Mercy Akide", nomeCamisa: "Akide", numero: 19, posicao: "ATA", overall: 87 },
      { nome: "Patience Avre", nomeCamisa: "Avre", numero: 18, posicao: "ATA/PE", overall: 82 },
      { nome: "Stella Mbachu", nomeCamisa: "Mbachu", numero: 7, posicao: "ATA/PD", overall: 80 },
      { nome: "Rita Nwadike", nomeCamisa: "Nwadike", numero: 8, posicao: "ATA/MEI", overall: 79 },
      { nome: "Nkechi Egbe", nomeCamisa: "Egbe", numero: 17, posicao: "ATA", overall: 78 },
      { nome: "Ndidi Kalu", nomeCamisa: "Kalu", numero: 16, posicao: "ATA", overall: 75 },
      { nome: "Ifeanyi Chiejine", nomeCamisa: "I. Chiejine", numero: 20, posicao: "ATA", overall: 74 }
    ]
  },
  //Copas 1995 - Seleções playoffs
  noruega_1995: {
    nome: "Noruega",
    ano: 1995,
    campea: true,

    goleiras: [
      { nome: "Bente Nordby", nomeCamisa: "Nordby", numero: 1, posicao: "GOL", overall: 90 },
      { nome: "Reidun Seth", nomeCamisa: "Seth", numero: 12, posicao: "GOL", overall: 78 },
      { nome: "Ingrid Sternhoff", nomeCamisa: "Sternhoff", numero: 20, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Gro Espeseth", nomeCamisa: "Espeseth", numero: 3, posicao: "ZAG/LIB", overall: 90 },
      { nome: "Tina Svensson", nomeCamisa: "Svensson", numero: 2, posicao: "ZAG/LD", overall: 85 },
      { nome: "Nina Nymark Andersen", nomeCamisa: "N. Andersen", numero: 5, posicao: "ZAG/VOL", overall: 84 },
      { nome: "Merete Myklebust", nomeCamisa: "Myklebust", numero: 13, posicao: "LE/ZAG", overall: 82 },
      { nome: "Agnete Carlsen", nomeCamisa: "Carlsen", numero: 19, posicao: "LD/ZAG", overall: 81 },
      { nome: "Tone Gunn Frustøl", nomeCamisa: "Frustøl", numero: 18, posicao: "ZAG", overall: 79 },
      { nome: "Anita Waage", nomeCamisa: "Waage", numero: 17, posicao: "ZAG", overall: 77 }
    ],

    meio_campo: [
      { nome: "Hege Riise", nomeCamisa: "Riise", numero: 6, posicao: "MEI/MC", overall: 92 },
      { nome: "Heidi Støre", nomeCamisa: "Støre", numero: 8, posicao: "VOL/MC", overall: 86 },
      { nome: "Tone Haugen", nomeCamisa: "Haugen", numero: 7, posicao: "ME/MC", overall: 84 },
      { nome: "Anne Nymark Andersen", nomeCamisa: "A. Andersen", numero: 4, posicao: "MC/ME", overall: 83 },
      { nome: "Hege Gunnerød", nomeCamisa: "Gunnerød", numero: 14, posicao: "MC", overall: 78 }
    ],

    atacantes: [
      { nome: "Ann Kristin Aarønes", nomeCamisa: "Aarønes", numero: 11, posicao: "ATA", overall: 95 },
      { nome: "Linda Medalen", nomeCamisa: "Medalen", numero: 10, posicao: "ATA/MC", overall: 88 },
      { nome: "Marianne Pettersen", nomeCamisa: "Pettersen", numero: 16, posicao: "ATA", overall: 87 },
      { nome: "Kristin Sandberg", nomeCamisa: "Sandberg", numero: 9, posicao: "ATA/PD", overall: 82 },
      { nome: "Randi Leinan", nomeCamisa: "Leinan", numero: 15, posicao: "ATA", overall: 80 }
    ]
  },
  alemanha_1995: {
    nome: "Alemanha",
    ano: 1995,
    campea: false,

    goleiras: [
      { nome: "Manuela Goller", nomeCamisa: "Goller", numero: 1, posicao: "GOL", overall: 85 },
      { nome: "Katja Kraus", nomeCamisa: "Kraus", numero: 12, posicao: "GOL", overall: 78 },
      { nome: "Christine Francke", nomeCamisa: "Francke", numero: 20, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Doris Fitschen", nomeCamisa: "Fitschen", numero: 5, posicao: "ZAG/LIB", overall: 88 },
      { nome: "Anouschka Bernhard", nomeCamisa: "Bernhard", numero: 2, posicao: "ZAG/LD", overall: 82 },
      { nome: "Birgitt Austermühl", nomeCamisa: "Austermühl", numero: 3, posicao: "ZAG", overall: 80 },
      { nome: "Dagmar Uebelhör", nomeCamisa: "Uebelhör", numero: 4, posicao: "ZAG", overall: 79 },
      { nome: "Sandra Minnert", nomeCamisa: "Minnert", numero: 13, posicao: "LE/ZAG", overall: 78 },
      { nome: "Tina Wunderlich", nomeCamisa: "T. Wunderlich", numero: 15, posicao: "ZAG", overall: 77 },
      { nome: "Jutta Nardenbach", nomeCamisa: "Nardenbach", numero: 19, posicao: "LE/ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Silvia Neid", nomeCamisa: "Neid", numero: 8, posicao: "MEI/MC", overall: 89 },
      { nome: "Bettina Wiegmann", nomeCamisa: "Wiegmann", numero: 10, posicao: "MC/VOL", overall: 88 },
      { nome: "Martina Voss", nomeCamisa: "Voss", numero: 7, posicao: "ME/MC", overall: 85 },
      { nome: "Dagmar Pohlmann", nomeCamisa: "Pohlmann", numero: 6, posicao: "MC", overall: 81 },
      { nome: "Pia Wunderlich", nomeCamisa: "P. Wunderlich", numero: 18, posicao: "ME/MC", overall: 80 },
      { nome: "Claudia von Lanken", nomeCamisa: "von Lanken", numero: 17, posicao: "MC/VOL", overall: 77 }
    ],

    atacantes: [
      { nome: "Heidi Mohr", nomeCamisa: "Mohr", numero: 9, posicao: "ATA", overall: 91 },
      { nome: "Maren Meinert", nomeCamisa: "Meinert", numero: 11, posicao: "ATA/MEI", overall: 85 },
      { nome: "Birgit Prinz", nomeCamisa: "Prinz", numero: 14, posicao: "ATA", overall: 81 }, // Estreante fenômeno
      { nome: "Patricia Brocker", nomeCamisa: "Brocker", numero: 16, posicao: "ATA", overall: 79 }
    ]
  },
  china_1995: {
    nome: "China",
    ano: 1995,
    campea: false,

    goleiras: [
      { nome: "Zhong Honglian", nomeCamisa: "Zhong H. L.", numero: 1, posicao: "GOL", overall: 81 },
      { nome: "Gao Hong", nomeCamisa: "Gao Hong", numero: 20, posicao: "GOL", overall: 85 } 
    ],

    defensoras: [
      { nome: "Wen Lirong", nomeCamisa: "Wen L. R.", numero: 12, posicao: "ZAG/LIB", overall: 86 },
      { nome: "Fan Yunjie", nomeCamisa: "Fan Y. J.", numero: 3, posicao: "ZAG", overall: 84 },
      { nome: "Wang Liping", nomeCamisa: "Wang L. P.", numero: 2, posicao: "LD/MD", overall: 83 },
      { nome: "Yu Hongqi", nomeCamisa: "Yu H. Q.", numero: 4, posicao: "ZAG/VOL", overall: 80 },
      { nome: "Zhou Yang", nomeCamisa: "Zhou Y.", numero: 5, posicao: "ZAG", overall: 78 },
      { nome: "Niu Lijie", nomeCamisa: "Niu L. J.", numero: 13, posicao: "LE/ZAG", overall: 77 },
      { nome: "Man Yanling", nomeCamisa: "Man Y. L.", numero: 18, posicao: "ZAG/LD", overall: 76 }
    ],

    meio_campo: [
      { nome: "Liu Ailing", nomeCamisa: "Liu A. L.", numero: 10, posicao: "MEI/MC", overall: 89 },
      { nome: "Zhao Lihong", nomeCamisa: "Zhao L. H.", numero: 17, posicao: "ME/MC", overall: 85 },
      { nome: "Shui Qingxia", nomeCamisa: "Shui Q. X.", numero: 8, posicao: "MC", overall: 82 },
      { nome: "Xie Huilin", nomeCamisa: "Xie H. L.", numero: 14, posicao: "VOL/ZAG", overall: 81 },
      { nome: "Zhou Hua", nomeCamisa: "Zhou H.", numero: 6, posicao: "MC", overall: 79 },
      { nome: "Chen Yufeng", nomeCamisa: "Chen Y. F.", numero: 16, posicao: "MC/VOL", overall: 78 },
      { nome: "Li Ying", nomeCamisa: "Li Y.", numero: 19, posicao: "MC", overall: 77 }
    ],

    atacantes: [
      { nome: "Sun Wen", nomeCamisa: "Sun Wen", numero: 9, posicao: "ATA/MEI", overall: 90 },
      { nome: "Shi Guihong", nomeCamisa: "Shi G. H.", numero: 15, posicao: "ATA", overall: 84 },
      { nome: "Sun Qingmei", nomeCamisa: "Sun Q. M.", numero: 11, posicao: "ATA/PD", overall: 83 },
      { nome: "Wei Haiying", nomeCamisa: "Wei H. Y.", numero: 7, posicao: "ATA", overall: 80 }
    ]
  },
  estados_unidos_1995: {
    nome: "Estados Unidos",
    ano: 1995,
    campea: false, 

    goleiras: [
      { nome: "Briana Scurry", nomeCamisa: "Scurry", numero: 1, posicao: "GOL", overall: 86 },
      { nome: "Saskia Webber", nomeCamisa: "Webber", numero: 18, posicao: "GOL", overall: 78 },
      { nome: "Mary Harvey", nomeCamisa: "Harvey", numero: 19, posicao: "GOL", overall: 77 } 
    ],

    defensoras: [
      { nome: "Carla Overbeck", nomeCamisa: "Overbeck", numero: 4, posicao: "ZAG/LIB", overall: 88 },
      { nome: "Joy Fawcett", nomeCamisa: "Fawcett", numero: 14, posicao: "ZAG/LD", overall: 87 },
      { nome: "Linda Hamilton", nomeCamisa: "Hamilton", numero: 8, posicao: "ZAG", overall: 82 },
      { nome: "Thori Staples", nomeCamisa: "Staples", numero: 2, posicao: "LE/ZAG", overall: 81 },
      { nome: "Amanda Cromwell", nomeCamisa: "Cromwell", numero: 5, posicao: "ZAG/VOL", overall: 79 }
    ],

    meio_campo: [
      { nome: "Michelle Akers", nomeCamisa: "Akers", numero: 10, posicao: "VOL/MEI", overall: 90 },
      { nome: "Kristine Lilly", nomeCamisa: "Lilly", numero: 13, posicao: "ME/MC", overall: 89 },
      { nome: "Julie Foudy", nomeCamisa: "Foudy", numero: 11, posicao: "MC/VOL", overall: 88 },
      { nome: "Tisha Venturini", nomeCamisa: "Venturini", numero: 15, posicao: "MC", overall: 85 },
      { nome: "Holly Manthei", nomeCamisa: "Manthei", numero: 3, posicao: "MD/MC", overall: 80 },
      { nome: "Jennifer Lalor", nomeCamisa: "Lalor", numero: 17, posicao: "MC", overall: 77 }
    ],

    atacantes: [
      { nome: "Mia Hamm", nomeCamisa: "Hamm", numero: 9, posicao: "ATA/MEI", overall: 91 },
      { nome: "Tiffeny Milbrett", nomeCamisa: "Milbrett", numero: 16, posicao: "ATA", overall: 85 },
      { nome: "Carin Gabarra", nomeCamisa: "Gabarra", numero: 12, posicao: "ATA", overall: 84 },
      { nome: "Debbie Keller", nomeCamisa: "Keller", numero: 6, posicao: "ATA", overall: 80 },
      { nome: "Sarah Rafanelli", nomeCamisa: "Rafanelli", numero: 7, posicao: "ATA", overall: 78 }
    ]
  },
  inglaterra_1995: {
    nome: "Inglaterra",
    ano: 1995,
    campea: false,

    goleiras: [
      { nome: "Pauline Cope", nomeCamisa: "Cope", numero: 1, posicao: "GOL", overall: 84 },
      { nome: "Lesley Higgs", nomeCamisa: "Higgs", numero: 12, posicao: "GOL", overall: 76 },
      { nome: "Michelle Needham", nomeCamisa: "Needham", numero: 20, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Gillian Coultard", nomeCamisa: "Coultard", numero: 4, posicao: "ZAG/VOL", overall: 85 }, // Capitã lendária
      { nome: "Hope Powell", nomeCamisa: "Powell", numero: 2, posicao: "ZAG/LE", overall: 83 },
      { nome: "Tina Mapes", nomeCamisa: "Mapes", numero: 3, posicao: "ZAG", overall: 79 },
      { nome: "Clare Taylor", nomeCamisa: "Taylor", numero: 5, posicao: "ZAG/LD", overall: 78 },
      { nome: "Donna Smith", nomeCamisa: "Smith", numero: 11, posicao: "LE/ZAG", overall: 77 },
      { nome: "Louise Waller", nomeCamisa: "Waller", numero: 16, posicao: "ZAG", overall: 75 },
      { nome: "Samantha Britton", nomeCamisa: "Britton", numero: 18, posicao: "LD/ZAG", overall: 74 }
    ],

    meio_campo: [
      { nome: "Marieanne Spacey", nomeCamisa: "Spacey", numero: 10, posicao: "MEI/MC", overall: 86 },
      { nome: "Debbie Bampton", nomeCamisa: "Bampton", numero: 8, posicao: "MC/VOL", overall: 81 },
      { nome: "Janice Murray", nomeCamisa: "Murray", numero: 6, posicao: "ME/MC", overall: 79 },
      { nome: "Kaz Walker", nomeCamisa: "Walker", numero: 14, posicao: "MD/MC", overall: 78 },
      { nome: "Sian Williams", nomeCamisa: "Williams", numero: 15, posicao: "MC/VOL", overall: 76 },
      { nome: "Kerry Davis", nomeCamisa: "Davis", numero: 7, posicao: "MD/MEI", overall: 76 }
    ],

    atacantes: [
      { nome: "Karen Farley", nomeCamisa: "Farley", numero: 9, posicao: "ATA", overall: 84 },
      { nome: "Karen Walker", nomeCamisa: "K. Walker", numero: 13, posicao: "ATA", overall: 82 },
      { nome: "Sue Smith", nomeCamisa: "S. Smith", numero: 17, posicao: "ATA/PE", overall: 79 },
    ]
  },
  suecia_1995: {
    nome: "Suécia",
    ano: 1995,
    campea: false,

    goleiras: [
      { nome: "Elisabeth Leidinge", nomeCamisa: "Leidinge", numero: 1, posicao: "GOL", overall: 85 },
      { nome: "Annelie Nilsson", nomeCamisa: "Nilsson", numero: 12, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Malin Lundgren", nomeCamisa: "Lundgren", numero: 2, posicao: "ZAG/LD", overall: 84 },
      { nome: "Åsa Jakobsson", nomeCamisa: "Jakobsson", numero: 5, posicao: "ZAG", overall: 82 },
      { nome: "Anika Ericsson", nomeCamisa: "Ericsson", numero: 13, posicao: "LE/ZAG", overall: 81 },
      { nome: "Iréne Ekelund", nomeCamisa: "Ekelund", numero: 4, posicao: "ZAG", overall: 79 },
      { nome: "Eva Zeikfalvy", nomeCamisa: "Zeikfalvy", numero: 3, posicao: "ZAG", overall: 78 }
    ],

    meio_campo: [
      { nome: "Pia Sundhage", nomeCamisa: "Sundhage", numero: 11, posicao: "MEI/MC", overall: 88 },
      { nome: "Malin Andersson", nomeCamisa: "Andersson", numero: 6, posicao: "MC/VOL", overall: 85 },
      { nome: "Susanne Hedberg", nomeCamisa: "Hedberg", numero: 8, posicao: "MD/MC", overall: 82 },
      { nome: "Anna Pohjanen", nomeCamisa: "Pohjanen", numero: 14, posicao: "ME/MC", overall: 80 },
      { nome: "Sofia Johansson", nomeCamisa: "Johansson", numero: 19, posicao: "MC", overall: 77 },
      { nome: "Åsa Lönnqvist", nomeCamisa: "Lönnqvist", numero: 21, posicao: "VOL/ZAG", overall: 76 }
    ],

    atacantes: [
      { nome: "Anneli Andelén", nomeCamisa: "Andelén", numero: 10, posicao: "ATA", overall: 86 },
      { nome: "Ulrika Kalte", nomeCamisa: "Kalte", numero: 9, posicao: "ATA/PE", overall: 85 },
      { nome: "Lena Videkull", nomeCamisa: "Videkull", numero: 7, posicao: "ATA", overall: 84 },
      { nome: "Helen Johansson", nomeCamisa: "H. Johansson", numero: 15, posicao: "ATA/PD", overall: 80 },
      { nome: "Annelie Wahlgren", nomeCamisa: "Wahlgren", numero: 18, posicao: "ATA", overall: 78 }
    ]
  },
  japao_1995: {
    nome: "Japão",
    ano: 1995,
    campea: false,

    goleiras: [
      { nome: "Junko Ozawa", nomeCamisa: "Ozawa", numero: 1, posicao: "GOL", overall: 81 },
      { nome: "Megumi Sakata", nomeCamisa: "Sakata", numero: 19, posicao: "GOL", overall: 74 },
      { nome: "Shiho Onodera", nomeCamisa: "Onodera", numero: 20, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Rie Yamaki", nomeCamisa: "Yamaki", numero: 3, posicao: "ZAG", overall: 83 },
      { nome: "Maki Haneta", nomeCamisa: "Haneta", numero: 4, posicao: "ZAG/LD", overall: 80 },
      { nome: "Yumi Tomei", nomeCamisa: "Tomei", numero: 2, posicao: "LE/ZAG", overall: 79 },
      { nome: "Yumi Obe", nomeCamisa: "Obe", numero: 12, posicao: "ZAG", overall: 78 }, 
      { nome: "Inesu Emiko Takeoka", nomeCamisa: "Takeoka", numero: 6, posicao: "ZAG", overall: 76 },
      { nome: "Ryoko Uno", nomeCamisa: "Uno", numero: 5, posicao: "ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Asako Takakura", nomeCamisa: "Takakura", numero: 10, posicao: "MEI/MC", overall: 85 }, 
      { nome: "Futaba Kioka", nomeCamisa: "Kioka", numero: 8, posicao: "MC/VOL", overall: 83 },
      { nome: "Homare Sawa", nomeCamisa: "Sawa", numero: 11, posicao: "MC/MEI", overall: 82 },
      { nome: "Akemi Noda", nomeCamisa: "Noda", numero: 7, posicao: "MC/MD", overall: 81 },
      { nome: "Etsuko Handa", nomeCamisa: "Handa", numero: 16, posicao: "ME/MC", overall: 78 },
      { nome: "Kaoru Kadohara", nomeCamisa: "Kadohara", numero: 13, posicao: "VOL", overall: 75 }
    ],

    atacantes: [
      { nome: "Michiko Otani", nomeCamisa: "Otani", numero: 15, posicao: "ATA", overall: 82 },
      { nome: "Tamaki Uchiyama", nomeCamisa: "Uchiyama", numero: 14, posicao: "ATA/PE", overall: 81 },
      { nome: "Nami Otake", nomeCamisa: "Otake", numero: 9, posicao: "ATA", overall: 80 },
      { nome: "Tamayo Maruyama", nomeCamisa: "Maruyama", numero: 18, posicao: "ATA", overall: 73 }
    ]
  },
  dinamarca_1995: {
    nome: "Dinamarca",
    ano: 1995,
    campea: false,

    goleiras: [
      { nome: "Dorthe Larsen", nomeCamisa: "Larsen", numero: 1, posicao: "GOL", overall: 83 },
      { nome: "Helle Bjerregaard", nomeCamisa: "Bjerregaard", numero: 16, posicao: "GOL", overall: 76 }
    ],

    defensoras: [
      { nome: "Lene Terp", nomeCamisa: "Terp", numero: 3, posicao: "ZAG", overall: 84 }, // Jovem pilar defensivo
      { nome: "Kamma Flæng", nomeCamisa: "Flæng", numero: 4, posicao: "ZAG/LD", overall: 81 },
      { nome: "Rikke Holm", nomeCamisa: "Holm", numero: 5, posicao: "ZAG/LE", overall: 80 },
      { nome: "Lene Madsen", nomeCamisa: "Madsen", numero: 2, posicao: "LE", overall: 78 },
      { nome: "Torben", nomeCamisa: "Torben", numero: 18, posicao: "ZAG", overall: 74 } // Nota: Listada também como Mette Nielsen
    ],

    meio_campo: [
      { nome: "Anne Dot Eggers Nielsen", nomeCamisa: "Eggers", numero: 6, posicao: "MC/VOL", overall: 85 },
      { nome: "Karina Christensen", nomeCamisa: "Christensen", numero: 9, posicao: "MEI/MC", overall: 83 },
      { nome: "Jeanne Axelsen", nomeCamisa: "Axelsen", numero: 17, posicao: "MC/VOL", overall: 81 },
      { nome: "Christina Petersen", nomeCamisa: "Petersen", numero: 12, posicao: "MD/ME", overall: 79 },
      { nome: "Katrine Pedersen", nomeCamisa: "Pedersen", numero: 14, posicao: "VOL/MC", overall: 78 }, // Prodígio de 17 anos
      { nome: "Nanna Mølbach", nomeCamisa: "Mølbach", numero: 19, posicao: "MC", overall: 75 }
    ],

    atacantes: [
      { nome: "Gitte Krogh", nomeCamisa: "Krogh", numero: 11, posicao: "ATA", overall: 86 },
      { nome: "Helle Jensen", nomeCamisa: "Jensen", numero: 10, posicao: "ATA/PE", overall: 84 },
      { nome: "Birgit Christensen", nomeCamisa: "Birgit C.", numero: 15, posicao: "ATA", overall: 82 },
      { nome: "Annette Thychosen", nomeCamisa: "Thychosen", numero: 7, posicao: "ATA/PD", overall: 80 },
      { nome: "Lisbet Kolding", nomeCamisa: "Kolding", numero: 8, posicao: "ATA", overall: 79 },
      { nome: "Christina Bonde", nomeCamisa: "Bonde", numero: 13, posicao: "ATA", overall: 76 }
    ]
  },
  // Copa 1991 - Seleções dos Playoffs
  estados_unidos_1991: {
    nome: "Estados Unidos",
    ano: 1991,
    campea: true,

    goleiras: [
      { nome: "Mary Harvey", nomeCamisa: "Harvey", numero: 1, posicao: "GOL", overall: 85 },
      { nome: "Amy Allmann", nomeCamisa: "Allmann", numero: 17, posicao: "GOL", overall: 76 },
      { nome: "Kim Maslin-Kammerdeiner", nomeCamisa: "Kammerdeiner", numero: 18, posicao: "GOL", overall: 72 }
    ],

    defensoras: [
      { nome: "Carla Overbeck", nomeCamisa: "Werden", numero: 4, posicao: "ZAG", overall: 86 },
      { nome: "Joy Fawcett", nomeCamisa: "Biefeld", numero: 14, posicao: "ZAG/LD", overall: 85 }, 
      { nome: "Linda Hamilton", nomeCamisa: "Hamilton", numero: 8, posicao: "ZAG/LE", overall: 83 },
      { nome: "Lori Henry", nomeCamisa: "Henry", numero: 2, posicao: "ZAG", overall: 81 },
      { nome: "Debbie Belkin", numero: 16, nomeCamisa: "Belkin", posicao: "ZAG", overall: 79 },
      { nome: "Cathy Higgins", nomeCamisa: "Higgins", numero: 3, posicao: "ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Julie Foudy", nomeCamisa: "Foudy", numero: 11, posicao: "MC/VOL", overall: 87 },
      { nome: "Shannon Higgins", nomeCamisa: "S. Higgins", numero: 5, posicao: "MEI/MC", overall: 85 },
      { nome: "Kristine Lilly", nomeCamisa: "Lilly", numero: 13, posicao: "ME/MC", overall: 85 }, 
      { nome: "Mia Hamm", nomeCamisa: "Hamm", numero: 9, posicao: "MD/ATA", overall: 89 },
      { nome: "Tracey Bates", nomeCamisa: "Bates", numero: 7, posicao: "MC", overall: 78 }
    ],

    atacantes: [
      { nome: "Michelle Akers", nomeCamisa: "Akers-Stahl", numero: 10, posicao: "ATA", overall: 94 }, 
      { nome: "Carin Gabarra", nomeCamisa: "Jennings", numero: 12, posicao: "ATA/PE", overall: 91 }, 
      { nome: "April Heinrichs", nomeCamisa: "Heinrichs", numero: 20, posicao: "ATA/PD", overall: 88 }, 
      { nome: "Wendy Gebauer", nomeCamisa: "Gebauer", numero: 6, posicao: "ATA", overall: 77 }
    ]
  },
  noruega_1991: {
    nome: "Noruega",
    ano: 1991,
    campea: false,

    goleiras: [
      { nome: "Reidun Seth", nomeCamisa: "Seth", numero: 1, posicao: "GOL", overall: 87 },
      { nome: "Bente Nordby", nomeCamisa: "Nordby", numero: 12, posicao: "GOL", overall: 78 } 
    ],

    defensoras: [
      { nome: "Tina Svensson", nomeCamisa: "Svensson", numero: 3, posicao: "LD/ZAG", overall: 85 },
      { nome: "Gunn Nyborg", nomeCamisa: "Nyborg", numero: 5, posicao: "ZAG", overall: 84 },
      { nome: "Gro Espeseth", nomeCamisa: "Espeseth", numero: 2, posicao: "ZAG/LE", overall: 83 },
      { nome: "Heidi Støre", nomeCamisa: "Støre", numero: 7, posicao: "ZAG/VOL", overall: 83 }, 
      { nome: "Illona Svendsen", nomeCamisa: "Svendsen", numero: 4, posicao: "ZAG", overall: 77 },
      { nome: "Liv Strædet", nomeCamisa: "Strædet", numero: 16, posicao: "LE", overall: 76 }
    ],

    meio_campo: [
      { nome: "Hege Riise", nomeCamisa: "Riise", numero: 11, posicao: "MEI/MC", overall: 88 },
      { nome: "Agnete Carlsen", nomeCamisa: "Carlsen", numero: 6, posicao: "MC/VOL", overall: 83 },
      { nome: "Tone Haugen", nomeCamisa: "Haugen", numero: 13, posicao: "MC", overall: 81 },
      { nome: "Cathrine Zaborowski", nomeCamisa: "Zaborowski", numero: 15, posicao: "MD/MEI", overall: 80 },
      { nome: "Margunn Humlestøl", nomeCamisa: "Humlestøl", numero: 18, posicao: "ME/MC", overall: 75 }, 
      { nome: "Annette Igland", nomeCamisa: "Igland", numero: 10, posicao: "MC", overall: 74 }
    ],

    atacantes: [
      { nome: "Linda Medalen", nomeCamisa: "Medalen", numero: 9, posicao: "ATA", overall: 89 },
      { nome: "Birthe Hegstad", nomeCamisa: "Hegstad", numero: 17, posicao: "ATA/PE", overall: 84 },
      { nome: "Heidi Kaspersen", nomeCamisa: "Kaspersen", numero: 8, posicao: "ATA/PD", overall: 80 },
      { nome: "Turid Storhaug", nomeCamisa: "Storhaug", numero: 14, posicao: "ATA", overall: 76 },
      { nome: "Elin Krokan", nomeCamisa: "Krokan", numero: 20, posicao: "ATA", overall: 73 }
    ]
  },
  alemanha_1991: {
    nome: "Alemanha",
    ano: 1991,
    campea: false,

    goleiras: [
      { nome: "Marion Isbert", nomeCamisa: "Isbert", numero: 1, posicao: "GOL", overall: 86 },
      { nome: "Elke Walther", nomeCamisa: "Walther", numero: 12, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Doris Fitschen", nomeCamisa: "Fitschen", numero: 3, posicao: "ZAG/LIB", overall: 87 }, 
      { nome: "Frauke Kuhlmann", nomeCamisa: "Kuhlmann", numero: 5, posicao: "ZAG", overall: 82 },
      { nome: "Jutta Nardenbach", nomeCamisa: "Nardenbach", numero: 2, posicao: "LD/ZAG", overall: 81 },
      { nome: "Britta Unsleber", nomeCamisa: "Unsleber", numero: 15, posicao: "LE", overall: 80 },
      { nome: "Dagmar Uebelhör", nomeCamisa: "Uebelhör", numero: 6, posicao: "ZAG", overall: 77 },
      { nome: "Birgitt Austermühl", nomeCamisa: "Austermühl", numero: 14, posicao: "ZAG", overall: 74 }
    ],

    meio_campo: [
      { nome: "Silvia Neid", nomeCamisa: "Neid", numero: 10, posicao: "MEI/MC", overall: 89 }, 
      { nome: "Martina Voss", nomeCamisa: "Voss", numero: 8, posicao: "MC/ME", overall: 85 },   
      { nome: "Bettina Wiegmann", nomeCamisa: "Wiegmann", numero: 13, posicao: "VOL/MC", overall: 83 }, 
      { nome: "Susanne Brück", nomeCamisa: "Brück", numero: 4, posicao: "VOL", overall: 78 },
      { nome: "Beate Wendt", nomeCamisa: "Wendt", numero: 11, posicao: "MD/MEI", overall: 78 },
      { nome: "Sandra Hengst", nomeCamisa: "Hengst", numero: 17, posicao: "MC", overall: 73 }
    ],

    atacantes: [
      { nome: "Heidi Mohr", nomeCamisa: "Mohr", numero: 9, posicao: "ATA", overall: 90 }, 
      { nome: "Gudrun Göttschlich", nomeCamisa: "Göttschlich", numero: 16, posicao: "ATA/PD", overall: 82 },
      { nome: "Uschi Lohn", nomeCamisa: "Lohn", numero: 7, posicao: "ATA/PE", overall: 79 },
      { nome: "Katja Bornschein", nomeCamisa: "Bornschein", numero: 18, posicao: "ATA", overall: 76 }
    ]
  },
  suecia_1991: {
    nome: "Suécia",
    ano: 1991,
    campea: false,

    goleiras: [
      { nome: "Elisabeth Leidinge", nomeCamisa: "Leidinge", numero: 1, posicao: "GOL", overall: 86 },
      { nome: "Annelie Nilsson", nomeCamisa: "Nilsson", numero: 12, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Malin Lundgren", nomeCamisa: "Lundgren", numero: 3, posicao: "ZAG/LE", overall: 83 },
      { nome: "Eva Zeikfalvy", nomeCamisa: "Zeikfalvy", numero: 5, posicao: "ZAG", overall: 83 },
      { nome: "Annelie Andelén", nomeCamisa: "Andelén", numero: 2, posicao: "LD/ZAG", overall: 82 },
      { nome: "Anette Hansson", nomeCamisa: "Hansson", numero: 14, posicao: "ZAG", overall: 79 },
      { nome: "Christer Olsson", nomeCamisa: "Olsson", numero: 13, posicao: "LE", overall: 75 } 
    ],

    meio_campo: [
      { nome: "Pia Sundhage", nomeCamisa: "Sundhage", numero: 6, posicao: "MEI/MC/ATA", overall: 89 }, 
      { nome: "Ingrid Johansson", nomeCamisa: "Johansson", numero: 8, posicao: "MC/VOL", overall: 84 },
      { nome: "Camilla Fors", nomeCamisa: "Fors", numero: 17, posicao: "MD", overall: 79 },
      { nome: "Malin Swedberg", nomeCamisa: "Swedberg", numero: 16, posicao: "MC/ME", overall: 78 }, 
      { nome: "Pernilla Larsson", nomeCamisa: "Larsson", numero: 19, posicao: "ME", overall: 74 }
    ],

    atacantes: [
      { nome: "Lena Videkull", nomeCamisa: "Videkull", numero: 10, posicao: "ATA", overall: 90 }, 
      { nome: "Helen Johansson", nomeCamisa: "H. Johansson", numero: 11, posicao: "ATA/PE", overall: 84 },
      { nome: "Susanne Hedberg", nomeCamisa: "Hedberg", numero: 7, posicao: "ATA/PD", overall: 82 },
      { nome: "Anneli Andelén", nomeCamisa: "Andelén", numero: 9, posicao: "ATA", overall: 81 }, 
      { nome: "Helen Nilsson", nomeCamisa: "H. Nilsson", numero: 15, posicao: "ATA", overall: 76 },
      { nome: "Marie Videkull", nomeCamisa: "M. Videkull", numero: 21, posicao: "ATA", overall: 72 }
    ]
  },
  dinamarca_1991: {
    nome: "Dinamarca",
    ano: 1991,
    campea: false,

    goleiras: [
      { nome: "Helle Bjerregaard", nomeCamisa: "Bjerregaard", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Gitte Hansen", nomeCamisa: "Gi. Hansen", numero: 16, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Karina Sefron", nomeCamisa: "Sefron", numero: 3, posicao: "ZAG/LIB", overall: 84 }, 
      { nome: "Jannie Hansen", nomeCamisa: "Ja. Hansen", numero: 2, posicao: "LD", overall: 80 },
      { nome: "Mikaela Christensen", nomeCamisa: "Christensen", numero: 4, posicao: "ZAG", overall: 79 },
      { nome: "Rikke Holm", nomeCamisa: "Holm", numero: 5, posicao: "LE/ZAG", overall: 78 },
      { nome: "Bonny Madsen", nomeCamisa: "Madsen", numero: 12, posicao: "ZAG", overall: 76 }
    ],

    meio_campo: [
      { nome: "Marianne Jensen", nomeCamisa: "M. Jensen", numero: 10, posicao: "MEI/MC", overall: 85 }, 
      { nome: "Susan Mackensie", nomeCamisa: "Mackensie", numero: 6, posicao: "VOL/MC", overall: 82 },
      { nome: "Lisbet Kolding", nomeCamisa: "Kolding", numero: 8, posicao: "MC/MD", overall: 81 },
      { nome: "Irene Stelling", nomeCamisa: "Stelling", numero: 17, posicao: "ME/MC", overall: 80 },
      { nome: "Pernille Obel", nomeCamisa: "Obel", numero: 14, posicao: "MC", overall: 75 },
      { nome: "Jette Hummelshøj", nomeCamisa: "Hummelshøj", numero: 15, posicao: "VOL", overall: 72 }
    ],

    atacantes: [
      { nome: "Helle Jensen", nomeCamisa: "H. Jensen", numero: 9, posicao: "ATA", overall: 85 }, 
      { nome: "Annie Gam-Pedersen", nomeCamisa: "Gam-Pedersen", numero: 11, posicao: "ATA/PE", overall: 82 },
      { nome: "Annette Thychosen", nomeCamisa: "Thychosen", numero: 7, posicao: "ATA/PD", overall: 80 },
      { nome: "Henriette Henriksen", nomeCamisa: "Henriksen", numero: 13, posicao: "ATA", overall: 75 },
      { nome: "Lotte Bagge", nomeCamisa: "Bagge", numero: 18, posicao: "ATA", overall: 71 }
    ]
  },
  chinese_taipei_1991: {
    nome: "Taipé Chinesa",
    ano: 1991,
    campea: false,

    goleiras: [
      { nome: "Hong Li-chyuan", nomeCamisa: "Hong L.C.", numero: 1, posicao: "GOL", overall: 78 },
      { nome: "Lin Hui-fang", nomeCamisa: "Lin H.F.", numero: 18, posicao: "GOL", overall: 70 }
    ],

    defensoras: [
      { nome: "Shieh Su-jean", nomeCamisa: "Shieh S.J.", numero: 3, posicao: "ZAG/LIB", overall: 80 },
      { nome: "Ma Hlong-chi", nomeCamisa: "Ma H.C.", numero: 5, posicao: "ZAG", overall: 76 },
      { nome: "Lai Jui-li", nomeCamisa: "Lai J.L.", numero: 2, posicao: "LD", overall: 75 },
      { nome: "Chen Shu-chin", nomeCamisa: "Chen S.C.", numero: 11, posicao: "LE", overall: 75 },
      { nome: "Chen Mei-lan", nomeCamisa: "Chen M.L.", numero: 15, posicao: "ZAG", overall: 72 },
      { nome: "Lu Mei-tsuey", nomeCamisa: "Lu M.T.", numero: 17, posicao: "ZAG", overall: 71 }
    ],

    meio_campo: [
      { nome: "Chou Tai-ying", nomeCamisa: "Chou T.Y.", numero: 10, posicao: "MEI/MC", overall: 84 }, 
      { nome: "Shieh Shih-juan", nomeCamisa: "Shieh S.JU.", numero: 6, posicao: "VOL/MC", overall: 77 },
      { nome: "Chen Shuang-chi", nomeCamisa: "Chen S.Q.", numero: 8, posicao: "MC", overall: 76 },
      { nome: "Wu Su-ching", nomeCamisa: "Wu S.C.", numero: 12, posicao: "MD/ME", overall: 74 },
      { nome: "Lin Mei-jih", nomeCamisa: "Lin M.J.", numero: 14, posicao: "MC", overall: 72 }
    ],

    atacantes: [
      { nome: "Lin Mei-chun", nomeCamisa: "Lin M.C.", numero: 9, posicao: "ATA", overall: 81 }, 
      { nome: "Huang Yu-chuan", nomeCamisa: "Huang Y.C.", numero: 7, posicao: "ATA/PD", overall: 77 },
      { nome: "Chao Feng-ying", nomeCamisa: "Chao F.Y.", numero: 4, posicao: "ATA/PE", overall: 75 },
      { nome: "Li Mei-chin", nomeCamisa: "Li M.C.", numero: 13, posicao: "ATA", overall: 72 },
      { nome: "Chen Shu-ju", nomeCamisa: "Chen S.JU.", numero: 16, posicao: "ATA", overall: 70 }
    ]
  },
  china_1991: {
    nome: "China",
    ano: 1991,
    campea: false,

    goleiras: [
      { nome: "Zhong Honglian", nomeCamisa: "Zhong H.L.", numero: 1, posicao: "GOL", overall: 85 },
      { nome: "Li Sa", nomeCamisa: "Li Sa", numero: 18, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Shui Qingxia", nomeCamisa: "Shui Q.X.", numero: 5, posicao: "ZAG/LE", overall: 85 }, 
      { nome: "Ma Li", nomeCamisa: "Ma L.", numero: 3, posicao: "ZAG", overall: 83 },
      { nome: "Chen Xiaohong", nomeCamisa: "Chen X.H.", numero: 2, posicao: "LD", overall: 81 },
      { nome: "Li Xiuqin", nomeCamisa: "Li X.Q.", numero: 4, posicao: "ZAG/LIB", overall: 80 },
      { nome: "Zhao Hongkun", nomeCamisa: "Zhao H.K.", numero: 12, posicao: "LE", overall: 76 }
    ],

    meio_campo: [
      { nome: "Sun Qingmei", nomeCamisa: "Sun Q.M.", numero: 9, posicao: "MEI/MC", overall: 87 }, 
      { nome: "Zhou Yang", nomeCamisa: "Zhou Y.", numero: 6, posicao: "VOL/MC", overall: 82 },
      { nome: "Liu Ailing", nomeCamisa: "Liu A.L.", numero: 10, posicao: "MEI", overall: 86 }, 
      { nome: "Wu Weiying", nomeCamisa: "Wu W.Y.", numero: 7, posicao: "MD/PD", overall: 83 },
      { nome: "Li Yong", nomeCamisa: "Li Y.", numero: 8, posicao: "MC/VOL", overall: 78 },
      { nome: "Niu Lijie", nomeCamisa: "Niu L.J.", numero: 11, posicao: "ME", overall: 77 },
      { nome: "Zhang Yan", nomeCamisa: "Zhang Y.", numero: 17, posicao: "MC", overall: 72 }
    ],

    atacantes: [
      { nome: "Sun Wen", nomeCamisa: "Sun Wen", numero: 14, posicao: "ATA", overall: 84 }, 
      { nome: "Wei Haiying", nomeCamisa: "Wei H.Y.", numero: 15, posicao: "ATA/PE", overall: 82 },
      { nome: "Zhang Hong", nomeCamisa: "Zhang Hong", numero: 13, posicao: "ATA", overall: 79 },
      { nome: "Wang Liping", nomeCamisa: "Wang L.P.", numero: 16, posicao: "ATA/PD", overall: 78 }
    ]
  },
  italia_1991: {
    nome: "Itália",
    ano: 1991,
    campea: false,

    goleiras: [
      { nome: "Giorgia Brenzan", nomeCamisa: "Brenzan", numero: 1, posicao: "GOL", overall: 84 },
      { nome: "Stefania Antonini", nomeCamisa: "Antonini", numero: 12, posicao: "GOL", overall: 75 }
    ],

    defensoras: [
      { nome: "Maura Furlotti", nomeCamisa: "Furlotti", numero: 5, posicao: "ZAG", overall: 83 },
      { nome: "Paola Bonato", nomeCamisa: "Bonato", numero: 3, posicao: "LE/ZAG", overall: 81 },
      { nome: "Marina Cordenons", nomeCamisa: "Cordenons", numero: 6, posicao: "ZAG/LIB", overall: 80 },
      { nome: "Emma Iozzelli", nomeCamisa: "Iozzelli", numero: 13, posicao: "LD", overall: 78 },
      { nome: "Rosa Russo", nomeCamisa: "Russo", numero: 2, posicao: "ZAG", overall: 74 },
      { nome: "Anna Mega", nomeCamisa: "Mega", numero: 14, posicao: "LE", overall: 72 }
    ],

    meio_campo: [
      { nome: "Elisabetta Bavagnoli", nomeCamisa: "Bavagnoli", numero: 8, posicao: "MC/MD", overall: 84 },
      { nome: "Adele Frollani", nomeCamisa: "Frollani", numero: 4, posicao: "VOL/MC", overall: 81 },
      { nome: "Feriana Ferraguzzi", nomeCamisa: "Ferraguzzi", numero: 11, posicao: "MEI/ME", overall: 82 },
      { nome: "Fabiana Correra", nomeCamisa: "Correra", numero: 16, posicao: "MC", overall: 76 },
      { nome: "Florinda Ciardi", nomeCamisa: "Ciardi", numero: 15, posicao: "VOL", overall: 73 }
    ],

    atacantes: [
      { nome: "Carolina Morace", nomeCamisa: "Morace", numero: 9, posicao: "ATA", overall: 91 }, 
      { nome: "Antonella Carta", nomeCamisa: "Carta", numero: 10, posicao: "ATA/PE", overall: 85 },
      { nome: "Silvia Fiorini", nomeCamisa: "Fiorini", numero: 7, posicao: "ATA/PD", overall: 80 },
      { nome: "Rita Guarino", nomeCamisa: "Guarino", numero: 17, posicao: "ATA", overall: 79 }, 
      { nome: "Susana Marsiletti", nomeCamisa: "Marsiletti", numero: 18, posicao: "ATA", overall: 72 }
    ]
  },
  brasil_1991: {
    nome: "Brasil",
    ano: 1991,
    campea: false,

    goleiras: [
      { nome: "Meg", nomeCamisa: "Meg", numero: 1, posicao: "GOL", overall: 82 },
      { nome: "Miriam", nomeCamisa: "Miriam", numero: 12, posicao: "GOL", overall: 73 }
    ],

    defensoras: [
      { nome: "Elane", nomeCamisa: "Elane", numero: 4, posicao: "ZAG", overall: 84 }, 
      { nome: "Solange", nomeCamisa: "Solange", numero: 3, posicao: "ZAG/LIB", overall: 80 },
      { nome: "Rosa Lima", nomeCamisa: "Rosa Lima", numero: 2, posicao: "LD", overall: 79 },
      { nome: "Marisa", nomeCamisa: "Marisa", numero: 6, posicao: "LE", overall: 78 },
      { nome: "Doralice", nomeCamisa: "Dora", numero: 13, posicao: "ZAG", overall: 74 },
      { nome: "Mirian Ayer", nomeCamisa: "M. Ayer", numero: 16, posicao: "LE/ZAG", overall: 72 }
    ],

    meio_campo: [
      { nome: "Sissi", nomeCamisa: "Sissi", numero: 10, posicao: "MEI", overall: 90 },
      { nome: "Fanta", nomeCamisa: "Fanta", numero: 5, posicao: "VOL/MC", overall: 81 },
      { nome: "Marcia Taffarel", nomeCamisa: "Taffarel", numero: 8, posicao: "MC", overall: 80 },
      { nome: "Nalvinha", nomeCamisa: "Nalvinha", numero: 14, posicao: "VOL/MC", overall: 75 },
      { nome: "Pretinha", nomeCamisa: "Pretinha", numero: 17, posicao: "MEI/ATA", overall: 81 }, 
      { nome: "Maria Lucia", nomeCamisa: "M. Lúcia", numero: 15, posicao: "MC", overall: 71 }
    ],

    atacantes: [
      { nome: "Roseli", nomeCamisa: "Roseli", numero: 11, posicao: "ATA", overall: 85 }, 
      { nome: "Adriana", nomeCamisa: "Adriana", numero: 9, posicao: "ATA", overall: 81 },
      { nome: "Cebola", nomeCamisa: "Cebola", numero: 7, posicao: "ATA/PD", overall: 78 },
      { nome: "Vanda", nomeCamisa: "Vanda", numero: 18, posicao: "ATA/PE", overall: 74 }
    ]
  },
  //Não classificadas pros playoffs de outras copas
  chile_2019: {
    nome: "Chile",
    ano: 2019,
    campea: false,

    goleiras: [
      { nome: "C. Endler", nomeCamisa: "Endler", numero: 1, posicao: "GOL", overall: 93 },
      { nome: "Natalia Campos", nomeCamisa: "Campos", numero: 12, posicao: "GOL", overall: 73 },
      { nome: "Ryan Torrero", nomeCamisa: "Torrero", numero: 23, posicao: "GOL", overall: 71 }
    ],

    defensoras: [
      { nome: "Carla Guerrero", nomeCamisa: "Guerrero", numero: 3, posicao: "ZAG", overall: 79 },
      { nome: "Camila Sáez", nomeCamisa: "Sáez", numero: 18, posicao: "ZAG/LE", overall: 77 },
      { nome: "Su Helen Galaz", nomeCamisa: "Galaz", numero: 5, posicao: "LD/ZAG", overall: 74 },
      { nome: "Javiera Toro", nomeCamisa: "Toro", numero: 15, posicao: "LE", overall: 73 },
      { nome: "Rocío Soto", nomeCamisa: "Soto", numero: 2, posicao: "LD", overall: 73 },
      { nome: "Francisca Lara", nomeCamisa: "Lara", numero: 4, posicao: "LE/ME", overall: 78 },
      { nome: "Valentina Díaz", nomeCamisa: "Díaz", numero: 17, posicao: "LD", overall: 71 }
    ],

    meio_campo: [
      { nome: "Karen Araya", nomeCamisa: "Araya", numero: 8, posicao: "MC/MEI", overall: 78 },
      { nome: "Yanara Aedo", nomeCamisa: "Aedo", numero: 10, posicao: "MEI/ATA", overall: 77 },
      { nome: "Claudia Soto", nomeCamisa: "C. Soto", numero: 6, posicao: "VOL/MC", overall: 74 },
      { nome: "Yessenia López", nomeCamisa: "López", numero: 11, posicao: "MC", overall: 75 },
      { nome: "Daniela Pardo", nomeCamisa: "Pardo", numero: 14, posicao: "VOL/ZAG", overall: 73 },
      { nome: "Ana Gutiérrez", nomeCamisa: "Gutiérrez", numero: 16, posicao: "MC", overall: 71 }
    ],

    atacantes: [
      { nome: "María José Rojas", nomeCamisa: "Cote Rojas", numero: 7, posicao: "ATA/PD", overall: 76 },
      { nome: "Urrutia María José", nomeCamisa: "Urrutia", numero: 19, posicao: "ATA", overall: 75 },
      { nome: "Daniela Zamora", nomeCamisa: "Zamora", numero: 20, posicao: "PD/LD", overall: 75 },
      { nome: "Rosario Balmaceda", nomeCamisa: "Balmaceda", numero: 21, posicao: "PE/PD", overall: 73 },
      { nome: "Javiera Grez", nomeCamisa: "Grez", numero: 13, posicao: "ATA", overall: 72 },
      { nome: "Yessenia Huenteo", nomeCamisa: "Huenteo", numero: 9, posicao: "PD", overall: 72 }
    ]
  },
   brasil_2023: {
    nome: "Brasil",
    ano: 2023,
    campea: false,

    goleiras: [
      { nome: "Letícia Izidoro", nomeCamisa: "Lelê", numero: 1, posicao: "GOL", overall: 79 },
      { nome: "Bárbara", nomeCamisa: "Bárbara", numero: 12, posicao: "GOL", overall: 75 },
      { nome: "Camila", nomeCamisa: "Camila", numero: 22, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Rafaelle", nomeCamisa: "Rafaelle", numero: 4, posicao: "ZAG", overall: 84 },
      { nome: "Tamires", nomeCamisa: "Tamires", numero: 6, posicao: "LE/ME", overall: 83 },
      { nome: "Antonia", nomeCamisa: "Antonia", numero: 13, posicao: "LD/ZAG", overall: 80 },
      { nome: "Kathellen", nomeCamisa: "Kathellen", numero: 3, posicao: "ZAG", overall: 79 },
      { nome: "Bruninha", nomeCamisa: "Bruninha", numero: 2, posicao: "LD", overall: 77 },
      { nome: "Mônica", nomeCamisa: "Mônica", numero: 21, posicao: "ZAG", overall: 76 },
      { nome: "Lauren", nomeCamisa: "Lauren", numero: 14, posicao: "ZAG", overall: 75 }
    ],

    meio_campo: [
      { nome: "Ary Borges", nomeCamisa: "Ary", numero: 17, posicao: "MC/MD", overall: 84 },
      { nome: "Kerolin", nomeCamisa: "Kerolin", numero: 8, posicao: "MC/MEI", overall: 83 },
      { nome: "Adriana", nomeCamisa: "Adriana", numero: 11, posicao: "ME/PD", overall: 81 },
      { nome: "Luana", nomeCamisa: "Luana", numero: 5, posicao: "VOL", overall: 80 },
      { nome: "Duda Sampaio", nomeCamisa: "Duda", numero: 15, posicao: "MC/VOL", overall: 78 },
      { nome: "Ana Vitória", nomeCamisa: "Ana Vitória", numero: 19, posicao: "MC", overall: 77 },
      { nome: "Angelina", nomeCamisa: "Angelina", numero: 20, posicao: "VOL/MC", overall: 76 }
    ],

    atacantes: [
      { nome: "Debinha", nomeCamisa: "Debinha", numero: 9, posicao: "ATA/MEI", overall: 92 },
      { nome: "Bia Zaneratto", nomeCamisa: "Bia", numero: 16, posicao: "ATA", overall: 82 },
      { nome: "Geyse", nomeCamisa: "Geyse", numero: 18, posicao: "PD/ATA", overall: 81 },
      { nome: "Marta", nomeCamisa: "Marta", numero: 10, posicao: "MEI/ATA", overall: 92 },
      { nome: "Andressa Alves", nomeCamisa: "Andressa", numero: 7, posicao: "PE/MEI", overall: 79 },
      { nome: "Gabi Nunes", nomeCamisa: "Gabi Nunes", numero: 23, posicao: "ATA", overall: 79 }
    ]
  },
  brasil_1995: {
    nome: "Brasil",
    ano: 1995,
    campea: false,

    goleiras: [
      { nome: "Meg", nomeCamisa: "Meg", numero: 1, posicao: "GOL", overall: 83 },
      { nome: "Nélia", nomeCamisa: "Nélia", numero: 12, posicao: "GOL", overall: 74 }
    ],

    defensoras: [
      { nome: "Elane", nomeCamisa: "Elane", numero: 3, posicao: "ZAG", overall: 84 },
      { nome: "Fanta", nomeCamisa: "Fanta", numero: 4, posicao: "ZAG/LD", overall: 81 },
      { nome: "Suzy", nomeCamisa: "Suzy", numero: 2, posicao: "LE/ZAG", overall: 79 },
      { nome: "Solange", nomeCamisa: "Solange", numero: 6, posicao: "ZAG", overall: 78 },
      { nome: "Marisa", nomeCamisa: "Marisa", numero: 13, posicao: "LD", overall: 76 },
      { nome: "Yara", nomeCamisa: "Yara", numero: 19, posicao: "ZAG", overall: 73 }
    ],

    meio_campo: [
      { nome: "Sissi", nomeCamisa: "Sissi", numero: 10, posicao: "MEI/MC", overall: 95 },
      { nome: "Leda Maria", nomeCamisa: "Leda", numero: 5, posicao: "MC/VOL", overall: 82 },
      { nome: "Formiga", nomeCamisa: "Formiga", numero: 8, posicao: "VOL/MC", overall: 88 }, 
      { nome: "Cidinha", nomeCamisa: "Cidinha", numero: 15, posicao: "MC/ME", overall: 78 },
      { nome: "Valéria", nomeCamisa: "Valéria", numero: 7, posicao: "MD/LD", overall: 77 },
      { nome: "Márcia Taffarel", nomeCamisa: "Taffarel", numero: 14, posicao: "VOL", overall: 76 }
    ],

    atacantes: [
      { nome: "Pretinha", nomeCamisa: "Pretinha", numero: 11, posicao: "ATA", overall: 85 },
      { nome: "Roseli", nomeCamisa: "Roseli", numero: 9, posicao: "ATA/PE", overall: 84 },
      { nome: "Michael Jackson", nomeCamisa: "M. Jackson", numero: 17, posicao: "ATA", overall: 82 }, // Nome real: Mariléia dos Santos
      { nome: "Nalvinha", nomeCamisa: "Nalvinha", numero: 18, posicao: "ATA/PD", overall: 78 },
      { nome: "Cenira", nomeCamisa: "Cenira", numero: 16, posicao: "ATA", overall: 75 },
      { nome: "Tânia Maranhão", nomeCamisa: "Tânia", numero: 20, posicao: "ATA/ZAG", overall: 74 }
    ]
  },
   tailandia_2015: {
    nome: "Tailândia",
    ano: 2015,
    campea: false,

    goleiras: [
      { nome: "Waraporn Boonsing", nomeCamisa: "Boonsing", numero: 1, posicao: "GOL", overall: 77 },
      { nome: "Sukanya Chor. Charoenying", nomeCamisa: "Charoenying", numero: 22, posicao: "GOL", overall: 68 },
      { nome: "Yada Sengyong", nomeCamisa: "Sengyong", numero: 18, posicao: "GOL", overall: 66 }
    ],

    defensoras: [
      { nome: "Duangnapa Sritala", nomeCamisa: "Sritala", numero: 4, posicao: "ZAG", overall: 75 }, // Capitã
      { nome: "Sunisa Srangthaisong", nomeCamisa: "Srangthaisong", numero: 19, posicao: "LE", overall: 74 },
      { nome: "Warunee Phetwiset", nomeCamisa: "Phetwiset", numero: 9, posicao: "LD/MD", overall: 73 },
      { nome: "Natthakarn Chinwong", nomeCamisa: "Chinwong", numero: 3, posicao: "ZAG", overall: 72 },
      { nome: "Ainon Phancha", nomeCamisa: "Phancha", numero: 5, posicao: "ZAG/LD", overall: 71 },
      { nome: "Darut Changkhuandee", nomeCamisa: "Changkhuandee", numero: 2, posicao: "ZAG", overall: 70 },
      { nome: "Khwanruedi Yootanakarth", nomeCamisa: "Yootanakarth", numero: 15, posicao: "LD", overall: 68 }
    ],

    meio_campo: [
      { nome: "Silawan Intamee", nomeCamisa: "Intamee", numero: 7, posicao: "MC/MEI", overall: 75 },
      { nome: "Anootsara Maijarern", nomeCamisa: "Maijarern", numero: 17, posicao: "ME/LE", overall: 74 },
      { nome: "Pikul Khueanpet", nomeCamisa: "Khueanpet", numero: 6, posicao: "VOL/MC", overall: 73 },
      { nome: "Rattikan Thongsombut", nomeCamisa: "Thongsombut", numero: 12, posicao: "MD/PD", overall: 72 },
      { nome: "Naphat Seesraum", nomeCamisa: "Seesraum", numero: 8, posicao: "MC", overall: 71 },
      { nome: "Wilaiporn Boothduang", nomeCamisa: "Boothduang", numero: 16, posicao: "VOL/MC", overall: 70 }
    ],

    atacantes: [
      { nome: "Kanjana Sung-Ngoen", nomeCamisa: "Sungngoen", numero: 21, posicao: "PD/ATA", overall: 78 }, 
      { nome: "Orathai Srimanee", nomeCamisa: "Srimanee", numero: 13, posicao: "ATA/MEI", overall: 76 },
      { nome: "Taneekarn Dangda", nomeCamisa: "Dangda", numero: 10, posicao: "ATA", overall: 74 },
      { nome: "Nisa Romyen", nomeCamisa: "Romyen", numero: 23, posicao: "ATA", overall: 73 },
      { nome: "Thanatta Chawong", nomeCamisa: "Chawong", numero: 14, posicao: "ATA/PE", overall: 72 },
      { nome: "Pitsamai Sornsai", nomeCamisa: "Sornsai", numero: 20, posicao: "ATA/ZAG", overall: 71 },
      { nome: "Alisa Rukpinij", nomeCamisa: "Rukpinij", numero: 11, posicao: "PE", overall: 69 }
    ]
  },
};