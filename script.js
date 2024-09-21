// Array of image filenames
const images = [
    'https://codehs.com/uploads/92cbae805e543caf8930cc6db49d1aac',
    'https://codehs.com/uploads/c10ebd0d8b6ce7b605a0a4aac8daf389',
];

// Function to set a random image
function setRandomImage(elementId) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imagePath = `/pictures${images[randomIndex]}`; // Update this path
    document.getElementById(elementId).src = imagePath;
}

// Set random images for each team member
setRandomImage('member1');
setRandomImage('member2');
setRandomImage('member3');
