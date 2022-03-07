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

console.log();

export { Ship };
