//cria referencia ao form e elementos de resposta o programa
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit",(e) =>
{
    e.preventDefault() //evita o envio do form

    const nome = frm.inNome.value //obtem os valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2 //calcula a media das notas

    resp1.innerText = `Média das notas ${media.toFixed(2)}`

    //criando as condições
    if(media >=7){
        //altera o texto e estilo da cor do elemento resp2
        resp2.innerText = `Parabéns ${nome}! Voçê foi Aprovado(a)!`
        resp2.style.color = "blue"
    }else{
        resp2.innerText = `Ops ${nome}... Voçê foi Reprovado(a)!`
        resp2.style.color = "red"
    }
    
})
