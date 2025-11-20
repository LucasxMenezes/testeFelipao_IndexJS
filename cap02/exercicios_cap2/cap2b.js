//cria referencia ao form e ao elemento h3(onde sera exibida a resposta)

const frm = document.querySelector("form")
const saida = document.querySelector("h3")

//cria um ouvinte de eventeo, acionado quando o botão submit for acionado

frm.addEventListener("submit",(e)=> {
    const valorQuinzeMin = Number(frm.inValorPorQuinzeMin.value)
    const tempoUso = Number(frm.inTempoUsoCliente.value)

    const blocodeQuinze = Math.ceil(tempoUso/ 15) 
    //observar aqui o calculo e o arredondamento para cima

    const valorPagar = blocodeQuinze * valorQuinzeMin

    saida.innerText = `Valor a Pagar R$: ${valorPagar.toFixed(2)}`

    e.preventDefault()
}

)
/*b) Elaborar um programa para uma lan house de um aeroporto
– O programa deve ler o valor de cada 15 minutos de uso de um
computador e o tempo de uso por um cliente em minutos. Informe o
valor a ser pago pelo cliente, sabendo que as frações extras de 15
minutos devem ser cobradas de forma integral. A Figura 2.10 exibe um
exemplo com dados do programa.*/