 // Initialize and add the map
 function initMap() {
    // The location of Uluru
    var uluru = {
        lat: -25.344,
        lng: 131.036
    };
    var chapel_hill = {
        lat: 35.9132,
        lng: -79.0558
    };
    var home = {
        lat: 35.784520,
        lng: -81.304920
    };
    //   35.9132° N, 79.0558° W
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom:   8,
            center: chapel_hill
        });
    // The marker, positioned at Uluru
    //   var marker1 = new google.maps.Marker({position: uluru, map: map});
    var marker2 = new google.maps.Marker({
        position: chapel_hill,
        map: map
    });
    var marker3 = new google.maps.Marker({
        position: home,
        map: map
    });

    var contentString = '<h1>Chapel Hill, NC</h1>';
    var contentString2 = '<h1>Hickory, NC</h1>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });


    

    marker2.addListener('click', function () {
        infowindow1.open(map, marker2);
    });
    marker3.addListener('click', function () {
        infowindow2.open(map, marker3);
    });
}