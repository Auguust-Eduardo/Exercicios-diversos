// Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais

const prompt = require ("prompt-sync")();

console.clear()

let num1 = +prompt ('me diga um numero: ')
let num2 = +prompt ('me diga outro numero: ')

if (num1 > num2 ){
    console.log('o numero', num1, 'e maior' )
} else if (num2 > num1) {
    console.log('o numero', num2, 'e maior' )
} else {
    console.log('os numero sao iguais')
}