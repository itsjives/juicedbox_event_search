$(document).ready(function(){
  console.log("here");

var $eSearch = $('#eSearch');
var $button = $('#button');
var $zipButton = $('#zipButton');
var $zipSearch = $('#zipSearch');

// on click if zipcode search zipcode else search by artist name

$button.click(function(event){
  event.preventDefault();
  var $search = $eSearch.val();
  var numericExpression = /^[0-9]+$/;
  $eSearch.val("");
  $('#events').empty();
  if ($search.match(numericExpression)){
    var $zEvents = $.get(`http://api.jambase.com/events?zipCode=${$search}&api_key=`, function(edata){
      for (var i = 0; i < edata['Events'].length; i++){
        for (var j = 0; j < edata['Events'][i]['Artists'].length; j++){
          // console.log(edata);
          $('#events').append(`
            <div class="col m6">
            <div class="card hoverable ">
            <div class="card-image">
            ${getRandom()}
            <span class="card-title">${edata['Events'][i]['Artists'][j]['Name']}</span></div>
            <div class="card-content center">
            <p>${edata['Events'][i]['Venue']['Name']}</p>
            <p><strong>${edata['Events'][i]['Venue']['City']}</strong></p>
            <p>${edata['Events'][i]['Date']}</p></div>
            <div class="card-action"><a href="${edata['Events'][i]['TicketUrl']}">Tickets here</a></div></div></div>`);
        };
      };
    });
  } else {
  var $artist = $.get(`https://rest.bandsintown.com/artists/${$search}/events?app_id=student`, function(data){
  var $artistImg = $.get(`https://rest.bandsintown.com/artists/${$search}?app_id=student`, function(idata){
    for (var i = 0; i < data.length; i++){
      for(var k = 0; k < data[i]['lineup'].length; k++){
        for(var j = 0; j < data[i]['offers'].length; j++){
          console.log(data[i]['venue']);
        $('#events').append(`
          <div class="col m6">
          <div class="card hoverable ">
          <div class="card-image">
          <img src=${idata['image_url']} alt="">
          <span class="card-title">${data[i]['lineup'][k]}</span></div>
          <div class="card-content center">
          <p><strong>${data[i]['venue']['city']}</strong></p>
          <p>${data[i]['venue']['name']}</p>
          <p>${data[i]['datetime']}</p></div>
          <div class="card-action"><a href="${data[i]['offers'][j]['url']}">Tickets Here</a></div></div></div>`);
        };
      };
    };
  });
  });
  };
});

// random img function

var images = ["img.png", "rimg.png", "rimg2.png", "rimg3.png", "rimg4.png",
    "rimg5.png","rimg6.png","rimg7.png","rimg8.png","rimg9.png","rimg10.png","rimg11.png"];

function getRandom(){
for (var i = 0; i < images.length; i++){
  var path = path || 'images/';
  var num = Math.floor(Math.random() * images.length);
  var img = images[num];
  var imgStr = '<img style="height:300px;width:100%;" src="' + path + img + '"alt="">';
};
 return imgStr;
};

$('.parallax').parallax();


});
