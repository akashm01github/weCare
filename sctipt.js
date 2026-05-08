
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('testimonialSlider');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 1;

    function scrollToCard(index) {
        if (index < 0) index = cards.length - 1;
        if (index >= cards.length) index = 0;

        const card = cards[index];
        const cardWidth = card.offsetWidth;
        const gap = 20;
        
        const scrollPosition = index * (cardWidth + gap);
        
        slider.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        currentIndex = index;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    nextBtn.addEventListener('click', () => scrollToCard(currentIndex + 1));
    prevBtn.addEventListener('click', () => scrollToCard(currentIndex - 1));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => scrollToCard(index));
    });

    // Initialize
    updateDots();
});
