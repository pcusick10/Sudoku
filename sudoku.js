var exampleValues = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [9, 7, 8, 3, 1, 2, 6, 4, 5],
];

class Board {
  constructor(values) {
    this.values = values;
  }

  checkRow(rowIndex) {
    let row = this.values[rowIndex];
    let acc = [];
    let dup = [];
    for (let i = 0; i < row.length; i++) {
      if (acc.includes(row[i])) {
        dup.push(row[i]);
      }
    }
    if (dup.length) {
      console.log(
        `Duplicates found at indices ${dup.join(", ")} of row ${rowIndex}.`
      );
    } else {
      console.log("No duplicates in this row.");
    }
  }

  checkColumn(colIndex) {
    let col = this.values.map((row) => row[colIndex]);
    let acc = [];
    let dup = [];
    for (let i = 0; i < col.length; i++) {
      if (acc.includes(col[i])) {
        dup.push(col[i]);
      }
    }
    if (dup.length) {
      console.log(
        `Duplicates found at indices ${dup.join(", ")} of column ${colIndex}.`
      );
    } else {
      console.log("No duplicates in this column.");
    }
  }

  checkChunk(chunkNum) {
    let chunk = [];
    let acc = [];
    let dup = [];
    let startingRow = chunkNum - (chunkNum % 3);
    let startingCol = (chunkNum % 3) * 3;
    for (let row = startingRow; row <= startingRow + 3; row++) {
      for (let col = startingCol; col <= startingCol + 3; col++) {
        chunk.push(this.values[row][col]);
      }
    }
    for (let i = 0; i < chunk.length; i++) {
      if (acc.includes(chunk[i])) {
        dup.push(chunk[i]);
      }
    }
    if (dup.length) {
      console.log(
        `Duplicates found at indices ${dup.join(", ")} of chunk ${chunkNum}.`
      );
    } else {
      console.log("No duplicates in this chunk.");
    }
  }
}

console.log("Hello world");
var testBoard = new Board(exampleValues);
