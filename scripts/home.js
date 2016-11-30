/*Requests images*/
function loadImagesOnMap() {
    $.ajax({
        method: "GET",
        url: `${kinveyBaseUrl}appdata/${kinveyAppKey}/pictures`,
        headers: getSampleUserAuthHeaders()
    }).then(addPhotoToMap).catch(handleAjaxError);
    /*Appends images to markers on map on precise location*/
    function addPhotoToMap(images) {
            for (let image of images) {
            let imageUrl = image.image;
            let imageLat = image.latitude;
            let imageLong = image.longitude;
            let pictureWidth = Math.round($(window).width() / 5);
            let imageDisplayString = `<img id="mapPicture" class='materialboxed' width="${pictureWidth}" src=${imageUrl}>`;
            if (map) {
                L.marker([imageLat, imageLong])
                    .bindPopup(imageDisplayString, {
                        autoPanPadding: L.point(20, 20),
                    }).addTo(map);
            }
        }
    }
}