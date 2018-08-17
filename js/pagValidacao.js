var alunos = [];
var alunosTotal = 0;

$(function() {
  $('#tabelaAlunos').hide();
  $('#btnQtdAlunos').on('click', function() {
    
    var quantidadeAlunos = $('#inputQtdAlunos').val();
    adicionarInputAlunos(quantidadeAlunos);

  });
  
});

function escondeDivQtdAlunos() {
  $('#rowQtdAlunos').hide();
}

function mostrarTabelaAluno(aluno) {
  $('#tabelaAlunos').show();

  for (var i = 0; i < aluno.length; i++) {
    $('#tabelaAlunosTr').append(`
      <tr>
        <td class="text-center">${aluno[i]}</td>
      <tr>
    `);
  }
}

function adicionarInputAlunos(quantidadeAlunos) {

  alunosTotal += parseInt(quantidadeAlunos);

  for (var i = 0; i < alunosTotal; i++) {
    $('#inputAlunos').append(`
      <div class="col-md-4">
        <div class="form-group">
          <input qtd-alunos-id="${i}" class="inputTab form-control" class='form-control' placeholder='Aluno ${i + 1}'>
        </div>
      </div>
    `);
  }

  //alunos.push($('.inputTab').val());
  
  // alunos = $('.inputTab');

  escondeDivQtdAlunos();

  $('.inputTab').on('keyup', function(e) {
    var codeTab = e.keyCode;
  
    if (codeTab == '9') {
      var elementoAtual = $(this).attr('qtd-alunos-id') - 1
      console.log(elementoAtual);
      var aluno = $('[qtd-alunos-id='+ elementoAtual +']').val();
      //var ultimo = alunos[alunos.length - 1];
      mostrarTabelaAluno([aluno]);
      //mostrarTabelaAluno([ultimo]);

      //error();
    }

  });

}

function error() {

    if ($('#qtd-alunos-id').val() == "") {
      $('#mensagens').append(`
        <div class="alert alert-danger">
          Você precisa inserir algum aluno!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `);
      return;
    }
}





