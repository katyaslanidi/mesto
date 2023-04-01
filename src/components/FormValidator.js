export default class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._settings = settings;
        this._currentButton = form.querySelector(this._settings.submitButtonSelector);
        this._inputArray = Array.from(form.querySelector(this._settings.inputSelector))
    }
    enableValidation() {
        this._setEventListeners();
    }
    disableButton(button) {
        button.setAttribute('disabled', true);
        button.classList.add(this._settings.inactiveButtonClass);
    }
    _setEventListeners() {
        this._form.addEventListener('input', () => {
            this._validateInput(event);
        });
    }
    _validateInput(event) {
        this._input = event.target;
        this._isValidField();
        this._isValidButtonAndInput();
    }
    _isValidField() {
        this._errorSpan = this._form.querySelector(`#${this._input.id}-error`);
        this._errorSpan.textContent = this._input.validationMessage;
    }
    _isValidButtonAndInput() {
        if (this._form.checkValidity()) {
            this._setSubmitButton(true);
        } else {
            this._setSubmitButton(false);
        }
    
        if (this._input.checkValidity()) {
            this._setErrorInput(true);
        } else {
            this._setErrorInput(false);
        }
    }
    _setSubmitButton(state) {
        if (state) {
            this._currentButton.removeAttribute('disabled');
            this._currentButton.classList.remove(this._settings.inactiveButtonClass);
        } else {
            this.disableButton(this._currentButton);
        }
    }
    _setErrorInput(state) {
        if (state) {
            this._input.classList.remove(this._settings.inputErrorClass);
            this._errorSpan.textContent = "";
    
        } else {
            this._input.classList.add(this._settings.inputErrorClass);
        }
    }
    _removeError(element) {
        this._errorSpan = this._form.querySelector(`#${element.id}-error`);
        this._errorSpan.textContent = "";
        this._errorSpan.classList.remove(this.errorClass);
        element.classList.remove(this.inputErrorClass);
    }
}