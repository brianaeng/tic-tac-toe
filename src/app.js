import GameView from 'app/views/game_view';
import Game from 'app/models/game';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';


$(document).ready(function() {
  var game = new Game({});

  console.log(game);

  var newGame = new GameView({
    el: $('body'),
    model: game
  });

  newGame.render();

});
