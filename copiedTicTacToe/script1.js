var baseState = function () {
  return [null, null, null, null, null, null, null, null, null];
};
var currentState, turn;
var isWinner = function () {
  // Possible winning combinations
  var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check if there's a winning combo
  var isWinner = wins.filter(function (win) {
    return (
      currentState[win[0]] &&
      currentState[win[0]] === currentState[win[1]] &&
      currentState[win[0]] === currentState[win[2]]
    );
  });

  // Return the winner, or false if there isn't one
  return isWinner.length > 0 ? currentState[isWinner[0][0]] : false;
};
var isFirstInRow = function (id) {
  return (id + 1) % 3 === 1;
};
var isLastInRow = function (id) {
  return (id + 1) % 3 === 0;
};
var buildSquares = function (state, winner) {
  // Setup rows
  var rows = "";

  // Loop through each square in the state
  state.forEach(function (square, id) {
    // Variables
    var value = square ? square : "";
    var selected = square ? ' aria-pressed="true"' : "";
    var disabled = square || winner ? " disabled" : "";

    // Check if it's a new row
    if (isFirstInRow(id)) {
      rows += "<tr>";
    }
    rows +=
      '<td><button class="game-square" data-id="' +
      id +
      '"' +
      selected +
      disabled +
      ">" +
      value +
      "</button></td>";

    // Check if it's the last column in a row
    if (isLastInRow(id)) {
      rows += "</tr>";
    }
  });

  return rows;
};

var buildBoard = function (state) {
  // Check if there's a winner
  var winner = isWinner();

  // Setup the board
  var rows = winner
    ? "<p><strong>" + winner + " is the winner!</strong></p>"
    : "";
  rows += "<table><tbody>";

  // Create each square
  rows += buildSquares(state, winner);
  rows += '</tbody></table><p><button id="play-again">Play Again</button></p>';

  return rows;
};

/**
 * Update the board based on a state
 * @param  {Array} state The state to update from (optional, defaults to currentState)
 */
var updateBoard = function (state) {
  var board = document.querySelector("#game-board");
  if (!board) return;
  board.innerHTML = buildBoard(state || currentState);
};

/**
 * Render the board again based on the current user's turn
 * @param  {Node} square The square that was selected
 */
var renderTurn = function (square) {
  // Get selected value
  var selected = square.getAttribute("data-id");
  if (!selected) return;

  // Update state
  currentState[selected] = turn;

  // Render with new state
  updateBoard();

  // Update turn
  turn = turn === "X" ? "O" : "X";
};

/**
 * Reset the board to it's base state
 */
var resetBoard = function () {
  currentState = baseState();
  turn = "X";
  updateBoard();
};

//
// Inits & Event Listeners
//

// Setup the board
resetBoard();

// Listen for selections
document.addEventListener(
  "click",
  function (event) {
    // If a .game-square was clicked
    if (
      event.target.matches(".game-square") &&
      !event.target.hasAttribute("disabled")
    ) {
      renderTurn(event.target);
    }

    // If #play-again was clicked
    if (event.target.matches("#play-again")) {
      resetBoard();
    }
  },
  false
);
