export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.add('overlay_opened');
    }
    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.classList.remove('overlay_opened');
    }
    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('overlay_opened') 
            || evt.target.classList.contains('popup__close') 
            || evt.target.classList.contains('card-popup__close')) {
                this.close();
            }
        })
    }
    _handleEscClose(evt) {
        if (evt.key == 'Escape') {
            this.close();
        }
    }
}