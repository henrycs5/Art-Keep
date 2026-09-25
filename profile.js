/**
 * 
 * Name: Henry Chiang
 * Date: 9/5/26
 * 
 * [INFO]: 1/3 JavaScript brains to edit the user's description and profile.
 * 
 * The following below are great resources for file input and Event Listeners:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/target
 * https://developer.mozilla.org/en-US/docs/Web/API/FileReader
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 * 
 * NOTE: The other JavaScripts were apart of main.html before being split into three for convenience.
 */

window.onload = function () {
    let profilePicture = document.getElementById("profile-picture"); // Placeholder profile image.
    let profileFile = document.getElementById("profile-file"); // Where we get the user's file.
    let textArea = document.getElementById("description"); // Text inside <textarea>
    let descriptionButton = document.getElementById("edit-description"); // Submit/Edit button
    let descriptClick = false; // Allows the toggle of Rthe button above ^

    let dataProfile = window.localStorage.getItem("Profile Picture");
    let dataDescript = window.localStorage.getItem("Description");

    if (dataProfile !== null) {
        // console.log(dataProfile);
        profilePicture.src = dataProfile;
    }
    if (dataDescript !== null) {
        textArea.innerHTML = dataDescript;
    }

    profileFile.addEventListener("change", function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function () {
            profilePicture.src = reader.result;
            window.localStorage.setItem("Profile Picture", reader.result);
        }
        if (file) {
            reader.readAsDataURL(file);
            console.log("Profile was sucessfully updated!");
        }
    });

    descriptionButton.onclick = function () {
        if (descriptClick) {
            descriptClick = false;
            textArea.readOnly = true;
            descriptionButton.innerText = "Edit";
            window.localStorage.setItem("Description", textArea.value);
            console.log("Updated Description: " + textArea.value);
            // After the button has been clicked, store this value.
            console.log("Description Noted!");
        }
        else {
            textArea.readOnly = false;
            descriptionButton.innerText = "Submit";
            descriptClick = true;
            console.log("Write your description!");
        }
    }
}