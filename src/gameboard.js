const Gameboard = function () {
  const gameboard = {
    location: Array(30).fill(null),
  };

  return Object.freeze({
    place(coordinate, length, ship) {
      gameboard.location.splice(coordinate, length, ...ship);
    },
    get location() {
      return gameboard.location;
    },
  });
};

export { Gameboard };
