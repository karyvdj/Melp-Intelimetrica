var loadPage = function(){
  loadRestaurant();

}

var loadRestaurant = function () {
  var url = "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json";
  $.getJSON(url,function (response) {
    var restaurant = response.results;

  });
};

$(document).ready(loadPage);
