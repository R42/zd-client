//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//    This is the UI view.
//    It encapsulates the Hud, the Dice view and the controls.

var UiView = Backbone.View.extend({
  template: _.template($('#uiTemplate').html()),
  className: 'ui',

  initialize: function(){
    this.hud = new HudView();
    this.dice = new DiceView();
    this.controls = new ControlsView();
  },

  render: function(){

    this.$el.html(this.template({
      hud: this.hud.render().el.outerHTML,
      dice: this.dice.render().el.outerHTML,
      controls: this.controls.render().el.outerHTML
    }));

    return this;
  }
});
