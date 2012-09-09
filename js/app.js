//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//		This is the entry point for the application

$(function() {
  var gameModel = new Game({ nickname: 'Threepwood' });
  var gameView = new GameView({ model: gameModel });

  gameView.render().$el.prependTo('body');
});
