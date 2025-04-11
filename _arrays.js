// arrays

const myarr=[0,1,2,3,4];

const myheros=["shaktimaan","bheesma","naagraj"];

// console.log(myheros[2])

// another way of declaring array

const myarr2=new Array(11,12,13,14);
// console.log(myarr2[3]);

// array methods
1. //push

myarr.push(5);

// console.log(myarr)

2. // pop

myarr.pop();
// console.log(myarr)

3. // unshift (basicallly it adds element at the starting)
4. // shift(basically it removes the element from the array start)

5. // includes(basically checks whether an element present in an array or not)


6. // slice and splice operations 

let arr=[1,2,3,4,5,6];

//  slie array doesnot modify the original array
console.log(arr.slice(0,2));

console.log("State 1" ,arr);



// basically splice operation modifies up the array and completely changes it
console.log(arr.splice(0,2));

console.log("State 2" , arr)

