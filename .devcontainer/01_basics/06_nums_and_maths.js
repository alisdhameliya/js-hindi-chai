const score = 100;
console.log(typeof(score))//this give number data type 

const balance = new Number(100)  //created an Object
console.log(typeof(balance))

//+++++ now we can perform many opertation or apply properties on it

console.log(balance.toString().length)
console.log(balance.toFixed(2))  // Pricision value , uses => in bills and GST we need some digit after point so this can help


const otherNumber = 1423.987987

console.log(otherNumber.toPrecision(6)) // Output:  1423.99
console.log(otherNumber.toPrecision(4)) // Output:  1424
console.log(otherNumber.toPrecision(3)) // Output:  1.42e+3

const num = 1000000000;

console.log(num.toLocaleString())       //         1,000,000,000
console.log(num.toLocaleString('en-IN'))       //  1,00,00,00,000




