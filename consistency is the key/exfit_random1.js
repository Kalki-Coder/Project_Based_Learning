//Declare an empty array;
// const emp1_arr = Array();
// let emp2_arr = new Array();
// let emp3_arr = [];
// console.log(emp1_arr);

//Declare an array with more than 5 number of elements
// let five_no = Array(6).fill("Google");
// console.log(five_no);
//Find the length of your array
// console.log(five_no.length);

//Get the first item, the middle item and the last item of the array
// let first_item_arr = five_no[0];
// let middle_item_arr = five_no[parseInt(five_no.length / 2)];
// let last_item_arr = five_no[five_no.length - 1];
// console.log(first_item_arr, middle_item_arr, last_item_arr)

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
//done

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//done

// Print the array using console.log()
// done

//Print the number of companies in the array
//done

//Print the first company, middle and last company
//done

//Print out each country
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
//   "Facebook",
//   "Japan",
//   "Kenya",
// ];

// let users_country = prompt('enter your country name');
// if ((((countries.join(' ')).toLowerCase()).split(' ')).indexOf(users_country.toLowerCase()) != -1){
//     console.log(users_country.toLowerCase())
// } else {
//     console.log(`${users_country.toLowerCase()} is not found in the list`)
// }
// console.log(countries.toString());
// console.log(countries.join()); and console.log(countries.join(','));
//Albania,Bolivia,Canada,Denmark,Ethiopia,Finland,Germany,Hungary,Ireland,Japan,Kenya
// console.log(countries.join(''));
// AlbaniaBoliviaCanadaDenmarkEthiopiaFinlandGermanyHungaryIrelandJapanKenya
// console.log(countries.join(', '));
// Albania, Bolivia, Canada, Denmark, Ethiopia, Finland, Germany, Hungary, Ireland, Japan, Kenya
// console.log(countries.join(' , '));
// Albania , Bolivia , Canada , Denmark , Ethiopia , Finland , Germany , Hungary , Ireland , Japan , Kenya
// console.log(countries.join(' $ '));
// Albania $ Bolivia $ Canada $ Denmark $ Ethiopia $ Finland $ Germany $ Hungary $ Ireland $ Japan $ Kenya

// console.log((countries.join(' ')).toUpperCase());
// ALBANIA BOLIVIA CANADA DENMARK ETHIOPIA FINLAND GERMANY HUNGARY IRELAND JAPAN KENYA

// console.log(`${(countries.slice(0,countries.length-1)).join(' ')} and ${countries[countries.length-1]} are asian countries.`)

// console.log(countries.sort());
// console.log(countries.reverse());
// console.log(countries.slice(0,3));
// console.log(countries.slice(countries.length-3,countries.length));
// countries.shift();
// console.log(countries);
// console.log(countries.splice(0,1));

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea');
// console.log(shoppingCart)

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];
// let fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);

// The median is the middle value in a list of numbers that has been arranged in order from smallest to largest (or largest to smallest)
// one middle item or two middle items divided by two
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// console.log((ages.join("+")))