var loadPage = function(){
  loadRestaurant();

}
var array = [];

var loadRestaurant = function () {
  var url = "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json";
  $.getJSON(url, function (response) {
    response.forEach(function (data) {
      var name = data.name;
      //console.log(name)
      array.push(name)
      array.sort();
      //console.log(array)
     showRestaurant(data);
    })
  })
};
var templateRestaurant =
    '<h3 class="uk-card-title">__name__</h3>'+
    '<p><b>Dirección:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>'+
    '<p><b>Reservación:</b></p>'+
    '<ul>'+
        '<li>'+
          '<span class="uk-icon-button uk-margin-small-right" uk-icon="icon: mail; ratio: 1"></span>'+
          '<a href="#"> correo@gmail.com</a>'+
        '</li>'+
        '<li>'+
          '<span class="uk-icon-button uk-margin-small-right" uk-icon="icon: phone; ratio: 1"></span>'+
          '<a href="#"> + 55 55 55 55 55</a>'+
        '</li>'+
    '</ul>'+
    '<p><b>Calificación: </b><span class="uk-icon-button uk-margin-small-right" uk-icon="icon: star; ratio: 1"></span>5</p>';

var showRestaurant = function (restaurants) {

     var container = $("#info-restaurant");
     var name = restaurants.name;
     var templateFinal = "";
     //console.log(name)
     templateFinal += templateRestaurant.replace("__name__", name)
     container.html (templateFinal);
     console.log(templateFinal)

}

$(document).ready(loadPage);
