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
const profilePopup = document.querySelector('.profile-popup');
const openPopupButton = document.querySelector('.profile__edit');
const closePopupButton = document.querySelector('.profile-popup__close');
const profileForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const addCardPopup = document.querySelector('.add-card-popup');
const openAddButton = document.querySelector('.profile__add');
const closeAddButton = document.querySelector('.add-card-popup__close');
const cardPopup = document.querySelector('.card-popup');
const closeImage = document.querySelector('.card-popup__close');
const elementsCard = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const titleInput = document.querySelector('.popup__input_title');
const urlInput = document.querySelector('.popup__input_url');
const formAddCard = document.querySelector('.add-card-popup__form');
const popupText = document.querySelector('.card-popup__text')
const popupImage = document.querySelector('.card-popup__image');

function createCard(initialCards) {
  const newElement = elementTemplate.cloneNode(true);
  const imageSrc = newElement.querySelector('.element__image');
  const cardText = newElement.querySelector('.element__text');
  imageSrc.src = initialCards.link;
  imageSrc.alt = initialCards.name;
  cardText.textContent = initialCards.name;
  setListenersForItem(newElement);
  return newElement;
}
function renderCard(initialCards) {
  const newElement = createCard(initialCards);
  elementsCard.append(newElement);
}
function render() {
  initialCards.forEach(renderCard);
}
function addNewCard(e) {
  e.preventDefault();
  const createNewElement = createCard({ name: titleInput.value, link: urlInput.value });
  elementsCard.prepend(createNewElement);
  closeAddCardPopup();
}

function openPopup(popup) {
  popup.classList.add('overlay_opened');
}
function closePopup(popup) {
  popup.classList.remove('overlay_opened');
}
function openProfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(profilePopup);
}
function closeProfilePopup() {
  closePopup(profilePopup);
}
function submitForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
}
function openAddCardPopup() {
  openPopup(addCardPopup);
}
function closeAddCardPopup() {
  closePopup(addCardPopup);
  formAddCard.reset();
}
function openCard(evt) {
  const currentCardItem = evt.target.closest('.element');
  const currentCardImage = currentCardItem.querySelector('.element__image');
  const currentCardText = currentCardItem.querySelector('.element__text');
  popupText.textContent = currentCardText.textContent;
  popupImage.src = currentCardImage.src;
  popupImage.alt = currentCardImage.alt;
  openPopup(cardPopup);
}
function closeCard() {
  closePopup(cardPopup);
}

function deleteCard(evt) {
  const currentCardItem = evt.target.closest('.element');
  currentCardItem.remove();
}
function addOrRemoveLike(evt) {
  const currentCardItem = evt.target.closest('.element');
  const currentCardLike = currentCardItem.querySelector('.element__like');
  if (currentCardLike.classList.contains('element__liked')) {
    currentCardLike.classList.remove('element__liked');
  } else {
    currentCardLike.classList.add('element__liked');
  }
}

function setListenersForItem(element) {
  const deleteCardButton = element.querySelector('.element__delete');
  deleteCardButton.addEventListener('click', deleteCard);
  const elementLike = element.querySelector('.element__like');
  elementLike.addEventListener('click', addOrRemoveLike);
  const cardImage = element.querySelector('.element__image');
  cardImage.addEventListener('click', openCard);
}

openAddButton.addEventListener('click', openAddCardPopup);
closeAddButton.addEventListener('click', closeAddCardPopup);
openPopupButton.addEventListener('click', openProfilePopup);
closePopupButton.addEventListener('click', closeProfilePopup);
profileForm.addEventListener('submit', submitForm);
closeImage.addEventListener('click', closeCard);
formAddCard.addEventListener('submit', addNewCard);
closeImage.addEventListener('click', closeCard);

render();