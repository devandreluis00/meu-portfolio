// Seleciona o botão de voltar ao topo
const btnTop = document.getElementById('btn-top');

// Adiciona um evento que escuta a rolagem da página
window.addEventListener('scroll', () => {
    // Se a página rolar mais de 300px para baixo, mostra o botão
    if (window.scrollY > 300) {
        btnTop.classList.add('show');
    } else {
        // Se voltar para o topo, esconde o botão
        btnTop.classList.remove('show');
    }
});

// Quando o botão for clicado, sobe suavemente
btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Faz a rolagem ser animada e suave
    });
});


