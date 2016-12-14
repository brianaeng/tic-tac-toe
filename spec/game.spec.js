import Game from "game";


describe('Game', function(){
  var gameTest = new Game();

  it('should initialize a board', function(){
    expect(gameTest.board).toEqual([0,0,0,0,0,0,0,0,0]);
  });

  it('should initialize a variable for number of moves', function(){
    expect(gameTest.totalMoves).toEqual(0);
  });

  it('should initialize two players', function(){
    expect(gameTest.playerOne).toEqual('Player One');
    expect(gameTest.playerTwo).toEqual('Player Two');
  });

  describe('setFirstPlayer', function(){
    it('should randomly choose first player', function(){
      expect(gameTest.setFirstPlayer).toBeDefined();
    });
  });

  describe('makeMove', function(){
    it('should allow player one to choose a position and add move to board', function(){
      expect(gameTest.makeMove(0)).toEqual([1,0,0,0,0,0,0,0,0]);
      expect(gameTest.totalMoves).toEqual(1);
    });

    it('should allow player two to choose a position and add move to board', function(){
      expect(gameTest.makeMove(1)).toEqual([1,-1,0,0,0,0,0,0,0]);
      expect(gameTest.totalMoves).toEqual(2);
    });

    it('should allow player one to choose a position and add move to board', function(){
      expect(gameTest.makeMove(7)).toEqual([1,-1,0,0,0,0,0,1,0]);
      expect(gameTest.totalMoves).toEqual(3);
    });

    it('should not allow player two to choose a position that is taken', function(){
      expect(function() {
        gameTest.makeMove(0);
      }).toThrow("This spot is already taken.");
    });

    it('should not allow a player to choose a spot not on the board', function(){
      expect(function() {
        gameTest.makeMove(1000);
      }).toThrow("This is not a spot on the board.");
    });
  });

  describe('checkWinner', function(){
    it('should check to see if a player won (player 1 should win)', function(){
      var winningGameOne = new Game();
      winningGameOne.board = [1,1,1,0,0,0,0,0,0];
      expect(winningGameOne.checkWinner()).toEqual("Player One wins!");
    });

    it('should check to see if a player won (player 2 should win)', function(){
      var winningGameTwo = new Game();
      winningGameTwo.board = [-1,-1,-1,0,0,0,0,0,0];
      expect(winningGameTwo.checkWinner()).toEqual("Player Two wins!");
    });

    it('should check to see if players tied', function(){
      var tiedGame = new Game();
      tiedGame.board = [1,1,-1,-1,-1,1,1,-1,1];
      tiedGame.totalMoves = 9;
      expect(tiedGame.checkWinner()).toEqual("You tied!");
    });
  });

  // describe()


}); // end of Game describe
