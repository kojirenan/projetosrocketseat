/*
  Solicite que o usuário insira 2 números e calcule:
    * a soma dos dois números
    * a subtração dos dois números
    * a multiplicação dos dois números
    * a divisão dos dois números
    * o resto da divisão dos dois números
  
  Verfique também:
    * se a soma é par ou ímpar
    * se os dois números são iguais
*/

let numberOne = Number(prompt("Insira o primeiro número"))
let numberTwo = Number(prompt("Insira o segundo número"))

alert(`A soma dos dois números é: ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é: ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é: ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é: ${numberOne / numberTwo}`)
alert(`O resto da divisão dos dois números é: ${numberOne % numberTwo}`)

const sum = numberOne + numberTwo

if (sum % 2 != 0) {
  alert("A soma dos números é impar")
} else {
  alert("A soma dos números é par")
}

if (numberOne != numberTwo) {
  alert("Os números são diferentes")
} else {
  alert("Os números são iguais")
}