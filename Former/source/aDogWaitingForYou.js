$(document).ready(function ()  
  {
    getter();
            });
var x = 0;

function getter() {
     $.ajax
    ({
      method: "GET",
      url: " https://lionheartrescue.github.io/newbestfriend/bestFriendFinder.json"
      }).done(function(data) 
        { 
        
     $("#owl-demo").html("<img src=\"" +data["items"][x].img+ "\" alt=\"" +data["items"][x].alt+ "\">");
   
  
    
      
                              });


}



    // var x = 0;
    //    setTimeout(function(){ slide() }, 1000);
                     

// var x = 0;

// function slide(){
  
//     $('#slideshow').html(friends[x].image);

//         if (x < friends.length){
//           x++;
//                  setTimeout(function(){ slide()}, 3000);
//       }
        
//   }


//
 // var x=0;
 //                                if (x < data.length){
 //                                  x++;
 //                                }

   
// $(document).ready(function () {  
//   slide();
//     });
// // end on page load

// var x = 0;

// function slide(){
//    fadeIn();
//     $('#slideshow').html(friends[x].image);

//         if (x < friends.length){
//           x++;
                
//       }
        
//   }


   //
    //   for(var i in data["items"]){
       
    //    var img = data["items"][i].img;
    //    var alt = data["items"][i].alt;
 
    //    content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
    // }


    // $(document).ready(function ()  
    //         {
    //                 $.ajax
    //                     ({
    //                 method: "GET",
    //                 url: " https://lionheartrescue.github.io/newbestfriend/bestFriendFinder.json"
    //                      }).done(function(data) 

    //                            { var content = "";

    //                    for(var i in data["items"]){
       
       // var img = data["items"][i].img;
       // var alt = data["items"][i].alt;
 
       // content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
   //  }         
   //   $("#owl-demo").html("<img src=\"" +data["items"][0].img+ "\" alt=\"" +data["items"][0].alt+ "\">");
   //                            });
   //          });
   // 