// String
const name = "Vishnu"
const repoCount = 100

console.log(`Hello my name is ${name} are my repo count is ${repoCount}`);

const gameName = new String (`Vishnu`)
console.log(gameName [0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf(`n`));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4, 4)
console.log(anotherString);

const newStringOne = "    Vishnu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const flex = "Vishnu"
console.log(flex.replace(`n`, `-`));