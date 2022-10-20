function enableValidation(settings) {
    const formArr = Array.from(document.querySelectorAll(settings.formSelector));
    formArr.forEach((formSelector) => {
        setEventListeners(formSelector);
    });
}

function setEventListeners(form) {
    form.addEventListener('input', validateInput);
}

function validateInput(evt) {
    const currentForm = evt.currentTarget;
    const currentButton = currentForm.querySelector('.popup__button');

    isValidField(evt.target);

    if (currentForm.checkValidity()) {
        setSubmitButton(currentButton, true);
    } else {
        setSubmitButton(currentButton, false);
    }
}

function isValidField(input) {
    const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
    errorSpan.textContent = input.validationMessage;

    if (input.checkValidity()) {
        setErrorInput(input, true);
    } else {
        setErrorInput(input, false);
    }
}

function setSubmitButton(button, state) {
    if (state) {
        button.removeAttribute('disabled');
        button.classList.add('popup__button_valid');
        button.classList.remove('popup__button_invalid');
    } else {
        button.setAttribute('disabled', true);
        button.classList.add('popup__button_invalid');
        button.classList.remove('popup__button_valid');
    }
}

function setErrorInput(input, state) {
    if (state) {
        input.classList.remove('popup__input_error');

    } else {
        input.classList.add('popup__input_error');
    }
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_error',
    errorClass: 'error'
});