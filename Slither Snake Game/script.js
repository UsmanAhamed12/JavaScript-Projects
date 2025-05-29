//  Game Constants and variables

let direction = {
    x: 0,
    y: 0
};

const moveSound = new Audio("move.mp3");
const foodSound = new Audio("food.wav");
const gameoverSound = new Audio("gameover.wav");
const playArea = document.getElementById('playarea')

let speed = 5;
let lastPaintTime = 0;
let snakeArr = [{
    x: 13,
    y: 15
}];
let food = {
    x: 6,
    y: 7
};


// Game Functions

function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)

    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}


function gameEngine() {
    // part 1 updating the snake and food


    //  if you are eten the food , regenerate the food

    if ((snakeArr[0].y === food.y) && (snakeArr[0].x === food.x)){
        foodSound.play();
        snakeArr.unshift({x : snakeArr[0].x + direction.x , y : snakeArr[0].y + direction.y })

        let a = 2, b = 16;

        food = {x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random())}
    }

    //  move the snake

    for (let i = snakeArr.length; i >= 0; i--) {
        snakeArr[i + 1] = {...snakeArr[i]}
        
    }

    snakeArr[0].x += direction.x;
    snakeArr[0].y += direction.y;




    // part 2 ----> display / Render Snake and Food

    playArea.innerHTML = '';


    // display snake
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        playArea.appendChild(snakeElement);
    });


    // Display Food
    let foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')

        playArea.appendChild(foodElement)
    
}

// Main logic behind running the game
window.requestAnimationFrame(main);
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp Key Presed")
            direction.x = 0;
            direction.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown Key Presed")
            direction.x = 0;
            direction.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft Key Presed")
            direction.x = -1;
            direction.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight Key Presed")
            direction.x = 1;
            direction.y = 0;
            break;

        default:
            break;
    }
})