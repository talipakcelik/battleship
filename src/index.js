import style from './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player';
import {
  pairArray,
  randomAttack,
  placeShipRandom,
  pairArrayRefresher,
} from '../src/random';
import interact from './dragAndDrop.js';

const cells = document.querySelectorAll(`[data-a][data-b]`);
const random = document.querySelector('.randomise');
const reset = document.querySelector('.reset');
const play = document.querySelector('.play');

const patrolContainer = document.querySelector('.patrol-container');
const submarineContainer = document.querySelector('.submarine-container');
const destroyerContainer = document.querySelector('.destroyer-container');
const battleshipContainer = document.querySelector('.battleship-container');
const carrierContainer = document.querySelector('.carrier-container');

let start = false;

random.addEventListener('click', placeRandom);

function placeRandom() {
  player2.board.board.map(el => el.map(el => (el.value = null)));
  removeClassFromCells();
  placeShipRandom(player2, carrier, battleship, destroyer, submarine, patrol);
}

function removeClassFromCells() {
  document
    .querySelectorAll('.cell')
    .forEach(cell => cell.classList.remove('is-taken'));
}

reset.addEventListener('click', function () {
  player2.board.board.map(el => el.map(el => (el.value = null)));
  player2.board.board.map(el => el.map(el => (el.hit = false)));
  player2.board.shipStore.map(el => el.shipArray.map(el => (el.hit = false)));

  player2.board.place(0, 4, patrol);
  player2.board.place(3, 1, submarine);
  player2.board.place(5, 6, destroyer);
  player2.board.place(7, 0, battleship);
  player2.board.place(9, 5, carrier);
  //////////////////////////////////////
  document.querySelector(`[data-x='0'][data-y='4']`).append(patrolContainer);
  document.querySelector(`[data-x='3'][data-y='1']`).append(submarineContainer);
  document.querySelector(`[data-x='5'][data-y='6']`).append(destroyerContainer);
  document
    .querySelector(`[data-x='7'][data-y='0']`)
    .append(battleshipContainer);
  document.querySelector(`[data-x='9'][data-y='5']`).append(carrierContainer);

  player1.board.board.map(el => el.map(el => (el.value = null)));
  player1.board.board.map(el => el.map(el => (el.hit = false)));
  player1.board.shipStore.map(el => el.shipArray.map(el => (el.hit = false)));

  placeShipRandom(
    player1,
    carrier2,
    battleship2,
    destroyer2,
    submarine2,
    patrol2
  );

  document
    .querySelectorAll('.cell')
    .forEach(cell => cell.classList.remove('attack', 'hit'));

  document
    .querySelectorAll('.enemy-board .cell')
    .forEach(
      cell => (
        cell.classList.remove(
          'attack',
          'hit',
          'com-patrol',
          'com-submarine',
          'com-destroyer',
          'com-battleship',
          'com-carrier'
        ),
        (cell.style.backgroundColor = '#fff'),
        (cell.style.border = 'none')
      )
    );
  document
    .querySelectorAll('.ship')
    .forEach(
      ship => (
        (ship.style.backgroundColor = 'rgba(0, 0, 255, 0.05)'),
        (ship.style.border = '2px solid #00f')
      )
    );
  document
    .querySelectorAll('.sub-ship')
    .forEach(ship => (ship.style.border = 'none'));

  removeListener();
  pairArrayRefresher();
  random.addEventListener('click', placeRandom);
  setDraggable(true, 'move');
  document.querySelector('.play').style.display = '';
  removeClassFromCells();
  addClassToCells();
});

function addClassToCells() {
  document.querySelector(`[data-x='0'][data-y='4']`).classList.add('is-taken');
  document.querySelector(`[data-x='0'][data-y='5']`).classList.add('is-taken');
  document.querySelector(`[data-x='3'][data-y='1']`).classList.add('is-taken');
  document.querySelector(`[data-x='3'][data-y='2']`).classList.add('is-taken');
  document.querySelector(`[data-x='3'][data-y='3']`).classList.add('is-taken');
  document.querySelector(`[data-x='5'][data-y='6']`).classList.add('is-taken');
  document.querySelector(`[data-x='5'][data-y='7']`).classList.add('is-taken');
  document.querySelector(`[data-x='5'][data-y='8']`).classList.add('is-taken');
  document.querySelector(`[data-x='7'][data-y='0']`).classList.add('is-taken');
  document.querySelector(`[data-x='7'][data-y='1']`).classList.add('is-taken');
  document.querySelector(`[data-x='7'][data-y='2']`).classList.add('is-taken');
  document.querySelector(`[data-x='7'][data-y='3']`).classList.add('is-taken');
  document.querySelector(`[data-x='9'][data-y='5']`).classList.add('is-taken');
  document.querySelector(`[data-x='9'][data-y='6']`).classList.add('is-taken');
  document.querySelector(`[data-x='9'][data-y='7']`).classList.add('is-taken');
  document.querySelector(`[data-x='9'][data-y='8']`).classList.add('is-taken');
  document.querySelector(`[data-x='9'][data-y='9']`).classList.add('is-taken');
}

play.addEventListener('click', function () {
  activePlayer = player1;
  cells.forEach(cell => cell.addEventListener('click', game));
  random.removeEventListener('click', function () {
    placeShipRandom(player2, carrier, battleship, destroyer, submarine, patrol);
  });
  random.removeEventListener('click', placeRandom);
  setDraggable(false, 'default');
  document.querySelector('.play').style.display = 'none';
});

const playerBoard = Gameboard();
const enemyBoard = Gameboard();
const player1 = Player('player1', enemyBoard);
const player2 = Player('player2', playerBoard);

let activePlayer = player1;

const carrier = Ship(5, 'carrier');
const battleship = Ship(4, 'battleship');
const destroyer = Ship(3, 'destroyer');
const submarine = Ship(3, 'submarine');
const patrol = Ship(2, 'patrol');

player2.board.place(0, 4, patrol);
player2.board.place(3, 1, submarine);
player2.board.place(5, 6, destroyer);
player2.board.place(7, 0, battleship);
player2.board.place(9, 5, carrier);

switchPlayer();

const carrier2 = Ship(5, 'carrier');
const battleship2 = Ship(4, 'battleship');
const destroyer2 = Ship(3, 'destroyer');
const submarine2 = Ship(3, 'submarine');
const patrol2 = Ship(2, 'patrol');

placeShipRandom(
  player1,
  carrier2,
  battleship2,
  destroyer2,
  submarine2,
  patrol2
);

switchPlayer();

function game(e) {
  player1.attack(e.target.dataset.a, e.target.dataset.b);

  e.target.removeEventListener('click', game);

  switchPlayer();

  if (
    player1.board.areShipsSunk() === false &&
    player2.board.areShipsSunk() === false
  ) {
    randomAttack(0, pairArray.length - 1, activePlayer);
    switchPlayer();
  }

  if (player1.board.areShipsSunk() === true) {
    document.querySelector(
      '.text'
    ).textContent = `Game over. Congratulations, you won!`;
    removeListener();
    // switchPlayer();
  } else if (player2.board.areShipsSunk() === true) {
    document.querySelector('.text').textContent = `Game over. You lose.`;
    removeListener();
    // switchPlayer();
  }
}

function removeListener() {
  cells.forEach(cell => cell.removeEventListener('click', game));
}

function switchPlayer() {
  if (activePlayer === player1) activePlayer = player2;
  else activePlayer = player1;
}

function setDraggable(value, cursor) {
  document
    .querySelectorAll('.ship')
    .forEach(
      ship => (
        ship.setAttribute('draggable', value), (ship.style.cursor = `${cursor}`)
      )
    );
}

export {
  switchPlayer,
  activePlayer,
  player1,
  player2,
  playerBoard,
  carrier,
  battleship,
  destroyer,
  submarine,
  patrol,
  patrolContainer,
  submarineContainer,
  destroyerContainer,
  battleshipContainer,
  carrierContainer,
};
