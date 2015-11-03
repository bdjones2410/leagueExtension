var featuredArr = [];
var classic = [];
var other = [];
var playersnChamps = [];
champAr = [];
champKeyName =[];
var keys = [];
var champPlayed;


$.ajax ({
  url:"https://na.api.pvp.net/observer-mode/rest/featured?api_key=aa6fb45a-b8cb-40ba-838b-83453f2e206c",
  method:'GET',
  success: function(data) {

    featuredArr = data.gameList;
    _.each(featuredArr, function(el){
      if(el.gameMode === "CLASSIC"){
        classic.push(el);
      }
      else {
        other.push(el);
      }

    });
    _.each(classic, function(el){
      _.each(el.participants, function(it){
        playersnChamps.push({name: it.summonerName, champId: it.championId, champImg: ""});
        ;})
      });
      keys = _.pluck(playersnChamps, 'champId');

      getChampion();
  }
});


function getChampion() {
  $.ajax({
    url:"http://ddragon.leagueoflegends.com/cdn/5.22.1/data/en_US/champion.json",
    method:'GET',
    success: function(data){
      champAr.push(data);

    _.each(champAr[0].data, function(el){
      champKeyName.push({name: el.id, image: el.image.full, key:el.key})

      _.each(champKeyName, function(el){
        el.key = parseInt(el.key);
       });

       })
       champPlayed = _.filter(champKeyName, function(el){
         return _.contains(keys, el.key) });

         _.each(playersnChamps, function(el){
               _.each(champPlayed, function(it){
                 if(it.key === el.champId){
                   el.champImg = it.image;
                 }
               })
         })
         _.each(playersnChamps, function(el){
           var web = "http://ddragon.leagueoflegends.com/cdn/5.22.1/img/champion/";
           web+= el.champImg;
           el.champImg = web;
         })

         playing.init();
    }
  });
}
