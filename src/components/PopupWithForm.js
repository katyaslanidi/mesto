import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._submitButton = this._popup.querySelector('.popup__button');
    }
    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value;
        })
        return inputValues;
    }
    setEventListeners() {
        this._inputForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
        super.setEventListeners();
    }
    close() {
        super.close();
        this._inputForm.reset();
    }
    rendererLoading(loading) {
        if (loading) {
            this._submitButton.textContent = "Сохранение...";
        } else {
            this._submitButton.textContent = "Сохранить"
        }
    }
}