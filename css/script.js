var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 31.5883, lng: 74.3105},
		zoom: 19
	});
}
initMap();