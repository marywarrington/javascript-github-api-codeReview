exports.hasDescription = function(response) {
    var repoDescription = response.description;
    if(repoDescription === "") {
      repoDescription = "no description given";
    }
  return repoDescription;
};
