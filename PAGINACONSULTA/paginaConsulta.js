
// Mostra o pop-up de pagamento quando "Cartão de Crédito" é selecionado
//document.getElementById('forma-pagamento').addEventListener('change', function() {
//    if (this.value === 'credito') {
//       document.getElementById('payment-popup').style.display = 'block';
//   }
//}); //

// Fecha o pop-up de pagamento quando o usuário clica no "x"
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('payment-popup').style.display = 'none';
});

// Validação do formulário de pagamento
document.getElementById('pagamento-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;
    var numeroCartao = document.getElementById('numero-cartao').value;
    var validade = document.getElementById('validade').value;
    var cvv = document.getElementById('cvv').value;
    var parcelamento = document.getElementById('parcelamento').value;

    if (!nome) {
        alert('Por favor, insira seu nome completo.');
        return;
    }

    if (!email) {
        alert('Por favor, insira seu e-mail.');
        return;
    }

    if (!endereco) {
        alert('Por favor, insira seu endereço.');
        return;
    }

    if (!numeroCartao) {
        alert('Por favor, insira o número do cartão.');
        return;
    }

    if (!validade) {
        alert('Por favor, insira a validade do cartão.');
        return;
    }

    if (!cvv) {
        alert('Por favor, insira o CVV do cartão.');
        return;
    }

    if (!parcelamento) {
        alert('Por favor, insira o número de parcelas.');
        return;
    }
    if (!/^\d{16}$/.test(numeroCartao)) {
        alert('Por favor, insira um número de cartão válido.');
        return;
    }

    if (!/^\d{2}\/\d{2}$/.test(validade)) {
        alert('Por favor, insira a validade no formato MM/AA.');
        return;
    }

    if (!/^\d{3}$/.test(cvv)) {
        alert('Por favor, insira um CVV válido.');
        return;
    }

    alert('Pagamento realizado com sucesso!');
    alert('Consulta agendada com sucesso!');
    document.getElementById('payment-popup').style.display = 'none';

    document.getElementById('consulta-form').submit();
});

// Submissão do formulário de consulta
document.getElementById('consulta-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var especialidade = document.getElementById('especialidades').value;
    var dataConsulta = document.getElementById('data-consulta').value;
    var valor = document.getElementById('valor').value;
    var formaPagamento = document.getElementById('forma-pagamento').value;
    var parcelamento = document.getElementById('parcelamento').value;

    if (!especialidade) {
        alert('Por favor, selecione uma especialidade.');
        return;
    }

    if (!dataConsulta) {
        alert('Por favor, selecione uma data para a consulta.');
        return;
    }

    if (!valor) {
        alert('Por favor, insira o valor da consulta.');
        return;
    }

    if (!formaPagamento) {
        alert('Por favor, selecione a forma de pagamento.');
        return;
    }
    if (formaPagamento === 'credito') {
        document.getElementById('payment-popup').style.display = 'block';
    } else {
        alert('Consulta agendada com sucesso!');
        document.getElementById('consulta-form').submit();
    }
});
// Seletor do select de especialidades
var selectEspecialidades = document.getElementById('especialidades');

// Seletor do input de valor
var inputValor = document.getElementById('valor');

// Evento para detectar a mudança na opção selecionada
selectEspecialidades.addEventListener('change', function() {
    // Obtém o valor da opção selecionada
    var especialidadeSelecionada = selectEspecialidades.value;

    // Define o valor com base na especialidade selecionada
    switch (especialidadeSelecionada) {
        case 'Alergologia':
            inputValor.value = "50.00"; // Valor para Alergologia
            break;
        case 'Cardiologia':
            inputValor.value = "80.00"; // Valor para Cardiologia
            break;
        case 'Clínica Geral':
            inputValor.value = "60.00"; // Valor para Clínica Geral
            break;
        case 'Dermatologia':
            inputValor.value = "70.00"; // Valor para Dermatologia
            break;
        case 'Endocrinologia':
            inputValor.value = "75.00"; // Valor para Endocrinologia
            break;
        case 'Gastroenterologia':
            inputValor.value = "65.00"; // Valor para Gastroenterologia
            break;
        case 'Ginecologia':
            inputValor.value = "70.00"; // Valor para Ginecologia
            break;
        case 'Infectologia':
            inputValor.value = "55.00"; // Valor para Infectologia
            break;
        case 'Medicina esportiva':
            inputValor.value = "80.00"; // Valor para Medicina esportiva
            break;
        case 'Neurologia':
            inputValor.value = "75.00"; // Valor para Neurologia
            break;
        case 'Nutricionista':
            inputValor.value = "60.00"; // Valor para Nutricionista
            break;
        case 'Nutrição':
            inputValor.value = "60.00"; // Valor para Nutrição
            break;
        case 'Oftalmologia':
            inputValor.value = "70.00"; // Valor para Oftalmologia
            break;
        case 'Oncologia':
            inputValor.value = "85.00"; // Valor para Oncologia
            break;
        case 'Ortopedia':
            inputValor.value = "75.00"; // Valor para Ortopedia
            break;
        case 'Otorrinolaringologia':
            inputValor.value = "70.00"; // Valor para Otorrinolaringologia (ORL)
            break;
        case 'Pediatria':
            inputValor.value = "55.00"; // Valor para Pediatria
            break;
        case 'Psiquiatria':
            inputValor.value = "75.00"; // Valor para Psiquiatria
            break;
        case 'Psicologia':
            inputValor.value = "65.00"; // Valor para Psicologia
            break;
        case 'Reumatologia':
            inputValor.value = "80.00"; // Valor para Reumatologia
            break;
        case 'Urologia':
            inputValor.value = "70.00"; // Valor para Urologia
            break;
        default:
            inputValor.value = ""; // Define um valor padrão ou vazio se a especialidade não estiver definida
            break;
    }
});
// Seletor do input de valor
var inputValor = document.getElementById('valor');

// Evento para detectar a mudança na opção selecionada
selectEspecialidades.addEventListener('change', function() {
    // Código para definir o valor baseado na especialidade selecionada...

    // Torna o campo de valor somente leitura
    inputValor.readOnly = true;
});
