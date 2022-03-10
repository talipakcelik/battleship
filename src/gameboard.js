import { activePlayer } from './index';
import { player1 } from './index';

const Gameboard = function () {
  let gameboard = {
    board: [
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
      [
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
        { value: null, hit: false },
      ],
    ],

    shipStore: [],
  };

  return Object.freeze({
    get board() {
      return gameboard.board;
    },
    get shipStore() {
      return gameboard.shipStore;
    },
    place(x, y, ship) {
      gameboard.shipStore.push(ship);
      for (let i = y; i <= ship.length + (y - 1); i++) {
        gameboard.board[x][i].value = ship.name;
        document.querySelector(
          `[data-x='${x}'][data-y='${i}']`
        ).style.backgroundColor = 'blue';
      }
    },
    receiveAttack(x, y) {
      if (gameboard.board[x][y].value !== null) {
        gameboard.board[x][y].hit = true;
        if (activePlayer === player1)
          document.querySelector(`[data-a='${x}'][data-b='${y}']`).textContent =
            'H';
        else
          document.querySelector(`[data-x='${x}'][data-y='${y}']`).textContent =
            'H';

        const targetShipName = gameboard.board[x][y].value;
        const foundShip = gameboard.shipStore.find(
          el => el.name === targetShipName
        );

        let counter = 0;

        for (const element of Object.values(gameboard.board[x])) {
          if (element.value !== targetShipName) {
            counter++;
          } else break;
        }

        foundShip.hit(y - counter);

        return true;
      } else if (gameboard.board[x][y].value === null) {
        gameboard.board[x][y].hit = null; // missed attack
        if (activePlayer === player1)
          document.querySelector(`[data-a='${x}'][data-b='${y}']`).textContent =
            'N';
        else
          document.querySelector(`[data-x='${x}'][data-y='${y}']`).textContent =
            'N';

        return false;
      }
    },
    areShipsSunk() {
      if (gameboard.shipStore.every(ship => ship.isSunk === true)) {
        return true;
      } else return false;
    },
  });
};

export { Gameboard };
