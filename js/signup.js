// Retrieve the sign-up button element
const signUpButton = document.querySelector('button');

// Retrieve the name and email input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Function to handle the sign-up process
function signUp(event) {
    event.preventDefault(); // Prevent form submission

    // Check if both inputs have values
    if (nameInput.value && emailInput.value) {
        // Create an object to store the user's information
        const user = {
            name: nameInput.value,
            email: emailInput.value
        };

        // Retrieve existing users from local storage (if any)
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Add the new user to the beginning of the array
        users.unshift(user);

        // Save the updated users array in local storage
        localStorage.setItem('users', JSON.stringify(users));

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';

        // Display a pop-up message
        alert('Account has been created!');

        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        // Display an error message if fields are blank
        alert('Please fill in all the fields.');
    }
}

// Add a click event listener to the sign-up button
signUpButton.addEventListener('click', signUp);