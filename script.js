let board = document.querySelector(".board");
let size = document.querySelector("#size");
let reset = document.querySelector("#reset");
let rainbow = document.querySelector("#rainbow");
let eraser = document.querySelector("#eraser");
let black = document.querySelector("#black");
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
  if (ask < 31 && ask > 2) {
    clear();
    createBoard(ask);
  } else {
    alert("Input value between 2 and 30"); //TODO: pixels are not stretching on whole board when number of pixels is more then 31x31
  }
});
reset.addEventListener("click", function () {
  clear();
});
function clear() {
  pxs.forEach((px) => {
    px.style.backgroundColor = "#f5f5dc";
  });
}
eraser.addEventListener("click", function () {
  pxs.forEach((px) =>
    px.addEventListener("mouseenter", function () {
      px.style.backgroundColor = "#f5f5dc";
    })
  );
});
black.addEventListener("click", function () {
  pxs.forEach((px) =>
    px.addEventListener("mouseenter", function () {
      px.style.backgroundColor = "black";
    })
  );
});
rainbow.addEventListener("click", function () {
  pxs.forEach((px) =>
    px.addEventListener("mouseenter", function () {
      px.style.backgroundColor = randomColor();
    })
  );
});
function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}
