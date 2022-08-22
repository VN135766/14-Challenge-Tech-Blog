

const signUp = async (e) => {
    e.preventDefault();
    const usernameInput = document.querySelector('#usernameSignUp').value.trim();
    const passwordInput = document.querySelector('#passwordSignUp').value.trim();

    if (usernameInput && passwordInput) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ user: usernameInput, password: passwordInput })
        })
        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            console.log(response)
            alert('Cannot create an account')
        }
    } else {
        alert('You need to enter a username and a password')
    }
};

document.querySelector('#signupButton').addEventListener('click', signUp)