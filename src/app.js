import GameView from 'app/views/game_view';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

$(document).ready(function() {

  var game = new GameView({
    el: $('body')
  });

  game.render();
});
