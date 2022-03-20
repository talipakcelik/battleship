"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/dragAndDrop.js":
/*!****************************!*\
  !*** ./src/dragAndDrop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "target": () => (/* binding */ target)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var cells = document.querySelectorAll("[data-x][data-y]");
var shipsContainer = document.querySelector('.ships-container');
var ships = document.querySelectorAll('.ship');
var board = document.querySelector('.player-board');
var target = {
  shipNameWithId: '',
  ship: '',
  shipLength: 0
};
var shipIndex;
var placeCheck;
ships.forEach(function (ship) {
  return ship.addEventListener('dragstart', dragStartShip);
});
board.addEventListener('mousedown', grapShip);
board.addEventListener('dragover', dragOverShip);

var _iterator = _createForOfIteratorHelper(cells),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var cell = _step.value;
    cell.addEventListener('dragover', dragOverShip);
    cell.addEventListener('dragenter', dragEnterShip);
    cell.addEventListener('dragleave', dragLeaveShip);
    cell.addEventListener('drop', dropShip);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

function grapShip(e) {
  target['shipNameWithId'] = e.target.id;
}

function dragOverShip(e) {
  e.preventDefault();
}

function dragEnterShip(e) {
  e.preventDefault();
}

function dragLeaveShip(e) {}

function dragStartShip(e) {
  target['ship'] = e.target;
  target['shipLength'] = e.target.childElementCount;
  shipIndex = parseInt(target.shipNameWithId.slice(-1));

  if (!e.currentTarget.parentElement.classList.contains('ships-container')) {
    var counter = e.target.parentElement.dataset.y;

    for (var i = 0; i < target.shipLength; i++) {
      document.querySelector("[data-x='".concat(e.target.parentElement.dataset.x, "'][data-y='").concat(counter, "']")).classList.remove('is-taken');
      counter++;
    }

    if (target.shipNameWithId.slice(0, -2) === 'carrier') displaceShip(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.carrier);else if (target.shipNameWithId.slice(0, -2) === 'battleship') displaceShip(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.battleship);else if (target.shipNameWithId.slice(0, -2) === 'destroyer') displaceShip(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.destroyer);else if (target.shipNameWithId.slice(0, -2) === 'submarine') displaceShip(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.submarine);else if (target.shipNameWithId.slice(0, -2) === 'patrol') displaceShip(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.patrol);
  }
}

function displaceShip(e, shipName) {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.player2.board.displace(e.target.parentElement.dataset.x, e.target.parentElement.dataset.y, shipName);
}

function dropShip(e) {
  var counter = e.target.dataset.y - shipIndex;

  if (target.shipNameWithId.substring(-1, 7) === 'carrier' && counter < 6 && counter >= 0) {
    placeShip(e, counter);

    if (placeCheck) {
      placeShipTo2DArray(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.carrier);
    }
  } else if (target.shipNameWithId.substring(-1, 10) === 'battleship' && counter < 7 && counter >= 0) {
    placeShip(e, counter);

    if (placeCheck) {
      placeShipTo2DArray(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.battleship);
    }
  } else if (target.shipNameWithId.substring(-1, 9) === 'destroyer' && counter < 8 && counter >= 0) {
    placeShip(e, counter);

    if (placeCheck) {
      placeShipTo2DArray(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.destroyer);
    }
  } else if (target.shipNameWithId.substring(-1, 9) === 'submarine' && counter < 8 && counter >= 0) {
    placeShip(e, counter);

    if (placeCheck) {
      placeShipTo2DArray(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.submarine);
    }
  } else if (target.shipNameWithId.substring(-1, 6) === 'patrol' && counter < 9 && counter >= 0) {
    placeShip(e, counter);

    if (placeCheck) {
      placeShipTo2DArray(e, _index_js__WEBPACK_IMPORTED_MODULE_0__.patrol);
    }
  }
}

function placeShip(e, counter) {
  var checkArray = [];

  for (var i = 0; i < target.shipLength; i++) {
    var check = document.querySelector("[data-x='".concat(e.target.dataset.x, "'][data-y='").concat(counter, "']")).classList.contains('is-taken');
    checkArray.push(check);
    counter++;
  }

  if (checkArray.every(function (el) {
    return el === false;
  })) {
    placeCheck = true;
    var counter2 = e.target.dataset.y - shipIndex;

    for (var _i = 0; _i < target.shipLength; _i++) {
      document.querySelector("[data-x='".concat(e.target.dataset.x, "'][data-y='").concat(e.target.dataset.y - shipIndex, "']")).append(target.ship); /////////////////////////////////////////////

      document.querySelector("[data-x='".concat(e.target.dataset.x, "'][data-y='").concat(counter2, "']")).classList.add('is-taken');
      counter2++;
    }
  } else placeCheck = false;
}

function placeShipTo2DArray(e, shipName) {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.player2.board.place(e.target.dataset.x, e.target.dataset.y - shipIndex, shipName);
}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragAndDrop */ "./src/dragAndDrop.js");



var Gameboard = function Gameboard() {
  var gameboard = {
    board: [[{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }], [{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }], [{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }], [{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }], [{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }], [{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }], [{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }], [{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }], [{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }], [{
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }, {
      value: null,
      hit: false
    }]],
    shipStore: []
  };
  return Object.freeze({
    get board() {
      return gameboard.board;
    },

    get shipStore() {
      return gameboard.shipStore;
    },

    place: function place(x, y, ship) {
      gameboard.shipStore.push(ship);

      for (var i = y; i <= ship.length + (y - 1); i++) {
        gameboard.board[x][i].value = ship.name;
      }
    },
    displace: function displace(x, y, ship) {
      for (var i = y; i <= ship.length + (y - 1); i++) {
        gameboard.board[x][i].value = null;
      }
    },
    receiveAttack: function receiveAttack(x, y) {
      if (gameboard.board[x][y].value !== null) {
        gameboard.board[x][y].hit = true;
        var targetShipName = gameboard.board[x][y].value;
        var foundShip = gameboard.shipStore.find(function (el) {
          return el.name === targetShipName;
        });
        var counter = 0;

        for (var _i = 0, _Object$values = Object.values(gameboard.board[x]); _i < _Object$values.length; _i++) {
          var element = _Object$values[_i];

          if (element.value !== targetShipName) {
            counter++;
          } else break;
        }

        foundShip.hit(y - counter);

        if (_index__WEBPACK_IMPORTED_MODULE_0__.activePlayer === _index__WEBPACK_IMPORTED_MODULE_0__.player1) {
          document.querySelector("[data-a='".concat(x, "'][data-b='").concat(y, "']")).classList.add('hit');
          document.querySelector("[data-a='".concat(x, "'][data-b='").concat(y, "']")).classList.add("com-".concat(foundShip.name));

          if (foundShip.isSunk === true) {
            document.querySelectorAll(".com-".concat(foundShip.name)).forEach(function (el) {
              return el.style.border = '1px solid red', el.style.backgroundColor = 'rgba(255,0,0,.05)';
            });
          }
        } else {
          document.querySelector("[data-x='".concat(x, "'][data-y='").concat(y, "']")).classList.add('hit');

          if (foundShip.isSunk === true) {
            document.querySelector(".".concat(foundShip.name, "-container")).style.border = 'none';
            Array.from(document.querySelector(".".concat(foundShip.name, "-container")).children).forEach(function (el) {
              return el.style.border = '1px solid red';
            });
            document.querySelector(".".concat(foundShip.name, "-container")).style.backgroundColor = 'rgba(255,0,0,.05)';
          }
        }

        return true;
      } else if (gameboard.board[x][y].value === null) {
        gameboard.board[x][y].hit = null; // missed attack

        if (_index__WEBPACK_IMPORTED_MODULE_0__.activePlayer === _index__WEBPACK_IMPORTED_MODULE_0__.player1) document.querySelector("[data-a='".concat(x, "'][data-b='").concat(y, "']")).classList.add('attack');else document.querySelector("[data-x='".concat(x, "'][data-y='").concat(y, "']")).classList.add('attack');
        return false;
      }
    },
    areShipsSunk: function areShipsSunk() {
      if (gameboard.shipStore.every(function (ship) {
        return ship.isSunk === true;
      })) {
        return true;
      } else return false;
    }
  });
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchPlayer": () => (/* binding */ switchPlayer),
/* harmony export */   "activePlayer": () => (/* binding */ activePlayer),
/* harmony export */   "player1": () => (/* binding */ player1),
/* harmony export */   "player2": () => (/* binding */ player2),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard),
/* harmony export */   "carrier": () => (/* binding */ carrier),
/* harmony export */   "battleship": () => (/* binding */ battleship),
/* harmony export */   "destroyer": () => (/* binding */ destroyer),
/* harmony export */   "submarine": () => (/* binding */ submarine),
/* harmony export */   "patrol": () => (/* binding */ patrol),
/* harmony export */   "patrolContainer": () => (/* binding */ patrolContainer),
/* harmony export */   "submarineContainer": () => (/* binding */ submarineContainer),
/* harmony export */   "destroyerContainer": () => (/* binding */ destroyerContainer),
/* harmony export */   "battleshipContainer": () => (/* binding */ battleshipContainer),
/* harmony export */   "carrierContainer": () => (/* binding */ carrierContainer)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _src_random__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/random */ "./src/random.js");
/* harmony import */ var _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dragAndDrop.js */ "./src/dragAndDrop.js");






var cells = document.querySelectorAll("[data-a][data-b]");
var random = document.querySelector('.randomise');
var reset = document.querySelector('.reset');
var play = document.querySelector('.play');
var patrolContainer = document.querySelector('.patrol-container');
var submarineContainer = document.querySelector('.submarine-container');
var destroyerContainer = document.querySelector('.destroyer-container');
var battleshipContainer = document.querySelector('.battleship-container');
var carrierContainer = document.querySelector('.carrier-container');
var start = false;
random.addEventListener('click', placeRandom);

function placeRandom() {
  player2.board.board.map(function (el) {
    return el.map(function (el) {
      return el.value = null;
    });
  });
  removeClassFromCells();
  (0,_src_random__WEBPACK_IMPORTED_MODULE_4__.placeShipRandom)(player2, carrier, battleship, destroyer, submarine, patrol);
}

function removeClassFromCells() {
  document.querySelectorAll('.cell').forEach(function (cell) {
    return cell.classList.remove('is-taken');
  });
}

reset.addEventListener('click', function () {
  player2.board.board.map(function (el) {
    return el.map(function (el) {
      return el.value = null;
    });
  });
  player2.board.board.map(function (el) {
    return el.map(function (el) {
      return el.hit = false;
    });
  });
  player2.board.shipStore.map(function (el) {
    return el.shipArray.map(function (el) {
      return el.hit = false;
    });
  });
  player2.board.place(0, 4, patrol);
  player2.board.place(3, 1, submarine);
  player2.board.place(5, 6, destroyer);
  player2.board.place(7, 0, battleship);
  player2.board.place(9, 5, carrier); //////////////////////////////////////

  document.querySelector("[data-x='0'][data-y='4']").append(patrolContainer);
  document.querySelector("[data-x='3'][data-y='1']").append(submarineContainer);
  document.querySelector("[data-x='5'][data-y='6']").append(destroyerContainer);
  document.querySelector("[data-x='7'][data-y='0']").append(battleshipContainer);
  document.querySelector("[data-x='9'][data-y='5']").append(carrierContainer);
  player1.board.board.map(function (el) {
    return el.map(function (el) {
      return el.value = null;
    });
  });
  player1.board.board.map(function (el) {
    return el.map(function (el) {
      return el.hit = false;
    });
  });
  player1.board.shipStore.map(function (el) {
    return el.shipArray.map(function (el) {
      return el.hit = false;
    });
  });
  (0,_src_random__WEBPACK_IMPORTED_MODULE_4__.placeShipRandom)(player1, carrier2, battleship2, destroyer2, submarine2, patrol2);
  document.querySelectorAll('.cell').forEach(function (cell) {
    return cell.classList.remove('attack', 'hit');
  });
  document.querySelectorAll('.enemy-board .cell').forEach(function (cell) {
    return cell.classList.remove('attack', 'hit', 'com-patrol', 'com-submarine', 'com-destroyer', 'com-battleship', 'com-carrier'), cell.style.backgroundColor = '#fff', cell.style.border = 'none';
  });
  document.querySelectorAll('.ship').forEach(function (ship) {
    return ship.style.backgroundColor = 'rgba(0, 0, 255, 0.05)', ship.style.border = '2px solid #00f';
  });
  document.querySelectorAll('.sub-ship').forEach(function (ship) {
    return ship.style.border = 'none';
  });
  removeListener();
  (0,_src_random__WEBPACK_IMPORTED_MODULE_4__.pairArrayRefresher)();
  random.addEventListener('click', placeRandom);
  setDraggable(true, 'move');
  document.querySelector('.play').style.display = '';
  removeClassFromCells();
  addClassToCells();
  document.querySelector('.enemy-board').classList.remove('active');
  document.querySelector('.player-board').classList.remove('active');
});

function addClassToCells() {
  document.querySelector("[data-x='0'][data-y='4']").classList.add('is-taken');
  document.querySelector("[data-x='0'][data-y='5']").classList.add('is-taken');
  document.querySelector("[data-x='3'][data-y='1']").classList.add('is-taken');
  document.querySelector("[data-x='3'][data-y='2']").classList.add('is-taken');
  document.querySelector("[data-x='3'][data-y='3']").classList.add('is-taken');
  document.querySelector("[data-x='5'][data-y='6']").classList.add('is-taken');
  document.querySelector("[data-x='5'][data-y='7']").classList.add('is-taken');
  document.querySelector("[data-x='5'][data-y='8']").classList.add('is-taken');
  document.querySelector("[data-x='7'][data-y='0']").classList.add('is-taken');
  document.querySelector("[data-x='7'][data-y='1']").classList.add('is-taken');
  document.querySelector("[data-x='7'][data-y='2']").classList.add('is-taken');
  document.querySelector("[data-x='7'][data-y='3']").classList.add('is-taken');
  document.querySelector("[data-x='9'][data-y='5']").classList.add('is-taken');
  document.querySelector("[data-x='9'][data-y='6']").classList.add('is-taken');
  document.querySelector("[data-x='9'][data-y='7']").classList.add('is-taken');
  document.querySelector("[data-x='9'][data-y='8']").classList.add('is-taken');
  document.querySelector("[data-x='9'][data-y='9']").classList.add('is-taken');
}

play.addEventListener('click', function () {
  activePlayer = player1;
  cells.forEach(function (cell) {
    return cell.addEventListener('click', game);
  });
  random.removeEventListener('click', function () {
    (0,_src_random__WEBPACK_IMPORTED_MODULE_4__.placeShipRandom)(player2, carrier, battleship, destroyer, submarine, patrol);
  });
  random.removeEventListener('click', placeRandom);
  setDraggable(false, 'default');
  document.querySelector('.play').style.display = 'none';
  document.querySelector('.text').textContent = "The game started, your turn.";
  document.querySelector('.player-board').classList.add('active');
});
var playerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)();
var enemyBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)();
var player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__.Player)('player1', enemyBoard);
var player2 = (0,_player__WEBPACK_IMPORTED_MODULE_3__.Player)('player2', playerBoard);
var activePlayer = player1;
var carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(5, 'carrier');
var battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, 'battleship');
var destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 'destroyer');
var submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 'submarine');
var patrol = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 'patrol');
player2.board.place(0, 4, patrol);
player2.board.place(3, 1, submarine);
player2.board.place(5, 6, destroyer);
player2.board.place(7, 0, battleship);
player2.board.place(9, 5, carrier);
switchPlayer();
var carrier2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(5, 'carrier');
var battleship2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, 'battleship');
var destroyer2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 'destroyer');
var submarine2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 'submarine');
var patrol2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 'patrol');
(0,_src_random__WEBPACK_IMPORTED_MODULE_4__.placeShipRandom)(player1, carrier2, battleship2, destroyer2, submarine2, patrol2);
switchPlayer();

function game(e) {
  document.querySelector('.text').textContent = "Opponent's turn.";
  player1.attack(e.target.dataset.a, e.target.dataset.b);
  document.querySelector('.enemy-board').classList.add('active');
  document.querySelector('.player-board').classList.remove('active');
  e.target.removeEventListener('click', game);
  removeListener();

  if (player1.board.areShipsSunk() === false && player2.board.areShipsSunk() === false) {
    setTimeout(function () {
      (0,_src_random__WEBPACK_IMPORTED_MODULE_4__.randomAttack)(0, _src_random__WEBPACK_IMPORTED_MODULE_4__.pairArray.length - 1, activePlayer);

      if (player2.board.areShipsSunk() === true) {
        document.querySelector('.text').textContent = "Game over. You lose.";
        removeListener();
        document.querySelector('.enemy-board').classList.remove('active');
        document.querySelector('.player-board').classList.remove('active');
      }

      setTimeout(function () {
        document.querySelector('.enemy-board').classList.remove('active');
        document.querySelector('.player-board').classList.add('active');
        cells.forEach(function (cell) {
          if (!cell.classList.contains('hit') && !cell.classList.contains('attack')) {
            cell.addEventListener('click', game);
          }
        });
        document.querySelector('.text').textContent = "Your turn.";
      }, 500);
      switchPlayer();
    }, 1000);
    switchPlayer();
  }

  if (player1.board.areShipsSunk() === true) {
    document.querySelector('.text').textContent = "Game over. Congratulations, you won!";
    removeListener();
    document.querySelector('.enemy-board').classList.remove('active');
    document.querySelector('.player-board').classList.remove('active');
  }
}

function removeListener() {
  cells.forEach(function (cell) {
    return cell.removeEventListener('click', game);
  });
}

function switchPlayer() {
  if (activePlayer === player1) activePlayer = player2;else activePlayer = player1;
}

function setDraggable(value, cursor) {
  document.querySelectorAll('.ship').forEach(function (ship) {
    return ship.setAttribute('draggable', value), ship.style.cursor = "".concat(cursor);
  });
}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
var Player = function Player(name, board) {
  var player = {
    name: name
  };
  var enemyBoard = board;
  return Object.freeze({
    get name() {
      return player.name;
    },

    get board() {
      return enemyBoard;
    },

    attack: function attack(x, y) {
      enemyBoard.receiveAttack(x, y);
    }
  });
};



/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomAttack": () => (/* binding */ randomAttack),
/* harmony export */   "pairArray": () => (/* binding */ pairArray),
/* harmony export */   "placeShipRandom": () => (/* binding */ placeShipRandom),
/* harmony export */   "pairArrayRefresher": () => (/* binding */ pairArrayRefresher)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");

var pairArray = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9], [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9], [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9]];

function randomAttack(min, max, player) {
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  player.attack(pairArray[random][0], pairArray[random][1]);
  pairArray.splice(random, 1);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function filterBoard(player) {
  return player.board.board.map(function (el) {
    return el.findIndex(function (el) {
      return el.value !== null;
    });
  }).reduce(function (r, n, i) {
    n === -1 && r.push(i);
    return r;
  }, []);
}

function addClassToCell(random1, random2, shipName) {
  var counter = random2;

  for (var i = 0; i < shipName.length; i++) {
    document.querySelector("[data-x='".concat(random1, "'][data-y='").concat(counter, "']")).classList.add('is-taken');
    counter++;
  }
}

function placeShipRandom(player, carrier, battleship, destroyer, submarine, patrol) {
  var freeRow;
  var randomNumberForCarrier1 = randomNumber(0, 9);
  var randomNumberForCarrier2 = randomNumber(0, 5);
  player.board.place(randomNumberForCarrier1, randomNumberForCarrier2, carrier);

  if (player === _index_js__WEBPACK_IMPORTED_MODULE_0__.player2) {
    document.querySelector("[data-x='".concat(randomNumberForCarrier1, "'][data-y='").concat(randomNumberForCarrier2, "']")).append(_index_js__WEBPACK_IMPORTED_MODULE_0__.carrierContainer);
    addClassToCell(randomNumberForCarrier1, randomNumberForCarrier2, carrier);
  }

  freeRow = filterBoard(player);
  var randomNumberForBattleship1 = randomNumber(0, 8);
  var randomNumberForBattleship2 = randomNumber(0, 6);
  player.board.place(freeRow[randomNumberForBattleship1], randomNumberForBattleship2, battleship);

  if (player === _index_js__WEBPACK_IMPORTED_MODULE_0__.player2) {
    document.querySelector("[data-x='".concat(freeRow[randomNumberForBattleship1], "'][data-y='").concat(randomNumberForBattleship2, "']")).append(_index_js__WEBPACK_IMPORTED_MODULE_0__.battleshipContainer);
    addClassToCell(freeRow[randomNumberForBattleship1], randomNumberForBattleship2, battleship);
  }

  freeRow = filterBoard(player);
  var randomNumberForDestroyer1 = randomNumber(0, 7);
  var randomNumberForDestroyer2 = randomNumber(0, 7);
  player.board.place(freeRow[randomNumberForDestroyer1], randomNumberForDestroyer2, destroyer);

  if (player === _index_js__WEBPACK_IMPORTED_MODULE_0__.player2) {
    document.querySelector("[data-x='".concat(freeRow[randomNumberForDestroyer1], "'][data-y='").concat(randomNumberForDestroyer2, "']")).append(_index_js__WEBPACK_IMPORTED_MODULE_0__.destroyerContainer);
    addClassToCell(freeRow[randomNumberForDestroyer1], randomNumberForDestroyer2, destroyer);
  }

  freeRow = filterBoard(player);
  var randomNumberForSubmarine1 = randomNumber(0, 6);
  var randomNumberForSubmarine2 = randomNumber(0, 7);
  player.board.place(freeRow[randomNumberForSubmarine1], randomNumberForSubmarine2, submarine);

  if (player === _index_js__WEBPACK_IMPORTED_MODULE_0__.player2) {
    document.querySelector("[data-x='".concat(freeRow[randomNumberForSubmarine1], "'][data-y='").concat(randomNumberForSubmarine2, "']")).append(_index_js__WEBPACK_IMPORTED_MODULE_0__.submarineContainer);
    addClassToCell(freeRow[randomNumberForSubmarine1], randomNumberForSubmarine2, submarine);
  }

  freeRow = filterBoard(player);
  var randomNumberForPatrol1 = randomNumber(0, 5);
  var randomNumberForPatrol2 = randomNumber(0, 8);
  player.board.place(freeRow[randomNumberForPatrol1], randomNumberForPatrol2, patrol);

  if (player === _index_js__WEBPACK_IMPORTED_MODULE_0__.player2) {
    document.querySelector("[data-x='".concat(freeRow[randomNumberForPatrol1], "'][data-y='").concat(randomNumberForPatrol2, "']")).append(_index_js__WEBPACK_IMPORTED_MODULE_0__.patrolContainer);
    addClassToCell(freeRow[randomNumberForPatrol1], randomNumberForPatrol2, patrol);
  }
}

function pairArrayRefresher() {
  pairArray = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9], [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9], [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9]];
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
var Ship = function Ship(length, name) {
  var shipArray = Array.from(new Array(length), function () {
    return {
      value: name,
      hit: false
    };
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

    hit: function hit(index) {
      shipArray[index].hit = true;
    },

    get isSunk() {
      if (shipArray.every(function (el) {
        return el.hit === true;
      })) return true;else return false;
    }

  });
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nhtml {\n  font-size: 62.5%;\n  color: #333;\n  font-family: 'PT Sans', sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 10rem 1fr;\n  grid-template-rows: 10rem 1fr;\n  font-size: 2.4rem;\n}\n\nnav {\n  border-right: 2px solid #485fc7;\n  grid-row: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\nh1 {\n  margin-top: 3.5rem;\n  font-weight: bold;\n  font-size: 1.6rem;\n}\n\nion-icon {\n  cursor: pointer;\n  color: #333;\n}\n\nion-icon:hover {\n  color: #485fc7;\n  transition: all 0.3s ease-out;\n}\n\nmenu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n}\n\n.text-container {\n  width: 40%;\n}\n\np {\n  background-color: #f2f4f8;\n  font-size: 1.8rem;\n  padding: 1rem 2rem;\n  border-radius: 6px;\n}\n\nmain {\n  background-color: #fff;\n}\n\n.boards {\n  display: grid;\n  column-gap: 5rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 12rem;\n  justify-items: center;\n  align-items: center;\n  margin-top: 5rem;\n}\n\n.player-board {\n  margin-left: 12rem;\n}\n\n.enemy-board {\n  margin-right: 12rem;\n  position: relative;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  padding: 5px 10px;\n}\n\n.facility {\n  align-self: flex-start;\n  margin: 3rem 0 0 10rem;\n}\n\n.ship div {\n  width: 3rem;\n  height: 3rem;\n}\n.ship {\n  background-color: whitesmoke;\n  position: absolute;\n  top: -0.5rem;\n  left: -0.6rem;\n  border: 2px solid #00f;\n  background-color: rgba(0, 0, 255, 0.05);\n  display: flex;\n  margin: 5px;\n  border: 2px solid #00f;\n  cursor: move;\n  z-index: 2;\n  gap: 1.5px;\n}\n\n.patrol-container {\n  width: 6.4rem;\n  height: 3rem;\n}\n\n.submarine-container {\n  width: 9.4rem;\n  height: 3rem;\n}\n\n.destroyer-container {\n  width: 9.4rem;\n  height: 3rem;\n}\n\n.battleship-container {\n  width: 12.6rem;\n  height: 3rem;\n}\n\n.carrier-container {\n  width: 15.6rem;\n  height: 3rem;\n}\n\ntable,\nth,\ntd {\n  border-collapse: separate;\n  border-spacing: 1px;\n  border-width: thin;\n  position: relative;\n}\ntable {\n  background: #b4b4ff;\n}\ntr {\n  background: #fff;\n}\n\n.label {\n  font-size: 1.2rem;\n  text-align: center;\n  margin-top: 1rem;\n}\n\n.marker__row {\n  left: -3rem;\n  width: 2rem;\n  text-align: right;\n  top: 1rem;\n  height: 1rem;\n  color: #333;\n}\n\n.marker__col {\n  top: -2rem;\n  left: 1.3rem;\n  width: 100%;\n}\n\n.marker {\n  position: absolute;\n  font-size: 11px;\n}\n\n.play {\n  position: absolute;\n  top: 31%;\n  left: 10%;\n  border: 1px solid #d6d6d6;\n  background: #d5efd6;\n  background: linear-gradient(\n    to bottom,\n    rgba(225, 250, 225, 1) 0,\n    rgba(195, 222, 197, 1) 100%\n  );\n  margin: 1em 0 0;\n  padding: 0.2em 0.8em;\n  font-size: 2rem;\n  box-shadow: 0 2px 6px rgb(0 0 0 / 25%);\n  line-height: 1;\n  font-family: inherit;\n  cursor: pointer;\n  display: inline-block;\n}\n\n.active {\n  opacity: 0.4;\n}\n\n.hit {\n  display: flex;\n  position: relative;\n  height: 30px;\n  width: 30px;\n  border-color: red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit::before,\n.hit::after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 2px;\n  background-color: red;\n}\n\n.hit::before {\n  transform: rotate(45deg);\n}\n\n.hit::after {\n  transform: rotate(-45deg);\n}\n\n.attack {\n  display: flex;\n  position: relative;\n  height: 30px;\n  width: 30px;\n  border-color: red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #f2f4f8 !important;\n}\n\n.attack::before {\n  content: '';\n  display: inline-block;\n  width: 4px;\n  height: 4px;\n  -moz-border-radius: 7.5px;\n  -webkit-border-radius: 7.5px;\n  border-radius: 7.5px;\n  background-color: #333;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-color: #fff;\n  border: 1px solid #dbdbdb;\n  border-radius: 0.375em;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: #0034ab;\n  cursor: pointer;\n  display: inline-flex;\n  height: 2.5em;\n  justify-content: center;\n  line-height: 1.5;\n  padding: calc(0.5em - 1px) 1em;\n  position: relative;\n  text-align: center;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: top;\n  white-space: nowrap;\n}\n\nbutton:active {\n  border-color: #4a4a4a;\n  outline: 0;\n}\n\nbutton:focus {\n  border-color: #485fc7;\n  outline: 0;\n}\n\nbutton:hover {\n  border-color: #b5b5b5;\n  color: rgba(12, 97, 9, 0.938);\n  transition: all 0.3s ease-out;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nhtml {\n  font-size: 62.5%;\n  color: #333;\n  font-family: 'PT Sans', sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 10rem 1fr;\n  grid-template-rows: 10rem 1fr;\n  font-size: 2.4rem;\n}\n\nnav {\n  border-right: 2px solid #485fc7;\n  grid-row: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\nh1 {\n  margin-top: 3.5rem;\n  font-weight: bold;\n  font-size: 1.6rem;\n}\n\nion-icon {\n  cursor: pointer;\n  color: #333;\n}\n\nion-icon:hover {\n  color: #485fc7;\n  transition: all 0.3s ease-out;\n}\n\nmenu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n}\n\n.text-container {\n  width: 40%;\n}\n\np {\n  background-color: #f2f4f8;\n  font-size: 1.8rem;\n  padding: 1rem 2rem;\n  border-radius: 6px;\n}\n\nmain {\n  background-color: #fff;\n}\n\n.boards {\n  display: grid;\n  column-gap: 5rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 12rem;\n  justify-items: center;\n  align-items: center;\n  margin-top: 5rem;\n}\n\n.player-board {\n  margin-left: 12rem;\n}\n\n.enemy-board {\n  margin-right: 12rem;\n  position: relative;\n}\n\n.cell {\n  width: 3rem;\n  height: 3rem;\n  padding: 5px 10px;\n}\n\n.facility {\n  align-self: flex-start;\n  margin: 3rem 0 0 10rem;\n}\n\n.ship div {\n  width: 3rem;\n  height: 3rem;\n}\n.ship {\n  background-color: whitesmoke;\n  position: absolute;\n  top: -0.5rem;\n  left: -0.6rem;\n  border: 2px solid #00f;\n  background-color: rgba(0, 0, 255, 0.05);\n  display: flex;\n  margin: 5px;\n  border: 2px solid #00f;\n  cursor: move;\n  z-index: 2;\n  gap: 1.5px;\n}\n\n.patrol-container {\n  width: 6.4rem;\n  height: 3rem;\n}\n\n.submarine-container {\n  width: 9.4rem;\n  height: 3rem;\n}\n\n.destroyer-container {\n  width: 9.4rem;\n  height: 3rem;\n}\n\n.battleship-container {\n  width: 12.6rem;\n  height: 3rem;\n}\n\n.carrier-container {\n  width: 15.6rem;\n  height: 3rem;\n}\n\ntable,\nth,\ntd {\n  border-collapse: separate;\n  border-spacing: 1px;\n  border-width: thin;\n  position: relative;\n}\ntable {\n  background: #b4b4ff;\n}\ntr {\n  background: #fff;\n}\n\n.label {\n  font-size: 1.2rem;\n  text-align: center;\n  margin-top: 1rem;\n}\n\n.marker__row {\n  left: -3rem;\n  width: 2rem;\n  text-align: right;\n  top: 1rem;\n  height: 1rem;\n  color: #333;\n}\n\n.marker__col {\n  top: -2rem;\n  left: 1.3rem;\n  width: 100%;\n}\n\n.marker {\n  position: absolute;\n  font-size: 11px;\n}\n\n.play {\n  position: absolute;\n  top: 31%;\n  left: 10%;\n  border: 1px solid #d6d6d6;\n  background: #d5efd6;\n  background: linear-gradient(\n    to bottom,\n    rgba(225, 250, 225, 1) 0,\n    rgba(195, 222, 197, 1) 100%\n  );\n  margin: 1em 0 0;\n  padding: 0.2em 0.8em;\n  font-size: 2rem;\n  box-shadow: 0 2px 6px rgb(0 0 0 / 25%);\n  line-height: 1;\n  font-family: inherit;\n  cursor: pointer;\n  display: inline-block;\n}\n\n.active {\n  opacity: 0.4;\n}\n\n.hit {\n  display: flex;\n  position: relative;\n  height: 30px;\n  width: 30px;\n  border-color: red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit::before,\n.hit::after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 2px;\n  background-color: red;\n}\n\n.hit::before {\n  transform: rotate(45deg);\n}\n\n.hit::after {\n  transform: rotate(-45deg);\n}\n\n.attack {\n  display: flex;\n  position: relative;\n  height: 30px;\n  width: 30px;\n  border-color: red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #f2f4f8 !important;\n}\n\n.attack::before {\n  content: '';\n  display: inline-block;\n  width: 4px;\n  height: 4px;\n  -moz-border-radius: 7.5px;\n  -webkit-border-radius: 7.5px;\n  border-radius: 7.5px;\n  background-color: #333;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-color: #fff;\n  border: 1px solid #dbdbdb;\n  border-radius: 0.375em;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: #0034ab;\n  cursor: pointer;\n  display: inline-flex;\n  height: 2.5em;\n  justify-content: center;\n  line-height: 1.5;\n  padding: calc(0.5em - 1px) 1em;\n  position: relative;\n  text-align: center;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: top;\n  white-space: nowrap;\n}\n\nbutton:active {\n  border-color: #4a4a4a;\n  outline: 0;\n}\n\nbutton:focus {\n  border-color: #485fc7;\n  outline: 0;\n}\n\nbutton:hover {\n  border-color: #b5b5b5;\n  color: rgba(12, 97, 9, 0.938);\n  transition: all 0.3s ease-out;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBTkYsRUFPRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FQRixFQVFFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQVJGLEVBU0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBVEYsRUFVRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FWRixDQXpCSyxFQXFDTCxDQUNFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQURGLEVBRUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBRkYsRUFHRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FIRixFQUlFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQUpGLEVBS0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBTEYsRUFNRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FORixFQU9FO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQVBGLEVBUUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBUkYsRUFTRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FURixFQVVFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQVZGLENBckNLLEVBaURMLENBQ0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBREYsRUFFRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FGRixFQUdFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQUhGLEVBSUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBSkYsRUFLRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FMRixFQU1FO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQU5GLEVBT0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBUEYsRUFRRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FSRixFQVNFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQVRGLEVBVUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBVkYsQ0FqREssRUE2REwsQ0FDRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FERixFQUVFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQUZGLEVBR0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBSEYsRUFJRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FKRixFQUtFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQUxGLEVBTUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBTkYsRUFPRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FQRixFQVFFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQVJGLEVBU0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBVEYsRUFVRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FWRixDQTdESyxFQXlFTCxDQUNFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQURGLEVBRUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBRkYsRUFHRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FIRixFQUlFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQUpGLEVBS0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBTEYsRUFNRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FORixFQU9FO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQVBGLEVBUUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBUkYsRUFTRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FURixFQVVFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQVZGLENBekVLLEVBcUZMLENBQ0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBREYsRUFFRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FGRixFQUdFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQUhGLEVBSUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBSkYsRUFLRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FMRixFQU1FO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQU5GLEVBT0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBUEYsRUFRRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FSRixFQVNFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQVRGLEVBVUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBVkYsQ0FyRkssRUFpR0wsQ0FDRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FERixFQUVFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQUZGLEVBR0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBSEYsRUFJRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FKRixFQUtFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQUxGLEVBTUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBTkYsRUFPRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FQRixFQVFFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQVJGLEVBU0U7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBVEYsRUFVRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FWRixDQWpHSyxFQTZHTCxDQUNFO0FBQUVELE1BQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLE1BQUFBLEdBQUcsRUFBRTtBQUFwQixLQURGLEVBRUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsTUFBQUEsR0FBRyxFQUFFO0FBQXBCLEtBRkYsRUFHRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxNQUFBQSxHQUFHLEVBQUU7QUFBcEIsS0FI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Q0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kcmFnQW5kRHJvcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmFuZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHBsYXllcjIsXG4gIGNhcnJpZXIsXG4gIGJhdHRsZXNoaXAsXG4gIGRlc3Ryb3llcixcbiAgc3VibWFyaW5lLFxuICBwYXRyb2wsXG59IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXhdW2RhdGEteV1gKTtcbmNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcicpO1xuY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5cbmNvbnN0IHRhcmdldCA9IHtcbiAgc2hpcE5hbWVXaXRoSWQ6ICcnLFxuICBzaGlwOiAnJyxcbiAgc2hpcExlbmd0aDogMCxcbn07XG5cbmxldCBzaGlwSW5kZXg7XG5sZXQgcGxhY2VDaGVjaztcblxuc2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0U2hpcCkpO1xuXG5ib2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBncmFwU2hpcCk7XG5cbmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXJTaGlwKTtcblxuZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3ZlclNoaXApO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlclNoaXApO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZVNoaXApO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wU2hpcCk7XG59XG5cbmZ1bmN0aW9uIGdyYXBTaGlwKGUpIHtcbiAgdGFyZ2V0WydzaGlwTmFtZVdpdGhJZCddID0gZS50YXJnZXQuaWQ7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyU2hpcChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0VudGVyU2hpcChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0xlYXZlU2hpcChlKSB7fVxuXG5mdW5jdGlvbiBkcmFnU3RhcnRTaGlwKGUpIHtcbiAgdGFyZ2V0WydzaGlwJ10gPSBlLnRhcmdldDtcbiAgdGFyZ2V0WydzaGlwTGVuZ3RoJ10gPSBlLnRhcmdldC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgc2hpcEluZGV4ID0gcGFyc2VJbnQodGFyZ2V0LnNoaXBOYW1lV2l0aElkLnNsaWNlKC0xKSk7XG5cbiAgaWYgKCFlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXBzLWNvbnRhaW5lcicpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQueTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXg9JyR7ZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0Lnh9J11bZGF0YS15PScke2NvdW50ZXJ9J11gXG4gICAgICAgIClcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXRha2VuJyk7XG5cbiAgICAgIGNvdW50ZXIrKztcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LnNoaXBOYW1lV2l0aElkLnNsaWNlKDAsIC0yKSA9PT0gJ2NhcnJpZXInKVxuICAgICAgZGlzcGxhY2VTaGlwKGUsIGNhcnJpZXIpO1xuICAgIGVsc2UgaWYgKHRhcmdldC5zaGlwTmFtZVdpdGhJZC5zbGljZSgwLCAtMikgPT09ICdiYXR0bGVzaGlwJylcbiAgICAgIGRpc3BsYWNlU2hpcChlLCBiYXR0bGVzaGlwKTtcbiAgICBlbHNlIGlmICh0YXJnZXQuc2hpcE5hbWVXaXRoSWQuc2xpY2UoMCwgLTIpID09PSAnZGVzdHJveWVyJylcbiAgICAgIGRpc3BsYWNlU2hpcChlLCBkZXN0cm95ZXIpO1xuICAgIGVsc2UgaWYgKHRhcmdldC5zaGlwTmFtZVdpdGhJZC5zbGljZSgwLCAtMikgPT09ICdzdWJtYXJpbmUnKVxuICAgICAgZGlzcGxhY2VTaGlwKGUsIHN1Ym1hcmluZSk7XG4gICAgZWxzZSBpZiAodGFyZ2V0LnNoaXBOYW1lV2l0aElkLnNsaWNlKDAsIC0yKSA9PT0gJ3BhdHJvbCcpXG4gICAgICBkaXNwbGFjZVNoaXAoZSwgcGF0cm9sKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGFjZVNoaXAoZSwgc2hpcE5hbWUpIHtcbiAgcGxheWVyMi5ib2FyZC5kaXNwbGFjZShcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQueCxcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQueSxcbiAgICBzaGlwTmFtZVxuICApO1xufVxuXG5mdW5jdGlvbiBkcm9wU2hpcChlKSB7XG4gIGxldCBjb3VudGVyID0gZS50YXJnZXQuZGF0YXNldC55IC0gc2hpcEluZGV4O1xuXG4gIGlmIChcbiAgICB0YXJnZXQuc2hpcE5hbWVXaXRoSWQuc3Vic3RyaW5nKC0xLCA3KSA9PT0gJ2NhcnJpZXInICYmXG4gICAgY291bnRlciA8IDYgJiZcbiAgICBjb3VudGVyID49IDBcbiAgKSB7XG4gICAgcGxhY2VTaGlwKGUsIGNvdW50ZXIpO1xuICAgIGlmIChwbGFjZUNoZWNrKSB7XG4gICAgICBwbGFjZVNoaXBUbzJEQXJyYXkoZSwgY2Fycmllcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHRhcmdldC5zaGlwTmFtZVdpdGhJZC5zdWJzdHJpbmcoLTEsIDEwKSA9PT0gJ2JhdHRsZXNoaXAnICYmXG4gICAgY291bnRlciA8IDcgJiZcbiAgICBjb3VudGVyID49IDBcbiAgKSB7XG4gICAgcGxhY2VTaGlwKGUsIGNvdW50ZXIpO1xuICAgIGlmIChwbGFjZUNoZWNrKSB7XG4gICAgICBwbGFjZVNoaXBUbzJEQXJyYXkoZSwgYmF0dGxlc2hpcCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHRhcmdldC5zaGlwTmFtZVdpdGhJZC5zdWJzdHJpbmcoLTEsIDkpID09PSAnZGVzdHJveWVyJyAmJlxuICAgIGNvdW50ZXIgPCA4ICYmXG4gICAgY291bnRlciA+PSAwXG4gICkge1xuICAgIHBsYWNlU2hpcChlLCBjb3VudGVyKTtcbiAgICBpZiAocGxhY2VDaGVjaykge1xuICAgICAgcGxhY2VTaGlwVG8yREFycmF5KGUsIGRlc3Ryb3llcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHRhcmdldC5zaGlwTmFtZVdpdGhJZC5zdWJzdHJpbmcoLTEsIDkpID09PSAnc3VibWFyaW5lJyAmJlxuICAgIGNvdW50ZXIgPCA4ICYmXG4gICAgY291bnRlciA+PSAwXG4gICkge1xuICAgIHBsYWNlU2hpcChlLCBjb3VudGVyKTtcbiAgICBpZiAocGxhY2VDaGVjaykge1xuICAgICAgcGxhY2VTaGlwVG8yREFycmF5KGUsIHN1Ym1hcmluZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHRhcmdldC5zaGlwTmFtZVdpdGhJZC5zdWJzdHJpbmcoLTEsIDYpID09PSAncGF0cm9sJyAmJlxuICAgIGNvdW50ZXIgPCA5ICYmXG4gICAgY291bnRlciA+PSAwXG4gICkge1xuICAgIHBsYWNlU2hpcChlLCBjb3VudGVyKTtcbiAgICBpZiAocGxhY2VDaGVjaykge1xuICAgICAgcGxhY2VTaGlwVG8yREFycmF5KGUsIHBhdHJvbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcChlLCBjb3VudGVyKSB7XG4gIGxldCBjaGVja0FycmF5ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXQuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoZWNrID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke2UudGFyZ2V0LmRhdGFzZXQueH0nXVtkYXRhLXk9JyR7Y291bnRlcn0nXWApXG4gICAgICAuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy10YWtlbicpO1xuXG4gICAgY2hlY2tBcnJheS5wdXNoKGNoZWNrKTtcbiAgICBjb3VudGVyKys7XG4gIH1cbiAgaWYgKGNoZWNrQXJyYXkuZXZlcnkoZWwgPT4gZWwgPT09IGZhbHNlKSkge1xuICAgIHBsYWNlQ2hlY2sgPSB0cnVlO1xuICAgIGxldCBjb3VudGVyMiA9IGUudGFyZ2V0LmRhdGFzZXQueSAtIHNoaXBJbmRleDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS14PScke2UudGFyZ2V0LmRhdGFzZXQueH0nXVtkYXRhLXk9JyR7XG4gICAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LnkgLSBzaGlwSW5kZXhcbiAgICAgICAgICB9J11gXG4gICAgICAgIClcbiAgICAgICAgLmFwcGVuZCh0YXJnZXQuc2hpcCk7XG4gICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke2UudGFyZ2V0LmRhdGFzZXQueH0nXVtkYXRhLXk9JyR7Y291bnRlcjJ9J11gKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZCgnaXMtdGFrZW4nKTtcblxuICAgICAgY291bnRlcjIrKztcbiAgICB9XG4gIH0gZWxzZSBwbGFjZUNoZWNrID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcFRvMkRBcnJheShlLCBzaGlwTmFtZSkge1xuICBwbGF5ZXIyLmJvYXJkLnBsYWNlKFxuICAgIGUudGFyZ2V0LmRhdGFzZXQueCxcbiAgICBlLnRhcmdldC5kYXRhc2V0LnkgLSBzaGlwSW5kZXgsXG4gICAgc2hpcE5hbWVcbiAgKTtcbn1cblxuZXhwb3J0IHsgdGFyZ2V0IH07XG4iLCJpbXBvcnQgeyBhY3RpdmVQbGF5ZXIsIHBsYXllcjEgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IHRhcmdldCB9IGZyb20gJy4vZHJhZ0FuZERyb3AnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBnYW1lYm9hcmQgPSB7XG4gICAgYm9hcmQ6IFtcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHZhbHVlOiBudWxsLCBoaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgdmFsdWU6IG51bGwsIGhpdDogZmFsc2UgfSxcbiAgICAgICAgeyB2YWx1ZTogbnVsbCwgaGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICBdLFxuXG4gICAgc2hpcFN0b3JlOiBbXSxcbiAgfTtcblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIGdhbWVib2FyZC5ib2FyZDtcbiAgICB9LFxuICAgIGdldCBzaGlwU3RvcmUoKSB7XG4gICAgICByZXR1cm4gZ2FtZWJvYXJkLnNoaXBTdG9yZTtcbiAgICB9LFxuICAgIHBsYWNlKHgsIHksIHNoaXApIHtcbiAgICAgIGdhbWVib2FyZC5zaGlwU3RvcmUucHVzaChzaGlwKTtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDw9IHNoaXAubGVuZ3RoICsgKHkgLSAxKTsgaSsrKSB7XG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFt4XVtpXS52YWx1ZSA9IHNoaXAubmFtZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc3BsYWNlKHgsIHksIHNoaXApIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDw9IHNoaXAubGVuZ3RoICsgKHkgLSAxKTsgaSsrKSB7XG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFt4XVtpXS52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeF1beV0udmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLmhpdCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0U2hpcE5hbWUgPSBnYW1lYm9hcmQuYm9hcmRbeF1beV0udmFsdWU7XG4gICAgICAgIGNvbnN0IGZvdW5kU2hpcCA9IGdhbWVib2FyZC5zaGlwU3RvcmUuZmluZChcbiAgICAgICAgICBlbCA9PiBlbC5uYW1lID09PSB0YXJnZXRTaGlwTmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgT2JqZWN0LnZhbHVlcyhnYW1lYm9hcmQuYm9hcmRbeF0pKSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUgIT09IHRhcmdldFNoaXBOYW1lKSB7XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZm91bmRTaGlwLmhpdCh5IC0gY291bnRlcik7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtYT0nJHt4fSddW2RhdGEtYj0nJHt5fSddYClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWE9JyR7eH0nXVtkYXRhLWI9JyR7eX0nXWApXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChgY29tLSR7Zm91bmRTaGlwLm5hbWV9YCk7XG5cbiAgICAgICAgICBpZiAoZm91bmRTaGlwLmlzU3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5jb20tJHtmb3VuZFNoaXAubmFtZX1gKVxuICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBlbCA9PiAoXG4gICAgICAgICAgICAgICAgICAoZWwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnKSxcbiAgICAgICAgICAgICAgICAgIChlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgyNTUsMCwwLC4wNSknKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke3h9J11bZGF0YS15PScke3l9J11gKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG4gICAgICAgICAgaWYgKGZvdW5kU2hpcC5pc1N1bmsgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuJHtmb3VuZFNoaXAubmFtZX0tY29udGFpbmVyYFxuICAgICAgICAgICAgKS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtmb3VuZFNoaXAubmFtZX0tY29udGFpbmVyYCkuY2hpbGRyZW5cbiAgICAgICAgICAgICkuZm9yRWFjaChlbCA9PiAoZWwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLiR7Zm91bmRTaGlwLm5hbWV9LWNvbnRhaW5lcmBcbiAgICAgICAgICAgICkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMjU1LDAsMCwuMDUpJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFt4XVt5XS5oaXQgPSBudWxsOyAvLyBtaXNzZWQgYXR0YWNrXG4gICAgICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcjEpXG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1hPScke3h9J11bZGF0YS1iPScke3l9J11gKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke3h9J11bZGF0YS15PScke3l9J11gKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGlmIChnYW1lYm9hcmQuc2hpcFN0b3JlLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsgPT09IHRydWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHtcbiAgcGFpckFycmF5LFxuICByYW5kb21BdHRhY2ssXG4gIHBsYWNlU2hpcFJhbmRvbSxcbiAgcGFpckFycmF5UmVmcmVzaGVyLFxufSBmcm9tICcuLi9zcmMvcmFuZG9tJztcbmltcG9ydCBpbnRlcmFjdCBmcm9tICcuL2RyYWdBbmREcm9wLmpzJztcblxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1hXVtkYXRhLWJdYCk7XG5jb25zdCByYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9taXNlJyk7XG5jb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpO1xuY29uc3QgcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5Jyk7XG5cbmNvbnN0IHBhdHJvbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRyb2wtY29udGFpbmVyJyk7XG5jb25zdCBzdWJtYXJpbmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWFyaW5lLWNvbnRhaW5lcicpO1xuY29uc3QgZGVzdHJveWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3Ryb3llci1jb250YWluZXInKTtcbmNvbnN0IGJhdHRsZXNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcC1jb250YWluZXInKTtcbmNvbnN0IGNhcnJpZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fycmllci1jb250YWluZXInKTtcblxubGV0IHN0YXJ0ID0gZmFsc2U7XG5cbnJhbmRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUmFuZG9tKTtcblxuZnVuY3Rpb24gcGxhY2VSYW5kb20oKSB7XG4gIHBsYXllcjIuYm9hcmQuYm9hcmQubWFwKGVsID0+IGVsLm1hcChlbCA9PiAoZWwudmFsdWUgPSBudWxsKSkpO1xuICByZW1vdmVDbGFzc0Zyb21DZWxscygpO1xuICBwbGFjZVNoaXBSYW5kb20ocGxheWVyMiwgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzRnJvbUNlbGxzKCkge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpXG4gICAgLmZvckVhY2goY2VsbCA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXRha2VuJykpO1xufVxuXG5yZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgcGxheWVyMi5ib2FyZC5ib2FyZC5tYXAoZWwgPT4gZWwubWFwKGVsID0+IChlbC52YWx1ZSA9IG51bGwpKSk7XG4gIHBsYXllcjIuYm9hcmQuYm9hcmQubWFwKGVsID0+IGVsLm1hcChlbCA9PiAoZWwuaGl0ID0gZmFsc2UpKSk7XG4gIHBsYXllcjIuYm9hcmQuc2hpcFN0b3JlLm1hcChlbCA9PiBlbC5zaGlwQXJyYXkubWFwKGVsID0+IChlbC5oaXQgPSBmYWxzZSkpKTtcblxuICBwbGF5ZXIyLmJvYXJkLnBsYWNlKDAsIDQsIHBhdHJvbCk7XG4gIHBsYXllcjIuYm9hcmQucGxhY2UoMywgMSwgc3VibWFyaW5lKTtcbiAgcGxheWVyMi5ib2FyZC5wbGFjZSg1LCA2LCBkZXN0cm95ZXIpO1xuICBwbGF5ZXIyLmJvYXJkLnBsYWNlKDcsIDAsIGJhdHRsZXNoaXApO1xuICBwbGF5ZXIyLmJvYXJkLnBsYWNlKDksIDUsIGNhcnJpZXIpO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScwJ11bZGF0YS15PSc0J11gKS5hcHBlbmQocGF0cm9sQ29udGFpbmVyKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD0nMyddW2RhdGEteT0nMSddYCkuYXBwZW5kKHN1Ym1hcmluZUNvbnRhaW5lcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzUnXVtkYXRhLXk9JzYnXWApLmFwcGVuZChkZXN0cm95ZXJDb250YWluZXIpO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PSc3J11bZGF0YS15PScwJ11gKVxuICAgIC5hcHBlbmQoYmF0dGxlc2hpcENvbnRhaW5lcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzknXVtkYXRhLXk9JzUnXWApLmFwcGVuZChjYXJyaWVyQ29udGFpbmVyKTtcblxuICBwbGF5ZXIxLmJvYXJkLmJvYXJkLm1hcChlbCA9PiBlbC5tYXAoZWwgPT4gKGVsLnZhbHVlID0gbnVsbCkpKTtcbiAgcGxheWVyMS5ib2FyZC5ib2FyZC5tYXAoZWwgPT4gZWwubWFwKGVsID0+IChlbC5oaXQgPSBmYWxzZSkpKTtcbiAgcGxheWVyMS5ib2FyZC5zaGlwU3RvcmUubWFwKGVsID0+IGVsLnNoaXBBcnJheS5tYXAoZWwgPT4gKGVsLmhpdCA9IGZhbHNlKSkpO1xuXG4gIHBsYWNlU2hpcFJhbmRvbShcbiAgICBwbGF5ZXIxLFxuICAgIGNhcnJpZXIyLFxuICAgIGJhdHRsZXNoaXAyLFxuICAgIGRlc3Ryb3llcjIsXG4gICAgc3VibWFyaW5lMixcbiAgICBwYXRyb2wyXG4gICk7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKVxuICAgIC5mb3JFYWNoKGNlbGwgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snLCAnaGl0JykpO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS1ib2FyZCAuY2VsbCcpXG4gICAgLmZvckVhY2goXG4gICAgICBjZWxsID0+IChcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICdhdHRhY2snLFxuICAgICAgICAgICdoaXQnLFxuICAgICAgICAgICdjb20tcGF0cm9sJyxcbiAgICAgICAgICAnY29tLXN1Ym1hcmluZScsXG4gICAgICAgICAgJ2NvbS1kZXN0cm95ZXInLFxuICAgICAgICAgICdjb20tYmF0dGxlc2hpcCcsXG4gICAgICAgICAgJ2NvbS1jYXJyaWVyJ1xuICAgICAgICApLFxuICAgICAgICAoY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZicpLFxuICAgICAgICAoY2VsbC5zdHlsZS5ib3JkZXIgPSAnbm9uZScpXG4gICAgICApXG4gICAgKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKVxuICAgIC5mb3JFYWNoKFxuICAgICAgc2hpcCA9PiAoXG4gICAgICAgIChzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDI1NSwgMC4wNSknKSxcbiAgICAgICAgKHNoaXAuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCAjMDBmJylcbiAgICAgIClcbiAgICApO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLXNoaXAnKVxuICAgIC5mb3JFYWNoKHNoaXAgPT4gKHNoaXAuc3R5bGUuYm9yZGVyID0gJ25vbmUnKSk7XG5cbiAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgcGFpckFycmF5UmVmcmVzaGVyKCk7XG4gIHJhbmRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUmFuZG9tKTtcbiAgc2V0RHJhZ2dhYmxlKHRydWUsICdtb3ZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5Jykuc3R5bGUuZGlzcGxheSA9ICcnO1xuICByZW1vdmVDbGFzc0Zyb21DZWxscygpO1xuICBhZGRDbGFzc1RvQ2VsbHMoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRDbGFzc1RvQ2VsbHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzAnXVtkYXRhLXk9JzQnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzAnXVtkYXRhLXk9JzUnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzMnXVtkYXRhLXk9JzEnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzMnXVtkYXRhLXk9JzInXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzMnXVtkYXRhLXk9JzMnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzUnXVtkYXRhLXk9JzYnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzUnXVtkYXRhLXk9JzcnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzUnXVtkYXRhLXk9JzgnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzcnXVtkYXRhLXk9JzAnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzcnXVtkYXRhLXk9JzEnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzcnXVtkYXRhLXk9JzInXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzcnXVtkYXRhLXk9JzMnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzknXVtkYXRhLXk9JzUnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzknXVtkYXRhLXk9JzYnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzknXVtkYXRhLXk9JzcnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzknXVtkYXRhLXk9JzgnXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JzknXVtkYXRhLXk9JzknXWApLmNsYXNzTGlzdC5hZGQoJ2lzLXRha2VuJyk7XG59XG5cbnBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGFjdGl2ZVBsYXllciA9IHBsYXllcjE7XG4gIGNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZSkpO1xuICByYW5kb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxhY2VTaGlwUmFuZG9tKHBsYXllcjIsIGNhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2wpO1xuICB9KTtcbiAgcmFuZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VSYW5kb20pO1xuICBzZXREcmFnZ2FibGUoZmFsc2UsICdkZWZhdWx0Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKS50ZXh0Q29udGVudCA9IGBUaGUgZ2FtZSBzdGFydGVkLCB5b3VyIHR1cm4uYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbmNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG5jb25zdCBlbmVteUJvYXJkID0gR2FtZWJvYXJkKCk7XG5jb25zdCBwbGF5ZXIxID0gUGxheWVyKCdwbGF5ZXIxJywgZW5lbXlCb2FyZCk7XG5jb25zdCBwbGF5ZXIyID0gUGxheWVyKCdwbGF5ZXIyJywgcGxheWVyQm9hcmQpO1xuXG5sZXQgYWN0aXZlUGxheWVyID0gcGxheWVyMTtcblxuY29uc3QgY2FycmllciA9IFNoaXAoNSwgJ2NhcnJpZXInKTtcbmNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQsICdiYXR0bGVzaGlwJyk7XG5jb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMsICdkZXN0cm95ZXInKTtcbmNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgJ3N1Ym1hcmluZScpO1xuY29uc3QgcGF0cm9sID0gU2hpcCgyLCAncGF0cm9sJyk7XG5cbnBsYXllcjIuYm9hcmQucGxhY2UoMCwgNCwgcGF0cm9sKTtcbnBsYXllcjIuYm9hcmQucGxhY2UoMywgMSwgc3VibWFyaW5lKTtcbnBsYXllcjIuYm9hcmQucGxhY2UoNSwgNiwgZGVzdHJveWVyKTtcbnBsYXllcjIuYm9hcmQucGxhY2UoNywgMCwgYmF0dGxlc2hpcCk7XG5wbGF5ZXIyLmJvYXJkLnBsYWNlKDksIDUsIGNhcnJpZXIpO1xuXG5zd2l0Y2hQbGF5ZXIoKTtcblxuY29uc3QgY2FycmllcjIgPSBTaGlwKDUsICdjYXJyaWVyJyk7XG5jb25zdCBiYXR0bGVzaGlwMiA9IFNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbmNvbnN0IGRlc3Ryb3llcjIgPSBTaGlwKDMsICdkZXN0cm95ZXInKTtcbmNvbnN0IHN1Ym1hcmluZTIgPSBTaGlwKDMsICdzdWJtYXJpbmUnKTtcbmNvbnN0IHBhdHJvbDIgPSBTaGlwKDIsICdwYXRyb2wnKTtcblxucGxhY2VTaGlwUmFuZG9tKFxuICBwbGF5ZXIxLFxuICBjYXJyaWVyMixcbiAgYmF0dGxlc2hpcDIsXG4gIGRlc3Ryb3llcjIsXG4gIHN1Ym1hcmluZTIsXG4gIHBhdHJvbDJcbik7XG5cbnN3aXRjaFBsYXllcigpO1xuXG5mdW5jdGlvbiBnYW1lKGUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKS50ZXh0Q29udGVudCA9IGBPcHBvbmVudCdzIHR1cm4uYDtcblxuICBwbGF5ZXIxLmF0dGFjayhlLnRhcmdldC5kYXRhc2V0LmEsIGUudGFyZ2V0LmRhdGFzZXQuYik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lKTtcbiAgcmVtb3ZlTGlzdGVuZXIoKTtcblxuICBpZiAoXG4gICAgcGxheWVyMS5ib2FyZC5hcmVTaGlwc1N1bmsoKSA9PT0gZmFsc2UgJiZcbiAgICBwbGF5ZXIyLmJvYXJkLmFyZVNoaXBzU3VuaygpID09PSBmYWxzZVxuICApIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJhbmRvbUF0dGFjaygwLCBwYWlyQXJyYXkubGVuZ3RoIC0gMSwgYWN0aXZlUGxheWVyKTtcblxuICAgICAgaWYgKHBsYXllcjIuYm9hcmQuYXJlU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKS50ZXh0Q29udGVudCA9IGBHYW1lIG92ZXIuIFlvdSBsb3NlLmA7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1ib2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiZcbiAgICAgICAgICAgICFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnYXR0YWNrJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpLnRleHRDb250ZW50ID0gYFlvdXIgdHVybi5gO1xuICAgICAgfSwgNTAwKTtcblxuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgfVxuXG4gIGlmIChwbGF5ZXIxLmJvYXJkLmFyZVNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcudGV4dCdcbiAgICApLnRleHRDb250ZW50ID0gYEdhbWUgb3Zlci4gQ29uZ3JhdHVsYXRpb25zLCB5b3Ugd29uIWA7XG4gICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKSB7XG4gIGNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZSkpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hQbGF5ZXIoKSB7XG4gIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcjEpIGFjdGl2ZVBsYXllciA9IHBsYXllcjI7XG4gIGVsc2UgYWN0aXZlUGxheWVyID0gcGxheWVyMTtcbn1cblxuZnVuY3Rpb24gc2V0RHJhZ2dhYmxlKHZhbHVlLCBjdXJzb3IpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKVxuICAgIC5mb3JFYWNoKFxuICAgICAgc2hpcCA9PiAoXG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB2YWx1ZSksIChzaGlwLnN0eWxlLmN1cnNvciA9IGAke2N1cnNvcn1gKVxuICAgICAgKVxuICAgICk7XG59XG5cbmV4cG9ydCB7XG4gIHN3aXRjaFBsYXllcixcbiAgYWN0aXZlUGxheWVyLFxuICBwbGF5ZXIxLFxuICBwbGF5ZXIyLFxuICBwbGF5ZXJCb2FyZCxcbiAgY2FycmllcixcbiAgYmF0dGxlc2hpcCxcbiAgZGVzdHJveWVyLFxuICBzdWJtYXJpbmUsXG4gIHBhdHJvbCxcbiAgcGF0cm9sQ29udGFpbmVyLFxuICBzdWJtYXJpbmVDb250YWluZXIsXG4gIGRlc3Ryb3llckNvbnRhaW5lcixcbiAgYmF0dGxlc2hpcENvbnRhaW5lcixcbiAgY2FycmllckNvbnRhaW5lcixcbn07XG4iLCJjb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSwgYm9hcmQpIHtcbiAgY29uc3QgcGxheWVyID0geyBuYW1lIH07XG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBib2FyZDtcblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gcGxheWVyLm5hbWU7XG4gICAgfSxcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gZW5lbXlCb2FyZDtcbiAgICB9LFxuICAgIGF0dGFjayh4LCB5KSB7XG4gICAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImltcG9ydCB7XG4gIHBsYXllcjIsXG4gIHBhdHJvbENvbnRhaW5lcixcbiAgc3VibWFyaW5lQ29udGFpbmVyLFxuICBkZXN0cm95ZXJDb250YWluZXIsXG4gIGJhdHRsZXNoaXBDb250YWluZXIsXG4gIGNhcnJpZXJDb250YWluZXIsXG59IGZyb20gJy4vaW5kZXguanMnO1xuXG5sZXQgcGFpckFycmF5ID0gW1xuICBbMCwgMF0sXG4gIFswLCAxXSxcbiAgWzAsIDJdLFxuICBbMCwgM10sXG4gIFswLCA0XSxcbiAgWzAsIDVdLFxuICBbMCwgNl0sXG4gIFswLCA3XSxcbiAgWzAsIDhdLFxuICBbMCwgOV0sXG4gIFsxLCAwXSxcbiAgWzEsIDFdLFxuICBbMSwgMl0sXG4gIFsxLCAzXSxcbiAgWzEsIDRdLFxuICBbMSwgNV0sXG4gIFsxLCA2XSxcbiAgWzEsIDddLFxuICBbMSwgOF0sXG4gIFsxLCA5XSxcbiAgWzIsIDBdLFxuICBbMiwgMV0sXG4gIFsyLCAyXSxcbiAgWzIsIDNdLFxuICBbMiwgNF0sXG4gIFsyLCA1XSxcbiAgWzIsIDZdLFxuICBbMiwgN10sXG4gIFsyLCA4XSxcbiAgWzIsIDldLFxuICBbMywgMF0sXG4gIFszLCAxXSxcbiAgWzMsIDJdLFxuICBbMywgM10sXG4gIFszLCA0XSxcbiAgWzMsIDVdLFxuICBbMywgNl0sXG4gIFszLCA3XSxcbiAgWzMsIDhdLFxuICBbMywgOV0sXG4gIFs0LCAwXSxcbiAgWzQsIDFdLFxuICBbNCwgMl0sXG4gIFs0LCAzXSxcbiAgWzQsIDRdLFxuICBbNCwgNV0sXG4gIFs0LCA2XSxcbiAgWzQsIDddLFxuICBbNCwgOF0sXG4gIFs0LCA5XSxcbiAgWzUsIDBdLFxuICBbNSwgMV0sXG4gIFs1LCAyXSxcbiAgWzUsIDNdLFxuICBbNSwgNF0sXG4gIFs1LCA1XSxcbiAgWzUsIDZdLFxuICBbNSwgN10sXG4gIFs1LCA4XSxcbiAgWzUsIDldLFxuICBbNiwgMF0sXG4gIFs2LCAxXSxcbiAgWzYsIDJdLFxuICBbNiwgM10sXG4gIFs2LCA0XSxcbiAgWzYsIDVdLFxuICBbNiwgNl0sXG4gIFs2LCA3XSxcbiAgWzYsIDhdLFxuICBbNiwgOV0sXG4gIFs3LCAwXSxcbiAgWzcsIDFdLFxuICBbNywgMl0sXG4gIFs3LCAzXSxcbiAgWzcsIDRdLFxuICBbNywgNV0sXG4gIFs3LCA2XSxcbiAgWzcsIDddLFxuICBbNywgOF0sXG4gIFs3LCA5XSxcbiAgWzgsIDBdLFxuICBbOCwgMV0sXG4gIFs4LCAyXSxcbiAgWzgsIDNdLFxuICBbOCwgNF0sXG4gIFs4LCA1XSxcbiAgWzgsIDZdLFxuICBbOCwgN10sXG4gIFs4LCA4XSxcbiAgWzgsIDldLFxuICBbOSwgMF0sXG4gIFs5LCAxXSxcbiAgWzksIDJdLFxuICBbOSwgM10sXG4gIFs5LCA0XSxcbiAgWzksIDVdLFxuICBbOSwgNl0sXG4gIFs5LCA3XSxcbiAgWzksIDhdLFxuICBbOSwgOV0sXG5dO1xuXG5mdW5jdGlvbiByYW5kb21BdHRhY2sobWluLCBtYXgsIHBsYXllcikge1xuICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICBwbGF5ZXIuYXR0YWNrKHBhaXJBcnJheVtyYW5kb21dWzBdLCBwYWlyQXJyYXlbcmFuZG9tXVsxXSk7XG4gIHBhaXJBcnJheS5zcGxpY2UocmFuZG9tLCAxKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJCb2FyZChwbGF5ZXIpIHtcbiAgcmV0dXJuIHBsYXllci5ib2FyZC5ib2FyZFxuICAgIC5tYXAoZWwgPT4gZWwuZmluZEluZGV4KGVsID0+IGVsLnZhbHVlICE9PSBudWxsKSlcbiAgICAucmVkdWNlKChyLCBuLCBpKSA9PiB7XG4gICAgICBuID09PSAtMSAmJiByLnB1c2goaSk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzVG9DZWxsKHJhbmRvbTEsIHJhbmRvbTIsIHNoaXBOYW1lKSB7XG4gIGxldCBjb3VudGVyID0gcmFuZG9tMjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTmFtZS5sZW5ndGg7IGkrKykge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEteD0nJHtyYW5kb20xfSddW2RhdGEteT0nJHtjb3VudGVyfSddYClcbiAgICAgIC5jbGFzc0xpc3QuYWRkKCdpcy10YWtlbicpO1xuXG4gICAgY291bnRlcisrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcFJhbmRvbShcbiAgcGxheWVyLFxuICBjYXJyaWVyLFxuICBiYXR0bGVzaGlwLFxuICBkZXN0cm95ZXIsXG4gIHN1Ym1hcmluZSxcbiAgcGF0cm9sXG4pIHtcbiAgbGV0IGZyZWVSb3c7XG4gIGNvbnN0IHJhbmRvbU51bWJlckZvckNhcnJpZXIxID0gcmFuZG9tTnVtYmVyKDAsIDkpO1xuICBjb25zdCByYW5kb21OdW1iZXJGb3JDYXJyaWVyMiA9IHJhbmRvbU51bWJlcigwLCA1KTtcblxuICBwbGF5ZXIuYm9hcmQucGxhY2UocmFuZG9tTnVtYmVyRm9yQ2FycmllcjEsIHJhbmRvbU51bWJlckZvckNhcnJpZXIyLCBjYXJyaWVyKTtcblxuICBpZiAocGxheWVyID09PSBwbGF5ZXIyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEteD0nJHtyYW5kb21OdW1iZXJGb3JDYXJyaWVyMX0nXVtkYXRhLXk9JyR7cmFuZG9tTnVtYmVyRm9yQ2FycmllcjJ9J11gXG4gICAgICApXG4gICAgICAuYXBwZW5kKGNhcnJpZXJDb250YWluZXIpO1xuICAgIGFkZENsYXNzVG9DZWxsKHJhbmRvbU51bWJlckZvckNhcnJpZXIxLCByYW5kb21OdW1iZXJGb3JDYXJyaWVyMiwgY2Fycmllcik7XG4gIH1cblxuICBmcmVlUm93ID0gZmlsdGVyQm9hcmQocGxheWVyKTtcblxuICBjb25zdCByYW5kb21OdW1iZXJGb3JCYXR0bGVzaGlwMSA9IHJhbmRvbU51bWJlcigwLCA4KTtcbiAgY29uc3QgcmFuZG9tTnVtYmVyRm9yQmF0dGxlc2hpcDIgPSByYW5kb21OdW1iZXIoMCwgNik7XG5cbiAgcGxheWVyLmJvYXJkLnBsYWNlKFxuICAgIGZyZWVSb3dbcmFuZG9tTnVtYmVyRm9yQmF0dGxlc2hpcDFdLFxuICAgIHJhbmRvbU51bWJlckZvckJhdHRsZXNoaXAyLFxuICAgIGJhdHRsZXNoaXBcbiAgKTtcblxuICBpZiAocGxheWVyID09PSBwbGF5ZXIyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEteD0nJHtmcmVlUm93W3JhbmRvbU51bWJlckZvckJhdHRsZXNoaXAxXX0nXVtkYXRhLXk9JyR7cmFuZG9tTnVtYmVyRm9yQmF0dGxlc2hpcDJ9J11gXG4gICAgICApXG4gICAgICAuYXBwZW5kKGJhdHRsZXNoaXBDb250YWluZXIpO1xuICAgIGFkZENsYXNzVG9DZWxsKFxuICAgICAgZnJlZVJvd1tyYW5kb21OdW1iZXJGb3JCYXR0bGVzaGlwMV0sXG4gICAgICByYW5kb21OdW1iZXJGb3JCYXR0bGVzaGlwMixcbiAgICAgIGJhdHRsZXNoaXBcbiAgICApO1xuICB9XG5cbiAgZnJlZVJvdyA9IGZpbHRlckJvYXJkKHBsYXllcik7XG5cbiAgY29uc3QgcmFuZG9tTnVtYmVyRm9yRGVzdHJveWVyMSA9IHJhbmRvbU51bWJlcigwLCA3KTtcbiAgY29uc3QgcmFuZG9tTnVtYmVyRm9yRGVzdHJveWVyMiA9IHJhbmRvbU51bWJlcigwLCA3KTtcblxuICBwbGF5ZXIuYm9hcmQucGxhY2UoXG4gICAgZnJlZVJvd1tyYW5kb21OdW1iZXJGb3JEZXN0cm95ZXIxXSxcbiAgICByYW5kb21OdW1iZXJGb3JEZXN0cm95ZXIyLFxuICAgIGRlc3Ryb3llclxuICApO1xuXG4gIGlmIChwbGF5ZXIgPT09IHBsYXllcjIpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS14PScke2ZyZWVSb3dbcmFuZG9tTnVtYmVyRm9yRGVzdHJveWVyMV19J11bZGF0YS15PScke3JhbmRvbU51bWJlckZvckRlc3Ryb3llcjJ9J11gXG4gICAgICApXG4gICAgICAuYXBwZW5kKGRlc3Ryb3llckNvbnRhaW5lcik7XG4gICAgYWRkQ2xhc3NUb0NlbGwoXG4gICAgICBmcmVlUm93W3JhbmRvbU51bWJlckZvckRlc3Ryb3llcjFdLFxuICAgICAgcmFuZG9tTnVtYmVyRm9yRGVzdHJveWVyMixcbiAgICAgIGRlc3Ryb3llclxuICAgICk7XG4gIH1cblxuICBmcmVlUm93ID0gZmlsdGVyQm9hcmQocGxheWVyKTtcblxuICBjb25zdCByYW5kb21OdW1iZXJGb3JTdWJtYXJpbmUxID0gcmFuZG9tTnVtYmVyKDAsIDYpO1xuICBjb25zdCByYW5kb21OdW1iZXJGb3JTdWJtYXJpbmUyID0gcmFuZG9tTnVtYmVyKDAsIDcpO1xuXG4gIHBsYXllci5ib2FyZC5wbGFjZShcbiAgICBmcmVlUm93W3JhbmRvbU51bWJlckZvclN1Ym1hcmluZTFdLFxuICAgIHJhbmRvbU51bWJlckZvclN1Ym1hcmluZTIsXG4gICAgc3VibWFyaW5lXG4gICk7XG5cbiAgaWYgKHBsYXllciA9PT0gcGxheWVyMikge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLXg9JyR7ZnJlZVJvd1tyYW5kb21OdW1iZXJGb3JTdWJtYXJpbmUxXX0nXVtkYXRhLXk9JyR7cmFuZG9tTnVtYmVyRm9yU3VibWFyaW5lMn0nXWBcbiAgICAgIClcbiAgICAgIC5hcHBlbmQoc3VibWFyaW5lQ29udGFpbmVyKTtcbiAgICBhZGRDbGFzc1RvQ2VsbChcbiAgICAgIGZyZWVSb3dbcmFuZG9tTnVtYmVyRm9yU3VibWFyaW5lMV0sXG4gICAgICByYW5kb21OdW1iZXJGb3JTdWJtYXJpbmUyLFxuICAgICAgc3VibWFyaW5lXG4gICAgKTtcbiAgfVxuXG4gIGZyZWVSb3cgPSBmaWx0ZXJCb2FyZChwbGF5ZXIpO1xuXG4gIGNvbnN0IHJhbmRvbU51bWJlckZvclBhdHJvbDEgPSByYW5kb21OdW1iZXIoMCwgNSk7XG4gIGNvbnN0IHJhbmRvbU51bWJlckZvclBhdHJvbDIgPSByYW5kb21OdW1iZXIoMCwgOCk7XG5cbiAgcGxheWVyLmJvYXJkLnBsYWNlKFxuICAgIGZyZWVSb3dbcmFuZG9tTnVtYmVyRm9yUGF0cm9sMV0sXG4gICAgcmFuZG9tTnVtYmVyRm9yUGF0cm9sMixcbiAgICBwYXRyb2xcbiAgKTtcblxuICBpZiAocGxheWVyID09PSBwbGF5ZXIyKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEteD0nJHtmcmVlUm93W3JhbmRvbU51bWJlckZvclBhdHJvbDFdfSddW2RhdGEteT0nJHtyYW5kb21OdW1iZXJGb3JQYXRyb2wyfSddYFxuICAgICAgKVxuICAgICAgLmFwcGVuZChwYXRyb2xDb250YWluZXIpO1xuICAgIGFkZENsYXNzVG9DZWxsKFxuICAgICAgZnJlZVJvd1tyYW5kb21OdW1iZXJGb3JQYXRyb2wxXSxcbiAgICAgIHJhbmRvbU51bWJlckZvclBhdHJvbDIsXG4gICAgICBwYXRyb2xcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhaXJBcnJheVJlZnJlc2hlcigpIHtcbiAgcGFpckFycmF5ID0gW1xuICAgIFswLCAwXSxcbiAgICBbMCwgMV0sXG4gICAgWzAsIDJdLFxuICAgIFswLCAzXSxcbiAgICBbMCwgNF0sXG4gICAgWzAsIDVdLFxuICAgIFswLCA2XSxcbiAgICBbMCwgN10sXG4gICAgWzAsIDhdLFxuICAgIFswLCA5XSxcbiAgICBbMSwgMF0sXG4gICAgWzEsIDFdLFxuICAgIFsxLCAyXSxcbiAgICBbMSwgM10sXG4gICAgWzEsIDRdLFxuICAgIFsxLCA1XSxcbiAgICBbMSwgNl0sXG4gICAgWzEsIDddLFxuICAgIFsxLCA4XSxcbiAgICBbMSwgOV0sXG4gICAgWzIsIDBdLFxuICAgIFsyLCAxXSxcbiAgICBbMiwgMl0sXG4gICAgWzIsIDNdLFxuICAgIFsyLCA0XSxcbiAgICBbMiwgNV0sXG4gICAgWzIsIDZdLFxuICAgIFsyLCA3XSxcbiAgICBbMiwgOF0sXG4gICAgWzIsIDldLFxuICAgIFszLCAwXSxcbiAgICBbMywgMV0sXG4gICAgWzMsIDJdLFxuICAgIFszLCAzXSxcbiAgICBbMywgNF0sXG4gICAgWzMsIDVdLFxuICAgIFszLCA2XSxcbiAgICBbMywgN10sXG4gICAgWzMsIDhdLFxuICAgIFszLCA5XSxcbiAgICBbNCwgMF0sXG4gICAgWzQsIDFdLFxuICAgIFs0LCAyXSxcbiAgICBbNCwgM10sXG4gICAgWzQsIDRdLFxuICAgIFs0LCA1XSxcbiAgICBbNCwgNl0sXG4gICAgWzQsIDddLFxuICAgIFs0LCA4XSxcbiAgICBbNCwgOV0sXG4gICAgWzUsIDBdLFxuICAgIFs1LCAxXSxcbiAgICBbNSwgMl0sXG4gICAgWzUsIDNdLFxuICAgIFs1LCA0XSxcbiAgICBbNSwgNV0sXG4gICAgWzUsIDZdLFxuICAgIFs1LCA3XSxcbiAgICBbNSwgOF0sXG4gICAgWzUsIDldLFxuICAgIFs2LCAwXSxcbiAgICBbNiwgMV0sXG4gICAgWzYsIDJdLFxuICAgIFs2LCAzXSxcbiAgICBbNiwgNF0sXG4gICAgWzYsIDVdLFxuICAgIFs2LCA2XSxcbiAgICBbNiwgN10sXG4gICAgWzYsIDhdLFxuICAgIFs2LCA5XSxcbiAgICBbNywgMF0sXG4gICAgWzcsIDFdLFxuICAgIFs3LCAyXSxcbiAgICBbNywgM10sXG4gICAgWzcsIDRdLFxuICAgIFs3LCA1XSxcbiAgICBbNywgNl0sXG4gICAgWzcsIDddLFxuICAgIFs3LCA4XSxcbiAgICBbNywgOV0sXG4gICAgWzgsIDBdLFxuICAgIFs4LCAxXSxcbiAgICBbOCwgMl0sXG4gICAgWzgsIDNdLFxuICAgIFs4LCA0XSxcbiAgICBbOCwgNV0sXG4gICAgWzgsIDZdLFxuICAgIFs4LCA3XSxcbiAgICBbOCwgOF0sXG4gICAgWzgsIDldLFxuICAgIFs5LCAwXSxcbiAgICBbOSwgMV0sXG4gICAgWzksIDJdLFxuICAgIFs5LCAzXSxcbiAgICBbOSwgNF0sXG4gICAgWzksIDVdLFxuICAgIFs5LCA2XSxcbiAgICBbOSwgN10sXG4gICAgWzksIDhdLFxuICAgIFs5LCA5XSxcbiAgXTtcbn1cblxuZXhwb3J0IHsgcmFuZG9tQXR0YWNrLCBwYWlyQXJyYXksIHBsYWNlU2hpcFJhbmRvbSwgcGFpckFycmF5UmVmcmVzaGVyIH07XG4iLCJjb25zdCBTaGlwID0gZnVuY3Rpb24gKGxlbmd0aCwgbmFtZSkge1xuICBsZXQgc2hpcEFycmF5ID0gQXJyYXkuZnJvbShuZXcgQXJyYXkobGVuZ3RoKSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7IHZhbHVlOiBuYW1lLCBoaXQ6IGZhbHNlIH07XG4gIH0pO1xuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBzaGlwQXJyYXkubGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0IHNoaXBBcnJheSgpIHtcbiAgICAgIHJldHVybiBzaGlwQXJyYXk7XG4gICAgfSxcbiAgICBoaXQoaW5kZXgpIHtcbiAgICAgIHNoaXBBcnJheVtpbmRleF0uaGl0ID0gdHJ1ZTtcbiAgICB9LFxuICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICBpZiAoc2hpcEFycmF5LmV2ZXJ5KGVsID0+IGVsLmhpdCA9PT0gdHJ1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBUK1NhbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTByZW0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHJlbSAxZnI7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG59XFxuXFxubmF2IHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM0ODVmYzc7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAzLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG5pb24taWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuaW9uLWljb246aG92ZXIge1xcbiAgY29sb3I6ICM0ODVmYzc7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbnAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjRmODtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGNvbHVtbi1nYXA6IDVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMnJlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMnJlbTtcXG59XFxuXFxuLmVuZW15LWJvYXJkIHtcXG4gIG1hcmdpbi1yaWdodDogMTJyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5mYWNpbGl0eSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAzcmVtIDAgMCAxMHJlbTtcXG59XFxuXFxuLnNoaXAgZGl2IHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMC41cmVtO1xcbiAgbGVmdDogLTAuNnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4wNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDBmO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgei1pbmRleDogMjtcXG4gIGdhcDogMS41cHg7XFxufVxcblxcbi5wYXRyb2wtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA2LjRyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5zdWJtYXJpbmUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5LjRyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5kZXN0cm95ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5LjRyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5iYXR0bGVzaGlwLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTIuNnJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLmNhcnJpZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxNS42cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG50YWJsZSxcXG50aCxcXG50ZCB7XFxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDFweDtcXG4gIGJvcmRlci13aWR0aDogdGhpbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxudGFibGUge1xcbiAgYmFja2dyb3VuZDogI2I0YjRmZjtcXG59XFxudHIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXFxuLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLm1hcmtlcl9fcm93IHtcXG4gIGxlZnQ6IC0zcmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRvcDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ubWFya2VyX19jb2wge1xcbiAgdG9wOiAtMnJlbTtcXG4gIGxlZnQ6IDEuM3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFya2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuLnBsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMSU7XFxuICBsZWZ0OiAxMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O1xcbiAgYmFja2dyb3VuZDogI2Q1ZWZkNjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gYm90dG9tLFxcbiAgICByZ2JhKDIyNSwgMjUwLCAyMjUsIDEpIDAsXFxuICAgIHJnYmEoMTk1LCAyMjIsIDE5NywgMSkgMTAwJVxcbiAgKTtcXG4gIG1hcmdpbjogMWVtIDAgMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuOGVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYigwIDAgMCAvIDI1JSk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmhpdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUsXFxuLmhpdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uaGl0OjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uYXR0YWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGY4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hdHRhY2s6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNy41cHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDcuNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNy41cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1ZW07XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMDAzNGFiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgcGFkZGluZzogY2FsYygwLjVlbSAtIDFweCkgMWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjNDg1ZmM3O1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2I1YjViNTtcXG4gIGNvbG9yOiByZ2JhKDEyLCA5NywgOSwgMC45MzgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFz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MUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UFQrU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHJlbSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcmVtIDFmcjtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG5uYXYge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzQ4NWZjNztcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi10b3A6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbmlvbi1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG5pb24taWNvbjpob3ZlciB7XFxuICBjb2xvcjogIzQ4NWZjNztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG5tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIge1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxucCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGY4O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY29sdW1uLWdhcDogNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEycmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgbWFyZ2luLWxlZnQ6IDEycmVtO1xcbn1cXG5cXG4uZW5lbXktYm9hcmQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNlbGwge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLmZhY2lsaXR5IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDNyZW0gMCAwIDEwcmVtO1xcbn1cXG5cXG4uc2hpcCBkaXYge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0wLjVyZW07XFxuICBsZWZ0OiAtMC42cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGY7XFxuICBjdXJzb3I6IG1vdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgZ2FwOiAxLjVweDtcXG59XFxuXFxuLnBhdHJvbC1jb250YWluZXIge1xcbiAgd2lkdGg6IDYuNHJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnN1Ym1hcmluZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDkuNHJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLmRlc3Ryb3llci1jb250YWluZXIge1xcbiAgd2lkdGg6IDkuNHJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMi42cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4uY2Fycmllci1jb250YWluZXIge1xcbiAgd2lkdGg6IDE1LjZyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbnRhYmxlLFxcbnRoLFxcbnRkIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICBib3JkZXItc3BhY2luZzogMXB4O1xcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG50YWJsZSB7XFxuICBiYWNrZ3JvdW5kOiAjYjRiNGZmO1xcbn1cXG50ciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ubWFya2VyX19yb3cge1xcbiAgbGVmdDogLTNyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdG9wOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5tYXJrZXJfX2NvbCB7XFxuICB0b3A6IC0ycmVtO1xcbiAgbGVmdDogMS4zcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4ucGxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMxJTtcXG4gIGxlZnQ6IDEwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XFxuICBiYWNrZ3JvdW5kOiAjZDVlZmQ2O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBib3R0b20sXFxuICAgIHJnYmEoMjI1LCAyNTAsIDIyNSwgMSkgMCxcXG4gICAgcmdiYSgxOTUsIDIyMiwgMTk3LCAxKSAxMDAlXFxuICApO1xcbiAgbWFyZ2luOiAxZW0gMCAwO1xcbiAgcGFkZGluZzogMC4yZW0gMC44ZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiKDAgMCAwIC8gMjUlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSxcXG4uaGl0OjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5hdHRhY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY0ZjggIWltcG9ydGFudDtcXG59XFxuXFxuLmF0dGFjazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA3LjVweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNy41cHg7XFxuICBib3JkZXItcmFkaXVzOiA3LjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVlbTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICMwMDM0YWI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGhlaWdodDogMi41ZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBwYWRkaW5nOiBjYWxjKDAuNWVtIC0gMXB4KSAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzRhNGE0YTtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM0ODVmYzc7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjYjViNWI1O1xcbiAgY29sb3I6IHJnYmEoMTIsIDk3LCA5LCAwLjkzOCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsicGxheWVyMiIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sIiwiY2VsbHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzaGlwc0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJzaGlwcyIsImJvYXJkIiwidGFyZ2V0Iiwic2hpcE5hbWVXaXRoSWQiLCJzaGlwIiwic2hpcExlbmd0aCIsInNoaXBJbmRleCIsInBsYWNlQ2hlY2siLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYWdTdGFydFNoaXAiLCJncmFwU2hpcCIsImRyYWdPdmVyU2hpcCIsImNlbGwiLCJkcmFnRW50ZXJTaGlwIiwiZHJhZ0xlYXZlU2hpcCIsImRyb3BTaGlwIiwiZSIsImlkIiwicHJldmVudERlZmF1bHQiLCJjaGlsZEVsZW1lbnRDb3VudCIsInBhcnNlSW50Iiwic2xpY2UiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY291bnRlciIsImRhdGFzZXQiLCJ5IiwiaSIsIngiLCJyZW1vdmUiLCJkaXNwbGFjZVNoaXAiLCJzaGlwTmFtZSIsImRpc3BsYWNlIiwic3Vic3RyaW5nIiwicGxhY2VTaGlwIiwicGxhY2VTaGlwVG8yREFycmF5IiwiY2hlY2tBcnJheSIsImNoZWNrIiwicHVzaCIsImV2ZXJ5IiwiZWwiLCJjb3VudGVyMiIsImFwcGVuZCIsImFkZCIsInBsYWNlIiwiYWN0aXZlUGxheWVyIiwicGxheWVyMSIsIkdhbWVib2FyZCIsImdhbWVib2FyZCIsInZhbHVlIiwiaGl0Iiwic2hpcFN0b3JlIiwiT2JqZWN0IiwiZnJlZXplIiwibGVuZ3RoIiwibmFtZSIsInJlY2VpdmVBdHRhY2siLCJ0YXJnZXRTaGlwTmFtZSIsImZvdW5kU2hpcCIsImZpbmQiLCJ2YWx1ZXMiLCJlbGVtZW50IiwiaXNTdW5rIiwic3R5bGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsImFyZVNoaXBzU3VuayIsIlNoaXAiLCJQbGF5ZXIiLCJwYWlyQXJyYXkiLCJyYW5kb21BdHRhY2siLCJwbGFjZVNoaXBSYW5kb20iLCJwYWlyQXJyYXlSZWZyZXNoZXIiLCJpbnRlcmFjdCIsInJhbmRvbSIsInJlc2V0IiwicGxheSIsInBhdHJvbENvbnRhaW5lciIsInN1Ym1hcmluZUNvbnRhaW5lciIsImRlc3Ryb3llckNvbnRhaW5lciIsImJhdHRsZXNoaXBDb250YWluZXIiLCJjYXJyaWVyQ29udGFpbmVyIiwic3RhcnQiLCJwbGFjZVJhbmRvbSIsIm1hcCIsInJlbW92ZUNsYXNzRnJvbUNlbGxzIiwic2hpcEFycmF5IiwiY2FycmllcjIiLCJiYXR0bGVzaGlwMiIsImRlc3Ryb3llcjIiLCJzdWJtYXJpbmUyIiwicGF0cm9sMiIsInJlbW92ZUxpc3RlbmVyIiwic2V0RHJhZ2dhYmxlIiwiZGlzcGxheSIsImFkZENsYXNzVG9DZWxscyIsImdhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGV4dENvbnRlbnQiLCJwbGF5ZXJCb2FyZCIsImVuZW15Qm9hcmQiLCJzd2l0Y2hQbGF5ZXIiLCJhdHRhY2siLCJhIiwiYiIsInNldFRpbWVvdXQiLCJjdXJzb3IiLCJzZXRBdHRyaWJ1dGUiLCJwbGF5ZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJzcGxpY2UiLCJyYW5kb21OdW1iZXIiLCJmaWx0ZXJCb2FyZCIsImZpbmRJbmRleCIsInJlZHVjZSIsInIiLCJuIiwiYWRkQ2xhc3NUb0NlbGwiLCJyYW5kb20xIiwicmFuZG9tMiIsImZyZWVSb3ciLCJyYW5kb21OdW1iZXJGb3JDYXJyaWVyMSIsInJhbmRvbU51bWJlckZvckNhcnJpZXIyIiwicmFuZG9tTnVtYmVyRm9yQmF0dGxlc2hpcDEiLCJyYW5kb21OdW1iZXJGb3JCYXR0bGVzaGlwMiIsInJhbmRvbU51bWJlckZvckRlc3Ryb3llcjEiLCJyYW5kb21OdW1iZXJGb3JEZXN0cm95ZXIyIiwicmFuZG9tTnVtYmVyRm9yU3VibWFyaW5lMSIsInJhbmRvbU51bWJlckZvclN1Ym1hcmluZTIiLCJyYW5kb21OdW1iZXJGb3JQYXRyb2wxIiwicmFuZG9tTnVtYmVyRm9yUGF0cm9sMiIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==