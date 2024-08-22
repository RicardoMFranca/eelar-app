export const staticAmbients = [
    {
        id: 7, 
        nome: 'Praia Boa Viagem', 
        endereco: 'Av. Alm. Benjamin Sodré, 342 - Boa Viagem, Niterói', 
        foto_principal: require('../assets/images/temp/viagem/viagem-1.jpg'),
        fotos: [
            require('../assets/images/temp/viagem/viagem-1.jpg'),
            require('../assets/images/temp/viagem/viagem-2.jpg'),
            require('../assets/images/temp/viagem/viagem-3.jpg'),
            require('../assets/images/temp/viagem/viagem-4.jpg'),
            require('../assets/images/temp/viagem/viagem-5.jpg'),
        ],
        descricao: 'A praia de Boa Viagem em Niterói é uma pequena faixa de areia, com águas calmas, situada próxima a um dos principais cartões-postais da cidade, o MAC (Museu de Arte Contemporânea).',
        categorias: [
            {id: 8, nome: 'Praia'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Não', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Não', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Não', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Não', nome_icone: 'human-male-child'},
            {id: 10, titulo: 'Há área para caminhada?', descricao: 'Sim', nome_icone: 'walk'},
        ]
    },
    {
        id: 6, 
        nome: 'Praia de Icaraí', 
        endereco: 'Praia de Icaraí - Icaraí', 
        foto_principal: require('../assets/images/temp/icarai/icarai-1.jpg'),
        fotos: [
            require('../assets/images/temp/icarai/icarai-1.jpg'),
            require('../assets/images/temp/icarai/icarai-2.jpg'),
            require('../assets/images/temp/icarai/icarai-3.jpg'),
            require('../assets/images/temp/icarai/icarai-4.jpg'),
            require('../assets/images/temp/icarai/icarai-5.jpg'),
        ],
        descricao: 'A praia de Icaraí em Niterói é uma das mais famosas da cidade, com uma extensa faixa de areia, ciclovia, quiosques e uma vista deslumbrante do Rio de Janeiro.',
        categorias: [
            {id: 8, nome: 'Praia'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Não', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Sim', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Não', nome_icone: 'human-male-child'},
            {id: 10, titulo: 'Há área para caminhada?', descricao: 'Sim', nome_icone: 'walk'},
        ]
    },
    {
        id: 10, 
        nome: 'parque Esportivo da Concha Acústica de Niterói', 
        endereco: 'Concha Acústica de Niterói - Centro', 
        foto_principal: require('../assets/images/temp/concha/concha-1.jpg'),
        fotos: [
            require('../assets/images/temp/concha/concha-1.jpg'),
            require('../assets/images/temp/concha/concha-2.jpg'),
            require('../assets/images/temp/concha/concha-3.jpeg'),
            require('../assets/images/temp/concha/concha-4.jpeg'),
        ],
        descricao: 'O Parque Esportivo da Concha Acústica de Niterói é um dos principais pontos de encontro para os amantes de esportes e atividades ao ar livre na cidade. Localizado na área da famosa Concha Acústica, o parque oferece uma infraestrutura completa para a prática de diversas modalidades esportivas. Os visitantes podem aproveitar quadras poliesportivas, pistas de corrida e caminhada, além de equipamentos de musculação e ginástica.',
        categorias: [
            {id: 3, nome: 'Parque'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Não', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Não', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Sim', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Sim', nome_icone: 'human-male-child'},
            {id: 10, titulo: 'Há área para caminhada?', descricao: 'Sim', nome_icone: 'walk'},
        ]
    },
    {
        id: 11, 
        nome: 'Complexo Esportivo Roberto Silveira', 
        endereco: "Ponta D'areia", 
        foto_principal: require('../assets/images/temp/roberto/roberto-1.jpg'),
        fotos: [
            require('../assets/images/temp/roberto/roberto-1.jpg'),
            require('../assets/images/temp/roberto/roberto-2.jpg'),
            require('../assets/images/temp/roberto/roberto-3.jpg'),
            require('../assets/images/temp/roberto/roberto-4.jpg'),
            require('../assets/images/temp/roberto/roberto-5.jpg'),
        ],
        descricao: 'O Complexo Esportivo Roberto Silveira é um destino ideal para todas as idades, oferecendo uma infraestrutura completa com áreas de recreação para crianças, campo de futebol, bancos confortáveis, banheiros públicos em boas condições, bebedouros para garantir a hidratação e espaços equipados com churrasqueiras para eventos e piqueniques. Com áreas verdes e bem arborizadas, o parque proporciona um ambiente agradável e seguro para lazer em família.',
        categorias: [
            {id: 3, nome: 'Parque'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Sim', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Sim', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Sim', nome_icone: 'human-male-child'},
            {id: 10, titulo: 'Há área para caminhada?', descricao: 'Sim', nome_icone: 'walk'},
        ]
    },
    {
        id: 12, 
        nome: 'Centro De Artes E Esportes Unificados Ismael Silva', 
        endereco: "Estr. Gen. Eurico Gaspar Dutra, 34 - Jurujuba, Niterói - RJ, 24370-195", 
        foto_principal: require('../assets/images/temp/ceu/ceu-1.jpeg'),
        fotos: [
            require('../assets/images/temp/ceu/ceu-1.jpeg'),
            require('../assets/images/temp/ceu/ceu-2.jpeg'),
            require('../assets/images/temp/ceu/ceu-3.jpeg'),
            require('../assets/images/temp/ceu/ceu-4.jpeg'),
            require('../assets/images/temp/ceu/ceu-5.jpeg'),
        ],
        descricao: 'O Centro de Artes e Esportes Unificados Ismael Silva, em Jurujuba, é um complexo esportivo, social e cultural, que abriga biblioteca, telecentro, quadra de esportes, área de lazer, cinema, cineteatro e salas multiuso. Reformado em 2020 pela Secretaria Municipal das Culturas, o local tem cerca de 3 mil m², com atividades totalmente gratuitas para a população. Integrando cultura, esporte, lazer e educação, serviços sócio-assistenciais e inclusão digital, o CEU foi inaugurado em 2015, fruto de uma parceria entre o Governo Federal e a Prefeitura de Niterói.',
        categorias: [
            {id: 3, nome: 'Parque'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Sim', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Não', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Não', nome_icone: 'human-male-child'},
            {id: 10, titulo: 'Há área para caminhada?', descricao: 'Não', nome_icone: 'walk'},
        ]
    },
    {
        id: 8, 
        nome: 'Campo de São Bento', 
        endereco: 'Av. Roberto Silveira - Icaraí', 
        foto_principal: require('../assets/images/temp/bento/bento-1.jpg'),
        fotos: [
            require('../assets/images/temp/bento/bento-1.jpg'),
            require('../assets/images/temp/bento/bento-2.jpg'),
            require('../assets/images/temp/bento/bento-3.jpg'),
            require('../assets/images/temp/bento/bento-4.jpg'),
            require('../assets/images/temp/bento/bento-5.jpg'),
        ],
        descricao: 'O Campo de São Bento em Niterói é um grande parque urbano com áreas verdes, lagoas artificiais, ciclovia, quadras esportivas e diversos eventos culturais e gastronômicos.',
        categorias: [
            {id: 3, nome: 'Praça'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Não', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Sim', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Não', nome_icone: 'human-male-child'},
            {id: 10, titulo: 'Há área para caminhada?', descricao: 'Sim', nome_icone: 'walk'},
        ]
    },
    {
        id: 9, 
        nome: 'Parque da Cidade', 
        endereco: 'Estr. Viracao - São Francisco', 
        foto_principal: require('../assets/images/temp/cidade/cidade-1.jpg'),
        fotos: [
            require('../assets/images/temp/cidade/cidade-1.jpg'),
            require('../assets/images/temp/cidade/cidade-2.jpg'),
            require('../assets/images/temp/cidade/cidade-3.jpg'),
            require('../assets/images/temp/cidade/cidade-4.jpg'),
        ],
        descricao: 'O Parque da Cidade em Niterói é o maior parque urbano da região, com uma área de preservação ambiental, trilhas, mirantes, anfiteatro, área de piquenique e uma vista incrível da cidade.',
        categorias: [
            {id: 3, nome: 'Campo'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Sim', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Sim', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Não', nome_icone: 'human-male-child'},
            {id: 10, titulo: 'Há área para caminhada?', descricao: 'Sim', nome_icone: 'walk'},
        ]
    },
    {
        id: 2, 
        nome: 'Skate Parque Horto do Fonseca', 
        endereco: 'Alameda São Boaventura - Fonseca', 
        foto_principal: require('../assets/images/temp/fonseca/fonseca-1.jpg'),
        fotos: [
            require('../assets/images/temp/fonseca/fonseca-1.jpg'),
            require('../assets/images/temp/fonseca/fonseca-2.jpg'),
            require('../assets/images/temp/fonseca/fonseca-3.jpg'),
            require('../assets/images/temp/fonseca/fonseca-4.jpg'),
            require('../assets/images/temp/fonseca/fonseca-5.jpg'),
        ],
        descricao: 'O Horto do Fonseca em Niterói é uma área de preservação ambiental com trilhas ecológicas e um belo lago, já o Skate Parque Horto do Fonseca é um espaço dedicado aos praticantes de skate, com pistas e obstáculos variados, além de área para convivência e eventos relacionados ao esporte.',
        categorias: [
            {id: 6, nome: 'Skate Parque'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Não', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Sim', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Sim', nome_icone: 'human-male-child'},
            {id: 7, titulo: 'Há área para esportes?', descricao: 'Sim', nome_icone: 'skateboarding'},
        ]
        
    },
    {
        id: 3, 
        nome: 'Campo do Beltrão', 
        endereco: 'R. Dr. Beltrao - Santa Rosa', 
        foto_principal: require('../assets/images/temp/beltrao/beltrao-1.jpg'),
        fotos: [
            require('../assets/images/temp/beltrao/beltrao-1.jpg'),
            require('../assets/images/temp/beltrao/beltrao-2.jpg'),
            require('../assets/images/temp/beltrao/beltrao-3.jpg'),
            require('../assets/images/temp/beltrao/beltrao-4.jpg'),
            require('../assets/images/temp/beltrao/beltrao-5.jpg'),
        ],
        descricao: 'O Campo do Beltrão em Niterói é um espaço dedicado ao futebol, tendo também equipamentos de musculação e ginástica.',
        categorias: [
            {id: 5, nome: 'Campo de Futebol'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Não', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Sim', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Não', nome_icone: 'human-male-child'},
        ]
    },
    {
        id: 1, 
        nome: 'Praça Várzea das Moças', 
        endereco: 'Praça Liberdade - Várzea das Moças', 
        foto_principal: require('../assets/images/temp/varzea/varzea-1.jpg'),
        descricao: 'A Praça Várzea das Moças em Niterói é um espaço amplo com áreas verdes, bancos, e equipamentos de musculação e ginástica. É um local ideal para atividades ao ar livre e convivência comunitária.',
        fotos: [
            require('../assets/images/temp/varzea/varzea-1.jpg'),
            require('../assets/images/temp/varzea/varzea-2.jpg'),
            require('../assets/images/temp/varzea/varzea-3.jpg'),
            require('../assets/images/temp/varzea/varzea-4.jpg'),
            require('../assets/images/temp/varzea/varzea-5.jpg'),
        ],
        categorias: [
            {id: 3, nome: 'Praça'}
        ],
        informacoes: [
            {id: 1, titulo: 'Horário de Funcionamento', descricao: '24 horas', nome_icone: 'watch-variant'},
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Não', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Sim', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Não', nome_icone: 'human-male-child'},
        ]
    },
    {
        id: 4, 
        nome: 'Quadra do Jacaré', 
        endereco: 'Estr. Frei Orlando 928 - Piratininga', 
        foto_principal: require('../assets/images/temp/jacare/jacare-1.jpg'),
        fotos: [
            require('../assets/images/temp/jacare/jacare-1.jpg'),
            require('../assets/images/temp/jacare/jacare-2.jpg'),
            require('../assets/images/temp/jacare/jacare-3.jpg'),
            require('../assets/images/temp/jacare/jacare-4.jpg'),
        ],
        descricao: 'A Quadra do Jacaré em Niterói é um espaço público para a prática de esportes, principalmente futebol e basquete, com iluminação adequada e área de convivência. É bastante frequentada pelos moradores da região.',
        categorias: [
            {id: 7, nome: 'Quadra'}
        ],
        informacoes: [
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Não', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Não', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Não', nome_icone: 'human-male-child'},
        ]
    },
    {
        id: 5, 
        nome: 'Praça Levi Francisco da Cruz Nunes', 
        endereco: 'Estr. Washington Luís - Largo da batalha', 
        foto_principal: require('../assets/images/temp/largo/largo-1.jpeg'),
        descricao: 'Essa praça é um espaço animado e diversificado, com brinquedos para crianças, uma pista de skate e uma cesta de basquete. Com áreas verdes, bancos e iluminação adequada, é o local ideal para atividades ao ar livre e socialização.',
        fotos: [
            require('../assets/images/temp/largo/largo-1.jpeg'),
            require('../assets/images/temp/largo/largo-2.jpeg'),
            require('../assets/images/temp/largo/largo-3.jpeg'),
            require('../assets/images/temp/largo/largo-4.jpeg'),
            require('../assets/images/temp/largo/largo-5.jpeg'),
            require('../assets/images/temp/largo/largo-6.jpeg'),
            require('../assets/images/temp/largo/largo-7.jpeg'),
            require('../assets/images/temp/largo/largo-8.jpeg'),
        ],
        categorias: [
            {id: 3, nome: 'Praça'}
        ],
        informacoes: [
            {id: 1, titulo: 'Horário de Funcionamento', descricao: '24 horas', nome_icone: 'watch-variant'},
            {id: 2, titulo: 'Há banheiros públicos em condições de uso? Há bebedouros?', descricao: 'Não', nome_icone: 'toilet'},
            {id: 3, titulo: 'Há sombra e arborização adequada?', descricao: 'Sim', nome_icone: 'tree-outline'},
            {id: 4, titulo: 'Há equipamentos de ginástica e musculação?', descricao: 'Sim', nome_icone: 'dumbbell'},
            {id: 5, titulo: 'Há área para crianças?', descricao: 'Sim', nome_icone: 'human-male-child'},
            {id: 7, titulo: 'Há área para esportes?', descricao: 'Sim', nome_icone: 'basketball'},
        ]
    },
]

export const staticEvents = [
    {
        id: 1, 
        nome: "Aulão de Yoga", 
        categoria: 'Aulão', 
        data: '2024-08-18', 
        horario: '10:30 - 11:00', 
        endereco: 'Av. Visconde do Rio Branco, 726 - São Domingos', 
        foto_principal: require('../assets/images/temp/yoga/yoga.png'), 
        descricao: 'O evento de yoga é uma oportunidade para quem busca relaxamento, equilíbrio e conexão consigo mesmo. Realizado em um ambiente tranquilo e convidativo, os participantes serão guiados por um instrutor experiente em uma série de movimentos fluidos e respiração consciente que ajudam a acalmar a mente e relaxar o corpo. O evento é aberto para pessoas de todas as habilidades, desde iniciantes até praticantes avançados, e é projetado para fornecer uma experiência enriquecedora e inspiradora para todos. Os participantes podem esperar deixar o evento se sentindo renovados, energizados e rejuvenescidos, prontos para enfrentar o mundo com uma nova perspectiva positiva.'
    },
    {
        id: 2, 
        nome: "Djavan na praia", 
        categoria: 'Show', 
        data: '2024-09-28', 
        horario: '20:00 - 22:00', 
        endereco: 'Av. Quintino Bocaiúva, 508 - São Francisco', 
        foto_principal: require('../assets/images/temp/djavan/djavan.jpg'), 
        descricao: 'O show do Djavan é uma experiência única e emocionante que promete transportar o público para um mundo de ritmos cativantes e letras inspiradoras. Com sua voz suave e inconfundível, o cantor e compositor brasileiro apresenta um repertório de sucessos que abrangem sua carreira de mais de 40 anos. Acompanhado por músicos talentosos, Djavan traz uma mistura de jazz, MPB, funk, soul e bossa nova que criam uma atmosfera envolvente e hipnotizante. O cenário é cuidadosamente criado para criar uma experiência visual e sensorial que complementa a música. Com certeza, o show do Djavan é uma noite inesquecível que os fãs de música não vão querer perder.'
    },
    {
        id: 3, 
        nome: "Stand Up com Thiago Santineli", 
        categoria: 'Stand Up', 
        data: '2024-07-12', 
        horario: '18:00 - 20:00', 
        endereco: 'Rua Quinze de Novembro, 35 - Centro', 
        foto_principal: require('../assets/images/temp/santineli/santineli.jpg'), 
        descricao: 'O show de stand-up comedy de Thiago Santineli é uma noite de risadas garantidas, onde o comediante apresenta um conjunto de piadas inteligentes, observações sarcásticas e histórias engraçadas que prometem fazer o público rir do começo ao fim. Com um estilo de humor afiado e perspicaz, Santineli aborda diversos temas do cotidiano, desde relacionamentos, trabalho, política até temas mais profundos, sempre com uma abordagem humorística. Com sua presença de palco carismática e um ritmo dinâmico, o show de stand-up de Thiago Santineli é uma experiência inesquecível para quem busca diversão e descontração. Prepare-se para uma noite de gargalhadas e para ver o mundo sob uma nova perspectiva!'
    },
    {
        id: 4, 
        nome: "Rio Roller", 
        categoria: 'Aulão', 
        data: '2024-07-22', 
        horario: '10:00 - 12:00', 
        endereco: 'R. Jorn. Rogério Coelho Neto - Centro', 
        foto_principal: require('../assets/images/temp/patins/patins.jpg'), 
        descricao: 'O evento de patins no Caminho Niemeyer será uma oportunidade emocionante para patinadores de todas as habilidades mostrarem suas habilidades em um ambiente único e deslumbrante. Os participantes poderão desfrutar de um trajeto suave e desafiador, com vista para a Baía de Guanabara e a famosa paisagem do Rio de Janeiro. Haverá música animada, comida deliciosa e muita diversão para toda a família. Este é um evento imperdível para qualquer amante de patins ou para aqueles que desejam experimentar algo novo e emocionante.'
    },
];

export const staticCategories = [
    {id: 3, nome: "Praças/Parques", iconName: 'nature-people'},
    {id: 5, nome: "Campos de futebol", iconName: 'soccer-field'},
    {id: 6, nome: "Skate Parque", iconName: 'skateboarding'},
    {id: 7, nome: "Quadras", iconName: 'soccer-field'},
    {id: 8, nome: "Praias", iconName: 'beach'},
    // {id: 1, nome: "Aulão", iconName: 'account-group'},
    // {id: 2, nome: "Show", iconName: 'ticket'},
    // {id: 4, nome: "Teatro", iconName: 'theater'},
];