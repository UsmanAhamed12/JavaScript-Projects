//  Game Constants and variables

let direction = {
    x: 0,
    y: 0
};

const moveSound = new Audio("move.mp3");
const foodSound = new Audio("food.wav");
const gameoverSound = new Audio("gameover.wav");
const playArea = document.getElementById('playarea')

let speed = 8;
let lastPaintTime = 0;
let snakeArr = [{
    x: 13,
    y: 15
}];
let food = {
    x: 6,
    y: 7
};
let score = 0;
// let heighscore;
const score_div = document.getElementById('score');
const heighscore_div = document.getElementById('heighscore');


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

    if (colide(snakeArr)) {
        gameoverSound.play();
        direction = {
            x: 0,
            y: 0
        };
        alert("Game Over :( Press ctrl + r to refresh the game")
        snakeArr = [{
            x: 13,
            y: 15
        }];
        score = 0;
        
        score_div.innerHTML = `Score : 0`
        lastPaintTime = 0; // ⬅️ Optional: Reset time to avoid multiple alerts
        return; // ⬅️ Prevent further execution
    }

    //  if you are eten the food , regenerate the food

    if ((snakeArr[0].y === food.y) && (snakeArr[0].x === food.x)) {
        foodSound.play();
        score++;
        if(score > hiscore){
            hiscore = score;
            localStorage.setItem('hiscore', JSON.stringify(hiscore));
            heighscore_div.innerHTML = `Heigh Score : ${hiscore}`
        }
        score_div.innerHTML = `Score : ${score}`

        snakeArr.unshift({
            x: snakeArr[0].x + direction.x,
            y: snakeArr[0].y + direction.y
        })

        let a = 2,
            b = 16;

        food = {
            x: Math.round(a + (b - a) * Math.random()),
            y: Math.round(a + (b - a) * Math.random())
        }
    }

    //  move the snake

    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = {
            ...snakeArr[i]
        }
        moveSound.play();

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

function colide(snake) {
    // if you colide with your self

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }

    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }

    return false;
}

// Main logic behind running the game

let hiscore = localStorage.getItem('hiscore');

if (hiscore === "null"){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
}else{
    hiscoreval = JSON.parse(hiscore);
    heighscore_div.innerHTML = `Heigh Score : ${hiscore}`;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', (e) => {
    direction = {
        x: 0,
        y: 1
    }
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