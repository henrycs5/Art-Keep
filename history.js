/**
 * 
 * Name: Henry Chiang
 * Date: 9/10/26
 * 
 * [HISTORY]: 3/3 JavaScript brains where data is saved through localStorage which is limited to 5 mbs
 * flat across the [PROFILE] and [MY ART].   
 * 
 */

window.onload = function () {
    let dataProfile = window.localStorage.getItem("Profile Picture");
    let dataDescript = window.localStorage.getItem("Description");
    let artCollection = window.localStorage.getItem("Art Collection");
    let button = document.getElementById("reset-data");
    let count = 0;

    render(dataProfile, dataDescript, artCollection);

    button.onclick = function () {
        if (count === 0) {
            button.innerHTML = "<strong>Are you sure?</strong>";
        }
        else if (count === 1) {
            button.innerHTML = "<strong>Are you really sure?</strong>";
        }
        else if (count === 2) {
            button.innerHTML = "<strong>ARE YOU REALLY SURE?</strong>";
        }
        else {
            button.innerHTML = "<strong>Delete?</strong>";
            window.localStorage.clear();
            count = 0;
        }
        count++;
    }
}

function render(dataProfile, dataDescript, artCollection) {
    let curProfile = document.getElementById("current-profile");
    let curDescript = document.getElementById("current-description");
    let artHistory = document.getElementById("art-history");
    let arr = [];

    if (dataProfile !== null) {
        curProfile.src = dataProfile;
    }
    if (dataDescript !== null) {
        curDescript.innerHTML = dataDescript;
    }
    if (artCollection !== null) {
        let parsed = JSON.parse(artCollection);
        arr = parsed;
        artHistory.innerHTML = 'Art Files: ' + arr.length;
    }
}