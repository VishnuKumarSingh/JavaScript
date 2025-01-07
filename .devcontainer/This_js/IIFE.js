// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ( function aurcode() {
//     console.log(`DB CONNECTED TWO`);
// } )()

// ( () => {
//     console.log(`DB CONNECTED ONE`);
// } )()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})(`Vishnu`)