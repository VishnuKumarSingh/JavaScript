const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dog't have user email");
}

// truthy values
//"0",'false' , " ",[], {}, function(){}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefine, NaN

// if (userEmail.lenth === 0) {
//     console.log("array is empty")
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing operator (??): null undefined

let vall;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// terniary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 180 ? console.log("less than 80") : console.log("more than 80")