// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$("#search-button").click(function(){
var random = Math.floor(Math.random() * 20);

 var user_input = $("#search-term").val();
  $.ajax({
      url:"https://api.giphy.com/v1/gifs/search?q="+ user_input+ "&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",  
      success: function(response){
        $("#images").empty("");
        $("#images").append("<img src= '" + response.data[random].images.original.url + "' ></a>");
      }
  });
});
$("#random-button").click(function(){
 var random1 = Math.floor(Math.random() * 50);
  var random2 = Math.floor(Math.random() * 100);
 $.ajax({
  url:"https://api.giphy.com/v1/gifs/search?q=" +random2+ "&rating=pg&api_key=dc6zaTOxFJmzC",
  method: "GET",
  success: function(response){
    $("#images").empty("");
    $("#images").append("<img src= '" + response.data[random1].images.original.url + "' ></a>");
  }
 });
});
