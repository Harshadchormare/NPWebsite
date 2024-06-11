function openForm() {
    document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("thank-you-message").style.display = "none";
    document.getElementById("contact-us-form").style.display = "block";
    document.getElementById("contact-us-form").reset();
}

document.getElementById("contact-us-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("contact-us-form").style.display = "none";
    document.getElementById("thank-you-message").style.display = "block";
});
