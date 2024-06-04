document.getElementById('pagamento-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var endereco = document.getElementById('endereco').value;
  var numeroCartao = document.getElementById('numero-cartao').value;
  var validade = document.getElementById('validade').value;
  var cvv = document.getElementById('cvv').value;

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
  this.submit();
});
