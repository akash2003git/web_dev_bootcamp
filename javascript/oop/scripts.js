// ============================ Prototypes =============================

/*
In JavaScript, a prototype is an object from which other objects inherit properties and methods.
It enables prototypal inheritance, where objects share behaviors through a chain called the prototype chain.
Every object has a prototype, and if a property or method isn't found directly on the object,
JavaScript looks for it in the prototype.
__proto__ is a reference to Object.prototype. 
*/

String.prototype.yell = function () {
  return `OMG ${this.toUpperCase()}!!!`;
};
console.log("hello".yell());
// Here we  added a yell() method to the String.prototype object

// =========================== Constructor functions =========================

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function() {
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     };
//     return color;
// };
// const myColor = makeColor(23, 141, 255);
// console.log(myColor.rgb());
// console.log(myColor.hex());
// now everytime we create a new color object a new copy of those functions
// is also created. a unique copy of those functions is added to the color object

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };
//
// Color.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };
//
// Color.prototype.hex = function() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
//
// Color.prototype.rgba = function(a = 1.0) {
//     const { r, g, b, a } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }
//
// const color1 = new Color(40, 255, 40);

// here we added methods to the color prototype so they don't get created
// with each new color

// ================================ Classes ===================================

class Color {
  // this constructor will be autmatically called when create an object with 'new'
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  // these methods will be added to the prototype (Color.prototype)
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const c1 = new Color(12, 34, 51, "color1");
const c2 = new Color(124, 134, 251, "color2");
console.log(c1);
console.log(c1.hex());
console.log(c1.rgb());
console.log(c1.rgba(40));
console.log(c1.hex() === c2.hex());
console.log(c1.hex === c2.hex);

// better way to define classes

class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTUCTOR!");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWW!!";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOFFF!!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}

const meowy = new Cat("Meowy", 9, 8);
console.log(meowy.eat());
console.log(meowy.meow());
const bart = new Dog("Bart", 13);
console.log(bart.bark());
console.log(bart.eat());
