/*

A newer and cleaner syntax for working with async code is using async functions
Basically a syntax 'makeup' for promises
We use two keywords: async and await

* Async functions always return a promise.
* If the function returns a value, the promise will be resolved with that value.
* If the function throws an exception, the promise will be rejected.

Basically if the async function returns something the promise is resolved and if
an error occurs (either we throw one or it occurs naturally) the promise is rejected

* await fill pause the execution of the function, waiting for a promise to be resolved.

*/

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "thepassword") return "Logged In succesfully";
  throw "Invalid Password";
};

login("akash")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

login("akash", "asdfasd")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

login("akash", "thepassword")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// async function rainbow() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("orange", 1000);
//   await delayedColorChange("yellow", 1000);
//   await delayedColorChange("green", 1000);
//   await delayedColorChange("blue", 1000);
//   await delayedColorChange("indigo", 1000);
//   await delayedColorChange("violet", 1000);
//   return "all done";
// }
//
// // rainbow().then((response) => console.log(response));
// // or antoher way to write the above is using async again
// async function printRainbow() {
//   await rainbow();
//   console.log("all done");
// }
// printRainbow();

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

async function makeThreeRequests() {
  try {
    const data1 = await fakeRequestPromise("books.com/page1");
    console.log(data1);
    const data2 = await fakeRequestPromise("books.com/page2");
    console.log(data2);
    const data3 = await fakeRequestPromise("books.com/page3");
    console.log(data3);
  } catch (error) {
    console.log(error);
  }
}
makeThreeRequests();
