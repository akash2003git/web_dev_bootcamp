// ============= Default params ================

function rollDie (numSides = 6) {
    // numSides is by default 6 if no params are passed
    return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie());

// ============== spread ==============

const numbers = [21, 45, 344, 123, -123, -23, 0, 45];
console.log(Math.max(numbers));
console.log(Math.max(...numbers));
// Math.max() expects separate arguments
console.log(...'hello');
console.log('h', 'e', 'l', 'l', 'o');

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
const allPets = ['Tom', ...cats, ...dogs, 'Jimmy'];
console.log(allPets);

const feline = { legs: 4, family: 'Felidae' };
const canine = { legs: 4, family: 'Caninae' };
const catDog = { ...feline, ...canine , isFurry: true};
console.log(catDog);
// the properties of feline get overwritten here

const dataFromForm = {
    email: "someone@gmail.com",
    password: "somepassword",
    username: "someone123",
};
const newUser = {...dataFromForm, id: 135, isAdmin: false };
console.log(newUser);

// =============== rest ===============

function sum (...nums) {
    // here nums is passed as a list
    return nums.reduce((sum, current) => sum+current);
};
console.log(sum(34, 5, 634));

function raceResults (gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`THANKS TO: ${everyoneElse}`);
}
raceResults('Tom', 'Jerry', 'John', 'Rahul', 'Shawn');


// =============== Destructing arrays ===============

const scores = [100, 99, 97, 95, 94, 90, 80];
const [gold, silver, bronze] = scores;
console.log(gold);
console.log(silver);
console.log(bronze);


// ============== Destructing objects ===============

console.log(newUser);
const { email, password, username, id } = newUser;
console.log(email);
console.log(username);
console.log(password);
console.log(id);
const { id: registrationNumber } = newUser;
console.log(registrationNumber);
const { eid: enrollmentNumber = 'N/A' } = newUser;
console.log(enrollmentNumber); // defulat to N/A if eid dosen't exist


// ================== Destructing params =============

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    }
]

const filter = movies.filter( ({ score }) => score >= 90);
console.log(filter);
// just a minor improvement, instead of say something.score we
// just do score by destructing 