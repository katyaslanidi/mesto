import { openPopup, popupText, popupImage, cardPopup } from "./script.js";
export class Card {
    constructor(data, template) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._template = template;
    }
    _getTemplate() {
      this._newElement = document
        .querySelector(this._template)
        .content
        .querySelector('.element')
        .cloneNode(true);
      return this._newElement;
    }
    createCard() {
        this._getTemplate();
        const imageSrc = this._newElement.querySelector('.element__image');
        const cardText = this._newElement.querySelector('.element__text');

        imageSrc.src = this._link;
        imageSrc.alt = this._name;
        cardText.textContent = this._name;
        
        this._setListenersForItem();
        return this._newElement;
    }
    _deleteCard() {
      this._newElement.remove();
      this._newElement = null;
    }
    _addOrRemoveLike() {
        this._elementLike.classList.toggle('element__liked');
      }
    _openCard() {
        popupImage.src = this._link;
        popupText.textContent = this._name;
        popupImage.alt = this._name;
        openPopup(cardPopup);
    }
    _setListenersForItem() {
        this._deleteCardButton = this._newElement.querySelector('.element__delete');
        this._deleteCardButton.addEventListener('click', () => {
          this._deleteCard();
        });
        this._elementLike = this._newElement.querySelector('.element__like');
        this._elementLike.addEventListener('click', () => {
          this._addOrRemoveLike();
        });
        this._cardImage = this._newElement.querySelector('.element__image');
        this._cardImage.addEventListener('click', () => {
          this._openCard();
        });
    }
}
