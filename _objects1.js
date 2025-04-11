const tinderuser=new Object(); // this is a singleton object

const tinder={}  // this is a non-singleton object

tinder.id="123abc";
tinder.name="vidit";
tinder.isloggedin=false;

console.log(tinder);


// nesting in objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // this arise issues
// const obj3 = Object.assign({}, obj1, obj2, obj4) // this is correct way

// const obj3 = {...obj1, ...obj2} // this is also correct way
console.log(obj3);



// creating array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // basically return type here is array
// console.log(Object.values(tinderUser)); // basically return type here is array
// console.log(Object.entries(tinderUser)); // basically return type here is array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check whether it contains it or not (boolean return type)



