document.querySelector('button').addEventListener('click', function (evt) {
    // here we just named the event object that is automatically passed as "evt"
    console.log(evt);
})

const input = document.querySelector('input');

// input.addEventListener('keydown', function() {
//     console.log("KEYDOWN");
// });
// input.addEventListener('keyup', function() {
//     console.log("KEYUP");
// });


input.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.key);
    console.log(e.code);
});


window.addEventListener('keydown', function(e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        default: 
            console.log("IGNORED!")
            break;
    }
});