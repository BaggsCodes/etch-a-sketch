let color = "black";
let click = true;

function populateBoard(size) {
  //Selecting board div
  let board = document.querySelector(".board");
  //Selecting divs (squares) in board and removing them
  let squares = board.querySelectorAll(".div");
  squares.forEach((div) => div.remove());
  //Setting size of columns and rows with user input
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // setting amount variable with 'size' from column and row, so we have a dynamic grid
  let amount = size * size;
  //for loop changing background of each div added
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    //div changes color if your mouse goes over it
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    //inserting div
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if ((input >= 2) & (input <= 100)) {
    populateBoard(input);
  } else {
    console.log("Error");
  }
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});
