// 50.4543513,3.9510516

function initialize() {

  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(50.4543513,3.9510516),
    disableDefaultUI: true,

  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  setMarkers(map, beaches);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var beaches = [
 ['La Maison Folie', 50.455892, 3.959185, 1],
['Le manège.mons', 50.457977, 3.956817, 2],
['Le dépôt des œuvres d’art', 50.448501, 3.952585, 3],
['Les Abattoirs', 50.448672, 3.951833, 4],
['Arsonic', 50.459594, 3.956216, 5],
['Le Carré des Arts', 50.449738, 3.951661, 6],
['Le BAM', 50.455755, 3.952294, 7],
['Le Corps de ville', 50.458251, 3.956883, 8],
['La gare', 50.456178, 3.944692, 9],
['La Fondation Mons 2015', 50.458829, 3.955801, 10],
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: 'images/flag.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(20, 32),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var LatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3]
    });
    google.maps.event.addListener(marker, 'click', function() {
console.log('poke');

  });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;