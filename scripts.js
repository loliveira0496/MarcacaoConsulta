document.addEventListener('DOMContentLoaded', function () {
  var titulo1 = document.getElementById('titulo1');
  var form1 = document.getElementById('form1');

  var titulo2 = document.getElementById('titulo2');
  var form2 = document.getElementById('form2');

  titulo1.addEventListener('click', function () {
    form1.classList.toggle('hidden');
    form2.classList.add('hidden');  // Esconde o form2 ao clicar no titulo1
  });

  titulo2.addEventListener('click', function () {
    form2.classList.toggle('hidden');
    form1.classList.add('hidden');  // Esconde o form1 ao clicar no titulo2
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var agendamentosPai = document.querySelector('.agendamentos-pai');
  var agendamentosFilho = document.querySelector('.agendamentos-filho');

  agendamentosPai.addEventListener('click', function () {
    agendamentosFilho.classList.toggle('mostra');
  });
});
