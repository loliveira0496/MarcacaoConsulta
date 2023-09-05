document.addEventListener('DOMContentLoaded', function () {
  var titulo1 = document.getElementById('titulo1');
  var form1 = document.getElementById('form1');

  var titulo2 = document.getElementById('titulo2');
  var form2 = document.getElementById('form2');

  // Exibir o conteúdo do primeiro h4 por padrão
  form1.classList.remove('hidden');
  titulo1.style.color = 'white';
  titulo1.style.backgroundColor = 'black';

  titulo1.addEventListener('click', function () {
    form1.classList.toggle('hidden');
    form2.classList.add('hidden');

    if (form1.classList.contains('hidden')) {
      titulo1.style.color = 'black';
      titulo1.style.backgroundColor = 'transparent';
    } else {
      titulo1.style.color = 'white';
      titulo1.style.backgroundColor = 'black';
    }

    titulo2.style.color = 'black';
    titulo2.style.backgroundColor = 'transparent';
  });

  titulo2.addEventListener('click', function () {
    form2.classList.toggle('hidden');
    form1.classList.add('hidden');

    if (form2.classList.contains('hidden')) {
      titulo2.style.color = 'black';
      titulo2.style.backgroundColor = 'transparent';
    } else {
      titulo2.style.color = 'white';
      titulo2.style.backgroundColor = 'black';
    }

    titulo1.style.color = 'black';
    titulo1.style.backgroundColor = 'transparent';
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var agendamentosPai = document.querySelector('.agendamentos-pai');
  var agendamentosFilho = document.querySelector('.agendamentos-filho');

  agendamentosPai.addEventListener('click', function () {
    agendamentosFilho.classList.toggle('mostra');
  });
});


