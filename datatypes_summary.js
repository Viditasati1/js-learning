// A Symbol is a primitive data type that represents a unique identifier. Even if two symbols have the same description, they are always different.

const id=Symbol(5);
const nextid=Symbol(5);

// basically it returned the diffrent things even being the same declaration
console.log(id===nextid);



// after putting n it converts the number to "bigint" datatype
const bignumber=32893243900923939854305n;


// creating arrays
const gods=["hanuman","durga","shri ram"];
 
// creating objects

let myobj={
age:23,
signature:"Vidit@iitdm",
feelings:"none"
}

console.log(myobj.signature);

let myfun=function(){
    console.log("hey my name is vidit");
}

myfun()




// type of some datatypes

1.// for undefined its undefined
2.//for null its object
3.// for function its object function
4.// for symbol its symbol
5. // for function its function
6. // for boolean its boolean
7. // for number its number
8. // for string its string
