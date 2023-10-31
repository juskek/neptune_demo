let file = FileUploader.oFileUpload.files[0];
const reader = new FileReader();

reader.onload = function (event) {
    const base64String = event.target.result;
    Text.setText(base64String);
    console.log("Base64 representation of the file:", base64String);
};

reader.readAsDataURL(file);
setTimeout(function () {
    upload();
}, 500);
