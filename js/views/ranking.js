//      Zombie Dice client. Made by Igor Soarez and João Duarte for lxjs 2012

//    This is the ranking view.

var RankingEntryView = Backbone.View.extend({
  className: 'entry',
  tagName: 'li',

  render: function() {
    this.$el.text(this.model.nickname);
    return this;
  }
});

var RankingView = Backbone.View.extend({
  className: 'zd ranking',

  render: function(){
    
    var el = this.$el;

    var ranking = this.ranking = new Ranking();
    this.ranking.fetch({success: function() {
      var results = ranking.toJSON();
      _.chain(results).keys().sort().each(function(key){
        el.find('.list').append(new RankingEntryView({model: results[key]}).render().$el);
      });
      el.find('.loading').fadeOut(function() {
        el.find('.list').fadeIn();
      });
    }});

    el.html($('#rankingTemplate').html());
    el.find('.list').hide();
    el.find('.loading').show();

    return this;
  }
});