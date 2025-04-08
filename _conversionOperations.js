let score="vidit";

console.log(typeof score);

let valueInNumber=Number(score);

console.log(typeof valueInNumber)

console.log(valueInNumber);

//conclusions are

// "33"=>33
// "33abc"=>NaN
// true=>1 & false=>0



let isloggedIn=0;

let convtobool=Boolean(isloggedIn);

console.log(convtobool);
console.log(typeof convtobool)

// 1=>true
// 0=>false
// ""(empty string)=>false
// "efg"(Non empty string)=>true



let stringnum=false;

let convtostr=String(stringnum);

console.log(convtostr);
console.log(typeof convtostr);

// bool,int everything gets cont to string



// **************** Operations *****************

console.log("1"+2+9+6); // when string part appears all next to it will act as string and before it this is all normal numbers
console.log(4+7+99+"2"); 

console.log(++true) // invalid
console.log(true++) // invalid;