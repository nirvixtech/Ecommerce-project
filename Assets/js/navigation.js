/**
 * Navigation functionality for Trektales website
 * Handles dropdown menu and mobile menu toggle
 */

(function () {
  'use strict';

  // Initialize navigation when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    initServicesDropdown();
    initMobileMenu();
  });

  /**
   * Initialize services dropdown functionality
   */
  function initServicesDropdown() {
    const dropdownBtn = document.getElementById('servicesDropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (!dropdownBtn || !dropdownMenu) {
      return;
    }

    // Toggle dropdown on button click
    dropdownBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  }

  /**
   * Initialize mobile menu functionality
   */
  function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!mobileBtn || !mobileMenu) {
      return;
    }

    mobileBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }
})();

