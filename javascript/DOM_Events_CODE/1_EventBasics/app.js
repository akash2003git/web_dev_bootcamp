const btn = document.querySelector("#v2");

btn.onclick = function() {
    console.log("YOU CLICKED ME!");
    console.log("HOPE IT WORKED");
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!!");
}
btn.onmouseenter = scream;

document.querySelector("h1").onclick = function() {
    alert("you clicked h1");
}


const btn3 = document.querySelector("#v3");
btn3.addEventListener('click', function() {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!");
}
function shout() {
    console.log("SHOUT!");
}
const tasButton = document.querySelector("#tas");
tasButton.onclick = twist;
tasButton.onclick = shout;
// This will only print "SHOUT!" as onclick is a property and it simply gets overwritten
// Hence we should use event listener

const tasbtn2 = document.querySelector("#tas2");
tasbtn2.addEventListener('click', twist);
tasbtn2.addEventListener('click', shout);
// one additional argument u can pass is { once: true } 
// this will do so that the function will only work for the first click