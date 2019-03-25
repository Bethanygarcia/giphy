// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){

 var user_input = $("#search-term").val();
  $.ajax({
      url:"https://api.giphy.com/v1/gifs/search?q="+ user_input+ "&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",  
      success: function(response){
        $("#images").empty("");
        $("#images").append("<img src= '" + response.data[0].images.original.url + "' ></a>");
      }
  });
});

