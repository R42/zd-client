//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//    This is the Social view.
//    It will show notifications about every player's game

var SocialNotification = Backbone.View.extend({
  template: _.template($('#notificationTemplate').html()),
  className: 'notification',

  messageFor: function(notification) {
    return {
      'playerStartedGame': 'started playing',
      'playerVictory': 'won a victory point',
      'playerShotgunned': 'was shotgunned!',
      'playerOnARoll': 'is on a brain eating frenzy',
      'playerPlayedItSafe': 'chickened out'
    }[notification.get('ev')];
  },

  render: function() {
    var nickname = this.model.get('nickname');
    var message = this.messageFor(this.model);

    this.$el.html(this.template({nickname: nickname, message: message}));

    return this;
  }
});

var SocialView = Backbone.View.extend({
  className: 'socialBox',

  initialize: function(){
    this.collection = new Notifications();
    this.collection.on('add', this.addOne, this);
    this.collection.on('remove', this.removeOne, this);
    this.collection.on('reset', this.addAll, this);
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(notification){
    var view = new SocialNotification({ model: notification });
    view.$el.attr('id', notification.cid);
    this.$el.prepend(view.render().el);
    setTimeout(function() {view.$el.fadeOut();}, 4*1000);
  },

  removeOne: function(notification){
    this.$('#' + notification.cid).detach();
  },

  render: function() {
    this.collection.forEach(this.addOne, this);
    return this;
  }
});