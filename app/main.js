import Uikit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

Uikit.use(Icons);

Uikit.notification({
    message: 'Bem vindo a NAC 2 do Yuri Breion',
    status: 'primary',
    pos: 'bottom-right',
    timeout: 3000
});

var adicionar = require('../src/adicionaAluno');

var btnAdiciona = document.getElementById("btnAdiciona");
btnAdiciona.addEventListener("click", adicionar);

