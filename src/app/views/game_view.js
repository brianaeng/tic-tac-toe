import Game from 'app/models/game';
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const GameView = Backbone.View.extend({
  initialize: function(){
    console.log("GameView made");

    this.listenTo(this.model, "change", this.render);

    this.$(".open").attr('chosenIcon', "X");
  },
  render: function(){
    console.log("rendering GameView");
  },
  events: {
    'click .open': 'makeMove',
    'click .coin-flip': 'setFirstPlayer',
    'click .close': 'closeCoinFlip',
    'click .new-game': 'reloadPage'
  },
  reloadPage: function(){
    location.reload();
  },
  setFirstPlayer: function(){
    this.$(".coin-flip, .intro").hide();
    console.log("in setFirstPlayer");
    var coinSides = ["HEADS", "TAILS"];
    this.$(".flip-result").html(coinSides[Math.floor(Math.random()*2)] + " wins! They are X and the other is O.");
    this.$(".result-popup").show();
    this.$(".close").show();
  },
  closeCoinFlip: function(){
    this.$("#welcome").hide();
    this.$(".board").show();
  },
  updateBoard: function(){
    for (var i = 0; i < this.model.get("board").length; i++) {
      var target = "#space-" + i;
      console.log(target);

      if (this.model.get("board")[i] == 1) {
        console.log("changing " + i + " to X");
        this.$(target).html("X");
      }
      else if (this.model.get("board")[i] == -1) {
        console.log("changing " + i + " to O");
        this.$(target).html("O");
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
        result = "X";
      }
      else if (sum === -3) {
        result = "O";
      }
    }

    if (this.model.get("totalMoves") === 9){
      result =  "draw";
    }

    return result;
  },
  freezeBoard: function(){
    for (var i = 0; i < this.model.get("board").length; i++) {
      var target = "#space-" + i;
      this.$(target).removeClass("open");
      console.log("removing class from " + target);
    }
  },
  getJSON: function(){
    var gameWinner = this.checkWinner();
    var filledBoard = [];

    for (var i = 0; i < this.model.get("board").length; i++){
      if (this.model.get("board")[i] == 1) {
        filledBoard.push("X");
      }
      else if (this.model.get("board")[i] == -1){
        filledBoard.push("O");
      }
      else if (this.model.get("board")[i] === 0) {
        filledBoard.push(" ");
      }
    }

    var gameJSON = {
      players: ["X Player", "O Player"],
      outcome: gameWinner,
      board: filledBoard
    };

    return gameJSON;
  },
  makeMove: function(e){
    console.log(e.target);
    var target = e.target.id;
    var location = parseInt(target.charAt(target.length - 1));
    console.log("clicked spot " + location);

    this.model.set("totalMoves", this.model.get("totalMoves") + 1);
    console.log("total moves = " + this.model.get("totalMoves"));
    if (this.model.get("totalMoves") % 2 !== 0){
      var newBoardX = this.model.get("board");
      newBoardX[location] = 1;
      // console.log("see if new board works: " + newBoard);
      this.model.set("board", newBoardX);
      console.log("changed to 1 - board: " + this.model.get("board"));
      this.$(".open").attr('chosenIcon', "O");
    }
    else {
      var newBoardO = this.model.get("board");
      newBoardO[location] = -1;
      this.model.set("board", newBoardO);
      console.log("changed to -1 - board: " + this.model.get("board"));
      this.$(".open").attr('chosenIcon', "X");
    }

    this.$(e.target).removeClass("open");
    this.updateBoard();

    var checkEnd = this.checkWinner();
    if (checkEnd !== null){
      this.freezeBoard();
      this.$(".game-result").html("Result: " + checkEnd);
      this.$(".end-game").show();

      var gameJSON = this.getJSON();
      this.model.save(gameJSON);
    }
  }
});

export default GameView;
