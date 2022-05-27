// Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0

const prompt = require ("prompt-sync")();

console.clear()

let num1 = +prompt ('me diga um numero: ')

console.log()

if (num1 > 0){
    console.log('Esse é um numero positivo')
} else if ( num1 < 0){
    console.log('Esse é um numero negativo') 
} else {
    console.log('Esse numero nao é aceito')
}

console.log()