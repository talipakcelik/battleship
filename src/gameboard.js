import { activePlayer, player1 } from './index';
import { target } from './dragAndDrop';

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
      }
    },
    displace(x, y, ship) {
      for (let i = y; i <= ship.length + (y - 1); i++) {
        gameboard.board[x][i].value = null;
      }
    },
    receiveAttack(x, y) {
      if (gameboard.board[x][y].value !== null) {
        gameboard.board[x][y].hit = true;

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

        if (activePlayer === player1) {
          document
            .querySelector(`[data-a='${x}'][data-b='${y}']`)
            .classList.add('hit');
          document
            .querySelector(`[data-a='${x}'][data-b='${y}']`)
            .classList.add(`com-${foundShip.name}`);

          if (foundShip.isSunk === true) {
            document
              .querySelectorAll(`.com-${foundShip.name}`)
              .forEach(
                el => (
                  (el.style.border = '1px solid red'),
                  (el.style.backgroundColor = 'rgba(255,0,0,.05)')
                )
              );
          }
        } else {
          document
            .querySelector(`[data-x='${x}'][data-y='${y}']`)
            .classList.add('hit');

          if (foundShip.isSunk === true) {
            document.querySelector(
              `.${foundShip.name}-container`
            ).style.border = 'none';
            Array.from(
              document.querySelector(`.${foundShip.name}-container`).children
            ).forEach(el => (el.style.border = '1px solid red'));
            document.querySelector(
              `.${foundShip.name}-container`
            ).style.backgroundColor = 'rgba(255,0,0,.05)';
          }
        }

        return true;
      } else if (gameboard.board[x][y].value === null) {
        gameboard.board[x][y].hit = null; // missed attack
        if (activePlayer === player1)
          document
            .querySelector(`[data-a='${x}'][data-b='${y}']`)
            .classList.add('attack');
        else
          document
            .querySelector(`[data-x='${x}'][data-y='${y}']`)
            .classList.add('attack');

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
