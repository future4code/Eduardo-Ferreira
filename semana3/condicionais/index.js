/************************************* 
 ************ EXERCÍCIO 1 ************
 ************************************* 

 O programa recebe um número via prompt e faz uma verificação de acordo com o módulo de 2.
 Caso o módulo seja 0, o mesmo retorna "Passou no teste.".
 Caso contrário, diferente de 0, retorna "Não passou no teste.".

*/

/************************************* 
 ************ EXERCÍCIO 2 ************
 ************************************* 

 a. O programa serve para retornar o preço de cada fruta.
 b. O preço da fruta Maçã é R$ 2.25
 c. Caso seja retirado o break, o programa irá imprirmir a última atribuição à variável preco, ou seja, 5.

*/

/************************************* 
 ************ EXERCÍCIO 3 ************
 ************************************* 

 a. Recebendo um número digitado pelo usuário.
 b. "Esse número passou no teste".
 c. Haverá um erro no console, pois a variavel "mesagem" não pertence ao bloco pai.

*/

/************************************* 
 ************ EXERCÍCIO 4 ************
 ************************************* 
*/

let age = Number(prompt("Digite sua idade!"));

if (age >= 18) {
    console.log("Você pode dirigir!");
} else {
    console.log("Você não pode dirigir!")
}

/************************************* 
 ************ EXERCÍCIO 5 ************
 ************************************* 
*/

let shift = prompt("Digite o turno em que você estuda! Ex.: M (matutino) | V (Vespertino) | N (Noturno) ");

if (shift === 'M') {
    console.log("Bom dia!");
} else if (shift === 'V') {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

/************************************* 
 ************ EXERCÍCIO 6 ************
 ************************************* 
*/

let shift2 = prompt("Digite o turno em que você estuda! Ex.: M (matutino) | V (Vespertino) | N (Noturno) ");

switch (shift2) {
    case 'M':
        console.log("Bom dia!");
        break;
    case 'V':
        console.log("Boa tarde!");
        break;
    default:
        console.log("Boa noite!");

}

/************************************* 
 ************ EXERCÍCIO 7 ************
 ************************************* 
*/

let filmGenre = prompt("Qual o gênero do filme?");
let filmPrice = prompt("Qual o valor do ingresso desse filme?");

if ((filmGenre === 'fantasia') && (filmPrice < 15)) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme! :(");
}

/************************************* 
 ************** DESAFIO **************
 ************************************* 
*/

let name = prompt("Digite seu nome completo!");
let typeGame = prompt("Digite o tipo de jogo! Ex.: IN indica internacional; e DO indica doméstico;");
let gameStep = prompt("Digite a etapa do jogo! Ex.: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final");
let category = Number(prompt("Digite a categoria do jogo! Ex.: 1,2,3 ou 4"));
let numberTickets = Number(prompt("Digite a quantidade de ingressos"));
let price;

if (gameStep === 'SF') {
    switch (category) {
        case 1:
            price = 1.320;
            break;
        case 2:
            price = 880;
            break;
        case 3:
            price = 550;
            break;
        default:
            price = 220;
            break;
    }
} else if (gameStep === 'DT') {
    switch (category) {
        case 1:
            price = 660;
            break;
        case 2:
            price = 440;
            break;
        case 3:
            price = 330;
            break;
        default:
            price = 170;
            break;
    }
} else {
    switch (category) {
        case 1:
            price = 1980;
            break;
        case 2:
            price = 1320;
            break;
        case 3:
            price = 880;
            break;
        default:
            price = 330;
            break;
    }
}

if (typeGame === 'DO') {
    typeGame = "Jogo Nacional";
} else {
    typeGame = "Jogo Internacional";
    price *= 4.10;
}

console.log("--- Dados da Compra ---");
console.log("Nome do cliente: " + name);
console.log("Tipo do jogo: " + typeGame);
console.log("Etapa do jogo: " + gameStep);
console.log("Categoria: " + category);
console.log("Quantidade de Ingressos: " + numberTickets);
console.log("--- Valores ---");
console.log("Valor do ingresso: " + "R$ " + (price));
console.log("Valor total: " + "R$ " + (price * numberTickets));