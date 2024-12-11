// const fakeCallbackRequest = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 3000) {
//       failure("Connection Timeout :(");
//     } else {
//       success("Here is your fake data from " + url);
//     }
//   }, delay);
// };
//
// fakeCallbackRequest(
//   "books.com/page1",
//   function callbackSuccess(response) {
//     console.log(response);
//     fakeCallbackRequest(
//       "books.com/page2",
//       function callbackSuccess(response) {
//         console.log(response);
//         fakeCallbackRequest(
//           "books.com/page3",
//           function callbackSuccess(response) {
//             console.log(response);
//           },
//           function callbackFail(error) {
//             console.log(error);
//           },
//         );
//       },
//       function callbackFail(error) {
//         console.log(error);
//       },
//     );
//   },
//   function callbackFail(error) {
//     console.log(error);
//   },
// );

/* As we can see here the code is super nested 
 There's multiple callbacks, u have to take care of 
 indentation, etc. This is not a good apporach as 
 things might get overwhelming */
/* Using promises we can avoid having such bad nested
 code for async tasks */

// ===================================================================

/* A promise is an object representing the eventual completion or failure
of an asynchronus operation. 
A promise is a returned object to which you attach callbacks, instead of passing
callbacks into a function. */

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

/* 
 * We use a Promise constructor to construct the promise object
 * In the promise constructor the first argument is a single function often called the 
   executor function that receives two arguments, resolve and reject
 * We use .then() and .resolve() methods of the promise object to handle the
   resolve and reject state respectively.
 * .then() and .resolve take callback function that will be called when the promise is 
   either resolved or rejected
*/

// fakeRequestPromise("books.com/page1")
//   .then((response) => {
//     console.log(response);
//     fakeRequestPromise("books.com/page2")
//       .then((response) => {
//         console.log(response);
//         fakeRequestPromise("books.com/page3")
//           .then((response) => {
//             console.log(response);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

fakeRequestPromise("books.com/page1")
  .then((response) => {
    console.log(response);
    return fakeRequestPromise("books.com/page2");
  })
  .then((response) => {
    console.log(response);
    return fakeRequestPromise("books.com/page3");
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };
//
// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000));
