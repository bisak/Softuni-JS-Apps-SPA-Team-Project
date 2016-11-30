/*Add events handling here*/
$(document).ready(function () {
    $(".homeViewButton").click(showHomeView);
    $(".galleryViewButton").click(showGalleryView);
    $(".uploadViewButton").click(showUploadView);
    $(".usersViewButton").click(showUsersView);
    $(".registerViewButton").click(showRegisterView);
    $(".loginViewButton").click(showLoginView);
    $("#uploadSlector").change(getFilesFromInput);
    $("#homeMap").on('click', '.leaflet-marker-icon', makeImageOnMapResponsive);
});