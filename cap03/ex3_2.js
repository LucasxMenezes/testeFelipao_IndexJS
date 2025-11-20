const prompt = require("prompt-sync")()
const veiculo = prompt("Veiculo: ") //lê os dados de entrada
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.50 //calcula o valor de entrada
const parcela = preco * 0.50 / 12 //calcula o valor das parcelas
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12 de R$: ${parcela.toFixed(2)}`)