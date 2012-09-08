//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//    This is the Dice view.
//    It will show the thrown dice.

var DiceView = Backbone.View.extend({
  className: 'dice',

  initialize: function(){
    this.dice = [];
    for (var i=0; i<3; ++i) {
      var die = new DieView();
      this.dice.push(die);
      die.$el.appendTo(this.$el);
    }

    this.model.on('change', this.render, this);
  },

  render: function(){
    var play = this.model.getCurrentPlay();

    if (play) {
      for (var i=0; i<3; ++i) {
        this.dice[i].rollTo(play.at(i));
      }
    }

    return this;
  }
});