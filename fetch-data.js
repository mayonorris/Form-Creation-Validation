// Task 3: Fetching Data from an API and Displaying It

async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('HTTP ' + response.status);
    }

    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = '';

    // Build the list of user names
    const userList = document.createElement('ul');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (err) {
    // Clear any existing content and show an error
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    // (Optional) console.error(err);
  }
}

// Run after the DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
