// for of loop

const arr=[1,2,3,4,"utopia"];
  
for (const elem of arr) {
    console.log(elem);
}

const greeting="Hello world"

for (const elem of greeting) {
    console.log(`Each char is ${elem}`);
}


// maps in js

const map=new Map();

map.set('In','India');
map.set('US','United states');
map.set('Pk',"Pakistan");
map.set('UK','Great britain');


console.log(map);

for (const [key,val] of map) {
    // console.log(key,val)     
}


// but remembber we cannot appply forof loop on the object let see

const myobj={
    'nis':'genre',
    'piss':'quality'
}

// for (const [key,val] of myobj) {
//     // console.log(key,val);        // this will not work

// }  




const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

