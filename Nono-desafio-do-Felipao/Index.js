// Primeira resolução usando JSON e funções:

let charactersCharacteristics={
    name:" Felipe, o destruidor",
    type: {
        0: ["Guerreiro", "usou espada"],
        1: ["Mago", "usou magia"],
        2: ["Monge", "usou artes marciais"],
        3: ["Ninja", "usou shurikens"]
    }
}


function chooseCharactersCharacteristics(charactersCharacteristics){
    for(let index in charactersCharacteristics.type){
        let [charactersType, charactersWeapons]= charactersCharacteristics.type[index]
        console.log(`O ${charactersType},chamado de ${charactersCharacteristics.name} atacou ${charactersWeapons}`)
    }
}

chooseCharactersCharacteristics(charactersCharacteristics)







// Segunda solução, usando classes objetos e JSON para tornar a aplicação mais automática:

class caracteristicasDosPersonagens{

    constructor(nome, tipo, ataque){
        this.nome= nome
        this.tipo= tipo
        this.ataque = ataque
    }

    escreverCaracteristicasDosPersonagens(){
        console.log(`O ${this.tipo},chamado de ${this.nome} atacou ${this.ataque}`)
    }
}

let guerreiro= caracteristicasDosPersonagens.escreverCaracteristicasDosPersonagens("Felipe, o destruidor", "guerreiro", "usou espada")