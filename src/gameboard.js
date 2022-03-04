const Gameboard = function () {
  const gameboard = {
    board: [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ],
  };

  return Object.freeze({
    place(x, y, length, position) {
      gameboard.board[x].splice(y, length, ...position);
    },
    get board() {
      return gameboard.board;
    },
    receiveAttack(x, y) {
      if (gameboard.board[x][y] === 'NH') {
        return true;
      } else if (gameboard.board[x][y] === null) {
        return false;
      }
    },
  });
};

export { Gameboard };
