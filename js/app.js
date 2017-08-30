var loadPage = function(){
  loadRestaurant();

}
var array = [];

var loadRestaurant = function () {
  var url = "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json";
  $.getJSON(url, function (response) {
    response.forEach(function (data) {
      var name = data.name;
      console.log(name)
      array.push(name)
      array.sort();
      showRestaurant(name)
    })
  })
};




$(document).ready(loadPage);


/*var request = new XMLHttpRequest();
//console.log(request)
request.open("GET", url);
request.onload =function() {
  var info = JSON.parse(request.responseText);
  info.forEach(function (response) {
    var name = response.name;
    console.log(name)
    array.push(name)
    array.sort();
  });
}
  array.forEach(function(name){
    var arrayName = [];
    arrayName.push(name);
  //showRestaurant(arrayName);
});
request.send();*/
