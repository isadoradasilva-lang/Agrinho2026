// Seleção dos elementos HTML
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const likeCountEl = document.getElementById('likeCount');
const dislikeCountEl = document.getElementById('dislikeCount');

// Carrega os valores iniciais do localStorage ou define como zero
let likes = parseInt(localStorage.getItem('likes')) || 0;
let dislikes = parseInt(localStorage.getItem('dislikes')) || 0;
let userVote = localStorage.getItem('userVote') || null;

// Atualiza a tela com os dados salvos
function updateUI() {
    likeCountEl.textContent = likes;
    dislikeCountEl.textContent = dislikes;

    // Remove as classes ativas de ambos
    likeBtn.classList.remove('active');
    dislikeBtn.classList.remove('active');

    // Adiciona a classe ativa baseada no voto atual
    if (userVote === 'like') {
        likeBtn.classList.add('active');
    } else if (userVote === 'dislike') {
        dislikeBtn.classList.add('active');
    }

    // Salva no navegador 
    localStorage.setItem('likes', likes);
    localStorage.setItem('dislikes', dislikes);
    localStorage.setItem('userVote', userVote || '');
}

// Evento de clique no botão de Like
likeBtn.addEventListener('click', () => {
    if (userVote === 'like') {
        likes--;
        userVote = null;
    } else {
        if (userVote === 'dislike') {
            dislikes--;
        }
        likes++;
        userVote = 'like';
    }
    updateUI();
});

// Evento de clique no botão de Dislike
dislikeBtn.addEventListener('click', () => {
    if (userVote === 'dislike') {
        dislikes--;
        userVote = null;
    } else {
        if (userVote === 'like') {
            likes--;
        }
        dislikes++;
        userVote = 'dislike';
    }
    updateUI();
});

// Inicializa a interface ao carregar a página
updateUI();
