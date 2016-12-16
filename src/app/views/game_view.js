import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const GameView = Backbone.View.extend({
  initialize: function(){

  },
  render: function(){

  },
  events: {
    'click .open': 'makeMove'
  },
  makeMove: function(){
    //This should fill the spot in the initialized board array, fill the spot on the board (html), remove the .open class (since spot is now taken), and change the .open:hover:after "content" to the next player icon (aka if X turn to O and if O turn to X)
    console.log("clicked a spot");
  }
});

export default GameView;
