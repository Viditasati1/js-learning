//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// IIFE are used to safe the function from the global scope pollution
(function chai() {
    // named IIFE
    console.log(`DB connected`);
})();

// always remember to stop the execution of iife by applying a semicolon

// we can also write the iife using arrow func

((name) => {
    // just simply pass params
 console.log(`we can't reach ${name} on time`)
})("sihora");


