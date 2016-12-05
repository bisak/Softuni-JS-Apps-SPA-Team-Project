/* Draw user contact list in users view*/

function listUsers(){
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "user/" + kinveyAppKey,
        headers: getKinveyUserAuthHeaders()
    }).then(visualizeUsers).catch(handleAjaxError);
}

function visualizeUsers(userData) {
    $("#usersView .container").empty();
    for (let user of userData){
        $("#usersView .container").append(`
        <div class="col s12 m8 offset-m2 l6 offset-l3">
            <div class="card-panel grey lighten-5 z-depth-1">
              <div class="row valign-wrapper">
                <div class="col">
                  <img style="width: 100px; height: 100px;" src="${user.picture}" alt="Avatar" class="circle responsive-img">
                </div>
                <div class="col">
                  <p><strong>Username:</strong> ${user.username}</p>
                  <p><strong>Email:</strong> ${user.email}</p>
                </div>
              </div>
            </div>
        </div>`);

    }
}