// function printFullName() {
//   let firstName = "Asabeneh";
//   let lastName = "Yetayeh";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   return fullName;
// }
// printFullName()
// console.log(printFullName());
// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo
//   console.log(sum)
// }
// sumTwoNumbers(10, 20)

// Let us access the arguments object
// function sumAllNums() {
//  console.log(arguments)
// }

// sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function fullname() {
//   return "mithlesh";
// }
// console.log(fullname());

// function fullname(firstName,lastName) {
//   return `${firstName} ${lastName}`;
// }

// console.log(fullname("mithlesh","gupta"));

// function addNumbers(num1, num2) {
//   return num1 + num2;
// }
// console.log(addNumbers(199, 1));

// function areaOfRectangle(length, width) {
//   return length * width;
// }

// console.log(areaOfRectangle(12, 19));

// function perimeterOfRectangle(length, width) {
//     return 2*(length + width);
// }
// console.log(perimeterOfRectangle(10, 20));

// function volumeOfRectPrism(length, width, height) {
//   return `Volume = ${length * width * height}`;
// }
// console.log(volumeOfRectPrism(10, 20, 30));

// function areaOfCircle(r) {
//     return `Area Pf The Circle :- ${Math.PI*r*r}`;
// }
// console.log(areaOfCircle(100));
// function circumOfCircle(r) {
//     return 2*Math.PI*r;
// }
// console.log(circumOfCircle(100));

// function findMax() {
//   let max = [0];
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max.splice(0, 1, arguments[i]);
//     }
//   }
//   return max[0];
// }

// console.log(findMax(1, 2, 3, 4, 5, 1001));

// console.log(findMax(0, 10, 5));

// console.log(findMax(0, -10, -2));

// function solveQuadEquation(a, b, c) {
//   if (a === 0) {
//     return [`your equation is not quadratic`];
//   } else {
//     let result = b ** 2 - 4 * a * c;
//     if (result < 0) {
//       return [`no real roots`];
//     } else if (result == 0) {
//       let x1 = (-b + Math.sqrt(result)) / (2 * a);
//       return [x1];
//     } else {
//       let x1 = (-b + Math.sqrt(result)) / (2 * a);
//       let x2 = (-b - Math.sqrt(result)) / (2 * a);
//       return [x1,x2];
//     }
//   }
// }

// console.log(solveQuadEquation(2, 0, 2));

// function solveLinEquation(a, b, c, x, y) {
//   if (a * x + b * y + c === 0) {
//     return `the value of the liner eq. is ${(x, y)}`;
//   } else {
//     return `the value of the liner eq. not defined`;
//   }
// }

// function solveLinEquation(a, b, c, x, y) {
//     return a * x + b * y + c;
// }

// function printArray (arr) {
//     for ( i = 0 ; i < arr.length ; i++ ) {
//         console.log(arr[i]);
//     }
// }
// const myArray = ['apple', 'banana', 'cherry'];
// printArray(myArray);

// function showDateTime() {
//     const currentdate = new Date();
//     let today = String(currentdate.getUTCDate()).padStart(2,'0');
//     let month = String(currentdate.getUTCMonth() + 1).padStart(2,'0');
//     let year = String(currentdate.getFullYear()).padStart(4,'000');
//     let hour = ('0' + currentdate.getHours()).slice(-2);
//     let minutes = currentdate.getMinutes();
//     return `${today}/${month}/${year} ${hour}:${minutes}`
// }

// console.log(showDateTime())

// function swapValues(a, b) {
//   return `x => ${b}, y => ${a}`;
// }

// console.log(swapValues(9, 29));

// function reverseArray(param) {
//   let reverse_array = [];
//   for (i = param.length - 1; i >= 0; i--) {
//     reverse_array.push(param[i]);
//   }
//   return reverse_array;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

// function capitalizeArray(param) {
//     let arry_string = param.join(" ");
//     return (arry_string.toUpperCase()).split(" ");

// }
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// console.log(capitalizeArray(countries));