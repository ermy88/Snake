import { renderGrid, refreshGrid } from "/JS/grid.js";
import {
    startGame,
    stopGame,
    removeSnake,
    eventControls,
    directionControls, 
    speedControls
} from "JS/controls.js";


document.addEventListener('DOMContentLoaded', () => {


    renderGrid();
    eventControls();
    directionControls();
    speedControls();

    const startBtn = document.getElementsByTagName('button')[0];
    const stopBtn = document.getElementsByTagName('button')[1];
    startBtn.addEventListener('click', () => {
        startGame(100);
    });
    stopBtn.addEventListener('click', () => {
        stopGame();
        refreshGrid();
    });
});
