//Arrays

// const myHeros = ["Salman", "Varun", "Ajay", "Ranveer", "Ritik"]
// console.log(myHeros);

// const myArra = [1, 2, 3, 4, 5, 6]
// console.log(myArra);

//------methods--------

const myArr = [1, 2, 3, 4, 5]

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift(3)
console.log(myArr);

console.log(myArr.includes(44));
console.log(myArr.includes(4));

console.log(myArr.indexOf(4));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//--------Slice, Splice

console.log("A" , myArr);
const myn1 = myArr.slice(1,4)
console.log(myn1);

console.log("B" , myArr);
const myn2 = myArr.splice(1,5)
console.log("C" , myArr);
console.log(myn2);


//node "/workspaces/JavaScript/.devcontainer/Array_js/Array.js"