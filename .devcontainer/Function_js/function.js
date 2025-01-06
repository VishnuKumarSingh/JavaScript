// function sayMyName(){
//     console.log("V");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("N");
//     console.log("U");
// }

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumber(9,4)

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }
// const result = addTwoNumbers(7,4)
// console.log("Result: ", result);

// function addTwoNumbers(number1, number2){
//     return number1 + number2
// }
// const result = addTwoNumbers(7,4)
// console.log("Result: ", result);

// function loginUserMassage(Username){
//     return `${Username} just logged in`
// }
// console.log(loginUserMassage("Vishnu"))

// function loginUserMassage(Username){
//     if(Username === undefined){
//         console.log("please enter a Username");
//         return
//     }
// }
// console.log(loginUserMassage())

function loginUserMassage(Username = "Ram"){
    return `${Username} just logged in`
}
console.log(loginUserMassage())