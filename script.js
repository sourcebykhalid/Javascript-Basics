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
// console.log(username);
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
//     console.log(arr);
//   }
// };
// isPalindrome(456);

// For Loop
// let n = prompt("Enter the value of n");
// let sum = 0;
// for (let i = 1; i < 20; i++) {
//   console.log("Number is: " + i + 808);
//   sum *= i;
// }
// console.log(sum);

// For in Loop
// let marks = {
//   alex: 23,
//   mike: 65,
//   jean: 76,
//   rick: 98,
// };
// for (let m in marks) {
//   console.log(`Marks of  ${m} are  ${marks[m]}`);
// }

// For of loop
// const names = ["Apple", "Microsoft", "Chat-Gpt", "Atlassian"];
// for (let a of names[1]) {
//   console.log(a);
// }

// While Loops in JS
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Do while Loop.  This loop executes at least once.
// let i = 0;
// do {
//   console.log(i);
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
// console.log(result);
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
//     console.log("wifi is connected Again");
//   }, 3000);
// }
// console.log("wifi disconnected");
// wifi();

// shorthand for arrow functions in Javascript
// const result = (num) => num * num;
// console.log(result(45));

// Callback Functions in Javascript

// function myDisplayer(some) {
//   console.log("done");
// }
// function myCalculator(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// const sum = myCalculator(3465, 578);
// myDisplayer(sum);
// console.log("hh");

// const model = (name, year) => {
//   console.log(`The name of this car is ${name}`);
//   year();
// };
// const year = (id) => {
//   console.log(`The name of this car is ${id} and its from year ${year}`);
// };
// year(2017);
// model("Mclarren");

// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Loaded Script with SRC: " + src);
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
// console.log(day);
// let day = "Thursday";

// switch (day) {
//   case "Monday":
//     console.log(`on ${day} there is a standup meet in office`);
//     break;
//   case "Tuesday":
//     console.log(`on ${day} you have to finish the pending task`);
//     break;
//   case "Wednesday":
//     console.log(`on ${day} you have to push the code to CLI`);
//     break;
//   case "Thursday":
//     console.log(`on ${day} you have a one on one meet with TL`);
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
//     console.log("I own a lizard");
//     break;
//   case pets[1]:
//     console.log("I own a dog");
//     break;
//   case pets[2]:
//     console.log("I own a cat");
//     break;
//   case pets[3]:
//     console.log("I own a snake");
//     break;
//   case pets[4]:
//     console.log("I own a parrot");
//     break;
//   default:
//     console.log("I don't own a pet");
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
//       console.log(
//         `The name of Candidate is ${this.name} \n The role is ${this.role}`
//       );
//     }, 1000);
//   },
// };
// obj.showF();

// let result = (num1, num2) => ((num1 + num2) * num1) / num2;
// let res = result(345, 234);
// console.log(res);

// Fill & Filter Array methods in Javasript
// var arr = [4, 2, 6, 8, 3, 2, 63, 6, 35];
// console.log(arr.concat(34));
// console.log(arr.fill(56, 3, 5));
// In Array fill method the Start range is inclusive while the end range is exclusive

// console.log(arr.filter(6, 8, 3));
// var result = arr.filter((num1) => num1 != 4);
// console.log(result);

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
// console.log(person.firstName);
// console.log(person.getCourseCount());
// person.buyCourse("React JS");
// person.buyCourse("Angular");
// person.buyCourse("DSA");
// console.log(person.getCourseCount());
// person.firstName = "Alex";
// console.log(person.getCourseCount());

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
// console.log(course);
// const arrow = (count) => {
//   for (let i = 0; i < count; i++) console.log("Hello");
// };
// arrow(5);

// Callback Functions in Javascript
// const calculus = (a, b, operand) => {
//   return operand(a, b);
// };
// const result = calculus(34, 76, function (num1, num2) {
//   return num1 * num2;
// });
// console.log(result);
// const subtr = (a, b) => a - b;
// const subRes = calculus(45, 78, subtr);
// console.log(subRes);

// function mult(a, b) {
//   return a * b;
// }
// const mulRes = calculus(34, 23, mult);
// console.log(mulRes);

// Find() method in JAvascript
// Find() methods returns the value of first element that matches the condition
// const arr = [4, 5, 1, 46, 25, 6];
// const neg = (num) => {
//   return num > 10;
// };
// const result = arr.find(neg);
// // const result = arr.findIndex(neg);
// console.log(result);

// Foreach() method in Javascript
// For each loop is used to iterate over an array and perform some action on every item present inside
// arr.forEach((num, i) => {
//   console.log("array num", num, i);
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
//   console.log("Here is the Cheeze", cheeze);
//   return bakePizza(pizza);
// });
// async function orderPizza() {
//   const cheeze = await getCheese();
//   const dough = await makeDough(cheeze);
//   const pizza = await bakePizza(dough);
//   console.log("Here is the Pizza", pizza);
// }
// orderPizza();

// Ques1
// function fruit() {
//   console.log(name);
//   console.log(price);

//   var name = "mango";
//   let price = 45;
// }
// fruit();

// Ques2
// let divideByTwo = (number) => {
//   return number / 2;
// };
// let res = divideByTwo(543);
// console.log(res);

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
//     console.log("Uppercase:", uppercaseString);
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
// console.log(booleanIsLoggedIn);

// let str1 = "Mustafa";
// let str2 = "Khalid";
// let str3 = str1 + str2;
// console.log(str3);

// const id = "6736";
// const anotherId = "6736";
// console.log(id === anotherId);

// const arr = ["df", "er"];
// console.log(typeof arr);

// const func = function () {
//   console.log("Hello");
// };
// func();
// console.log(typeof func);

// Heap memory(Non-Primitive) and Stack memory(Primitive) in JS

// Strings and String methods in JAvascript
// let name1 = "Alex";
// let name2 = "Morgan";
// console.log(name1 + " " + name2);
// console.log(`${name1.toLocaleUpperCase()}  ${name2.toUpperCase()}`);
// console.log(`${name1.toUpperCase()}  ${name2.toUpperCase()}`);
// const str = new String("Good Morni");
// console.log(str);

// Numbers and Maths in Javascript
// const num = 64363.4325678;
// console.log(num.toString());
// console.log(typeof num);
// // const numb = new Number(65466);
// console.log(num);
// console.log(num.toFixed(2));
// console.log(num.toPrecision(5));
// const hundreds = 10000000000;
// console.log(hundreds.toLocaleString("en-US"));

// Maths in Javascript
// console.log(Math.PI);
// console.log(Math.abs(-567));
// console.log(Math.round(4566.4433));
// console.log(Math.floor(45.67));
// console.log(Math.ceil(45.12));
// console.log(Math.min(45, 24, 75, 8, 4));
// console.log(Math.max(53, 6, 2, 5, 3, 5));
// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 45;
// const max = 98;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Date  and Time in JAvascript
// const d = new Date();
// console.log(d);
// console.log(d.toString());
// console.log(d.toLocaleString());
// console.log(d.toDateString());
// console.log(typeof d);
// let myDate = new Date(2023, 6, 5, 3, 55);
// console.log(myDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// Array in Javascript
// const arr = [1, true, "Hello", null];
// const arr2 = ["ddf", "wshgsh"];
// console.log(arr.concat(arr2));
// arr.push(8);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(56, 98);
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.includes(98));
// const arr2 = arr.join();
// console.log(arr);
// console.log(arr2);

// const fruits1 = ["apple", "Mango", "Banana"];
// const fruits2 = ["Cherry", "Papaya", "Blueberry"];
// fruits1.push(fruits2);
// console.log(fruits1);

// const tech = ["Java", "Javascript", "Sql"];
// const framework = ["React js", "Mongodb"];
// tech.push(framework);
// console.log(tech.concat(framework));
// console.log(tech[3]);
// console.log(tech[3][1]);
// console.log([...tech, ...framework]);

// const myArray = [1, 3, 5, [5, 3, 6, 2], [3, 6, [3, 2]]];
// console.log(myArray.flat(Infinity));
// console.log(Array.isArray("Khalid"));
// console.log(Array.from("Khalid"));
// const arr1 = 567;
// const arr2 = 567;
// const arr3 = 567;
// const arr4 = [678, 789];
// console.log(Array.of(arr1, arr2, arr3));

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
//       console.log("I will login within 3 seconds");
//     }, 3000);
//     return x + y * z;
//   },
// };
// console.log(person.exp(45, 87, 89));
// console.log(person.name); //Must use
// console.log(person["name"]); // Use rarely
// console.log(person[mySym]);
// console.log(typeof person[mySym]);
// person.email = "alexmorgan45@hushmail.com";
// console.log(person["email"]);
// Object.freeze(person);
// person.email = "mike566@google.com";
// console.log(person["email"]);
// console.log(person);

// person.greet = function () {
//   console.log(`Hello ${this.name}`);
// };
// person.greet();

// Object with Singleton or constructor
//const user = new Object(); // Singleton

// const user1 = {
//   userName: "Jammy",
//   password: "Qtrrwxf343#",
//   isLoggedIn: true,
// };
// // console.log("user", typeof user1 === "object");

// // console.log(user1);
// const user2 = {
//   userName2: "Sammy",
//   password2: "Ltrwxf343#",
//   isLoggedOut: false,
// };
// console.log("user", typeof user1 === "object");

// console.log(user2);

// const user3 = Object.assign({}, user1, user2);
// console.log(user3);
// const userRes = { ...user1, ...user2 };
// console.log(userRes);
// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1));
// console.log(user1.hasOwnProperty("isLoggedIn"));

// Object Destructuting in JAvascript
// const sportsData = {
//   player: "de-cock",
//   team: "New Zealand",
//   age: 28,
//   runs: 87,
// };
// const { player: Cricketer } = sportsData;
// console.log(Cricketer);

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   currentAge: 28,
// };

// let { firstName, lastName, middleName = "", currentAge: age = 18 } = person;

// console.log(middleName); // ''
// console.log(age); // 28
// console.log(currentAge);

//Functions in Javascript
// let greet = (x) => {
//   setTimeout(() => {
//     console.log(`i will be logged in ${x}  seconds`);
//   }, 3000);
// };
// greet(3);

// function greet(firstName, lastName) {
//   console.log("Hello " + firstName + " " + lastName);
// }

// greet("Bill", "Gates");
// greet(100, 200);

// function employee(employ) {
//   if (!employ) {
//     console.log("Please enter ur userid");
//     return;
//   }
//   return `${employ} just logged in the system`;
// }
// let loggedemploy = employee("Mustafa");
// console.log(loggedemploy);

// Functions with objects and arrays in Javascript
// Rest Operator in Javascript
// function sum(...args) {
//   return ` The returned values are: ${args}`;
// }
// console.log(sum(677, 987, 345));

// passing objects as an arguments in functions
// function ecomm(anyobject) {
//   console.log(
//     `Username is ${anyobject.username} and Password is ${anyobject.password}`
//   );
// }
// ecomm({
//   username: "johndoe",
//   password: "PASSWORD",
// });

// Passing arrays as an arguments in Functions
// function zerodha(anyarray) {
//   console.log(
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
//   console.log(a);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Scope and mini Hoisting in Javascript

// function one1() {
//   const user1 = "Alex";
//   function two2() {
//     const user2 = "Mike";
//     console.log(`User outside inner function :${user1}`);
//   }
//   console.log(user2);
//   two2();
// }

// one1();

// Scoping inside if else statements
// if (true) {
//   const username = "Levis";
//   if (username === "Levis") {
//     const website = " insta";
//     console.log(username + website);
//   }
//   console.log(website);
// }
// console.log(username);

// console.log(addnum(67));
// function addnum(num) {
//   return num * 78;
// } // This one will execute because its normal function

// console.log(multiply(56));
// const multiply = function (num) {
//   return num * 65;
// }; // this will not execute because we cant call function here before intialization

// This keyword in Javascript // only used in objects not in functions
// const client = "Alex";
// const user = {
//   client: "Mike",
//   price: 875,
//   message: function () {
//     console.log(`${this.client}, welcome to the website`);
//     console.log(this);
//   },
// };
// user.message();

function tea() {
  console.log(this);
}
tea();
