/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this._url = url;
    this._headers = headers;
  }
  _createClass(Api, [{
    key: "_getResponse",
    value: function _getResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
    //получаем данные пользователя
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _this = this;
      return fetch("".concat(this._url, "/users/me"), {
        method: "GET",
        headers: this._headers
      }).then(function (res) {
        return _this._getResponse(res);
      });
    }
    //получаем карточки от сервера
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      var _this2 = this;
      return fetch("".concat(this._url, "/cards"), {
        method: "GET",
        headers: this._headers
      }).then(function (res) {
        return _this2._getResponse(res);
      });
    }
    //обновить данные пользователя
  }, {
    key: "editUserInfo",
    value: function editUserInfo(userName, userJob) {
      var _this3 = this;
      return fetch("".concat(this._url, "/users/me"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: userName,
          about: userJob
        })
      }).then(function (res) {
        return _this3._getResponse(res);
      });
    }
    //добавить карточку на сервер
  }, {
    key: "addNewCard",
    value: function addNewCard(name, link) {
      var _this4 = this;
      return fetch("".concat(this._url, "/cards"), {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return _this4._getResponse(res);
      });
    }
    //удалить карточку
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      var _this5 = this;
      return fetch("".concat(this._url, "/cards/").concat(id), {
        method: "DELETE",
        headers: this._headers
      }).then(function (res) {
        return _this5._getResponse(res);
      });
    }
    //поставить лайк
  }, {
    key: "addLikeCard",
    value: function addLikeCard(id) {
      var _this6 = this;
      return fetch("".concat(this._url, "/cards/").concat(id, "/likes"), {
        method: "PUT",
        headers: this._headers
      }).then(function (res) {
        return _this6._getResponse(res);
      });
    }
    //удалить лайк
  }, {
    key: "deleteLikeCard",
    value: function deleteLikeCard(id) {
      var _this7 = this;
      return fetch("".concat(this._url, "/cards/").concat(id, "/likes"), {
        method: "DELETE",
        headers: this._headers
      }).then(function (res) {
        return _this7._getResponse(res);
      });
    }
    //обновить фото пользователя
  }, {
    key: "editProfileImage",
    value: function editProfileImage(avatar) {
      var _this8 = this;
      return fetch("".concat(this._url, "/users/me/avatar"), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar.link
        })
      }).then(function (res) {
        return _this8._getResponse(res);
      });
    }
  }]);
  return Api;
}();


/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(data, template, handleCardClick, handleTrashClick, handleLikeClick, userId) {
    var _this = this;
    _classCallCheck(this, Card);
    _defineProperty(this, "deleteCard", function () {
      _this._newElement.remove();
      _this._newElement = null;
    });
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._owenerId = data.owner._id;
    this._userId = userId;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "createCard",
    value: function createCard() {
      this._newElement = this._getTemplate();
      this._cardText = this._newElement.querySelector('.element__text');
      this._cardImage = this._newElement.querySelector('.element__image');
      this._cardText.textContent = this._name;
      this._cardImage.alt = this._name;
      this._cardImage.src = this._link;
      this._trashButton = this._newElement.querySelector('.element__trash');
      this._likeButton = this._newElement.querySelector('.element__like');
      this._setListenersForItem();
      this.setLikesCard(this._likes);
      if (this._userId !== this._ownerId) {
        this._trashButton.remove();
        this._trashButton = null;
      }
      return this._newElement;
    }
  }, {
    key: "_activeLike",
    value: function _activeLike() {
      this._likeButton.classList.add('element__liked');
    }
  }, {
    key: "_deactiveLike",
    value: function _deactiveLike() {
      this._likeButton.classList.remove('element__liked');
    }
  }, {
    key: "alreadyLiked",
    value: function alreadyLiked() {
      var _this2 = this;
      return this._likes.some(function (userLike) {
        return userLike._id === _this2._userId;
      });
    }
  }, {
    key: "setLikesCard",
    value: function setLikesCard(newLikes) {
      this._likes = newLikes;
      var likeCounter = this._newElement.querySelector('.element__like-counter');
      if (this.alreadyLiked()) {
        this._activeLike();
      } else {
        this._deactiveLike();
      }
      likeCounter.textContent = this._likes.length;
    }
  }, {
    key: "_setListenersForItem",
    value: function _setListenersForItem() {
      var _this3 = this;
      this._likeButton.addEventListener('click', function () {
        _this3._handleLikeClick(_this3._id);
      });
      this._trashButton.addEventListener('click', function () {
        _this3._handleTrashClick(_this3._id);
      });
      this._cardImage.addEventListener('click', function () {
        _this3._handleCardClick({
          name: _this3._name,
          link: _this3._link
        });
      });
    }
  }]);
  return Card;
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, form) {
    _classCallCheck(this, FormValidator);
    this._form = form;
    this._settings = settings;
    this._currentButton = form.querySelector(this._settings.submitButtonSelector);
  }
  _createClass(FormValidator, [{
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }, {
    key: "disableButton",
    value: function disableButton(button) {
      button.setAttribute('disabled', true);
      button.classList.add(this._settings.inactiveButtonClass);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._form.addEventListener('input', function () {
        _this._validateInput(event);
      });
    }
  }, {
    key: "_validateInput",
    value: function _validateInput(event) {
      this._input = event.target;
      this._isValidField();
      this._isValidButtonAndInput();
    }
  }, {
    key: "_isValidField",
    value: function _isValidField() {
      this._errorSpan = this._form.querySelector("#".concat(this._input.id, "-error"));
      this._errorSpan.textContent = this._input.validationMessage;
    }
  }, {
    key: "_isValidButtonAndInput",
    value: function _isValidButtonAndInput() {
      if (this._form.checkValidity()) {
        this._setSubmitButton(true);
      } else {
        this._setSubmitButton(false);
      }
      if (this._input.checkValidity()) {
        this._setErrorInput(true);
      } else {
        this._setErrorInput(false);
      }
    }
  }, {
    key: "_setSubmitButton",
    value: function _setSubmitButton(state) {
      if (state) {
        this._currentButton.removeAttribute('disabled');
        this._currentButton.classList.remove(this._settings.inactiveButtonClass);
      } else {
        this.disableButton(this._currentButton);
      }
    }
  }, {
    key: "_setErrorInput",
    value: function _setErrorInput(state) {
      if (state) {
        this._input.classList.remove(this._settings.inputErrorClass);
        this._errorSpan.textContent = "";
      } else {
        this._input.classList.add(this._settings.inputErrorClass);
      }
    }
  }]);
  return FormValidator;
}();


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      document.addEventListener('keydown', this._handleEscClose);
      this._popup.classList.add('overlay_opened');
    }
  }, {
    key: "close",
    value: function close() {
      document.removeEventListener('keydown', this._handleEscClose);
      this._popup.classList.remove('overlay_opened');
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popup.addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains('overlay_opened') || evt.target.classList.contains('close-button')) {
          _this.close();
        }
      });
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupSelector, handleFormSubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._inputForm = _this._popup.querySelector('.popup__form');
    _this._inputList = _this._popup.querySelectorAll('.popup__input');
    _this._submitButton = _this._popup.querySelector('.popup__button');
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputValues = {};
      this._inputList.forEach(function (input) {
        inputValues[input.name] = input.value;
      });
      return inputValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      this._inputForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._handleFormSubmit(_this2._getInputValues());
      });
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._inputForm.reset();
    }
  }, {
    key: "rendererLoading",
    value: function rendererLoading(loading) {
      if (loading) {
        this._submitButton.textContent = "Сохранение...";
      } else {
        this._submitButton.textContent = "Сохранить";
      }
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._image = _this._popup.querySelector('.card-popup__image');
    _this._text = _this._popup.querySelector('.card-popup__text');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var name = _ref.name,
        link = _ref.link;
      this._image.src = link;
      this._image.alt = name;
      this._text.textContent = name;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithSubmit.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithSubmit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithSubmit)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithSubmit = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithSubmit, _Popup);
  var _super = _createSuper(PopupWithSubmit);
  function PopupWithSubmit(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithSubmit);
    _this = _super.call(this, popupSelector);
    _this._form = _this._popup.querySelector('.popup__form');
    _this._submitButton = _this._popup.querySelector('.popup__button');
    return _this;
  }
  _createClass(PopupWithSubmit, [{
    key: "rendererLoading",
    value: function rendererLoading(loading) {
      if (loading) {
        this._submitButton.textContent = "Удаление...";
      } else {
        this._submitButton.textContent = "Да";
      }
    }
  }, {
    key: "setSubmitHandlers",
    value: function setSubmitHandlers(submitHandlers) {
      this._handleFormSubmit = submitHandlers;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithSubmit.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._handleFormSubmit();
      });
    }
  }]);
  return PopupWithSubmit;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(renderer, containerSelector) {
    _classCallCheck(this, Section);
    // this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(item) {
      this._container.prepend(item);
    }
  }, {
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;
      items.forEach(function (item) {
        _this._container.append(_this._renderer(item));
      });
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      jobSelector = _ref.jobSelector,
      userProfileImageSelector = _ref.userProfileImageSelector;
    _classCallCheck(this, UserInfo);
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._profileImage = document.querySelector(userProfileImageSelector);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        job: this._job.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        job = _ref2.job,
        image = _ref2.image;
      this._name.textContent = name;
      this._job.textContent = job;
      this._profileImage.src = image;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/utils/cards.js":
/*!****************************!*\
  !*** ./src/utils/cards.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards)
/* harmony export */ });
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithSubmit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithSubmit.js */ "./src/components/PopupWithSubmit.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_cards_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/cards.js */ "./src/utils/cards.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var nameInput = document.querySelector('.popup__input_name');
var jobInput = document.querySelector('.popup__input_job');
var popupAddButton = document.querySelector('.profile__add');
var popupButton = document.querySelector('.profile__edit');
var imageEditButton = document.querySelector('.profile__image-edit-button');
var profileForm = document.querySelector('.popup__form');
var formAddCard = document.querySelector('.add-card-popup__form');
var profileImageForm = document.querySelector('.avatar-edit__form');
var popupSubmitButton = document.querySelector('.add-card-popup__button');
var validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_error',
  errorClass: 'error'
};
var apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: 'c41c66fe-334b-43d7-a03f-de906f681c65',
    "Content-Type": "application/json"
  }
};
var userId;
var profileValidatorEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](validationSettings, profileForm);
var cardValidatorAdd = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](validationSettings, formAddCard);
var profileImageValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](validationSettings, profileImageForm);
profileValidatorEdit.enableValidation();
cardValidatorAdd.enableValidation();
profileImageValidator.enableValidation();
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"](apiConfig);

//инициализация начальных данных
Promise.all([api.getUserInfo(), api.getInitialCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    me = _ref2[0],
    cards = _ref2[1];
  userId = me._id;
  userInfo.setUserInfo(me);
  cardsContainer.renderItems(cards);
})["catch"](function (err) {
  return console.log(err);
})["finally"](function () {});
var cardsContainer = new _components_Section_js__WEBPACK_IMPORTED_MODULE_7__["default"](function (card) {
  return createNewCard(card);
}, '.element-template');
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job',
  userProfileImageSelector: '.profile__image'
});
var openPopupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.card-popup');
openPopupImage.setEventListeners();
var popupWithSubmit = new _components_PopupWithSubmit_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.card-delete');
popupWithSubmit.setEventListeners();
var popupUserEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.profile-popup', function (data) {
  var nameInput = data.nameInput,
    jobInput = data.jobInput;
  popupUserEdit.rendererLoading(true);
  api.editUserInfo(nameInput, jobInput).then(function (data) {
    userInfo.setUserInfo(data);
    popupUserEdit.close();
  })["catch"](function (err) {
    return console.log(err);
  })["finally"](function () {
    return popupUserEdit.rendererLoading(false);
  });
});
popupUserEdit.setEventListeners();
var popupProfileImageEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.avatar-edit', function (data) {
  popupProfileImageEdit.rendererLoading(true);
  api.editProfileImage(data).then(function (formData) {
    userInfo.setUserInfo(formData);
    popupProfileImageEdit.close();
  })["catch"](function (err) {
    return console.log(err);
  })["finally"](function () {
    return popupProfileImageEdit.rendererLoading(false);
  });
});
popupProfileImageEdit.setEventListeners();
var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.add-card-popup', function (dataCard) {
  popupAddCard.rendererLoading(true);
  var name = dataCard.name,
    link = dataCard.link;
  api.addNewCard(name, link).then(function (newDataCard) {
    var card = createNewCard(newDataCard);
    cardsContainer.addItem(card);
    cardValidatorAdd.disableButton(popupSubmitButton);
    popupAddCard.close();
  })["catch"](function (err) {
    return console.log(err);
  })["finally"](function () {
    return popupAddCard.rendererLoading(false);
  });
});
popupAddCard.setEventListeners();
var createNewCard = function createNewCard(dataCard) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"](dataCard, '.element-template', function (name, link) {
    openPopupImage.open(name, link);
  }, function (id) {
    popupWithSubmit.open();
    popupWithSubmit.setSubmitHandlers(function () {
      popupWithSubmit.rendererLoading(true);
      api.deleteCard(id).then(function (res) {
        card.deleteCard(res);
        popupWithSubmit.close();
      })["catch"](function (err) {
        return console.log(err);
      })["finally"](function () {
        return popupWithSubmit.rendererLoading(false);
      });
    });
  }, function (id) {
    if (!card.alreadyLiked()) {
      api.addLikeCard(id).then(function (data) {
        card.setLikesCard(data.likes);
      })["catch"](function (err) {
        return console.log(err);
      });
    } else {
      api.deleteLikeCard(id).then(function (data) {
        card.setLikesCard(data.likes);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, userId);
  return card.createCard();
};
popupButton.addEventListener('click', function () {
  popupUserEdit._getInputValues(userInfo.getUserInfo());
  popupUserEdit.open();
});
popupAddButton.addEventListener('click', function () {
  popupAddCard.open();
});
imageEditButton.addEventListener('click', function () {
  popupProfileImageEdit.open();
});

// const cardsContainer = new Section(
//   {
//     items: initialCards,
//     renderer: (item) => {
//       const card = createCard(item);
//       cardsContainer.addItem(card);
//     },
//   },
//   ".elements"
// );

// const createCard = ({ name, link }) => {
//   const newCard = new Card({ name, link }, '.element-template', (name, link) => {
//     openPopupImage.open(name, link);
//   });
//   return newCard.createCard();
// };

// cardsContainer.renderItems();

// const popupEdit = new PopupWithForm('.profile-popup', (inputValues) => {
//   popupEdit.close();
//   userInfo.setUserInfo(inputValues);
// });
// popupEdit.setEventListeners();

// const popupAdd = new PopupWithForm('.add-card-popup', (inputValues) => {
//   const card = createCard(inputValues);
//   cardsContainer.addItem(card);
//   popupAdd.close();
//   cardValidatorAdd.disableButton(popupSubmitButton);
// })
// popupAdd.setEventListeners();

// popupButton.addEventListener('click', () => {
//   popupEdit.open();
//   nameInput.value = userInfo.getUserInfo().name;
//   jobInput.value = userInfo.getUserInfo().job;
// });

// popupAddButton.addEventListener('click', () => {
//   popupAdd.open();
// })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQy9CLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ3VKLEdBQUc7UUFBQSxPQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO01BQUEsRUFBQztJQUNyQztFQUNGLENBQUMsRUFDRC9KLE1BQU0sQ0FDUDtFQUNELE9BQU9rSyxJQUFJLENBQUMzSSxVQUFVLEVBQUU7QUFDMUIsQ0FBQztBQUVEa0gsV0FBVyxDQUFDN0YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDMUMwSCxhQUFhLENBQUN2RSxlQUFlLENBQUM4RCxRQUFRLENBQUNqTSxXQUFXLEVBQUUsQ0FBQztFQUNyRDBNLGFBQWEsQ0FBQ3pGLElBQUksRUFBRTtBQUN0QixDQUFDLENBQUM7QUFFRjJELGNBQWMsQ0FBQzVGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQzdDNkgsWUFBWSxDQUFDNUYsSUFBSSxFQUFFO0FBQ3JCLENBQUMsQ0FBQztBQUVGNkQsZUFBZSxDQUFDOUYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDOUMySCxxQkFBcUIsQ0FBQzFGLElBQUksRUFBRTtBQUM5QixDQUFDLENBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aFN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy91dGlscy9jYXJkcy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gICAgY29uc3RydWN0b3IoeyB1cmwsIGhlYWRlcnMgfSkge1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcclxuICAgIH1cclxuICAgIF9nZXRSZXNwb25zZShyZXMpIHtcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgfVxyXG4gICAgLy/Qv9C+0LvRg9GH0LDQtdC8INC00LDQvdC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L3VzZXJzL21lYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9nZXRSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuICAgIC8v0L/QvtC70YPRh9Cw0LXQvCDQutCw0YDRgtC+0YfQutC4INC+0YIg0YHQtdGA0LLQtdGA0LBcclxuICAgIGdldEluaXRpYWxDYXJkcygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gdGhpcy5fZ2V0UmVzcG9uc2UocmVzKSk7XHJcbiAgICB9XHJcbiAgICAvL9C+0LHQvdC+0LLQuNGC0Ywg0LTQsNC90L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgZWRpdFVzZXJJbmZvKHVzZXJOYW1lLCB1c2VySm9iKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB1c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgIGFib3V0OiB1c2VySm9iLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHRoaXMuX2dldFJlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG4gICAgLy/QtNC+0LHQsNCy0LjRgtGMINC60LDRgNGC0L7Rh9C60YMg0L3QsCDRgdC10YDQstC10YBcclxuICAgIGFkZE5ld0NhcmQobmFtZSwgbGluaykge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgbGluayxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9nZXRSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuICAgIC8v0YPQtNCw0LvQuNGC0Ywg0LrQsNGA0YLQvtGH0LrRg1xyXG4gICAgZGVsZXRlQ2FyZChpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzLyR7aWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9nZXRSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuICAgIC8v0L/QvtGB0YLQsNCy0LjRgtGMINC70LDQudC6XHJcbiAgICBhZGRMaWtlQ2FyZChpZCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzLyR7aWR9L2xpa2VzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB0aGlzLl9nZXRSZXNwb25zZShyZXMpKTtcclxuICAgIH1cclxuICAgIC8v0YPQtNCw0LvQuNGC0Ywg0LvQsNC50LpcclxuICAgIGRlbGV0ZUxpa2VDYXJkKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHRoaXMuX2dldFJlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG4gICAgLy/QvtCx0L3QvtCy0LjRgtGMINGE0L7RgtC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgZWRpdFByb2ZpbGVJbWFnZShhdmF0YXIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6IGF2YXRhci5saW5rLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHRoaXMuX2dldFJlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgdGVtcGxhdGUsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlVHJhc2hDbGljaywgaGFuZGxlTGlrZUNsaWNrLCB1c2VySWQpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XHJcbiAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xyXG4gICAgdGhpcy5fb3dlbmVySWQgPSBkYXRhLm93bmVyLl9pZDtcclxuICAgIHRoaXMuX3VzZXJJZCA9IHVzZXJJZDtcclxuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgICB0aGlzLl9oYW5kbGVUcmFzaENsaWNrID0gaGFuZGxlVHJhc2hDbGljaztcclxuICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcclxuICB9XHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl90ZW1wbGF0ZSlcclxuICAgICAgLmNvbnRlbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50JylcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICB9XHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX25ld0VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuX2NhcmRUZXh0ID0gdGhpcy5fbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fdGV4dCcpO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9faW1hZ2UnKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkVGV4dC50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWx0ID0gdGhpcy5fbmFtZTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xyXG5cclxuICAgIHRoaXMuX3RyYXNoQnV0dG9uID0gdGhpcy5fbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fdHJhc2gnKTtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9uZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlJyk7XHJcblxyXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzRm9ySXRlbSgpO1xyXG4gICAgdGhpcy5zZXRMaWtlc0NhcmQodGhpcy5fbGlrZXMpO1xyXG5cclxuICAgIGlmICh0aGlzLl91c2VySWQgIT09IHRoaXMuX293bmVySWQpIHtcclxuICAgICAgdGhpcy5fdHJhc2hCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMuX3RyYXNoQnV0dG9uID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbmV3RWxlbWVudDtcclxuICB9XHJcbiAgZGVsZXRlQ2FyZCA9ICgpID0+IHtcclxuICAgIHRoaXMuX25ld0VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9uZXdFbGVtZW50ID0gbnVsbDtcclxuICB9XHJcbiAgX2FjdGl2ZUxpa2UoKSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnRfX2xpa2VkJyk7XHJcbiAgfVxyXG4gIF9kZWFjdGl2ZUxpa2UoKSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2VsZW1lbnRfX2xpa2VkJyk7XHJcbiAgfVxyXG4gIGFscmVhZHlMaWtlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9saWtlcy5zb21lKCh1c2VyTGlrZSkgPT4gdXNlckxpa2UuX2lkID09PSB0aGlzLl91c2VySWQpO1xyXG4gIH1cclxuICBzZXRMaWtlc0NhcmQobmV3TGlrZXMpIHtcclxuICAgIHRoaXMuX2xpa2VzID0gbmV3TGlrZXM7XHJcbiAgICBjb25zdCBsaWtlQ291bnRlciA9IHRoaXMuX25ld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UtY291bnRlcicpO1xyXG4gICAgaWYgKHRoaXMuYWxyZWFkeUxpa2VkKCkpIHtcclxuICAgICAgdGhpcy5fYWN0aXZlTGlrZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZGVhY3RpdmVMaWtlKCk7XHJcbiAgICB9XHJcbiAgICBsaWtlQ291bnRlci50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcclxuICB9XHJcbiAgX3NldExpc3RlbmVyc0Zvckl0ZW0oKSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcy5faWQpO1xyXG4gICAgfSlcclxuICAgIHRoaXMuX3RyYXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVUcmFzaENsaWNrKHRoaXMuX2lkKTtcclxuICAgIH0pXHJcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh7IG5hbWU6IHRoaXMuX25hbWUsIGxpbms6IHRoaXMuX2xpbmsgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm07XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9jdXJyZW50QnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3NldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICAgIH1cclxuICAgIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uKSB7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH1cclxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0ZUlucHV0KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF92YWxpZGF0ZUlucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5faXNWYWxpZEZpZWxkKCk7XHJcbiAgICAgICAgdGhpcy5faXNWYWxpZEJ1dHRvbkFuZElucHV0KCk7XHJcbiAgICB9XHJcbiAgICBfaXNWYWxpZEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMuX2Vycm9yU3BhbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5faW5wdXQuaWR9LWVycm9yYCk7XHJcbiAgICAgICAgdGhpcy5fZXJyb3JTcGFuLnRleHRDb250ZW50ID0gdGhpcy5faW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBfaXNWYWxpZEJ1dHRvbkFuZElucHV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9mb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRTdWJtaXRCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0U3VibWl0QnV0dG9uKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZiAodGhpcy5faW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEVycm9ySW5wdXQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0RXJyb3JJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3NldFN1Ym1pdEJ1dHRvbihzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbih0aGlzLl9jdXJyZW50QnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfc2V0RXJyb3JJbnB1dChzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yU3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheV9vcGVuZWQnKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheV9vcGVuZWQnKTtcclxuICAgIH1cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5X29wZW5lZCcpIFxyXG4gICAgICAgICAgICB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtYnV0dG9uJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XHJcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICAgICAgdGhpcy5faW5wdXRGb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19pbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fYnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XHJcbiAgICB9XHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9pbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2lucHV0Rm9ybS5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyZXJMb2FkaW5nKGxvYWRpbmcpIHtcclxuICAgICAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcItCh0L7RhdGA0LDQvdC10L3QuNC1Li4uXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCLQodC+0YXRgNCw0L3QuNGC0YxcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wb3B1cF9faW1hZ2UnKTtcclxuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLmNhcmQtcG9wdXBfX3RleHQnKTtcclxuICAgIH1cclxuICAgIG9wZW4oe25hbWUsIGxpbmt9KSB7XHJcbiAgICAgICAgdGhpcy5faW1hZ2Uuc3JjID0gbGluaztcclxuICAgICAgICB0aGlzLl9pbWFnZS5hbHQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3RleHQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIH1cclxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoU3VibWl0IGV4dGVuZHMgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2J1dHRvbicpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyZXJMb2FkaW5nKGxvYWRpbmcpIHtcclxuICAgICAgICBpZihsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi0KPQtNCw0LvQtdC90LjQtS4uLlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi0JTQsFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFN1Ym1pdEhhbmRsZXJzKHN1Ym1pdEhhbmRsZXJzKSB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IHN1Ym1pdEhhbmRsZXJzO1xyXG4gICAgfVxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgY29udGFpbmVyU2VsZWN0b3IpIHsgXHJcbiAgICAgICAgLy8gdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKHRoaXMuX3JlbmRlcmVyKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBqb2JTZWxlY3RvciwgdXNlclByb2ZpbGVJbWFnZVNlbGVjdG9yIH0pIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2pvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX3Byb2ZpbGVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlclByb2ZpbGVJbWFnZVNlbGVjdG9yKTtcclxuICAgIH1cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIGpvYjogdGhpcy5fam9iLnRleHRDb250ZW50XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldFVzZXJJbmZvKHtuYW1lLCBqb2IsIGltYWdlfSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2pvYi50ZXh0Q29udGVudCA9IGpvYjtcclxuICAgICAgICB0aGlzLl9wcm9maWxlSW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICfQkNGA0YXRi9C3JyxcclxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvY2hlbHlhYmluc2stb2JsYXN0LmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQmNCy0LDQvdC+0LLQvicsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2l2YW5vdm8uanBnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ9Ca0LDQvNGH0LDRgtC60LAnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ9Cl0L7Qu9C80L7Qs9C+0YDRgdC60LjQuSDRgNCw0LnQvtC9JyxcclxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2hvbG1vZ29yc2t5LXJheW9uLmpwZydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICfQkdCw0LnQutCw0LsnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9iYWlrYWwuanBnJ1xyXG4gIH1cclxuXTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vY29tcG9uZW50cy9BcGkuanMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQuanMnO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyc7XHJcbmltcG9ydCBQb3B1cFdpdGhTdWJtaXQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhTdWJtaXQuanMnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7XHJcbmltcG9ydCB7IGluaXRpYWxDYXJkcyB9IGZyb20gJy4uL3V0aWxzL2NhcmRzLmpzJztcclxuXHJcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW5wdXRfbmFtZScpO1xyXG5jb25zdCBqb2JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW5wdXRfam9iJyk7XHJcbmNvbnN0IHBvcHVwQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2FkZCcpO1xyXG5jb25zdCBwb3B1cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0Jyk7XHJcbmNvbnN0IGltYWdlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19pbWFnZS1lZGl0LWJ1dHRvbicpO1xyXG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG5jb25zdCBmb3JtQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtY2FyZC1wb3B1cF9fZm9ybScpO1xyXG5jb25zdCBwcm9maWxlSW1hZ2VGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF2YXRhci1lZGl0X19mb3JtJyk7XHJcbmNvbnN0IHBvcHVwU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1jYXJkLXBvcHVwX19idXR0b24nKTtcclxuY29uc3QgdmFsaWRhdGlvblNldHRpbmdzID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXHJcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19idXR0b24nLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fYnV0dG9uX2ludmFsaWQnLFxyXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF9lcnJvcicsXHJcbiAgZXJyb3JDbGFzczogJ2Vycm9yJ1xyXG59O1xyXG5jb25zdCBhcGlDb25maWcgPSB7XHJcbiAgdXJsOiAnaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC02MicsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogJ2M0MWM2NmZlLTMzNGItNDNkNy1hMDNmLWRlOTA2ZjY4MWM2NScsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59O1xyXG5sZXQgdXNlcklkO1xyXG5cclxuY29uc3QgcHJvZmlsZVZhbGlkYXRvckVkaXQgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIHByb2ZpbGVGb3JtKTtcclxuY29uc3QgY2FyZFZhbGlkYXRvckFkZCA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25TZXR0aW5ncywgZm9ybUFkZENhcmQpO1xyXG5jb25zdCBwcm9maWxlSW1hZ2VWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIHByb2ZpbGVJbWFnZUZvcm0pO1xyXG5cclxucHJvZmlsZVZhbGlkYXRvckVkaXQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5jYXJkVmFsaWRhdG9yQWRkLmVuYWJsZVZhbGlkYXRpb24oKTtcclxucHJvZmlsZUltYWdlVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGkoYXBpQ29uZmlnKTtcclxuXHJcbi8v0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L3QsNGH0LDQu9GM0L3Ri9GFINC00LDQvdC90YvRhVxyXG5Qcm9taXNlLmFsbChbYXBpLmdldFVzZXJJbmZvKCksIGFwaS5nZXRJbml0aWFsQ2FyZHMoKV0pXHJcbiAgLnRoZW4oKFttZSwgY2FyZHNdKSA9PiB7XHJcbiAgICB1c2VySWQgPSBtZS5faWQ7XHJcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhtZSk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5yZW5kZXJJdGVtcyhjYXJkcyk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAuZmluYWxseSgoKSA9PiB7fSk7XHJcblxyXG5jb25zdCBjYXJkc0NvbnRhaW5lciA9IG5ldyBTZWN0aW9uKFxyXG4gIChjYXJkKSA9PiBjcmVhdGVOZXdDYXJkKGNhcmQpLFxyXG4gICcuZWxlbWVudC10ZW1wbGF0ZSdcclxuKTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lU2VsZWN0b3I6ICcucHJvZmlsZV9fbmFtZScsXHJcbiAgam9iU2VsZWN0b3I6ICcucHJvZmlsZV9fam9iJyxcclxuICB1c2VyUHJvZmlsZUltYWdlU2VsZWN0b3I6ICcucHJvZmlsZV9faW1hZ2UnXHJcbn0pO1xyXG5cclxuY29uc3Qgb3BlblBvcHVwSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5jYXJkLXBvcHVwJyk7XHJcbm9wZW5Qb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwb3B1cFdpdGhTdWJtaXQgPSBuZXcgUG9wdXBXaXRoU3VibWl0KCcuY2FyZC1kZWxldGUnKTtcclxucG9wdXBXaXRoU3VibWl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwb3B1cFVzZXJFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0oJy5wcm9maWxlLXBvcHVwJywgKGRhdGEpID0+IHtcclxuICBjb25zdCB7bmFtZUlucHV0LCBqb2JJbnB1dH0gPSBkYXRhO1xyXG4gIHBvcHVwVXNlckVkaXQucmVuZGVyZXJMb2FkaW5nKHRydWUpO1xyXG4gIGFwaVxyXG4gICAgLmVkaXRVc2VySW5mbyhuYW1lSW5wdXQsIGpvYklucHV0KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YSk7XHJcbiAgICAgIHBvcHVwVXNlckVkaXQuY2xvc2UoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIC5maW5hbGx5KCgpID0+IHBvcHVwVXNlckVkaXQucmVuZGVyZXJMb2FkaW5nKGZhbHNlKSk7XHJcbn0pO1xyXG5wb3B1cFVzZXJFZGl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwb3B1cFByb2ZpbGVJbWFnZUVkaXQgPSBuZXcgUG9wdXBXaXRoRm9ybSgnLmF2YXRhci1lZGl0JywgKGRhdGEpID0+IHtcclxuICBwb3B1cFByb2ZpbGVJbWFnZUVkaXQucmVuZGVyZXJMb2FkaW5nKHRydWUpO1xyXG4gIGFwaVxyXG4gICAgLmVkaXRQcm9maWxlSW1hZ2UoZGF0YSlcclxuICAgIC50aGVuKChmb3JtRGF0YSkgPT4ge1xyXG4gICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhmb3JtRGF0YSk7XHJcbiAgICAgIHBvcHVwUHJvZmlsZUltYWdlRWRpdC5jbG9zZSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgLmZpbmFsbHkoKCkgPT4gcG9wdXBQcm9maWxlSW1hZ2VFZGl0LnJlbmRlcmVyTG9hZGluZyhmYWxzZSkpO1xyXG59KTtcclxucG9wdXBQcm9maWxlSW1hZ2VFZGl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwb3B1cEFkZENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybSgnLmFkZC1jYXJkLXBvcHVwJywgKGRhdGFDYXJkKSA9PiB7XHJcbiAgcG9wdXBBZGRDYXJkLnJlbmRlcmVyTG9hZGluZyh0cnVlKTtcclxuICBjb25zdCB7bmFtZSwgbGlua30gPSBkYXRhQ2FyZDtcclxuICBhcGlcclxuICAgIC5hZGROZXdDYXJkKG5hbWUsIGxpbmspXHJcbiAgICAudGhlbigobmV3RGF0YUNhcmQpID0+IHtcclxuICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZU5ld0NhcmQobmV3RGF0YUNhcmQpO1xyXG4gICAgICBjYXJkc0NvbnRhaW5lci5hZGRJdGVtKGNhcmQpO1xyXG4gICAgICBjYXJkVmFsaWRhdG9yQWRkLmRpc2FibGVCdXR0b24ocG9wdXBTdWJtaXRCdXR0b24pO1xyXG4gICAgICBwb3B1cEFkZENhcmQuY2xvc2UoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIC5maW5hbGx5KCgpID0+IHBvcHVwQWRkQ2FyZC5yZW5kZXJlckxvYWRpbmcoZmFsc2UpKTtcclxufSk7XHJcbnBvcHVwQWRkQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgY3JlYXRlTmV3Q2FyZCA9IChkYXRhQ2FyZCkgPT4ge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChcclxuICAgIGRhdGFDYXJkLFxyXG4gICAgJy5lbGVtZW50LXRlbXBsYXRlJyxcclxuICAgIChuYW1lLCBsaW5rKSA9PiB7XHJcbiAgICAgIG9wZW5Qb3B1cEltYWdlLm9wZW4obmFtZSwgbGluayk7XHJcbiAgICB9LFxyXG4gICAgKGlkKSA9PiB7XHJcbiAgICAgIHBvcHVwV2l0aFN1Ym1pdC5vcGVuKCk7XHJcbiAgICAgIHBvcHVwV2l0aFN1Ym1pdC5zZXRTdWJtaXRIYW5kbGVycygoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBXaXRoU3VibWl0LnJlbmRlcmVyTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBhcGlcclxuICAgICAgICAgIC5kZWxldGVDYXJkKGlkKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLmRlbGV0ZUNhcmQocmVzKTtcclxuICAgICAgICAgICAgcG9wdXBXaXRoU3VibWl0LmNsb3NlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgICAuZmluYWxseSgoKSA9PiBwb3B1cFdpdGhTdWJtaXQucmVuZGVyZXJMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIChpZCkgPT4ge1xyXG4gICAgICBpZiAoIWNhcmQuYWxyZWFkeUxpa2VkKCkpIHtcclxuICAgICAgICBhcGlcclxuICAgICAgICAgIC5hZGRMaWtlQ2FyZChpZClcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0TGlrZXNDYXJkKGRhdGEubGlrZXMpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhcGlcclxuICAgICAgICAgIC5kZWxldGVMaWtlQ2FyZChpZClcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0TGlrZXNDYXJkKGRhdGEubGlrZXMpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXJJZFxyXG4gICk7XHJcbiAgcmV0dXJuIGNhcmQuY3JlYXRlQ2FyZCgpXHJcbn07XHJcblxyXG5wb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cFVzZXJFZGl0Ll9nZXRJbnB1dFZhbHVlcyh1c2VySW5mby5nZXRVc2VySW5mbygpKTtcclxuICBwb3B1cFVzZXJFZGl0Lm9wZW4oKTtcclxufSk7XHJcblxyXG5wb3B1cEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cEFkZENhcmQub3BlbigpO1xyXG59KTtcclxuXHJcbmltYWdlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cFByb2ZpbGVJbWFnZUVkaXQub3BlbigpO1xyXG59KVxyXG5cclxuLy8gY29uc3QgY2FyZHNDb250YWluZXIgPSBuZXcgU2VjdGlvbihcclxuLy8gICB7XHJcbi8vICAgICBpdGVtczogaW5pdGlhbENhcmRzLFxyXG4vLyAgICAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XHJcbi8vICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGl0ZW0pO1xyXG4vLyAgICAgICBjYXJkc0NvbnRhaW5lci5hZGRJdGVtKGNhcmQpO1xyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyAgIFwiLmVsZW1lbnRzXCJcclxuLy8gKTtcclxuXHJcbi8vIGNvbnN0IGNyZWF0ZUNhcmQgPSAoeyBuYW1lLCBsaW5rIH0pID0+IHtcclxuLy8gICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoeyBuYW1lLCBsaW5rIH0sICcuZWxlbWVudC10ZW1wbGF0ZScsIChuYW1lLCBsaW5rKSA9PiB7XHJcbi8vICAgICBvcGVuUG9wdXBJbWFnZS5vcGVuKG5hbWUsIGxpbmspO1xyXG4vLyAgIH0pO1xyXG4vLyAgIHJldHVybiBuZXdDYXJkLmNyZWF0ZUNhcmQoKTtcclxuLy8gfTtcclxuXHJcbi8vIGNhcmRzQ29udGFpbmVyLnJlbmRlckl0ZW1zKCk7XHJcblxyXG4vLyBjb25zdCBwb3B1cEVkaXQgPSBuZXcgUG9wdXBXaXRoRm9ybSgnLnByb2ZpbGUtcG9wdXAnLCAoaW5wdXRWYWx1ZXMpID0+IHtcclxuLy8gICBwb3B1cEVkaXQuY2xvc2UoKTtcclxuLy8gICB1c2VySW5mby5zZXRVc2VySW5mbyhpbnB1dFZhbHVlcyk7XHJcbi8vIH0pO1xyXG4vLyBwb3B1cEVkaXQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vIGNvbnN0IHBvcHVwQWRkID0gbmV3IFBvcHVwV2l0aEZvcm0oJy5hZGQtY2FyZC1wb3B1cCcsIChpbnB1dFZhbHVlcykgPT4ge1xyXG4vLyAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGlucHV0VmFsdWVzKTtcclxuLy8gICBjYXJkc0NvbnRhaW5lci5hZGRJdGVtKGNhcmQpO1xyXG4vLyAgIHBvcHVwQWRkLmNsb3NlKCk7XHJcbi8vICAgY2FyZFZhbGlkYXRvckFkZC5kaXNhYmxlQnV0dG9uKHBvcHVwU3VibWl0QnV0dG9uKTtcclxuLy8gfSlcclxuLy8gcG9wdXBBZGQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcblxyXG4vLyBwb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICBwb3B1cEVkaXQub3BlbigpO1xyXG4vLyAgIG5hbWVJbnB1dC52YWx1ZSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCkubmFtZTtcclxuLy8gICBqb2JJbnB1dC52YWx1ZSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCkuam9iO1xyXG4vLyB9KTtcclxuXHJcbi8vIHBvcHVwQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIHBvcHVwQWRkLm9wZW4oKTtcclxuLy8gfSkiXSwibmFtZXMiOlsiQXBpIiwiX3JlZiIsInVybCIsImhlYWRlcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfdXJsIiwiX2hlYWRlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9nZXRSZXNwb25zZSIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJjb25jYXQiLCJzdGF0dXMiLCJnZXRVc2VySW5mbyIsIl90aGlzIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwiZ2V0SW5pdGlhbENhcmRzIiwiX3RoaXMyIiwiZWRpdFVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VySm9iIiwiX3RoaXMzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiYWJvdXQiLCJhZGROZXdDYXJkIiwibGluayIsIl90aGlzNCIsImRlbGV0ZUNhcmQiLCJpZCIsIl90aGlzNSIsImFkZExpa2VDYXJkIiwiX3RoaXM2IiwiZGVsZXRlTGlrZUNhcmQiLCJfdGhpczciLCJlZGl0UHJvZmlsZUltYWdlIiwiYXZhdGFyIiwiX3RoaXM4IiwiZGVmYXVsdCIsIkNhcmQiLCJkYXRhIiwidGVtcGxhdGUiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVUcmFzaENsaWNrIiwiaGFuZGxlTGlrZUNsaWNrIiwidXNlcklkIiwiX2RlZmluZVByb3BlcnR5IiwiX25ld0VsZW1lbnQiLCJyZW1vdmUiLCJfZGF0YSIsIl9uYW1lIiwiX2xpbmsiLCJfbGlrZXMiLCJsaWtlcyIsIl9pZCIsIl9vd2VuZXJJZCIsIm93bmVyIiwiX3VzZXJJZCIsIl90ZW1wbGF0ZSIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlVHJhc2hDbGljayIsIl9oYW5kbGVMaWtlQ2xpY2siLCJfZ2V0VGVtcGxhdGUiLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJjcmVhdGVDYXJkIiwiX2NhcmRUZXh0IiwiX2NhcmRJbWFnZSIsInRleHRDb250ZW50IiwiYWx0Iiwic3JjIiwiX3RyYXNoQnV0dG9uIiwiX2xpa2VCdXR0b24iLCJfc2V0TGlzdGVuZXJzRm9ySXRlbSIsInNldExpa2VzQ2FyZCIsIl9vd25lcklkIiwiX2FjdGl2ZUxpa2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJfZGVhY3RpdmVMaWtlIiwiYWxyZWFkeUxpa2VkIiwic29tZSIsInVzZXJMaWtlIiwibmV3TGlrZXMiLCJsaWtlQ291bnRlciIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtIiwiX2Zvcm0iLCJfc2V0dGluZ3MiLCJfY3VycmVudEJ1dHRvbiIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsIl9zZXRFdmVudExpc3RlbmVycyIsImRpc2FibGVCdXR0b24iLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX3ZhbGlkYXRlSW5wdXQiLCJldmVudCIsIl9pbnB1dCIsInRhcmdldCIsIl9pc1ZhbGlkRmllbGQiLCJfaXNWYWxpZEJ1dHRvbkFuZElucHV0IiwiX2Vycm9yU3BhbiIsInZhbGlkYXRpb25NZXNzYWdlIiwiY2hlY2tWYWxpZGl0eSIsIl9zZXRTdWJtaXRCdXR0b24iLCJfc2V0RXJyb3JJbnB1dCIsInN0YXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5wdXRFcnJvckNsYXNzIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIm9wZW4iLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRFdmVudExpc3RlbmVycyIsImV2dCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsIl9Qb3B1cCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImhhbmRsZUZvcm1TdWJtaXQiLCJjYWxsIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfaW5wdXRGb3JtIiwiX2lucHV0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc3VibWl0QnV0dG9uIiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRWYWx1ZXMiLCJmb3JFYWNoIiwiaW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJyZXNldCIsInJlbmRlcmVyTG9hZGluZyIsImxvYWRpbmciLCJQb3B1cFdpdGhJbWFnZSIsIl9pbWFnZSIsIl90ZXh0IiwiUG9wdXBXaXRoU3VibWl0Iiwic2V0U3VibWl0SGFuZGxlcnMiLCJzdWJtaXRIYW5kbGVycyIsIlNlY3Rpb24iLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImFkZEl0ZW0iLCJpdGVtIiwicHJlcGVuZCIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJhcHBlbmQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwidXNlclByb2ZpbGVJbWFnZVNlbGVjdG9yIiwiX2pvYiIsIl9wcm9maWxlSW1hZ2UiLCJqb2IiLCJzZXRVc2VySW5mbyIsIl9yZWYyIiwiaW1hZ2UiLCJpbml0aWFsQ2FyZHMiLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsInBvcHVwQWRkQnV0dG9uIiwicG9wdXBCdXR0b24iLCJpbWFnZUVkaXRCdXR0b24iLCJwcm9maWxlRm9ybSIsImZvcm1BZGRDYXJkIiwicHJvZmlsZUltYWdlRm9ybSIsInBvcHVwU3VibWl0QnV0dG9uIiwidmFsaWRhdGlvblNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsImVycm9yQ2xhc3MiLCJhcGlDb25maWciLCJhdXRob3JpemF0aW9uIiwicHJvZmlsZVZhbGlkYXRvckVkaXQiLCJjYXJkVmFsaWRhdG9yQWRkIiwicHJvZmlsZUltYWdlVmFsaWRhdG9yIiwiYXBpIiwiYWxsIiwiX3NsaWNlZFRvQXJyYXkiLCJtZSIsImNhcmRzIiwidXNlckluZm8iLCJjYXJkc0NvbnRhaW5lciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjYXJkIiwiY3JlYXRlTmV3Q2FyZCIsIm9wZW5Qb3B1cEltYWdlIiwicG9wdXBXaXRoU3VibWl0IiwicG9wdXBVc2VyRWRpdCIsInBvcHVwUHJvZmlsZUltYWdlRWRpdCIsImZvcm1EYXRhIiwicG9wdXBBZGRDYXJkIiwiZGF0YUNhcmQiLCJuZXdEYXRhQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=