function makeSquareGrid(numRows){
    cellWidth = 100.0/numRows;

    // Reset the number of rows and columns
    gridContainer.style.gridTemplateColumns = "";
    gridContainer.style.gridTemplateRows ="";

    // Generate the 16x16 grid
    for(let i = 1; i <= numRows; i++){
    gridContainer.style.gridTemplateColumns += `${cellWidth}%`;
    gridContainer.style.gridTemplateRows += `${cellWidth}%`;
    }

    // Append a div to each cell of the grid
    for(let i = 1; i <= numRows*numRows; i++){
        let cell = document.createElement("div");
        cell.textContent = i;
        cell.classList.add("cell");
        
        cell.addEventListener('mouseover',colorCell);

        gridContainer.appendChild(cell);
    }
}

function colorCell(e){
    if(isRainbow === true){
        randomizeColor();
    } if (isGradient == true && currentOpacity < 1){
        e.target.style.opacity = currentOpacity;
        currentOpacity = String(Number(currentOpacity) +0.1)
    }
    e.target.style.background = currentColor;
}

function randomizeColor(){
    // Updates currentColor variable to random value.
    let letters = '0123456789ABCDEF';
    currentColor = '#';
    for(let i=0; i < 6; i++){
        currentColor += letters[Math.floor(Math.random() * 16)];
    }
}

function clearGrid(){
    let cells = document.querySelectorAll(".cell");
    
    cells.forEach(function(cell){
        cell.style.background = "";
    });
}

function newGrid(){
    let cells = document.querySelectorAll(".cell");
    deleteCells(cells);

    do{
        numRows = window.prompt("Grid has been cleared. Please enter the desired number of rows in the new grid (between 1 and 100 inclusive):");
    } while(numRows > 100 || numRows <= 0);

    makeSquareGrid(numRows);
}

function deleteCells(cells){
    cells.forEach(function(cell){
        gridContainer.removeChild(cell);   
    });
}


//// MAIN ////
const clearButton = document.querySelector('#clearBtn');
const newButton = document.querySelector('#newBtn');
const rainbowButton = document.querySelector('#rainbowBtn')
const gradientButton = document.querySelector('#gradientBtn')
const normalButton = document.querySelector('#normalBtn')
const gridContainer = document.querySelector('#grid');

let isRainbow = false;
let isGradient = false;
const startingColor = `rgb(144, 189, 248)`
let currentOpacity = '';
let currentColor = startingColor;

clearButton.addEventListener('click',clearGrid);

newButton.addEventListener('click',newGrid);

normalButton.addEventListener('click', function(){
    isRainbow = false;
    isGradient = false;
    currentColor = startingColor;
})

rainbowButton.addEventListener('click', function(){
    isRainbow = true;
});

gradientButton.addEventListener('click',function(){
     isGradient = true;
     currentOpacity = '0.1';
});


let numRows = 16;

makeSquareGrid(numRows);


