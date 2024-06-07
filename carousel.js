// Auto-scroll the images every 3 seconds
setInterval(scrollImages, 3000);

function scrollImages() {
    const carousel = document.querySelector('.images');
    const firstImage = carousel.firstElementChild;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = "translateX(-100%)";
    carousel.appendChild(firstImage);
    setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
    }, 500);
}
