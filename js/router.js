//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

var ZdRouter = Backbone.Router.extend({

  routes: {
    '': 'root',
    'game': 'game',
    'ranking': 'ranking'
  },

  initialize: function() {
  
    this.gameModel = new Game({ nickname: 'Unknown Zombie' });
    this.gameView = new GameView({ model: this.gameModel });
    this.welcomeView = new WelcomeView();
    this.rankingView = new RankingView();
    this.socialView = new SocialView();

    this.gameView.render().$el.hide().prependTo('body');
    this.welcomeView.render().$el.hide().prependTo('body');
    this.rankingView.render().$el.hide().prependTo('body');
    this.socialView.render().$el.appendTo('body');
  },

  root: function() {
    $('body > div.zd').hide();
    this.welcomeView.$el.show();
  },

  game: function() {
    this.gameModel.set({ nickname: this.welcomeView.getNickname() });
    $('body > div.zd').hide();
    this.gameView.$el.show();
  },

  ranking: function() {
    $('body > div.zd').hide();
    this.rankingView.render().$el.show();
  }
});
    
var router;
$(function() {
  router = new ZdRouter();

  Backbone.history.start();
});

