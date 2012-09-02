//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//		This is the Die view.
//		It shows a single die. Simple huh?

var DieView = Backbone.View.extend({

	tagName: 'li',
	
	template: _.template(
		'<span>A <%= color %> <%= face %></span>'
	),

	render: function(){
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));

		return this;
	}
});