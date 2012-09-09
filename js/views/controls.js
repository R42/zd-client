//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//    This is the Controls view.
//    It will show the controls to play the game.

var ControlsView = Backbone.View.extend({

  className: 'controls',

  events: {
    'click .roll': 'play',
    'click .stop': 'stop'
  },

  initialize: function(){
  },

  render: function(){
    this.$el.html($('#controlsTemplate').html());

    return this;
  },

  play: function(e){
    this.model.play('roll');
  },

  stop: function(e){
    this.model.play('stop');
  }
});
