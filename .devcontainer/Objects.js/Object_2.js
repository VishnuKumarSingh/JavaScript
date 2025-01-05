//const tinderUser = new Object() //Singleton Object
const tinderUser = {}  //Non Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Vishnu"
tinderUser.isLoggerId = false

console.log(tinderUser);

const regularUser = {
    email: "vksingh5005@gmailcom",
    fullname: {
        Userfullname: {
            firstname: "Vishnu",
            lastname: "Singh"
        }
    }
}

console.log(regularUser.fullname.Userfullname.firstname)

//optional changing = ? API se Response aata h tab fullname exist nahi hota h


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
//console.log(obj3);

//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);
//best tarika

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggerId'));

const User = [
    {
        id: 1,
        email: "vk11.com"
    },
    {
        id: 2,
        email: "kksjd330.com"
    },
    {
        id: 3,
        email: "ssjbj23.com"
    },
    {
        id: 4,
        email: "jjda44.com"
    },
    {
        id: 5,
        email: "bjsjj34.com"
    }
]

console.log(User[0].email);

//----------------------------------------------------

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Vishnu"
}
//console.log(course.courseInstructor);
const {courseInstructor: instructor} = course
console.log(course.courseInstructor);
console.log(instructor);

//-----JSON-----
// {
//     "name" : "Vishnu",
//     "coursename" : "Js in hindi",
//     "price" : "free"
// }
