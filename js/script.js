
const apiKey= "AIzaSyCQjFnNaTN7eSIL8vwBImDpCNdcyoAnsVE";
function initMap(){
	
	var el = document.getElementById('map');
	var myLocation = new google.maps.LatLng(31.5883, 74.3105);
	var const mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'forgs.png'
	});

	var contentString = '<h1>Badshahi Mosque</h1><p>The Badshahi Mosque is a prayer space that dates back to the Mughal Empire. It is the second largest mosque in Pakistan. I used to go there with my parents when I was little.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', initMap);

