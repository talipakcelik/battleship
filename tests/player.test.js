import { Gameboard } from '../src/gameboard';
import { Player } from '../src/player';
import { switchPlayer } from '../src/index';
import { randomStore } from '../src/random';
import { randomAttack } from '../src/random';
import { activePlayer } from '../src/index';
import { playerBoard } from '../src/index';

test('player attack the the enemy gameboard.', function () {
  const enemyBoard = Gameboard();
  const player1 = Player('player1', enemyBoard);
  player1.attack(2, 4);
  expect(enemyBoard.board[2][4].hit).toBe(null); // it is null because there is no ship
});

test('players can take turns and computer players capable of making random plays', function () {
  switchPlayer();
  while (randomStore.length < 100) {
    randomAttack(0, 9, activePlayer);
  }
  expect(playerBoard.board.every(el => el.every(el => el.hit === null))).toBe(
    true
  ); // whether each of the cells is filled
});
