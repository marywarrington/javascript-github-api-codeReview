
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

      for (i = 0; i < response.length; i++){
        var repoDescription = response[i].description;
        if(repoDescription === "") {
          console.log("no repo description");
          repoDescription = "no description given";
        }
        $('#results').append('<li><strong>Repo Name</strong>: <a href=\"' + response[i].html_url + '\">' + response[i].name + '</a></li><li><strong>Repo Description</strong>: ' + repoDescription + '</li><br>');
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });


  });
});
