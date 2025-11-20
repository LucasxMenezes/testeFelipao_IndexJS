//cria refernecia ao form e ao elemento h3(onde sera exibida a resposta)

let frm = document.querySelector("form")
// let resp1 = document.querySelector("h3")
let resp2 = document.querySelector("h3")

//cria um ouvinte de evento, acionado quando o botão submit for acionado

frm.addEventListener("submit",(e)=>{
    const medicamento = frm.inMedicamento.value
    let preco = Number((Math.floor(frm.inPreco.value.replace(",",("."))))* 2)

    
    
    // resp1.innerText = `Medicamento ${medicamento}` //exibe as respostas
    resp2.innerText = `Leve 2 ${medicamento} por apenas R$ ${preco.toFixed(2)}`

    e.preventDefault() //evita envio do forms
})


/*a) Uma farmácia está com uma promoção – Na compra de duas
unidades de um mesmo medicamento, o cliente recebe como desconto
os centavos do valor total. Elaborar um programa que leia descrição e
preço de um medicamento. Informe o valor do produto na promoção. A
Figura 2.9 apresenta a tela com um exemplo de dados de entrada e saída
do programa.*/