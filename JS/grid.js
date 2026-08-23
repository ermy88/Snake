

export function renderGrid() {

    const grid = document.getElementsByClassName('grid5050')[0];

    for (let i = 0; i < 50*50; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);

    }
}

