$('form').submit(function(event){
  //alert('I am submitting');
  event.preventDefault();
});

$('#movie').click(function(){
  //alert('I am submitting');
  location.href = 'https://github.com/mlrod32/Movie-Search';

});



$('#horror').click(function(){
  //alert('I am submitting');
  location.href = 'https://github.com/mlrod32/Survival-Horror-Test';

});

var steamid = $('.steamid').val();

// $('.steamid').keypress(function(e){
//   console.log(steamid);
//   if(e.which == 13){
//     alert("Pressed");
//     $.ajax({
//     	url: "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=C6FEC7735B668324B4D90CCCEDF623BD&steamid=" +
//        steamid +"&format=json",
//     	//data: {t:input},
//     	dataType: 'json',
//     	success: function(response){
//     		response.response.games.forEach((elem)=>{
//     			$('.steaminfo').append(`<div class="steamName" data-surl=${elem.name}</div>
//                                   <img src = 'http://media.steampowered.com/steamcommunity/public/images/apps/${elem.appid}/${elem.img_logo_url}.jpg'>`);
//     		})
//     		// player.attr('src',$(arrayList)[index])
//     		// newJK.play();
//     	}
//     });
//   }
// });
