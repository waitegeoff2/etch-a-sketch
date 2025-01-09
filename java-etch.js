const container = document.querySelector(".container");
const choosesize = document.querySelector(".sizebutton");

//create a function to make the grid

function makeRows (size) {
    removeGrid();
    
    for (i=0; i < size; i++) {

        // for each loop creates a div column

        const column = document.createElement("div");
        column.classList.add("gridcolumn"); 
        for (j = 0; j < size; j++) {
            // for each div column, loops SIZE rows and appends to the column
            const row = document.createElement("div");
            row.classList.add("gridrow");
            row.style.border = "1px solid black";
            column.appendChild(row);

            //set the size of each box so that max size of container is 500px
            
            row.style.height = (500/size) + "px";
            row.style.width = (500/size) + "px";
            
            // for each row div, adds the hover event
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            });

        }
    // appends everything to the container div once both loops are done
    
    container.appendChild(column);
}
};

makeRows(16);

//add a function to remove grid

function removeGrid () {
    //when container has a first child --> remove that child
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    } 
}

function newGrid() {
    // prompts for squares and then directs to create a newgrid
    let squaresides = prompt("How many squares per side (limit 100)?")
    
    if (squaresides > 100) {
        alert("Number cannot be higher than 100")       
    } else if (squaresides <= 100) {
        makeRows(squaresides);
    } 
}

//on click, run new grid

choosesize.addEventListener("click", newGrid);







