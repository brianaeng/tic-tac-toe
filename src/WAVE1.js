var Game = function(){
  this.board = [0,0,0,0,0,0,0,0,0];
  this.playerOne = 'Player One'; //X & 1
  this.playerTwo = 'Player Two'; //O & -1
  this.totalMoves = 0;
};

Game.prototype.setFirstPlayer = function(){
  var coinSides = ["HEADS", "TAILS"];
  return coinSides[Math.floor(Math.random()*2)] + " is Player One and you are X. Player Two is O.";
};

Game.prototype.checkWinner = function(){
   var winningMoves = [
    [this.board[0], this.board[1], this.board[2]],
    [this.board[3], this.board[4], this.board[5]],
    [this.board[6], this.board[7], this.board[8]],
    [this.board[0], this.board[3], this.board[6]],
    [this.board[1], this.board[4], this.board[7]],
    [this.board[2], this.board[5], this.board[8]],
    [this.board[0], this.board[4], this.board[8]],
    [this.board[6], this.board[4], this.board[2]]
  ];

  var result = null;

  for (var i = 0; i < winningMoves.length; i++) {
    var sum = winningMoves[i].reduce(function(a, b) {
      return a + b;
    }, 0);

    if (sum === 3) {
      result = "Player One wins!";
    }
    else if (sum === -3) {
      result = "Player Two wins!";
    }
  }

  if (this.totalMoves === 9){
    result =  "You tied!";
  }

  return result;
};

Game.prototype.makeMove = function(location){
  if (location > 8 || location < 0){
    $(".error").html("This is not a spot on the board.");
    $(".error").show();
    // throw "This is not a spot on the board.";
  }
  else if (this.board[location] !== 0){
    $(".error").html("This spot is already taken.");
    $(".error").show();
    // throw "This spot is already taken.";
  }
  else {
    $(".error").hide();

    this.totalMoves += 1;
    if (this.totalMoves % 2 !== 0){
      this.board[location] = 1;
    } //When move is odd (Player 1)
    else {
      this.board[location] = -1;
    } //When move is even (Player 2)
  }

  if (this.checkWinner() === null){
    return this.board;
  }
  else {
    return this.checkWinner();
  }
};




export default Game; // this is how it is exported with webpack
