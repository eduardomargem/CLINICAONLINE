// Função para realizar o login do usuário
function realizarLogin(event) {
    // Previne a ação padrão do formulário
    event.preventDefault();

    // Obtendo os valores inseridos pelo usuário
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Obtendo as informações do usuário armazenadas
    var emailArmazenado = localStorage.getItem('email');
    var senhaArmazenada = localStorage.getItem('senha');

    // Verificando as credenciais
    if (email === emailArmazenado && senha === senhaArmazenada) {
        var usuarioLogado = true;
        alert("Login bem-sucedido!");

        // Obtenha o parâmetro returnUrl da URL
        var urlParams = new URLSearchParams(window.location.search);
        var returnUrl = urlParams.get('returnUrl');

        if (returnUrl) {
            window.location.href = returnUrl;
        } else {
            window.location.href = "/PAGINAPACIENTE/paginaPaciente.html";
        }
    } else {
        var usuarioLogado = false;
        alert("Erro no login! Por favor, verifique seu e-mail e senha.");
    }
}

// Adicionando o evento de submit ao formulário
document.getElementById('formularioLogin').addEventListener('submit', realizarLogin);