
// Array of image URLs and their corresponding captions
const images = [
    {
        url: '1200px-Burj_Khalifa.jpg',
        caption: 'Caption for Image 1'
    },
    {
        url: '3f3079492b118ac8008e245d01421e7b.png',
        caption: 'Caption for Image 2'
    },
];

// Function to set a random image and its caption
function setRandomImage(elementId, captionId) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const image = images[randomIndex]; // Get the random image object
    document.getElementById(elementId).src = image.url; // Set the image source
    document.getElementById(captionId).innerText = image.caption; // Set the caption text
}

// Set random images and captions for each team member
setRandomImage('member1', 'caption1');
setRandomImage('member2', 'caption2');
setRandomImage('member3', 'caption3');
