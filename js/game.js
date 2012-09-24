//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//      This is the game model.
//      It's responsible for managing the game status with the server.

//      Server interactions:
//      POST /games  - Creates a new game returning its ID.
//      PUT /game/id - Updates the game status. Continues or stops the current play.
//      GET /game/id - Returns the current game status.

var Game = Backbone.Model.extend({

    urlRoot: Config.baseURL + '/games',

    defaults: {
        score: 0,
        vp: 0,
        rolled: [],
        brains: [],
        shots: [],
        runners: []
    },

    initialize: function(){
        this.on('sync', this.playSuccess, this);
    },

    // Starts a new game with the currently defined nickname.
    // A POST request is made to get the game current status.
    start: function(){
        // ID has to be set to null.
        // Otherwise instead of a POST, a PUT would be sent.
        this.set({id: null});

        // Play
        this.play('roll');
    },

    // Makes a new play by rolling the dice or stopping the turn.
    // The action parameter has 2 possible values: 'roll' or 'stop'.
    play: function(action){
        this.set({action: action});

        // Sync
        this.save();
    },

    // Sets a new nickname.
    setNickname: function(nickname){
        this.set({nickname: nickname});
    },

    // Returns the current play model
    getCurrentPlay: function(){
        return this.get('action') === 'roll' ? this.currentPlay : null;
    },

    // Handler for the 'played' event.
    playSuccess: function(){
        if(this.get('action') === 'roll'){
            // Let's update the Play model
            this.currentPlay = new Play();
            _.each(this.get('rolled'), function(elem){
                var die = new Die(elem);
                this.currentPlay.add(die);
            }, this);

            this.log();
        }
        else{
            console.log('A wise decision (for a zombie). So far you ate ' + this.get('score') + ' delicious brains!');
        }

        this.trigger('played'); 
    },

    log: function(){
        if(this.get('shots').length >= 3){
            console.log('BAM! That\'s too many shots in your zombie face...');
        }
        else{
            this.currentPlay.log();
            console.log('Until now you have:');
            console.log(this.get('brains').length + ' brains');
            console.log(this.get('shots').length + ' shots');
        }
    }
});