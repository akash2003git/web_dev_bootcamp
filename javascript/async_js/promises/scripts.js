/* A Promise is an object representing the eventual completion or failure of an
asynchronus operation */
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestCallback(
  "books.com/page1",
  function (response) {
    console.log("SUCCESS!");
    console.log(response);
    fakeRequestCallback(
      "books.com/page2",
      function (response) {
        console.log("SUCCESS AGAIN!");
        console.log(response);
        fakeRequestCallback(
          "books.com/page3",
          function (response) {
            console.log("SUCCESS FOR 3RD REQ!");
            console.log(response);
          },
          function (err) {
            console.log("ERROR FOR 3RD REQ!", err);
          },
        );
      },
      function (err) {
        console.log("ERROR FOR 2ND REQ!", err);
      },
    );
  },
  function (err) {
    console.log("ERROR!", err);
  },
);

// fakeRequestPromise('books.com/page1')
//     .then(() => {
//         console.log('SUCCESS (pg1)');
//         fakeRequestPromise('books.com/page2')
//         .then(() => {
//             console.log('SUCCESS (pg2)');
//             fakeRequestPromise('books.com/page3')
//             .then(() => {
//                 console.log('SUCCESS (pg3)');
//             })
//             .catch(() => {
//                 console.log('ERROR (pg3)');
//             });
//         })
//         .catch(() => {
//             console.log('ERROR (pg2)');
//         });
//     })
//     .catch(() => {
//         console.log("ERROR (pg1)");
//     });

// fakeRequestPromise("books.com/page1")
//   .then((data) => {
//     console.log("success (pg1)");
//     console.log(data);
//     return fakeRequestPromise("books.com/page2");
//   })
//   .then((data) => {
//     console.log("success (pg2)");
//     console.log(data);
//     return fakeRequestPromise("books.com/page3");
//   })
//   .then((data) => {
//     console.log("success (pg3)");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("a req failed");
//     console.log(err);
//   });
// much more readable than the prev ones

