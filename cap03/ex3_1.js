const prompt = require("prompt-sync")() //adciona pacotes para entrada de dados
const num1 = Number(prompt("1 Numero  " )) //lê os numeros
const num2 = Number(prompt("2 Numero  " ))
const soma = num1 + num2 //calcula a soma
console.log(`Soma é: ${soma}`) //exibe o resultado

/*
Compare com o Exemplo 1.6 e observe a semelhança! Neste modelo, não é
necessário inserir os comandos entre as tags <script> e </script>. Contudo,
precisamos acrescentar o comando const prompt = require("prompt-sync")(). O
comando console.log() exibe a resposta do programa e também pode ser
utilizado nos programas que rodam no browser, como indicado na Seção
1.5.
*/