import style from './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player';
import { pairArray, randomAttack, placeShipRandom } from '../src/random';
import interact from './dragAndDrop.js';

const cells = document.querySelectorAll(`[data-a][data-b]`);
const random = document.querySelector('.randomise');
const reset = document.querySelector('.reset');

const patrolContainer = document.querySelector('.patrol-container');
const submarineContainer = document.querySelector('.submarine-container');
const destroyerContainer = document.querySelector('.destroyer-container');
const battleshipContainer = document.querySelector('.battleship-container');
const carrierContainer = document.querySelector('.carrier-container');

random.addEventListener('click', function () {
  player2.board.board.map(el => el.map(el => (el.value = null)));
  placeShipRandom(player2, carrier, battleship, destroyer, submarine, patrol);
});

reset.addEventListener('click', function () {
  player2.board.board.map(el => el.map(el => (el.value = null)));
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
});

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

function playerShipRandomBoard() {}

player2.board.place(0, 4, patrol);
player2.board.place(3, 1, submarine);
player2.board.place(5, 6, destroyer);
player2.board.place(7, 0, battleship);
player2.board.place(9, 5, carrier);

switchPlayer();

const carrier2 = Ship(5, 'Carrier');
const battleship2 = Ship(4, 'Battleship');
const destroyer2 = Ship(3, 'Destroyer');
const submarine2 = Ship(3, 'Submarine');
const patrol2 = Ship(2, 'Patrol Boat');

placeShipRandom(
  player1,
  carrier2,
  battleship2,
  destroyer2,
  submarine2,
  patrol2
);

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

console.log(player1.board.board);
console.log(player2.board.board);
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
