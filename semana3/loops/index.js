/************************************* 
 ************ EXERCÍCIO 1 ************
 ************************************* 

O código está executando um loop.
Enquanto a variável 'i' for < que 5 será executado o loop em questão.

Vai imprimir: 10;
*/

/************************************* 
 ************ EXERCÍCIO 2 ************
 ************************************* 
a. Vai imprimir 19, 21, 23, 25, 27, 30
b. Sim, é só criar uma nova variável fora do for e incrementar ela no final do for.

 */

 
/************************************* 
 ************* DESAFIO 1 *************
 ************************************* 

 Se o usuário digitar 4 vai imprimir:

 0
 00
 000
 0000

*/

/************************************* 
 ************ EXERCÍCIO 3 ************
 ************************************* 
*/

// a.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

for(let valor of array){
    console.log(valor);
}

//b.

for(let valor of array){
    console.log(valor / 10);
}

//c.

const newArr = [];

for(let valor of array){
    if(valor % 2 == 0){
        newArr.push(valor);
    }
}

console.log(newArr);

//d.

let index = 0;
for(let valor of array){
    console.log("O elemento do índex " + index + " é: " + valor);
    index++;
}

//e.
let maxNum = 0;
let minNum = 0;
let save;

for(let i = 0; i < array.length; i++){
    if(array[maxNum] < array[i + 1]){
        maxNum = i + 1;
    }
    if(array[minNum] > array[i + 1]){
        minNum = i + 1;
    }
}

console.log("O maior número é o " + array[maxNum] + " e o menor é o " + array[minNum]);
console.log(minNum);

/************************************* 
 ************* DESAFIO 1 *************
 ************************************* 
 */

 /* const randNum = Number(prompt("Digite um número de 1 a 20!"));
 console.log("Vamos jogar!");
 
 let randArray = [];
 let bool = false;

 while(bool === false){
    const num = Number(prompt("Digite um número de 1 a 20!"));
    randArray.push(num);
    if(num < randNum){
        console.log("O número chutado foi " + num);
        console.log("Errrrrrrrrrou, é maior!");   
     }else if(num > randNum){
        console.log("O número chutado foi " + num);
        console.log("Errrrrrrrrrou, é menor!");   
     }else{
        console.log("O número chutado foi " + num);
        console.log("Acertou!!");
        console.log("O número de tentativas foi: " + randArray.length);
        bool = true;
     }
 } */

 /************************************* 
 ************* DESAFIO 1 *************
 ************************************* 
 */

const randNum = Math.floor(Math.random() * 100);
let play = Number(prompt("Digite 1 para começar ou 2 para acessar o console"));

let randArray = [];
let bool = true;

if(play == 1){
    console.log("Vamos Jogar!");
    console.log("Chute um número de 0 a 100! Boa sorte!");
    while(bool){
        let num = Number(prompt("Foi sorteado um número de 1 a 100! Boa sorte!"));
        randArray.push(num);
        if(num < randNum){
            console.log("O número chutado foi " + num);
            console.log("Errrrrrrrrrou, é maior!");   
         }else if(num > randNum){
            console.log("O número chutado foi " + num);
            console.log("Errrrrrrrrrou, é menor!");   
         }else{
            console.log("O número chutado foi " + num);
            console.log("Acertou!!");
            console.log("O número de tentativas foi: " + randArray.length);
            bool = false;
         }
     }
}else{
    console.log("Atualize a página para começar!");
}