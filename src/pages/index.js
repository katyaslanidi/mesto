import './index.css';

import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

// const nameInput = document.querySelector('.popup__input_name');
// const jobInput = document.querySelector('.popup__input_job');
const popupAddButton = document.querySelector('.profile__add');
const popupButton = document.querySelector('.profile__edit');
const imageEditButton = document.querySelector('.profile__image-edit-button');
const profileForm = document.querySelector('.popup__form');
const formAddCard = document.querySelector('.add-card-popup__form');
const profileImageForm = document.querySelector('.avatar-edit__form');
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
    "Content-Type": 'application/json',
  },
};
let userId;

const profileValidatorEdit = new FormValidator(validationSettings, profileForm);
const cardValidatorAdd = new FormValidator(validationSettings, formAddCard);
const profileImageValidator = new FormValidator(validationSettings, profileImageForm);

profileValidatorEdit.enableValidation();
cardValidatorAdd.enableValidation();
profileImageValidator.enableValidation();

const api = new Api(apiConfig);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([me, cards]) => {
    userId = me._id;
    userInfo.setUserInfo(me);
    cardsContainer.renderItems(cards);
  })
  .catch((err) => console.log(err))
  .finally(() => { });

const cardsContainer = new Section(
  (card) => createNewCard(card),
  '.element-template'
);

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job',
  userProfileImageSelector: '.profile__image'
});

const openPopupImage = new PopupWithImage('.card-popup');
openPopupImage.setEventListeners();

const popupWithSubmit = new PopupWithSubmit('.card-delete');
popupWithSubmit.setEventListeners();

const popupUserEdit = new PopupWithForm('.profile-popup', (data) => {
  const { userName, userJob } = data;
  popupUserEdit.rendererLoading(true);
  api
    .editUserInfo(userName, userJob)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupUserEdit.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupUserEdit.rendererLoading(false));
});
popupUserEdit.setEventListeners();

const popupProfileImageEdit = new PopupWithForm('.avatar-edit', (data) => {
  popupProfileImageEdit.rendererLoading(true);
  api
    .editProfileImage(data)
    .then((formData) => {
      userInfo.setUserInfo(formData);
      popupProfileImageEdit.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupProfileImageEdit.rendererLoading(false));
});
popupProfileImageEdit.setEventListeners();

const popupAddCard = new PopupWithForm('.add-card-popup', (dataCard) => {
  popupAddCard.rendererLoading(true);
  const { name, link } = dataCard;
  api
    .addNewCard(name, link)
    .then((newDataCard) => {
      const card = createNewCard(newDataCard);
      cardsContainer.addItem(card);
      cardValidatorAdd.disableButton(popupSubmitButton);
      popupAddCard.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAddCard.rendererLoading(false));
});
popupAddCard.setEventListeners();

const createNewCard = (dataCard) => {
  const card = new Card(
    dataCard,
    '.element-template',
    (name, link) => {
      openPopupImage.open(name, link);
    },
    (id) => {
      popupWithSubmit.open();
      popupWithSubmit.setSubmitHandlers(() => {
        popupWithSubmit.rendererLoading(true);
        api
          .deleteCard(id)
          .then((res) => {
            card.deleteCard(res);
            popupWithSubmit.close();
          })
          .catch((err) => console.log(err))
          .finally(() => popupWithSubmit.rendererLoading(false));
      });
    },
    (id) => {
      if (!card.alreadyLiked()) {
        api
          .addLikeCard(id)
          .then((data) => {
            card.setLikesCard(data.likes);
          })
          .catch((err) => console.log(err));
      } else {
        api
          .deleteLikeCard(id)
          .then((data) => {
            card.setLikesCard(data.likes);
          })
          .catch((err) => console.log(err));
      }
    },
    userId
  );
  return card.createCard()
};

popupButton.addEventListener('click', () => {
  popupUserEdit._getInputValues(userInfo.getUserInfo());
  popupUserEdit.open();
});

popupAddButton.addEventListener('click', () => {
  popupAddCard.open();
});

imageEditButton.addEventListener('click', () => {
  popupProfileImageEdit.open();
})