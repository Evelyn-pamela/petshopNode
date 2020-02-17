let ListaDePets = ["Meg", "Akira"];

function adicionar(pet){
    listaDePets.push(pet);
    return "Seu pet foi cadastrado com sucesso";
}

function listasPets() {
    var lista = " ";
    for (let i = 0; i <= ListaDePets.length; i++){
        lista += ` 
        ---------------- 
        Nome do Pet: ${ListaDePets[i]}`;
    }
    return lista
}

//console.log(listasPets())

module.exports = {listasPets, adicionar}