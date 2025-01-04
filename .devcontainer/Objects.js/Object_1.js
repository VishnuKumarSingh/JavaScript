//literals 
//Constructor 

//Singleton 

//Object literals 
//Object.create  se Constructor banta h Singleton

const mysym = Symbol("key1")

const JsUser ={
    name : "Vishnu", "Full name" : "Vishnu Kumar Singh",
    age : 19,
    Location : "Madhubani",
    email : "vksingh112005@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Friday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser [mysym]);
// console.log(typeof [mysym]);

// JsUser.email = "vkumarsingh2005@gmail.com"
// object.freeze(JsUser)
// JsUser.email = "vksingh3050@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Vishnu Kumar")
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());