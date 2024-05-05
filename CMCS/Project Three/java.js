var board = ["", "", "", "", "", "", "", "", ""];
var userMove;
var csymbol = "o";
var token = "x";
var moveCounter = 0;
var winner = '';
var cMove = null;

// clear the board
function undoMove() {
  for (var i = 0; i < board.length; i++) {
    board[i] = '';
    document.getElementById('s' + (i + 1)).value = '';
  }
  moveCounter = 0;
  winner = '';
  userMove = null;
  alert("board cleared");
}

// player's move 
  function storeValues() {
    userMove = null;

    for (var i = 0; i < board.length; i++) {
      if ((board[i] !== document.getElementById('s' + (i + 1)).value) && (document.getElementById('s' + (i + 1)).value != csymbol)) {
        userMove = i;
        moveCounter += 1;
        break;
      }
    }

    for (var i = 0; i < board.length; i++) {
      board[i] = document.getElementById('s' + (i + 1)).value;
    }


    checkWin();
    win();
  }


// winning the game 
function checkWin() {
  if (board[0] == board[1] && board[1] == board[2] && board[0] != "") {
    winner = board[0];
    alert("The winner is: " + winner);
  }
  else if (board[3] == board[4] && board[4] == board[5] && board[3] != "") {
    winner = board[3];
    alert("The winner is: " + winner);
  }
  else if (board[6] == board[7] && board[7] == board[8] && board[6] != "") {
    winner = board[6];
    alert("The winner is: " + winner);
  }
  else if (board[0] == board[3] && board[3] == board[6] && board[0] != "") {
    winner = board[0];
    alert("The winner is: " + winner);
  }
  else if (board[1] == board[4] && board[4] == board[7] && board[1] != "") {
    winner = board[1];
    alert("The winner is: " + winner);
  }
  else if (board[2] == board[5] && board[5] == board[8] && board[2] != "") {
    winner = board[2];
    alert("The winner is: " + winner);
  }
  else if (board[0] == board[4] && board[4] == board[8] && board[0] != "") {
    winner = board[0];
    alert("The winner is: " + winner);
  }
  else if (board[2] == board[4] && board[4] == board[6] && board[2] != "") {
    winner = board[2];
    alert("The winner is: " + winner);
  }
  else {
    for (var i = 0; i < board.length; i++) {
      if (board[i] == "") {
        alert("no winner yet")
        break;
      }
      else if (i == 8 && board[i] != "") {
        alert("It's a tie")
        break;
      }
    }
  }
}

// computer's first move
function mover(i) {
  document.getElementById("s" + (i + 1)).value = csymbol;
  board[i] = csymbol;
  cMove = i;
}

// computer looking to win
function win() {
  if (winner !== '') {
    return;
  }
  else if ((board[0] == board[1]) && (board[2] == '') && (board[0] == csymbol)) {
    mover(2);
    checkWin();
    return;
  }
  else if ((board[0] == board[2]) && (board[1] == '') && (board[0] == csymbol)) {
    mover(1);
    checkWin();
    return;
  }
  else if ((board[0] == board[3]) && (board[6] == '') && (board[0] == csymbol)) {
    mover(6);
    checkWin();
    return;
  }
  else if ((board[0] == board[6]) && (board[3] == '') && (board[0] == csymbol)) {
    mover(3);
    checkWin();
    return;
  }
  else if ((board[8] == board[7]) && (board[6] == '') && (board[8] == csymbol)) {
    mover(6);
    checkWin();
    return;
  }
  else if ((board[8] == board[6]) && (board[7] == '') && (board[8] == csymbol)) {
    mover(7);
    checkWin();
    return;
  }
  else if ((board[8] == board[5]) && (board[2] == '') && (board[8] == csymbol)) {
    mover(2);
    checkWin();
    return;
  }
  else if ((board[8] == board[2]) && (board[5] == '') && (board[8] == csymbol)) {
    mover(5);
    checkWin();
    return;
  }

  for (var i = 1; i < 8; i++) {
    if ((board[i] == board[i - 1]) && (board[i + 1] == '') && (board[i] == csymbol) && (i == 1 || i == 4 || i == 7)) {
      mover(i + 1);
      checkWin();
      return;
    }
    else if ((board[i] == board[i + 1]) && (board[i - 1] == '') && (board[i] == csymbol) && (i == 1 || i == 4 || i == 7)) {
      mover(i - 1);
      setTimeout(checkWin(), 1000);
      return;
    }
    else if ((board[i] == board[i + 3]) && (board[i + 6] == '') && (board[i] == csymbol) && (i == 1 || i == 2)) {
      mover(i + 6);
      checkWin();
      return;
    }
    else if ((board[i] == board[i + 6]) && (board[i + 3] == '') && (board[i] == csymbol) && (i == 1 || i == 2)) {
      mover(i + 3);
      checkWin();
      return;
    }
    else if ((board[i] == board[0]) && (board[8] == '') && (board[i] == csymbol) && (i = 4)) {
      mover(i + 4);
      checkWin();
      return;
    }
    else if ((board[i] == board[8]) && (board[0] == '') && (board[i] == csymbol) && (i = 4)) {
      mover(i - 4);
      checkWin();
      return;
    }
    else if ((board[i] == board[i - 2]) && (board[i + 2] == '') && (board[i] == csymbol) && (i = 4)) {
      mover(i + 2);
      checkWin();
      return;
    }
    else if ((board[i] == board[i + 2]) && (board[i - 2] == '') && (board[i] == csymbol) && (i = 4)) {
      mover(i - 2);
      checkWin();
      return;
    }
  }
  compMove();
}

// blocking player from winning
function attack() {
  for (var i = 1; i < 8; i++) {
    if (board[i] == cMove) {
      if ((board[i] == board[i - 1]) && (board[i + 1] == '') && (i == 1 || i == 4 || i == 7)) {
        mover(i + 1);
      }
      else if ((board[i] == board[i + 1]) && (board[i - 1] == '') && (i == 1 || i == 4 || i == 7)) {
        mover(i - 1);
      }
      else if ((board[i] == board[i + 2]) && (board[i + 4] == '') && (i == 2)) {
        mover(i + 4);
      }
      else if ((board[i + 1] == '') && (board[i - 1] == '') && (i == 1 || i == 4 || i == 7)) {
        mover(i + 1);
      }
      else if ((board[i - 1] == '') && (board[i + 1] == '') && (i == 1 || i == 4 || i == 7)) {
        mover(i + 1);
      }
    }
  }
  if (cMove == 0) {
    if (board[0] == board[4] && board[8] == '') {
      mover(8);
    }
    else if (board[0] == board[8] && board[4] == '') {
      mover(4);
    }
    else if (board[0] == board[1] && board[2] == '') {
      mover(2);
    }
    else if (board[0] == board[3] && board[6] == '') {
      mover(6);
    }
    else {
      iterate();
    }
  }
  else if (cMove == 8) {
    iterate();
  }
  else {
    iterate();
  }
}

// check for a winner, picks the center, attempts to align tokens
function compMove() {
  if (winner !== '') {
    return;
  }
  if (moveCounter == 1 && board[0] == token) {
    mover(8);
  }
  else if (moveCounter == 1 && board[2] == token) {
    mover(6);
  }
  else if (moveCounter == 1 && board[6] == token) {
    mover(2);
  }
  else if (moveCounter == 1 && board[8] == token) {
    mover(0);
  }
  else if (board[4] == "") {
    mover(4);
  }
  else if (userMove == 0) {
    if ((board[1] == token) && (board[2] == "")) {
      mover(2);
    }
    else if ((board[3] == token) && (board[6] == "")) {
      mover(6);
    }
    else if ((board[4] == token) && (board[8] == "")) {
      mover(8);
    }
    else {
      attack();
    }
  }
  else if (userMove == 1) {
    if ((board[0] == token) && (board[2] == "")) {
      mover(2);
    }
    else if ((board[0] == "") && (board[2] == token)) {
      mover(0);
    }
    else if ((board[4] == token) && (board[7] == "")) {
      mover(7);
    }
    else {
      attack();
    }
  }
  else if (userMove == 2) {
    if ((board[4] == token) && (board[6] == "")) {
      mover(6)
    }
    else if ((board[1] == token) && (board[0] == "")) {
      mover(0);
    }
    else if ((board[0] == token) && (board[1] == "")) {
      mover(1);
    }
    else if ((board[6] == token) && (board[8] == "")) {
      mover(8);
    }
    else if ((board[8] == token) && (board[5] == "")) {
      mover(5);
    }
    else {
      attack();
    }
  }
  else if (userMove == 3) {
    if ((board[0] == token) && (board[6] == "")) {
      mover(6);
    }
    else if ((board[6] == token) && (board[0] == "")) {
      mover(0);
    }
    else if ((board[4] == token) && (board[5] == "")) {
      mover(5);
    }
    else {
      attack();
    }
  }
  else if (userMove == 4) {
    if ((board[0] == token) && (board[8] == "")) {
      mover(8)
    }
    else if ((board[2] == token) && (board[6] == "")) {
      mover(6);
    }
    else if ((board[6] == token) && (board[2] == "")) {
      mover(2);
    }
    else if ((board[8] == token) && (board[0] == "")) {
      mover(0);
    }
    else if ((board[1] == token) && (board[7] == "")) {
      mover(7);
    }
    else if ((board[7] == token) && (board[1] == "")) {
      mover(2);
    }
    else if ((board[3] == token) && (board[5] == "")) {
      mover(5);
    }
    else if ((board[5] == token) && (board[3] == "")) {
      mover(3);
    }
    else {
      attack();
    }
  }
  else if (userMove == 5) {
    if ((board[2] == token) && (board[8] == "")) {
      mover(8);
    }
    else if ((board[8] == token) && (board[2] == "")) {
      mover(2);
    }
    else if ((board[4] == token) && (board[3] == "")) {
      mover(3);
    }
    else {
      attack();
    }
  }
  else if (userMove == 6) {
    if ((board[3] == token) && (board[0] == "")) {
      mover(0);
    }
    else if ((board[0] == token) && (board[3] == "")) {
      mover(3);
    }
    else if ((board[7] == token) && (board[8] == "")) {
      mover(8);
    }
    else if ((board[8] == token) && (board[7] == "")) {
      mover(7);
    }
    else if ((board[4] == token) && (board[2] == "")) {
      mover(2);
    }
    else {
      attack();
    }
  }
  else if (userMove == 7) {
    if ((board[6] == token) && (board[8] == "")) {
      mover(8);
    }
    else if ((board[8] == token) && (board[6] == "")) {
      mover(6);
    }
    else if ((board[4] == token) && (board[1] == "")) {
      mover(1);
    }
    else {
      attack();
    }
  }
  else if (userMove == 8) {
    if ((board[4] == token) && (board[0] == "")) {
      mover(0);
    }
    else if ((board[7] == token) && (board[6] == "")) {
      mover(6);
    }
    else if ((board[5] == token) && (board[2] == "")) {
      mover(2);
    }
    else if ((board[2] == token) && (board[5] == "")) {
      mover(5);
    }
  }
  else {
    attack();
  }
}




