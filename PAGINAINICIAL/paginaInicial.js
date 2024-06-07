//SLIDER
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
  nextImage();
}, 2000);

function nextImage() {
  count++;
  if (count>5) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
//SLIDER

// Adicionando um evento de clique ao botão "AGENDAR CONSULTA"
document.getElementById('agendaconsulta').addEventListener('click', function() {
    // Função para verificar se o usuário está logado e redirecionar para a página de agendamento
    function verificarLoginEAgendarConsulta() {
        // Obtendo as informações do usuário armazenadas
        var emailArmazenado = localStorage.getItem('email');
        var senhaArmazenada = localStorage.getItem('senha');

        // Verifica se as informações de login estão armazenadas
        if (emailArmazenado && senhaArmazenada) {
            // Define usuarioLogado como true se as credenciais estiverem armazenadas
            var usuarioLogado = true;
        } else {
            // Define usuarioLogado como false se as credenciais não estiverem armazenadas
            var usuarioLogado = false;
        }

        // Se o usuário estiver logado, redirecione para a página de agendamento
        if (usuarioLogado) {
            window.location.href = "/PAGINACONSULTA/paginaConsulta.html";
        } else {
            window.location.href = "/PAGINALOGIN/paginaLogin.html?returnUrl=/PAGINACONSULTA/paginaConsulta.html";
        }
    }

    // Chama a função de verificação de login e agendamento quando o botão é pressionado
    verificarLoginEAgendarConsulta();
});
// Adicionando um evento de clique ao botão "AREA DO PACIENTE"
document.getElementById('areapaciente').addEventListener('click', function() {
  // Função para verificar se o usuário está logado e redirecionar para a página de agendamento
  function verificarLoginEAgendarConsulta() {
      // Obtendo as informações do usuário armazenadas
      var emailArmazenado = localStorage.getItem('email');
      var senhaArmazenada = localStorage.getItem('senha');

      // Verifica se as informações de login estão armazenadas
      if (emailArmazenado && senhaArmazenada) {
          // Define usuarioLogado como true se as credenciais estiverem armazenadas
          var usuarioLogado = true;
      } else {
          // Define usuarioLogado como false se as credenciais não estiverem armazenadas
          var usuarioLogado = false;
      }

      // Se o usuário estiver logado, redirecione para a página de agendamento
      if (usuarioLogado) {
          window.location.href = "/PAGINAPACIENTE/paginaPaciente.html";
      } else {
          window.location.href = "/PAGINALOGIN/paginaLogin.html?returnUrl=/PAGINAPACIENTE/paginaPaciente.html";
      }
  }

  // Chama a função de verificação de login e agendamento quando o botão é pressionado
  verificarLoginEAgendarConsulta();
});

//Adicionando um evento de clique ao botão "CONSULTAS"
document.getElementById('paginaconsulta').addEventListener('click', function() {
  // Função para verificar se o usuário está logado e redirecionar para a página de agendamento
  function verificarLoginEAgendarConsulta() {
      // Obtendo as informações do usuário armazenadas
      var emailArmazenado = localStorage.getItem('email');
      var senhaArmazenada = localStorage.getItem('senha');

      // Verifica se as informações de login estão armazenadas
      if (emailArmazenado && senhaArmazenada) {
          // Define usuarioLogado como true se as credenciais estiverem armazenadas
          var usuarioLogado = true;
      } else {
          // Define usuarioLogado como false se as credenciais não estiverem armazenadas
          var usuarioLogado = false;
      }

      // Se o usuário estiver logado, redirecione para a página de agendamento
      if (usuarioLogado) {
          window.location.href = "/PAGINACONSULTA/paginaConsulta.html";
      } else {
          window.location.href = "/PAGINALOGIN/paginaLogin.html?returnUrl=/PAGINACONSULTA/paginaConsulta.html";
      }
  }

  // Chama a função de verificação de login e agendamento quando o botão é pressionado
  verificarLoginEAgendarConsulta();
});