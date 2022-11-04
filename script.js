//left and right buttons
//rectangle turns left and right when buttons clicked
//transition smooth

let left = document.querySelector('.left');
let right = document.querySelector('.right');
let squares = document.querySelectorAll('.square');

left.addEventListener('click', turnLeft);
right.addEventListener('click', turnRight);

function turnLeft(){
    squares.forEach(turnLeft => {
        turnLeft.classList.add('rotateLeft');
        turnLeft.style.transform = "rotate(-90deg)";
    })
}

function turnRight(){
    squares.forEach(turnRight => {
        turnRight.classList.add('rotateRight');
        turnRight.style.transform = "rotate(90deg)";
    })
}