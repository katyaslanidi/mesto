import './index.css';

import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards } from '../utils/cards.js';

const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const popupAddButton = document.querySelector('.profile__add');
const popupButton = document.querySelector('.profile__edit');
const profileForm = document.querySelector('.popup__form');
const formAddCard = document.querySelector('.add-card-popup__form');
const popupSubmitButton = document.querySelector('.add-card-popup__button');
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error'
};
const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: 'c41c66fe-334b-43d7-a03f-de906f681c65',
    "Content-Type": "application/json",
  },
};

const profileValidatorEdit = new FormValidator(validationSettings, profileForm);
const cardValidatorAdd = new FormValidator(validationSettings, formAddCard);

profileValidatorEdit.enableValidation();
cardValidatorAdd.enableValidation();

const cardsContainer = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cardsContainer.addItem(card);
    },
  },
  ".elements"
);

const createCard = ({ name, link }) => {
  const newCard = new Card({ name, link }, '.element-template', (name, link) => {
    openPopupImage.open(name, link);
  });
  return newCard.createCard();
};

cardsContainer.renderItems();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
});

const popupEdit = new PopupWithForm('.profile-popup', (inputValues) => {
  popupEdit.close();
  userInfo.setUserInfo(inputValues);
});
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm('.add-card-popup', (inputValues) => {
  const card = createCard(inputValues);
  cardsContainer.addItem(card);
  popupAdd.close();
  cardValidatorAdd.disableButton(popupSubmitButton);
})
popupAdd.setEventListeners();

const openPopupImage = new PopupWithImage('.card-popup');
openPopupImage.setEventListeners();

popupButton.addEventListener('click', () => {
  popupEdit.open();
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().job;
});

popupAddButton.addEventListener('click', () => {
  popupAdd.open();
})