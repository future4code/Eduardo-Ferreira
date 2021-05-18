/** EXERCÍCIO 01 */

const userInfo = require("../user-info");

const name = process.argv[2];
const age = process.argv[3];

const ageInSevenYears = Number(age) + 7;

console.log(
  `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears} anos`
);
