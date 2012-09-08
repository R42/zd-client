//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//    This is the Hud view.
//    It will show the status of the game -
//    the current number os brains and shots and vp.

var HudView = Backbone.View.extend({
  template: _.template($('#hudTemplate').html()),
  className: 'hud',

  initialize: function(){
    this.model.on('change', this.render, this);
  },

  render: function(){
    var v = {};
    v.vp = this.model.get('vp');
    v.brains = this.model.get('brains').length;
    v.remaining = 13 - this.model.get('score');
    v.shots = this.model.get('shots').length;
    
    if (v.remaining < 0)
      v.remaining = 0;

    this.$el.html(this.template(v));

    return this;
  }
});