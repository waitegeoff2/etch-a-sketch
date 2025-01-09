const container = document.querySelector(".container");
const choosesize = document.querySelector(".sizebutton");
const body = document.querySelector("body");



//really just creating the divs in HTML and flexing them
// create a container to hold all
// create 16 divs within container which are columns, flex the container
// within each column, create 16 divs, flex each column 

//TRY REWRITING
//CONTAINER - append n divs SIZE IT (FLEX DISPLAY)
//append n rows to the divs SIZE IT

// <container>
// <columns> FLEXING THESE
//  <rows> these are below the columns so just go down


function makeRows (size) {

    container.innerHTML = "";
    
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

            //set the size of each div
            row.style.height = (500/size) + "px";
            row.style.width = (500/size) + "px";
            
            // for each row div, adds the hover event
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = "grey";
            });

        }
    // appends everything to the container div once both loops are done
    container.appendChild(column);
}
};

makeRows(16);

function newGrid() {
    let squaresides = prompt("How many squares per side (limit 100)?")
    
    if (squaresides > 100) {
        alert("Number cannot be higher than 100")       
    } else if (squaresides <= 100) {
        makeRows(squaresides);
    } 
}

// choosesize.addEventListener("click", () => {
//     // delete the old container (ABOVE) and start a fresh one
    
    
//     let squaresides = prompt("How many squares per side (limit 100)?")
    
//     if (squaresides > 100) {
//         alert("Number cannot be higher than 100")       
//     } else if (squaresides <= 100) {
//         makeRows(squaresides);
//     }
// })

choosesize.addEventListener("click", newGrid);







