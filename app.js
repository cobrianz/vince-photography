document.addEventListener('DOMContentLoaded', function() {
    const bars = document.getElementById('bars');
    const close = document.getElementById('close');
    const menu = document.getElementById('menu');

    bars.addEventListener('click', function() {
        menu.style.display = 'flex';
        bars.style.display = 'none';
        close.style.display = 'inline';
    });

    close.addEventListener('click', function() {
        menu.style.display = 'none';
        bars.style.display = 'block';
        close.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-nav div');
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopSlideShow(); // Stop the automatic slideshow when a dot is clicked
            startSlideShow(); // Restart the slideshow after manual navigation
        });
    });

    showSlide(currentIndex);
    startSlideShow();
});
