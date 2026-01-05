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
