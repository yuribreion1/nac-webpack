validaNota = (nota) => {
    nota = parseFloat(nota);
    if (nota != NaN && nota >= 0 && nota <= 10)
        return true;
    else
        return false;
}

module.exports = validaNota;