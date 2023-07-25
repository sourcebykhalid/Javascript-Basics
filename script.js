// document.getElementById("title").onclick = function titles() {
//   prompt("Do u want to add title?");

//   if (prompt == "yes") {
// alert("Ok it will be done in few minutes");
//   } else {
// alert("U can carry on with your old title");
//   }
// };
// titles();

// DOM in JS
// document.createElement("div");
// let username = "Alex";
// alert(username);
// document.write("<h1>Hello, my name is" + username + "</h1>");
// function myFunction() {
//   document.write("Hello World");
// }
// function btn() {
// document.getElementById("btn1").write(alert("Welcome to my resume"));
// }
// var isPalindrome = (x) => {
//   const arr = [];
//   while (x > 0) {
//     arr.push(x % 10);
//     x = Math.floor(x / 10);
//     alert(arr);
//   }
// };
// isPalindrome(456);

// For Loop
// let n = prompt("Enter the value of n");
// let sum = 0;
// for (let i = 1; i < 20; i++) {
//   alert("Number is: " + i + 808);
//   sum *= i;
// }
// alert(sum);

// For in Loop
// let marks = {
//   alex: 23,
//   mike: 65,
//   jean: 76,
//   rick: 98,
// };
// for (let m in marks) {
//   alert(`Marks of  ${m} are  ${marks[m]}`);
// }

// For of loop
// const names = ["Apple", "Microsoft", "Chat-Gpt", "Atlassian"];
// for (let a of names[1]) {
//   alert(a);
// }

// While Loops in JS
// let i = 0;
// while (i <= 10) {
//   alert(i);
//   i++;
// }

// Do while Loop.  This loop executes at least once.
// let i = 0;
// do {
//   alert(i);
//   i++;
// } while (i < 20);

// Conditionals in Javascript
// const temp = prompt("Enter Temperature");
// if (temp > -4 && temp < 4) {
// alert("It's cold");
// } else if (temp > 4 && temp < 26) {
// alert("Its warm");
// } else {
// alert("its hot");
// }

// Ternary Operators in JAvascript
// let age = prompt("Enter your age");
// let result =
//   age < 17
//     ? "You Can't drive"
//     : age == 17
//     ? "You need to wait for some more time"
//     : age >= 18
//     ? "You are eligible for driving"
//     : "";

// alert(result);

// Classes & Objects in jAVascript
// class AdminForm {
//   constructor(name, trainNo) {
//     this.name = name;
//     this.trainNo = trainNo;
//   }
//   submit() {
//     alert(
//       `${this.name}  : This Form is Submitted with train No ${this.trainNo}`
//     );
//   }
//   cancel() {
//     alert(
//       `${this.name}  : This Form is Cancelled with train No ${this.trainNo}`
//     );
//   }
//   // fill(sayname, trainNo) {
//   //   this.name = sayname;
//   //   this.trainNo = trainNo;
//   // }
// }
// let alex = new AdminForm("Alex", 572836);
// // alex.fill("Alex", 572836);

// let jean = new AdminForm("Jean", 876728);
// // jean.fill("Jean", 876728);

// alex.submit();
// jean.submit();
// jean.cancel();

// Functions in JAvascript
// let average = function (a, b, c, d) {
//   return (a + b + c + d) / 4;
// };
// let result = average(56, 2, 47, 87);
// alert(result);
// let coffeeN = prompt("What type of coffee would like?");
// let sugar = prompt("How much sugar u want in your coffee?");
// let cups = prompt("How many cups of Coffee u would like to have?");

// function coffee() {
//   let coffe = `${cups} Cups of ${coffeeN} Coffee with ${sugar} pouches of Sugar will be ready in 15 minutes`;
//   return coffe;
// }
// let coffeDone = coffee(coffeeN, sugar, cups);
// alert(coffeDone);

// Higher Order Functions in Javcript
// function wifi() {
//   setTimeout(() => {
//     alert("wifi is connected Again");
//   }, 3000);
// }
// alert("wifi disconnected");
// wifi();

// shorthand for arrow functions in Javascript
// const result = (num) => num * num;
// alert(result(45));

// Callback Functions in Javascript

// function myDisplayer(some) {
//   alert("done");
// }
// function myCalculator(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// const sum = myCalculator(3465, 578);
// myDisplayer(sum);
// alert("hh");

// const model = (name, year) => {
//   alert(`The name of this car is ${name}`);
//   year();
// };
// const year = (id) => {
//   alert(`The name of this car is ${id} and its from year ${year}`);
// };
// year(2017);
// model("Mclarren");

// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     alert("Loaded Script with SRC: " + src);
//     callback(src);
//   };
//   document.body.appendChild(script);
// }
// function hello(src) {
//   alert("Hello world " + src);
// }
// function goodmorning(src) {
//   alert("Good morning " + src);
// }
// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
//   hello,
//   goodmorning
// );

// Switch Case statements in Javascript
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// alert(day);
// let day = "Thursday";

// switch (day) {
//   case "Monday":
//     alert(`on ${day} there is a standup meet in office`);
//     break;
//   case "Tuesday":
//     alert(`on ${day} you have to finish the pending task`);
//     break;
//   case "Wednesday":
//     alert(`on ${day} you have to push the code to CLI`);
//     break;
//   case "Thursday":
//     alert(`on ${day} you have a one on one meet with TL`);
//   default:
// }

// Switch Case in jAvascript
// var text;
// var favBev = prompt("What's your favorite Beverage?", "Coffee");
// switch (favBev) {
//   case "Coffee":
//     text = "Coffee is good for your soul.";
//     alert(text);
//     break;
//   case "Tea":
//     text = "Tea is my favorite too!";
//     alert(text);
//     break;
//   case "Cold Coffee":
//     text = "Really? Are you sure the Cold Coffee is your favorite?";
//     alert(text);
//     break;
//   default:
//     text = "I have never heard of that one..";
//     alert(text);
// }
// let pets = ["lizard", "dog", "cat", "snake", "parrot", "none"];
// let pet = "snake";
// switch (pet) {
//   case pets[0]:
//     alert("I own a lizard");
//     break;
//   case pets[1]:
//     alert("I own a dog");
//     break;
//   case pets[2]:
//     alert("I own a cat");
//     break;
//   case pets[3]:
//     alert("I own a snake");
//     break;
//   case pets[4]:
//     alert("I own a parrot");
//     break;
//   default:
//     alert("I don't own a pet");
//     break;
// }

// let day = prompt("What day it is today?");
// if (day == "monday") {
//   alert("7am");
// } else if ((day == "tuesday", "wednesday", "thursday")) {
//   alert("4am");
// } else if (day == "Friday") {
//   alert("9am");
// } else {
//   alert("8am");
// }
// switch (day) {
//   case "Monday":
//     alert("Wake me up at 7am");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//     alert("Wake me up at 4am");
//     break;
//   case "Friday":
//     alert("Wake me up at 9am");
//     break;
//   case "Saturday":
//   case "Sunday":
//     alert("Wake me up at 8am");
//     break;
// }

// Arrow functions in Javascript

// const obj = {
//   name: "Alex",
//   role: "Frontend Developer",
//   exp: 3,
//   showF: function () {
//     setTimeout(() => {
//       alert(
//         `The name of Candidate is ${this.name} \n The role is ${this.role}`
//       );
//     }, 1000);
//   },
// };
// obj.showF();

// let result = (num1, num2) => ((num1 + num2) * num1) / num2;
// let res = result(345, 234);
// alert(res);

// Fill & Filter Array methods in Javasript
// var arr = [4, 2, 6, 8, 3, 2, 63, 6, 35];
// alert(arr.concat(34));
// alert(arr.fill(56, 3, 5));
// In Array fill method the Start range is inclusive while the end range is exclusive

// alert(arr.filter(6, 8, 3));
// var result = arr.filter((num1) => num1 != 4);
// alert(result);

// Objects in Javascript
// var person = new Object({
//   firstName: "John",
//   lastName: "Doe",
//   role: "Frontend Developer",
//   courseList: [],
//   buyCourse: function (courseName) {
//     this.courseList.push(courseName);
//   },
//   getCourseCount: function () {
//     return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
//   },
// });
// var courseList = true;
// alert(person.firstName);
// alert(person.getCourseCount());
// person.buyCourse("React JS");
// person.buyCourse("Angular");
// person.buyCourse("DSA");
// alert(person.getCourseCount());
// person.firstName = "Alex";
// alert(person.getCourseCount());

// // Factory Functions in Javascript
// function createCourse(title, title1) {
//   return {
//     title: title,
//     title1,
//     enroll() {
//       alert(this.title + " : Enrolled ");
//       alert(this.title1 + " : Enrolled ");
//       //return 'enrolled';
//     },
//   };
// }
// const course = createCourse("Javascript", "React Js");
// course.enroll();
// alert(course);
// const arrow = (count) => {
//   for (let i = 0; i < count; i++) alert("Hello");
// };
// arrow(5);

// Callback Functions in Javascript
// const calculus = (a, b, operand) => {
//   return operand(a, b);
// };
// const result = calculus(34, 76, function (num1, num2) {
//   return num1 * num2;
// });
// alert(result);
// const subtr = (a, b) => a - b;
// const subRes = calculus(45, 78, subtr);
// alert(subRes);

// function mult(a, b) {
//   return a * b;
// }
// const mulRes = calculus(34, 23, mult);
// alert(mulRes);

// Find() method in JAvascript
// Find() methods returns the value of first element that matches the condition
// const arr = [4, 5, 1, 46, 25, 6];
// const neg = (num) => {
//   return num > 10;
// };
// const result = arr.find(neg);
// // const result = arr.findIndex(neg);
// alert(result);

// Foreach() method in Javascript
// For each loop is used to iterate over an array and perform some action on every item present inside
// arr.forEach((num, i) => {
//   alert("array num", num, i);
// });

//
// function makeDough(dough) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dough = " 🧀";
//       resolve("here is the dough", "🍩");
//     }, 2000);
//   });
// }
// function getCheese(cheeze) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cheeze = " 🧀";
//       resolve("here is the Cheese" + cheeze);
//     }, 2000);
//   });
// }
// function bakePizza(dough) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pizza = dough + "🍕";
//       resolve(pizza);
//     }, 2000);
//   });
// }
// getCheese().then((pizza) => {
//   alert("Here is the Cheeze", cheeze);
//   return bakePizza(pizza);
// });
// async function orderPizza() {
//   const cheeze = await getCheese();
//   const dough = await makeDough(cheeze);
//   const pizza = await bakePizza(dough);
//   alert("Here is the Pizza", pizza);
// }
// orderPizza();

// Ques1
// function fruit() {
//   alert(name);
//   alert(price);

//   var name = "mango";
//   let price = 45;
// }
// fruit();

// Ques2
// let divideByTwo = (number) => {
//   return number / 2;
// };
// let res = divideByTwo(543);
// alert(res);

// // Ques3
// function convertToUpperCaseAsync(inputString) {
//   return new Promise((resolve, reject) => {
//     if (inputString === null) {
//       reject(new Error("String cannot be null"));
//     } else {
//       resolve(inputString.toUpperCase());
//     }
//   });
// }
// const inputString = "hello world";

// convertToUpperCaseAsync(inputString)
//   .then((uppercaseString) => {
//     alert("Uppercase:", uppercaseString);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

// Ternary Operators
// let num = prompt("Enter number");
// let res = num > 18 ? true : false;
// alert(res);

// Conversion of Datatypes in Javascript
// let isLoggedIn = "Mustafa";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// alert(booleanIsLoggedIn);

// let str1 = "Mustafa";
// let str2 = "Khalid";
// let str3 = str1 + str2;
// alert(str3);

// const id = "6736";
// const anotherId = "6736";
// alert(id === anotherId);

// const arr = ["df", "er"];
// alert(typeof arr);

// const func = function () {
//   alert("Hello");
// };
// func();
// alert(typeof func);

// Heap memory(Non-Primitive) and Stack memory(Primitive) in JS

// Strings and String methods in JAvascript
// let name1 = "Alex";
// let name2 = "Morgan";
// alert(name1 + " " + name2);
// alert(`${name1.toLocaleUpperCase()}  ${name2.toUpperCase()}`);
// alert(`${name1.toUpperCase()}  ${name2.toUpperCase()}`);
// const str = new String("Good Morni");
// alert(str);

// Numbers and Maths in Javascript
// const num = 64363.4325678;
// alert(num.toString());
// alert(typeof num);
// // const numb = new Number(65466);
// alert(num);
// alert(num.toFixed(2));
// alert(num.toPrecision(5));
// const hundreds = 10000000000;
// alert(hundreds.toLocaleString("en-US"));

// Maths in Javascript
// alert(Math.PI);
// alert(Math.abs(-567));
// alert(Math.round(4566.4433));
// alert(Math.floor(45.67));
// alert(Math.ceil(45.12));
// alert(Math.min(45, 24, 75, 8, 4));
// alert(Math.max(53, 6, 2, 5, 3, 5));
// alert(Math.random());
// alert(Math.random() * 10 + 1);
// alert(Math.floor(Math.random() * 10) + 1);

// const min = 45;
// const max = 98;

// alert(Math.floor(Math.random() * (max - min + 1)) + min);

// Date  and Time in JAvascript
// const d = new Date();
// alert(d);
// alert(d.toString());
// alert(d.toLocaleString());
// alert(d.toDateString());
// alert(typeof d);
// let myDate = new Date(2023, 6, 5, 3, 55);
// alert(myDate.toLocaleString());

// let myTimeStamp = Date.now();
// alert(myTimeStamp);

// Array in Javascript
// const arr = [1, true, "Hello", null];
// const arr2 = ["ddf", "wshgsh"];
// alert(arr.concat(arr2));
// arr.push(8);
// alert(arr);
// arr.pop();
// alert(arr);
// arr.unshift(56, 98);
// alert(arr);
// arr.shift();
// alert(arr);
// alert(arr.includes(98));
// const arr2 = arr.join();
// alert(arr);
// alert(arr2);

// const fruits1 = ["apple", "Mango", "Banana"];
// const fruits2 = ["Cherry", "Papaya", "Blueberry"];
// fruits1.push(fruits2);
// alert(fruits1);

// const tech = ["Java", "Javascript", "Sql"];
// const framework = ["React js", "Mongodb"];
// tech.push(framework);
// alert(tech.concat(framework));
// alert(tech[3]);
// alert(tech[3][1]);
// alert([...tech, ...framework]);

// const myArray = [1, 3, 5, [5, 3, 6, 2], [3, 6, [3, 2]]];
// alert(myArray.flat(Infinity));
// alert(Array.isArray("Khalid"));
// alert(Array.from("Khalid"));
// const arr1 = 567;
// const arr2 = 567;
// const arr3 = 567;
// const arr4 = [678, 789];
// alert(Array.of(arr1, arr2, arr3));

// Objects in Javascript (Object Literals)
// const mySym = Symbol("865678");
// const person = {
//   name: "Alex",
//   age: "56",
//   email: "khalid@microsoft.gi.in",
//   [mySym]: "mykye",
//   tech: "Angular",
//   exp: (x, y, z) => {
//     setTimeout(() => {
//       alert("I will login within 3 seconds");
//     }, 3000);
//     return x + y * z;
//   },
// };
// alert(person.exp(45, 87, 89));
// alert(person.name); //Must use
// alert(person["name"]); // Use rarely
// alert(person[mySym]);
// alert(typeof person[mySym]);
// person.email = "alexmorgan45@hushmail.com";
// alert(person["email"]);
// Object.freeze(person);
// person.email = "mike566@google.com";
// alert(person["email"]);
// alert(person);

// person.greet = function () {
//   alert(`Hello ${this.name}`);
// };
// person.greet();

// Object with Singleton or constructor
//const user = new Object(); // Singleton

// const user1 = {
//   userName: "Jammy",
//   password: "Qtrrwxf343#",
//   isLoggedIn: true,
// };
// // alert("user", typeof user1 === "object");

// // alert(user1);
// const user2 = {
//   userName2: "Sammy",
//   password2: "Ltrwxf343#",
//   isLoggedOut: false,
// };
// alert("user", typeof user1 === "object");

// alert(user2);

// const user3 = Object.assign({}, user1, user2);
// alert(user3);
// const userRes = { ...user1, ...user2 };
// alert(userRes);
// alert(Object.keys(user1));
// alert(Object.values(user1));
// alert(Object.entries(user1));
// alert(user1.hasOwnProperty("isLoggedIn"));

// Object Destructuting in JAvascript
// const sportsData = {
//   player: "de-cock",
//   team: "New Zealand",
//   age: 28,
//   runs: 87,
// };
// const { player: Cricketer } = sportsData;
// alert(Cricketer);

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   currentAge: 28,
// };

// let { firstName, lastName, middleName = "", currentAge: age = 18 } = person;

// alert(middleName); // ''
// alert(age); // 28
// alert(currentAge);

//Functions in Javascript
// let greet = (x) => {
//   setTimeout(() => {
//     alert(`i will be logged in ${x}  seconds`);
//   }, 3000);
// };
// greet(3);

// function greet(firstName, lastName) {
//   alert("Hello " + firstName + " " + lastName);
// }

// greet("Bill", "Gates");
// greet(100, 200);

// function employee(employ) {
//   if (!employ) {
//     alert("Please enter ur userid");
//     return;
//   }
//   return `${employ} just logged in the system`;
// }
// let loggedemploy = employee("Mustafa");
// alert(loggedemploy);

// Functions with objects and arrays in Javascript
// Rest Operator in Javascript
// function sum(...args) {
//   return ` The returned values are: ${args}`;
// }
// alert(sum(677, 987, 345));

// passing objects as an arguments in functions
// function ecomm(anyobject) {
//   alert(
//     `Username is ${anyobject.username} and Password is ${anyobject.password}`
//   );
// }
// ecomm({
//   username: "johndoe",
//   password: "PASSWORD",
// });

// Passing arrays as an arguments in Functions
// function zerodha(anyarray) {
//   alert(
//     `The Client Id is ${anyarray[0]} and the profit of Client is ${anyarray[1]}`
//   );
// }
// zerodha(["875434ZERODHA", "Rs 87568.00"]);

// Scopes in Javascript
// var c = 456; // global scope
// let a = 768;
// if (true) {
//   let a = 76;
//   const b = 56;
// var c = 234;
// c = 234;
//   alert(a);
// }
// alert(a);
// alert(b);
// alert(c);

// Scope and mini Hoisting in Javascript

// function one1() {
//   const user1 = "Alex";
//   function two2() {
//     const user2 = "Mike";
//     alert(`User outside inner function :${user1}`);
//   }
//   alert(user2);
//   two2();
// }

// one1();

// Scoping inside if else statements
// if (true) {
//   const username = "Levis";
//   if (username === "Levis") {
//     const website = " insta";
//     alert(username + website);
//   }
//   alert(website);
// }
// alert(username);

// alert(addnum(67));
// function addnum(num) {
//   return num * 78;
// } // This one will execute because its normal function

// alert(multiply(56));
// const multiply = function (num) {
//   return num * 65;
// }; // this will not execute because we cant call function here before intialization

// This keyword in Javascript // only used in objects not in functions
// const client = "Alex";
// const user = {
//   client: "Mike",
//   price: 875,
//   message: function () {
//     alert(`${this.client}, welcome to the website`);
//     alert(this);
//   },
// };
// user.message();

// function tea() {
//   alert(this);
// }
// tea();

// Arrow Functions in javascript
// Explicit return in Arrow Functions
// const tech = (name, tech) => {
//   alert(
//     `${name} is currently following the roadmap of ${tech} techonology`
//   );
// let username = "Alex";
// alert(this.username); // Will return undefined
// };
// tech("Khalid", "Frontend");

// Implicit return in Arrow Functions
// const addnums = (num1, num2) => num1 + num2;
// alert(addnums(67, 8876));

// Immediately Invoked Function Expressions (IIFE)
// (function chai(id) {
//   alert(`DB Connected with id: ${id}`);
// })(789432);
// (() => {
//   alert(`DB Disconnected`);
// })();

// Control Flow
// Conditionals (If else)
// const temperature = 79;
// if (temperature <= 35) {
//   alert("Moderate temperature");
// } else {
//   alert("Temperature is hot today");
// }

// If else with multiple conditions
//using logical operators && and ||
// let cartvalue = 4;
// let price = 5999;
// if (cartvalue >= 4 && price >= 8000) {
//   alert("Discount availed 40% with 4 items");
// } else {
//   alert("No discount available");
// }
// if (cartvalue >= 4 || price >= 8000) {
//   alert("Discount available");
// } else {
//   alert("no Discount");
// }

// Switch case in control flow
// const day = new Date().getDay();
// switch (day) {
//   case 0:
//     alert("its Sunday");
//     break;
//   case 1:
//     alert("its Monday");
//     break;
//   case 2:
//     alert("its Tuesday");
//     break;
//   case 3:
//     alert("its Wednesday");
//     break;
//   case 4:
//     alert("its Thursday");
//     break;
//   case 5:
//     alert("its Friday");
//     break;
//   default:
//     alert("weekend");
// }

// const month = "jan";
// switch (month) {
//   case "jan":
//     alert("January");
//     break;
//   case "feb":
//     alert("February");
//     break;
//   case "mar":
//     alert("March");
//     break;
//   default:
//     alert("Other months");
// }

// Truthy and Falsey values in Conditionals
// Falsy Values :> falsy, 0 ,-0, BigInt, "", null, undefined, NaN
// Truthy Values:> true, [], "0", 1, "false", "  ", {}, function(){}
// const email = "alexmorgan56@gmail.com";
// const email = "";
// const email = [];
// const email = {};
// if (email) {
//   alert("Email id is Correct");
// } else {
//   alert("Invalid Email Id");
// }
// if (email.length === 0) {
//   alert("Array is empty");
// }
// if (Object.keys(email).length === 0) {
//   alert("Empty Object");
// }

// Nullish Coalescing Operator (??): null undefined
// let val1 = 56 ?? 87;
// let val1 = null ?? 76;
// let val1 = undefined ?? 45;
// let val1 = null ?? 87 ?? 56;
// alert(val1);

// Ternary Operator
// let age = 14;
// let res = age >= 18 ? "Allowed" : "Not allowed";
// alert(res);

// For Loop in Javascript
// Iterations (For Loop)
// printing the table from 2 to 5 using for loop
// for (i = 2; i <= 5; i++) {
//   //   alert(`Number is: ${i}`);
//   alert(" ________   ");

//   for (j = 1; j <= 10; j++) {
//     console.debug(`${i} * ${j} = ` + i * j);
//   }
// }
// let myArray = ["Java", "Javascript", "Swift", "Golang", "Python"];
// for (let index = 0; index < myArray.length; index++) {
//   if (index == 2) {
//     alert("Swift is the Ultimate language");
//     // break
//     continue;
//   }
//   const element = myArray[index];
//   alert(element);
// }

// Break & Continue in Loops
// for (let i = 1; i <= 12; i++) {
//   if (i == 6) {
//     alert(`No more Code running  from Value 5`);
//     break;
//   }
//   alert(`Value is ${i} `);
// }

// While loop in Javascript
// let i = 1;
// while (i <= 24) {
//   alert(i);
//   i = i + 2;
// }

// let myArr = ["one", "two", "three", "four", "five"];
// let arr = 0;
// while (arr < myArr.length) {
//   alert(`value is ${myArr[arr]}`);
//   arr = arr + 1;
// }

// Do While loop in Javascript // At least it executes once
// let value = 2;
// do {
//   alert(`Hello`);
//   value++;
// } while (value <= 12);

// High Order Array Loops
// 1. For of loop
// const arr1 = [67, 4, 52, 5, 6, 57];
// for (const num of arr1) {
//   alert(num);
//   //   if (num === 5) {
//   //     alert("Ends here");
//   //     break;
//   //   }
// }
// alert("Loop ends");

// let str = "Welcome Here";
// for (const string of str) {
//   alert(`${string}`);
// }

// Maps in Javascript
// const map = new Map();
// map.set("Java", "Android dev");
// map.set("Javascript", "Web dev");
// map.set("Swift", "IOS dev");
// map.set("C#", "Gaming dev");
// alert(map);

// For of in map
// for ([key, value] of map) {
//   alert(key, ":", value);
// }
// for (const key in map) {
//   {
//     alert(key);
//   }
// }

// For in Loop for Objects
// let person = { name: "John Doe", age: 30, city: "New York" };
// for (let key in person) {
//   alert(`${key} : ${person[key]}`);
// }

// For in Loop for Arrays
// const cars = ["Gt", "MclaRen", "ferrari", "cruiser"];
// for (const key in cars) {
//   {
//     alert(cars[key]);
//   }
// }

// For each() loop in Javascript
// const names = ["alex", "morgan", "mike", "sam"];
// names.forEach((nval) => {
//   alert(nval);
//   alert(nval[2]);
// });

// using seperate function
// function print(item) {
//   alert(item);
// }
// names.forEach(print);

// const cars = [
//   {
//     carName: "Suzuki",
//     modelName: "Ciaz",
//   },
//   {
//     carName: "Honda",
//     modelName: "City",
//   },
//   {
//     carName: "Volkwagen",
//     modelName: "Vento",
//   },
// ];
// cars.forEach((item) => {
//   alert(`${item.carName} : ${item.modelName}`);
//   alert(item.modelName);
// });

// Filter map and reduce in Javascript
// 1. filter()
// const values = [98, 34, 12, 54, 76, 3, 5, 87, 256];
// const newNums = values.filter((num) => num > 23); // implicit return
// const newValues = values.filter((num) => {
//   return num > 40; // returns the values greater than 40
//   // num > 40; // return an empty array
// });
// alert(`${newNums} \n ${newValues}`);
// alert(newNums);
// alert(newValues);

// const books = [
//   {
//     title: "The Great Gatsby",
//     genre: "Fiction",
//     publish: 1989,
//     edition: 2009,
//   },
//   {
//     title: "Great minds",
//     genre: "Non-Fiction",
//     publish: 2015,
//     edition: 2023,
//   },
//   {
//     title: "The art of war",
//     genre: "Non-Fiction",
//     publish: 2010,
//     edition: 2020,
//   },
//   {
//     title: "Kashmir",
//     genre: "History",
//     publish: 2089,
//     edition: 2015,
//   },
//   {
//     title: "IKIGAI",
//     genre: "Science",
//     publish: 2002,
//     edition: 2019,
//   },
// ];

// const userBooks = books.filter((bookN) => {
//   // return bookN.genre === "Non-Fiction";
//   return bookN.edition >= 2015 && bookN.genre === "Non-Fiction";
//   // return bookN.edition === 2010;
// });
// alert(userBooks);

// using reverse method on map of an Array
// let myArray = [1, 2, 3, 4];

// const returnValue = myArray
//   .map((element) => {
//     return element * element;
//   })
//   .reverse();

// alert(returnValue);

// 2.map()   // Chaining in map()
// const nums = [34, 23, 76, 34, 65];
// const result = nums
//   .map((num) => num + 29000)
//   .map((num) => num * 10)
//   .map((num) => num - 2020)
//   .filter((num) => num > 288320);
// alert(`New Numbers are: ${result}`);
// alert(result);

// 3. Reduce() in Javascript

// const numbers = [45, 32, 67, 34, 98, 34];
// const result = numbers.reduce((acc, cValue) => {
//   alert(`Accumlator: ${acc}  Current value: ${cValue}`);
//   return acc + cValue;
// }, 0);
// alert(result);

// const courses = [
//   {
//     course: "Java",
//     price: 9899,
//   },
//   {
//     course: "Javascript",
//     price: 8899,
//   },
//   {
//     course: "Python",
//     price: 7899,
//   },
//   {
//     course: "Swift",
//     price: 10899,
//   },
// ];
// const totalPay = courses.reduce((acc, item) => acc + item.price, 0);
// alert(`Total Payable amount after discount is: RS ${totalPay}.00`);

// DOM in Javascript
// getting element by id
// let doc1 = document.getElementById("btn3");
// doc1.innerHTML = "Button One";
// let doc2 = document.getElementById("btn4");
// doc2.innerHTML = "Button Two";
// doc2.style.backgroundColor = "red";

// Getting element by Query Selector
// let doc3 = document.querySelector("#btn4");
// doc3.style.backgroundColor = "steelblue";

// // Getting multiple elements by query selector all
// const tempLi = document.querySelectorAll("li");
// tempLi[7].style.color = "green";

// const tempAnc = document.querySelectorAll("a");
// tempAnc[0].style.color = "orange";

// // Using forEach() to select all elements
// tempAnc.forEach((a) => {
//   a.style.color = "blue";
// });

// // Getting elements by className
// const textGs = document.getElementsByClassName("vertical-desc3");

// Since "textGs" returns a nodelist, So we have to convert it into an array first
// const textCh = Array.from(textGs);
// textCh.map((intr) => {
//   intr.style.color = "orange";
// });
// textCh.forEach((int) => {
//   int.style.backgroundColor = "grey";
//   int.innerText = "FrontEnd\nFrontEnd\nFrontEnd\nFrontEnd\n FrontEnd";
//   int.style.padding = "42px";
// });

// Creating a new element in Dom
// const parent = document.querySelector(".vertical");
// alert(parent);
// alert(parent.children);
// alert(parent.children[0].innerHTML);
// for (let i = 0; i < parent.children.length; i++) {
//   alert(parent.children[i].innerHTML);
// }
// parent.children[1].style.color = "orange";
// // alert(parent.firstElementChild);
// // alert(parent.lastElementChild);
// const select = document.querySelector(".vertical");
// // alert(select);
// // alert(select.parentElement);
// // alert(select.nextElementSibling);
// // alert("Nodes are: ", parent.childNodes);
// const heading = document.createElement("input");
// alert(heading);
// heading.setAttribute("type", "submit");
// heading.className = "heading";
// heading.style.color = "black";
// heading.style.backgroundColor = "white";
// heading.style.cursor = "pointer";
// heading.style.padding = "6px";
// heading.style.marginLeft = "38rem";
// heading.textContent = "Submit";
// document.body.appendChild(heading);

// // Edit & Remove Elements in DOM
// function addLi(Li) {
//   const li = document.createElement("li");
//   li.style.marginLeft = "6.5rem";
//   li.style.cursor = "pointer";
//   li.appendChild(document.createTextNode(Li));
//   document.querySelector(".footer-second").appendChild(li);
// }
// addLi("Chat with Us!");
// addLi("Drop your feedback");

// // Edit element
// const editLi = document.querySelector(".footer-second li:nth-child(3)");
// const newLi = document.createElement("li");
// newLi.style.marginLeft = "6.5rem";
// newLi.style.cursor = "pointer";
// newLi.textContent = "Hire me!";
// editLi.replaceWith(newLi);

// // Replace with
// const firstLi = document.querySelector(".footer-second li:first-child");
// const newFLi = document.createElement("li");
// newFLi.textContent = "My Projects";
// firstLi.replaceWith(newFLi);

// // Remove Element
// const reMove = document.querySelector(".footer-second li:nth-child(2)");
// reMove.remove();

// Events in Javascript
// document.querySelector(".navbar").addEventListener("click", (e) => {
//   alert("First div clicked");
// }, false);
// document.querySelector(".right").addEventListener("click", (e) => {
//   e.stopPropagation();
//   alert("second div clicked");
// }, false);

// document.querySelector(".navbar").addEventListener("click", (e) => {
//   // e.stopPropagation();
//   console.log(e.target.tagName);
//   if (e.target.tagName === "H1") {
//     let removeIt = e.target.parentNode;
//     removeIt.remove();
//   }
// });

// type, timestamp, preventDefault()
// target, toElement, srcElement, currentTarget
// clientX, clientY, ScreenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// Async Javascript Fundamentals
// By default the Javascript language is Synchronous language
// which means it executes code line by line and waits for each statement execution before moving on to next one

// SettimeOut
// const timer = () => {
//   setInterval(
//     setTimeout(
//       () => (document.querySelector("#btn3").innerHTML = "Timer"),
//       2000
//     ),
//     300
//   );
// };

// const demo = setTimeout(() => {
//   setInterval(
//     document.querySelector("#btn3").addEventListener("click", () => {
//       alert("Click me again");
//     }),
//     9000
//   );
// }, 200);

// const sayDate = function (str) {
//   alert(str, Date.now());
// };
// const intervalid = setInterval(sayDate, 5000, "hello");
// // clearInterval(intervalid);
// document.querySelector("#btn5").addEventListener("click", () => {
//   alert(intervalid);
// });
// document.querySelector("#btn6").addEventListener("click", () => {
//   clearInterval(intervalid);
//   alert("Interval stopped execution");
// });

// Generating random background colors on page
// const button = document.querySelector("#btn6");
// const bg = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   button.innerHTML = "#" + randomColor;
// };
// button.addEventListener("click", bg);
// bg();

// Random Color Generator with Javascript
// const randomColor = () => {
//   const hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// let intervalId;
// const startChangingColor = () => {
//   if (!intervalId) {
//     intervalId = setInterval(changeBgColor, 1000);
//   }
//   // intervalId = setInterval(changeBgColor, 1000);
//   function changeBgColor() {
//     document.body.style.backgroundColor = randomColor();
//   }
// };
// const stopChangingColor = () => {
//   clearInterval(intervalId);
// };
// document.querySelector("#btn5").addEventListener("click", startChangingColor);
// document.querySelector("#btn6").addEventListener("click", stopChangingColor);

// const timeout = setTimeout(() => {
//   alert("Hello World");
// }, 4000);
// // clearTimeout(timeout);
// document.querySelector("#btn6").addEventListener("click", () => {
//   clearTimeout(timeout);
//   alert("Timeout stopped");
// });

// // Setinterval()
// const sayDate = (str) => {
//   console.log(str, Date.now());
// };
// const intervalId = setInterval(sayDate, 1000, "Hello");
// clearInterval(intervalId);
