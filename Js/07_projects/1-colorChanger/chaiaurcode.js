// method 1

// const grey = document.querySelector("#grey");
// const white = document.querySelector("#white");
// const blue = document.querySelector("#blue");
// const yellow = document.querySelector("#yellow");

// grey.addEventListener('click', function (e) {
//     //console.log("grey clicked");
//     document.body.style.backgroundColor = "grey";
// })

// white.addEventListener('click', function (e) {
//     //console.log("grey clicked");
//     document.body.style.backgroundColor = "white";
// })

// blue.addEventListener('click', function (e) {
//     //console.log("grey clicked");
//     document.body.style.backgroundColor = "blue";
// })

// yellow.addEventListener('click', function (e) {
//     //console.log("grey clicked");
//     document.body.style.backgroundColor = "yellow";
// })

//=================================================

// method 2
const buttons = document.querySelectorAll('.button');
//console.log(button);
const body = document.querySelector('body');

buttons.forEach(function (btn) {
    console.log(btn);

    btn.addEventListener('click', function (e) {
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            default:
                body.style.backgroundColor = 'white';
        }

    })
})