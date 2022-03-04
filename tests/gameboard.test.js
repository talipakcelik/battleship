import { Gameboard } from '../src/gameboard';
import { Ship } from '../src/ship';

test('gameboard places ships at specific coordinates by calling the ship factory function', function () {
  const ship4 = Ship(4);
  ship4.hit(0);
  ship4.hit(3);
  const gameboard = Gameboard();
  gameboard.place(2, ship4.lengthOfShip, ship4.position);
  const doArraysIntersect = gameboard.location.slice(2, 6);
  expect(doArraysIntersect).toEqual(['X', null, null, 'X']);
});
