const accountId = 123499;
let accountEmail = "alis@gmail.com";
var accountPassword = "1234";

accountCity= "vadodara";
let accountState;

// accountId = 1213132;
// accountId = 1213132;
//           ^
// TypeError: Assignment to constant variable.

console.table([accountId,accountEmail,accountPassword,accountState]);
/*  Output
┌─────────┬──────────────────┐
│ (index) │      Values      │
├─────────┼──────────────────┤
│    0    │      123499      │
│    1    │ 'alis@gmail.com' │
│    2    │      '1234'      │
│    3    │    undefined     │
└─────────┴──────────────────┘
*/

accountEmail ="al@al.com";
accountPassword ="alis1234";
accountState = "Gujarat";
console.table([accountId,accountEmail,accountPassword,accountState]);

/* output 
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │   123499    │
│    1    │ 'al@al.com' │
│    2    │ 'alis1234'  │
│    3    │  'Gujarat'  │
└─────────┴─────────────┘
*/
//let is braket scoped or block scoped and var is like global variable.
// if you declared variable without giving any value , it show undefinded means that not variable not contain any value.
