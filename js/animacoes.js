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