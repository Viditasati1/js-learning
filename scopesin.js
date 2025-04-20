// ++++++++++++++++++ interesting ++++++++++++++++++
//concept of hoisting  

console.log(addone(5))


// in this format we have accesed the function return 
// value by consoling it before the function definition
function addone(num) {     
    return num + 1
}


// in this format we cannot have accesed the function return 
// value by consoling it before the function definition and this is mini hoisting
addTwo(5)
const addTwo = function (num) {
    return num + 2
}