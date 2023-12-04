/* function initMap() {
  
  const position = {lat: 51.508742,lng: -0.120850};
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  initMap();

*/
funct initMap(){
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: { lat: 41.83505630493164, lng: -87.62705993652344 }
 })
}
initMap();


