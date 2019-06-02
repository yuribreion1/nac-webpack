import validaNota from './validaNota';
import Aluno from '../class/Aluno';
import { push } from '../src/lista';
import renderiza from '../src/renderizar';

adicionar = () => {
    var cxNome = document.getElementById("txtNome").value;
    var cxPS = document.getElementById("txtPS").value;
    var cxNac1 = document.getElementById("txtNAC1").value;
    var cxNac2 = document.getElementById("txtNAC2").value;
    var cxNac3 = document.getElementById("txtNAC3").value;


    if(validaNota(cxPS) && validaNota(cxNac1) && validaNota(cxNac2) && validaNota(cxNac3)){
        var aluno = new Aluno(cxNome, cxPS, cxNac1, cxNac2, cxNac3);
        push(aluno);
        renderiza();
    }else{
        alert("As notas devem ser numéricas e estar entre 0 e 10");
    }

}

export default adicionar;