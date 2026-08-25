
export const col = 50;
export const row = 50;

export function renderGrid() {

    const grid = document.getElementsByClassName('grid5050')[0];

    for (let i = 0; i < col*row; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.tabIndex = i;
        grid.appendChild(cell);

    }
}
export function refreshGrid() {
    const grid = document.querySelector('.grid5050');
    const cells = grid.querySelectorAll('div');

    cells.forEach((cell) => {
        cell.className = 'cell';
    });
}

