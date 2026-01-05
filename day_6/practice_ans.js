// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// const mernStack = ["MongoDB", "Express", "React", "Node"];

// for (let i = 0;i<=10;i++){
//     console.log(countries[i]);
// }

// for (let i = 10;i>=0;i--){
//     console.log(countries[i]);
// }
// for (let i = 0;i<=countries.length-1;i++){
//     console.log(countries[i]);
// }

// let i = 0;
// while (i <= 10){
//     console.log(countries[i])
//     i++
// }
// let i = 10;
// while(i >= 0){
//     console.log(countries[i])
//     i--
// }
// let i = 0;
// while(i <= countries.length-1){
//     console.log(countries[i])
//     i++
// }
// let i = 0;
// do {
//   console.log(countries[i]);
//   i++;
// } while (i <= 10);
// let i = 10;
// do {
//     console.log(countries[i])
//     i--
// } while (i >= 0)
// let i = 0;
// do {
//     console.log(countries[i]);
//     i++
// } while (i <= countries.length-1)
// for (let i = 0;i<=10;++i){
//     console.log('#'.repeat(i));
// }
// for (let i = 0;i<=10;i++){
//     console.log(`${i} X ${i} = ${i*i}`);
// }
// console.log("i  i^2  i^3  i^4")
// for (let i = 1;i <=10;i++){
//     console.log(`${i}  ${i**2}  ${i**3}  ${i**4}`)
// }
// for (let i = 1;i<=100;i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }
// for (let i = 1;i<=100;i++){
//     if (i % 2 !== 0){
//         console.log(i)
//     }
// }
// let limit_1 = prompt("enter the interger in your mind");
// for (let i = 2; i <= limit_1; i++) {
//     let isprime = true;
//     for (let j = 2; j < i; j++){
//         if (i % j === 0){
//             isprime = false
//             break;
//         }
//     }
//     if (isprime) {
//         console.log(i)
//     }
// }

// let sum_no = 0;
// for (let i = 0; i <= 999; i++) {
//   sum_no += i;
// }
// console.log(sum_no);

// let sum_even = 0;
// let sum_odd = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum_even += i;
//   } else {
//     sum_odd += i;
//   }
// }
// // console.log(`The sum of all evens from 0 to n is ${sum_even}. And the sum of all odds from 0 to n is ${sum_odd}.`)
// // console.log(Array(sum_even, sum_odd));

// let array_one = [];

// for (let i = 0; i < 5; i++) {
//   array_one[i] = Math.floor(Math.random() * 100);
// }
// console.log(array_one);

// let array_one = [];

// while (array_one.length < 5) {
//   let ran_element = Math.floor(Math.random() * 100);

//   if (!array_one.includes(ran_element)) {
//     array_one.push(ran_element);
//   }
// }

// console.log(array_one);

// let unique_ids = Math.random().toString(36).substring(2,8);
// console.log(unique_ids);

// let uniq_id = "";
// let char_str = "abcdefghijklmnopqrstuvwxyz0123456789";
// for (let i = 1; i <= 6; i++) {
//   let rand_char = Math.floor(Math.random() * 37);
//   if (!uniq_id.includes(char_str.slice(rand_char,rand_char+1))) {
//     uniq_id += char_str.slice(rand_char,rand_char+1);
//   }
// }
// console.log(uniq_id);

// let uniq_id = "";
// let char_str = "abcdefghijklmnopqrstuvwxyz0123456789";
// for (let i = 1; i <= 6; i++) {
//   let rand_char = Math.floor(Math.random() * 37);
//   uniq_id += char_str.slice(rand_char, rand_char + 1);

// }
// console.log(uniq_id);

// let a = Math.floor(Math.random() * 256);
// let b = Math.floor(Math.random() * 256);
// let c = Math.floor(Math.random() * 256);

// console.log(`rgb(${a},${b},${c})`)

// console.log(((countries.join(" ")).toUpperCase()).split(" "))
// let countries_length = [];
// for (i = 0; i < countries.length; i++) {
//   countries_length.push((countries.slice(i, i + 1).join("")).length);
// }
// console.log(countries_length);
// let updated_array = [];
// for (i = 0; i < countries.length; i++) {
//   let sub_array = [
//     countries[i],
//     (((countries.slice(i, i + 1)).join("")).slice(0, 3)).toUpperCase(),
//     countries.slice(i, i + 1).join("").length,
//   ];
//   updated_array.push(sub_array);
// }

// console.log(updated_array);

// const land_countries = [];
// for (i = 0; i < countries.length; i++) {
//   if (countries[i].includes("land")) {
//     land_countries.push(countries[i]);
//   }
// }
// if (land_countries > 0) {
//   console.log(land_countries);
// } else {
//     console.log(("All these countries are without land").toLowerCase());
// }

// const land_countries = [];
// for (i = 0; i < countries.length; i++) {
// //   if ((countries[i].toString()).endsWith("ia")) {
//   if (countries[i].endsWith("ia")) {

//     land_countries.push(countries[i]);
//   }
// }
// if (land_countries.length > 0) {
//   console.log(land_countries);
// } else {
//     console.log(("All these countries are without ia").toLowerCase());
// }

// let countries_length = [];
// for (i = 0; i < countries.length; i++) {
//   countries_length.push(countries.slice(i, i + 1).join("").length);
// }
// let max = Math.max(...countries_length);
// let index_of_high_len = (countries_length.indexOf(max));
// console.log((countries.slice(index_of_high_len,index_of_high_len+1)).join(""));

// let copy_countries = structuredClone(countries);
// console.log(copy_countries);
// let sorted_countries = copy_countries.sort();
// console.log(sorted_countries);
// console.log(webTechs.sort());
