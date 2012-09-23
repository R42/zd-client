//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//      This is the Notifications model.
//      It's responsible for managing the Socket.IO
//      notifications from the server.

var Notification = Backbone.Model.extend({

});

var Notifications = Backbone.Collection.extend({
  initialize: function() {
    this.socket = io.connect(Config.baseURL);

    this.socket.on('connect', function () {
      this.trigger('connect');
    }.bind(this));

    _.each([
      'playerStartedGame',
      'playerVictory',
      'playerShotgunned',
      'playerOnARoll',
      'playerPlayedItSafe'
    ], this.logEvent.bind(this));
  },

  logEvent: function(ev) {
    this.socket.on(ev, function (obj) {
      this.push(new Notification(_.extend(obj, {ev: ev})));

      if (this.length > 10)
        this.shift();
    }.bind(this));
  }
});