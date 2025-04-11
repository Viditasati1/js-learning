// singleton
// Object.create

// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) first way of accesing object elem
// console.log(JsUser["email"]) second way of accesing object elem
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // only way of accesing it outside the object 

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// always remember syntax of defining a symbol inside an object is 
// const mySym = Symbol("key1")
// [mySym]: "mykey1" 
