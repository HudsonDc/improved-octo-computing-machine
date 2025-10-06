// Estrutura de dados (JSON)
const dadosItens = [
    {
        id: 1,
        titulo: "Album Title One",
        artista: "Artist Name",
        imagemCapa: "https://picsum.photos/250?random=1",
        anoLancamento: 2023,
        genero: "Indie Rock",
        descricao: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        fotosVinculadas: [
            { imagem: "https://picsum.photos/400/300?random=11", tituloFoto: "Show de Lançamento" },
            { imagem: "https://picsum.photos/400/300?random=12", tituloFoto: "Banda no Estúdio" }
        ]
    },
    {
        id: 2,
        titulo: "Second Wave",
        artista: "Synth Collective",
        imagemCapa: "https://picsum.photos/250?random=2",
        anoLancamento: 2024,
        genero: "Synthwave",
        descricao: "Explorando novas sonoridades, 'Second Wave' é uma jornada nostálgica pelos anos 80 com uma roupagem moderna. A produção foi meticulosa, utilizando sintetizadores clássicos.",
        fotosVinculadas: [
            { imagem: "https://picsum.photos/400/300?random=21", tituloFoto: "Gravação do Clipe" },
            { imagem: "https://picsum.photos/400/300?random=22", tituloFoto: "Arte Conceitual" }
        ]
    },
    {
        id: 3,
        titulo: "Acoustic Sessions",
        artista: "Folk Trio",
        imagemCapa: "https://picsum.photos/250?random=3",
        anoLancamento: 2022,
        genero: "Folk",
        descricao: "Um álbum intimista gravado ao vivo, capturando a essência crua das composições. 'Acoustic Sessions' traz versões despidas de grandes sucessos e algumas faixas inéditas.",
        fotosVinculadas: [
            { imagem: "https://picsum.photos/400/300?random=31", tituloFoto: "Violão Usado na Gravação" }
        ]
    },
    {
        id: 4,
        titulo: "Digital Dreams",
        artista: "DJ Electron",
        imagemCapa: "https://picsum.photos/250?random=4",
        anoLancamento: 2025,
        genero: "Eletrônica",
        descricao: "A vanguarda da música eletrônica. 'Digital Dreams' mistura batidas complexas com melodias etéreas, criando uma experiência sonora única para pistas de dança e fones de ouvido.",
        fotosVinculadas: [
            { imagem: "https://picsum.photos/400/300?random=41", tituloFoto: "Mesa de Mixagem" },
            { imagem: "https://picsum.photos/400/300?random=42", tituloFoto: "Festival de Música" }
        ]
    }
];

const dadosNoticias = [
    {
        id: 1,
        titulo: "Novo Festival Anunciado",
        resumo: "Um novo festival de música indie acontecerá no próximo verão...",
        imagem: "https://picsum.photos/300/200?random=51",
        conteudoCompleto: "Os organizadores do 'Summer Vibe Fest' confirmaram hoje que a primeira edição do evento acontecerá em julho. Embora o line-up completo ainda seja um segredo, fontes indicam que grandes nomes da cena indie rock e synthwave estão em negociação. O local escolhido foi o Parque das Nações, conhecido por sua excelente infraestrutura para grandes eventos."
    },
    {
        id: 2,
        titulo: "Artist Name Lança Single Surpresa",
        resumo: "Fãs foram pegos de surpresa com o lançamento do novo single...",
        imagem: "https://picsum.photos/300/200?random=52",
        conteudoCompleto: "Sem nenhum aviso prévio, Artist Name disponibilizou em todas as plataformas de streaming seu novo single 'Midnight Drive'. A faixa explora uma sonoridade mais eletrônica, distanciando-se do seu trabalho anterior. A recepção dos fãs tem sido extremamente positiva, com muitos elogiando a coragem e a inovação do artista."
    },
    {
        id: 3,
        titulo: "Turnê Mundial de Synth Collective",
        resumo: "A banda Synth Collective anunciou as datas de sua primeira turnê...",
        imagem: "https://picsum.photos/300/200?random=53",
        conteudoCompleto: "Após o sucesso de seu último álbum, a banda Synth Collective finalmente anunciou sua tão esperada turnê mundial. A 'Digital Dreams Tour' começará em Lisboa em setembro, passará por várias capitais europeias e seguirá para a América do Norte no final do ano. Os ingressos começarão a ser vendidos na próxima semana."
    },
    {
        id: 4,
        titulo: "Vinil Volta a Crescer em Vendas",
        resumo: "As vendas de discos de vinil superaram as de CDs pelo terceiro ano consecutivo...",
        imagem: "https://picsum.photos/300/200?random=54",
        conteudoCompleto: "Um relatório recente da indústria musical confirmou que a mídia física continua relevante, com o vinil liderando o caminho. As vendas de LPs cresceram 15% no último ano, impulsionadas por colecionadores e novos entusiastas que buscam uma experiência auditiva mais tátil e de alta fidelidade. Lojas de discos independentes relatam um aumento significativo no movimento."
    }
];

// Função principal que roda quando o DOM está carregado
document.addEventListener('DOMContentLoaded', () => {
    const pagina = window.location.pathname.split('/').pop();

    if (pagina === 'index.html' || pagina === '') {
        carregarItensIndex();
        carregarNoticias();
    } else if (pagina === 'albums.html') {
        carregarAlbumsItem();
    } else if (pagina === 'noticia.html') {
        carregarDetalheNoticia();
    }
});

// Função para popular a grade de itens no index.html
function carregarItensIndex() {
    const gradeConteudo = document.getElementById('grade-conteudo');
    if (!gradeConteudo) return;

    gradeConteudo.innerHTML = ''; // Limpa o conteúdo estático

    dadosItens.forEach(item => {
        const itemHtml = `
            <a href="albums.html?id=${item.id}" class="grade-row-link">
                <div class="grade-row">
                    <img class="capa-album" src="${item.imagemCapa}" alt="Capa do álbum ${item.titulo}">
                    <div class="texto-albums">
                        <h3>${item.titulo}</h3>
                        <p>Artista: ${item.artista}</p>
                    </div>
                </div>
            </a>
        `;
        gradeConteudo.innerHTML += itemHtml;
    });
}


function carregarAlbumsItem() {
    const params = new URLSearchParams(window.location.search);
    const itemId = parseInt(params.get('id'));
    const item = dadosItens.find(i => i.id === itemId);

    const containerGeral = document.getElementById('info-geral');
    const containerFotos = document.getElementById('fotos-vinculadas');

    if (!item || !containerGeral || !containerFotos) {
        if (containerGeral) containerGeral.innerHTML = '<h1>Item não encontrado!</h1>';
        return;
    }

    // Popula a seção de informações gerais
    containerGeral.innerHTML = `
        <img src="${item.imagemCapa}" alt="Capa do ${item.titulo}" class="detalhe-imagem-principal">
        <div class="detalhe-texto">
            <h1>${item.titulo}</h1>
            <h2>Artista: ${item.artista}</h2>
            <p><strong>Ano de Lançamento:</strong> ${item.anoLancamento}</p>
            <p><strong>Gênero:</strong> ${item.genero}</p>
            <p class="detalhe-descricao">${item.descricao}</p>
        </div>
    `;

    // Popula a seção de fotos vinculadas
    containerFotos.innerHTML = '<h2>Fotos Vinculadas</h2>';
    if (item.fotosVinculadas.length > 0) {
        const galeria = document.createElement('div');
        galeria.className = 'galeria-fotos';
        item.fotosVinculadas.forEach(foto => {
            galeria.innerHTML += `
                <div class="foto-item">
                    <img src="${foto.imagem}" alt="${foto.tituloFoto}">
                    <p>${foto.tituloFoto}</p>
                </div>
            `;
        });
        containerFotos.appendChild(galeria);
    } else {
        containerFotos.innerHTML += '<p>Nenhuma foto vinculada para este item.</p>';
    }
}

// Função para popular a seção de notícias no index.html
function carregarNoticias() {
    const areaNoticias = document.getElementById('area-noticias');
    if (!areaNoticias) return;

    areaNoticias.innerHTML = '<h2>Últimas Notícias</h2>';
    const container = document.createElement('div');
    container.className = 'noticias-container';

    dadosNoticias.forEach(noticia => {
        const noticiaHtml = `
            <a href="noticia.html?id=${noticia.id}" class="noticia-link">
                <div class="noticia-card">
                    <img src="${noticia.imagem}" alt="${noticia.titulo}">
                    <div class="noticia-texto">
                        <h3>${noticia.titulo}</h3>
                        <p>${noticia.resumo}</p>
                    </div>
                </div>
            </a>
        `;
        container.innerHTML += noticiaHtml;
    });
    areaNoticias.appendChild(container);
}

// Função para carregar o detalhe de uma notícia em noticia.html
function carregarDetalheNoticia() {
    const params = new URLSearchParams(window.location.search);
    const noticiaId = parseInt(params.get('id'));
    const noticia = dadosNoticias.find(n => n.id === noticiaId);

    const container = document.getElementById('noticia-detalhe-container');

    if (noticia && container) {
        container.innerHTML = `
            <img src="${noticia.imagem.replace('300/200', '900/400')}" alt="${noticia.titulo}">
            <h1>${noticia.titulo}</h1>
            <p>${noticia.conteudoCompleto}</p>
        `;
    } else if (container) {
        container.innerHTML = '<h1>Notícia não encontrada!</h1>';
    }
}