
document.querySelector("form").addEventListener("submit", function(event) {
    let valid = true;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let messageError = document.getElementById("message-error");
    let successMessage = document.getElementById("success-message");

    // Reset visibility before checking
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";

    nameError.style.opacity = "0";
    emailError.style.opacity = "0";
    messageError.style.opacity = "0";

    // Name Validation
    if (name === "") {
        nameError.innerText = "Name is required.";
        nameError.style.display = "block";
        setTimeout(() => nameError.style.opacity = "1", 100);
        valid = false;
    }

    // Email Validation - Proper Format
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        emailError.innerText = "Enter a valid email format.";
        emailError.style.display = "block";
        setTimeout(() => emailError.style.opacity = "1", 100);
        valid = false;
    }

    // Message Validation
    if (message === "") {
        messageError.innerText = "Message cannot be empty.";
        messageError.style.display = "block";
        setTimeout(() => messageError.style.opacity = "1", 100);
        valid = false;
    }

    // Prevent submission if invalid
    if (!valid) {
        event.preventDefault();
    } else {
        successMessage.innerText = "Your message has been sent successfully! 🎉";
        successMessage.style.display = "block";
        setTimeout(() => successMessage.style.opacity = "1", 100);
    }
});





