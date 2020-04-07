// JavaScript Document

function initMap() {
        let georgian = {
            lat: 44.4121016,
            lng: -79.6689532,};
        let div = document.getElementById('map');
    (document.getElementById('legend'));
// create new map object
        let map = new google.maps.Map(div, {
            zoom: 15,
            center: georgian,
            // add style to the map
            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                }]
        });
    // create a new marker object

        let marker = new google.maps.Marker({position: georgian, map: map});
            // get icon
        let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        let icons = {
            parking: {
                name: 'Parking',
                icon: iconBase + 'parking_lot_maps.png'
            }
        };
        let features = [
            {
                position: new google.maps.LatLng(44.412891, -79.667076),
                type: 'parking'
            }
            ];
        // Create markers.
        features.forEach(function(feature) {
            let marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
            });
        });
        let legend = document.getElementById('legend');
        for (let key in icons) {
            let type = icons[key];
            let name = type.name;
            let icon = type.icon;
            let div = document.createElement('div');
            div.innerHTML = '<img src="' + icon + '"> ' + name;
            legend.appendChild(div);
        }
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}


/* This code inspired by:
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
*/
/* This code inspired by:
https://developers.google.com/maps/documentation/javascript/styling
*/
/* This code inspired by:
https://developers.google.com/maps/documentation/javascript/adding-a-legend
*/