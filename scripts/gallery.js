/* Draw images in gallery view*/

function loadImages() {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures",
        headers: getSampleUserAuthHeaders()
    }).then(visualizeUploadedImages).catch(handleAjaxError);


    //TODO Empty before load

    /*Displays requested images*/
    function visualizeUploadedImages(imageDataGallery) {
        $("#galleryImagesHeading").show();
        for (let image of imageDataGallery) {
            $(".section #galleryImagesContainer").prepend(`
            <p>File Name: ${image.fileName}</p>
            <div style="width: 70%">
             <img style="border-radius: 2px;" class="materialboxed responsive-img z-depth-1" src="${image.image}">
             </div>
             <div class="divider"></div>`
            );
            /*Makes images enlargeable when clicked*/
            $('.materialboxed').materialbox();
        }
    }
}
