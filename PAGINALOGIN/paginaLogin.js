// Função para realizar o login do usuário
function realizarLogin(event) {
    // Previne a ação padrão do formulário
    event.preventDefault();

    // Obtendo os valores inseridos pelo usuário
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Obtendo as informações do usuário armazenadas
    var nomeArmazenado = localStorage.getItem('nome');
    var emailArmazenado = localStorage.getItem('email');
    var cpfArmazenado = localStorage.getItem('cpf');
    var senhaArmazenada = localStorage.getItem('senha');
    var dataNascimentoArmazenada = localStorage.getItem('dataNascimento');

    // Verificando as credenciais
    if(email === emailArmazenado && senha === senhaArmazenada) {
        alert("Login bem-sucedido!");
        // Redirecionar para a página inicial ou painel do usuário
        window.location.href = "/PAGINAPACIENTE/paginaPaciente.html"; 
    } else {
        alert("Erro no login! Por favor, verifique seu e-mail e senha.");
    }
}

// Adicionando o evento de submit ao formulário
document.getElementById('formularioLogin').addEventListener('submit', realizarLogin);
