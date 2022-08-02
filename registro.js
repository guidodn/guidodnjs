// formulario de registro //
 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Nombre de usuario es requerido');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email es requerido');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'La dirección email no es válida');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Contraseña requerida');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La contraseña debe tener al menos 8 caracteres')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Por favor, confirme su contraseña');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Las contraseñas no coinciden");
    } else {
        setSuccess(password2);
    }

};

const boton = document.getElementById(`registrarse`)

boton.addEventListener('click', () => {

    Swal.fire({
        position: 'bottom',
        icon: 'success',
        title: 'Registrado con éxito!',
        showConfirmButton: false,
        timer: 1500
      })
})