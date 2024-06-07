let currentIndex = 0;

function scrollInstructors(direction) {
    const instructorContainer = document.querySelector('.instructor-container');
    const totalInstructors = document.querySelectorAll('.instructor-section').length;

    if (direction === 'left') {
        currentIndex = (currentIndex === 0) ? totalInstructors - 1 : currentIndex - 1;
    } else {
        currentIndex = (currentIndex === totalInstructors - 1) ? 0 : currentIndex + 1;
    }

    const newTransform = `translateX(-${currentIndex * 100}%)`;
    instructorContainer.style.transform = newTransform;
}
