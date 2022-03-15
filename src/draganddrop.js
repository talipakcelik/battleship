import {
  player2,
  carrier,
  battleship,
  destroyer,
  submarine,
  patrol,
} from './index.js';

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
let placeCheck;

ships.forEach(ship => ship.addEventListener('dragstart', dragStartShip));

board.addEventListener('mousedown', grapShip);

shipsContainer.addEventListener('mousedown', grapShip);

board.addEventListener('dragover', dragOverShip);

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

    if (target.shipNameWithId.slice(0, -2) === 'carrier')
      displaceShip(e, carrier);
    else if (target.shipNameWithId.slice(0, -2) === 'battleship')
      displaceShip(e, battleship);
    else if (target.shipNameWithId.slice(0, -2) === 'destroyer')
      displaceShip(e, destroyer);
    else if (target.shipNameWithId.slice(0, -2) === 'submarine')
      displaceShip(e, submarine);
    else if (target.shipNameWithId.slice(0, -2) === 'patrol')
      displaceShip(e, patrol);
  }
}

function displaceShip(e, shipName) {
  player2.board.displace(
    e.target.parentElement.dataset.x,
    e.target.parentElement.dataset.y,
    shipName
  );
}

function dropShip(e) {
  let counter = e.target.dataset.y - shipIndex;
  // console.log(counter, 'counter', shipIndex);

  if (
    target.shipNameWithId.substring(-1, 7) === 'carrier' &&
    counter < 6 &&
    counter >= 0
  ) {
    placeShip(e, counter);
    if (placeCheck) {
      placeShipTo2DArray(e, carrier);
    }
  } else if (
    target.shipNameWithId.substring(-1, 10) === 'battleship' &&
    counter < 7 &&
    counter >= 0
  ) {
    placeShip(e, counter);
    if (placeCheck) {
      placeShipTo2DArray(e, battleship);
    }
  } else if (
    target.shipNameWithId.substring(-1, 9) === 'destroyer' &&
    counter < 8 &&
    counter >= 0
  ) {
    placeShip(e, counter);
    if (placeCheck) {
      placeShipTo2DArray(e, destroyer);
    }
  } else if (
    target.shipNameWithId.substring(-1, 9) === 'submarine' &&
    counter < 8 &&
    counter >= 0
  ) {
    placeShip(e, counter);
    if (placeCheck) {
      placeShipTo2DArray(e, submarine);
    }
  } else if (
    target.shipNameWithId.substring(-1, 6) === 'patrol' &&
    counter < 9 &&
    counter >= 0
  ) {
    placeShip(e, counter);
    if (placeCheck) {
      placeShipTo2DArray(e, patrol);
    }
  }
}

function placeShip(e, counter) {
  let checkArray = [];

  for (let i = 0; i < target.shipLength; i++) {
    let check = document
      .querySelector(`[data-x='${e.target.dataset.x}'][data-y='${counter}']`)
      .classList.contains('is-taken');

    checkArray.push(check);
    counter++;
  }
  if (checkArray.every(el => el === false)) {
    placeCheck = true;
    let counter2 = e.target.dataset.y - shipIndex;
    for (let i = 0; i < target.shipLength; i++) {
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
      /////////////////////////////////////////////
      document
        .querySelector(`[data-x='${e.target.dataset.x}'][data-y='${counter2}']`)
        .classList.add('is-taken');

      counter2++;
    }
  } else placeCheck = false;
}

function placeShipTo2DArray(e, shipName) {
  player2.board.place(
    e.target.dataset.x,
    e.target.dataset.y - shipIndex,
    shipName
  );
}
