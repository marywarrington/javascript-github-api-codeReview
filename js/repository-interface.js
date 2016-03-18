
var apiKey = require('./../.env').apiKey;
var tempConvertToF = require('./../js/scripts.js');

$(document).ready(function() {
  $('.show-repos').hide();

  $('#repobutton').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });


  })
});
