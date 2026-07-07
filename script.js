// Seleciona o botão de alternar tema pelo ID do html
const botaoTema = document.getElementById('alternar-tema');

// Monitora o clique no botão
botaoTema.addEventListener('click', () => {
    // Adiciona ou remove a classe modo-escuro do body a cada clique
    document.body.classList.toggle('modo-escuro');
});
