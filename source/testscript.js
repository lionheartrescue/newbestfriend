
const friends = [{
    "image": '<img src="./img/charlie.jpg" alt="Charlie">',
    "alt": "Something"
  },
     {
    "image": '<img src="./img/bella.jpg" alt="Charlie">',
    "alt": "Something"
  },
  {
    "image": '<img src="./img/canela.jpg" alt="Charlie">',
    "alt": "Something"
  },
    {
    "image": '<img src="./img/chula.jpg" alt="Charlie">',
    "alt": "Something"
  }]
;


//on page load
$(document).ready(function () {  
  slide();
    });
// end on page load

var x = 0;

function slide(){
   fadeIn();
    $('#slideshow').html(friends[x].image);

        if (x < friends.length){
          x++;
                
      }
        
  }


//https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/