import style from './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player';
import { pairArray } from '../src/random';
import { randomAttack } from '../src/random';

function switchPlayer() {
  if (activePlayer === player1) activePlayer = player2;
  else activePlayer = player1;
}

const playerBoard = Gameboard();
const enemyBoard = Gameboard();
const player1 = Player('player1', enemyBoard);
const player2 = Player('player2', playerBoard);

const carrier = Ship(5, 'Carrier');
const carrier2 = Ship(5, 'Carrier');
playerBoard.place(0, 0, carrier);
enemyBoard.place(0, 0, carrier2);
const battleship = Ship(4, 'Battleship');
const battleship2 = Ship(4, 'Battleship');
playerBoard.place(1, 1, battleship);
enemyBoard.place(1, 1, battleship2);
const destroyer = Ship(3, 'Destroyer');
const destroyer2 = Ship(3, 'Destroyer');
playerBoard.place(2, 2, destroyer);
enemyBoard.place(2, 2, destroyer2);
const submarine = Ship(3, 'Submarine');
const submarine2 = Ship(3, 'Submarine');
playerBoard.place(3, 3, submarine);
enemyBoard.place(3, 3, submarine2);
const patrol = Ship(2, 'Patrol Boat');
const patrol2 = Ship(2, 'Patrol Boat');
playerBoard.place(4, 4, patrol);
enemyBoard.place(4, 4, patrol2);

console.log(enemyBoard.board);

let activePlayer = player1;

const cells = Array.from(document.querySelectorAll(`[data-a][data-b]`));
cells.forEach(cell => cell.addEventListener('click', game));

function game(e) {
  player1.attack(e.target.dataset.a, e.target.dataset.b);
  e.target.removeEventListener('click', game);

  switchPlayer();
  randomAttack(0, pairArray.length - 1, activePlayer);

  switchPlayer();

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
export { switchPlayer, activePlayer, player1, playerBoard };
