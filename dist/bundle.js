/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("var generateRandomScores = function generateRandomScores() {\n  var names = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Alice Lee', 'Bob Brown'];\n  var scores = Array.from({\n    length: names.length\n  }, function () {\n    return Math.floor(Math.random() * 100) + 1;\n  });\n  return names.map(function (name, index) {\n    return {\n      name: name,\n      score: scores[index]\n    };\n  });\n};\nvar populateTable = function populateTable() {\n  var data = generateRandomScores();\n  var tableBody = document.querySelector('.scores-table tbody');\n  tableBody.innerHTML = '';\n  data.forEach(function (item) {\n    var row = document.createElement('tr');\n    row.innerHTML = \"\\n      <td>\".concat(item.name, \"</td>\\n      <td>\").concat(item.score, \"</td>\\n    \");\n    tableBody.appendChild(row);\n  });\n};\ndocument.querySelector('.refresh-btn').addEventListener('click', function () {\n  populateTable();\n});\ndocument.querySelector('.submit-btn').addEventListener('click', function () {\n  var name = document.querySelector('.input-name').value;\n  var score = document.querySelector('.input-score').value;\n  console.log('Name:', name, 'Score:', score);\n});\npopulateTable();\n\n//# sourceURL=webpack://leaderboard/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;