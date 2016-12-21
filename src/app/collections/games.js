import Game from 'app/models/game';
import Backbone from 'backbone';

const Games = Backbone.Collection.extend({
  model: Game,
  url: 'http://tictactoeapi.herokuapp.com/api/v1/games',
  parse: function(data){
    return data.games;
  }
});

export default Games;
