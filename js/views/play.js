//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//		This is the Play view.
//		It doesn't render any HTML of itself.
//		Instead, it creates a Die view for each model of the collection and
//		delegates the HTML render on each one of those views

var PlayView = Backbone.View.extend({
	
	className: 'play-result',

	template: _.template(
		'<span>Hey zombie, here\'s the result of your hunt:</span>' +
		'<ul></ul>'
	),

	render: function(){
		if(!this.collection){
			return this;
		}

		this.$el.html(this.template());

		this.collection.forEach(function(die){
			var dieView = new DieView({model: die});
			this.$el.find('ul').append(dieView.render().el);
		}, this);

		return this;
	}
});