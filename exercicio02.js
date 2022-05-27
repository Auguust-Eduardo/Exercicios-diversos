// Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e 
// lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa 
// que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
// Salários até R$ 280,00 (incluindo): aumento de 20%. 
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.
// Após o aumento ser realizado, informe na tela:
// O salário antes do reajuste.
// O percentual de aumento aplicado.
// O valor do aumento.
// O novo salário, após o aumento.

const prompt = require ("prompt-sync")();

console.clear()

let salario = +prompt ('digite o valor do salario: ');

console.log()

let aumt1 = salario * 0.2
let aumt2 = salario * 0.15
let aumt3 = salario * 0.1
let aumt4 = salario * 0.05

let porct1 = ('20%')
let porct2 = ('15%')
let porct3 = ('10%')
let porct4 = ('5%')

let nvaument1 = salario + aumt1
let nvaument2 = salario + aumt2
let nvaument3 = salario + aumt3
let nvaument4 = salario + aumt4

if (salario <= 280){
    console.log('O seu salario antes do reajuste é: ', salario, '\nfoi aplicado um aumento de: ',porct1, '\no aumneto foi de: ', aumt1, '\no seu salario apos aumneto é de: ', nvaument1)  
} else if (salario > 280 && salario < 700){
    console.log('O seu salario antes do reajuste é: ', salario, '\nfoi aplicado um aumento de: ',porct2, '\no aumneto foi de: ', aumt2, '\no seu salario apos aumneto é de: ', nvaument2)
} else if (salario > 700 && salario < 1500){
    console.log('O seu salario antes do reajuste é: ', salario, '\nfoi aplicado um aumento de: ',porct3, '\no aumneto foi de: ', aumt3, '\no seu salario apos aumneto é de: ', nvaument3)
}else {
    console.log('O seu salario antes do reajuste é: ', salario, '\nfoi aplicado um aumento de: ',porct4, '\no aumneto foi de: ', aumt4, '\no seu salario apos aumneto é de: ', nvaument4)
}
console.log()