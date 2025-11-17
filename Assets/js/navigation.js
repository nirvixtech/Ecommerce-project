(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
    loadFooter();
  });

  function loadHeader() {
    fetch("header.html")
      .then(res => res.text())
      .then(data => {
        const headerContainer = document.getElementById("header");
        if (headerContainer) {
          headerContainer.innerHTML = data;
          initServicesDropdown();
          initMobileMenu();
        }
      })
      .catch(err => console.error("Error loading header:", err));
  }

  function loadFooter() {
    fetch("footer.html")
      .then(res => res.text())
      .then(data => {
        const footerContainer = document.getElementById("footer");
        if (footerContainer) footerContainer.innerHTML = data;
      })
      .catch(err => console.error("Error loading footer:", err));
  }

  function initServicesDropdown() {
    const btn = document.getElementById('servicesDropdown');
    const menu = document.getElementById('dropdownMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', e => {
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });

    document.addEventListener('click', e => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
  }

  function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

})();
