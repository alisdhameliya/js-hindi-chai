const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  This syntax  is not use in real life ( this is bad way to write code)

//   ` ` --> called as back ticks . Currently this is used

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // this is called as String interpoletaion.


// Second way to declare the String 

const gameName = new String('pychology');
console.log(gameName.length)    

const gameName1 = new String('hitesh-hc-com')

console.log(gameName1[0]);
console.log(gameName1.__proto__);


console.log(gameName1.length);
console.log(gameName1.toUpperCase());
console.log(gameName1.charAt(2));
console.log(gameName1.indexOf('t')+"      :::: Index of t");

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url)

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));