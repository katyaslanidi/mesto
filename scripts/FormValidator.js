export class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._settings = settings;
    }
    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
    _setEventListeners() {
        this._form.addEventListener('input', () => {
            this._validateInput(event);
        });
    }
    _validateInput(event) {
        this._currentForm = event.currentTarget;
        this._input = event.target;
        this._isValidField();
        this._isValidButtonAndInput();
    }
    _isValidField() {
        this._errorSpan = this._input.parentNode.querySelector(`#${this._input.id}-error`);
        this._errorSpan.textContent = this._input.validationMessage;
    }
    _isValidButtonAndInput() {
        this._currentButton = this._currentForm.querySelector(this._settings.submitButtonSelector);

        if (this._currentForm.checkValidity()) {
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
            this._currentButton.classList.add(this._settings.activeButtonClass);
            this._currentButton.classList.remove(this._settings.inactiveButtonClass);
        } else {
            this._currentButton.setAttribute('disabled', true);
            this._currentButton.classList.add(this._settings.inactiveButtonClass);
            this._currentButton.classList.remove(this._settings.activeButtonClass);
        }
    }
    _setErrorInput(state) {
        if (state) {
            this._input.classList.remove(this._settings.inputErrorClass);
    
        } else {
            this._input.classList.add(this._settings.inputErrorClass);
        }
    }
}
