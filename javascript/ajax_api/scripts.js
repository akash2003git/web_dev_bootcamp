// ****************** Old way of getting requests ********************
// const req = new XMLHttpRequest();
//
// req.onload = function() {
//     console.log("IT LOADED!");
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     console.log(data.name, 'has a height of', data.height);
// };
//
// req.onerror = function() {
//     console.log("ERROR!!");
//     console.log(this);
// };
//
// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

// ************ Better way using fetch *******************

// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("RESOLVED", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2");
//     })
//     .then(res => {
//         console.log("RESOLVED SECOND REQ", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log("ERROR!", e);
//     });

// fetch returns a promise, this promise may be resolved or rejected
// use then to log the resolved promise and using .json on it
// bcoz the response was incomplete or we can say premature

// We can make this even better using an async function

// const loadStarWarsPeople = async () => {
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json();
//         console.log(data.name);
//         const res2 = await fetch("https://swapi.dev/api/people/2/");
//         const data2 = await res2.json();
//         console.log(data2.name);
//     } catch (e) {
//         console.log("ERROR!", e);
//     }
// }
// loadStarWarsPeople();

// another way of getting http req is using axios library

// axios.get("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("RESPONSE: ", res); // this object has the json data already parsed
//     })
//     .catch(res => {
//         console.log("ERROR! ", err);
//     })

// const getStarWarsPeople = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data.name);
//     } catch (e) {
//         console.log("ERROR!", e);
//     }
// }
// getStarWarsPeople(1);
// getStarWarsPeople(2);
// getStarWarsPeople(3);

// ******setting headers with axios********

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("li");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No jokes available! Sorry :(";
  }
};

button.addEventListener("click", addNewJoke);

