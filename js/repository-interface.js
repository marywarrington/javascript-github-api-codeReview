
var apiKey = require('./../.env').apiKey;
var hasDescription = require('./../js/scripts.js').hasDescription;

$(document).ready(function() {
  $('.showRepos').hide();

  $('#repobutton').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      $('.showRepos').show();
      $('#display-name').text(username);

      for (i = 0; i < response.length; i++) {
      $('#results').append('<li><strong>Repo Name</strong>: <a href=\"' + response[i].html_url + '\">' + response[i].name + '</a></li><li><strong>Repo Description</strong>: ' + hasDescription(response[i]) + '</li><br>');
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });


  });
});
