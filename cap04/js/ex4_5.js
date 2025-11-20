const frm = document.querySelector("form") //obtem elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()      //evita o envio do form
    const numero = Number(frm.inNumero.value)  //obtem o numero digitado no form
    const raiz = Math.sqrt(numero)  //calcula raiz quadrada do numero
    if(Number.isInteger(raiz)){     //se valor da raiz for um numero inteiro ou  - if (raiz % 1 == 0) { ... }
        resp.innerText = `Raiz: ${raiz}`
    } else {        //se não
        resp.innerText = `Não há raoz exata para ${numero}`
    }
})