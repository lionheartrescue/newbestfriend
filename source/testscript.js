
const friends = [{
      "img": "https://lionheartrescue.github.io/newbestfriend/img/bella.jpg" ,
      "alt" : "bella"
    },
    {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/canela.jpg",
      "alt" : "canela"
    },
    {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/charlie.jpg",
      "alt" : "charlie"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/chula.jpg",
      "alt" : "chula"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/ferny.jpg",
      "alt" : "ferny"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/fifi.jpg",
      "alt" : "fifi"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/goliath.jpg",
      "alt" : "goliath"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/ivy.jpg",
      "alt" : "ivy"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/lucy.jpg",
      "alt" : "lucy"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/mayo.jpg",
      "alt" : "mayo"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/obi_wan_kenobi.jpg",
      "alt" : "obi_wan_kenobi"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/ringo.jpg",
      "alt" : "ringo"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/simon.jpg",
      "alt" : "simon"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/toby.jpg",
      "alt" : "toby"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/zenni.jpg",
      "alt" : "zenni"
    }
     ]
;


//on page load
$(document).ready(function () {  
  slide();
    });
// end on page load

var x = 0;
var iO = "<img src='"
var iC = "'</img>"
function slide(){
  
    $('#slideshow').html(iO + friends[x].img + iC);

        if (x < friends.length){
          x++;
                 setTimeout(function(){ slide()}, 3000);
       } else if (x = friends.length){ 
       x+= -15;
          setTimeout(function(){ slide()}, 3000);
        
         }
      console.log(friends.length)
         console.log(x)
      }


//https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/