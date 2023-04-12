export default class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._settings = settings;
        this._inputSelector = this._settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._currentButton = this._form.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    }
    //проверка валидности
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showError(inputElement, inputElement.validationMessage);
        } else {
            this._hideError(inputElement);
        }
    }
    //проверяем на неправильный ввод
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }
    //активируем кнопку отправки
    _makeButtonActive() {
        this._currentButton.classList.remove(this._settings.inactiveButtonClass);
        this._currentButton.disabled = false;
    }
    //дезактивируем кнопку отправки
    makeButtonNotActive() {
        this._currentButton.classList.add(this._settings.inactiveButtonClass);
        this._currentButton.disabled = true;
    }
    //смена состояния кнопки
    _toggleButtonState() {
        if(this._hasInvalidInput()) {
            this.makeButtonNotActive();
        } else {
            this._makeButtonActive();
        }
    }
    //отображение ошибки
    _showError(inputElement, errorMessage) {
        const { inputErrorClass, errorClass } = this._settings;
        const errorSpan = this._form.querySelector(`#${inputElement.id}-error`);

        inputElement.classList.add(inputErrorClass);

        errorSpan.classList.add(errorClass);
        errorSpan.textContent = errorMessage;
    }
    //скрываем ошибки
    _hideError(inputElement) {
        const { inputErrorClass, errorClass } = this._settings;
        const errorSpan = this._form.querySelector(`#${inputElement.id}-error`);

        inputElement.classList.remove(inputErrorClass);

        errorSpan.classList.remove(errorClass);
        errorSpan.textContent = "";
    }
    //функция сброса ошибок
    resetErrors() {
        this._inputList.forEach((inputElement) => {
            this._hideError(inputElement);
            this._toggleButtonState();
        });
    }
    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }
    enableValidation() {
        this._setEventListeners();
    }
}