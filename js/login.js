document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log('Event is active')
    // Step 2: get the email address inside the email input field
    // always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step 3: get password

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Do not verify email password on the client side

    if (email === 'ami@ark.com' && password === '12345') {
        //console.log('Valid User');
        window.location.href = 'bank.html';
    }
    else {
        //console.log('Invalid User');
        alert('Email and Password are not matched !!!!!!!')
    }
})