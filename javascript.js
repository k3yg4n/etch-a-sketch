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
    e.target.classList.add('coloredCell');
}

function clearGrid(e){
    let cells = document.querySelectorAll(".cell");

    cells.forEach(function(cell){
        cell.classList.remove("coloredCell")
    });

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
const gridContainer = document.querySelector('#grid');

clearButton.addEventListener('click',clearGrid);

let numRows = 16;

makeSquareGrid(numRows);


