const words = ["foremost", "top platform", "premier platform", "principal platform", "pioneering platform", "dominant platform", "preeminent platform", "cutting-edge platform", "most prominent platform"];

let index = 0;

function changeWord() {
    const wordElement = document.querySelector(".changing-word");
    wordElement.textContent = words[index];
    index = (index + 1) % words.length;
}

// Change word every 2 seconds
setInterval(changeWord, 2000);


const carouselContainer = document.querySelector('.brand-carousel');
const logos = document.querySelectorAll('.brand-logo');

let currentLogo = 0;
const logoWidth = logos[0].offsetWidth + 20; // Including margin

function scrollCarousel() {
    carouselContainer.scrollBy({
        left: logoWidth,
        behavior: 'smooth'
    });

    currentLogo++;
    if (currentLogo >= logos.length) {
        currentLogo = 0;
        carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
    }
}

setInterval(scrollCarousel, 3000); // Scroll every 3 seconds
