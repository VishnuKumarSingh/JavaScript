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

function chai(){
    let name = "Vishnu"
    console.log(this.name);
}
chai()

