//Create Read Update Delete CRUD

let todoList = []

function findIndexByName(nome){
    const index = todoList.findIndex(function(element){
        return element === nome
    })
    return index
}

function criarTarefa(nome){
    todoList.push(nome)
}

function lerTarefas(){
    console.log(todoList)
}

criarTarefa("Comprar Coentro")
const index = findIndexByName("Comprar Coentro")

console.log(index)