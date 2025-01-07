const container = document.querySelector(".container");

function makeGrid (size) {
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const row1 = document.createElement("div");
            container.appendChild(row1);
            row1.textContent = '${i},${j}';
        }
    }
}

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
    for (i=0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("gridcolumn");
        for (j = 0; j < size; j++) {
            const row = document.createElement("div");
            row.classList.add("gridrow");
            row.style.border = "1px solid black";
            column.appendChild(row);
        }
    container.appendChild(column);
}
};

// event listener for when mouse enters each gridrow div (MOUSE HOVER)

makeRows(16);

