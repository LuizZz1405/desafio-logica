// Luiz Henrique da Silva Ramos
// Desafio de lógica
//  17.02.2024

//declaando matriz para armazenar nome e nível
let heroXp = [
    ["Homem-Aranha", 5670], //ouro
    ["aquaman", 1230], //bronze
    ["Mulher-Maravilha", 990], //ferro
    ["Demolidor", 3200], //prata
    ["Link", 7780], //platina
    ["Deadpool", 10000], //imortal
    ["Cap América", 8667],// ascendente
    ["Batman", 15000],//radiante
]
 // Laço de repetição "for" para percorrer a matriz
for (let i = 0; i < heroXp.length; i++) {
    let nome = heroXp[i][0]
    let xp = heroXp[i][1]
    let nivel

    // estrutura de decisão
    
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}


