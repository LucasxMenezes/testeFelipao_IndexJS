const prompt = require("prompt-sync")()

const salario = Number(prompt("Salário do Funcionário: "))
const tempo = Number(prompt("Tempo de Empresa: "))
const quadrienio = tempo /4 
const blocoQuatroAnos = Math.floor(quadrienio)
const ajusteSalario = (salario / 100)
const ajusteQuadrienio = blocoQuatroAnos * ajusteSalario
const salarioAjustado = salario + ajusteQuadrienio

console.log(`Quadrienio: ${blocoQuatroAnos}`)
console.log(`Salario com reajuste: ${salarioAjustado.toFixed(2)}`)


// const prompt = require("prompt-sync")()
// const salario = Number(prompt("Salário R$: ")) //lê os dados de entrada
// const tempo = Number(prompt("Tempo(anos): "))
// const quadrienios = Math.floor(tempo /4 ) //calcula os quadrienios
// const acrescimo = salario * quadrienios / 100 //calcula os acréscimos
// console.log(`Quadriênios: ${quadrienios}`) //exibe as respostas
// console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`)