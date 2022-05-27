// Crie um programa em Portugol que peça a nota do aluno, que deve ser um real entre 0.00 e 10.0
// Se a nota for menor que 6.0, deve exibir a nota F.
// Se a nota for de 6.0 até 7.0, deve exibir a nota D.
// Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
// Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
// Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.

const prompt = require ("prompt-sync")();

console.clear()

let nota = +prompt ('Digite a nota do(a) aluno(a): ')

console.log()

if (nota < 6){
    console.log('1')
} else if (nota > 6.0 && nota < 6.99){
    console.log('2')
} else if (nota > 7.0 && nota < 7.99){
    console.log('3')
} else if (nota > 8.0 && nota < 8.99){
    console.log('4')
} else {
    console.log('5')
}