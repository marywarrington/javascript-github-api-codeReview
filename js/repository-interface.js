
var apiKey = require('./../.env').apiKey;
var tempConvertToF = require('./../js/scripts.js');

$(document).ready(function() {
  $('.showRepos').hide();

  $('#repobutton').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      $('.showRepos').show();
      $('#display-name').text(username);
      console.log("HEY!");
      $('#results').append('<li><strong>Repo Name</strong>: ' + repoName + '</li><li><strong>Repo Description</strong>: ' + repoDescription + '</li>')
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });


  });
});
