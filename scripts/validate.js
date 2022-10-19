const formEdit = document.forms.edit;
const formCard = document.forms.card;

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

formEdit.addEventListener('input', validateInput);
formCard.addEventListener('input', validateInput);