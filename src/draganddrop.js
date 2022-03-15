const cells = document.querySelectorAll(`[data-x][data-y]`);
const shipsContainer = document.querySelector('.ships-container');
const ships = document.querySelectorAll('.ship');
const board = document.querySelector('.player-board');

const target = {
  shipNameWithId: '',
  ship: '',
  shipLength: 0,
};

let shipIndex;

ships.forEach(ship => ship.addEventListener('dragstart', dragStartShip));

board.addEventListener('mousedown', grapShip);

shipsContainer.addEventListener('mousedown', grapShip);

board.addEventListener('dragover', function (e) {});

for (const cell of cells) {
  cell.addEventListener('dragover', dragOverShip);
  cell.addEventListener('dragenter', dragEnterShip);
  cell.addEventListener('dragleave', dragLeaveShip);
  cell.addEventListener('drop', dropShip);
}

function grapShip(e) {
  target['shipNameWithId'] = e.target.id;
}

function dragOverShip(e) {
  e.preventDefault();
}

function dragEnterShip(e) {
  e.preventDefault();
  // console.log('dragenter');
}

function dragLeaveShip(e) {
  // console.log('dragleave');
}

function dragStartShip(e) {
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
}

function dropShip(e) {
  let counter = e.target.dataset.y - shipIndex;
  console.log(counter, 'counter', shipIndex);

  if (
    target.shipNameWithId.substring(-1, 7) === 'carrier' &&
    counter < 6 &&
    counter >= 0
  ) {
    placeShip(e, counter);
  } else if (
    target.shipNameWithId.substring(-1, 10) === 'battleship' &&
    counter < 7 &&
    counter >= 0
  ) {
    placeShip(e, counter);
  } else if (
    target.shipNameWithId.substring(-1, 9) === 'destroyer' &&
    counter < 8 &&
    counter >= 0
  ) {
    placeShip(e, counter);
  } else if (
    target.shipNameWithId.substring(-1, 9) === 'submarine' &&
    counter < 8 &&
    counter >= 0
  ) {
    placeShip(e, counter);
  } else if (
    target.shipNameWithId.substring(-1, 6) === 'patrol' &&
    counter < 9 &&
    counter >= 0
  ) {
    placeShip(e, counter);
  }
}

function placeShip(e, counter) {
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
