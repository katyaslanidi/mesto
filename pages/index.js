//открыть-закрыть попап
const overlayEl = document.querySelector('.overlay');
const openPopup = document.querySelector('.profile__edit');
const closePopup = document.querySelector('.overlay__button');

openPopup.addEventListener('click', () => {
    overlayEl.classList.add('overlay_opened');
})

closePopup.addEventListener('click', () => {
    overlayEl.classList.remove('overlay_opened');
})


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

//отображается имя и работа из профиля
nameInput.value = nameProfile.textContent;
jobInput.value = jobProfile.textContent;

//редактор профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = document.getElementById("GET-name").value;
    jobProfile.textContent = document.getElementById("GET-job").value;
}
formElement.addEventListener('submit', formSubmitHandler);
