// function initMap() {
// 	var mapDiv = document.getElementById('map');
// 	var map = new google.maps.Map(mapDiv, {
// 	  center: {lat: 44.540, lng: -78.546},
// 	  zoom: 8
// 	});
// }
function init_map() {
	var var_location = new google.maps.LatLng(6.5747583,3.3646144);

	var var_mapoptions = {
	  center: var_location,
	  zoom: 14
	};

	var var_marker = new google.maps.Marker({
		position: var_location,
	    map: var_map,
		title:"Venice"});

	var var_map = new google.maps.Map(document.getElementById("map-holder"),
	    var_mapoptions);

	var_marker.setMap(var_map);	

}

google.maps.event.addDomListener(window, 'load', init_map);