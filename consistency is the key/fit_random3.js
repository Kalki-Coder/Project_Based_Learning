// console.log(
//   4 > 3,
//   4 >= 3,
//   4 < 3,
//   4 <= 3,
//   4 == 4,
//   4 === 4,
//   4 != 4,
//   4 !== 4,
//   4 != "4",
//   4 == "4",
//   4 === "4"
// );
// console.log("python".length !== "jargon".length);
// let firstName = "Mithlesh";
// let lastName = "Gupta";
// let country = "India";
// let city = "New Delhi";
// let age = 25;
// let isMarried = false;
// let year = 2025;
// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof year);
// console.log(typeof "10" == typeof 10);
// console.log(parseInt("9.8") == 10);
// console.log(Boolean(0));
// console.log(Boolean(0.0));
// console.log(Boolean(""));
// console.log(Boolean(""));
// console.log(Boolean(``));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0n));
// console.log(Boolean(false));
// console.log(Boolean(true));
// console.log(Boolean(1));
// console.log(3 > 2);
// console.log(
//   4 > 3 && 10 < 12,
//   4 > 3 && 10 > 12,
//   4 > 3 || 10 < 12,
//   4 > 3 || 10 > 12,
//   !(4 > 3),
//   !(4 < 3),
//   !false,
//   !(4 > 3 && 10 < 12),
//   !(4 > 3 && 10 > 12),
//   !(4 === "4")
// );

// let a = "dragon";
// let b = "python";
// let isonexist = a.includes("on") && b.includes("on");
// console.log(`There is no 'on' in both dragon and python ${!isonexist}`);

// let now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(Date.now());

// let base = prompt(
//   "Enter base of the triangle",
//   "the details should be in metres"
// );
// let height = prompt(
//   "Enter height of the triangle",
//   "the details should be in metres"
// );
// let area = 0.5 * base * height;
// console.log(`The area of the triangle is ${area}`);

// let a = prompt("enter the length of side a of given triangle", "in meters");
// let b = prompt("enter the length of side b of given triangle", "in meters");
// let c = prompt("enter the length of side c of given triangle", "in meters");
// let perimeter = +a + +b + +c;
// console.log(`The perimeter of the triangle is ${perimeter}`);

// let a = prompt("enter the length of side a of given rectangle", "in meters");
// let b = prompt("enter the length of side b of given rectangle", "in meters");
// let area = +a * +b;
// let perimeter = (+a + +b) * 2;
// console.log(`The area of the rectangle is ${area}`);
// console.log(`The perimeter of the rectangle is ${perimeter}`);

// let a = prompt("enter the radius of given circle", "in meters");
// let area = Math.PI * (+a) ** 2;
// let perimeter = 2 * Math.PI * +a;
// console.log(`The area of the circle is ${area}`);
// console.log(`The perimeter of the circle is ${perimeter}`);

// let x = Number(prompt("enter the x1 intercept value"));
// let y = 2 * x - 2;
// let a = Number(prompt("enter the x2 intercept value"));
// let b = 2 * a - 2;
// let slope = (b - y) / (a - x);
// console.log(`the slove of the given equation is ${slope}`);

// let x = 2;
// let y = 2;
// let a = 6;
// let b = 10;
// let slope = (b - y) / (a - x);
// console.log(`the slove of the given equation is ${slope}`);

// let x = Number(prompt("give the value of x "));
// let y = x ** 2 + 6 * x + 9;

// y
//   ? console.log(`the value you entered of x=${x} is not the root of y`)
//   : console.log(`the value you entered of x=${x} is the root of y`);

// let _hours = Number(prompt("enter the total working hours of the person"));
// let _pphours = Number(prompt("enter the per hour wage of the person"));
// console.log(_hours * _pphours);

// let _name = prompt("enter your name");
// _name.length > 7
//   ? console.log(`your name ${_name} is long`)
//   : console.log(`your name ${_name} is short`);

// let firstName = 'Mithlesh';
// let lastName = 'Gupta';
// firstName.length > lastName.length
// ? console.log(`your first name, ${firstName} is longer than your family name, ${lastName} `)
// : console.log(`your first name, ${firstName} is shorter than your family name, ${lastName} `);

// let myage = 25;
// let yourage = 15;
// console.log(`i am ${myage-yourage} years older than you.`)
// let birth_year = Number(prompt('enter your birth year'));
// let age = 2025 - birth_year;
// age >= 18
// ? console.log(`You are ${age}. You are old enough to drive`)
// : console.log(`You are ${age}. You will be allowed to drive after ${18-age} years`);


// let year_lived = Number(prompt('enter your age in years'));
// let life_remaining = 100 - year_lived;
// console.log(`you can live ${life_remaining*60*60*24*365} more seconds roughly`)

// let now = new Date();
// 2025-12-24T16:26:18.059Z
// 2025-12-24   → Date (YYYY-MM-DD)
// T            → Separator between date and time
// 16:26:18     → Time (HH:MM:SS) in 24-hour format
// .059         → Milliseconds (59 ms)
// Z            → UTC time zone (Zulu time)

// console.log(now.toString());
// console.log(now.toUTCString());
// YYYY-MM-DD HH:mm
// console.log(`YYYY-MM-DD HH:mm\n${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)
// DD-MM-YYYY HH:mm
// console.log(`DD-MM-YYYY HH:mm\n${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)
// DD/MM/YYYY HH:mm
// console.log(`DD/MM/YYYY HH:mm\n${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)

// let iso = '2025-01-24T01:38:18.059Z';
// let now = new Date(iso);
// let year = String(now.getFullYear()).padStart(4,'0');
// let month = String(now.getMonth()+1).padStart(2,'0');
// let day = String(now.getDate()).padStart(2,'0');
// let hours = String(now.getHours()).padStart(2,'0');
// let minutes = String(now.getMinutes()).padStart(2,'0');

// // YYYY-MM-DD HH:mm
// console.log(`YYYY-MM-DD HH:mm\n${year}-${month}-${day} ${hours}:${minutes}`)