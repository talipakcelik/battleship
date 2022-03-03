import { Ship } from '../src/ship';

test('ship length', function () {
  const ship1 = Ship(4);
  expect(ship1.lengthOfShip).toEqual(4);
});
