// const multiply = (x, y) => x * y;
// const square = (x) => multiply(x, x);
// const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);
// isRightTriangle(3, 4, 5);
/* Callbacks: here isRightTriangle calls square, square calls
multiply. In the stack multiply gets popped first then square
this is done 3 times. */

// console.log("sending a req to server");
// setTimeout(() => {
//   console.log("Here is your data");
// }, 3000);
// console.log("task done");
/* Js is single threaded meaning it can only do one thing at a time.
But here the code just dosen't stop for 3 seconds. the 3rd line is executed
and after 3 seconds u get the timeout line. This happens because it delegates
the task of counting those 3 seconds to the browser and goes on running the 
rest of the code. After 3 seconds the browser reminds js of executing the function */

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};
delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("green", 1000, () => {});
    });
  });
});
/* Having nested code like this is bad 
This is also reffered to as a callback hell
To avoid this we use promises and async functions*/
