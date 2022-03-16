import style from './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player';
import { pairArray, randomAttack, placeShipRandom } from '../src/random';
import interact from './dragAndDrop.js';

const cells = document.querySelectorAll(`[data-a][data-b]`);

const playerBoard = Gameboard();
const enemyBoard = Gameboard();
const player1 = Player('player1', enemyBoard);
const player2 = Player('player2', playerBoard);

let activePlayer = player1;

const carrier = Ship(5, 'Carrier');
const battleship = Ship(4, 'Battleship');
const destroyer = Ship(3, 'Destroyer');
const submarine = Ship(3, 'Submarine');
const patrol = Ship(2, 'Patrol Boat');

switchPlayer();

const carrier2 = Ship(5, 'Carrier');
const battleship2 = Ship(4, 'Battleship');
const destroyer2 = Ship(3, 'Destroyer');
const submarine2 = Ship(3, 'Submarine');
const patrol2 = Ship(2, 'Patrol Boat');

placeShipRandom();

switchPlayer();

cells.forEach(cell => cell.addEventListener('click', game));

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
  } else if (player2.board.areShipsSunk() === true) {
    document.querySelector('.text').textContent = `Game over. You lose.`;
    removeListener();
  }
}

function removeListener() {
  cells.forEach(cell => cell.removeEventListener('click', game));
}

function switchPlayer() {
  if (activePlayer === player1) activePlayer = player2;
  else activePlayer = player1;
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
  carrier2,
  battleship2,
  destroyer2,
  submarine2,
  patrol2,
};
