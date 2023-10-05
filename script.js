let board = document.querySelector(".board");
let size = document.querySelector("#size");
let reset = document.querySelector("#reset");
let rainbow = document.querySelector("#rainbow");
function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let numDivs = size ** 2;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.className = "px";
    board.insertAdjacentElement("beforeend", div);
  }
}
createBoard(32);
let pxs = document.querySelectorAll(".px");
pxs.forEach((px) => {
  px.addEventListener("mouseenter", function () {
    px.style.backgroundColor = "black";
  });
});
size.addEventListener("click", function () {
  let ask = prompt("Size:");
  if (ask < 100 && ask > 2) {
    clear();
    createBoard(ask);
  } else {
    alert("Input value between 2 and 100");
  }
});
reset.addEventListener("click", function () {
  clear();
});
function clear() {
  pxs.forEach((px) => {
    px.style.backgroundColor = "#f5f5dc";
  });
  const random = Math.floor(Math.random() * 16777215).toString(16);
}
