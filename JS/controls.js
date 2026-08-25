import { refreshGrid } from "/JS/grid.js";

export let head = 1225;  // x,y -> (0,0) center a fej/szemek kezdőpozíciója a grid-en
export let speed = 100;
export let vel = document.getElementById('score');
let direction = 2; // 0:U, 1:D, 2:L, 3:R
let gameLoopId = 0; // setIntervalId-t kap
let pauseGame = true;





export function snakeMotion() {

    const snakeHead = document.getElementsByClassName('cell')[head];
    // const snakeBody = document.getElementsByClassName('cell')[head + 50];
    // const snakeBody2 = document.getElementsByClassName('cell')[head + 100];

    snakeHead.className = 'cell snake-head';
    // snakeBody.className = 'cell snake-body';
    // snakeBody2.className = 'cell snake-body';

    // console.log(head);
    // console.log(snakeBody);
    // console.log(snakeBody2);
}

export function removeSnake() {
    const snakeHead = document.getElementsByClassName('cell')[head];
    // const snakeBody = document.getElementsByClassName('cell')[head + 50];
    // const snakeBody2 = document.getElementsByClassName('cell')[head + 100];

    snakeHead.classList.remove("snake-head");
    // snakeBody.classList.remove("snake-body");
    // snakeBody2.classList.remove("snake-body");

}


export function startGame(gameSpeed) {
    pauseGame = false;
    if (gameLoopId == 0) {
        gameLoopId = setInterval(gameTick, gameSpeed);
    }

}
function gameTick() {

    removeSnake();
    atWall();
    snakeMotion();
}

export function togglePause() {
    if (!pauseGame) {
        pauseGame = true;
        clearInterval(gameLoopId);
        gameLoopId = 0;
    } else {
        startGame(speed);
    }
}

export function stopGame() {
    clearInterval(gameLoopId);
    gameLoopId = 0;
    head = 1225;
}

export function directionControls() {
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowUp") {
            (direction === 1) ? direction = 1 : direction = 0;  // önmagába visszafordulás blokkolása
        }
        else if (event.key === "ArrowDown") {
            (direction === 0) ? direction = 0 : direction = 1;  // önmagába visszafordulás blokkolása
        }
        else if (event.key === "ArrowLeft") {

            (direction === 3) ? direction = 3 : direction = 2;  // önmagába visszafordulás blokkolása
        }
        else if (event.key === "ArrowRight") {
            (direction === 2) ? direction = 2 : direction = 3;  // önmagába visszafordulás blokkolása
        }
    });
}

export function eventControls() {
    document.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            startGame(speed);
        }
        else if (event.key === "q" || event.key === "Q") { // END GAME
            stopGame();
            refreshGrid();
        }
        else if (event.key === "p" || event.key === "P") {
            togglePause();
        }
    });
}
export function speedControls() {

    document.addEventListener('keydown', (event) => {
        if (event.key === "+") {
            (speed <= 20) ? speed = 20 : speed -= 20;
            vel.textContent = speed / 20;
        }
        else if (event.key === "-") {
            (speed >= 100) ? speed = 100 : speed += 20;
            vel.textContent = speed / 20;
        }
    });
}

function atWall() {

    if (direction === 0) {
        (head < 50)
            ? head = head + 2450 : head -= 50;
    }
    else if (direction === 1) {
        (head < 2450)
            ? head += 50 : head -= 2450;
    }
    else if (direction === 2) {
        (head % 100 == 0 || head % 100 == 50)
            ? head += 49 : head -= 1;
    }
    else if (direction === 3) {
        (head % 100 == 49 || head % 100 == 99)
            ? head -= 49 : head += 1;
    }
}





