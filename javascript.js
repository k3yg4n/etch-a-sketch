function makeSquareGrid(numRows){
    // Generate the 16x16 grid
    cellWidth = 100.0/numRows;

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
}


//// MAIN ////
const clearButton = document.querySelector('#clearBtn');
const gridContainer = document.querySelector('#grid');

clearButton.addEventListener('click',clearGrid);

makeSquareGrid(16);


