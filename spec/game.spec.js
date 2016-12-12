import Game from "game";
import Board from "game";

describe('Game', function(){


  it('should initialize a board', function(){
    var gameTest = new Game;
    expect(gameTest.name).toMatch("One")
  });

  // describe()


}); // end of Game describe
