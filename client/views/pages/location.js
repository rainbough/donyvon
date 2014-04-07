Template.locations.rendered = function() {  
  var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions); 

  var dd = {
  	lat: 30.373509,
  	lng: -97.757674,
  	title: "Donyvon's Dezigns"
  }

  map.setCenter(new google.maps.LatLng(dd.lat, dd.lng));
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(dd.lat, dd.lng),
    title: dd.title,
    icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });
  marker.setMap(map);   

  Session.set('map', true);
};

Template.locations.destroyed = function() {
  Session.set('map', false);
};