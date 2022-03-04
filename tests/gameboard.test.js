import { Gameboard } from '../src/gameboard';
import { Ship } from '../src/ship';

test('gameboard places ships at specific coordinates by calling the ship factory function', function () {
  const ship4 = Ship(4);
  const board1 = Gameboard();
  board1.place(3, 5, ship4.lengthOfShip, ship4.position);
  const doArraysIntersect = board1.board[3].slice(5, 9);
  expect(doArraysIntersect).toEqual(['NH', 'NH', 'NH', 'NH']);
});
