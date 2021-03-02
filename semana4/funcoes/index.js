/************************************* 
 ************ EXERCÍCIO 1 ************
 ************************************* 

a. 10
b. 50

*/

/************************************* 
 ************ EXERCÍCIO 2 ************
 ************************************* 

a. Será impresso no console o nome Darvas e o Caio.
b. Amanda e Caio.

*/

/************************************* 
 ************ EXERCÍCIO 3 ************
 ************************************* 

A função recebe um array composto por números e verifica quais desses são pares. O pares são incluídos em um novo array.
****** FiltrarNumPares ******
*/

/************************************* 
 ************ EXERCÍCIO 4 ************
 ************************************* 
 */

function aboutMe() {
    console.log("Me chamo Eduardo, tenho 29 anos, moro no RS e sou estudante da Labenu.");
}

aboutMe();

function aboutYou(name, age, city, bool) {
    const student = bool ? "sou" : "não sou";
    return console.log(`Me chamo ${name}, tenho ${age} anos, moro em ${city} e ${student} estudante.`);
}

aboutYou("Eduardo", 29, "São Leopoldo", true);

/*
/************************************* 
 ************ EXERCÍCIO 5 ************
 ************************************* 
 */

//a.

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(2, 5));

//b.

function larger(num1, num2){
    return num1 > num2 ? true : false;
}

console.log(larger(2, 5));

//c.

function loop(message){
    let i = 0;
    while(i < 10){
        console.log(message);
        i++;
    }
}

loop("Eduardo");

/*
/************************************* 
 ************ EXERCÍCIO 6 ************
 ************************************* 
 */

//a.

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

function quantity(array){
    return array.length;
}

console.log(quantity(array));

//b.

function evenOrOdd(num) {
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

//c.

function arrEven(array) {
    const arr = [];
    for (let num of array){
        if(num % 2 == 0){
            arr.push(num);
        }
    }
    return arr.length;
}

//console.log(arrEven(array));

//d.

function arrEvenRe(array) {
    const arr = [];
    for (let num of array){
        if(evenOrOdd(num)){
            arr.push(num);
        }
    }

    return arr.length;
}

console.log(arrEvenRe(array));

/************************************* 
 ************* DESAGFIO   ************
 ************************************* 
*/

const fnc = (param) => {
    console.log(param);
}

const fnc2 = (num1, num2) => {
    const sum = num1 + num2;
    fnc(sum);
}

fnc2(40, 75);

/************************************* 
 ************* DESAGFIO   ************
 ************************************* 
*/

//a.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];

function arrEvenRe2(numeros) {
    const arr = [];
    for (let num of numeros){
        if(num % 2 == 0){
            arr.push(num * 2);
        }
    }
    return arr;
}

console.log(arrEvenRe2(numeros));

//b.
function higherNumber(arr) {
    let max = 0;
    let i = 0;
    while (i < arr.length) {
        if(arr[max] < arr[i + 1]){
            max = i + 1;
        }
        i++;
    }

    return max;
}

console.log(numeros[higherNumber(numeros)]);

//c.
let index = (arr) => {
    return higherNumber(arr);
}

console.log(index(numeros));

//d.
function reverseArr(arr) {
    let i = arr.length - 1;
    let newArr = [];
    let count = 0;
    while(i >= 0){
        newArr[count] = arr[i];
        count++;
        i--;
    }

    return newArr;
}

console.log(reverseArr(numeros));