// Programa JavaScript que exibe o nome informado pelo
// usuário no campo de edição


//cria referencia ao form e ao elemento h3(onde sera exibida a resposta)

const frm = document.querySelector('form');
const resp = document.querySelector('h3');
// Ou, então, utilizar um único comando, acessando diretamente a propriedade
// que queremos obter, como a seguir.
// const nome = document.querySelector("form").inNome.value

// cria um "ouvinte" de envento, acionado quando o botão submit for clicado

frm.addEventListener('submit',(e)=> {
    const nome = frm.inNome.value //obtém o nome digitado no form
    resp.innerText=`Olá ${nome}`   //exibe resposta do programa
    e.preventDefault()             //evita o envio do form
})