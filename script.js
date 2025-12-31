function check() {
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message");

    if (email == "") {
        message.innerHTML = "Email cannot be empty";
        return;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        message.innerHTML = "Email is not valid";
        return;
    }

    if (mobile == "") {
        message.innerHTML = "Mobile number cannot be empty";
        return;
    }
    if (isNaN(mobile)) {
        message.innerHTML = "Mobile number must contain only digits";
        return;
    }

    if (mobile.length != 10) {
        message.innerHTML = "Mobile number must be 10 digits";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Form submitted successfully!";
}