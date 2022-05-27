// Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
// Crie uma variável para receber o valor, com conversão para inteiro
// Para um número ser par, a divisão dele por 2 tem que dar resto 0


const prompt = require ("prompt-sync")();

console.clear()

let numero = +prompt ('me diga um numero: ')

let conta = numero % 2 

if (conta == 0) {
    console.log('É UM NUMERO PAR')
} else {
    console.log('E UM NUMERO IMPAR')
}