//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//      This is the game model.
//      It's responsible for managing the game status with the server.

//      Server interactions:
//      POST /games  - Creates a new game returning its ID.
//      PUT /game/id - Updates the game status. Continues or stops the current play.
//      GET /game/id - Returns the current game status.

var Game = Backbone.Model.extend({
    urlRoot: '/games',

    defaults: {
        score: 0,
        brains: [],
        shots: [],
        runners: []
    },

    initialize: function(){
        this.on('sync', this.sync_success, this);
    },

    // sync was successful. We need to update the game models
    // according to the server response
    sync_success: function(){
        console.log('sync success');
        
        // Update our Play collection   
    }
});