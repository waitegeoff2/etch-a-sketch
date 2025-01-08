const container = document.querySelector(".container");
const choosesize = document.querySelector(".sizebutton");



//really just creating the divs in HTML and flexing them
// create a container to hold all
// create 16 divs within container which are columns, flex the container
// within each column, create 16 divs, flex each column 

// TRY THIS A DIFFERENT WAY

// makeRow with 16
// run function 16 times
// flex that

// function makeRow () {
//     for (i=0; i < 16; i++) {       
//         const row = document.createElement("div");
//         row.classList.add("gridrow");
//         container.appendChild(row);
//         row.textContent = "i";
        
//     }
// };

function makeRows (size) {
    let screen = document.querySelector(".screen");
    for (i=0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("gridcolumn");
        for (j = 0; j < size; j++) {
            const row = document.createElement("div");
            row.classList.add("gridrow");
            row.style.border = "1px solid black";
            column.appendChild(row);
            
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = "grey";
            });

        }
    screen.appendChild(column);
}
};

makeRows(16);

choosesize.addEventListener("click", () => {
    let squaresides = prompt("How many squares per side (limit 100)?")
    
    if (squaresides >= 100) {
        makeRows(100);        
    } else if (squaresides <= 100) {
        makeRows(squaresides);
    }
})





// event listener for when mouse enters each gridrow div (MOUSE HOVER)

// row.addEventListener("hover", ) {
// turns black
// } ???

// CREATE INPUT (https://www.w3schools.com/html/html_forms.asp) for people to add "size" variable and pass that through
// makerows function. Check out RPS for example

// scissors.addEventListener("click", () => {
//     playRound("scissors", "");
//     });

