function makeSquareGrid(numRows){
    // Generate the 16x16 grid
    cellWidth = 100.0/numRows;

    for(let i = 1; i <= numRows; i++){
    gridContainer.style.gridTemplateColumns += `${cellWidth}%`;
    gridContainer.style.gridTemplateRows += `${cellWidth}%`;
    }

    // Append a div to each cell of the grid
    for(let i = 1; i <= numRows*numRows; i++){
        var cell = document.createElement("div");
        cell.textContent = i;
        //cell.classList.add("cell");
        gridContainer.appendChild(cell);
    }
}


//// MAIN ////
const gridContainer = document.querySelector('#grid');
makeSquareGrid(16);


