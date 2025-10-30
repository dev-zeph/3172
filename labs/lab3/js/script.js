const users = new Map([['tester','Password123!'],
    ['user1','PassWord456@'],
    ['user2','Secure789#'],
    ['user3','Strong012$']
])

const usernames = new Set(['tester', 'user1', 'user2', 'user3']);

const checkUsernameExists = (username) => {
    return usernames.has(username);
}


const hasUpperCase = (str) => {
    for (let i =0; i <str.length; i++){
        if (str[i] >= 'A' && str[i] <= 'Z'){
            return true;
        }
    }
    return false
}

const hasLowerCase = (str) => {
    for (let i = 0; i <str.length; i++){
        if (str[i] >= 'a' && str[i] <= 'z'){
            return true;
        }
    }
    return false;
}

const hasNumber = (str) => {
    for (let i = 0; i < str.length; i++){
        if (str[i] >= '0' && str[i] <= '9'){
            return true;
        }
    }
    return false;
}

const hasSpecialChar = (str) => {
    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', 
        '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/','\\','|','`','~'];
    for (let i = 0; i < str.length; i++){
        if (specialChars.includes(str[i])){
            return true;
        }
    }
    return false;
}

const isLongEnough = (str, minLength) => {
    return str.length >= minLength;
}

const isAlpha = (str) => {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')) {
            return false;
        }
    }
    return true;
};

const isValidEmail = (email) => {
    let atIndex = -1;
    let dotIndex = -1;
    let atCount = 0;
    let dotCount = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            atIndex = i;
            atCount++;
        } else if (email[i] === '.') {
            dotIndex = i;
            dotCount++;
        }
    }
    if (atCount !== 1 || dotCount < 1 || atIndex > dotIndex || atIndex === 0 || dotIndex === email.length - 1) {
        return false;
    }
    const domain = email.slice(dotIndex + 1);
    return domain.length >= 2 && domain.length <= 8 && isAlpha(domain);
};

const isValidUsername = (username) => {
    if (username.length === 0 || username[0] >= '0' && username[0] <= '9') return false;
    for (let i = 0; i < username.length; i++) {
        const char = username[i];
        if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && !(char >= '0' && char <= '9')) {
            return false;
        }
    }
    return true;
};

const validatePassword = (password) => {
    if (!isLongEnough(password, 12)) {
        return false;
    }
    if (!hasUpperCase(password)) {
        return false;
    }
    if (!hasLowerCase(password)) {
        return false;
    }
    if (!hasNumber(password)) {
        return false;
    }
    if (!hasSpecialChar(password)) {
        return false;
    }
    return true;
}


addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById("loginForm");
    const registrationForm = document.getElementById("registrationForm");

    // Helper to get element
    const getElement = (id) => document.getElementById(id);

    // Clear errors
    const clearErrors = () => {
        ['emailError', 'usernameError', 'passwordError', 'confirmPasswordError', 'loginUsernameError', 'loginPasswordError'].forEach(id => {
            const el = getElement(id);
            if (el) {
                el.style.display = 'none';
                el.textContent = '';
            }
        });
        ['email', 'username', 'password', 'confirmPassword', 'loginUsername', 'loginPassword'].forEach(id => {
            const el = getElement(id);
            if (el) el.classList.remove('error');
        });
        const successEl = getElement('successMessage');
        if (successEl) successEl.style.display = 'none';
        const loginEl = getElement('loginMessage');
        if (loginEl) loginEl.style.display = 'none';
    };

    
    const showError = (fieldId, errorId, message) => {
        getElement(errorId).textContent = message;
        getElement(errorId).style.display = 'block';
        getElement(fieldId).classList.add('error');
    };

   
    // Login handler
    if (loginForm) {
        loginForm.addEventListener("submit", event => {
            event.preventDefault();
            try {
                clearErrors();
                const { username, password } = Object.fromEntries(new FormData(event.target));

                if (!checkUsernameExists(username)) {
                    showError('loginUsername', 'loginUsernameError', 'Username does not exist.');
                    return;
                }

                if (users.get(username) !== password) {
                    showError('loginPassword', 'loginPasswordError', 'Incorrect password.');
                    return;
                }

                getElement('loginMessage').textContent = 'Login successful!';
                getElement('loginMessage').classList.remove('error');
                getElement('loginMessage').classList.add('success');
                getElement('loginMessage').style.display = 'block';
                console.log(`User logged in: ${username}`);
            } catch (error) {
                console.error('Login error:', error);
                alert('An error occurred during login.');
            }
        });
    }

    // Registration handler
    if (registrationForm) {
        registrationForm.addEventListener("submit", event => {
        event.preventDefault();
        try {
            clearErrors();
            const { email, username, password, confirmPassword } = Object.fromEntries(new FormData(event.target));

            let errors = [];

            if (!isValidEmail(email)) {
                errors.push({ field: 'email', message: 'Invalid email format.' });
            }

            if (!isValidUsername(username)) {
                errors.push({ field: 'username', message: 'Username shouldnt start with a number and contain only letters and numbers.' });
            } else if (checkUsernameExists(username)) {
                errors.push({ field: 'username', message: 'Username already exists.' });
            }

            if (!validatePassword(password)) {
                errors.push({ field: 'password', message: 'Password must be at least 12 characters with at least one uppercase, lowercase, number, and special character.' });
            }

            if (password !== confirmPassword) {
                errors.push({ field: 'confirmPassword', message: 'Passwords do not match.' });
            }

            if (errors.length > 0) {
                errors.forEach(({ field, message }) => {
                    const errorId = `${field}Error`;
                    showError(field, errorId, message);
                });
            } else {
                users.set(username, password);
                usernames.add(username);
                getElement('successMessage').textContent = 'Welcome!!!!';
                getElement('successMessage').style.display = 'block';
                console.log(`User registered: ${username}`);
                event.target.reset();
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('An error occurred during registration.');
        }
    });

    // Real-time validation for registration
    if (registrationForm) {
        const validateField = (fieldId, validator, errorId, message) => {
            const field = getElement(fieldId);
            if (field) {
                field.addEventListener('blur', () => {
                    if (field.value && !validator(field.value)) {
                        showError(fieldId, errorId, message);
                    } else {
                        getElement(errorId).style.display = 'none';
                        field.classList.remove('error');
                    }
                });
            }
        };

        validateField('email', isValidEmail, 'emailError', 'Invalid email format.');
        validateField('username', (val) => isValidUsername(val) && !checkUsernameExists(val), 'usernameError', 'Invalid or existing username.');
        validateField('password', validatePassword, 'passwordError', 'Password does not meet requirements.');


        const confirmField = getElement('confirmPassword');
        if (confirmField) {
            confirmField.addEventListener('blur', () => {
                const password = getElement('password').value;
                const confirm = confirmField.value;
                if (password !== confirm) {
                    showError('confirmPassword', 'confirmPasswordError', 'Passwords do not match.');
                } else {
                    getElement('confirmPasswordError').style.display = 'none';
                    confirmField.classList.remove('error');
                }
            });
        }
    }
}
});