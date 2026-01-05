// driving eligibility check
// let user_age = Number(prompt("Enter your age"));
// if (user_age >= 18) {
//   console.log("you are old enough to drive");
// } else {
//   console.log(
//     `you need to wait ${18 - user_age} more years after that you can drive.`
//   );
// }
// age comparison test
// let client_age = +prompt("enter your age");
// let client2_age = +prompt("enter your age");
// if (client_age > client2_age) {
//   console.log(
//     `you are older than your friend by ${client_age - client2_age} years`
//   );
// } else if (client_age === client2_age) {
//   console.log(`you both guys have same age ${client_age}`);
// } else {
//   console.log(
//     `your friend is older than you by ${client2_age - client_age} years`
//   );
// }
// comparision of two variable
// let a = 4;
// let b = 31;
// a > b
//   ? console.log(`${a} is greater than ${b} by ${a - b} margins`)
//   : console.log(`${b} is greater than ${a} by ${b - a} margins`);
// check for even numbers
// let num = +prompt("Enter the no. that comes to your mind");
// num % 2 === 0
//   ? console.log(`the entered no. ${num} is even`)
//   : console.log(`the entered no. ${num} is odd`);
// student grade provider
// let student_score = +prompt("Enter the score of the student");
// if (student_score >= 80) {
//   console.log("A");
// } else if (student_score >= 70) {
//   console.log("B");
// } else if (student_score >= 60) {
//   console.log("C");
// } else if (student_score >= 50) {
//   console.log("D");
// } else {
//   console.log("F");
// }
// check which season is in the rural india
// let month = prompt("enter the month right now in your province");
// if (["december", "january", "february"].includes(month.toLowerCase())) {
//   console.log("Ohh my god i got chills your province in too cold");
// } else if (["march", "april", "may"].includes(month.toLowerCase())) {
//   console.log("it is a good season to travel in your province");
// } else if (["june", "july", "august"].includes(month.toLowerCase())) {
//   console.log("Ohh my god it too hot in your province right now");
// } else {
//   console.log("i can think of visiting to your province during this month");
// }
// // check weekend or weekday
// let day = prompt("enter the day today");
// if (
//   ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(
//     day.toLowerCase()
//   )
// ) {
//   console.log(`${day.toLowerCase()} is a working day.`);
// } else {
//   console.log(`Enjoy dear, ${day.toLowerCase()} is a weekend.`);
// }
// check how many days in entered month
// let month1 = prompt("enter the month");
// if (
//   ["january", "march", "may", "july", "august", "october", "december"].includes(
//     month1.toLowerCase()
//   )
// ) {
//   console.log(`${month1.toLowerCase()} has 31 days`);
// } else if (["february"].includes(month1.toLowerCase())) {
//   console.log(`${month1.toLowerCase()} has 28 days`);
// } else {
//   console.log(`${month1.toLowerCase()} has 30 days`);
// }
// // check how many days in entered month : consider leap year
// let month2 = prompt("enter the month");
// if (
//   ["january", "march", "may", "july", "august", "october", "december"].includes(
//     month2.toLowerCase()
//   )
// ) {
//   console.log(`${month2.toLowerCase()} has 31 days`);
// } else if (["february"].includes(month2.toLowerCase())) {
//   console.log(`${month2.toLowerCase()} has 28 days and maybe 29 days if it is a leap year`);
// } else {
//   console.log(`${month2.toLowerCase()} has 30 days`);
// }

//or i can solve this long way with multiple conditions
// let [a, b] = prompt('enter the month, year')
//               .split(',')
//               .map(x => x.trim());

// console.log(a); // month
// console.log(b); // year ----using this destructuring syntax.
