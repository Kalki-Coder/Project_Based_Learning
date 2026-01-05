// let firstName = "Mithlesh";
// let lastName = "Gupta";
// let countr = "India";
// let city = "New Delhi";
// let agee = 25;
// let isMarried = false;
// let year = 2025;
// let myage = 25;
// let yourage = 'infinity';
// console.log('my age is', myage);
// console.log("my lord's age is", yourage);
// let first_nam = 'Mithlesh';
// let last_nam = 'Gupta';
// let ag = 25;
// let marital_statu = 'single';
// // let country = `India`;
// let height = 163.5; // in cm
// let salary;
// let bad_habbits = null;
// let first_name = 'Mithlesh', 
// last_name = 'Gupta' , 
// age = 25, 
// marital_status = 'single', country = "India";
// // the variable values can be accessed from other variable.js file
// console.log(first_name, height, salary, bad_habbits)
// console.log(typeof(first_name), typeof(height), typeof(salary), typeof(bad_habbits));


// console.log('Days\tTopics\tExercises')
// console.log('Day 1\t3\t5')

// let challenge = '30 Days Of JavaScript';
// let up = challenge.toUpperCase();
// console.log(up);

// let low = challenge.toLowerCase();
// console.log(low);
// console.log(challenge.indexOf('D'));
// let first_slice = challenge.substring(3);
// console.log(first_slice);
// The "latest news" regarding the JavaScript substr() method is that it has been officially deprecated and is no longer recommended for use in modern web development. 
// console.log(challenge.includes('Script'));
// console.log(challenge.split());
// console.log(challenge.split(''));
// console.log(challenge.split(' '));

// let target_comapnies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(target_comapnies.split(','));

// console.log(challenge.replace('JavaScript', 'Python'));
// console.log(challenge.charAt(15));
// console.log(challenge.indexOf('J'));
// console.log(challenge.charCodeAt(challenge.indexOf('J')));
// console.log(challenge.indexOf('a'));
// console.log(challenge.lastIndexOf('a'));

// let sentence = '              You cannot end a sentence with because because because is a conjunction';
// console.log(sentence.indexOf('because')); // 31
// console.log(sentence.lastIndexOf('because')); // 47
// console.log(sentence.search('because')); // 31
// console.log(sentence.search(/Because/gi)); // 31
// console.log(sentence.trim());
// console.log(challenge.startsWith(30));
// console.log(challenge.endsWith('JavaScript'));
// console.log(challenge.match('a'));
// [ 'a', index: 4, input: '30 Days Of JavaScript', groups: undefined ]
// console.log(challenge.match(/a/gi));
// [ 'a', 'a', 'a' ]

// console.log(challenge.concat('.'))
// console.log(challenge.repeat(2));

// let a = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';
// console.log(a);

// let b = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// console.log(b);

// let text = "JavaScript is a powerful programming language used worldwide.\nIt helps developers build interactive websites, mobile apps, and servers.\nLearning JavaScript improves problem-solving skills and opens many career opportunities in modern software development.";
// console.log(text);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// console.log(typeof(10));
// console.log(typeof(parseInt('10')));

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10
// console.log(parseInt(Math.ceil(parseFloat(('9.8'))))===10); //true

// let a = 'python';
// let b = 'jargon';
// console.log(a.endsWith('on'));
// console.log(b.endsWith('on'));

// let c = 'I hope this course is not full of jargon.'
// console.log(c.endsWith('jargon.'));

// let c = Math.random();
// let d = (Math.floor(c*256));

// if (d<=50) {
//    (d += 50);
// }

// console.log(d);

// let d = 'JavaScript';
// console.log(d[Math.floor(Math.random()*11)]);

// console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
// const g = 'You cannot end a sentence with because because because is a conjunction'
// let h = g.indexOf('because');
// let j = g.lastIndexOf('is');
// console.log(g.substring(h,j));

// let a = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log((a.match(/love/gi)).length);


// let a = 'You cannot end a sentence with because because because is a conjunction'
// console.log((a.match(/because/gi)).length);

// let salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// let ca_salary = (salary.replace(/[a-zA-Z\s+]/g,'')).split(',');
// console.log(+(ca_salary[0]*12) + (+ca_salary[1]) + (+ca_salary[2]*12));


// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// const cleaned = (sentence.replace(/[^a-zA-Z0-9\s]/g,'')).toLowerCase();
// // console.log(cleaned.split(/\s+/)); no need right now for the solution

// let maxword = '';
// let maxcount = 0;

// let result = cleaned.replace(/\b[a-z]+\b/g, word => {
//         const count = cleaned.split(word).length - 1;
//         maxword = count > maxcount ? word : maxword;
//         maxcount = Math.max((maxcount,count));
// });

// console.log(maxword)