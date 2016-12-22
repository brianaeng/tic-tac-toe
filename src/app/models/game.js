import Backbone from 'backbone';

const Game = Backbone.Model.extend({
  url: 'https://tictactoeapi.herokuapp.com/api/v1/games',
  parse: function(data){
    return data;
  },
  defaults:  {
    board: [0,0,0,0,0,0,0,0,0],
    totalMoves: 0
  },
  initialize: function(options){
    // console.log("Game made");
  }
});

export default Game;
