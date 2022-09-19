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