const loginSgnupBtn = document.getElementById("login-sgnup-btn");
const sgnupLoginBtn = document.getElementById("sgnup-login-btn");

// Fetching all profiles for checking the email and password values

loginSgnupBtn.addEventListener('click', _e => {
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");
    login.style.display = "none";
    signup.style.display = "flex";
})

sgnupLoginBtn.addEventListener('click', () => {
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");
    login.style.display = "flex";
    signup.style.display = "none";
})

// Input methods
const removeEmailList = () => {
    const emailList = document.getElementById('emailChecks');
    if (emailList.childElementCount) {
        let element = emailList.lastElementChild;
        while (element) {
            emailList.removeChild(element);
            element = emailList.lastElementChild;
        }
    }
}
const removePasswordList = () => {
    const passwordList = document.getElementById('passwordChecks');
    if (passwordList.childElementCount) {
        let element = passwordList.lastElementChild;
        while (element) {
            passwordList.removeChild(element);
            element = passwordList.lastElementChild;
        }
    }
}


// Regex expressions for signup form
const emailRegex = {
    length: {
        func: email => email.length >= 5,
        message: 'At least 5 characters',
    },
    contains: {
        func: email => {
            const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            return email.match(pattern);
        },
        message: 'Email should contain an @ and . character'
    }
};
const passwordRegex = {
    length: {
        func: pass => pass.length >= 8,
        message: 'At least 8 characters',
    },
    uppercaseCharacter: {
        func: pass => {
            for (const element of pass) {
                if (element.toUpperCase() === element && element.match(/^[a-z]+$/i)) {
                    return true;
                }
            }
            return false;
        },
        message: 'at least one uppercase character'
    },
    number: {
        func: pass => {
            for (const element of pass) {
                if (!isNaN(element)) {
                    return true;
                }
            }
            return false;
        },
        message: 'at least one digit'
    },
    specialCharacter: {
        func: pass => {
            const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return regex.test(pass);
        },
        message: 'Password needs at least one special character'
    }
}

function verifyConditions(listToAppend, regexObj, valueToCheck, valid) {
    for (const expr in regexObj) {
        if (!regexObj[expr].func(valueToCheck)) {
            valid = false;
            const element = document.createElement('li');
            element.textContent = regexObj[expr].message;
            element.classList.add('wrong');
            listToAppend.append(element);
        }
    }
    return valid;
}

function verifyInputs() {
    const emailValue = document.getElementById("emailStep2").value;
    const passwordValue = document.getElementById("passwordStep2").value;
    const usernameValue = document.getElementById('username').value;
    const emailList = document.getElementById('emailChecks');
    const passwordList = document.getElementById('passwordChecks');

    removeEmailList();
    removePasswordList();

    let validInputs = true;

    validInputs = verifyConditions(emailList, emailRegex, emailValue, validInputs);
    validInputs = verifyConditions(passwordList, passwordRegex, passwordValue, validInputs);

    // daca totul e bine, adaugam in localStorage si in baza de date, cred
    if (validInputs) {
        localStorage.setItem('email', emailValue);
        const xhttp = new XMLHttpRequest();
        xhttp.open('POST', `/login`, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(`email=${emailValue}&password=${passwordValue}&username=${usernameValue}`);
        window.location.href = 'http://localhost:6969';
    } else {
        console.log("Nu merge!")
    }

}

document.getElementById("btnStep2").addEventListener('click', verifyInputs)
