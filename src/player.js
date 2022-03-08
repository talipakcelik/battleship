const Player = function (name, board) {
  const player = { name };
  const enemyBoard = board;

  return Object.freeze({
    get name() {
      player.name;
    },
    attack(x, y) {
      enemyBoard.receiveAttack(x, y);
    },
  });
};

export { Player };
