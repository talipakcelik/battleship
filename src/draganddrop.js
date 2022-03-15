const cells = document.querySelectorAll(`[data-x][data-y]`);

const shipsContainer = document.querySelector('.ships-container');
const ships = document.querySelectorAll('.ship');
const board = document.querySelector('.player-board');

const target = {
  shipNameWithId: '',
  ship: '',
  shipLength: 0,
};

let boardCheck;
let shipIndex;

ships.forEach(ship =>
  ship.addEventListener('dragstart', function (e) {
    target['ship'] = e.target;
    target['shipLength'] = e.target.childElementCount;
    shipIndex = parseInt(target.shipNameWithId.slice(-1));

    if (!e.currentTarget.parentElement.classList.contains('ships-container')) {
      let counter = e.target.parentElement.dataset.y;

      for (let i = 0; i < target.shipLength; i++) {
        document
          .querySelector(
            `[data-x='${e.target.parentElement.dataset.x}'][data-y='${counter}']`
          )
          .classList.remove('is-taken');

        counter++;
      }
    }
  })
);

board.addEventListener('mousedown', function (e) {
  target['shipNameWithId'] = e.target.id;
  console.log(e.target.id);
});

board.addEventListener('dragover', function (e) {});

shipsContainer.addEventListener('mousedown', function (e) {
  target['shipNameWithId'] = e.target.id;
  console.log(e.target.id);
});

for (const cell of cells) {
  cell.addEventListener('dragover', function (e) {
    e.preventDefault();
    /////////////////////////////
    if (target.shipNameWithId.substring(-1, 7) === 'carrier') {
      boardCheck = target.shipLength + e.target.dataset.y <= 10;
    } else if (target.shipNameWithId.substring(-1, 10) === 'battleship') {
      boardCheck = e.target.dataset.y <= 6;
    }
  });
  cell.addEventListener('dragenter', function (e) {
    e.preventDefault();
    // console.log('dragenter');
  });
  cell.addEventListener('dragleave', function (e) {
    // console.log('dragleave');
  });
  cell.addEventListener('drop', function (e) {
    let counter = e.target.dataset.y - shipIndex;

    console.log(counter);

    if (
      target.shipNameWithId.substring(-1, 7) === 'carrier' &&
      counter < 6 &&
      counter >= 0
    ) {
      dropShip(e, counter);
    } else if (
      target.shipNameWithId.substring(-1, 10) === 'battleship' &&
      counter < 7 &&
      counter >= 0
    ) {
      dropShip(e, counter);
    } else if (
      target.shipNameWithId.substring(-1, 9) === 'destroyer' &&
      counter < 8 &&
      counter >= 0
    ) {
      dropShip(e, counter);
    } else if (
      target.shipNameWithId.substring(-1, 9) === 'submarine' &&
      counter < 8 &&
      counter >= 0
    ) {
      dropShip(e, counter);
    } else if (
      target.shipNameWithId.substring(-1, 6) === 'patrol' &&
      counter < 9 &&
      counter >= 0
    ) {
      dropShip(e, counter);
    }
  });
}

function dropShip(e, counter) {
  document
    .querySelector(
      `[data-x='${e.target.dataset.x}'][data-y='${
        e.target.dataset.y - shipIndex
      }']`
    )
    .append(target.ship);
  target.ship.style.position = 'relative';
  target.ship.style.top = '-1rem';
  target.ship.style.left = '-1.5rem';

  for (let i = 0; i < target.shipLength; i++) {
    document
      .querySelector(`[data-x='${e.target.dataset.x}'][data-y='${counter}']`)
      .classList.add('is-taken');

    counter++;
  }
}
