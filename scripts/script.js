const overlayEl = document.querySelector('.overlay');
const openPopupButton = document.querySelector('.profile__edit');
const closePopupButton = document.querySelector('.overlay__button');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const saveButton = document.querySelector('.popup__button');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

function openPopup() {
  overlayEl.classList.add('overlay_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
function closePopup() {
  overlayEl.classList.remove('overlay_opened');
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

//попап добавления картинки
const popupEl = document.querySelector('.popup_add_image');
const openAddButton = document.querySelector('.profile__add');
const closeAddButton = document.querySelector('.popup_add_image__close');

function openAdd() {
  popupEl.classList.add('popup_add_image_opened');
}
function closeAdd() {
  popupEl.classList.remove('popup_add_image_opened');
}

openAddButton.addEventListener('click', openAdd);
closeAddButton.addEventListener('click', closeAdd);

//вывод картинок из массива

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementsCard = document.querySelector('.elements');
const cardElement = document.querySelector('.element');
const elementTemplate = document.querySelector('.element-template').content;
const titleInput = document.querySelector('.popup__input_title'); //инпут name
const urlInput = document.querySelector('.popup__input_url');//инпут link
const formAddCard = document.querySelector('.popup_add_image__form');
const cardPopup = document.querySelector('.image_popup');

function render() {
  initialCards.forEach(renderCard);
}
function renderCard(initialCards) {
  const newElement = elementTemplate.cloneNode(true);
  const imageSrc = newElement.querySelector('.element__image');
  const cardText = newElement.querySelector('.element__text');

  imageSrc.src = initialCards.link;
  imageSrc.alt = initialCards.name;
  cardText.textContent = initialCards.name;

  setListenersForItem(newElement);
  elementsCard.appendChild(newElement);
}
render();

function setListenersForItem(element) {
  const deleteCardButton = element.querySelector('.element__delete');
  deleteCardButton.addEventListener('click', deleteCard);

  const elementLike = element.querySelector('.element__like');
  elementLike.addEventListener('click', addOrRemoveLike);

  const cardImage = element.querySelector('.element__image');
  cardImage.addEventListener('click', openCard);
}

//удаление карточки
function deleteCard(evt) {
  const currentCardItem = evt.target.closest('.element');
  currentCardItem.remove();
}
//ставим лайк
function addOrRemoveLike(evt) {
  const currentCardItem = evt.target.closest('.element');
  const currentCardLike = currentCardItem.querySelector('.element__like');
  if (currentCardLike.classList.contains('element__liked')) {
    currentCardLike.classList.remove('element__liked');
  } else {
    currentCardLike.classList.add('element__liked');
  }
}
//открываем карточку
function openCard(evt) {
  const currentCardItem = evt.target.closest('.element');
  const currentCardImage = currentCardItem.querySelector('.element__image');
  const currentCardText = currentCardItem.querySelector('.element__text');

  const popupText = document.querySelector('.image_popup__text')
  const popupImage = document.querySelector('.image_popup__image');

  popupText.textContent = currentCardText.textContent;
  popupImage.src = currentCardImage.src;
  popupImage.alt = currentCardImage.alt;

  cardPopup.classList.add('image_popup_opened');
}

const closeImage = document.querySelector('.image_popup__close');
function closeCard() {
  cardPopup.classList.remove('image_popup_opened');
}
closeImage.addEventListener('click', closeCard);

//добавляем новую карточку
function addNewCard(e) {
  e.preventDefault();
  const newCard = elementTemplate.cloneNode(true);
  const imageSrc = newCard.querySelector('.element__image');
  imageSrc.src = urlInput.value;
  const cardText = newCard.querySelector('.element__text');
  cardText.textContent = titleInput.value;
  elementsCard.insertBefore(newCard, elementsCard.firstChild);
  closeAdd();
}
formAddCard.addEventListener('submit', addNewCard);