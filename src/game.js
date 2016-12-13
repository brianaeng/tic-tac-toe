var Game = function(){
  this.board = [0,0,0,0,0,0,0,0,0];
  this.playerOne = 'Player One'; //X & 1
  this.playerTwo = 'Player Two'; //O & -1
  this.totalMoves = 0;
};

// Game.prototype.setFirstPlayer = function(){
//   var players = [this.playerOne, this.playerTwo];
//   return players[Math.floor(Math.random()*2)];
// };

Game.prototype.setFirstPlayer = function(){
  var coinSides = ["HEADS", "TAILS"];
  return coinSides[Math.floor(Math.random()*2)] + "is Player One and you are X. Player Two is O.";
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

  for (var i = 0; i < winningMoves.length; i++) {
    var sum = winningMoves[i].reduce(function(a, b) {
      return a + b;
    }, 0);

    if (sum === 3) {
      return "Player One wins!";
    }
    else if (sum === -3) {
      return "Player Two wins!";
    }
  }

  if (this.totalMoves === 9){
    return "You tied!";
  }
};

Game.prototype.makeMove = function(location){
  if (this.board[location] !== 0){
    throw "This spot is already taken.";
  }
  else {
    this.totalMoves += 1;
    if (this.totalMoves % 2 !== 0){
      this.board[location] = 1;
    } //When move is odd (Player 1)
    else {
      this.board[location] = -1;
    } //When move is even (Player 2)
  }
  this.checkWinner();
  return this.board;
};




export default Game; // this is how it is exported with webpack
