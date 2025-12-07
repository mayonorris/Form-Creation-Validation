// Task 0: Form Creation & Validation
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve & trim user inputs
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validation flags & messages
    let isValid = true;
    const messages = [];

    // Username validation: length >= 3
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters.');
    }

    // Email validation: must include '@' and '.'
    if (!(email.includes('@') && email.includes('.'))) {
      isValid = false;
      messages.push('Please enter a valid email address.');
    }

    // Password validation: length >= 8
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters.');
    }

    // Feedback display logic
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';      // exact color required
      feedbackDiv.style.backgroundColor = '#d4edda';

      // (Optional) Clear inputs on success
      usernameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
    } else {
      feedbackDiv.innerHTML = messages.join('<br>'); // join with <br>
      feedbackDiv.style.color = '#dc3545';           // exact color required
      feedbackDiv.style.backgroundColor = '#ffbaba';
    }
  });
});
