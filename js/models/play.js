//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//      This is the Play collection.
//      It represents a single play, containing the dice.

var Play = Backbone.Collection.extend({
	model: Die,

    initialize: function(){
        
    },

    log: function(){
    	console.log('Well Zombie, here\'s the result of the hunt:');
    	_.each(this.models, function(die){
    		die.log();
    	});
    }
});