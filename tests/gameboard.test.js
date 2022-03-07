import { Gameboard } from '../src/gameboard';
import { Ship } from '../src/ship';

test('gameboard places ships at specific coordinates by calling the ship factory function', function () {
  const ship4 = Ship(4, 'Blue');
  const board1 = Gameboard();
  board1.place(3, 5, ship4);
  const doArraysIntersect = board1.board[3].slice(5, 9);
  expect(doArraysIntersect).toEqual([
    { value: 'Blue', hit: false },
    { value: 'Blue', hit: false },
    { value: 'Blue', hit: false },
    { value: 'Blue', hit: false },
  ]);
});

test('gameboards receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship', function () {
  const ship5 = Ship(6);
  const board2 = Gameboard();
  board2.place(2, 1, ship5);
  expect(board2.receiveAttack(2, 2)).toBe(true);
});

test('gameboards receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship', function () {
  const ship6 = Ship(3);
  const board2 = Gameboard();
  board2.place(2, 1, ship6);
  expect(board2.receiveAttack(3, 1)).toBe(false);
});

test('gameboards sends the hit function to the correct ship', function () {
  const ship7 = Ship(6, 'red');
  const board3 = Gameboard();
  board3.place(2, 1, ship7);
  board3.receiveAttack(2, 2);
  const foundCorrectShip = board3.shipStore.find(el => el.name === ship7.name);
  expect(foundCorrectShip.shipArray[1].hit).toBe(true);
});

test('keep track of missed attacks', function () {
  const ship8 = Ship(3);
  const board4 = Gameboard();
  board4.place(2, 1, ship8);
  board4.receiveAttack(8, 8);
  expect(board4.board[8][8].hit).toBe(null);
});

test('gameboards be able to report whether or not all of their ships have been sunk', function () {
  const board5 = Gameboard();
  const shipa = Ship(2, 'a');
  const shipb = Ship(3, 'b');
  const shipc = Ship(5, 'c');
  board5.place(1, 0, shipa);
  board5.place(2, 0, shipb);
  board5.place(3, 0, shipc);
  board5.receiveAttack(1, 0);
  board5.receiveAttack(1, 1);
  board5.receiveAttack(2, 0);
  board5.receiveAttack(2, 1);
  board5.receiveAttack(2, 2);
  board5.receiveAttack(3, 0);
  board5.receiveAttack(3, 1);
  board5.receiveAttack(3, 2);
  board5.receiveAttack(3, 3);
  board5.receiveAttack(3, 4);
  expect(board5.areShipsSunk()).toBe(true);
});
