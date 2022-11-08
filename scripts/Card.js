import { openPopup, popupText, popupImage, cardPopup } from "./script.js";
export class Card {
    constructor(data, template) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._elementTemplate = document.querySelector(template).content;
    }
    createCard() {
        this._newElement = this._elementTemplate.cloneNode(true);
        const imageSrc = this._newElement.querySelector('.element__image');
        const cardText = this._newElement.querySelector('.element__text');
       
        imageSrc.src = this._link;
        imageSrc.alt = this._name;
        cardText.textContent = this._name;

        this._setListenersForItem();
        return this._newElement;
    }
    _deleteCard(evt) {
        this._currentCardItem = evt.target.closest('.element');
        this._currentCardItem.remove();
    }
    _addOrRemoveLike(evt) {
        this._currentCardItem = evt.target.closest('.element');
        this._currentCardLike = this._currentCardItem.querySelector('.element__like');
        this._currentCardLike.classList.toggle('element__liked');
      }
      _openCard(evt) {
        const currentCardItem = evt.target.closest('.element');
        const currentCardImage = currentCardItem.querySelector('.element__image');
        const currentCardText = currentCardItem.querySelector('.element__text');
        popupText.textContent = currentCardText.textContent;
        popupImage.src = currentCardImage.src;
        popupImage.alt = currentCardImage.alt;
        openPopup(cardPopup);
      }
      _setListenersForItem() {
        this._deleteCardButton = this._newElement.querySelector('.element__delete');
        this._deleteCardButton.addEventListener('click', this._deleteCard);
        this._elementLike = this._newElement.querySelector('.element__like');
        this._elementLike.addEventListener('click', this._addOrRemoveLike);
        this._cardImage = this._newElement.querySelector('.element__image');
        this._cardImage.addEventListener('click', this._openCard);
      }
}
