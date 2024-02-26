function calculadora(primeiraVariavel, operacao , segundaVariavel){
switch(operacao){
    case "+":
        return primeiraVariavel + segundaVariavel
    case "-":
        return primeiraVariavel - segundaVariavel
    case "*":
        return primeiraVariavel * segundaVariavel
    case "/":
        return primeiraVariavel / segundaVariavel
    case "**":
        return primeiraVariavel ** segundaVariavel
    default:
        return "Operação não permitida"
    }
}

const result = calculadora (5,"+",3)
console.log(result)