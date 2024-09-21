// Array of image filenames
const images = [
    '1200px-Burj_Khalifa.jpg',
    '3f3079492b118ac8008e245d01421e7b.png',
];

// Function to set a random image
function setRandomImage(elementId) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imagePath = images[randomIndex]; // Use the URL directly
    document.getElementById(elementId).src = imagePath;
}

// Set random images for each team member
setRandomImage('member1');
setRandomImage('member2');
setRandomImage('member3');
