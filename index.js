//Desafio Classificador de Herói

//Váriaveis

console.log()


console.log("Olá Aventureiro, seja Bem-Vindo. Aqui está os dados de nosso Hero 1:")

console.log()

let nameHero = "Berserker";
let experienceHero = 5395;
let levelUp;

//Atributos:
let vitalidade = 7
let vida = 9
let velocidade = 8
let forca = 4
let defesa = 6


function barraDeProgresso(atributos) {
    let barraCheia = "⬜"
    let barraVazia = "⬛"

    let result = "";
    for (let i = 1; i <= 10; i++){
        if (i <= atributos) {
            result += barraCheia;
        }else {
            result += barraVazia
        }
    }
    return result;
}


//Operadores
if (experienceHero <= 1000) {
    levelUp = "Ferro"
}else if (experienceHero >= 1001 && experienceHero <= 2000 ){
    levelUp = "Bronze"
}else if (experienceHero >= 2001 && experienceHero <= 5000 ){
    levelUp = "Prata"
}else if (experienceHero >= 5001 && experienceHero <= 7000 ){
    levelUp = "Ouro"
}else if (experienceHero >= 7001 && experienceHero <= 8000 ){
    levelUp = "Platina"
}else if (experienceHero >= 8001 && experienceHero <= 9000){
    levelUp = "Ascendente"
}else if (experienceHero >= 9001 && experienceHero <= 10000){
    levelUp = "Imortal"
}else if (experienceHero >= 10001){
    levelUp = "Radiante"
}


console.log(`O herói de nome: ${nameHero} está no nível: ${levelUp}"`)
console.log("")

console.log(`Os atributos do hero de nome: ${nameHero} são:`)

console.log(`> Vitalidade ${barraDeProgresso(vitalidade)}`)
console.log(`> Vida       ${barraDeProgresso(vida)}`)
console.log(`> Velocidade ${barraDeProgresso(velocidade)}`)
console.log(`> Força      ${barraDeProgresso(forca)}`)
console.log(`> Defesa     ${barraDeProgresso(defesa)}`)


console.log()


console.log("Aqui está os Dados de nosso Hero2:")
// uma outra forma que eu quiz implementar para comparação:
let heroName = "Zerker"
let heroExperience = 7525

let vitalidade_ = 5
let vida_ = 10
let velocidade_ = 9
let forca_ = 5
let defesa_ = 4

switch (true) {
    case (heroExperience <= 1000):
        levelUp = "Ferro"
        break

    case (heroExperience >= 1001 && heroExperience <= 2000):
        levelUp = "Bronze"
        break
    
    case (heroExperience >= 2001 && heroExperience <= 5000):
        levelUp = "Prata"
        break

    case (heroExperience >= 5001 && heroExperience <= 7000):
        levelUp = "Ouro"
        break

    case (heroExperience >= 7001 && heroExperience <= 8000):
        levelUp = "Platina"
        break

    case (heroExperience >= 8001 && heroExperience <= 9000):
        levelUp = "Ascendente"
        break

    case (heroExperience >= 9001 && heroExperience <= 10000):
        levelUp = "Imortal"
        break

    case (heroExperience >= 10001):
        levelUp = "Radiante"
        break
}
console.log(`O Herói de nome ${heroName} está no nível: ${levelUp}.`)

function barraDeProgresso(atributos) {
    let barraCheia = "⬜"
    let barraVazia = "⬛"

    let result = "";
    for (let i = 1; i <= 10; i++){
        if (i <= atributos) {
            result += barraCheia;
        }else {
            result += barraVazia
        }
    }
    return result;
}

console.log("")

console.log(`Os atributos do hero de nome: ${heroName} são:`)

console.log(`> Vitalidade ${barraDeProgresso(vitalidade_)}`)
console.log(`> Vida       ${barraDeProgresso(vida_)}`)
console.log(`> Velocidade ${barraDeProgresso(velocidade_)}`)
console.log(`> Força      ${barraDeProgresso(forca_)}`)
console.log(`> Defesa     ${barraDeProgresso(defesa_)}`)



console.log()