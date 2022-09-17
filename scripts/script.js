const overlayEl = document.querySelector('.overlay');
const openPopup = document.querySelector('.profile__edit');
const closePopup = document.querySelector('.overlay__button');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const saveButton = document.querySelector('.popup__button');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

function OpenPopupListener() {
    overlayEl.classList.add('overlay_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}
function ClosePopupListener(){
        overlayEl.classList.remove('overlay_opened');
}
//редактор профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = document.getElementById("GET-name").value;
    //я понимаю, что данное выражение эквивалентно записи: nameProfile.textContent = nameInput.value;
    //но я не понимаю как мне по-другому сделать замену нового имени, вызвать тут функцию OpenPopupListener?
    jobProfile.textContent = document.getElementById("GET-job").value;
    closePopup.addEventListener('click', ClosePopupListener);

}

openPopup.addEventListener('click', OpenPopupListener);
closePopup.addEventListener('click', ClosePopupListener);
formElement.addEventListener('submit', formSubmitHandler);

