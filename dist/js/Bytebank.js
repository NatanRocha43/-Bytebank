let saldo = 3000;
const elementoSaldo = document.querySelector('.valor');
elementoSaldo.textContent = saldo.toString();
console.log('teste');
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Preencha todos os campos da transação');
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert('invalida');
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    elementoFormulario.reset();
});
