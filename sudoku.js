var exampleValues = [
  [0, 0, 0, 6, 8, 0, 1, 9, 0],
  [2, 6, 0, 0, 7, 0, 0, 0, 4],
  [7, 0, 1, 0, 9, 0, 5, 0, 0],
  [8, 2, 0, 0, 0, 4, 0, 5, 0],
  [1, 0, 0, 6, 0, 2, 0, 0, 3],
  [0, 4, 0, 9, 0, 0, 0, 2, 8],
  [0, 0, 9, 0, 4, 0, 7, 0, 3],
  [3, 0, 0, 0, 5, 0, 0, 1, 8],
  [0, 7, 4, 0, 3, 6, 0, 0, 0],
];

var populateBoard = function (values) {
  const chunks = Array.from(document.querySelectorAll(".chunk"));
  for (let i = 0; i < values.length; i++) {
    let j = 0;
    while (j < values[i].length) {
      const entry = document.createElement("div");
      entry.classList.add("entry");
      values[i][j] && entry.classList.add("initial");
      entry.id = `${i}${j}`;
      entry.innerHTML = `${values[i][j] ? values[i][j] : ""}`;
      chunks[i].appendChild(entry);
      j++;
    }
  }
};

var checkChunk = function () {};

var checkRow = function () {};

var checkColumn = function () {};

var toggleSelected = function () {
  entries.forEach((e) => {
    if (e.classList.contains("selected")) {
      e.classList.remove("selected");
    }
  });
  !this.classList.contains("initial") && this.classList.add("selected");
};

var inputSelected = function (e) {
  let selected = document.querySelector(".selected");
  if (selected) {
    if (e.keyCode >= 49 && e.keyCode <= 57) {
      selected.innerHTML = e.key;
    } else {
      selected.innerHTML = "";
    }
  }
};

populateBoard(exampleValues);

const entries = document.querySelectorAll(".entry");
entries.forEach((e) => e.addEventListener("click", toggleSelected));
document.addEventListener("keydown", inputSelected);
