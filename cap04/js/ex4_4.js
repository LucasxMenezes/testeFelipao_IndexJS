// cria referencia ao form e elemento onde sera exibido a resposta

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte de vento , acionado quando o botap submit for clicado

frm.addEventListener("submit", (e) => {
    e.preventDefault(0)

    //obtem e convert o conteudo do campo inHoraBrasilia
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5 //calcula o horário da França
    if (horaFranca > 24) { //se passar das 24 horas na França
        horaFranca = horaFranca - 24 //subtrai 24
   }
   //exibe resposta(altera o conteudo do elemento h3 da pagina)
   resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})