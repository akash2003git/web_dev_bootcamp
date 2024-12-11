const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

const makeRandColour = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b, rgb: `rgb(${r}, ${g}, ${b})` };
};

const body = document.querySelector('body');
btn.addEventListener('click', () => {
    const { r, g, b, rgb: newColor } = makeRandColour();
    body.style.backgroundColor = newColor;
    // document.body.style..... if u don't want to make the body variable
    h1.innerHTML = newColor;
    if (r + g + b < 256) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
});