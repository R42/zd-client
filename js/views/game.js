//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//		This is the Game view.
//		It will show the controls to play the game, the dice from each play
//		and the current number os brains and shots.

var GameView = Backbone.View.extend({
	template: _.template(
		'<button class="play-button" type="button">play</button>' +
		'<button class="stop-button" type="button">stop</button>' +
		'<p>Your total number of victory points is <%= vp %>' + 
		'<p>In this turn you already ate <%= score %> delicious brains. Eat <%= (13-score) %> more and you\'ll get a victory point as dessert.</p>' +
		'<% if(typeof(action) !== \'undefined\') { %>' +
			'<% if(action === \'roll\') { %>' +
				'<% if(shots.length >= 3) { %>' +
					'<p>BAM! That\'s too many shots in your zombie face...</p>' +
				'<% }' +
				'   else { %>' +
						'<p>So far you rolled <%= brains.length %> brains and <%= shots.length %> shots</p>' +
				'<% } %>'+
			'<% }' +
			'   else { %>' +
					'<p>You\'re stopping!? Well, that\'s a wise decision. For a zombie...</p>' +
			'<% } %>' +
		'<% } %>'
	),

	events: {
		'click .play-button': 'play',
		'click .stop-button': 'stop'
	},

	initialize: function(){
		this.playView = new PlayView({});

		this.model.on('played-rolled', this.render, this);
		this.model.on('played-stopped', this.render, this);
	},

	play: function(e){
		this.model.play('roll');
	},

	stop: function(e){
		this.model.play('stop');
	},

	render: function(){
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));

		var currentPlay = this.model.getCurrentPlay();
		if(currentPlay){
			this.playView.collection = currentPlay;
			this.$el.append(this.playView.render().el);
		}
	},

	renderPlay: function(){
		this.playView.collection = this.model.getCurrentPlay();

		this.playView.render().el;
	}
});