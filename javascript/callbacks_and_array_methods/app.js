const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
];

// ========== forEach() ===============

// function print(element) {
//   console.log(element);
// }
// numbers.forEach(print);
//
// numbers.forEach(function (element) {
//   console.log(element);
// });
//
// movies.forEach(function (movie) {
//   console.log(`${movie["title"]} - ${movie["score"]}/100`);
// });

// =========== map() ==================

// const double = numbers.map(function (num) {
//   return num * 2;
// });
// console.log(double);
//
// const titles = movies.map(function (movie) {
//   return movie.title;
// });
// console.log(titles);

// ============= Arrow Functions =============

// const add = (x, y) => {
//   return x + y;
// };
// const square = (x) => {
//   return x * x; // single parameters can be written without ()
// };
// const greet = (name) => `Hey ${name}!`; // no braces for single expressions
// const rollDie = () => Math.floor(Math.random() * 6) + 1;
//
// console.log(add(2, 3));
// console.log(square(2));
// console.log(greet("Akash"));
// console.log(rollDie());
//
// const movieList = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
// console.log(movieList);

// ================= setTimeout and setInterval =============

// setTimeout(() => console.log("HELLO"), 3000);
// //          <--------function--------->, <time(3s here)>
// // The function will run after 3 seconds of execution
// const id = setInterval(() => console.log(Math.random()), 1000);
// // This function will continously run after 1sec
// // clearInterval(id) to stop it

// ================ filter =================

// const even = numbers.filter((n) => n % 2 == 0);
// // n will be added to the array for each true callback
// console.log(even);
//
// const goodMovies = movies.filter((movie) => movie.score >= 90);
// console.log(goodMovies);
//
// const goodTitles = movies.filter((m) => m.score >= 90).map((m) => m.title);
// console.log(goodTitles);

// =============== every and some ================

// const exams = [80, 90, 88, 95, 87, 94, 92, 100];
// console.log(exams.every((score) => score >= 80));
// const exams2 = [80, 90, 88, 95, 87, 94, 92, 100];
// console.log(exams.some((score) => score <= 50));
// // .every() returns true only if ALL callbacks are true
// // .some() returns true if ANY ONE callback is true

// ================= reduce ======================

// const sum = numbers.reduce((acc, current) => acc + current);
// console.log(sum);
// // our first call acc = 1, current = 2
// // second call acc = 3, current = 3
// // third call acc = 6, current = 4 and so on till 10
// nums = [21, 245, 0, -24, -245, 2345, 1];
// const min = nums.reduce((m, n) => {
//   if (n < m) {
//     return n;
//   }
//   return m;
// });
// console.log(min);

// const masterpiece = movies.reduce((a, c) => {
//   if (c.score > a.score) {
//     return c;
//   }
//   return a;
// });
// console.log(masterpiece);

// const evens = [2, 4, 6, 9, 10];
// const sum_even = evens.reduce((sum, num) => sum + num, 100);
// console.log(sum_even);
// Here the accumulator(sum) will start as 100 and current(num) will be 2

// =========== arrow functions and 'this' =============

// const person = {
//     firstName: "Akash",
//     lastName: "Tayade",
//     fullName: function () {
//         // don't use arrow function here
//         // here this refers to the person object
//         return `${this.firstName} ${this.lastName}`;
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             // use arrow function here
//             // here this refers to the person object
//             console.log(this.fullName());
//         }, 3000);
//     }
// }
// the keyword 'this' behaves differently when using arrow functions
// when used inside for defining a method the 'this' keyword refers
// to the window object instead of the actual object the method is a
// member of

// inside arrow fucntion 'this' keyword refers to object to it's surroudings
// (lexical scope). in setTimeout() when we use arrow function it took the value
// from the function it was nested inside
// if we didn't use arrow function in setTimeout 'this' would refer to the
// window object and won't work as the window object does not have a method
// called fullname

// console.log(person.shoutName());
