
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let adicao = document.getElementById('adicao')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(adicao: number) {
    if (campoSaldo) {
        saldoTotal += adicao
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    adicao.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(adicao.value)); 
    });
}
botaoLimpar.addEventListener('click', () => { 
    limparSaldo();
});

