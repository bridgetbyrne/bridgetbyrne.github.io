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
    computermove();
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

/*
we want to implement a new algorithm for the computer to move. The algorithm works like this:
1. it iterates through every open space on the board and pretends to move there. 
2. it adds up the number of firendly symbols and foe symbols in each column and assigns a score based on their values.
3. it picks the board with the highest overall 'score' and picks the move associated with it. Obviously winning moves and blocking
moves are given vey high 'scores'


The algorithm is not perfect because it is based on the sum of the friendly points and foe points. 
Also the diagonals don;t work quite right.
*/

function computermove(){
  let scores = [];
  let maxscore = -1;
  let minscore = 0;
  var bestMove;

  for (var i = 0; i <board.length; i++){
    if (board[i] === ''){
      board[i] = csymbol;

      let score = getPoints();

      board[i] = '';

      if (score > maxscore) {
        maxscore = score;
        bestMove = i;
      }
    }
  }
  mover(bestMove)
}

function getPoints(){
  let score = 0;
  //iterate through the columns
  for (var x = 0; x<3; x++){
    let colscorefriend = 0;
    let colscorefoe = 0;
    for (var i = 0; i<6; i+=3){
      if (board[i+x] == csymbol){
        colscorefriend++;
      }else if (board[i+x] == token){
        colscorefoe++;
      }
    }
      if (colscorefriend + colscorefoe == 0){
        score +=0;
      }else if (colscorefriend + colscorefoe == 1){
        score += 2;
      }else if (colscorefriend + colscorefoe == 2){
        score +=5;
      }else if ((colscorefriend + colscorefoe == 3) && (colscorefriend == 3 || colscorefoe == 2)){
        score += 100;
      }else{
        score+=1
      }
    }
  //iterate through the rows

  for (var x = 0; x<6; x+=3){
    let rowscorefriend = 0;
    let rowscorefoe = 0;
    for (var i = 0; i<3; i++){
      if (board[i+x] == csymbol){
        rowscorefriend++;
      }else if(board[i+x] == token){
        rowscorefoe++;
      }
    }
      if (rowscorefriend + rowscorefoe == 0){
        score +=0;
      }else if (rowscorefriend + rowscorefoe == 1){
        score += 2;
      }else if (rowscorefriend + rowscorefoe == 2){
        score +=5;
      }else if((rowscorefriend + rowscorefoe == 3) && (rowscorefriend == 3 || rowscorefoe == 2)){
        score += 100;
      }else{
        score +=1
      }
    }

  //iterate through the diagonals
  for (var x = 0; x<2; x++){
    let diagscore = 0;
    if (board[5] == csymbol){
      diagscore++;
    }if (x == 0 && board[0] == csymbol){
      diagscore++;
    }if (x == 0 && board[8] == csymbol){
      diagscore ++;
    }if (x == 1 && board[2] == csymbol){
    diagscore++;
    }if (x == 1 && board[6] == csymbol){
    diagscore ++;
    }if (diagscore == 0){
        score +=1;
      }else if (diagscore == 1){
        score += 2;
      }else if (diagscore == 2){
        score +=5;
      }else{
        score +=1;
      }
    }

  return score
}


