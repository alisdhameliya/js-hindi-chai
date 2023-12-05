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



//#####################   Math function #####################

console.log(Math.abs(-4)); //what abs do?  absolute value => if value is nagative it convert into positive

console.log(Math.sqrt(16,2)); //4
console.log(Math.round(16.5));  //17

console.log(Math.ceil(16.2));  //17
console.log(Math.floor(16.2));  //16

console.log(Math.pow(16,2));  //256

console.log(Math.min(16,3, 4,52));  //min = 3 , max = 52

console.log(Math.random());
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100))


let min = 10;
let max = 40;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)





