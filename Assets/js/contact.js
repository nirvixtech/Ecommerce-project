/**
 * Contact form functionality for Trektales website
 */

(function () {
  'use strict';

  // Initialize contact form when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    initContactForm();
  });

  /**
   * Initialize contact form submission handler
   */
  function initContactForm() {
    const contactForm = document.querySelector('form');

    if (!contactForm) {
      return;
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Show success message
      alert('Thank you for contacting us! We will get back to you soon.');

      // Reset form
      this.reset();
    });
  }
})();

