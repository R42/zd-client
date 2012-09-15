//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//    This is the Welcome view.

var WelcomeView = Backbone.View.extend({

  className: 'zd',

  randomZombieName: function() {
    var zombieNames = ['Thriller','Buffy','Left 5 Dead','Omega Man','Resident','Stubbs','Necromorph', 'Brainz','Joe Zombie','Rob','Legend','Legion','Crypt keeper','Gilgamesh','Ishtar','Chthulhu ','Draugr','Jikininki','Zombi','Zom-A','Herbert','Walker','Jay','Pet er','Nard-dog','Beardley','Ky Ra','Romero','Juliet','Lovecraft','Cra ven','Dellamorte','Max','Yogurt','Bombie','Inferi','Doomsday'];
    var chosen = zombieNames[Math.floor(zombieNames.length * Math.random())];
    return chosen;
  },

  getNickname: function() {
    return this.$el.find('.nickname').val();
  },

  render: function(){
    this.$el.html($('#welcomeTemplate').html());
    this.$el.find('.nickname').val(this.randomZombieName());
    
    return this;
  }
});