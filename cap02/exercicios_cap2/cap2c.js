/*
c) Um supermercado está com uma promoção – Para aumentar
suas vendas no setor de higiene, cada etiqueta de produto deve 
exibir uma mensagem anunciando 50% de desconto (para um item) na compra
de três unidades do produto. Elaborar um programa que leia descrição e
preço de um produto. Após, apresente as mensagens indicando a
promoção – conforme o exemplo ilustrado na Figura 2.11*/

const frm = document.querySelector("form")
const out1 = document.querySelector("#out1")
const out2 = document.querySelector("#out2")
const out3 = document.querySelector("#out3")

frm.addEventListener("submit",(e)=>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const produtoDesconto = (preco * 0.5)
    const precoTotal = preco + preco + produtoDesconto
    const unidade = preco

    out1.innerText = ` ${produto} - PROMOÇÃO leve 3 por R$ ${precoTotal.toFixed(2)}`
    out2.innerText = `Leve a terceira unidade com 50% de desc. \n Apenas R$ ${produtoDesconto.toFixed(2)}`
    out3.innerText = `Ou R$ ${unidade.toFixed(2)} a unidade`
    e.preventDefault()
})