const Ship = function (length) {
  const ship = { length, position: Array(length).fill(null), sunk: false };

  return Object.freeze({
    get lengthOfShip() {
      return ship.length;
    },
    get position() {
      return ship.position;
    },
    get sunk() {
      return ship.sunk;
    },
    hit(index) {
      ship.position[index] = 'X';
    },
    isSunk() {
      if (ship.position.every(el => el === 'X')) {
        ship.sunk = true;
      }
    },
  });
};

export { Ship };
