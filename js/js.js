//manipulador pelo programa
let Veiculo = document.getElementById('Veiculo')
let valorCar = document.getElementById('valorCar')
let valorEntrada = document.getElementById('valorEntrada')
let Parcela = document.getElementById('Parcela')

calcularDesconto = () => {
    //Valores de entrada
    let valoVeiculo = Veiculo.value
    let Valorcar = valorCar.value
    let Valorentrada = valorEntrada.value
    let parcela = Parcela.value
    //calcula valor da entrada e das parcelas
    let div = (Valorentrada / Valorcar) * 100;
    let resto = Math.round((Valorcar - Valorentrada) / parcela);
    let expre = Math.round(div)

    //
    let desconto = document.getElementById('desconto')
    let veiculo = document.getElementById('veiculo')
    let xpacela = document.getElementById('xParcela')

    //
    desconto.textContent = "Entrada: " + expre+"%"
    veiculo.textContent = "Marca: " + valoVeiculo
    xpacela.textContent = `Em ${parcela} x, O valor  da parcela sai a R$ ${resto}`
    
    /* if(Valorentrada >= Valorcar / 2){
         desconto.textContent = "Entrada: " + expre+"%"
        veiculo.textContent = "Marca: " + valoVeiculo
        xpacela.textContent = `Em ${parcela} vezes, O valor  da parcela sai a R$${resto}`
    }
    if(Valorentrada >= Valorcar / 4){
        desconto.textContent = "Entrada: " + expre+"%"
        veiculo.textContent = "Marca: " + valoVeiculo
        xpacela.textContent = `Em ${parcela} vezes, O valor  da parcela sai a R$${resto}`
    }
    if(Valorentrada <= Valorcar / 4){
        desconto.textContent = "Entrada: " + expre+"%"
        veiculo.textContent = "Marca: " + valoVeiculo
        xpacela.textContent = `Em ${parcela} vezes, O valor  da parcela sai a R$${resto}`
       } */

    
}
//evento botão, para chamar  função
btn.addEventListener('click', calcularDesconto)
