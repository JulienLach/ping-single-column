document.getElementById('submitButton').addEventListener('click', function () {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();
    var emailErrorMessage = document.getElementById('email-error-message');
    var emailSuccessMessage = document.getElementById('email-success-message');


    // Regular expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue || !emailRegex.test(emailValue)) {
        emailInput.classList.add('error');
        alert('Please enter a valid email address.');
        emailErrorMessage.innerText = 'Please enter a valid email address.';
        emailSuccessMessage.innerText = '';

    }

    else {
        emailInput.classList.remove('error');
        alert('Form submitted successfully!');
        emailErrorMessage.innerText = ''; // Clear error message
        emailSuccessMessage.innerText = 'Thank you! An email has been send to ' + emailValue;
    }





});