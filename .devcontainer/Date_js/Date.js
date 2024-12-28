let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  // Date is object -- it's VVI Question


let myCreateDate = new Date(2024, 0, 25)
console.log(myCreateDate.toDateString());

console.log(myCreateDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

// let myCreateDOB = new Date(2005, 0, 1)
// console.log(myCreateDOB.toLocaleString());

// let myCreateDOM = new Date("01-15-1999")
// console.log(myCreateDOM.toLocaleString());

// let myTimetamp = new Date()
// console.log(myTimetamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString(`defult`,{
    weekday: "long",
})