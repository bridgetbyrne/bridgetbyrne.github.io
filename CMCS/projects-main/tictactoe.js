var board = ["", "", "", "", "", "", "", "", ""];
var userMove;
var csymbol = "o";
var token = "x";
var moveCounter = 0;
var winner = '';


/* NOTE TO THE READER:
1st: 
This is the largest coding project I have worked on and I am not that good at organizing the code.
2nd:
I know there are some bugs in the code since sometimes the computer fails to win when it has the chance to and sometimes it blunders.
However, the computer is capable of winning if given the chance in most cases. I tried to debug as best I could but I did not catch everything. 

If I was to do this project again (I learned alot along the way), I would probably approach the problem differently from a logical standpoint. possibly I could develop an algorithm that looked at every possible move and assigned a point value to it so the computer could pick the optimal move.*/


/* This function checks the board and stores the new values*/
function storeValues() {
  //storeValues should store each square as its own variable
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

function checkWin() {
  //check horizontals
  //check to see if board[0] is the same as board[1] and board[2]
  if (board[0] == board[1] && board[1] == board[2] && board[0] != "") {
    //if they're the same, set the value of winner to whatever is in board[0]
    winner = board[0];
    //show an alert that says that the winner is that player
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
  //check verticals
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
  //check diagonals
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
        alert("no winner yet, keep playing")
        break;
      }
      else if (i == 8 && board[i] != "") {
        alert("The game is over! Its a tie")
        break;
      }
    }
  }
}

// the mover function is the replaces puts the computer's symbol in the board and in the input box on screen
var cMove = null;
function mover(i) {
  document.getElementById("s" + (i + 1)).value = csymbol;
  board[i] = csymbol;
  cMove = i;
}

// the iterate function is the last resort for the computer's move 
function iterate() {
  for (var i = 0; i < board.length; i++) {
    if (board[i] == "") {
      mover(i);
      break;
    }
  }
}
//The Win function should allow the computer to make the winning move if one is available

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
// if the win function does not make a move, we go to compMove

/*The attack function is the backup for compmove; it is what happens if the player does not have 2 in a row and the computer is 
going to make a move */

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

// chooses what move to make based on user's last move

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

function resetGame() {
  for (var i = 0; i < board.length; i++) {
    board[i] = '';
    document.getElementById('s' + (i + 1)).value = '';
  }
  moveCounter = 0;
  winner = '';
  userMove = null;
  alert("The board has been cleared");
}
