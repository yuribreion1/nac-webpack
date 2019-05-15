var lista = require('../src/lista');
var linhaAluno = require('../src/adicionarLinhaAluno');

renderiza = () => {
    var html = "";
    var mediaSala = 0;
    lista.map((aluno) => {
        html += linhaAluno(aluno);
        mediaSala += aluno.notaFinal();
    });

    document.getElementById("lista").innerHTML = html;
    document.getElementById("media").innerHTML = mediaSala / lista.length;

}

module.exports = renderiza;