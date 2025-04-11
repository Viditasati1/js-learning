let mydate=new Date();

console.log(mydate.toString());  // Fri Apr 11 2025 13:54:59 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());// Fri Apr 11 2025
console.log(mydate.toISOString());// 2025-04-11T08:24:59.253Z
console.log(mydate.toJSON());// 2025-04-11T08:24:59.253Z
console.log(mydate.toLocaleString());// 11/4/2025, 1:54:59 pm


// way of declaring dates in js
let mycreatedDate=new Date(2023 , 11 , 5);
let date=new Date("01-14-2025") // date format in mm-dd-yyyy
console.log(mycreatedDate.toDateString());
console.log(date.toDateString());


// creating timestamps in js
// this will give you the time since the 1 jan 1970 
let mytimestamp=Date.now();
console.log(mytimestamp);
// console.log(date.getTime());


// this is the way of getting just only the current date or month or year or hour or anything
let mytime=new Date();
console.log(mytime.getDate());
console.log(mytime.getDay());
console.log(mytime.getFullYear());
console.log(mytime.getMinutes());     


