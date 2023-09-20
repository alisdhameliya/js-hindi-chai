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