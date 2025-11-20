//cria referencia ao form e ao elemento pnde sera exibido a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    e.preventDefault() //evita o envio do form

    const nome = frm.inNome.value //obtém valores
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso //declara variavel peso
    if (masculino){  //se masculino(ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2) //Math.pow eleva ao quadrado
        } else {
            peso = 21 * Math.pow(altura, 2)
        }

        // apresenta a resposta(altuera o conteúdo do elemento h3 da página)
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
})

//operador ternario

/*
const categoria = idade >= 18 ? "Adulto" : "Juvenil"

A condição deve ser inserida após o sinal de atribuição (=). O primeiro valor
após a interrogação (?) é atribuído à variável caso a condição seja
verdadeira. E o segundo, após os “:”, caso a condição seja falsa. A instrução
anterior equivale à seguinte estrutura if... else.



const categoria
if(idade >= 18) {
    categoria = "Adulto"
} else {
    categoria = "Juvenil"
}

Em razão da sua simplicidade, o operador ternário é bastante utilizado e
está disponível na maioria das linguagens de programação da atualidade.
Podemos ajustar o nosso programa ex4_2.js, com a substituição do if pelo
operador ternário, a partir do seguinte comando:
const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)
*/