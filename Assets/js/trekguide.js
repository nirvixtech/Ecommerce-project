// Select all guide buttons
const guideButtons = document.querySelectorAll('.book-guide-btn');
const bookingForm = document.getElementById('bookingForm');
const selectedGuideInput = document.getElementById('selectedGuide');

guideButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const guideName = btn.getAttribute('data-guide');
        selectedGuideInput.value = guideName;          // Fill the guide name
        bookingForm.classList.remove('hidden');        // Show the form
        window.scrollTo({ top: bookingForm.offsetTop - 50, behavior: 'smooth' });
    });
});
