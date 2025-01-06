// function CalculatecartPrice(...num1){
//     return num1
// }

// console.log(CalculatecartPrice(200, 300, 400, 1000));

// function CalculatecartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(CalculatecartPrice(200, 300, 400, 1000));

const user = {
    username: "Vishnu",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and Price is ${anyObject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 499
})


const myNewArray = [200, 400, 500, 700]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));


function ReturnSecondValue(getnewArray){
    return getnewArray[0]
}
console.log(ReturnSecondValue([288,3444,555,666]));