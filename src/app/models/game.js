import Backbone from 'backbone';

const Game = Backbone.Model.extend({
  defaults:  {
    board: [0,0,0,0,0,0,0,0,0],
    playerOne: "Player One",
    playerTwo: "Player Two",
    totalMoves: 0
  },
  initialize: function(options){
    console.log("Game made");
  }
});

export default Game;
