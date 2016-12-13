
var Game = function(){
  this.board = [0,0,0,0,0,0,0,0,0];
  this.playerOne = 'Player One';
  this.playerTwo = 'Player Two';

};

Game.prototype.setFirstPlayer = function(){
  var players = [this.playerOne, this.playerTwo]
  return players[Math.floor(Math.random()*2)];
};



export default Game; // this is how it is exported with webpack
