linhaAluno = (aluno) => {
    var html="";
    html += "<tr> \
              <td>" + aluno.nome + "</td> \
              <td>" + aluno.ps + "</td> \
              <td>" + aluno.nac1 + "</td> \
              <td>" + aluno.nac2 + "</td> \
              <td>" + aluno.nac3 + "</td> \
              <td>" + aluno.notaFinal() + "</td> \
            </tr>";
    return html;
}

module.exports = linhaAluno;