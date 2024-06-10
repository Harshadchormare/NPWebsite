document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function scrollTestimonials() {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(scrollTestimonials, 3000); // Adjust the interval time as needed
});
