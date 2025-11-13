// trekguide.js
document.addEventListener('DOMContentLoaded', () => {
    const guideButtons = document.querySelectorAll('.book-guide-btn');
    const bookingForm = document.getElementById('bookingForm');

    guideButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            bookingForm.classList.remove('hidden'); // Show the form
            window.scrollTo({ top: bookingForm.offsetTop - 50, behavior: 'smooth' });
        });
    });
});
