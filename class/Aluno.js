class Aluno {
    constructor(nome, ps, nac1, nac2, nac3) {
        this.nome = nome;
        this.ps = parseFloat(ps);
        this.nac1 = parseFloat(nac1);
        this.nac2 = parseFloat(nac2);
        this.nac3 = parseFloat(nac3);
        var self = this;
        this.notaFinal = function () {
            var min = Math.min(self.nac1, self.nac2, self.nac3);
            return 0.5 * self.ps + (self.nac1 + self.nac2 + self.nac3 - min) * 0.25;
        };
    }
}

module.exports = Aluno;