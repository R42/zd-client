//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//		This is the Game view.
//		It encapsulates the Hud, the Dice view and the controls.

var GameView = Backbone.View.extend({

	className: 'zd',

	initialize: function(){
    this.hud = new HudView({model: this.model});
    this.dice = new DiceView({model: this.model});
    this.controls = new ControlsView({model: this.model});
	},

	render: function(){
    this.$el.html($('#gameTemplate').html());
    this.$('.ui').append(this.hud.render().$el);
    this.$('.ui').append(this.dice.render().$el);
    this.$('.ui').append(this.controls.render().$el);

		return this;
	}
});