//estrutura de decisão
//switch/case/break/default

let fruta = "cafe"

switch (fruta) {
    case "laranja":
        console.log("suco de laranja")
        break

    // case "banana":
    // console.log("vitamina de banana")
        case "banana":
        case "morango":
        console.log("vitamina")
        break

    case "maçã":
        console.log("suco de maçã")
        break

        default:
            console.log("suco não listado.")
}