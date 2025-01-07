// const user = {
//     username: "Vishnu",
//     price: 999,

//     welcomeMassage: function(){
//         console.log(`${this.username} welcome to website`);
//         console.log(this);
//     }
// }
// //user.welcomeMassage()
// user.username = "Instagram"
// user.welcomeMassage()
// console.log(this);

//--Browser ke under jo object h vo h window object-- interview

// function chai(){
//     console.log(this);

// }
// chai()

// function chai(){
//     let name = "Vishnu"
//     console.log(this.name);
// }
// chai()

// const chai = function(){
//     let username = "Vishnu"
//     console.group(this.username);
// }
// chai()

// const chai = () =>{
//     let username = "Vishnu"
//     console.log(this.username);
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5, 4));

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(9, 46))

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(95, 5));

const addTwo = (num1, num2) => ({username: "Vishnu"})
console.log(addTwo())

