
let origo = 1225;  // x,y -> (0,0) center


export function snakeMotion() {

    let snakeHead = document.getElementsByClassName('cell')[origo];
    snakeHead.className = 'cell snake-head';
}
function removeSnake() {
    let snakeHead = document.getElementsByClassName('cell')[origo];
    snakeHead.classList.remove("snake-head");
}


document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        removeSnake();

        origo = origo - 50;
        console.log(origo);

        snakeMotion()
    } else if (event.key === "ArrowDown") {
        removeSnake();

        origo = origo + 50;
        console.log(origo);

        snakeMotion()
    } else if (event.key === "ArrowRight") {
        removeSnake();

        origo = origo + 1;
        console.log(origo);

        snakeMotion()
    } else if (event.key === "ArrowLeft") {
        removeSnake();

        origo = origo - 1;
        console.log(origo);

        snakeMotion()
    } else {
        return 0;
    }
});

