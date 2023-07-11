const grid = document.querySelector('.container');
const sizeSlider = document.getElementById('sizeSlider');
let columnChanger = document.querySelectorAll('.gridsquare');
let label = document.querySelector("#sliderLabel");

let black = document.querySelector(".black")
let erase = document.querySelector(".erase")
let rainbow = document.querySelector(".rainbow")

let x = 16;

let currentMode = 'black';

black.addEventListener('click', () => { 
    currentMode = 'black';
});

erase.addEventListener('click', () => { 
    currentMode = 'erase';
});

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

rainbow.addEventListener('click', () => {
    currentMode = 'rainbow';
    });


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
        if (currentMode === 'black') {
            this.style.backgroundColor = '#000000'; 
        } else if (currentMode === 'erase') {
            this.style.backgroundColor = '#FFFFFF'; 
        } else if (currentMode === 'rainbow') {
            this.style.backgroundColor = getRandomColor();
        }
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
