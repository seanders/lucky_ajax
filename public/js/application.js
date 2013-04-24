$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    $.ajax({
      url: '/rolls',
      method: 'POST' 
    }).done(
    function(data){
      console.log(data)
      $('#die img').attr("src","/"+data+".png")
      // var random_number = Math.floor(Math.random(6))
      });

  });
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});
