const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage() in this line current context is hitesh
// user.username = "sam"  here we changed to sam so it will refer to sam
// user.welcomeMessage()   here it will refer to sam in this line

// console.log(this);  // if you run only this liune so current context will be 
// empty obj because we are here in the node environment but in browser it will be window object



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }


// chai()

// se here we cant be able to use this keyword inside the function



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// by this method also we are also not able to use this keyword inside the function



// trying it with arrow function

const pool=()=>{
    let fly="Vidit";
    console.log(this.fly);
}

pool();

// it is giving the undefined with arrow function also



// const addTwo = (num1, num2) => {  this is explicit return type i.e if you use curly braces{} then you have to write the return keyword
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  this is implicit return type i.e if you use parenthesis()then you dont have to write the return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))