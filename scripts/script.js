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
const elementTemplate = document.querySelector('.element-template').content;
const titleInput = document.querySelector('.popup__input_title');
const urlInput = document.querySelector('.popup__input_url');
const formAddCard = document.querySelector('.popup_add_image__form');
// const newCardButton = document.querySelector('.popup_add_image__button');
//кнопка сабмина
function render() {
  initialCards.forEach(renderCard);
}
function renderCard (initialCards) {
  const newElement = elementTemplate.cloneNode(true);
  const imageSrc = newElement.querySelector('.element__image');
  imageSrc.src = initialCards.link;
  const cardText = newElement.querySelector('.element__text');
  cardText.textContent = initialCards.name;
  // // setListenersForItem(newElement);
  // setList
  elementsCard.appendChild(newElement);
}
render();

function addNewCard(event) {
  event.preventDefault();
  addImage.src = urlInput.value;
  addText.textContent = titleInput.value;

  closeAdd();
}

formAddCard.addEventListener('submit', addNewCard);