// Get the color buttons and umbrella image element
const colorButtons = document.querySelectorAll('.color-swatch');
const umbrellaImage = document.getElementById('umbrella-image');
let selectedColor = document.querySelector('data-color')

// Add click event listener to each color button
colorButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Get the color from the data-color attribute of the clicked button
        selectedColor = this.dataset.color;

        // Update the umbrella image source based on the selected color
        umbrellaImage.src = `${selectedColor} umbrella.png`;
    });
});

// Handle logo upload
const logoUpload = document.getElementById('logo-upload');
logoUpload.addEventListener('change', function () {
    const file = this.files[0];

    // Display a loader while processing the logo
    showLoader();

    // Simulating a delay of 2 seconds to process the logo
    setTimeout(() => {
        // Display the final umbrella with the uploaded logo
        displayCustomizedUmbrella(file);
    }, 1000);
});


function showLoader() {
    const previewSection = document.querySelector('.preview-section');
    previewSection.innerHTML = '<div class="loader"></div>';
}

// Function to display the customized umbrella with the uploaded logo
function displayCustomizedUmbrella(file) {
    const previewSection = document.querySelector('.preview-section');
    const umbrellaPreview = document.createElement('div');
    umbrellaPreview.classList.add('umbrella');
    umbrellaPreview.innerHTML = `
    <img src="${selectedColor} umbrella.png" id="umbrella-image" width="200px" height="200px">
    <img src="${URL.createObjectURL(file)}" id="logo-image" width="70px" height="70px">
  `;
    previewSection.innerHTML = '';
    previewSection.appendChild(umbrellaPreview);
}
