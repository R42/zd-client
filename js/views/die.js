//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//		This is the Die view.
//		It shows a single die. Simple huh?

var DieView = Backbone.View.extend({
  className: 'die',
  tagName: 'span',

  initialize: function() {
  },

  hide: function() {
  	this.$el.removeClass('green');
  	this.$el.removeClass('red');
  	this.$el.removeClass('yellow');
  	this.$el.removeClass('shot');
  	this.$el.removeClass('brain');
  	this.$el.removeClass('runner');
  	this.$el.removeClass('rolling');
  },

  rollTo: function(die) {
  	this.roll();
  	var self = this;
  	setTimeout(function() { self.setFace(die); }, Math.random() * 1000 + 500);
  },

  setFace: function(die) {
  	this.hide();
  	this.$el.removeClass('rolling');
  	this.$el.addClass(die.get('color')).addClass(die.get('face'));
  },

  roll: function() {
  	this.hide();
  	this.$el.addClass('rolling');
  },

  render: function() {
    return this;
  }
});