// console.log(100);

// console.log("Hello World");

// console.log(20, "Hello", true);

// const x = 199;

// console.log(x-10);

// console.error('Alert');

// //console.warn("Warning");

// console.table({name: 'Toby', email: 'toby@gmail.com'});

// console.group("simple");
// console.log(x-10);
// console.error('Alert');
// console.groupEnd;

// const styles = 'padding: 10px; background-color: white; color: black';

// console.log('%cHello World', styles);

// /* Ways to declare variables 
// - let, const, var - old one

// */

// let firstName = 'John';
// let lastName = 'Doe';

// console.log(firstName, lastName);

// // let age = 30;

// // console.log(age);

// // age = 32;

// console.log(age);

// let score;

// score = 2;

// console.log(score);

// if (true) {
//     score = score + 1;
// }

// console.log(score);
// const arr = [1, 2, 3, 4];

// arr.push(5);

// console.log(arr);

// const person = {
//     name: 'Brad',
// };

// person.name = 'John';

// person.email = 'brad@fgnaak.com';

// console.log(person);

// let a, b, c;

// const d = 19, e = 23, f = 25;

// console.log(d);
 
// let name = 'John';

// let age = 30;

// let person = {
//     name: Brad,
//     age: 30
// }

// x = "Hello" + " " + "World";

//  x = 3 ** 3;

// x = 3; 
// x = x + 1;
//  x++;
//  x = x - 1;
//  x--;

//  x = 10;
//  x+=12;
//  x-=12
//  x %=5;
// console.log(x);
// x = 2

// x = 2 !== "2";

// x = 19 > 1;
// x = 11 < 1;

// x = 10 >= 1;

// let x;

// x = 5 + "5";

// x = 5 + Number("5");

// x = 5 * '5';

// x = 5 + null;

// x = Number(null);
// x = Number(true);

// x = 5 * null;

// console.log(x, typeof x);

// let x;


// const name = 'John';
// let age = 31;

// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

//Template Literals

// x = `Hello, my name is ${name} and I am ${age} years old`;

//String properties and methods

// const s = 'Hello World';
// x = s.length;
// x = s[6];
// x = s.toLowerCase()
// x = s.toLowerC ase()
// x = s.indexOf('e');


// x = s.replace('Hello', 'Ciao');
// x = s.includes('Hell');
// x = s.valueOf();
// x = s.split('');


// console.log(x);


//Capitalize challange

// const myString = "developer";

// let myNewString;

// //Solution 1
// myNewString = myString.charAt(0).toUpperCase + myString.substring(1);
// myNewString = myString[0].toUpperCase + myString.substring(1);
// myNewString = `${myString[0].toUpperCase}${myString.slice(1)}`;


// console.log(myNewString);

// let x;

// const num = new Number(109.876);

// x = num.toString();

// x = num.toString().length;

// x = num.toFixed(2);

// x = num.toPrecision(3);

// x = Number.MAX_VALUE;

// x = Number.MIN_VALUE;


// console.log(x);

//let x;

// x = Math.sqrt(9);
// x = Math.abs(-9);
// x = Math.round(-9.9);
// x = Math.ceil(3.4);
// x = Math.pow(2,3);
// x = Math.min(4, 5);
// x = Math.max(4, 5, 7);
// x = Math.random();
// x = Math.floor(Math.random() * 1000 + 1);

// console.log(x);

/* Number Challenge
let x;
let y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

const sum = x + y; //1
const diff = x - y; //2
const product = x * y; //3
const quotient = x / y; //4
const rm = x % y; //5
const sumOutput = `${x} + ${y} = ${sum}`; //1
const differenceOutput = `${x} - ${y} = ${diff}`; //2
const productOutput = `${x} * ${y} = ${product}`; //3
const quotientOutput = `${x} / ${y} = ${quotient}`; //4
const rmOutput = `${x} % ${y} = ${rm}`; //4


console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);

*/

// alert('hello world');
// console.error('this is error');
// console.warn('this is warning');
// let = age;

/* let age = 30;
age = 31;
const name = 'Carl';
x = `My name is ${name} and I am ${age} years old`
console.log(x); */

/* function looks like this

    previosly used format

    function sayHello() {
        const greeting = 'hello world';
        return greeting;
    }

    now we use this - arrow functions

    const sayHello = () => {
        const greeting = 'say hello';
        return greeting;
    }

    const ourGreeting = sayHello();

    const sayMyFavouriteColor = (str) => {
        const favColor = 'my favourite color is: ' + str;
        return favColor;
    }

    const myFavColorStatement = sayMyFavouriteColor ('blue');

const sayMyFavouriteColor = (str) => {
   const favColor = 'my favourite color is: ' + str;
    return favColor;
}

const myFavColorStatement = sayMyFavouriteColor ('blue');

const introducePerson = (str) => {
  const result = 'My name is ' + str;
  return result;
}

const myIntroduction = intruducePerson('Carl');
*/

/*
== equal
=== strictly equal
!= not equal 
!== strictly not equal
< > <= >=

console.log( 9 !== '9')
*/

// let myNum = 3;
// myNum++;
// myNum--;
// console.log(myNum);

// console.error('Wrong argument');
// console.warn('Yellow is the color of the sun');

/*
let isGreaterThanFifty;
let myVar = 40;
if (myVar >= 50) {
    isGreaterThanFifty = false;
} else {
    isGreaterThanFifty = true;
}

console.log(isGreaterThanFifty)
*/

// switch/case 
/*
let periodOfTheDay = "evening";

switch(periodOfTheDay) {
    case "morning": console.log("good morning");
    break;
    case "afternoon": console.log("good afternoon");
    break;
    case "evening": console.log("good evening");
    break;
    default: console.log("hello world");
}
*/

// while loops

// let myNum = 1;
 
// while(myNum <= 10) {
//   console.log(myNum);
//   myNum++;
// }

// for loops
// for(let i=0; i<10; i++) {
//   console.log(i);
// }