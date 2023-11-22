function initMap() {
  const myLatLng = { lat: 31.5883, lng: 74.3105 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Badshahi Mosque",
  });
}

window.initMap = initMap;