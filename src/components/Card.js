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

    this._cardImage = this._newElement.querySelector('.element__image');
    this._trashButton = this._newElement.querySelector('.element__trash');
    this._likeButton = this._newElement.querySelector('.element__like');

    imageSrc.src = this._link;
    imageSrc.alt = this._name;
    cardText.textContent = this._name;

    this._setListenersForItem();
    this.setLikesCard();

    if (this._userId !== this._ownerId) {
      this._trashButton.remove();
      this._trashButton = null;
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
    const likeCounter = this._elementLike.querySelector('.element__like-counter');
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
    // this._deleteCardButton = this._newElement.querySelector('.element__delete');
    // this._deleteCardButton.addEventListener('click', () => {
    //   this._deleteCard();
    // });
    // this._elementLike = this._newElement.querySelector('.element__like');
    // this._elementLike.addEventListener('click', () => {
    //   this._addOrRemoveLike();
    // });
  }
}