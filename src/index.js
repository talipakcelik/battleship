import style from './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player';
import { pairArray } from '../src/random';
import { randomAttack } from '../src/random';
import interact from './draganddrop.js';

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
player2.board.place(0, 0, carrier);
player2.board.place(1, 1, battleship);
player2.board.place(2, 2, destroyer);
player2.board.place(3, 3, submarine);
player2.board.place(4, 4, patrol);

switchPlayer();

const carrier2 = Ship(5, 'Carrier');
const battleship2 = Ship(4, 'Battleship');
const destroyer2 = Ship(3, 'Destroyer');
const submarine2 = Ship(3, 'Submarine');
const patrol2 = Ship(2, 'Patrol Boat');
player1.board.place(8, 0, carrier2);
player1.board.place(1, 1, battleship2);
player1.board.place(2, 2, destroyer2);
player1.board.place(3, 3, submarine2);
player1.board.place(4, 4, patrol2);

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

export { switchPlayer, activePlayer, player1, playerBoard };
