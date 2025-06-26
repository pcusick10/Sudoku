var exampleValues = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const chunks = Array.from(document.querySelectorAll(".chunk"));

var coordToChunk = function (row, col) {
  return chunks[Math.floor(row / 3) * 3 + Math.floor(col / 3)];
};

var areDuplicates = function (arr) {
  let acc = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    }
    if (acc.includes(arr[i])) {
      return true;
    } else {
      acc.push(arr[i]);
    }
  }
  return false;
};

var populateBoard = function (values) {
  for (let i = 0; i < values.length; i++) {
    let j = 0;
    while (j < values[i].length) {
      const entry = document.createElement("div");
      entry.classList.add("entry");
      values[i][j] && entry.classList.add("initial");
      entry.id = `${i}${j}`;
      entry.innerHTML = `${values[i][j] ? values[i][j] : ""}`;
      coordToChunk(i, j).appendChild(entry);
      j++;
    }
  }
};

var checkBoard = function () {
  const entries = Array.from(document.querySelectorAll(".entry"));

  entries.forEach((e) => {
    let [row, col] = e.id
    let chunk = coordToChunk(row, col);

    if (areChunkDups(chunk) || areRowDups(row) || areColumnDups(col)) {
      !e.classList.contains("initial") && e.classList.add("incorrect")
    } else {
      e.classList.contains("incorrect") && e.classList.remove("incorrect")
    }
  })
};

var areChunkDups = function (chunk) {
  const entries = chunk.children;
  let entryArr = [];
  for (let i = 0; i < entries.length; i++) {
    let [row, col] = entries[i].id;
    entryArr.push(exampleValues[row][col]);
  }
  return areDuplicates(entryArr);
};

var areRowDups = function (row) {
  return areDuplicates(exampleValues[row]);
};

var areColumnDups = function (col) {
  let colArr = [];
  for (let i = 0; i < exampleValues.length; i++) {
    colArr.push(exampleValues[i][col]);
  }
  return areDuplicates(colArr);
};

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
    let [row, col] = selected.id
    if (e.keyCode >= 49 && e.keyCode <= 57) {
      selected.innerHTML = e.key;
      exampleValues[row][col] = Number(e.key)
      checkBoard();
    } else {
      selected.innerHTML = "";
      exampleValues[row][col] = 0
      checkBoard()
    }
  }
};

populateBoard(exampleValues);

const entries = document.querySelectorAll(".entry");
entries.forEach((e) => e.addEventListener("click", toggleSelected));
document.addEventListener("keydown", inputSelected);
