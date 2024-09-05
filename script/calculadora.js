let operacao = '';

function setOperacao(op){
    operacao = op;
}

function calcular() {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let resultado;

    
    switch(operacao) {
        case 'somar':
            resultado = num1 + num2
            break
        case 'subtrair':
            resultado = num1 - num2
            break
        case 'multiplicar':
            resultado = num1 * num2
            break
        case 'dividir':
            if(num2 == 0){
                resultado = 'Erro!! Não é possivel dividir por 0'
            } else {
                resultado = num1 / num2
            }
            break            
        default:
            resultado = 'Operação Inválida'
    }
    

    document.getElementById('demo').innerHTML = "Resultado =" + resultado
}