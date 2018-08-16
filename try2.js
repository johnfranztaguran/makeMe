// var main = (asc) => {
//     for(var i = 0; i<5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// main();
/////////////////////////////////////////////    MAP    multiply each value

// let number = [2,3,4,5];
// let number1 = number.map(myFunction);

// function myFunction(value, index, array){
//     return value * 2;
// }


// console.log(number1);

//////////////////////////////////////////////   FILTER   

// let number = [2,3,4,5,9];
// let number1 = number.filter(myFunction);

// function myFunction(value, index, array){
//     return value > 8;
// }


// console.log(number1);

//////////////////////////////////////////////   REDUCE     adds all value in array

// let number = [2,3,4,5,9];
// let number1 = number.reduce(myFunction);

// function myFunction(total, value, index, array){
//     return value + total;
// }


// console.log(number1);

////////////////////////////////////////////    EVERY       if all array pass a test
// let number = [2,3,4,5,9];
// let number1 = number.every(myFunction);

// function myFunction(value, index, array){
//     return value > 1;
// }


// console.log(number1);

////////////////////////////////////////////    SOME        if some values pass the test

// let number = [2,3,4,5,9];
// let number1 = number.some(myFunction);

// function myFunction(value, index, array){
//     return value > 8;
// }


// console.log(number1);

/////////////////////////////////////////       JSON.parse()   convert text into a javascript object

// var txt = '{"name": "john", "age": 30, "city": "New York"}'
// const obj = JSON.parse(txt);
// console.log(obj.name + " " + obj.age);

/////////////////////////////////////////////       JSON.stringify()    converts the object into string

// var txt = '{"name": "JOhn", "age": 30, "city": York}'
// const obj = JSON.stringify(txt);
// console.log(obj);

/////////////////////////////////////////////       (Object) getters and setters

//  var txt2 = {
//      firstName: "John",
//      lastName: "taguran",
//      get fullname(){
//          return this.firstName + " " + this.lastName;
//      }
//  }
//  console.log(txt2.fullname);

// var txt = {
//     firstName: "john",
//     lastName: "taguran",
//     language: "NO",
//     get lang() {
//         return this.language;
//     },
//     set lang(value){
//         return this.language.value;
//     }
// }
// txt.lang = "en";
// console.log(txt.lang);

//////////////////////////////////      Object.defineProperty    define an object property and/or change a property's value and/or metadata.
// Create an Object:
// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "NO", 
// };
// // Change a Property:
// Object.defineProperty(person, "language", {
//   value: "EN",
//   writable : true,
//   enumerable : true,
//   configurable : true
// });
// // Enumerate Properties
// txt = "";
// for (var x in person) {
//     txt += person[x] + "\n";
// }
// console.log(txt);

///////////////////////////////////////////

var person = {
    firstName: "John",
    lastName: "Taguran",
    language: "No"
};
Object.defineProperty(person, "language",{
    get: function() {return language},
    set: function(value) {language = value.toUpperCase()}
});
person.language = "en";
console.log(person.language);