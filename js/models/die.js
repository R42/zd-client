//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//      This is the Die model.
//      It represents a single die.

var Die = Backbone.Model.extend({
    initialize: function(){
        
    },

    log: function(){
    	console.log('A ' + this.get('color') + ' ' + this.get('face'));
    }
});