import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { initialCards } from './cards.js';
const profilePopup = document.querySelector('.profile-popup');
const popupButton = document.querySelector('.profile__edit');
const popupButtonClose = document.querySelector('.profile-popup__close');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const cardPopupAdd = document.querySelector('.add-card-popup');
const popupAddButton = document.querySelector('.profile__add');
const popupAddButtonClose = document.querySelector('.add-card-popup__close');
export const cardPopup = document.querySelector('.card-popup');
const imageButtonClose = document.querySelector('.card-popup__close');
const elementsCard = document.querySelector('.elements');
const titleInput = document.querySelector('.popup__input_title');
const urlInput = document.querySelector('.popup__input_url');
export const popupText = document.querySelector('.card-popup__text')
export const popupImage = document.querySelector('.card-popup__image');
const popupOverlay = document.querySelectorAll('.overlay');
const cardButtonSubmit = document.querySelector('.add-card-popup__button');
const profileForm = document.querySelector('.popup__form');
const formAddCard = document.querySelector('.add-card-popup__form');
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  activeButtonClass: 'popup__button_valid',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error'
};

const editProfileValidator = new FormValidator(validationSettings, profileForm);
const addCardValidator = new FormValidator(validationSettings, formAddCard);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

function renderCard(data) {
  const card = new Card(data, '.element-template');
  const newElement = card.createCard();
  elementsCard.append(newElement);
}
function render() {
  initialCards.forEach(renderCard);
}

function addNewCard(e) {
  e.preventDefault();
  const card = new Card({ name: titleInput.value, link: urlInput.value }, '.element-template');
  const createNewElement = card.createCard();
  elementsCard.prepend(createNewElement);
  cardButtonSubmit.setAttribute('disabled', true);
  cardButtonSubmit.classList.add('popup__button_invalid');
  cardButtonSubmit.classList.remove('popup__button_valid');
  closeAddCardPopup();
}

export function openPopup(popup) {
  popup.classList.add('overlay_opened');
  document.addEventListener('keydown', closeByEsc);
}
function closePopup(popup) {
  popup.classList.remove('overlay_opened');
  document.removeEventListener('keydown', closeByEsc);
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
  cardButtonSubmit.setAttribute('disabled', true);
  openPopup(cardPopupAdd);
}
function closeAddCardPopup() {
  closePopup(cardPopupAdd);
  formAddCard.reset();
}
function closeCard() {
  closePopup(cardPopup);
}

function closeByOverlay(overlay) {
  overlay.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('overlay_opened')) {
      closePopup(overlay);
    }
  })
}
function closeByEsc(evt) {
  if (evt.key == 'Escape') {
    const openedOverlay = document.querySelector('.overlay_opened');
    closePopup(openedOverlay);
  }
}
popupOverlay.forEach(closeByOverlay);

popupAddButton.addEventListener('click', openAddCardPopup);
popupAddButtonClose.addEventListener('click', closeAddCardPopup);

popupButton.addEventListener('click', openProfilePopup);
popupButtonClose.addEventListener('click', closeProfilePopup);

profileForm.addEventListener('submit', submitForm);
imageButtonClose.addEventListener('click', closeCard);

formAddCard.addEventListener('submit', addNewCard);

render();