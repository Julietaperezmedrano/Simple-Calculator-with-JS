const txtOp1 = document.getElementById("operadorA")
const txtOp2 = document.getElementById("operadorB")
const txtOperacion = document.getElementById("operador")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener("click", calcular)

function calcular(event){
    event.preventDefault();
    const operador = txtOperacion.value;
    const operador1 = parseFloat(txtOp1.value);
    const operador2= parseFloat(txtOp2.value);

    if (operador == "+" || operador == "-" || operador == "*" || operador == "/") {
        let resultado;
        switch (operador) {
            case "+":
                resultado = operador1 + operador2;
                break;
            case "-":
                resultado = operador1 - operador2;
                break;
            case "*": 
                resultado = operador1 * operador2;
                break;
            case "/":
                resultado = operador1 / operador2;
                break;
        }
        pResultado.innerText = "= " + resultado;
    } else {
        pResultado.innerText = "calculo imposible"
    }
}