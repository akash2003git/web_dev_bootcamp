const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

const btns = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

for(let btn of btns) {
    btn.addEventListener('click', colorize);
}

for(let h1 of h1s) {
    h1.addEventListener('click', colorize);
}

// In regular function callbacks for event handlers
// 'this' refers to the element that triggered the event.