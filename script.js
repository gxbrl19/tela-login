

const _inputs = document.querySelectorAll('.input');
const _button = document.querySelector('.login_button');


const handleFocus = ({ target }) => {
    const _span = target.previousElementSibling;
    _span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {

    if (target.value == '') {
        const _span = target.previousElementSibling;
        _span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [_username, _password] = _inputs;

    if (_username.value && _password.value.length >= 8) {
        _button.removeAttribute('disabled');
    }
    else {
        _button.setAttribute('disabled', '');
    }
}

_inputs.forEach((input) => input.addEventListener('focus', handleFocus));
_inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
_inputs.forEach((input) => input.addEventListener('input', handleChange));





