export default class Api {
    constructor({ url, headers}) {
        this._url = url;
        this._headers = headers;
    }
    _getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    //получаем карточки от сервера
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
        })
        .then((res) => this._getResponse(res));
    }
    //добавить карточку на сервер
    addNewCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link,
            }),
        })
        .then((res) => this._getResponse(res));
    }
    //удалить карточку
    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then((res) => this._getResponse(res));
    }
    //поставить лайк
    addLikeCard(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
        .then((res) => this._getResponse(res));
    }
    //удалить лайк
    deleteLikeCard(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then((res) => this._getResponse(res));
    }

    //получаем данные пользователя
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
        })
        .then((res) => this._getResponse(res));
    }
    //обновить фото пользователя
    editProfileImage(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar.link,
            }),
        })
        .then((res) => this._getResponse(res));
    }
}