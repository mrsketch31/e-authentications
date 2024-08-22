const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginStatus = document.getElementById('login-status');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    // Simulate authentication process (replace with actual API call or database query)
    if (email === 'mrsketch3183@gmail.com' && password === 'password123') {
        loginStatus.textContent = 'Login successful! Redirecting to dashboard...';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        loginStatus.textContent = 'Invalid email or password. Please try again.';
    }
});