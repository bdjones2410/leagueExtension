$(document).ready(function() {

});

  var playing ={


      init:function(){
        playing.styling();
      },

      styling: function(){
        playing.loadTemp($('body'), playersnChamps, 'curPlaying')
      },

      getTemplate: function(tmpl){
        return _.template(templates[tmpl]);
      },

      loadTemp: function($el, data, tmpl){
        playerHtml = "";
        var template = playing.getTemplate(tmpl);
        _.each(data, function(curel){
          playerHtml += template(curel);
        })
        $el.html(playerHtml);
      },






  };
