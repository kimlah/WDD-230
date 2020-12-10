function map() {
    var property = {
        center: new google.maps.LatLng(20.4230, 86.9223), zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),property);
}