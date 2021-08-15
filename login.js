

document.getElementById("submit-btn").addEventListener("click", function () {
    const emailInput = document.getElementById("email-input");
    const userEmail = emailInput.value;
    const passwordInput = document.getElementById("password-input");
    const userPassword = passwordInput.value;

    const email = 'nahid@email.com';
    const password = 'password';

    if (userEmail == email && userPassword == password) {
        window.location.href = 'bank.html'
    } else {
        alert('userName or password incorrect')
    }
    
    
});


