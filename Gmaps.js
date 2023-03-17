// Initialize and add the map
function initMap() {
  // The location of San Jose
  const sj = { lat: 37.3387, lng: -121.8853 };
  const sd = { lat: 32.7157, lng: -117.1611 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: sj,
  });
  // The marker, positioned at Uluru
  const marker1 = new google.maps.Marker({
    position: sj,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: sd,
    map: map,
  });
}

window.initMap = initMap;