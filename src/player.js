const Player = function (name, board) {
  const player = { name };
  const enemyBoard = board;

  return Object.freeze({
    get name() {
      return player.name;
    },
    get board() {
      return enemyBoard;
    },
    attack(x, y) {
      enemyBoard.receiveAttack(x, y);
    },
  });
};

export { Player };
