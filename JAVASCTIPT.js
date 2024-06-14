// Register User
document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
            alert('Registration successful');
        } else {
            alert('Registration failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Login User
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            alert('Login successful');
            const user = await response.json();
            displayUserProfile(username, user.email);
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

function displayUserProfile(username, email) {
    const userProfile = document.getElementById('userProfile');
    userProfile.innerHTML = `<p>Username: ${username}</p><p>Email: ${email}</p>`;
}
