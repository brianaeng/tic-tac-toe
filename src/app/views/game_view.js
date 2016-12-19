import Game from 'app/models/game';
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const GameView = Backbone.View.extend({
  initialize: function(){
    console.log("GameView made");

    this.listenTo(this.model, "change", this.render);

    $(".open").attr('chosenIcon', "X");
  },
  render: function(){
    console.log("rendering GameView");
  },
  events: {
    'click .open': 'makeMove',
    'click .coin-flip': 'setFirstPlayer',
    'click .close': 'closeCoinFlip'
  },
  setFirstPlayer: function(){
    $(".coin-flip, .intro").hide();
    console.log("in setFirstPlayer");
    var coinSides = ["HEADS", "TAILS"];
    $(".flip-result").html(coinSides[Math.floor(Math.random()*2)] + " wins! They are Player One and X. Player Two is O.");
    $(".result-popup").show();
    $(".close").show();
  },
  closeCoinFlip: function(){
    $("#welcome").hide();
  },
  updateBoard: function(){
    for (var i = 0; i < this.model.get("board").length; i++) {
      var target = "#space-" + i;
      console.log(target);

      if (this.model.get("board")[i] == 1) {
        console.log("changing " + i + " to X");
        $(target).html("X");
      }
      else if (this.model.get("board")[i] == -1) {
        console.log("changing " + i + " to O");
        $(target).html("O");
      }
    }
  },
  checkWinner: function(){
     var winningMoves = [
      [this.model.get("board")[0], this.model.get("board")[1], this.model.get("board")[2]],
      [this.model.get("board")[3], this.model.get("board")[4], this.model.get("board")[5]],
      [this.model.get("board")[6], this.model.get("board")[7], this.model.get("board")[8]],
      [this.model.get("board")[0], this.model.get("board")[3], this.model.get("board")[6]],
      [this.model.get("board")[1], this.model.get("board")[4], this.model.get("board")[7]],
      [this.model.get("board")[2], this.model.get("board")[5], this.model.get("board")[8]],
      [this.model.get("board")[0], this.model.get("board")[4], this.model.get("board")[8]],
      [this.model.get("board")[6], this.model.get("board")[4], this.model.get("board")[2]]
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

    if (this.model.get("totalMoves") === 9){
      result =  "It's a tie!";
    }

    return result;
  },
  makeMove: function(e){
    //This should fill the spot in the initialized board array, fill the spot on the board (html), remove the .open class (since spot is now taken), and change the .open:hover:after "content" to the next player icon (aka if X turn to O and if O turn to X)
    console.log(e.target);
    var target = e.target.id;
    var location = parseInt(target.charAt(target.length - 1));
    console.log("clicked spot " + location);

    //These two errors seem unnecessary?
    if (location > 8 || location < 0){
      $(".error").html("This is not a spot on the board.");
      $(".error").show();
    }
    else if (this.model.get("board")[location] !== 0){
      $(".error").html("This spot is already taken.");
      $(".error").show();
    }
    else {
      this.model.set("totalMoves", this.model.get("totalMoves") + 1);
      console.log("total moves = " + this.model.get("totalMoves"));
      if (this.model.get("totalMoves") % 2 !== 0){
        var newBoardX = this.model.get("board");
        newBoardX[location] = 1;
        // console.log("see if new board works: " + newBoard);
        this.model.set("board", newBoardX);
        console.log("changed to 1 - board: " + this.model.get("board"));
        $(".open").attr('chosenIcon', "O");
      } //When move is odd (Player 1)
      else {
        var newBoardO = this.model.get("board");
        newBoardO[location] = -1;
        this.model.set("board", newBoardO);
        console.log("changed to -1 - board: " + this.model.get("board"));
        $(".open").attr('chosenIcon', "X");
      } //When move is even (Player 2)
    }

    $(e.target).removeClass("open");
    this.updateBoard();

    var checkEnd = this.checkWinner();
    if (checkEnd !== null){
      $(".game-result").html(checkEnd);
      $(".end-game").show();
    }
  }
});

export default GameView;
