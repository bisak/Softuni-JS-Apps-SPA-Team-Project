function registerUser() {
    if ($('#password-register').val() == $('#confirm-password-register').val()) {
        let userData = {
            username: $('#user-register').val(),
            email: $('#email-register').val(),
            password: $('#password-register').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: getKinveyAppAuthHeaders(),
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });
        // console.log(userData)
    }

    function registerSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHomeView();
        showHideMenuLinks();
    }
}

function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    $('.loggedInUser').text("Welcome, " + username + "!");
}