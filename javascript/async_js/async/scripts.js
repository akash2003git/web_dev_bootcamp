// async keyword automatically returns a promise object 
// that promise is either resolved or rejected depending on what's going on inside of it
// if we return a value the promise will be resolved with that value
// if we throw an error the promise will be rejected with the error value
// await keyword can only be used inside an async function
// it will pause the execution of the function, waiting for a promise to be resolved.

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// }
// 
// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return "DONE"
// };
// // rainbow().then(() => "end of rainbow");
// async function printRainbow() {
//     await rainbow();
//     console.log("END OF RAINBOW!");
// }

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay);
    });
};

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log('CAUGHT AN ERROR!');
        console.log('error is: ', e);
    }
};
makeTwoRequests();