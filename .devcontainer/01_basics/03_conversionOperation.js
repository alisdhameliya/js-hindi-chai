let score = 33

console.log(typeof score)
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* output is 
number
number
number
33
*/

/*   if score = 
                "33" -> 33
                "33abc" -> NaN (not a number)
                true -> 1 or false -> 0
*/


let isLoggedIn = 123

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/* if isLoggedIn = _____ =>  Output
                
                    1       true
                    ""      False
                    "al"    true
                    NaN     False
                undefined   false
                   null     false
                   123      True
*/


let someNuber = 100

let srtingIsSomeNuber = String(someNuber)
console.log(srtingIsSomeNuber)
console.log(typeof srtingIsSomeNuber);

/* Output 
    100
    string 
*/

//******************************************* Operations ***************************************** */
console.log("operation")
let someNumber = 33
let negValue = -someNumber
console.log(negValue)

/* output -33 */

console.log(2+2) // 4
console.log(2-2) //0
console.log(2*2) //4
console.log(2/2) //1
console.log(2%2) //0
console.log(2**3) //8

let str1= "alis"
let str2 = "dhameliya"

let str3= str1 + str2
console.log(str3);

console.log(1 + "2");  //12
console.log("2"+1)      //21
console.log(1 + 2 + "2")    //32 **** important
console.log( "1" + 2 + 3)   //123

console.log(2 * 3 + 4 - 6 / 4); // This is not a correct way to perform this operation , give () is good practise

//Example: write like this ((2*3)+4)- (6 / 4))

let num1 = num2 = num3 = 2+2 // this is also Bad way to write 
console.log(num3);


// ### Postfix increment ### 

let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
console.log(y , y2)
console.log(x , x2)

// ### Prefix increment ### 

let a = 3;
const b = ++a;
// a is 4; b is 4

let a2 = 3n;
const b2 = ++a2;
// a2 is 4n; b2 is 4n

console.log(a , b2)
console.log(a , b2)

//################## Comparison with type conversion #################

"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false, look at Logical NOT operator
0 != !!undefined; // false, look at Logical NOT operator
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true
