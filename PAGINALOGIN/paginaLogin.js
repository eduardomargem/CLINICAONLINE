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
    if(email === emailArmazenado && senha === senhaArmazenada) {
        // Define usuarioLogado como true se as credenciais estiverem corretas
        var usuarioLogado = true;
        alert("Login bem-sucedido!");
        // Redirecionar para a página inicial ou painel do usuário
        window.location.href = "/PAGINAPACIENTE/paginaPaciente.html"; 
    } else {
        // Define usuarioLogado como false se as credenciais estiverem incorretas
        var usuarioLogado = false;
        alert("Erro no login! Por favor, verifique seu e-mail e senha.");
    }
}

// Adicionando o evento de submit ao formulário
document.getElementById('formularioLogin').addEventListener('submit', realizarLogin);

