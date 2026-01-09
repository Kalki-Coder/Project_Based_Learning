/*This code will
be ignored by JavaScript
and will NOT be executed*/ // multiline comment

//JavaScript was invented by Brendan Eich in 1995

//random practice on the go hihi...
// x = typeof('John' + 35);
// console.log(x);

// x = typeof(['apple','banana']);
// console.log(x); Object

// let x = 'Having fun?';
// console.log(x.slice(7,10));
// console.log(x.substring(7,10));
// console.log(x.substr(7,3));

// let txt = "Hello World";
// txt = txt.replace("Hello", "Welcome");

// let x = 10;
// let y = 20;
// let z = 'The prize is ' + x + y; // The prize is 1020
// What will be the result of z?

// let x = 2;
// let z = x.toFixed(10);
// console.log(z)

// let x = 'Tobias';
// let z = Number(x);
// console.log(z);

// let a = Number.POSITIVE_INFINITY;
// console.log(a);

// let b = Number.NEGATIVE_INFINITY;
// console.log(b);

// The reverse() method returns a new array, the original array is not affected. false

// const x = ['Apple', 'Banana', 'Cherry'];
// {
//   const x = ['Audi', 'BMW', 'Chevrolet'];
// }
// alert(x[1]); // Banana

// let x = ['Apple', 'Banana', 'Cherry'];
// {
//     x = ['Audi', 'BMW', 'Chevrolet'];
// }
// alert(x[1]); // Error

// const d = new Date(2024, 10, 18);
// console.log(d);

// const d = new Date(24, 10, 18);
// console.log(d); //1924-11-17T18:30:00.000Z

// const d = new Date('2024');
// console.log(d); //2024-01-01T00:00:00.000Z

// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time). //true

// let x = Date.parse('March 30, 2011');
// console.log(x); Date.parse() = “Convert a date string → milliseconds since 1970”

// let d = new Date('March 30, 2011');
// console.log(d); // 2011-03-29T18:30:00.000Z

// let x = Math.round(5.3);
// let y = Math.floor(5.3);
// console.log(x, y);

// let x = Math.random();
// console.log(x); // no parameter required

//What is expected format of the setTime() method? - Milliseconds since January 1, 1970

// let i, x = '';
// for (i = 0; i < 5; i = i + 2) {
//     x += i;
// }
// console.log(x);

//In programming, "enumerable" generally means that something can be counted, ordered, or iterated over one by one

// const nums = [10, 20, 30];

// for (let index in nums) {
//     console.log(index, nums[index]);
// }

// nums.custom = 99;

// for (let i in nums) {
//   console.log(i);
// }

// let x = typeof(Number('John'));
// console.log(x);
// number

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// const fruits = [
// ["apples", 300],
// ["pears", 900],
// ["bananas", 500]
// ];

// const myObj = Object.fromEntries(fruits);
// console.log(myObj);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// let name1 = person.fullName();
// console.log(name1); John Doe

// let name1 = person.fullName;
// console.log(name1); [Function: fullName]

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// // Build a Text
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// }

// console.log(text);


// Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Create an Array
// const myArray = Object.keys(person);
// console.log(myArray);

// // Stringify the Array
// let text = myArray.join();
// console.log(text);

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}

console.log(text);
console.log(JSON.stringify(fruits))