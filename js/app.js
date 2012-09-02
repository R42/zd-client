//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//		This is the entry point for the application

var gameModel = new Game({ nickname: 'Threepwood' });
var gameView = new GameView({ model: gameModel });

gameView.render();
$('.game-area').html(gameView.el);