import { renderGrid, refreshGrid } from "/JS/grid.js";
import {
    startGame,
    stopGame,
    removeSnake,
    eventControls,
    directionControls
} from "/JS/controls.js";


document.addEventListener('DOMContentLoaded', () => {


    renderGrid();

    const startBtn = document.getElementsByTagName('button')[0];
    const stopBtn = document.getElementsByTagName('button')[1];
    startBtn.addEventListener('click', () => {
        eventControls();
        directionControls();
        startGame();
    });
    stopBtn.addEventListener('click', () => {
        // removeSnake();
        stopGame();
        refreshGrid();
    });
});
