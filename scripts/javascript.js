function showForm() {
    document.getElementById("signUpForm").className = "Form Show";
}

function hideForm() {
    document.getElementById("signUpForm").className = "Form Hide";
}
function processForm() {
    //Reseting error indications
    document.getElementById("inputError").innerHTML = "";
    document.getElementById("nameLabel").style.color = "grey";
    document.getElementById("emailLabel").style.color = "grey";
    document.getElementById("birthdayLabel").style.color = "grey";
    document.getElementById("joinLabel").style.color = "grey";

    if (checkWantTojoin() == true &&
        checkName() == true &&
        checkEmail() == true &&
        checkBirthday() == true &&
        confirmEmail() == true) {
        saveFormInput();
        document.getElementById("joinForm").reset();
        alert("Woop Woop - ok you are now signed up (well not really this is only pretend)");
        return true
    } else {
        alert("oops");
    }
}



function checkWantTojoin() {
    var check_passed = false;
    var errorMessage = "We cannot sign you up unlese you agree by selecting \"YES!\"";
    passed_input = getJoinMailingSelection();

    if (passed_input == "no") {
        errorAlert(errorMessage, "joinLabel");
        check_passed = false;
    } else if (passed_input == null) {
        errorAlert(errorMessage, "joinLabel");
        check_passed = false;
    } else {
        check_passed = true;

    }

    return check_passed
}

function errorAlert(passedErrorMessage) {
    alert(passedErrorMessage);
    document.getElementById("inputError").innerHTML = "<p><b>ERROR:</b> " + passedErrorMessage + "</p>";
}

function errorAlert(passedErrorMessage, passedLabelName) {
    alert(passedErrorMessage);
    document.getElementById("inputError").innerHTML = "<p><b>ERROR:</b> " + passedErrorMessage + "</p>";
    document.getElementById(passedLabelName).style.color = "red";
}

function getJoinMailingSelection() {
    var JoinMailing_result = document.getElementsByName("JoinMailing");
    var passed_input;
    for (var i = 0; i < JoinMailing_result.length; i++) {
        if (JoinMailing_result[i].checked) {
            passed_input = JoinMailing_result[i].value;
        }
    }
    return passed_input;

}

function checkName() {
    var check_passed = true;
    var new_name = document.getElementById("name").value;
    if (new_name.length == 0) {
        errorAlert("Please enter your name!", "nameLabel");
        check_passed = false;
    }

    return check_passed;
}

function checkEmail() {
    var check_passed = true;
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        errorAlert("Please enter your email!", "emailLabel");
        check_passed = false;
    }

    return check_passed
}

function checkBirthday() {
    var check_passed = true;
    var birthday = document.getElementById("birthday").value;
    if (birthday.length == 0) {
        errorAlert("Please enter your birthday!", "birthdayLabel");
        check_passed = false;
    }
    return check_passed
}

function confirmEmail() {
    var check_passed = true;
    var new_name = document.getElementById("name").value;
    var new_email = document.getElementById("email").value;
    if (confirm("Hello " + new_name + "\nIs your email correct: " + new_email) == false) {
        errorAlert("Please check your email!", "emailLabel");
        check_passed = false;
    }
    return check_passed

}

function checkEmailOnKeyUp() {
    document.getElementById("emailLabel").innerHTML = "Email:"
    email_input = document.getElementById("email").value;
    start = "Email: <span class=\"inputError\"> (Missing ";
    helpText = "";
    closeText = ")</span>";
    if (email_input.includes("@") == false) {
        helpText += " '@' ";
    }
    if (email_input.includes(".") == false) {
        helpText += " '.' ";
    }
    if (helpText !== "") {
        document.getElementById("emailLabel").innerHTML = start + helpText + closeText;
    }
}

function saveFormInput() {
    var savedFormInputJson = {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "birthday": document.getElementById("birthday").value,
        "joinConsent": getJoinMailingSelection()
    }

    var submitOutput = "<table><tr><td><h3>You submitted the following:</h3></td></tr>";
    submitOutput += "<tr><td><span style=\"color: orangered\">Name: </span>" + savedFormInputJson.name + "</td></tr>";
    submitOutput += "<tr><td><span style=\"color: orangered\">Email: </span>" + savedFormInputJson.email + "</td></tr>";
    submitOutput += "<tr><td><span style=\"color: orangered\">birthday: </span>" + savedFormInputJson.birthday + "</td></tr>";
    submitOutput += "<tr><td><span style=\"color: orangered\">joinConcent: </span>" + savedFormInputJson.joinConsent + "</td></tr>";
    submitOutput += "</table>";

    document.getElementById("SubmittedInfo").innerHTML = submitOutput;
}