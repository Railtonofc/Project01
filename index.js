class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }
}

function tipo(classe) {
    if (classe === "mago") {
        return "atacou usando magia";
    } else if (classe === "guerreiro") {
        return "atacou usando espada";
    } else if (classe === "monge") {
        return "atacou usando artes marciais";
    } else if (classe === "ninja") {
        return "atacou usando uma kunai";
    } else {
        return "não foi possível determinar o tipo de ataque";
    }
}

const heroi = new Heroi("Weslley", 26, "mago");

console.log("O HEROI " + heroi.nome + " ELE " + heroi.classe);
console.log(heroi.nome + " " + tipo(heroi.classe));