document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.imagem-3d');
    const classes = ['ativa', 'proxima', 'anterior'];
    let posicoes = [0, 1, 2]; // Índices que controlam a ordem das classes

    // Altera as imagens a cada 3.5 segundos
    setInterval(() => {
        // Rotaciona o array de posições (o último vai para o começo)
        posicoes.unshift(posicoes.pop());

        // Aplica a nova classe correta para cada imagem limpando as antigas
        imagens.forEach((img, index) => {
            img.classList.remove('ativa', 'proxima', 'anterior');
            img.classList.add(classes[posicoes[index]]);
        });
    }, 3500);
});

const trackCards = document.getElementById('slider-cards');
    const btnAvancar = document.getElementById('btn-avancar');
    const btnVoltar = document.getElementById('btn-voltar');
    
    let indexCardAtual = 0;

    // Função que calcula o quanto deslizar para o lado
    function atualizarSliderCards() {
        const cards = trackCards.querySelectorAll('.card');
        if (cards.length === 0) return;

        // Pega a largura do card + o gap (espaçamento) entre eles
        const larguraCard = cards[0].offsetWidth;
        const gap = parseFloat(window.getComputedStyle(trackCards).gap) || 0;
        const movimento = larguraCard + gap;
        
        // Desliza a trilha
        trackCards.style.transform = `translateX(-${indexCardAtual * movimento}px)`;
    }

    // Clique na seta DIREITA (Avançar)
    btnAvancar.addEventListener('click', () => {
        const cards = trackCards.querySelectorAll('.card');
        
        // Calcula quantos cards cabem na tela atualmente (ex: 3 no PC, 1 no celular)
        const cardsVisiveis = Math.round(trackCards.parentElement.offsetWidth / cards[0].offsetWidth);
        
        // Calcula o limite máximo de cliques permitidos para não sumir tudo
        const maxCliques = cards.length - cardsVisiveis;

        if (indexCardAtual < maxCliques) {
            indexCardAtual++;
            atualizarSliderCards();
        }
    });

    // Clique na seta ESQUERDA (Voltar)
    btnVoltar.addEventListener('click', () => {
        if (indexCardAtual > 0) {
            indexCardAtual--;
            atualizarSliderCards();
        }
    });

    // Se o usuário redimensionar a tela, ajusta o slider para não ficar quebrado
    window.addEventListener('resize', () => {
        indexCardAtual = 0;
        atualizarSliderCards();
    });