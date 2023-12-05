// Date

let myDate = new Date()
console.log(myDate)    /// 2023-12-05T12:53:13.450Z

console.log(myDate.toString())  //Tue Dec 05 2023 12:54:29 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())  //Tue Dec 05 2023
console.log(myDate.toISOString())   //2023-12-05T12:56:21.054Z
console.log(myDate.toLocaleDateString())    //12/5/2023

console.log(typeof(myDate)) //Object

let myCreatedDate = new Date(2023,0,12)  //2023-01-12T00:00:00.000Z

console.log(myCreatedDate);

let myCreatedDate2 = new Date(2023, 0, 12, 3 , 33, 3)
console.log(myCreatedDate2);    //2023-01-12T03:33:03.000Z

let myNewDate  = new Date("2011-02-21")

console.log(myNewDate); //2011-02-21T00:00:00.000Z

console.log(myCreatedDate2.toLocaleString());  //1/12/2023, 3:33:03 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp);  //1701781904950  this is used when very high trafic vote for same and we want to mezer time // pole type project use this 

console.log(myCreatedDate.getTime());


console.log(myCreatedDate2);
console.log(myCreatedDate2.getMonth() + 1)
console.log(myCreatedDate2.getDay())

