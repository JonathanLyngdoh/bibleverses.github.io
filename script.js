const staticVerses = [
    "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes. - Romans 1:16",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "I can do all things through Christ who strengthens me. - Philippians 4:13",
    "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "I can do all things through Christ who strengthens me. - Philippians 4:13",
    "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
    "The Lord will fight for you; you need only to be still. - Exodus 14:14",
    "Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
    "I have hidden your word in my heart that I might not sin against you. - Psalm 119:11",
    "This is the day that the Lord has made; let us rejoice and be glad in it. - Psalm 118:24",
    "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken. - Psalm 55:22"
    // Add more static verses here
];

let currentVerseIndex = 0;

function changeVerse() {
    const verseText = staticVerses[currentVerseIndex];
    document.getElementById("verse").textContent = verseText;
    currentVerseIndex = (currentVerseIndex + 1) % staticVerses.length;
}

function updateTimer() {
    const timerElement = document.getElementById("countdown");
    let countdown = 10;

    function countdownFunction() {
        timerElement.textContent = countdown;

        if (countdown <= 0) {
            changeVerse();
            countdown = 10;
        } else {
            countdown--;
        }
    }

    countdownFunction();
    setInterval(countdownFunction, 1000);
}

// Initial setup
changeVerse();
updateTimer();



const backgroundImages = [
    'image1.jpg', // Replace with your image file paths
    'image2.jpg',
    'image3.jpg',
    // Add more images as needed
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    const background = document.getElementById("background");
    background.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Change the background image every 10 seconds
changeBackgroundImage(); // Change on page load
setInterval(changeBackgroundImage, 10000); // Change every 10 seconds