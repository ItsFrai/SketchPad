const grid = document.querySelector('.container');
const sizeSlider = document.getElementById('sizeSlider');
let columnChanger = document.querySelectorAll('.gridsquare');
let label = document.querySelector("#sliderLabel");

let x = 16;

function makeGrid(x = 16) {
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${x}, 1fr)`;

    for (let i = 0; i < x * x; i++) {
        let column = document.createElement('div');
        column.className = "gridsquare";
        column.addEventListener('mouseover', colorChanger);
        grid.appendChild(column);
    }
}

function colorChanger() { 
    this.style.backgroundColor = '#000000';
}

let reset = document.querySelector('.reset');
reset.addEventListener('click', updateGrid);

function updateGrid() {
    let columnChanger = document.querySelectorAll('.gridsquare');
    columnChanger.forEach(col => (col.style.backgroundColor = '#FFFFFF'));
}

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function setCurrentSize(newSize) {
    x = newSize;
}

function updateSizeValue(value) {
    label.innerHTML = `${value} x ${value}`;
}

function deleteGrid() { 
    grid.innerHTML = '';
}

function changeSize(value) { 
    setCurrentSize(value);
    deleteGrid();
    makeGrid(value);
}

makeGrid();
