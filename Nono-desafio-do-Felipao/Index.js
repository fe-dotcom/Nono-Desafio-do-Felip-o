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
        console.log(`O ${charactersType},chamado de ${charactersCharacteristics.name} usou ${charactersWeapons}`)
    }
}

chooseCharactersCharacteristics(charactersCharacteristics)







// Segunda solução, usando classes objetos:

class caracteristicasDosPersonagens{

    constructor(nome, tipo, ataque){
        this.nome= nome
        this.tipo= tipo
        this.ataque = ataque
    }

    escrever(){
        console.log(`O ${this.tipo},chamado de ${this.nome} usou ${this.ataque}`)
    }

}

let guerreiro= new caracteristicasDosPersonagens("Felipe, o destruidor", "Guerreiro", "usou a espada")


let monge= new caracteristicasDosPersonagens("Felipe, o destruidor", "Monge", "usou artes marciais")


let mago= new caracteristicasDosPersonagens("Felipe, o destruidor", "Mago", "usou magia")


let ninja= new caracteristicasDosPersonagens("Felipe, o destruidor", "ninja", "usou shurikens")


for(let i=0; i>-1; i++){
guerreiro.escrever()

monge.escrever()


mago.escrever()

ninja.escrever()

}