const SHOW_ERROR = 'showError';

const ERROR_NAME = 'errorFname' ;
const ERROR_LAST_NAME = 'errorLname';
const ERROR_EMAIL = 'errorEmail';
const ERROR_PASSWORD = 'errorPassword';

const Fname = document.getElementById('inputFname');
const Lname = document.getElementById('inputLname');
const Email = document.getElementById('inputEmail');
const Password = document.getElementById('inputPassword');

const setError = (inputErrorName, classErrorName) => {
    document.getElementById(inputErrorName).className = classErrorName;
}

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    Fname.value.length === 0 ? setError(ERROR_NAME, SHOW_ERROR) : setError(ERROR_NAME, '');
    Lname.value.length === 0 ? setError(ERROR_LAST_NAME, SHOW_ERROR) : setError(ERROR_LAST_NAME, '');
    Email.value.length === 0 ? setError(ERROR_EMAIL, SHOW_ERROR) : setError(ERROR_EMAIL, '');
    Password.value.length === 0 ? setError(ERROR_PASSWORD, SHOW_ERROR) : setError(ERROR_PASSWORD, '');
});


Fname.addEventListener('blur', (ev) => {
    Fname.value.length === 0 ? setError(ERROR_NAME, SHOW_ERROR): setError(ERROR_NAME, '');
});

Lname.addEventListener('blur', (ev) => {
    Lname.value.length === 0 ? setError(ERROR_LAST_NAME, SHOW_ERROR) : setError(ERROR_LAST_NAME, '');
});

Email.addEventListener('blur', (ev) => {
    Email.value.length === 0 ? setError(ERROR_EMAIL, SHOW_ERROR) : setError(ERROR_EMAIL, '');
});

Password.addEventListener('blur', (ev) => {
    Password.value.length === 0 ? setError(ERROR_PASSWORD, SHOW_ERROR) : setError(ERROR_PASSWORD, '');
});