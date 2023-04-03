export const staticAmbients = [
    {
        id: 7, 
        nome: 'Praia Boa Viagem', 
        endereco: 'Av. Alm. Benjamin Sodré - Boa Viagem', 
        foto_principal: require('../assets/images/temp/viagem/viagem-1.jpg'),
        fotos: [
            require('../assets/images/temp/viagem/viagem-1.jpg'),
            require('../assets/images/temp/viagem/viagem-2.jpg'),
            require('../assets/images/temp/viagem/viagem-3.jpg'),
            require('../assets/images/temp/viagem/viagem-4.jpg'),
            require('../assets/images/temp/viagem/viagem-5.jpg'),
        ],
        categorias: [
            {id: 1, nome: 'praia'}
        ]
    },
    {
        id: 6, 
        nome: 'Praia de Icaraí', 
        endereco: 'Av. Jorn. Alberto Francisco Torres - Icaraí', 
        foto_principal: require('../assets/images/temp/icarai/icarai-1.jpg'),
        fotos: [
            require('../assets/images/temp/icarai/icarai-1.jpg'),
            require('../assets/images/temp/icarai/icarai-2.jpg'),
            require('../assets/images/temp/icarai/icarai-3.jpg'),
            require('../assets/images/temp/icarai/icarai-4.jpg'),
            require('../assets/images/temp/icarai/icarai-5.jpg'),
        ],
        categorias: [
            {id: 1, nome: 'praia'}
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
        categorias: [
            {id: 1, nome: 'campo'}
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
        categorias: [
            {id: 1, nome: 'campo'}
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
        categorias: [
            {id: 1, nome: 'Skate Parque'}
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
        categorias: [
            {id: 1, nome: 'campo de futebol'}
        ]
    },
    {
        id: 1, 
        nome: 'Praça Várzea das Moças', 
        endereco: 'Praça Liberdade - Várzea das Moças', 
        foto_principal: require('../assets/images/temp/varzea/varzea-1.jpg'),
        fotos: [
            require('../assets/images/temp/varzea/varzea-1.jpg'),
            require('../assets/images/temp/varzea/varzea-2.jpg'),
            require('../assets/images/temp/varzea/varzea-3.jpg'),
            require('../assets/images/temp/varzea/varzea-4.jpg'),
            require('../assets/images/temp/varzea/varzea-5.jpg'),
        ],
        categorias: [{id: 1, nome: 'Praça'}]
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
        categorias: [{id: 1, nome: 'quadra'}]
    },
    {
        id: 5, 
        nome: 'Praça Levi Francisco da Cruz Nunes', 
        endereco: 'Estr. Washington Luís - Largo da batalha', 
        foto_principal: require('../assets/images/temp/largo/largo-1.jpeg'),
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
            {id: 1, nome: 'Praça'}
        ]
    },
]

export const staticEvents = [
    {
        id: 1, 
        nome: "Aulão de Yoga", 
        categoria: 'Aulão', 
        data: '2023-04-18', 
        horario: '10:30 - 11:00', 
        endereco: 'Av. Visconde do Rio Branco, 726 - São Domingos', 
        foto_principal: require('../assets/images/temp/yoga/yoga.png'), 
        descricao: 'O evento de yoga é uma oportunidade para quem busca relaxamento, equilíbrio e conexão consigo mesmo. Realizado em um ambiente tranquilo e convidativo, os participantes serão guiados por um instrutor experiente em uma série de movimentos fluidos e respiração consciente que ajudam a acalmar a mente e relaxar o corpo. O evento é aberto para pessoas de todas as habilidades, desde iniciantes até praticantes avançados, e é projetado para fornecer uma experiência enriquecedora e inspiradora para todos. Os participantes podem esperar deixar o evento se sentindo renovados, energizados e rejuvenescidos, prontos para enfrentar o mundo com uma nova perspectiva positiva.'
    },
    {
        id: 2, 
        nome: "Djavan na praia", 
        categoria: 'Show', 
        data: '2023-06-28', 
        horario: '20:00 - 22:00', 
        endereco: 'Av. Quintino Bocaiúva, 508 - São Francisco', 
        foto_principal: require('../assets/images/temp/djavan/djavan.jpg'), 
        descricao: 'O show do Djavan é uma experiência única e emocionante que promete transportar o público para um mundo de ritmos cativantes e letras inspiradoras. Com sua voz suave e inconfundível, o cantor e compositor brasileiro apresenta um repertório de sucessos que abrangem sua carreira de mais de 40 anos. Acompanhado por músicos talentosos, Djavan traz uma mistura de jazz, MPB, funk, soul e bossa nova que criam uma atmosfera envolvente e hipnotizante. O cenário é cuidadosamente criado para criar uma experiência visual e sensorial que complementa a música. Com certeza, o show do Djavan é uma noite inesquecível que os fãs de música não vão querer perder.'
    },
    {
        id: 3, 
        nome: "Stand Up com Thiago Santineli", 
        categoria: 'Stand Up', 
        data: '2023-05-12', 
        horario: '18:00 - 20:00', 
        endereco: 'Rua Quinze de Novembro, 35 - Centro', 
        foto_principal: require('../assets/images/temp/santineli/santineli.jpg'), 
        descricao: 'O show de stand-up comedy de Thiago Santineli é uma noite de risadas garantidas, onde o comediante apresenta um conjunto de piadas inteligentes, observações sarcásticas e histórias engraçadas que prometem fazer o público rir do começo ao fim. Com um estilo de humor afiado e perspicaz, Santineli aborda diversos temas do cotidiano, desde relacionamentos, trabalho, política até temas mais profundos, sempre com uma abordagem humorística. Com sua presença de palco carismática e um ritmo dinâmico, o show de stand-up de Thiago Santineli é uma experiência inesquecível para quem busca diversão e descontração. Prepare-se para uma noite de gargalhadas e para ver o mundo sob uma nova perspectiva!'
    },
    {
        id: 4, 
        nome: "Rio Roller", 
        categoria: 'Aulão', 
        data: '2023-05-22', 
        horario: '10:00 - 12:00', 
        endereco: 'R. Jorn. Rogério Coelho Neto - Centro', 
        foto_principal: require('../assets/images/temp/patins/patins.jpg'), 
        descricao: 'O evento de patins no Caminho Niemeyer será uma oportunidade emocionante para patinadores de todas as habilidades mostrarem suas habilidades em um ambiente único e deslumbrante. Os participantes poderão desfrutar de um trajeto suave e desafiador, com vista para a Baía de Guanabara e a famosa paisagem do Rio de Janeiro. Haverá música animada, comida deliciosa e muita diversão para toda a família. Este é um evento imperdível para qualquer amante de patins ou para aqueles que desejam experimentar algo novo e emocionante.'
    },
];