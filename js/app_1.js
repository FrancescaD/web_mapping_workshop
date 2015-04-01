///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'francescad.360854ec'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiZnJhbmNlc2NhZCIsImEiOiIwVDBpMlNzIn0.wlV7e5_p8nupd8rTCyi9VQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);
