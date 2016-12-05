/*Add navigation here*/
function showHomeView() {
    showView("homeView");
    if(isUserLoggedIn()){
        loadImagesOnMap();
    }else{
        showSuccessAlert("Login to view images!")
    }
}

function showGalleryView() {
    showView("galleryView");
    loadImages();
}

function showUploadView() {
    showView("uploadView");
}

function showRegisterView() {
    showView("registerView");
}

function showUsersView() {
    showView("usersView");
    listUsers();
}

function showLoginView() {
    showView("loginView");
}

function showDescriptionView() {
    let that = this;
    prepareDescriptionView(that);
    showView("descriptionView");

}

function showView(view) {
    $('main > section').hide();
    $(`#${view}`).show();
    /*Take care of highligiting in menus and navs */
    $('nav div ul li.active').removeAttr("class");
    $(`.${view}Button`).parent().addClass("active");
}