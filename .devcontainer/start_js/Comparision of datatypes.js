// let value = 5
// let negvalues = -value
// console.log(negvalues);

// let accountId = 74368368
// accountName = "Vishnu"
// accountEmail = "vksingh1199@gmail.com"
// accountPassword = "6673786"
// accountCity = "Bengaluru"

// console.table([accountId, accountName, accountEmail, accountPassword, accountCity]);

// console.log(-true);
// console.log(+true);

// console.log(3+5+9/4);

// let gameContainer = 100
// ++gameContainer;
// console.log(gameContainer);

// console.log("2" > 1);
// console.log("02" > 1); 

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

//  console.log(undefined > 0);
//  console.log(undefined == 0);
//  console.log(undefined < 0);

// console.log ("2" == 2);
// console.log (2 == "2")
// console.log(str3);
// console.log("1" = 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console,log(1 + 2 + "2");

/*
 7 Primitive Data types
 String, Number, Boolean, Null, Undefined, Symbol, BigInt
*/ 

//String Type
// const Name = "Vishnu"
// console.log(typeof Name);

//Number Type
// const score = 100
// const scoreValue = 100.3
// console.log(typeof scoreValue);

//Boolean Type
// const isLoggedIn = false
// console.log(typeof isLoggedIn);

//Null type
// const outsideTemp = null
// console.log(typeof outsideTemp);

//Undefined Type
// let userEmail;
// console.log(typeof userEmail);

//Symbol Type
// const id = Symbol("37")
// const anotherId = Symbol('01');
// console.log(id === anotherId);
// console.log(typeof id);

//BigInt Type
// const bigNumber = 7368368363863865n
// console.log(typeof bigNumber);


/*
Non-Primitive Data Types
Array, Objects, Functions
*/

//Array type
// const heros = ["Vishnu", "Rahul", "Sumit", "Avishwas"]

//Objects Type
// let MyObj = {
//     number: "Vishnu",
//     age: 18
// }

// //Functions Type
// const Myfunction = function(){
//     console.log("Hello World");
// }


//memory type
//it's two type
//Stack  (primitive) ,  Heap (Non Primitive)

// let myfacebookName = "VishnuKumarSingh"
// let anothername = myfacebookName
// anothername = "RajputSinghVishnu"

// console.log(myfacebookName);
// console.log(anothername);

let userOne = {
    email: "vksingh99@gmail.com"

}

let userTwo = userOne

userTwo.email = "Vksingh112005@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);