import { Ship } from '../src/ship';

test('ship length', function () {
  const ship1 = Ship(4);
  expect(ship1.lengthOfShip).toEqual(4);
});

test('hit method marks correct position as hit in ship array', function () {
  const ship2 = Ship(5);
  ship2.hit(3);
  expect(ship2.position.at(3)).toEqual('X');
});

test('isSunk method turns sunk property to true value when ships sink', function () {
  const ship3 = Ship(3);
  ship3.hit(0);
  ship3.hit(1);
  ship3.hit(2);
  ship3.isSunk();
  expect(ship3.sunk).toBe(true);
});