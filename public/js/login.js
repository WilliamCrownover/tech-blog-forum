// Submit login form to validate account exists and login
const loginFormSubmit = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Incorrect login');
        }
    }
};

// Submit signup form entry to create user account
const signupFormSubmit = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Please fill in 'Username' & 'Password'.\n'Password' must be a minimum of 8 characters.");
        }
    }
};

// Listen for the login form submission
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormSubmit);

// Listen for the signup form submission
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormSubmit);