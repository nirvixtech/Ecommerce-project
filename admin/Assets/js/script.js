// script.js

// Optional: Show/Hide password feature
const passwordInput = document.getElementById('password');

if (passwordInput) {
    const toggleBtn = document.createElement('span');
    toggleBtn.textContent = 'Show';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.position = 'absolute';
    toggleBtn.style.right = '10px';
    toggleBtn.style.top = '50%';
    toggleBtn.style.transform = 'translateY(-50%)';
    toggleBtn.style.color = '#17c3cf';

    const parent = passwordInput.parentElement;
    parent.style.position = 'relative';
    parent.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleBtn.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            toggleBtn.textContent = 'Show';
        }
    });
}

// Optional: Simple form validation before submit
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        e.preventDefault();
        alert('Please fill in both email and password.');
    }
});
