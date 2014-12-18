function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(50.4543513,3.9510516),
     panControl: false,
    zoomControl: false,
    scaleControl: false,
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var styles = [
  {
    "elementType": "labels.text.fill"  },{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      { "saturation": -100 },
      { "visibility": "on" },
      { "gamma": 2.01 },
      { "lightness": 15 },
      { "color": "#0590d8" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#838080" },
      { "gamma": 1.94 }
    ]
  },{
    "elementType": "geometry.fill",
    "stylers": [
      { "saturation": -100 },
      { "gamma": 0.67 }
    ]
  }
];
map.setOptions({styles:styles})
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;