document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Hard-coded credentials for demonstration
    var validEmail = 'user@example.com';
    var validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
        alert('Login successful!');
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password');
    }
});