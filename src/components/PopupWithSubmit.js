import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._popup.querySelector('.popup__button');
    }
    rendererLoading(loading) {
        if (loading) {
            this._submitButton.textContent = "Удаление...";
        } else {
            this._submitButton.textContent = "Да";
        }
    }
    setSubmitHandler(submitHandler) {
        this._handleFormSubmit = submitHandler;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
        })
    }
}