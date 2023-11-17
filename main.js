document.getElementById('submitButton').addEventListener('click', function () {
    var emailInput = document.getElementById('email');

    if (!emailInput.value) {
        emailInput.classList.add('error'); // Add the 'error' class to change the border color to red
        alert('Please enter your email address.'); // You can customize the error handling, such as displaying a message
    } else {
        // Continue with form submission or other actions
        alert('Form submitted successfully!');
    }
});
