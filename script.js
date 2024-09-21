// Array of image filenames
const images = [
    '1200px-Burj_Khalifa.jpg',
    'https://codehs.com/uploads/c10ebd0d8b6ce7b605a0a4aac8daf389',
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
