// Task 0: Form Creation & Validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true;
    const messages = [];

    // Username: at least 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters.');
    }

    // Email: must include '@' and '.'
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      messages.push('Please enter a valid email address.');
    }

    // Password: at least 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters.');
    }

    // Show feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';
      feedbackDiv.style.backgroundColor = '#d4edda';

      // Optional: clear inputs after success
      usernameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';
      feedbackDiv.style.backgroundColor = '#ffbaba';
    }
  });
});
