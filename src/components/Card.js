export default class Card {
  constructor(data, template, handleCardClick, handleTrashClick, handleLikeClick, userId) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._owenerId = data.owner._id;
    this._userId = userId;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }
  createCard() {
    this._newElement = this._getTemplate();

    this._cardText = this._newElement.querySelector('.element__text');
    this._cardImage = this._newElement.querySelector('.element__image');

    this._cardText.textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;

    this._trashButton = this._newElement.querySelector('.element__delete');
    this._likeButton = this._newElement.querySelector('.element__like');

    this._setListenersForItem();
    this.setLikesCard(this._likes);

    if (this._owenerId !== this._userId) {
      this._trashButton.style.display = 'none';
    }

    return this._newElement;
  }
  deleteCard = () => {
    this._newElement.remove();
    this._newElement = null;
  }
  _activeLike() {
    this._likeButton.classList.add('element__liked');
  }
  _deactiveLike() {
    this._likeButton.classList.remove('element__liked');
  }
  alreadyLiked() {
    return this._likes.some((userLike) => userLike._id === this._userId);
  }
  setLikesCard(newLikes) {
    this._likes = newLikes;
    const likeCounter = this._newElement.querySelector('.element__like-counter');
    if (this.alreadyLiked()) {
      this._activeLike();
    } else {
      this._deactiveLike();
    }
    likeCounter.textContent = this._likes.length;
  }
  _setListenersForItem() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this._id);
    })
    this._trashButton.addEventListener('click', () => {
      this._handleTrashClick(this._id);
    })
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }
}