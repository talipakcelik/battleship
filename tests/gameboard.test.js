import { Gameboard } from '../src/gameboard';
import { Ship } from '../src/ship';

test('gameboard places ships at specific coordinates by calling the ship factory function', function () {
  const ship4 = Ship(4);
  const board1 = Gameboard();
  board1.place(3, 5, ship4.lengthOfShip, ship4.position);
  const doArraysIntersect = board1.board[3].slice(5, 9);
  expect(doArraysIntersect).toEqual(['NH', 'NH', 'NH', 'NH']);
});

test('gameboards receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship', function () {
  const ship5 = Ship(6);
  const board2 = Gameboard();
  board2.place(2, 1, ship5.lengthOfShip, ship5.position);
  expect(board2.receiveAttack(2, 2)).toBe(true);
});

test('gameboards receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship', function () {
  const ship6 = Ship(3);
  const board2 = Gameboard();
  board2.place(2, 1, ship6.lengthOfShip, ship6.position);
  expect(board2.receiveAttack(3, 1)).toBe(false);
});
