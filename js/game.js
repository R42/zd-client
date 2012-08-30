//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//      This is the game model.
//      It's responsible for managing the game status with the server.

//      Server interactions:
//      POST /games  - Creates a new game returning its ID.
//      PUT /game/id - Updates the game status. Continues or stops the current play.
//      GET /game/id - Returns the current game status.

var Game = Backbone.Model.extend({

    defaults: {
        score: 0,
        brains: [],
        shots: [],
        runners: []
    },

    initialize: function(){
    
    },
});