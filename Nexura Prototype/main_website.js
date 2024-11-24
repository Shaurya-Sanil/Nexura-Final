document.addEventListener("DOMContentLoaded", function () {
    const imageCards = document.querySelectorAll('.image-card');

    function checkScroll() {
        imageCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check in case some cards are in view on load
});
