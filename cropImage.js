let fileInput = document.getElementById('photo');
let imagePreview = document.getElementById('imagePreview');

function displayImage() {
    fileInput = document.getElementById('photo');
    imagePreview = document.getElementById('imagePreview');
    if (fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };

        reader.readAsDataURL(selectedFile);
    } else {
        imagePreview.style.display = 'none';
    }
}

// const imagePreview = document.getElementById('imagePreview');
let cropper; // Declare cropper variable outside the function to make it accessible globally

function initializeCropper() {
    cropper = new Cropper(imagePreview, {
        aspectRatio: 16 / 9,
        viewMode: 0,
    });
}

function cropImageHandler() {
    if (cropper) {
        const croppedCanvas = cropper.getCroppedCanvas();
        if (croppedCanvas) {
            const croppedImage = croppedCanvas.toDataURL("image/png");
            document.getElementById('output').src = croppedImage;
        } else {
            console.error("getCroppedCanvas returned null or undefined.");
        }
    } else {
        console.error("Cropper instance not initialized.");
    }
}


document.getElementById('cropbtn').addEventListener('click', cropImageHandler);
document.getElementById('photo').addEventListener('change', displayImage);

// Wait for the image to load before initializing the Cropper
imagePreview.addEventListener('load', initializeCropper);

