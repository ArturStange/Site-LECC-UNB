// Função para abrir/fechar o menu clicado
function toggleDropdown(id, event) {
    event.stopPropagation(); // Evita que o click feche na mesma hora
    var dropdown = document.getElementById(id);
    var isOculto = dropdown.classList.contains('show');
    
    // Fecha todos os dropdowns para não ficarem dois abertos
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
    }

    // Se não estava aberto, agora ele abre
    if (!isOculto) {
        dropdown.classList.add('show');
    }
}

// Fecha o dropdown se o usuário clicar em qualquer outro lugar da tela
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
}