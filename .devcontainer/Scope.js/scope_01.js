//  let a = 100
//  const b = 20 
// // var c = 30

// if (true){
// let a = 10
// console.log("Value A:",a)
// const b = 20 
// console.log("Value B",b)
// }

// console.log(a);
// console.log(b);
// //console.log(c);


//-------------------------Nested Scope-------------------------

function one(){
const  username = "Vishnu"

function two(){
    const website = "Instagram"
    console.log(username);
    }
    //console.log(website);

    two()
}
one()

if (true){
    const username = "Instagram"
    if (username === "Instagram"){
        const website = " User"
        console.log(username + website);
    }
    // console.log(website);
}
//console.log(username);


console.log(addone(5));
function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));


// console.log(addTwo(5));
// const addTwo = function(num){
//     return num + 2
// }
//error syntax
