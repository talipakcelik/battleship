import {
  player1,
  carrier2,
  battleship2,
  destroyer2,
  submarine2,
  patrol2,
} from './index.js';

let pairArray = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],
  [0, 8],
  [0, 9],
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [1, 9],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],
  [2, 8],
  [2, 9],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 6],
  [3, 7],
  [3, 8],
  [3, 9],
  [4, 0],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [4, 8],
  [4, 9],
  [5, 0],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [5, 5],
  [5, 6],
  [5, 7],
  [5, 8],
  [5, 9],
  [6, 0],
  [6, 1],
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
  [6, 7],
  [6, 8],
  [6, 9],
  [7, 0],
  [7, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
  [7, 7],
  [7, 8],
  [7, 9],
  [8, 0],
  [8, 1],
  [8, 2],
  [8, 3],
  [8, 4],
  [8, 5],
  [8, 6],
  [8, 7],
  [8, 8],
  [8, 9],
  [9, 0],
  [9, 1],
  [9, 2],
  [9, 3],
  [9, 4],
  [9, 5],
  [9, 6],
  [9, 7],
  [9, 8],
  [9, 9],
];

function randomAttack(min, max, player) {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  player.attack(pairArray[random][0], pairArray[random][1]);
  pairArray.splice(random, 1);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let freeRow;

function filterBoard() {
  return player1.board.board
    .map(el => el.findIndex(el => el.value !== null))
    .reduce((r, n, i) => {
      n === -1 && r.push(i);
      return r;
    }, []);
}

function placeShipRandom() {
  player1.board.place(randomNumber(0, 9), randomNumber(0, 5), carrier2);

  freeRow = filterBoard();

  player1.board.place(
    freeRow[randomNumber(0, 8)],
    randomNumber(0, 6),
    battleship2
  );

  freeRow = filterBoard();

  player1.board.place(
    freeRow[randomNumber(0, 7)],
    randomNumber(0, 7),
    destroyer2
  );

  freeRow = filterBoard();

  player1.board.place(
    freeRow[randomNumber(0, 6)],
    randomNumber(0, 7),
    submarine2
  );

  freeRow = filterBoard();

  player1.board.place(freeRow[randomNumber(0, 5)], randomNumber(0, 8), patrol2);
}

export { randomAttack, pairArray, placeShipRandom };
