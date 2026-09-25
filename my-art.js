/**
 * 
 * Name: Henry Chiang
 * Date: 9/10/26
 * 
 * [MY ART]: 2/3 JavaScript brains to upload art files or any image files in bulk.
 * 
 */

window.onload = function () {
    let artCollection = window.localStorage.getItem("Art Collection");
    let arr = [];
    let fileUpload = document.getElementById("art-file");
    let artGallery = document.getElementById("art-gallery");

    if (artCollection !== null) {
        let parsed = JSON.parse(artCollection);
        arr = parsed;
        for (let i = 0; i < arr.length; i++) {
            artGallery.innerHTML += '<li><img src="' + arr[i] + '" alt="">';
        }
    }

    fileUpload.addEventListener("change", function (event) {
        let file = event.target.files;
        for (let i = 0; i < file.length; i++) {
            let reader = new FileReader();
            reader.onload = function () {
                artGallery.innerHTML += '<li><img src="' + reader.result + '" alt="">';
                arr.push(reader.result);
                window.localStorage.setItem("Art Collection", JSON.stringify(arr));
            }
            if (file[i]) {
                reader.readAsDataURL(file[i]);
                // If the file exists inject this image into the artGallery and push it into the 
                // artCollection Array.
            }
        }
        console.log("My Art should* be sucessfully updated!");
    });
}