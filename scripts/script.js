const profilePopup = document.querySelector('.profile-popup');
const popupButton = document.querySelector('.profile__edit');
const popupButtonClose = document.querySelector('.profile-popup__close');
const profileForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const cardPopupAdd = document.querySelector('.add-card-popup');
const popupAddButton = document.querySelector('.profile__add');
const popupAddButtonClose = document.querySelector('.add-card-popup__close');
const cardPopup = document.querySelector('.card-popup');
const imageButtonClose = document.querySelector('.card-popup__close');
const elementsCard = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const titleInput = document.querySelector('.popup__input_title');
const urlInput = document.querySelector('.popup__input_url');
const formAddCard = document.querySelector('.add-card-popup__form');
const popupText = document.querySelector('.card-popup__text')
const popupImage = document.querySelector('.card-popup__image');
const popupOverlay = document.querySelectorAll('.overlay');
const cardButtonSubmit = document.querySelector('.add-card-popup__button');

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
  cardButtonSubmit.setAttribute('disabled', true);
  cardButtonSubmit.classList.add('popup__button_invalid');
  cardButtonSubmit.classList.remove('popup__button_valid');
  closeAddCardPopup();
}

function openPopup(popup) {
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
  currentCardLike.classList.toggle('element__liked');
}

function setListenersForItem(element) {
  const deleteCardButton = element.querySelector('.element__delete');
  deleteCardButton.addEventListener('click', deleteCard);
  const elementLike = element.querySelector('.element__like');
  elementLike.addEventListener('click', addOrRemoveLike);
  const cardImage = element.querySelector('.element__image');
  cardImage.addEventListener('click', openCard);
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