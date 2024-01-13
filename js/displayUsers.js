// Function to display the list of users
function displayUsers() {
    const usersTableBody = document.getElementById('usersTableBody');
    
    // Clear the table body before populating it with users
    usersTableBody.innerHTML = '';
    
    // Retrieve the users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Iterate over each user and create a row in the table
    users.forEach(user => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        
        nameCell.textContent = user.name;
        emailCell.textContent = user.email;
        
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        
        usersTableBody.appendChild(row);
    });
}

// Call the displayUsers function on page load
displayUsers();