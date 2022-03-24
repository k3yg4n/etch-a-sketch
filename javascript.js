

//// MAIN ////
const gridyContainer = document.querySelector('#gridy');
gridyContainer.style.height = "100%";
gridyContainer.style.width = "100%";

for(let i = 1; i <= 16; i++){
    var cell = document.createElement("div");
    
    cell.textContent =`cell ${i}`;
    cell.style.height = "50%";
    cell.style.width = "50%";
    
    //cell.classList.add("cell");
    gridyContainer.appendChild(cell);
}