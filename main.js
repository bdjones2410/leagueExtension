

  var playing ={


      init:function(){
        playing.styling();
      },

      styling: function(){
        var curPlaying ="";
          _.each(playersnChamps, function(el){
            curPlaying += '<div class="playerbox">'
            +'<div class="playingImg">'
            +'<img src="'
            +el.champImg
            +'" alt="">'
            +'</div>'
            +'<div class="playerName">'
            +'<h2 class="player">'
            +el.name
            +'</h2>'
            +'</div>'
            +'</div>'
        });
        $('.curentlyPlaying').html(curPlaying);
      },

  };
