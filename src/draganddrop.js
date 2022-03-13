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
    // console.log(e.target.childElementCount);
    // console.log(e.target);
    // console.log(target);
  })
);

shipsContainer.addEventListener('mousedown', function (e) {
  target['shipNameWithId'] = e.target.id;
  // console.log('grap');
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
    e.target.append(target.ship);
    target.ship.style.position = 'relative';
    target.ship.style.top = '-1rem';
    target.ship.style.left = '-1.5rem';
    e.target.classList.add('taken');
    console.log(e.target.dataset.y);
  });
}
