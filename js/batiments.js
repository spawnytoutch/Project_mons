function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(50.4543513,3.9510516),
    // disableDefaultUI: true,
         panControl: false,
          zoomControl: false,
          zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.TOP_LEFT
    },
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: true,
          overviewMapControl: false
        };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}



function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;