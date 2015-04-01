///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'francescad.360854ec'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiZnJhbmNlc2NhZCIsImEiOiIwVDBpMlNzIn0.wlV7e5_p8nupd8rTCyi9VQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFileToAdd = 'data/dc_national_parks.geojson';

var featurelayer= L.mapbox.featurelayer().loadURL(dataFileToAdd).addTo(map);

featurelayer.on('ready',function(){
  this.setstyle({
    'color':'#ec008c',
    'fillColor': "#ec008c",
    'weight':4,
    'opacity':.6
  });
  map.fitBounds(featureLayer.getBounds());
});

featureLayer.on('ready',function(){
  this.eachLayer(function(layer){
    layer.bindPopup('Hi. I am the park called ' + layer.feature.properties.NAME);
  });
});
