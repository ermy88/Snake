import {
    head,
    vel,
    speed
} from "./controls.js"


const col = 50;
const row = 50;

export function renderGrid() {
    const grid = document.getElementsByClassName('grid5050')[0];
    vel.textContent = speed;


    for (let i = 0; i < col * row; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.tabIndex = i;
        grid.appendChild(cell);
    }
}
export function refreshGrid() {
    const grid = document.querySelector('.grid5050');
    const cells = grid.querySelectorAll('div');
    const snakeHead = document.getElementsByClassName('cell')[head];
    cells.forEach((cell) => {
        cell.className = 'cell';
    });
    snakeHead.className = 'cell snake-head';
}

