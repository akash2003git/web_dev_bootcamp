const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', function (e) {
    console.log(input.value);
    // the input.value updates only when it's different from previous and is
    // unfocused or u pressed enter
})

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
    //console.log(input.value);
    // updates on every key press
})