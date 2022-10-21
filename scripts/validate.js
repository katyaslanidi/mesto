function enableValidation(settings) {
    const forms = document.querySelectorAll(settings.formSelector);

    forms.forEach((formSelector) => {
        setEventListeners(formSelector, settings);
    });
}

function setEventListeners(form, settings) {
    form.addEventListener('input', validateInput(settings));
}

const validateInput = (settings) => ( event ) => {
    const currentForm = event.currentTarget;
    isValidField(event.target);
    isValidButtonAndInput(currentForm, event.target, settings);
}

function isValidField(input) {
    const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
    errorSpan.textContent = input.validationMessage;
}

function isValidButtonAndInput(currentForm, input, settings) {
    const currentButton = currentForm.querySelector(settings.submitButtonSelector);

    if (currentForm.checkValidity()) {
        setSubmitButton(currentButton, true, settings);
    } else {
        setSubmitButton(currentButton, false, settings);
    }

    if (input.checkValidity()) {
        setErrorInput(input, true, settings);
    } else {
        setErrorInput(input, false, settings);
    }
}

function setSubmitButton(button, state, settings) {
    if (state) {
        button.removeAttribute('disabled');
        button.classList.add(settings.activeButtonClass);
        button.classList.remove(settings.inactiveButtonClass);
    } else {
        button.setAttribute('disabled', true);
        button.classList.add(settings.inactiveButtonClass);
        button.classList.remove(settings.activeButtonClass);
    }
}

function setErrorInput(input, state, settings) {
    if (state) {
        input.classList.remove(settings.inputErrorClass);

    } else {
        input.classList.add(settings.inputErrorClass);
    }
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
<<<<<<< HEAD
    activeButtonClass: 'popup__button_valid',
    inputErrorClass: 'popup__input_error'
});
=======
    inputErrorClass: 'popup__input_error',
    errorClass: 'error'
});
>>>>>>> 54a275d2fd53c40e895b3866ffe5aad6c3ace673
