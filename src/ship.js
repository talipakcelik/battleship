const Ship = function (length, name) {
  let shipArray = Array.from(new Array(length), function () {
    return { value: name, hit: false };
  });

  return Object.freeze({
    get name() {
      return name;
    },
    get length() {
      return shipArray.length;
    },
    get shipArray() {
      return shipArray;
    },
    hit(index) {
      shipArray[index].hit = true;
    },
    get isSunk() {
      if (shipArray.every(el => el.hit === true)) return true;
      else return false;
    },
  });
};

const ship1 = Ship(6, 'blue');
// ship1.hit(0);
ship1.hit(1);
ship1.hit(2);
ship1.hit(5);

console.log(ship1.shipArray);

export { Ship };
