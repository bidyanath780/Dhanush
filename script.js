// Get elements
const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('login-form');

// Show the login modal when the login button is clicked
loginBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle login form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation (for demonstration purposes only)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        modal.style.display = 'none';
    } else {
        alert('Invalid username or password.');
    }
});
