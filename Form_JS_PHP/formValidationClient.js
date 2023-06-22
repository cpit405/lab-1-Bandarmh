function validateForm(event) {
    const nameInput = document.getElementById('userNameInput');
    const emailInput = document.getElementById('emailInput');
    const commentInput = document.getElementById('comment');
    const errorMessage = document.getElementById('error-message');
  
    if (nameInput.value.split(' ').length < 2) {
      errorMessage.innerText = 'Please enter your first and last name.';
      event.preventDefault();
      return;
    }
  
    if (!emailInput.checkValidity()) {
      errorMessage.innerText = 'Please enter a valid email address.';
      event.preventDefault();
      return;
    }
  
    if (commentInput.value.length > 150) {
      errorMessage.innerText = 'Please limit your comment to 150 characters or less.';
      event.preventDefault();
      return;
    }
  
    errorMessage.innerText = '';
  }