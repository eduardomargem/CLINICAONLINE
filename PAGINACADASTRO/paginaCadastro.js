// Função para registrar um novo usuário
function registrar() {
    // Obtendo os valores inseridos pelo usuário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    var dataNascimento = document.getElementById('data-nascimento').value;

    // Verificando se as senhas correspondem
    if(senha !== confirmarSenha) {
        alert("As senhas não correspondem!");
        return;
    }

    // Armazenando as informações do usuário 
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('senha', senha);
    localStorage.setItem('dataNascimento', dataNascimento);

    alert("Cadastro bem-sucedido!");

    // Redirecionar para a página inicial ou painel do usuário
    window.location.href = "/PAGINAPACIENTE/paginaPaciente.html";
    // Limpar os campos do formulário
    document.getElementById('formularioRegistro').reset();
}
