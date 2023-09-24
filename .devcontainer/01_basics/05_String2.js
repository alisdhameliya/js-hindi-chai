// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// /* Output : a is less than b */

// // strict equality (===) operator checks whether its two operands are equal

// console.log('1' === 1);
// // Expected output: false

// console.log('1' == 1);
// // Expected output: true

function areEqualCaseInsensitive(str1, str2) {
    console.log(str1.toUpperCase() + " " + str2.toUpperCase())
    return str1.toUpperCase() === str2.toUpperCase();
}

areEqualCaseInsensitive("alis", "Dhameliya")