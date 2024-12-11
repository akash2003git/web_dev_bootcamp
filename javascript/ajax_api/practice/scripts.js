/*
JSON.parse() and JSON.stringify() for JSON to string and vice versa
*/

/*
The "original" way of sending requests via JS is XMLHttpRequest 
*/

// const req = new XMLHttpRequest();
//
// req.onload = function () {
//   console.log("success!");
//   const data = JSON.parse(this.responseText);
//   console.log(data);
//   console.log(data.name);
// };
//
// req.onerror = function () {
//   console.log("error!");
//   console.log(this);
// };
//
// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

// A newer and better way is to use fetch()

// fetch("https://swapi.dev/api/people/1/")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.name + " has " + data.hair_color + " hair ");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Using async with fetch is the best way

// const loadStarWarsPeople = async () => {
//   try {
//     const response1 = await fetch("https://swapi.dev/api/people/1/");
//     const data1 = await response1.json();
//     console.log(data1.name);
//     const response2 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await response2.json();
//     console.log(data2.name);
//   } catch (error) {
//     console.log("An error occured: " + error);
//   }
// };
// loadStarWarsPeople();

// An even better way is to use the "axios" library

// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((response) => console.log(response.data.name))
//   .catch((error) => console.log(error));

// const getStarWarsPerson = async (id) => {
//   try {
//     const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(response.data.name);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getStarWarsPerson(1);
// getStarWarsPerson(5);
// getStarWarsPerson(10);

// Working with headers

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  addNewJoke();
});

const addNewJoke = async () => {
  const joke = await getDadJoke();
  const jokeLI = document.createElement("li");
  jokeLI.innerText = joke;
  jokes.append(jokeLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
  } catch (error) {
    console.log(error);
    return "No jokes avaiable! :(";
  }
};

// button.addEventListener("click", addNewJoke);
// This also works
