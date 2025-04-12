// func for adding 2 numbers

function addtwonum(num1, num2) {

    return (num1 + num2);

}


const y=addtwonum(4,5);
// console.log(y)

//if predefined parameter is passed in a function then that if condn 
// for username will not work and it will take the default one and even take the overwrite one 
// if it is added while calling the function  
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



// imp concepts regarding params passage

// while making a product price tracker function we need to add the prices
// of all the number of products added in the list


// (...num1) this basically is the "rest" operator and it converts the multiple values passed using a single variable 
// into an array and we can do sum by iterating ob=ver the array to calculate the total price.
function pricetracker(...num1){
   return num1
}
// console.log(pricetracker(20,30,40,50,60));


// way of passing an object to a function

const user={
    name:"vidit",
    price:200
}

const user2={
    name:"vijay",
    price:2000
}

// function handleobj(anyobj){
//     console.log(`the user's Name is ${anyobj.name} and his course value is only ${anyobj.price}`);
// }

// handleobj(user2);


// way of passing array to a function

const array=[10,20,30,40,50];


function retsecval(getarray){

    return getarray[1];
}


const check=retsecval(array);
const way2=retsecval([10,20,30,40,50])
console.log(check);
console.log(way2);

