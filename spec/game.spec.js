import Game from "game";


describe('Game', function(){
  var gameTest = new Game();

  it('should initialize a board', function(){

    expect(gameTest.board).toEqual([0,0,0,0,0,0,0,0,0]);
  });

  it('should initialize two players', function(){
    expect(gameTest.playerOne).toEqual('Player One');
    expect(gameTest.playerTwo).toEqual('Player Two');
  });

  describe('setFirstPlayer', function(){
    it('should randomly choose first player', function(){
      expect(gameTest.setFirstPlayer).toBeDefined();
    })
  })


  // describe()


}); // end of Game describe
