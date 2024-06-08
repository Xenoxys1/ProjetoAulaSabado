function pegarValor() {
    const nomeProd = document.getElementById('produto');
    const valor = document.getElementById('valor');
    const percent = document.getElementById('percento');
    if (percent.value >= 0 && percent.value <= 100) {
        calcular(nomeProd.value, valor.value, percent.value);
    } else {
        limpar();
        limparRes();
        alert('Valores Inválidos!');
    }
}

function limpar() {
    document.getElementById('produto').value = null;
    document.getElementById('valor').value = null;
    document.getElementById('percento').value = null;
}

function calcular(prod, val, perc) {
    const valDesc = (perc / 100) * val;
    const valFin = val - valDesc;
    const prodRes = document.getElementById('produtoRes');
    prodRes.value = prod;
    const valDesRes = document.getElementById('valorDes');
    valDesRes.value = valDesc;
    const valFinRes = document.getElementById('valorFinal');
    valFinRes.value = valFin;
}

function limparRes() {
    document.getElementById('produtoRes').value = null;
    document.getElementById('valorDes').value = null;
    document.getElementById('valorFinal').value = null;
}