function loginUser() {
    let userData = {
        username: $('#user-login').val(),
        password: $('#password-login').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
        headers: getKinveyAppAuthHeaders(),
        data: userData
    }).then(loginSuccess).catch(handleAjaxError);

    function loginSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHomeView();
        showHideMenuLinks();

    }
}

function showUserGreeting() {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/" + sessionStorage.userId,
        headers: getKinveyUserAuthHeaders()
    }) .then(getAvatarSuccess).catch(handleAjaxError);

    function getAvatarSuccess(data) {
        $("#usernameContainer").empty();
        $("#avatarContainer").show();
        $("#avatarImage").attr("src", data.picture);
        $("#usernameContainer").text(data.username);
    }
}