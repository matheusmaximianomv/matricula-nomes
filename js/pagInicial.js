var alunos = [];
var alunosTotal = 0;

$(function() {
  $('#tabelaAlunos').hide();
  $('#btnQtdAlunos').on('click', function(e) {
    e.preventDefault();
    var quantidadeAlunos = $('#inputQtdAlunos').val();
    adicionarInputAlunos(quantidadeAlunos);
  });
  
});

function mostraTabelaAlunos(alunos) {
  $('#tabelaAlunos').show();
  for (var i = 0; i < alunos.length; i++) {
    $('#tabelaAlunosTr').append(`
      <tr>
        <td class="text-center">${alunos[i]}</td>
      <tr>
    `);
  } 
  
}

function escondeDivQtdAlunos() {
  $('#rowQtdAlunos').hide();
}

function escondeImput() {
  $('#inputAlunos').hide()
}

function adicionarInputAlunos(quantidadeAlunos) {

  alunosTotal += parseInt(quantidadeAlunos);

  for (var i = 0; i < alunosTotal; i++) {
    $('#inputAlunos').append(`
      <div class="col-md-4">
        <div class="form-group">
          <input qtd-alunos-id="${i}" class='form-control' placeholder='Aluno ${i + 1}'>
        </div>
      </div>
    `);
  }

  $('#inputAlunos').append(`
    <div class="col-md-12">
      <div class="form-group">
        <button class="btn btn-primary" id="salvarAlunos"> Salvar </button>
      </div>
    </div>
  `)

  escondeDivQtdAlunos();

  $('#salvarAlunos').on('click', function() {
	  for(var i = 0; i < alunosTotal; i++) {
      alunos.push($('[qtd-alunos-id='+ i +']').val())
    }

    mostraTabelaAlunos(alunos);
    escondeImput(); 
  });
  
}

