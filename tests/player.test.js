import { Gameboard } from '../src/gameboard';
import { Player } from '../src/player';

test('players can take turns playing the game by attacking the enemy gameboard.', function () {
  const enemyBoard = Gameboard();
  const player1 = Player('player1', enemyBoard);
  player1.attack(2, 4);
  expect(enemyBoard.board[2][4].hit).toBe(null); // it is null because there is no ship
});
