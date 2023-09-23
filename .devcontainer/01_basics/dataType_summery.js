//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')  // Output : data type = symbol

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",   // output datatype = object
    age: 22,
}

const myFunction = function(){    // datatype = function
    console.log("Hello world");
}

console.log(typeof myFunction);

let myName = "alis Dhameliya"

let hisName = myName;   // primitive data type ma variable ni value copy thay chhe (Stack)
                        //jyare non-primitive ma value no reference pass thay chhe (Heap)

hisName="piyush"
console.log(myName)
console.log(hisName)

// Stack (Primitive), Heap (Non-Primitive) 
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename 
anothername = "chaiaurcode" 

let userOne = {
    email: "user@google. com" , 
    upi: "use r@yblll "
} 
let userTwo = userOne 
userTwo.email = "hitesh@google. com"      //value change at userOne variable because of heap memory.
console. log ( userOne. email) ; 
console. log ( userOne. email) ; 