// import interact from 'interactjs';
// import { cells } from './index.js';

const cells = document.querySelectorAll(`[data-x][data-y]`);

const shipsContainer = document.querySelector('.ships-container');
const ships = document.querySelectorAll('.ship');
const board = document.querySelector('.player-board');

const target = {
  shipNameWithId: '',
  ship: '',
  shipLength: 0,
};

ships.forEach(ship =>
  ship.addEventListener('dragstart', function (e) {
    target['ship'] = e.target;
    target['shipLength'] = e.target.childElementCount;

    console.log(e.target.parentElement.dataset.y);

    let counter = e.target.parentElement.dataset.y;

    for (let i = 0; i < target.shipLength; i++) {
      document
        .querySelector(
          `[data-x='${e.target.parentElement.dataset.x}'][data-y='${counter}']`
        )
        .classList.remove('is-taken');

      counter++;
    }
  })
);

shipsContainer.addEventListener('mousedown', function (e) {
  target['shipNameWithId'] = e.target.id;
});

for (const cell of cells) {
  cell.addEventListener('dragover', function (e) {
    e.preventDefault();
    // console.log('dragover');
  });
  cell.addEventListener('dragenter', function (e) {
    e.preventDefault();
    // console.log('dragenter');
  });
  cell.addEventListener('dragleave', function (e) {
    // console.log('dragleave');
  });
  cell.addEventListener('drop', function (e) {
    // console.log(e.target);
    // console.log(e.target.classList.contains('is-taken'));

    if (
      !e.target.classList.contains('is-taken') &&
      !e.target.parentElement.classList.contains('ship')
    ) {
      e.target.append(target.ship);
      target.ship.style.position = 'relative';
      target.ship.style.top = '-1rem';
      target.ship.style.left = '-1.5rem';
      // e.target.classList.add('taken');
      console.log(e.target.dataset.y);

      let counter = e.target.dataset.y;

      for (let i = 0; i < target.shipLength; i++) {
        document
          .querySelector(
            `[data-x='${e.target.dataset.x}'][data-y='${counter}']`
          )
          .classList.add('is-taken');

        counter++;
      }
    }
  });
}

board.addEventListener('click', e => {
  console.log(e.target.parentElement.classList.contains('ship'));
});
